/**
 * /api/audio-audit — Secure, hardened version
 *
 * Security measures:
 * - Strict CORS (only Fluentry domains)
 * - Input sanitization (strip HTML/control chars)
 * - Payload size limit (10mb for audio)
 * - Field whitelisting (no raw body spread)
 * - Graceful fallback if AI keys are missing
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const GOOGLE_SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbzhG3jRJnkgYlr9Cvuzu94zhfOKF9TzPYOztESLVb5ToSa2lWU6cGuzADxIM6PGkj41cg/exec";

const ALLOWED_ORIGINS = [
  "https://fluentry-english-platform.vercel.app",
  "https://fluentry.com",
  "https://www.fluentry.com",
];

const ALLOWED_LEVELS = [
  "A2 — Beginner",
  "B1 — Intermediate",
  "B2 — Upper Intermediate",
  "C1 — Advanced",
];

const ALLOWED_AGE_GROUPS = ["15–20", "20–25", "25–30", "30+"];

function sanitize(value: unknown, maxLength = 200): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[<>"'`]/g, "")
    .replace(/[\x00-\x1F\x7F]/g, "")
    .trim()
    .substring(0, maxLength);
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // ── Strict CORS ───────────────────────────────────────────────────────────
  const origin = req.headers.origin || "";
  const corsOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  res.setHeader("Access-Control-Allow-Origin", corsOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = req.body;
    if (!body || typeof body !== "object") {
      return res.status(400).json({ error: "Invalid request body" });
    }

    // ── Sanitize all inputs ───────────────────────────────────────────────────
    const name = sanitize(body.name, 100);
    const whatsapp = sanitize(body.whatsapp, 30);
    const rawAgeGroup = sanitize(body.ageGroup, 10);
    const rawLevel = sanitize(body.level, 50);
    const sentence = sanitize(body.sentence, 1000);
    const audioBase64 = typeof body.audioBase64 === "string" ? body.audioBase64 : "";
    const mimeType = sanitize(body.mimeType, 50);

    if (!name || !whatsapp || !audioBase64 || !sentence) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate against whitelists
    const level = ALLOWED_LEVELS.includes(rawLevel) ? rawLevel : "Unknown Level";
    const ageGroup = ALLOWED_AGE_GROUPS.includes(rawAgeGroup) ? rawAgeGroup : rawAgeGroup || "N/A";

    // Validate base64 (rough check — must be alphanumeric + /+=)
    if (!/^[A-Za-z0-9+/=]+$/.test(audioBase64.substring(0, 100))) {
      return res.status(400).json({ error: "Invalid audio data" });
    }

    // ── Step 1: Transcribe with Whisper ──────────────────────────────────────
    let transcript = "";
    let transcriptionError = false;

    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey) {
      try {
        const openaiClient = new OpenAI({ apiKey: openaiKey });
        const audioBuffer = Buffer.from(audioBase64, "base64");
        const safeExtension = mimeType.includes("mp4") ? "mp4" : mimeType.includes("ogg") ? "ogg" : "webm";
        const safeMime = ["audio/webm", "audio/mp4", "audio/ogg", "audio/mpeg"].includes(mimeType)
          ? mimeType
          : "audio/webm";
        const audioFile = new File([audioBuffer], `recording.${safeExtension}`, { type: safeMime });

        const transcriptionResponse = await openaiClient.audio.transcriptions.create({
          file: audioFile,
          model: "whisper-1",
          language: "en",
          prompt: `The student is reading this passage: "${sentence.substring(0, 100)}". Transcribe exactly what they said.`,
        });

        transcript = transcriptionResponse.text;
      } catch (err) {
        console.error("Whisper error:", err);
        transcriptionError = true;
        transcript = "[Transcription unavailable]";
      }
    } else {
      transcriptionError = true;
      transcript = "[Transcription unavailable — no OpenAI key configured]";
    }

    // ── Step 2: Score with Perplexity ─────────────────────────────────────────
    let score = 5;
    let coachNote = "Your audio was received. The coach will review it and send you personal feedback on WhatsApp within 24 hours.";
    let strengths = "Completed the audio test";
    let improvements = "To be reviewed by coach";

    const pplxKey = process.env.PERPLEXITY_API_KEY;
    if (pplxKey) {
      try {
        const perplexityClient = new OpenAI({
          apiKey: pplxKey,
          baseURL: "https://api.perplexity.ai",
        });

        const scoringPrompt = `You are an expert English pronunciation coach for Moroccan learners.

A student (Level: ${level}) read this passage:
"${sentence.substring(0, 300)}"

Whisper transcription of their speech:
"${transcript}"

Evaluate pronunciation and fluency. Consider Moroccan-specific challenges: P vs B confusion, TH sounds, silent letters, French influence on stress patterns.

Respond ONLY with valid JSON (no markdown, no extra text):
{"score": <1-10>, "strengths": "<one sentence>", "improvements": "<one or two specific issues>", "coachNote": "<warm 2-3 sentence WhatsApp note from coach>"}

If transcript is unavailable, give score 5 and general advice for the level.`;

        const pplxResponse = await perplexityClient.chat.completions.create({
          model: "llama-3.1-sonar-small-128k-online",
          messages: [{ role: "user", content: scoringPrompt }],
          temperature: 0.2,
        });

        const rawContent = pplxResponse.choices[0].message.content || "{}";
        const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
        const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
        score = typeof parsed.score === "number" ? Math.min(10, Math.max(1, Math.round(parsed.score))) : 5;
        strengths = sanitize(parsed.strengths, 300) || "Good effort!";
        improvements = sanitize(parsed.improvements, 300) || "Keep practising daily.";
        coachNote = sanitize(parsed.coachNote, 500) || coachNote;
      } catch (err) {
        console.error("Perplexity scoring error:", err);
        // Keep defaults set above
      }
    }

    // ── Step 3: Save to Google Sheet (best-effort) ────────────────────────────
    const safePayload = {
      name,
      whatsapp,
      ageGroup,
      source: "Audio Audit",
      level,
      score: `${score}/10`,
      testType: "Audio Pronunciation Audit",
      sentence: sentence.substring(0, 200),
      transcript: transcript.substring(0, 500),
      strengths,
      improvements,
      coachNote,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(safePayload),
      });
    } catch (err) {
      console.error("Google Sheet webhook error:", err);
    }

    // ── Step 4: Return result ─────────────────────────────────────────────────
    return res.status(200).json({
      success: true,
      score,
      transcript,
      strengths,
      improvements,
      coachNote,
      transcriptionError,
    });
  } catch (error) {
    console.error("audio-audit handler error:", error);
    return res.status(500).json({ success: false, error: "Internal server error. Please try again." });
  }
}
