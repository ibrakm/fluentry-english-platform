/**
 * /audio-audit — Instant Audio Audit Feature
 *
 * Students record themselves reading a sentence.
 * They enter their WhatsApp number to get personal feedback from the teacher.
 * The teacher receives a notification with the audio and the student's contact info.
 */

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Play, Pause, Send, CheckCircle, ArrowRight, RotateCcw } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

const SENTENCES = [
  {
    level: "A2 – Beginner",
    sentence: "I usually go to the market on Saturday morning to buy fresh vegetables.",
    tip: "Focus on the 'v' sound in 'vegetables' — it's not 'b'!",
  },
  {
    level: "B1 – Intermediate",
    sentence: "Learning a new language takes time and practice, but the results are worth the effort.",
    tip: "Make sure to stress the word 'worth' — it carries the meaning of the sentence.",
  },
  {
    level: "B2 – Upper Intermediate",
    sentence: "Effective communication in the workplace helps teams collaborate and achieve their goals.",
    tip: "The word 'collaborate' is often mispronounced. It's col-LAB-or-ate.",
  },
  {
    level: "C1 – Advanced",
    sentence: "The ability to express complex ideas with clarity and precision distinguishes confident speakers.",
    tip: "Try to sound natural and not robotic. Use pauses for emphasis.",
  },
];

type RecordingState = "idle" | "recording" | "recorded" | "submitted";

