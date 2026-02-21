import type { VercelRequest, VercelResponse } from "@vercel/node";

const GOOGLE_SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycbzhG3jRJnkgYlr9Cvuzu94zhfOKF9TzPYOztESLVb5ToSa2lWU6cGuzADxIM6PGkj41cg/exec";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // CORS headers — allow requests from the Fluentry domain
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const payload = req.body;

    // Validate required fields
    if (!payload || !payload.name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Add timestamp
    const enrichedPayload = {
      ...payload,
      timestamp: new Date().toISOString(),
      source: "Fluentry English Test",
    };

    // Forward to Google Apps Script — server-side, no CORS issue
    const response = await fetch(GOOGLE_SHEET_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrichedPayload),
    });

    if (!response.ok) {
      console.error("Google Sheets webhook error:", response.status, await response.text());
      // Still return success to the user — WhatsApp flow should not be blocked
      return res.status(200).json({
        success: true,
        message: "Lead received (sheet sync pending)",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Lead submitted successfully",
    });
  } catch (error) {
    console.error("submit-lead error:", error);
    // Return 200 so the user flow is not blocked even if sheet fails
    return res.status(200).json({
      success: true,
      message: "Lead received (sheet sync pending)",
    });
  }
}
