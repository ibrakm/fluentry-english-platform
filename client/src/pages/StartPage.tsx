/**
 * /start — Facebook Ads Dedicated Landing Page
 *
 * Optimised for Facebook ad traffic from Morocco.
 * - NO navigation menu (reduces distraction, maximises conversions)
 * - Bilingual: Arabic (Darija) primary, French as subtitle — never mixed on same line
 * - Single goal: Get visitor to send a WhatsApp message to Mr. Ibrahim
 */

import { Button } from "@/components/ui/button";
import {
  CheckCircle, Star, Award, MessageCircle, Clock, Users,
  ArrowRight, Zap, Shield, Download, BookOpen, Mic
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── Facebook Pixel Helper ─────────────────────────────────────────────────────
declare global {
  interface Window { fbq?: (...args: unknown[]) => void; }
}
function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Fatima Z.",
    roleAr: "مديرة موارد بشرية — الدار البيضاء",
    roleFr: "DRH — Casablanca",
    textAr: "بعد شهرين مع الأستاذ إبراهيم، حصلت على 7.5 في IELTS. طريقته مختلفة تماماً!",
    textFr: "Après 2 mois avec Mr. Ibrahim, j'ai obtenu 7.5 à l'IELTS.",
    result: "IELTS 7.5 ✅",
    stars: 5,
  },
  {
    name: "Youssef A.",
    roleAr: "مهندس برمجيات — الرباط",
    roleFr: "Ingénieur logiciel — Rabat",
    textAr: "الآن أقود اجتماعات بالإنجليزية مع عملاء دوليين. من B1 إلى C1 في 4 أشهر!",
    textFr: "Je dirige maintenant des réunions en anglais. De B1 à C1 en 4 mois !",
    result: "B1 → C1 ✅",
    stars: 5,
  },
  {
    name: "Nadia B.",
    roleAr: "طالبة — مراكش",
    roleFr: "Étudiante — Marrakech",
    textAr: "الدروس عملية وممتعة. توقفت عن الخوف من التحدث بالإنجليزية!",
    textFr: "Les cours sont pratiques et amusants. J'ai arrêté d'avoir peur de parler anglais !",
    result: "Confidence ✅",
    stars: 5,
  },
];

// ─── Pain points ──────────────────────────────────────────────────────────────
const painPoints = [
  { ar: "تتجمد وأنت تتكلم الإنجليزية؟", fr: "Tu bloques quand tu parles anglais ?" },
  { ar: "تفهم كل شيء لكن ما تقدرش تعبر عن نفسك؟", fr: "Tu comprends tout mais tu n'arrives pas à t'exprimer ?" },
  { ar: "خايف من الأخطاء أمام الناس؟", fr: "Tu as peur de faire des erreurs devant les autres ?" },
  { ar: "محتاج الإنجليزية للشغل أو الدراسة؟", fr: "Tu as besoin de l'anglais pour le travail ou les études ?" },
];

