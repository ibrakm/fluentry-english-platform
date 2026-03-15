import { useState } from "react";
import { Copy, Check, Mail, RefreshCw } from "lucide-react";

type EmailPurpose = "request" | "complaint" | "inquiry" | "apology" | "follow-up" | "resignation" | "cover-letter" | "thank-you";

interface EmailConfig {
  senderName: string;
  recipientName: string;
  recipientTitle: string;
  company: string;
  purpose: EmailPurpose;
  subject: string;
  detail: string;
  closing: "faithfully" | "sincerely";
}

const purposeOptions: { value: EmailPurpose; label: string; icon: string }[] = [
  { value: "request", label: "Request / Ask for something", icon: "📋" },
  { value: "complaint", label: "Complaint", icon: "⚠️" },
  { value: "inquiry", label: "Inquiry / Ask for information", icon: "❓" },
  { value: "apology", label: "Apology", icon: "🙏" },
  { value: "follow-up", label: "Follow-up", icon: "🔄" },
  { value: "resignation", label: "Resignation", icon: "📤" },
  { value: "cover-letter", label: "Cover Letter / Job Application", icon: "💼" },
  { value: "thank-you", label: "Thank You", icon: "🎉" },
];

function generateEmail(config: EmailConfig): string {
  const { senderName, recipientName, recipientTitle, company, purpose, subject, detail, closing } = config;

  const salutation = recipientName
    ? `Dear ${recipientTitle ? recipientTitle + " " : ""}${recipientName},`
    : "Dear Sir/Madam,";

  const closingLine = closing === "faithfully"
    ? "Yours faithfully,"
    : "Yours sincerely,";

  const templates: Record<EmailPurpose, string> = {
    request: `${salutation}

I hope this email finds you well. I am writing to respectfully request ${detail || "[describe what you are requesting]"}.

I believe this would be beneficial because [explain your reason]. I would be grateful if you could consider my request at your earliest convenience.

Please do not hesitate to contact me should you require any further information. I look forward to your positive response.

${closingLine}
${senderName || "[Your Name]"}`,

    complaint: `${salutation}

I am writing to formally express my dissatisfaction regarding ${detail || "[describe the issue]"}${company ? " at " + company : ""}.

On [date], I experienced [describe the problem in detail]. This has caused me significant inconvenience because [explain the impact].

I would appreciate it if you could [state the action you expect: investigate the matter / provide a refund / resolve the issue] as soon as possible. I look forward to your prompt response and a satisfactory resolution.

${closingLine}
${senderName || "[Your Name]"}`,

    inquiry: `${salutation}

I hope this message finds you well. I am writing to inquire about ${detail || "[what you want to know about]"}${company ? " at " + company : ""}.

Specifically, I would like to know:
1. [First question]
2. [Second question]
3. [Third question, if applicable]

I would be most grateful if you could provide me with the relevant information at your earliest convenience. Please feel free to contact me if you need any clarification.

${closingLine}
${senderName || "[Your Name]"}`,

    apology: `${salutation}

I am writing to sincerely apologize for ${detail || "[describe what you are apologizing for]"}.

I fully understand that this has caused inconvenience, and I take complete responsibility for [the error / the delay / the misunderstanding]. This was not up to the standard I strive to maintain, and I assure you it will not happen again.

To rectify the situation, I have [describe the steps you have taken or will take]. I hope you will accept my sincere apologies, and I remain committed to [maintaining our professional relationship / delivering quality work].

${closingLine}
${senderName || "[Your Name]"}`,

    "follow-up": `${salutation}

I hope you are doing well. I am writing to follow up on ${detail || "[the matter / the application / the proposal]"} that I sent on [date].

I wanted to check whether you have had the opportunity to review [the document / my application / our proposal]. I remain very interested and would welcome the chance to discuss this further at your convenience.

Please let me know if you require any additional information from my side. I look forward to hearing from you.

${closingLine}
${senderName || "[Your Name]"}`,

    resignation: `${salutation}

I am writing to formally notify you of my resignation from my position as [Your Job Title]${company ? " at " + company : ""}. My last working day will be [Date — typically two weeks from now].

I have genuinely valued my time here and am grateful for the opportunities I have been given. This decision was not taken lightly, and I want to ensure a smooth transition. I am happy to assist in training my replacement or completing any outstanding tasks before my departure.

Thank you for your support and guidance during my time with the company.

${closingLine}
${senderName || "[Your Name]"}`,

    "cover-letter": `${salutation}

I am writing to express my strong interest in the position of [Job Title] advertised on [Platform / Website]. With my background in ${detail || "[your field / skills]"}, I am confident that I would be a valuable addition to your team${company ? " at " + company : ""}.

In my previous role as [Previous Job Title], I successfully [describe a key achievement]. I am particularly drawn to this opportunity because [explain why you want this specific role or company].

I have attached my CV for your consideration. I would welcome the opportunity to discuss how my skills and experience align with your needs. I am available for an interview at your earliest convenience.

${closingLine}
${senderName || "[Your Name]"}`,

    "thank-you": `${salutation}

I am writing to express my sincere gratitude for ${detail || "[what you are thankful for]"}.

Your [support / guidance / time / assistance] has been invaluable, and I truly appreciate the effort you put into [describe what they did]. It has made a significant difference to [me / our project / the team].

I look forward to [continuing our collaboration / staying in touch / working together in the future]. Please do not hesitate to reach out if there is ever anything I can do to reciprocate.

${closingLine}
${senderName || "[Your Name]"}`,
  };

  return `Subject: ${subject || "[Write your subject line here]"}\n\n${templates[purpose]}`;
}