export default function AudioAudit() {
  const [selectedSentence, setSelectedSentence] = useState(0);
  const [recordingState, setRecordingState] = useState<RecordingState>("idle");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [permissionDenied, setPermissionDenied] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioBlob(blob);
        setAudioUrl(url);
        setRecordingState("recorded");
        stream.getTracks().forEach((t) => t.stop());
      };

      mediaRecorder.start();
      setRecordingState("recording");
      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime((t) => {
          if (t >= 30) {
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
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) {
      setError("من فضلك أدخل اسمك ورقم واتساب.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      // Submit lead info to Google Sheets
      await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          whatsapp,
          source: "Audio Audit Feature",
          level: SENTENCES[selectedSentence].level,
          score: "N/A",
          testType: "Audio Audit",
          sentence: SENTENCES[selectedSentence].sentence,
        }),
      });
    } catch (_) {
      // Don't block even if API fails
    }

    setRecordingState("submitted");
    setLoading(false);
  };

  const sentence = SENTENCES[selectedSentence];

  return (
    <>
      <SEO
        title="Instant Audio Audit — Get Personal Pronunciation Feedback | Fluentry"
        description="Record yourself speaking English and get personal feedback from Mr. Ibrahim within 24 hours. Free pronunciation audit for Moroccan learners."
        path="/audio-audit"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
        <div className="container mx-auto max-w-2xl">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Mic className="w-4 h-4" />
              مجاني 100% — Gratuit
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              🎙️ اختبار النطق الفوري
            </h1>
            <p className="text-xl font-semibold text-blue-700 mb-2">Instant Audio Audit</p>
            <p className="text-gray-600 max-w-lg mx-auto">
              سجّل صوتك وأنت تقرأ جملة واحدة — وسأرسل لك تقييماً شخصياً على واتساب خلال 24 ساعة.
            </p>
            <p className="text-sm text-gray-400 mt-1 italic">
              Enregistre-toi en lisant une phrase — je t'envoie un retour personnel sur WhatsApp sous 24h.
            </p>
          </div>

          {recordingState === "submitted" ? (
            /* SUCCESS STATE */
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center border-2 border-green-400">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-700 mb-3">شكراً! تسجيلك وصل</h2>
              <p className="text-gray-600 mb-2">سيرسل لك الأستاذ إبراهيم تقييماً صوتياً شخصياً على واتساب خلال 24 ساعة.</p>
              <p className="text-gray-400 text-sm italic mb-8">Mr. Ibrahim vous enverra un retour vocal personnalisé sur WhatsApp sous 24h.</p>
              <div className="bg-blue-50 rounded-2xl p-4 mb-6 text-left">
                <p className="text-sm font-semibold text-blue-800 mb-1">الجملة التي سجّلتها:</p>
                <p className="text-gray-700 italic">"{sentence.sentence}"</p>
                <p className="text-xs text-blue-600 mt-2">💡 {sentence.tip}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/free-test">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl w-full sm:w-auto">
                    خذ اختبار المستوى الكامل
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a
                  href={`https://wa.me/212672580932?text=${encodeURIComponent(`السلام عليكم أستاذ إبراهيم! أنا ${name}، سجّلت صوتي في اختبار النطق على موقعك. في انتظار تقييمك 🙏`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 font-bold px-6 py-3 rounded-xl w-full sm:w-auto">
                    راسلني على واتساب
                  </Button>
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

              {/* Step 1: Choose Sentence */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <h2 className="font-bold text-gray-900 text-lg">اختر الجملة المناسبة لمستواك</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {SENTENCES.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => { setSelectedSentence(i); resetRecording(); }}
                      className={`p-3 rounded-xl text-xs font-semibold border-2 transition-all text-left ${
                        selectedSentence === i
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 text-gray-600 hover:border-blue-300"
                      }`}
                    >
                      {s.level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: The Sentence */}
              <div className="p-6 border-b border-gray-100 bg-blue-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <h2 className="font-bold text-gray-900 text-lg">اقرأ هذه الجملة بصوت عالٍ</h2>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-blue-200">
                  <p className="text-xl font-semibold text-gray-900 leading-relaxed text-center mb-3">
                    "{sentence.sentence}"
                  </p>
                  <p className="text-xs text-blue-600 text-center">
                    💡 Tip: {sentence.tip}
                  </p>
                </div>
              </div>

              {/* Step 3: Record */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <h2 className="font-bold text-gray-900 text-lg">سجّل صوتك</h2>
                </div>

                {permissionDenied ? (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
                    <p className="text-red-700 font-semibold mb-2">⚠️ لم يتم السماح بالوصول للميكروفون</p>
                    <p className="text-sm text-red-500">يرجى السماح للمتصفح باستخدام الميكروفون وإعادة تحميل الصفحة.</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    {recordingState === "idle" && (
                      <button
                        onClick={startRecording}
                        className="w-24 h-24 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-300 transition-all hover:scale-105"
                      >
                        <Mic className="w-10 h-10" />
                      </button>
                    )}

                    {recordingState === "recording" && (
                      <>
                        <button
                          onClick={stopRecording}
                          className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-400 animate-pulse"
                        >
                          <MicOff className="w-10 h-10" />
                        </button>
                        <div className="flex items-center gap-2 text-red-600 font-semibold">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                          جاري التسجيل... {recordingTime}s
                        </div>
                        <p className="text-xs text-gray-400">اضغط لإيقاف التسجيل (حد أقصى 30 ثانية)</p>
                      </>
                    )}

                    {recordingState === "recorded" && (
                      <div className="w-full space-y-4">
                        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-green-500" />
                            <div>
                              <p className="font-semibold text-green-700 text-sm">تم التسجيل بنجاح!</p>
                              <p className="text-xs text-gray-500">المدة: {recordingTime} ثانية</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={playAudio}
                              className="w-10 h-10 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full flex items-center justify-center transition-colors"
                            >
                              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </button>
                            <button
                              onClick={resetRecording}
                              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {recordingState === "idle" && (
                      <p className="text-sm text-gray-400 text-center">
                        اضغط على الزر الأحمر لبدء التسجيل
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Step 4: Submit */}
              {recordingState === "recorded" && (
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                    <h2 className="font-bold text-gray-900 text-lg">أرسل للحصول على تقييمك</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">اسمك *</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="مثال: سارة أمين"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">رقم واتساب *</label>
                        <input
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+212 6XX XXX XXX"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                          required
                        />
                      </div>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base shadow-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      {loading ? "جاري الإرسال..." : "أرسل واحصل على تقييمك المجاني"}
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      🔒 معلوماتك آمنة 100% — سيتواصل معك الأستاذ إبراهيم على واتساب خلال 24 ساعة
                    </p>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-3">هل تريد تقييماً أكثر شمولاً؟</p>
            <Link href="/free-test">
              <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold">
                خذ اختبار المستوى الكامل
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
