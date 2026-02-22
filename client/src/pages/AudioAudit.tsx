/**
 * /audio-audit — Instant Audio Audit Feature
 *
 * Students record themselves reading a paragraph aloud.
 * The audio is sent to /api/audio-audit which:
 *   1. Transcribes via Whisper
 *   2. Scores via Perplexity AI
 *   3. Saves result to Google Sheet
 * The student then sees their score and is redirected to WhatsApp.
 */

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Play, Pause, Send, CheckCircle, ArrowRight, RotateCcw, Star, AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

// ── Longer, realistic reading passages for each level ─────────────────────────
const LEVELS = [
  {
    id: "A2",
    label: "A2 — Beginner",
    color: "border-green-400 bg-green-50 text-green-700",
    activeColor: "border-green-500 bg-green-100",
    badge: "bg-green-500",
    title: "Daily Life",
    passage: `My name is Sara and I live in Casablanca. Every morning, I wake up at seven o'clock and I eat breakfast with my family. I usually have bread, olive oil, and a glass of milk. After breakfast, I go to work by bus. My office is near the city centre. In the evening, I like to watch television or read a book. On weekends, I visit my friends and we go to the market together.`,
    tip: "Focus on: clear word separation, the 'v' in 'every' and 'visit', and the 'th' in 'the' and 'together'.",
  },
  {
    id: "B1",
    label: "B1 — Intermediate",
    color: "border-blue-400 bg-blue-50 text-blue-700",
    activeColor: "border-blue-500 bg-blue-100",
    badge: "bg-blue-500",
    title: "Work & Career",
    passage: `Learning a new language opens many doors in your professional life. In today's global economy, companies are looking for employees who can communicate effectively in English. Whether you are attending international meetings, writing business emails, or presenting your ideas to foreign clients, strong English skills give you a significant advantage. The key is not to wait until your English is perfect — it is to start speaking now and improve through practice.`,
    tip: "Focus on: word stress in 'professional', 'effectively', 'significant', and the natural rhythm of longer sentences.",
  },
  {
    id: "B2",
    label: "B2 — Upper Intermediate",
    color: "border-purple-400 bg-purple-50 text-purple-700",
    activeColor: "border-purple-500 bg-purple-100",
    badge: "bg-purple-500",
    title: "Technology & Society",
    passage: `The rapid development of artificial intelligence is transforming the way we work, communicate, and make decisions. While many people fear that automation will eliminate jobs, others argue that it will create new opportunities that we cannot yet imagine. What is certain is that the ability to adapt, think critically, and communicate across cultures will become increasingly valuable in the years ahead. Investing in language skills today is one of the smartest decisions a professional can make.`,
    tip: "Focus on: linking words naturally ('while', 'others argue', 'what is certain'), and the stress on 'increasingly' and 'transforming'.",
  },
  {
    id: "C1",
    label: "C1 — Advanced",
    color: "border-orange-400 bg-orange-50 text-orange-700",
    activeColor: "border-orange-500 bg-orange-100",
    badge: "bg-orange-500",
    title: "Leadership & Communication",
    passage: `Effective leadership in the modern workplace demands far more than technical expertise. It requires the ability to articulate a compelling vision, inspire diverse teams, and navigate complex interpersonal dynamics with both confidence and empathy. Research consistently demonstrates that leaders who communicate with clarity and authenticity foster higher levels of trust, engagement, and innovation within their organisations. Ultimately, the most transformative skill a leader can develop is not strategic thinking — it is the capacity to make others feel genuinely heard and understood.`,
    tip: "Focus on: natural pausing at commas and dashes, the stress on 'articulate', 'authenticity', and 'transformative', and maintaining a confident, steady pace throughout.",
  },
];

const AGE_GROUPS = ["15–20", "20–25", "25–30", "30+"];

type RecordingState = "idle" | "recording" | "recorded" | "submitting" | "done";

interface AuditResult {
  score: number;
  transcript: string;
  strengths: string;
  improvements: string;
  coachNote: string;
  transcriptionError?: boolean;
}