export default function FormalEmailGenerator() {
  const [config, setConfig] = useState<EmailConfig>({
    senderName: "",
    recipientName: "",
    recipientTitle: "Mr./Ms.",
    company: "",
    purpose: "request",
    subject: "",
    detail: "",
    closing: "faithfully",
  });
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailText = generateEmail(config);

  const handleGenerate = () => setGenerated(true);
  const handleReset = () => { setGenerated(false); setConfig({ senderName: "", recipientName: "", recipientTitle: "Mr./Ms.", company: "", purpose: "request", subject: "", detail: "", closing: "faithfully" }); };
  const handleCopy = () => { navigator.clipboard.writeText(emailText); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const update = (field: keyof EmailConfig, value: string) => setConfig((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold">
          <Mail className="w-4 h-4" />
          8 Email Types · Instant Generation
        </div>
        <h2 className="text-xl font-bold text-gray-900">Free Formal English Email Generator</h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Fill in the details below and get a professional English email in seconds. Perfect for job applications, complaints, requests, meeting requests, and more.
        </p>
      </div>

      {!generated ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-5">
          {/* Email Purpose */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">What type of email do you need?</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {purposeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update("purpose", opt.value)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 text-xs font-semibold text-center transition-all ${
                    config.purpose === opt.value
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 text-gray-500 hover:border-blue-300"
                  }`}
                >
                  <span className="text-xl">{opt.icon}</span>
                  <span className="leading-tight">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Youssef Alami"
                value={config.senderName}
                onChange={(e) => update("senderName", e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Recipient's Name (optional)</label>
              <input
                type="text"
                placeholder="e.g. Johnson (leave blank for Sir/Madam)"
                value={config.recipientName}
                onChange={(e) => update("recipientName", e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Recipient's Title (optional)</label>
              <select
                value={config.recipientTitle}
                onChange={(e) => update("recipientTitle", e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-blue-400 focus:outline-none bg-white"
              >
                <option value="">No title</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Dr.">Dr.</option>
                <option value="Prof.">Prof.</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Company / Organization (optional)</label>
              <input
                type="text"
                placeholder="e.g. OCP Group"
                value={config.company}
                onChange={(e) => update("company", e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Email Subject Line</label>
            <input
              type="text"
              placeholder="e.g. Request for Meeting / Application for Marketing Manager"
              value={config.subject}
              onChange={(e) => update("subject", e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Key Detail (what is the email about?)</label>
            <textarea
              rows={2}
              placeholder="e.g. a refund for order #1234 / information about your English courses / the marketing manager position"
              value={config.detail}
              onChange={(e) => update("detail", e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-blue-400 focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">Closing</label>
            <div className="flex gap-3">
              {[
                { value: "faithfully", label: "Yours faithfully (when you don't know the name)" },
                { value: "sincerely", label: "Yours sincerely (when you know the name)" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => update("closing", opt.value)}
                  className={`flex-1 p-2.5 rounded-lg border-2 text-xs text-left transition-all ${
                    config.closing === opt.value
                      ? "border-blue-500 bg-blue-50 text-blue-700 font-semibold"
                      : "border-gray-200 text-gray-500"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors text-sm"
          >
            ✉️ Generate My Email
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Generated Email */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 bg-green-50 border-b border-green-100">
              <p className="text-sm font-semibold text-green-700">✅ Your email is ready! Edit the parts in [brackets].</p>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-green-200 text-green-700 rounded-lg text-xs font-semibold hover:bg-green-50 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  New Email
                </button>
              </div>
            </div>
            <pre className="p-5 text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
              {emailText}
            </pre>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-xs text-yellow-800 font-semibold mb-1">📌 Remember:</p>
            <ul className="text-xs text-yellow-700 space-y-0.5">
              <li>• Replace all text in [brackets] with your specific details</li>
              <li>• Use "Dear Sir/Madam" + "Yours faithfully" when you don't know the name</li>
              <li>• Use "Dear Mr./Ms. [Name]" + "Yours sincerely" when you know the name</li>
              <li>• Never use contractions (don't, can't) in formal emails</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
