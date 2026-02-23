# Google Apps Script Fix — Complete Replacement

## How to apply this fix

1. Go to [script.google.com](https://script.google.com)
2. Open your Fluentry project (or go to the Google Sheet → Extensions → Apps Script)
3. **Select ALL the existing code** (Ctrl+A) and **delete it**
4. **Paste the code below** (everything inside the code block)
5. Click **Save** (Ctrl+S)
6. Click **Deploy → Manage Deployments → Edit (pencil icon) → New Version → Deploy**
7. Done — all three tests will now send correct emails

---

## Complete Google Apps Script Code (paste this)

```javascript
// ─── FLUENTRY LEADS — Google Apps Script ─────────────────────────────────────
// Receives POST from Vercel API, saves to Sheet, sends email to Ibrahim
// Fixed: handles all field name variants, always sends email notification
// ─────────────────────────────────────────────────────────────────────────────

var NOTIFY_EMAIL = "abirkabajani@gmail.com"; // ← Mr. Ibrahim's email
var SHEET_NAME   = "Leads";                  // ← Sheet tab name (change if different)

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // ── 1. Save to Google Sheet ─────────────────────────────────────────────
    var ss    = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // Add header row if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "Name", "Email", "WhatsApp",
        "Level", "Score", "Test Type", "Recommendation", "Source"
      ]);
    }

    // Resolve field values — handle all field name variants sent by the API
    var name           = data.name           || "N/A";
    var email          = data.email          || data.Email          || "Not provided";
    var whatsapp       = data.whatsapp       || data.WhatsApp       || data.phone       || "Not provided";
    var level          = data.level          || data.levelOnly      || "N/A";
    var levelTitle     = data.levelTitle     || "";
    var score          = data.score          || data.scoreRaw       || "N/A";
    var total          = data.total          || data.totalRaw       || "";
    var percentage     = data.percentage     || data.percentageRaw  || "";
    var testType       = data.testType       || "English Test";
    var recommendation = data.recommendation || "";
    var timestamp      = data.timestamp      || new Date().toISOString();
    var source         = data.source         || "Fluentry Website";

    // Build a clean score string
    var scoreDisplay = "";
    if (score && score !== "N/A" && total && total !== "N/A") {
      scoreDisplay = score + "/" + total;
      if (percentage && percentage !== "N/A") {
        scoreDisplay += " (" + percentage + ")";
      }
    } else if (score && score !== "N/A") {
      scoreDisplay = score;
    } else {
      scoreDisplay = "N/A";
    }

    // Build level display
    var levelDisplay = level;
    if (levelTitle && levelTitle !== "" && !level.includes(levelTitle)) {
      levelDisplay = level + " — " + levelTitle;
    }

    sheet.appendRow([
      timestamp, name, email, whatsapp,
      levelDisplay, scoreDisplay, testType, recommendation, source
    ]);

    // ── 2. Send email notification to Mr. Ibrahim ───────────────────────────
    // Always send — regardless of whether the student provided their email
    var subject = "New Fluentry Lead: " + name + " — " + levelDisplay;

    var body =
      "Name: "       + name           + "\n" +
      "Email: "      + email          + "\n" +
      "WhatsApp: "   + whatsapp       + "\n" +
      "Level: "      + levelDisplay   + "\n" +
      "Score: "      + scoreDisplay   + "\n" +
      "Test: "       + testType       + "\n" +
      "\nRecommendation: " + (recommendation || "N/A") + "\n" +
      "\nView leads: https://docs.google.com/spreadsheets/d/" +
        ss.getId() + "/edit\n";

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);

    // ── 3. Return success ───────────────────────────────────────────────────
    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // Log the error but still return 200 so Vercel doesn't retry
    Logger.log("Error: " + err.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Health check — GET request returns status ──────────────────────────────
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

---

## What this fixes

| Bug | Root Cause | Fix Applied |
|---|---|---|
| Quick Test — no email sent | GAS only emailed when `data.email` was a real address | Now **always** sends email to Mr. Ibrahim regardless of student's email |
| Full Assessment — `Email: undefined` | GAS read `data.Email` (capital E) but API sent `data.email` | Now reads both `data.email` and `data.Email` |
| Full Assessment — `WhatsApp: undefined` | GAS read `data.whatsapp` but API sent `data.phone` | Now reads `data.whatsapp`, `data.WhatsApp`, and `data.phone` |
| Full Assessment — `Score: / (%)` | GAS read `data.score`/`data.total` as strings but they were empty | Now uses `sanitizeNumber()` in API + fallback chain in GAS |
| Speaking Test — `Level: A2 — undefined` | GAS appended `data.levelTitle` separately but it was `undefined` | Now builds `levelDisplay` safely with null check |

---

## After applying the fix

All three tests will produce emails like this:

```
Subject: New Fluentry Lead: Youssef El Amrani — B2 — Upper Intermediate

Name: Youssef El Amrani
Email: youssef@gmail.com
WhatsApp: +212612345678
Level: B2 — Upper Intermediate
Score: 8/10 (80%)
Test: Quick Test (10 questions)

Recommendation: Standard Package — 3 lessons/week

View leads: https://docs.google.com/spreadsheets/d/...
```