export default function AudioAudit() {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [recordingState, setRecordingState] = useState<RecordingState>("idle");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [error, setError] = useState("");
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [mimeType, setMimeType] = useState("audio/webm");

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const level = LEVELS[selectedLevel];

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Pick the best supported MIME type
      const preferredTypes = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus", "audio/mp4"];
      const supported = preferredTypes.find((t) => MediaRecorder.isTypeSupported(t)) || "audio/webm";
      setMimeType(supported);

      const mediaRecorder = new MediaRecorder(stream, { mimeType: supported });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: supported });
        const url = URL.createObjectURL(blob);
        setAudioBlob(blob);
        setAudioUrl(url);
        setRecordingState("recorded");
        stream.getTracks().forEach((t) => t.stop());
      };

      mediaRecorder.start(250); // collect data every 250ms
      setRecordingState("recording");
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime((t) => {
          if (t >= 120) {
            stopRecording();
            return t;
          }
          return t + 1;
        });
      }, 1000);
    } catch (err) {
      setPermissionDenied(true);
    }
  };

  const stopRecording = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
  };

  const playAudio = () => {
    if (!audioUrl) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onended = () => setIsPlaying(false);
    }
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const resetRecording = () => {
    setAudioBlob(null);
    setAudioUrl(null);
    setRecordingState("idle");
    setIsPlaying(false);
    setRecordingTime(0);
    setResult(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim() || !ageGroup) {
      setError("من فضلك أكمل جميع الحقول المطلوبة.");
      return;
    }
    if (!audioBlob) {
      setError("من فضلك سجّل صوتك أولاً.");
      return;
    }

    setRecordingState("submitting");
    setError("");

    try {
      // Convert audio blob to base64
      const arrayBuffer = await audioBlob.arrayBuffer();
      const base64 = btoa(
        new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), "")
      );

      const response = await fetch("/api/audio-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          whatsapp,
          ageGroup,
          level: level.label,
          sentence: level.passage,
          audioBase64: base64,
          mimeType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
        setRecordingState("done");
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback: still show WhatsApp redirect even if AI scoring fails
      setResult({
        score: 0,
        transcript: "",
        strengths: "",
        improvements: "",
        coachNote: "Your audio was received. The coach will review it manually and send you feedback on WhatsApp.",
        transcriptionError: true,
      });
      setRecordingState("done");
    }
  };

  const whatsappMessage = result
    ? encodeURIComponent(
        `السلام عليكم أستاذ إبراهيم!\n\nأنا ${name}، عمري ${ageGroup} سنة.\nأجريت اختبار النطق (${level.label}) على موقع Fluentry.\n\nنتيجتي: ${result.score}/10\n\nأرجو أن ترسل لي تقييمك وملاحظاتك. شكراً! 🙏`
      )
    : "";

  return (
    <>
      <SEO
        title="Instant Audio Audit — اختبار النطق المجاني | Fluentry"
        description="سجّل صوتك وأنت تقرأ بالإنجليزية واحصل على تقييم فوري من الذكاء الاصطناعي + ملاحظات شخصية من الأستاذ إبراهيم."
        path="/audio-audit"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-10 px-4">
        <div className="container mx-auto max-w-2xl">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Mic className="w-4 h-4" />
              مجاني 100% — Gratuit
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              🎙️ اختبار النطق الفوري
            </h1>
            <p className="text-lg font-semibold text-blue-700 mb-2">Instant Audio Pronunciation Audit</p>
            <p className="text-gray-600 max-w-lg mx-auto text-sm">
              اقرأ النص بصوت عالٍ، سجّل نفسك، وستحصل على تقييم فوري من الذكاء الاصطناعي — ثم يرسل لك الأستاذ إبراهيم ملاحظاته الشخصية على واتساب.
            </p>
          </div>

          {/* ── DONE STATE ──────────────────────────────────────────────────── */}
          {recordingState === "done" && result ? (
            <div className="space-y-4">
              {/* Score Card */}
              <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-blue-200">
                <div className="text-center mb-6">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">نتيجتك</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <div
                        key={n}
                        className={`w-5 h-5 rounded-full ${n <= result.score ? "bg-blue-500" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                  <p className="text-5xl font-extrabold text-blue-600">{result.score}<span className="text-2xl text-gray-400">/10</span></p>
                  <p className="text-sm text-gray-500 mt-1">{level.label}</p>
                </div>

                {result.transcript && !result.transcriptionError && (
                  <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">ما قلته (Whisper)</p>
                    <p className="text-gray-700 text-sm italic">"{result.transcript}"</p>
                  </div>
                )}

                {result.strengths && result.strengths !== "N/A" && (
                  <div className="flex items-start gap-3 bg-green-50 rounded-2xl p-4 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-green-700 uppercase mb-1">نقاط القوة</p>
                      <p className="text-sm text-gray-700">{result.strengths}</p>
                    </div>
                  </div>
                )}

                {result.improvements && result.improvements !== "N/A" && (
                  <div className="flex items-start gap-3 bg-orange-50 rounded-2xl p-4 mb-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-orange-700 uppercase mb-1">ما يجب تحسينه</p>
                      <p className="text-sm text-gray-700">{result.improvements}</p>
                    </div>
                  </div>
                )}

                {result.coachNote && (
                  <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                    <p className="text-xs font-bold text-blue-700 uppercase mb-1">ملاحظة الأستاذ</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{result.coachNote}</p>
                  </div>
                )}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-6 text-white text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-xl font-bold mb-2">احصل على تقييم شخصي من الأستاذ إبراهيم</h3>
                <p className="text-green-100 text-sm mb-4">
                  أرسل نتيجتك على واتساب وسيرسل لك الأستاذ رسالة صوتية بملاحظاته خلال 24 ساعة.
                </p>
                <a
                  href={`https://wa.me/212672580932?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-2xl text-base shadow-lg hover:bg-green-50 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  أرسل نتيجتي على واتساب
                </a>
                <p className="text-green-200 text-xs mt-3">سيُرسَل اسمك ونتيجتك تلقائياً في الرسالة</p>
              </div>

              {/* Try again */}
              <div className="text-center">
                <button
                  onClick={() => { resetRecording(); setSelectedLevel(0); }}
                  className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1 mx-auto"
                >
                  <RotateCcw className="w-4 h-4" />
                  جرّب مرة أخرى بمستوى مختلف
                </button>
              </div>
            </div>

          ) : (
            /* ── MAIN FLOW ──────────────────────────────────────────────────── */
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

              {/* Step 1: Choose Level */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <h2 className="font-bold text-gray-900">اختر مستواك</h2>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {LEVELS.map((l, i) => (
                    <button
                      key={l.id}
                      onClick={() => { setSelectedLevel(i); resetRecording(); }}
                      className={`p-3 rounded-xl text-xs font-semibold border-2 transition-all text-left ${
                        selectedLevel === i ? l.activeColor + " border-2" : "border-gray-200 text-gray-600 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <span className={`inline-block px-2 py-0.5 rounded-full text-white text-xs mb-1 ${l.badge}`}>{l.id}</span>
                      <br />
                      {l.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Read the Passage */}
              <div className="p-6 border-b border-gray-100 bg-slate-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <h2 className="font-bold text-gray-900">اقرأ هذا النص بصوت عالٍ</h2>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-slate-200">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">
                    {level.label} — {level.title}
                  </p>
                  <p className="text-gray-800 leading-relaxed text-base font-medium">
                    {level.passage}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-xs text-blue-600">
                      💡 <strong>Tip:</strong> {level.tip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Record */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <h2 className="font-bold text-gray-900">سجّل صوتك</h2>
                </div>

                {permissionDenied ? (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
                    <p className="text-red-700 font-semibold mb-1">⚠️ لم يُسمح بالوصول للميكروفون</p>
                    <p className="text-sm text-red-500">اسمح للمتصفح باستخدام الميكروفون ثم أعد تحميل الصفحة.</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    {recordingState === "idle" && (
                      <>
                        <button
                          onClick={startRecording}
                          className="w-24 h-24 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-200 transition-all hover:scale-105 active:scale-95"
                        >
                          <Mic className="w-10 h-10" />
                        </button>
                        <p className="text-sm text-gray-400 text-center">اضغط لبدء التسجيل — حد أقصى 2 دقيقة</p>
                      </>
                    )}

                    {recordingState === "recording" && (
                      <>
                        <button
                          onClick={stopRecording}
                          className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-300 animate-pulse"
                        >
                          <MicOff className="w-10 h-10" />
                        </button>
                        <div className="flex items-center gap-2 text-red-600 font-bold text-lg">
                          <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                          {Math.floor(recordingTime / 60)}:{String(recordingTime % 60).padStart(2, "0")}
                        </div>
                        <p className="text-xs text-gray-400">اضغط مرة أخرى لإيقاف التسجيل</p>
                      </>
                    )}

                    {(recordingState === "recorded" || recordingState === "submitting") && (
                      <div className="w-full">
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-green-500" />
                            <div>
                              <p className="font-semibold text-green-700 text-sm">تم التسجيل!</p>
                              <p className="text-xs text-gray-500">
                                المدة: {Math.floor(recordingTime / 60)}:{String(recordingTime % 60).padStart(2, "0")}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={playAudio}
                              disabled={recordingState === "submitting"}
                              className="w-10 h-10 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
                            >
                              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </button>
                            <button
                              onClick={resetRecording}
                              disabled={recordingState === "submitting"}
                              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors disabled:opacity-50"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Step 4: Fill Info & Submit */}
              {(recordingState === "recorded" || recordingState === "submitting") && (
                <div className="p-6 bg-blue-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                    <h2 className="font-bold text-gray-900">أدخل معلوماتك للحصول على تقييمك</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">الاسم الكامل *</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="مثال: يوسف أمين"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                          required
                          disabled={recordingState === "submitting"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">رقم واتساب *</label>
                        <input
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+212 6XX XXX XXX"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                          required
                          disabled={recordingState === "submitting"}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">الفئة العمرية *</label>
                      <div className="grid grid-cols-4 gap-2">
                        {AGE_GROUPS.map((ag) => (
                          <button
                            key={ag}
                            type="button"
                            onClick={() => setAgeGroup(ag)}
                            disabled={recordingState === "submitting"}
                            className={`py-2 px-3 rounded-xl text-sm font-semibold border-2 transition-all ${
                              ageGroup === ag
                                ? "border-blue-500 bg-blue-500 text-white"
                                : "border-gray-200 bg-white text-gray-600 hover:border-blue-300"
                            }`}
                          >
                            {ag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" /> {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={recordingState === "submitting"}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base shadow-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      {recordingState === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          جاري التحليل بالذكاء الاصطناعي...
                        </>
                      ) : (
                        <>
                          <Star className="w-5 h-5" />
                          احصل على تقييمك الآن
                        </>
                      )}
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      🔒 معلوماتك آمنة — سيتواصل معك الأستاذ إبراهيم على واتساب بملاحظاته الشخصية
                    </p>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Bottom nav */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm mb-3">تريد اختبار مستواك الكامل؟</p>
            <Link href="/free-test">
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold">
                اختبار المستوى الكامل
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
