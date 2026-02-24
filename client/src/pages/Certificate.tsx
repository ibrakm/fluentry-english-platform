/**
 * Certificate.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Generates a downloadable Fluentry English Level Certificate.
 * Students enter their name and level after completing a test.
 * The certificate is rendered as a beautiful HTML canvas and exported as PNG.
 *
 * This is one of the top 10 highest-converting features across language platforms.
 * Certificates increase course completion by 20-25% and drive social sharing.
 */

import { useState, useRef, useEffect } from "react";
import { Download, Award, Share2, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

const CEFR_LEVELS = [
  { value: "A1", label: "A1 — Beginner", color: "#10b981", bg: "#ecfdf5" },
  { value: "A2", label: "A2 — Elementary", color: "#06b6d4", bg: "#ecfeff" },
  { value: "B1", label: "B1 — Intermediate", color: "#f59e0b", bg: "#fffbeb" },
  { value: "B2", label: "B2 — Upper Intermediate", color: "#8b5cf6", bg: "#f5f3ff" },
  { value: "C1", label: "C1 — Advanced", color: "#ec4899", bg: "#fdf2f8" },
  { value: "C2", label: "C2 — Mastery", color: "#ef4444", bg: "#fef2f2" },
];

export default function Certificate() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("B1");
  const [generated, setGenerated] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const selectedLevel = CEFR_LEVELS.find((l) => l.value === level) || CEFR_LEVELS[2];

  const generateCertificate = () => {
    if (!name.trim()) return;
    setGenerated(true);
    setTimeout(() => drawCertificate(), 100);
  };

  const drawCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 900;
    const H = 636;
    canvas.width = W;
    canvas.height = H;

    // Background
    ctx.fillStyle = "#fafafa";
    ctx.fillRect(0, 0, W, H);

    // Outer border
    ctx.strokeStyle = selectedLevel.color;
    ctx.lineWidth = 8;
    ctx.strokeRect(16, 16, W - 32, H - 32);

    // Inner border
    ctx.strokeStyle = selectedLevel.color + "55";
    ctx.lineWidth = 2;
    ctx.strokeRect(28, 28, W - 56, H - 56);

    // Top gradient banner
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, selectedLevel.color + "22");
    grad.addColorStop(0.5, selectedLevel.color + "11");
    grad.addColorStop(1, selectedLevel.color + "22");
    ctx.fillStyle = grad;
    ctx.fillRect(28, 28, W - 56, 120);

    // Fluentry logo text
    ctx.fillStyle = selectedLevel.color;
    ctx.font = "bold 36px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("FLUENTRY", W / 2, 85);

    // Tagline
    ctx.fillStyle = "#64748b";
    ctx.font = "14px Arial, sans-serif";
    ctx.fillText("English Coaching Platform — Morocco", W / 2, 112);

    // Divider
    ctx.strokeStyle = selectedLevel.color + "66";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(80, 148);
    ctx.lineTo(W - 80, 148);
    ctx.stroke();

    // "Certificate of Achievement"
    ctx.fillStyle = "#1e293b";
    ctx.font = "italic 22px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Achievement", W / 2, 200);

    // "This certifies that"
    ctx.fillStyle = "#64748b";
    ctx.font = "16px Arial, sans-serif";
    ctx.fillText("This certifies that", W / 2, 240);

    // Student name
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 44px Georgia, serif";
    ctx.fillText(name.trim(), W / 2, 305);

    // Underline for name
    const nameWidth = ctx.measureText(name.trim()).width;
    ctx.strokeStyle = selectedLevel.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2 - nameWidth / 2, 315);
    ctx.lineTo(W / 2 + nameWidth / 2, 315);
    ctx.stroke();

    // "has demonstrated English proficiency at"
    ctx.fillStyle = "#64748b";
    ctx.font = "16px Arial, sans-serif";
    ctx.fillText("has demonstrated English proficiency at", W / 2, 360);

    // Level badge background
    ctx.fillStyle = selectedLevel.bg;
    ctx.beginPath();
    ctx.roundRect(W / 2 - 130, 375, 260, 70, 12);
    ctx.fill();
    ctx.strokeStyle = selectedLevel.color;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Level text
    ctx.fillStyle = selectedLevel.color;
    ctx.font = "bold 32px Georgia, serif";
    ctx.fillText(selectedLevel.value, W / 2, 415);

    // Level label
    ctx.fillStyle = selectedLevel.color + "cc";
    ctx.font = "14px Arial, sans-serif";
    ctx.fillText(selectedLevel.label.split("—")[1]?.trim() || "", W / 2, 435);

    // "CEFR Framework"
    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px Arial, sans-serif";
    ctx.fillText("Common European Framework of Reference for Languages (CEFR)", W / 2, 470);

    // Divider
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(80, 490);
    ctx.lineTo(W - 80, 490);
    ctx.stroke();

    // Date
    const today = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    ctx.fillStyle = "#64748b";
    ctx.font = "13px Arial, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`Date: ${today}`, 80, 525);

    // Issued by
    ctx.textAlign = "right";
    ctx.fillText("Issued by: Mr. Ibrahim — Fluentry English Coaching", W - 80, 525);

    // Website
    ctx.fillStyle = selectedLevel.color;
    ctx.font = "bold 13px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("www.fluentry.com", W / 2, 570);

    // Decorative corner elements
    const drawCornerStar = (x: number, y: number) => {
      ctx.fillStyle = selectedLevel.color + "33";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = selectedLevel.color + "66";
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    };

    drawCornerStar(60, 60);
    drawCornerStar(W - 60, 60);
    drawCornerStar(60, H - 60);
    drawCornerStar(W - 60, H - 60);
  };

  const downloadCertificate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `Fluentry_Certificate_${name.replace(/\s+/g, "_")}_${level}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const shareCertificate = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], `Fluentry_Certificate_${name}_${level}.png`, { type: "image/png" });
      if (navigator.share && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `My Fluentry English Certificate — ${level}`,
          text: `I just achieved ${level} (${selectedLevel.label.split("—")[1]?.trim()}) English level with Fluentry! 🎉`,
          files: [file],
        });
      } else {
        downloadCertificate();
      }
    });
  };

  return (
    <>
      <SEO
        path="/certificate"
        title="Get Your English Level Certificate | Fluentry Morocco"
        description="Download your free Fluentry English Level Certificate. Prove your CEFR level (A1-C2) and share it on LinkedIn or WhatsApp. English coaching in Morocco."
        keywords={'english certificate morocco, CEFR certificate free, english level proof morocco, fluentry certificate'}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award size={16} />
              Free Certificate Generator
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Get Your English Certificate
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Download a beautiful certificate showing your English level. Share it on LinkedIn, WhatsApp, or your CV.
            </p>
          </div>

          {/* Form */}
          {!generated ? (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ahmed Benali"
                    className="w-full border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 text-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your English Level (CEFR)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {CEFR_LEVELS.map((l) => (
                      <button
                        key={l.value}
                        onClick={() => setLevel(l.value)}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${
                          level === l.value
                            ? "border-current shadow-md scale-105"
                            : "border-gray-200 dark:border-gray-600 hover:border-gray-300"
                        }`}
                        style={level === l.value ? { borderColor: l.color, backgroundColor: l.bg } : {}}
                      >
                        <p className="font-bold text-lg" style={{ color: l.color }}>{l.value}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{l.label.split("—")[1]?.trim()}</p>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Not sure of your level?{" "}
                    <a href="/free-test" className="text-blue-600 hover:underline">
                      Take the free test →
                    </a>
                  </p>
                </div>

                <button
                  onClick={generateCertificate}
                  disabled={!name.trim()}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 rounded-xl text-lg transition-all hover:shadow-lg disabled:cursor-not-allowed"
                >
                  Generate My Certificate →
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Certificate preview */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="text-green-500" size={20} />
                  <p className="font-semibold text-gray-800 dark:text-white">
                    Your certificate is ready!
                  </p>
                </div>
                <canvas
                  ref={canvasRef}
                  className="w-full rounded-xl border border-gray-200 dark:border-gray-700"
                  style={{ maxWidth: "100%" }}
                />
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={downloadCertificate}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg"
                >
                  <Download size={20} />
                  Download Certificate (PNG)
                </button>
                <button
                  onClick={shareCertificate}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg"
                >
                  <Share2 size={20} />
                  Share Certificate
                </button>
              </div>

              {/* Generate another */}
              <button
                onClick={() => { setGenerated(false); setName(""); }}
                className="w-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 py-2 text-sm transition-colors"
              >
                ← Generate another certificate
              </button>

              {/* Upsell CTA */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-6 text-center">
                <p className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  Want to officially reach the next level?
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Book a personalised lesson with Mr. Ibrahim and get a structured plan to reach {selectedLevel.value === "C2" ? "C2 mastery" : `${CEFR_LEVELS[CEFR_LEVELS.findIndex(l => l.value === level) + 1]?.value || "C2"}`}.
                </p>
                <a
                  href="/book-lesson"
                  className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all hover:shadow-lg"
                >
                  Book a Free Trial Lesson →
                </a>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "🎓", title: "CEFR Aligned", desc: "Internationally recognised framework" },
              { icon: "📱", title: "Share Anywhere", desc: "LinkedIn, WhatsApp, CV, email" },
              { icon: "🆓", title: "100% Free", desc: "No sign-up required" },
            ].map((b) => (
              <div key={b.title} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm">
                <p className="text-3xl mb-2">{b.icon}</p>
                <p className="font-semibold text-gray-800 dark:text-white text-sm">{b.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
