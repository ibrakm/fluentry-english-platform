/**
 * api/ai-chat.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Vercel serverless function: AI English Practice Chatbot
 * Uses OpenAI GPT-4o-mini for fast, cheap responses.
 * Rate-limited to 20 messages per IP per hour.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple in-memory rate limiter (resets on cold start)
const rateLimiter = new Map<string, { count: number; resetAt: number }>();
const MAX_MESSAGES_PER_HOUR = 20;

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimiter.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimiter.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true; // allowed
  }

  if (entry.count >= MAX_MESSAGES_PER_HOUR) {
    return false; // rate limited
  }

  entry.count++;
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (!getRateLimit(ip)) {
    return res.status(429).json({
      error: "Rate limit exceeded",
      message:
        "You've used your free AI practice for this hour. Book a real lesson with Mr. Ibrahim for unlimited coaching!",
    });
  }

  const { messages, systemPrompt } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  // Limit conversation history to last 10 messages to save tokens
  const recentMessages = messages.slice(-10);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            systemPrompt ||
            "You are a friendly English coach for Moroccan students. Keep responses short and encouraging.",
        },
        ...recentMessages,
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const message =
      completion.choices[0]?.message?.content ||
      "Sorry, I couldn't generate a response. Please try again!";

    return res.status(200).json({ message });
  } catch (error: unknown) {
    console.error("OpenAI API error:", error);

    // Fallback response if API fails
    const fallbacks = [
      "Great effort! Keep practising — consistency is the key to fluency. 😊",
      "That's a good attempt! Remember, every mistake is a learning opportunity. What would you like to practise next?",
      "You're doing well! For personalised coaching, consider booking a lesson with Mr. Ibrahim at fluentry.com/book-lesson",
    ];

    return res.status(200).json({
      message: fallbacks[Math.floor(Math.random() * fallbacks.length)],
    });
  }
}
