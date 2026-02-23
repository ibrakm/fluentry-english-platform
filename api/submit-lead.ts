import type { VercelRequest, VercelResponse } from "@vercel/node";

const GOOGLE_SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbzhG3jRJnkgYlr9Cvuzu94zhfOKF9TzPYOztESLVb5ToSa2lWU6cGuzADxIM6PGkj41cg/exec";

// Allowed origins — only accept requests from the Fluentry domain
const ALLOWED_ORIGINS = [
  "https://fluentry-english-platform.vercel.app",
  "https://fluentry.com",
  "https://www.fluentry.com",
];

// Strip HTML tags and control characters to prevent injection
function sanitize(value: unknown, maxLength = 200): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")          // strip HTML tags
    .replace(/[<>"'`]/g, "")          // strip dangerous chars
    .replace(/[\x00-\x1F\x7F]/g, "") // strip control characters
    .trim()
    .substring(0, maxLength);
}

// Sanitize a number field — accept number or numeric string
function sanitizeNumber(value: unknown): string {
  if (typeof value === "number" && !isNaN(value)) return String(value);
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed !== "" && !isNaN(Number(trimmed))) return trimmed;
  }
  return "";
}

// Validate a phone number loosely (digits, spaces, +, -)
function isValidPhone(phone: string): boolean {
  return /^[\d\s\+\-\(\)]{6,20}$/.test(phone);
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50kb", // leads are tiny — 50kb is generous
    },
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // ── CORS — restrict to known origins ─────────────────────────────────────
  const origin = req.headers.origin || "";
  const isAllowed = ALLOWED_ORIGINS.includes(origin) || origin === "";
  const corsOrigin = isAllowed ? (origin || ALLOWED_ORIGINS[0]) : ALLOWED_ORIGINS[0];

  res.setHeader("Access-Control-Allow-Origin", corsOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Vary", "Origin");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body;

    if (!body || typeof body !== "object") {
      return res.status(400).json({ error: "Invalid request body" });
    }

    // ── Sanitize and whitelist fields — never forward raw user input ─────────
    const name = sanitize(body.name, 100);
    const email = sanitize(body.email, 100);
    // Accept both 'phone' and 'whatsapp' field names from the frontend
    const phone = sanitize(body.phone || body.whatsapp, 30);
    const level = sanitize(body.level, 50);
    const levelTitle = sanitize(body.levelTitle, 100);
    // Use sanitizeNumber so numeric values survive the sanitizer
    const score = sanitizeNumber(body.score);
    const total = sanitizeNumber(body.total);
    const percentage = sanitizeNumber(body.percentage);
    const testType = sanitize(body.testType, 100);
    const recommendation = sanitize(body.recommendation, 200);

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    if (phone && !isValidPhone(phone)) {
      return res.status(400).json({ error: "Invalid phone number format" });
    }

    // ── Build a clean, controlled payload ────────────────────────────────────
    // Send BOTH 'phone' and 'whatsapp' so the GAS template works regardless
    // of which field name it reads. Also send 'Email' (capitalised) as alias.
    const safePayload = {
      name,
      // Both casing variants so GAS template matches either
      email: email || "Not provided",
      Email: email || "Not provided",
      // Both field names for WhatsApp/phone
      phone: phone || "Not provided",
      whatsapp: phone || "Not provided",
      WhatsApp: phone || "Not provided",
      // Level with and without title combined, to cover all GAS template variants
      level: levelTitle ? `${level} — ${levelTitle}` : level,
      levelOnly: level,
      levelTitle: levelTitle || "",
      // Score fields as both string and number
      score: score || "N/A",
      total: total || "N/A",
      percentage: percentage ? `${percentage}%` : "N/A",
      scoreRaw: score,
      totalRaw: total,
      percentageRaw: percentage,
      testType: testType || "English Test",
      recommendation,
      timestamp: new Date().toISOString(),
      source: "Fluentry Website",
    };

    // ── Forward to Google Sheets ──────────────────────────────────────────────
    const response = await fetch(GOOGLE_SHEET_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(safePayload),
    });

    if (!response.ok) {
      console.error("Google Sheets webhook error:", response.status);
      return res.status(200).json({ success: true, message: "Lead received (sheet sync pending)" });
    }

    return res.status(200).json({ success: true, message: "Lead submitted successfully" });
  } catch (error) {
    console.error("submit-lead error:", error);
    return res.status(200).json({ success: true, message: "Lead received (sheet sync pending)" });
  }
}
