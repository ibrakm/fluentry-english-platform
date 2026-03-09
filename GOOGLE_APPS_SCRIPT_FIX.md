# Google Apps Script — Complete Code (Updated)

## How to apply this update

1. Go to [script.google.com](https://script.google.com)
2. Open your Fluentry project (or go to the Google Sheet → Extensions → Apps Script)
3. **Select ALL the existing code** (Ctrl+A) and **delete it**
4. **Paste the code below** (everything inside the code block)
5. Click **Save** (Ctrl+S)
6. Click **Deploy → Manage Deployments → Edit (pencil icon) → New Version → Deploy**
7. Done — all three tests will now send clear, professional email notifications

---

## Complete Google Apps Script Code (paste this)

```javascript
// ─── FLUENTRY LEADS — Google Apps Script ─────────────────────────────────────
// Receives POST from Vercel API, saves to Sheet, sends email to Ibrahim
// Updated: clearer email format, always sends notification
// ─────────────────────────────────────────────────────────────────────────────

var NOTIFY_EMAIL = "ibrahimkabaikm@gmail.com"; // ← Mr. Ibrahim's notification email
var SHEET_NAME   = "Leads";                    // ← Sheet tab name (change if different)

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
    var subject = "🎓 New Student Lead — " + name + " | Level: " + levelDisplay;

    // Build a WhatsApp reply link pre-filled with the student's number
    var waReplyLink = "";
    if (whatsapp && whatsapp !== "Not provided") {
      var cleanPhone = whatsapp.replace(/[\s\-\(\)]/g, "");
      if (cleanPhone.charAt(0) === "+") cleanPhone = cleanPhone.substring(1);
      var waMsg = encodeURIComponent(
        "Hi " + name + "! 👋\n\nThank you for completing the Fluentry English test.\n\n" +
        "Your result: " + levelDisplay + " — Score: " + scoreDisplay + "\n\n" +
        "Based on your level, I recommend the " + (recommendation || "Standard Package") + ".\n\n" +
        "Would you like to book your first free strategy call? I'm available this week! 😊"
      );
      waReplyLink = "https://wa.me/" + cleanPhone + "?text=" + waMsg;
    }

    var body =
      "═══════════════════════════════════════\n" +
      "  NEW STUDENT LEAD — FLUENTRY.ONLINE\n" +
      "═══════════════════════════════════════\n\n" +
      "👤 Name:        " + name + "\n" +
      "📧 Email:       " + email + "\n" +
      "📱 WhatsApp:    " + whatsapp + "\n\n" +
      "───────────────────────────────────────\n" +
      "📊 TEST RESULTS\n" +
      "───────────────────────────────────────\n" +
      "🎯 Level:       " + levelDisplay + "\n" +
      "✅ Score:       " + scoreDisplay + "\n" +
      "📝 Test:        " + testType + "\n" +
      "📦 Recommended: " + (recommendation || "N/A") + "\n\n" +
      "───────────────────────────────────────\n" +
      "⚡ QUICK ACTIONS\n" +
      "───────────────────────────────────────\n" +
      (waReplyLink ? "💬 Reply on WhatsApp:\n" + waReplyLink + "\n\n" : "") +
      "📊 View All Leads (Google Sheet):\nhttps://docs.google.com/spreadsheets/d/" + ss.getId() + "/edit\n\n" +
      "───────────────────────────────────────\n" +
      "🕐 Submitted: " + timestamp + "\n" +
      "🌐 Source: " + source + "\n" +
      "═══════════════════════════════════════\n";

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

## What the new email looks like

```
Subject: 🎓 New Student Lead — Youssef El Amrani | Level: B2 — Upper Intermediate

═══════════════════════════════════════
  NEW STUDENT LEAD — FLUENTRY.ONLINE
═══════════════════════════════════════

👤 Name:        Youssef El Amrani
📧 Email:       youssef@gmail.com
📱 WhatsApp:    +212612345678

───────────────────────────────────────
📊 TEST RESULTS
───────────────────────────────────────
🎯 Level:       B2 — Upper Intermediate
✅ Score:       8/10 (80%)
📝 Test:        Quick Test (10 questions)
📦 Recommended: Standard Package (1 hour/lesson)

───────────────────────────────────────
⚡ QUICK ACTIONS
───────────────────────────────────────
💬 Reply on WhatsApp:
https://wa.me/212612345678?text=Hi+Youssef...

📊 View All Leads (Google Sheet):
https://docs.google.com/spreadsheets/d/.../edit

───────────────────────────────────────
🕐 Submitted: 2026-03-09T15:30:00.000Z
🌐 Source: Fluentry Website
═══════════════════════════════════════
```

## Key improvements in this version

| Improvement | Details |
|---|---|
| **Clearer subject line** | Now reads: `🎓 New Student Lead — [Name] | Level: [Level]` — instantly scannable |
| **Structured sections** | Separated into Student Info, Test Results, and Quick Actions |
| **One-click WhatsApp reply** | A pre-filled WhatsApp link lets you reply to the student in one click |
| **Correct email address** | Fixed to `ibrahimkabaikm@gmail.com` |
| **All field variants handled** | Reads `email`/`Email`, `phone`/`whatsapp`/`WhatsApp` — no more undefined values |