// ─── Lead Magnet Form ─────────────────────────────────────────────────────────
function LeadMagnetForm() {
  const { langPrefix } = useLanguage();
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) {
      setError("من فضلك أدخل اسمك ورقم واتساب.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, whatsapp, source: "Lead Magnet — 50 Mistakes PDF", level: "N/A", score: "N/A", testType: "PDF Download" }),
      });
    } catch (_) { /* Don't block download if API fails */ }
    setSubmitted(true);
    setLoading(false);
    // Facebook Pixel: Lead event — user submitted form to get the PDF
    trackPixel("Lead", { content_name: "50 Mistakes PDF Lead Magnet", content_category: "English Coaching" });
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-green-400">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-green-700 mb-1">مبروك! الدليل جاهز ليك</h3>
        <p className="text-gray-500 text-sm mb-5">Félicitations ! Votre guide est prêt à télécharger.</p>
        <a
          href={`${langPrefix}/50_Common_Mistakes_Fluentry.pdf`}
          download="50_Common_Mistakes_Fluentry.pdf"
          onClick={() => trackPixel("CompleteRegistration", { content_name: "50 Mistakes PDF Downloaded", value: 0, currency: "MAD" })}
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-colors mb-6"
        >
          <Download className="w-5 h-5" />
          حمّل الدليل الآن
        </a>
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm font-bold text-blue-800 mb-1">الخطوة الجاية:</p>
          <p className="text-xs text-blue-600 mb-3">Prochaine étape — contacte Mr. Ibrahim sur WhatsApp</p>
          <a
            href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20حملت%20الدليل%20وبغيت%20نبدأ%20الدروس"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            راسلني على واتساب لنبدأ
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">سيتواصل معك الأستاذ إبراهيم قريباً على واتساب 📱</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-orange-200">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* What's inside */}
        <div className="md:w-1/2">
          <h3 className="font-bold text-gray-900 text-base mb-1">ما فيه الدليل:</h3>
          <p className="text-xs text-gray-400 italic mb-3">Ce que contient le guide</p>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "أخطاء النطق (P vs B, TH, Silent H)",
              "أخطاء القواعد (Have/Be, Tenses)",
              "False Friends مع الفرنسية",
              "أخطاء حروف الجر",
              "تعابير يومية غلط",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
            <BookOpen className="w-4 h-4" />
            <span>PDF مجاني · 50 درساً · مخصص للمغاربة</span>
          </div>
        </div>

        {/* Form */}
        <div className="md:w-1/2 w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">اسمك الكامل *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثال: يوسف أمين"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
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
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base shadow-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-5 h-5" />
              {loading ? "جاري التحميل..." : "احصل على الدليل المجاني"}
            </button>
            <p className="text-xs text-gray-400 text-center">🔒 معلوماتك آمنة 100%</p>
          </form>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function StartPage() {
  const { langPrefix } = useLanguage();
  // Facebook Pixel: ViewContent event when the /start page loads
  useEffect(() => {
    trackPixel("ViewContent", {
      content_name: "Start Page — Facebook Ad Landing Page",
      content_category: "English Coaching",
      content_type: "landing_page",
    });
  }, []);

  return (
    <>
      <SEO
        title="كوتش إنجليزية أونلاين بالمغرب | نتائج مضمونة — Fluentry"
        description="تعلم الإنجليزية مع كوتش متخصص بالمغرب. نتائج مضمونة. IELTS، إنجليزية الأعمال، والمحادثة. احجز استشارتك المجانية الآن."
        path="/start"
      />

      {/* NO Header — intentional for ad landing pages */}
      <div className="min-h-screen bg-white" dir="rtl">

        {/* ── URGENCY BAR ── */}
        <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-bold" dir="rtl">
          ⚡ عدد الأماكن المتاحة هذا الشهر محدود — احجز الآن
        </div>

        {/* ── TRUST BAR ── */}
        <div className="bg-green-700 text-white text-center py-2 px-4 text-sm font-medium">
          🇲🇦 تعلم الإنجليزية بالمغرب · 100% Online · Coaching Anglais au Maroc
        </div>

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-4" dir="rtl">
          <div className="container mx-auto max-w-4xl text-center">

            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Award className="w-4 h-4" />
              TESOL-Certified · +100 Students · Morocco
            </div>

            {/* Headline — Arabic only, clean */}
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight text-yellow-300">
              تجمد وأنت تتكلم الإنجليزية؟
            </h1>
            <p className="text-blue-200 text-lg md:text-xl italic mb-6">
              Tu bloques quand tu parles anglais ?
            </p>

            {/* Outcome promise box */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-6 max-w-2xl mx-auto">
              <p className="text-base font-bold text-yellow-300 mb-1">خلال 8 أسابيع فقط:</p>
              <p className="text-blue-300 text-xs italic mb-3">En seulement 8 semaines :</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                {[
                  { ar: "تتكلم بثقة", fr: "Tu parles avec confiance", icon: "🗣️" },
                  { ar: "تحقق IELTS 7.5+", fr: "Tu atteins IELTS 7.5+", icon: "🎯" },
                  { ar: "تقود اجتماعاتك", fr: "Tu diriges tes réunions", icon: "💼" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="text-white text-sm font-bold">{item.ar}</p>
                    <p className="text-blue-300 text-xs italic mt-1">{item.fr}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6" dir="ltr">
              <a
                href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20شفت%20الإعلان%20ديالك%20وبغيت%20نعرف%20أكثر%20على%20الدروس"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-6 rounded-xl shadow-2xl shadow-orange-500/40 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  راسلني على واتساب
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href={`${langPrefix}/free-test`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 font-bold text-base px-8 py-6 rounded-xl w-full sm:w-auto">
                  <Zap className="w-4 h-4 mr-2" />
                  اكتشف مستواك مجاناً
                </Button>
              </Link>
            </div>

            <p className="text-sm text-blue-300" dir="rtl">
              ✅ استشارة مجانية 10 دقائق &nbsp;·&nbsp; ✅ بدون التزام &nbsp;·&nbsp; ✅ نتائج مضمونة
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-blue-700">
              {[
                { stat: "100+", ar: "طالب تدرب معنا" },
                { stat: "4.9★", ar: "تقييم الطلاب" },
                { stat: "90%", ar: "يحققون هدفهم" },
                { stat: "8 أسابيع", ar: "للنتائج" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-yellow-300">{item.stat}</p>
                  <p className="text-sm text-blue-300 mt-1">{item.ar}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ── */}
        <section className="py-12 px-4 bg-gray-50" dir="rtl">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-1">
              واش هاد الحالة كتعرفها؟
            </h2>
            <p className="text-center text-gray-400 italic text-sm mb-8">Tu te reconnais dans ces situations ?</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {painPoints.map((point, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-red-100 flex items-start gap-3">
                  <span className="text-2xl mt-0.5 flex-shrink-0">😰</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{point.ar}</p>
                    <p className="text-gray-400 text-xs italic mt-1">{point.fr}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 p-6 bg-green-50 rounded-2xl border border-green-200">
              <p className="text-xl font-bold text-green-700 mb-1">✅ عندي الحل ليك!</p>
              <p className="text-gray-500 text-sm italic mb-5">J'ai la solution — coaching 1-sur-1 personnalisé.</p>
              <a
                href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20شفت%20الإعلان%20ديالك%20وبغيت%20نعرف%20أكثر%20على%20الدروس"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-xl shadow-lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  راسلني على واتساب الآن
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ── ABOUT MR. IBRAHIM ── */}
        <section className="py-12 px-4 bg-white" dir="rtl">
          <div className="container mx-auto max-w-3xl">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                IK
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Mr. Ibrahim K.</h2>
                <p className="text-blue-600 font-semibold text-sm mb-1">TESOL-Certified English Coach</p>
                <p className="text-gray-400 text-xs italic mb-3">Tangier, Morocco</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  أستاذ إبراهيم متخصص في تعليم الإنجليزية للمغاربة منذ أكثر من 3 سنوات. ساعد أكثر من 100 طالب على تحقيق أهدافهم — من IELTS إلى إنجليزية الأعمال. طريقته مبنية على التواصل الحقيقي، لا الحفظ.
                </p>
                <div className="flex flex-wrap gap-2 mt-4" dir="ltr">
                  {["TESOL Certified", "+100 Students", "4.9★ Rating", "3+ Years"].map((badge) => (
                    <span key={badge} className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LEAD MAGNET ── */}
        <section className="py-14 px-4 bg-gradient-to-br from-yellow-50 to-orange-50 border-y-2 border-orange-200" dir="rtl">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Download className="w-4 h-4" />
                هدية مجانية
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                📘 50 خطأ شائع يقع فيه المغاربة عند تعلّم الإنجليزية
              </h2>
              <p className="text-gray-400 italic text-sm mb-3">Les 50 erreurs les plus fréquentes des Marocains en anglais</p>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                دليل مجاني مخصص للمتعلمين المغاربة — يشرح كل خطأ بوضوح ويقدّم الصيغة الصحيحة.
              </p>
            </div>
            <LeadMagnetForm />
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-12 px-4 bg-white" dir="rtl">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-1">
              كيفاش كيمشي الأمر؟
            </h2>
            <p className="text-center text-gray-400 italic text-sm mb-10">Comment ça marche ?</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: "1", ar: "راسلني على واتساب", fr: "Envoie-moi un message WhatsApp", icon: "💬", desc: "نتناقشو على هدفك ومستواك في 10 دقائق مجاناً" },
                { step: "2", ar: "احصل على خطتك", fr: "Reçois ton plan personnalisé", icon: "📋", desc: "خطة مخصصة ليك 100% مع أهداف واضحة" },
                { step: "3", ar: "حقق هدفك", fr: "Atteins ton objectif", icon: "🏆", desc: "دروس مخصصة أونلاين مع ضمان النتائج" },
              ].map((item) => (
                <div key={item.step} className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    {item.step}
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{item.ar}</p>
                  <p className="text-gray-400 text-xs italic mb-2">{item.fr}</p>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-12 px-4 bg-gray-50" dir="rtl">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-1">
              شنو قالو الطلاب
            </h2>
            <p className="text-center text-gray-400 italic text-sm mb-8">Ce que disent nos étudiants</p>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex" dir="ltr">
                      {[...Array(t.stars)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{t.result}</span>
                  </div>
                  {/* Arabic review — primary */}
                  <p className="text-gray-800 text-sm font-medium leading-relaxed mb-2">"{t.textAr}"</p>
                  {/* French — secondary, subtle */}
                  <p className="text-gray-400 text-xs italic mb-4">"{t.textFr}"</p>
                  <div className="border-t pt-3">
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.roleAr}</p>
                    <p className="text-gray-400 text-xs italic">{t.roleFr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING TEASER ── */}
        <section className="py-12 px-4 bg-white" dir="rtl">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">الأثمنة</h2>
            <p className="text-gray-400 italic text-sm mb-8">Les Tarifs — à partir de 200 MAD/mois</p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { nameAr: "جماعي", nameFr: "Groupe", price: "200 MAD", period: "/شهر", desc: "8 حصص · مجموعة صغيرة", color: "border-green-400" },
                { nameAr: "عادي", nameFr: "Standard", price: "800 MAD", period: "/شهر", desc: "8 حصص · 1-على-1", color: "border-blue-500", popular: true },
                { nameAr: "مكثف", nameFr: "Intensif", price: "1,600 MAD", period: "/شهر", desc: "16 حصة · 1-على-1", color: "border-purple-500" },
              ].map((pkg) => (
                <div key={pkg.nameAr} className={`relative border-2 ${pkg.color} rounded-2xl p-4 sm:p-5 ${pkg.popular ? "bg-blue-50 shadow-lg" : "bg-white"}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      الأكثر طلباً
                    </div>
                  )}
                  <p className="font-bold text-gray-900">{pkg.nameAr}</p>
                  <p className="text-gray-400 text-xs italic mb-3">{pkg.nameFr}</p>
                  <p className="text-2xl font-extrabold text-gray-900">{pkg.price}<span className="text-sm font-normal text-gray-500">{pkg.period}</span></p>
                  <p className="text-sm text-gray-600 mt-2">{pkg.desc}</p>
                </div>
              ))}
            </div>
            <Link href={`${langPrefix}/pricing`}>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                شوف كل الأثمنة
                <ArrowRight className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* ── GUARANTEE ── */}
        <section className="py-10 px-4 bg-green-50 border-y-2 border-green-200" dir="rtl">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h2 className="text-2xl font-bold text-green-800 mb-1">ضمان النتائج</h2>
            <p className="text-green-600 italic text-sm mb-3">Garantie de Résultats</p>
            <p className="text-green-700 text-sm max-w-xl mx-auto">
              إذا ما حققتش هدفك بعد إتمام البرنامج، الأستاذ إبراهيم سيكمل معك الدروس مجاناً حتى تصل لهدفك. صفر مخاطرة.
            </p>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-700 text-white" dir="rtl">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">جاهز تبدأ؟</h2>
            <p className="text-blue-300 italic text-sm mb-4">Prêt à commencer ?</p>
            <p className="text-blue-200 mb-6 text-base">
              راسلني على واتساب الآن — استشارة مجانية 10 دقائق وبنبنيو خطتك معاً.
            </p>

            <div className="bg-red-500/20 border border-red-400/40 rounded-xl p-4 mb-6">
              <p className="text-red-300 font-bold text-sm">
                ⚡ الأماكن المتاحة هذا الشهر محدودة جداً
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center" dir="ltr">
              <a
                href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20شفت%20الإعلان%20ديالك%20وبغيت%20نعرف%20أكثر%20على%20الدروس"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-6 rounded-xl shadow-2xl shadow-orange-500/40 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  راسلني على واتساب الآن
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href={`${langPrefix}/free-test`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 font-bold text-base px-8 py-6 rounded-xl w-full sm:w-auto">
                  <Zap className="w-4 h-4 mr-2" />
                  اكتشف مستواك مجاناً
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-blue-300" dir="rtl">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> استشارة مجانية</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> بدون التزام</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-green-400" /> نتائج مضمونة</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> 100% أونلاين</span>
            </div>
          </div>
        </section>

        {/* ── AUDIO AUDIT CTA ── */}
        <section className="py-12 px-4 bg-white border-t border-gray-100" dir="rtl">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-800 rounded-3xl p-8 text-white text-center">
              <div className="text-4xl mb-3">🎤</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">اختبر نطقك الآن — مجاناً</h2>
              <p className="text-blue-300 italic text-sm mb-4">Teste ta prononciation maintenant — gratuitement</p>
              <p className="text-blue-300 text-sm mb-6 max-w-lg mx-auto">
                سجّل صوتك وأنت تقرأ جملة واحدة. الأستاذ إبراهيم سيرسل لك تقييماً شخصياً على واتساب خلال 24 ساعة.
              </p>
              <Link href={`${langPrefix}/audio-audit`}>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg" dir="ltr">
                  <Mic className="w-4 h-4 mr-2" />
                  ابدأ اختبار النطق المجاني
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── MINIMAL FOOTER ── */}
        <footer className="bg-gray-900 text-gray-400 py-6 px-4 text-center text-sm" dir="ltr">
          <p>© 2026 Fluentry — Coaching Anglais en Ligne au Maroc</p>
          <p className="mt-1">
            <Link href={`${langPrefix}`} className="text-blue-400 hover:text-blue-300 mx-2">Accueil</Link>
            <Link href={`${langPrefix}/pricing`} className="text-blue-400 hover:text-blue-300 mx-2">Tarifs</Link>
            <Link href={`${langPrefix}/free-test`} className="text-blue-400 hover:text-blue-300 mx-2">Test Gratuit</Link>
          </p>
        </footer>

      </div>
    </>
  );
}
