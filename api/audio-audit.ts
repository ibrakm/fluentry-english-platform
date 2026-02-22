/**
 * /api/audio-audit
 *
 * Receives a base64-encoded audio recording from the frontend.
 * 1. Transcribes the audio using OpenAI Whisper (if key available)
 * 2. Scores the pronunciation using Perplexity AI
 * 3. Saves the full result to Google Sheets via webhook
 * 4. Returns the score + coach note to the frontend
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const GOOGLE_SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbzhG3jRJnkgYlr9Cvuzu94zhfOKF9TzPYOztESLVb5ToSa2lWU6cGuzADxIM6PGkj41cg/exec";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, whatsapp, ageGroup, level, sentence, audioBase64, mimeType } = req.body;

    if (!name || !whatsapp || !audioBase64 || !sentence) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // ── Step 1: Transcribe with Whisper ──────────────────────────────────────
    let transcript = "";
    let transcriptionError = false;

    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey) {
      try {
        const openaiClient = new OpenAI({ apiKey: openaiKey });
        const audioBuffer = Buffer.from(audioBase64, "base64");
        const audioMime = mimeType || "audio/webm";
        const extension = audioMime.includes("mp4") ? "mp4" : audioMime.includes("ogg") ? "ogg" : "webm";
        const audioFile = new File([audioBuffer], `recording.${extension}`, { type: audioMime });

        const transcriptionResponse = await openaiClient.audio.transcriptions.create({
          file: audioFile,
          model: "whisper-1",
          language: "en",
          prompt: `The student is reading this passage: "${sentence.substring(0, 100)}". Transcribe exactly what they said.`,
        });

        transcript = transcriptionResponse.text;
      } catch (err) {
        console.error("Whisper transcription error:", err);
        transcriptionError = true;
        transcript = "[Transcription unavailable]";
      }
    } else {
      transcriptionError = true;
      transcript = "[Transcription unavailable — no OpenAI key]";
    }

    // ── Step 2: Score with Perplexity ─────────────────────────────────────────
    let score = 0;
    let coachNote = "";
    let strengths = "";
    let improvements = "";

    const pplxKey = process.env.PERPLEXITY_API_KEY;
    if (pplxKey) {
      try {
        const perplexityClient = new OpenAI({
          apiKey: pplxKey,
          baseURL: "https://api.perplexity.ai",
        });

        const scoringPrompt = `You are an expert English pronunciation coach specializing in helping Moroccan Arabic and French speakers improve their English.

A student (Level: ${level}) was asked to read this passage aloud:
"${sentence.substring(0, 300)}..."

Their speech was transcribed as:
"${transcript}"

Please evaluate their pronunciation and fluency. Consider:
- How accurately they read the passage (missing words, added words, substitutions)
- Common Moroccan pronunciation challenges (P vs B, TH sounds, silent letters, word stress, French influence)
- Fluency and naturalness

Respond ONLY with a valid JSON object in this exact format (no extra text, no markdown):
{"score": <number 1-10>, "strengths": "<one short sentence>", "improvements": "<one or two specific issues>", "coachNote": "<warm encouraging 2-3 sentence WhatsApp note from the coach>"}

If transcript is empty or unavailable, give score 5 and provide general advice based on the level.`;

        const pplxResponse = await perplexityClient.chat.completions.create({
          model: "llama-3.1-sonar-small-128k-online",
          messages: [{ role: "user", content: scoringPrompt }],
          temperature: 0.2,
        });

        const rawContent = pplxResponse.choices[0].message.content || "{}";
        const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
        const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : {};
        score = typeof parsed.score === "number" ? Math.min(10, Math.max(1, parsed.score)) : 5;
        strengths = parsed.strengths || "Good effort completing the test!";
        improvements = parsed.improvements || "Continue practising reading aloud daily.";
        coachNote = parsed.coachNote || "Great job completing the audio audit! I will review your recording and send you personal feedback on WhatsApp.";
      } catch (err) {
        console.error("Perplexity scoring error:", err);
        score = 5;
        coachNote = "Your audio was received. The coach will review it manually and send you feedback on WhatsApp within 24 hours.";
        strengths = "Completed the audio test";
        improvements = "To be reviewed by coach";
      }
    } else {
      score = 5;
      coachNote = "Your audio was received. The coach will review it and send you personal feedback on WhatsApp within 24 hours.";
      strengths = "Completed the audio test";
      improvements = "To be reviewed by coach";
    }

    // ── Step 3: Save to Google Sheet ──────────────────────────────────────────
    const sheetPayload = {
      name,
      whatsapp,
      ageGroup: ageGroup || "N/A",
      source: "Audio Audit",
      level,
      score: `${score}/10`,
      testType: "Audio Pronunciation Audit",
      sentence: sentence.substring(0, 200),
      transcript,
      strengths,
      improvements,
      coachNote,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetPayload),
      });
    } catch (err) {
      console.error("Google Sheet webhook error:", err);
    }

    // ── Step 4: Return result to frontend ─────────────────────────────────────
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
    return res.status(500).json({
      success: false,
      error: "Internal server error. Please try again.",
    });
  }
}
