/**
 * api/ai-chat.ts
 * Uses Google Gemini 1.5 Flash — FREE tier (1,500 requests/day, no credit card)
 * Get your free key at: https://aistudio.google.com/app/apikey
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

const rateLimiter = new Map<string, { count: number; resetAt: number }>();
const MAX_MESSAGES_PER_HOUR = 20;

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimiter.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimiter.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= MAX_MESSAGES_PER_HOUR) return false;
  entry.count++;
  return true;
}

const SYSTEM_PROMPT = `You are Fluent, a friendly AI English coach for Fluentry (fluentry.com), a premium English coaching platform for Moroccan students. Your human coach is Mr. Ibrahim, a native English speaker.

Your role:
- Help Moroccan students practise English conversation
- Gently correct grammar and vocabulary mistakes (explain WHY it is wrong)
- Be encouraging, warm, and culturally aware of Moroccan context
- Keep responses SHORT (2-4 sentences max) to feel like real chat
- Use simple, clear English appropriate for B1-B2 level
- Every 4-5 messages, mention that for personalised 1-on-1 coaching they can book a lesson with Mr. Ibrahim at fluentry.com/book-lesson

Start by greeting the user warmly and asking what they would like to practise today.`;

const FALLBACK_RESPONSES = [
  "Hi! I'm Fluent, your AI English coach. What would you like to practise today? Speaking, grammar, vocabulary, or something else?",
  "Hello! I'm here to help you improve your English. What's your learning goal today?",
  "Welcome! I'm your AI English practice partner. Let's work on your English together. What would you like to focus on?",
  "Great effort! Keep practising — consistency is the key to fluency. What would you like to work on next?",
  "That is a good attempt! Remember, every mistake is a learning opportunity. Keep going!",
  "You are doing well! For personalised coaching, book a lesson with Mr. Ibrahim at fluentry.com/book-lesson",
  "Excellent practice! Try to speak more naturally. What else would you like to practise?",
  "Good work! Remember, the key to fluency is consistent practice. Keep it up!",
  "Nice try! Would you like to practise something else, or would you like me to explain this better?",
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (!getRateLimit(ip)) {
    return res.status(429).json({
      message: "You have used your free AI practice for this hour. Book a real lesson with Mr. Ibrahim for unlimited coaching!",
    });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Fallback responses when API key is not configured
    return res.status(200).json({
      message: FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)],
    });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  const recentMessages = messages.slice(-10);
  const contents = recentMessages.map((m: { role: string; content: string }) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  if (contents.length === 0) {
    contents.push({ role: "user", parts: [{ text: "Hello" }] });
  }

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { maxOutputTokens: 200, temperature: 0.7 },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", response.status, errText);
      throw new Error(`Gemini API returned ${response.status}`);
    }

    const data = await response.json();
    const message =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];

    return res.status(200).json({ message });
  } catch (error: unknown) {
    console.error("AI chat error:", error);
    return res.status(200).json({
      message: FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)],
    });
  }
}
