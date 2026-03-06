/**
 * /start — Facebook Ads Dedicated Landing Page
 *
 * Optimised for Facebook ad traffic from Morocco.
 * - NO navigation menu (reduces distraction, maximises conversions)
 * - Bilingual: French + Darija (Arabic) + English
 * - Single goal: Get visitor to send a WhatsApp message to Mr. Ibrahim
 * - Conversion-first structure: Hook → Pain → Solution → Proof → CTA → Urgency
 */

import { Button } from "@/components/ui/button";
import {
  CheckCircle, Star, Award, MessageCircle, Clock, Users,
  ArrowRight, Zap, Shield, Download, BookOpen, Mic, TrendingUp, Target
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { useState } from "react";

const testimonials = [
  {
    name: "Fatima Z.",
    role: "HR Manager — Casablanca",
    roleAr: "مديرة موارد بشرية — الدار البيضاء",
    text: "Après 2 mois avec Mr. Ibrahim, j'ai obtenu 7.5 à l'IELTS. Sa méthode est unique !",
    textAr: "بعد شهرين مع الأستاذ إبراهيم، حصلت على 7.5 في IELTS. طريقته مختلفة تماماً!",
    result: "IELTS 7.5 ✅",
    stars: 5,
  },
  {
    name: "Youssef A.",
    role: "Software Engineer — Rabat",
    roleAr: "مهندس برمجيات — الرباط",
    text: "Je dirige maintenant des réunions en anglais avec des clients internationaux. De B1 à C1 en 4 mois !",
    textAr: "الآن أقود اجتماعات بالإنجليزية مع عملاء دوليين. من B1 إلى C1 في 4 أشهر!",
    result: "B1 → C1 in 4 months ✅",
    stars: 5,
  },
  {
    name: "Nadia B.",
    role: "Student — Marrakech",
    roleAr: "طالبة — مراكش",
    text: "Les cours sont pratiques et amusants. J'ai arrêté d'avoir peur de parler anglais !",
    textAr: "الدروس عملية وممتعة. توقفت عن الخوف من التحدث بالإنجليزية!",
    result: "Confidence unlocked ✅",
    stars: 5,
  },
];

const painPoints = [
  { ar: "تتجمد وأنت تتكلم الإنجليزية؟", fr: "Tu bloques quand tu parles anglais ?" },
  { ar: "تفهم كل شيء لكن ما تقدرش تعبر عن نفسك؟", fr: "Tu comprends tout mais tu n'arrives pas à t'exprimer ?" },
  { ar: "خايف من الأخطاء أمام الناس؟", fr: "Tu as peur de faire des erreurs devant les autres ?" },
  { ar: "محتاج الإنجليزية للشغل أو الدراسة؟", fr: "Tu as besoin de l'anglais pour le travail ou les études ?" },
];

function LeadMagnetForm() {
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
        body: JSON.stringify({
          name,
          whatsapp,
          source: "Lead Magnet — 50 Mistakes PDF",
          level: "N/A",
          score: "N/A",
          testType: "PDF Download",
        }),
      });
    } catch (_) {
      // Don't block the download even if the API fails
    }
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-green-400">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-green-700 mb-2">مبروك! الدليل جاهز ليك</h3>
        <p className="text-gray-600 mb-4">Félicitations ! Votre guide est prêt à télécharger.</p>
        <a
          href="/50_Common_Mistakes_Fluentry.pdf"
          download="50_Common_Mistakes_Fluentry.pdf"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg transition-colors mb-4"
        >
          <Download className="w-5 h-5" />
          حمّل الدليل الآن — Télécharger
        </a>
        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm font-semibold text-blue-800 mb-2">الخطوة الجاية — Prochaine étape :</p>
          <a
            href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20حملت%20الدليل%20وبغيت%20نبدأ%20الدروس"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            راسلني على واتساب لنبدأ — Contacte-moi sur WhatsApp
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-4">سيتواصل معك الأستاذ إبراهيم قريباً على واتساب 📱</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-orange-200">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Left: What's inside */}
        <div className="md:w-1/2">
          <h3 className="font-bold text-gray-900 text-lg mb-3">ما فيه الدليل:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "أخطاء النطق (P vs B, TH, Silent H)",
              "أخطاء القواعد (Have/Be, Tenses)",
              "False Friends مع الفرنسية",
              "أخطاء الحروف الجر",
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

        {/* Right: Form */}
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
            <p className="text-xs text-gray-400 text-center">🔒 معلوماتك آمنة 100% — لن تُشارك مع أي طرف ثالث</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function StartPage() {
  return (
    <>
      <SEO
        title="كوتش إنجليزية أونلاين بالمغرب | نتائج مضمونة — Fluentry"
        description="تعلم الإنجليزية مع كوتش متخصص بالمغرب. نتائج مضمونة خلال 8 أسابيع. IELTS، إنجليزية الأعمال، والمحادثة. احجز استشارتك المجانية الآن."
        path="/start"
      />

      {/* NO Header — intentional for ad landing pages */}
      <div className="min-h-screen bg-white">

        {/* URGENCY TOP BAR */}
        <div className="bg-red-600 text-white text-center py-2 px-4 text-sm font-bold">
          ⚡ عدد الأماكن المتاحة هذا الشهر محدود — Places limitées ce mois-ci · <span className="underline">احجز الآن</span>
        </div>

        {/* TRUST BAR */}
        <div className="bg-green-700 text-white text-center py-2 px-4 text-sm font-medium">
          🇲🇦 &nbsp;
          <span className="text-yellow-300">تعلم الإنجليزية بالمغرب</span>
          &nbsp;·&nbsp;
          <span>Coaching Anglais en Ligne au Maroc</span>
          &nbsp;·&nbsp;
          <span className="text-yellow-300">100% Online · Résultats Garantis</span>
        </div>

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Award className="w-4 h-4" />
              TESOL-Certified · +100 Students · Morocco
            </div>

            {/* Pain point headline — bilingual */}
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="text-yellow-300">تجمد وأنت تتكلم الإنجليزية؟</span>
              <br />
              <span className="text-white text-2xl md:text-4xl">Tu bloques quand tu parles anglais ?</span>
            </h1>

            {/* Outcome promise */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-6 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl font-bold text-yellow-300 mb-1">
                خلال 8 أسابيع فقط — En seulement 8 semaines :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                {[
                  { ar: "تتكلم بثقة", fr: "Tu parles avec confiance", icon: "🗣️" },
                  { ar: "تحقق IELTS 7.5+", fr: "Tu atteins IELTS 7.5+", icon: "🎯" },
                  { ar: "تقود اجتماعاتك", fr: "Tu diriges tes réunions", icon: "💼" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="text-sm font-bold text-white">{item.ar}</p>
                    <p className="text-xs text-blue-200 italic">{item.fr}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MAIN CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20شفت%20الإعلان%20ديالك%20وبغيت%20نعرف%20أكثر%20على%20الدروس"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-lg px-5 sm:px-10 py-5 sm:py-6 rounded-xl shadow-2xl shadow-orange-500/40 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>راسلني على واتساب — WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
                </Button>
              </a>
              <Link href="/free-test">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 font-bold text-sm sm:text-lg px-5 sm:px-8 py-5 sm:py-6 rounded-xl w-full sm:w-auto"
                >
                  <Zap className="w-4 h-4 mr-2 flex-shrink-0" />
                  اكتشف مستواك مجاناً
                </Button>
              </Link>
            </div>

            <p className="text-sm text-blue-300">
              ✅ استشارة مجانية 10 دقائق · ✅ بدون التزام · ✅ نتائج مضمونة
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-blue-700">
              {[
                { stat: "100+", ar: "طالب تدرب معنا", fr: "Étudiants formés" },
                { stat: "4.9★", ar: "تقييم الطلاب", fr: "Note moyenne" },
                { stat: "90%", ar: "يحققون هدفهم", fr: "Atteignent leur objectif" },
                { stat: "8 أسابيع", ar: "للنتائج", fr: "Pour des résultats" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-yellow-300">{item.stat}</p>
                  <p className="text-sm text-blue-300">{item.ar}</p>
                  <p className="text-xs text-blue-400 italic">{item.fr}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
              واش هاد الحالة كتعرفها؟
            </h2>
            <p className="text-center text-gray-500 mb-8">Tu te reconnais dans ces situations ?</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {painPoints.map((point, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-red-100 flex items-start gap-3">
                  <span className="text-2xl mt-0.5">😰</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{point.ar}</p>
                    <p className="text-gray-500 text-xs mt-1 italic">{point.fr}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 p-6 bg-green-50 rounded-2xl border border-green-200">
              <p className="text-xl font-bold text-green-700 mb-2">✅ عندي الحل ليك!</p>
              <p className="text-gray-600 mb-6 text-sm">J'ai la solution — coaching 1-sur-1 personnalisé avec résultats garantis.</p>
              <a
                href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20شفت%20الإعلان%20ديالك%20وبغيت%20نعرف%20أكثر%20على%20الدروس"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm sm:text-base px-5 sm:px-8 py-5 rounded-xl shadow-lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  راسلني على واتساب الآن
                  <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT MR. IBRAHIM — builds trust */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                IK
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Mr. Ibrahim K.</h2>
                <p className="text-blue-600 font-semibold text-sm mb-3">TESOL-Certified English Coach · Tangier, Morocco</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  أستاذ إبراهيم متخصص في تعليم الإنجليزية للمغاربة منذ أكثر من 3 سنوات. ساعد أكثر من 100 طالب على تحقيق أهدافهم — من IELTS إلى إنجليزية الأعمال. طريقته مبنية على التواصل الحقيقي، لا الحفظ.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["TESOL Certified", "+100 Students", "4.9★ Rating", "3+ Years"].map((badge) => (
                    <span key={badge} className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD MAGNET — Free PDF Download */}
        <section className="py-14 px-4 bg-gradient-to-br from-yellow-50 to-orange-50 border-y-2 border-orange-200">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Download className="w-4 h-4" />
                هدية مجانية — Cadeau Gratuit
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                📘 50 خطأ شائع يقع فيه المغاربة عند تعلّم الإنجليزية
              </h2>
              <p className="text-gray-600 mb-2">Les 50 erreurs les plus fréquentes des Marocains en anglais</p>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                دليل مجاني مخصص للمتعلمين المغاربة — يشرح كل خطأ بوضوح ويقدّم الصيغة الصحيحة. حمّله الآن مجاناً!
              </p>
            </div>
            <LeadMagnetForm />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
              كيفاش كيمشي الأمر؟
            </h2>
            <p className="text-center text-gray-500 mb-10">Comment ça marche ?</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: "1", ar: "راسلني على واتساب", fr: "Envoie-moi un message WhatsApp", icon: "💬", desc: "نتناقشو على هدفك ومستواك في 10 دقائق مجاناً" },
                { step: "2", ar: "احصل على خطتك", fr: "Reçois ton plan personnalisé", icon: "📋", desc: "خطة مخصصة ليك 100% مع أهداف واضحة وأسابيع محددة" },
                { step: "3", ar: "حقق هدفك", fr: "Atteins ton objectif", icon: "🏆", desc: "دروس مخصصة أونلاين مع ضمان النتائج" },
              ].map((item) => (
                <div key={item.step} className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                    {item.step}
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{item.ar}</p>
                  <p className="text-gray-500 text-xs italic mb-2">{item.fr}</p>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS — with results */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
              شنو قالو الطلاب
            </h2>
            <p className="text-center text-gray-500 mb-8">Ce que disent nos étudiants — نتائج حقيقية</p>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex">
                      {[...Array(t.stars)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{t.result}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3 font-medium leading-relaxed">"{t.textAr}"</p>
                  <p className="text-gray-400 text-xs italic mb-4">"{t.text}"</p>
                  <div className="border-t pt-3">
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.roleAr}</p>
                    <p className="text-gray-400 text-xs italic">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING TEASER */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              الأثمنة — Les Tarifs
            </h2>
            <p className="text-gray-500 mb-8">من 500 درهم/شهر · À partir de 500 MAD/mois</p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { name: "Starter", nameAr: "المبتدئ", price: "500 MAD", period: "/شهر", lessons: "8 حصص", duration: "45 دقيقة", color: "border-green-400" },
                { name: "Standard", nameAr: "الاحترافي", price: "720 MAD", period: "/شهر", lessons: "8 حصص", duration: "ساعة كاملة", color: "border-blue-500", popular: true },
                { name: "Premium", nameAr: "المتميز", price: "960 MAD", period: "/شهر", lessons: "12 حصة", duration: "ساعة كاملة", color: "border-purple-500" },
              ].map((pkg) => (
                <div key={pkg.name} className={`relative border-2 ${pkg.color} rounded-2xl p-4 sm:p-5 ${pkg.popular ? "bg-blue-50 shadow-lg" : "bg-white"}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      الأكثر طلباً
                    </div>
                  )}
                  <p className="font-bold text-gray-900">{pkg.nameAr}</p>
                  <p className="text-gray-500 text-xs mb-3">{pkg.name}</p>
                  <p className="text-2xl font-extrabold text-gray-900">{pkg.price}<span className="text-sm font-normal text-gray-500">{pkg.period}</span></p>
                  <p className="text-sm text-gray-600 mt-2">{pkg.lessons} · {pkg.duration}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mb-4">كذلك متوفر: برنامج IELTS 8 أسابيع (12,000 MAD) مع ضمان النتائج</p>
            <Link href="/pricing">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-sm sm:text-base px-4">
                شوف كل الأثمنة — Voir tous les tarifs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* GUARANTEE SECTION */}
        <section className="py-10 px-4 bg-green-50 border-y-2 border-green-200">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">ضمان النتائج — Garantie de Résultats</h2>
            <p className="text-green-700 text-sm max-w-xl mx-auto">
              إذا ما حققتش هدفك بعد إتمام البرنامج، الأستاذ إبراهيم سيكمل معك الدروس مجاناً حتى تصل لهدفك. صفر مخاطرة.
              <br />
              <span className="italic text-green-600 text-xs">Si tu ne reaches pas ton objectif après le programme, Mr. Ibrahim continue à te coacher gratuitement jusqu'à ce que tu y arrives.</span>
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              جاهز تبدأ؟ — Prêt à commencer ?
            </h2>
            <p className="text-blue-200 mb-6 text-lg">
              راسلني على واتساب الآن — استشارة مجانية 10 دقائق وبنبنيو خطتك معاً.
              <br />
              <span className="text-sm italic">Contacte-moi sur WhatsApp — consultation gratuite de 10 min et on construit ton plan ensemble.</span>
            </p>

            {/* Urgency */}
            <div className="bg-red-500/20 border border-red-400/40 rounded-xl p-4 mb-6">
              <p className="text-red-300 font-bold text-sm">
                ⚡ تحذير: الأماكن المتاحة هذا الشهر محدودة جداً — Attention : places très limitées ce mois-ci
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20شفت%20الإعلان%20ديالك%20وبغيت%20نعرف%20أكثر%20على%20الدروس"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-xl shadow-2xl shadow-orange-500/40 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  راسلني على واتساب الآن
                  <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
                </Button>
              </a>
              <Link href="/free-test">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 font-bold text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-xl w-full sm:w-auto"
                >
                  <Zap className="w-4 h-4 mr-2 flex-shrink-0" />
                  اكتشف مستواك مجاناً
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-blue-300">
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> استشارة مجانية</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> بدون التزام</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-green-400" /> نتائج مضمونة</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-400" /> 100% أونلاين</span>
            </div>
          </div>
        </section>

        {/* AUDIO AUDIT CTA */}
        <section className="py-12 px-4 bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-800 rounded-3xl p-8 text-white text-center">
              <div className="text-4xl mb-3">🎤</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">اختبر نطقك الآن — مجاناً</h2>
              <p className="text-blue-200 mb-2">Teste ta prononciation maintenant — gratuitement</p>
              <p className="text-blue-300 text-sm mb-6 max-w-lg mx-auto">
                سجّل صوتك وأنت تقرأ جملة واحدة. الأستاذ إبراهيم سيرسل لك تقييماً شخصياً على واتساب خلال 24 ساعة.
              </p>
              <Link href="/audio-audit">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-bold text-sm sm:text-base px-6 sm:px-10 py-4 rounded-xl shadow-lg"
                >
                  <Mic className="w-4 h-4 mr-2" />
                  ابدأ اختبار النطق المجاني
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* MINIMAL FOOTER */}
        <footer className="bg-gray-900 text-gray-400 py-6 px-4 text-center text-sm">
          <p>© 2026 Fluentry — Coaching Anglais en Ligne au Maroc</p>
          <p className="mt-1">
            <Link href="/" className="text-blue-400 hover:text-blue-300 mx-2">Accueil</Link>
            <Link href="/pricing" className="text-blue-400 hover:text-blue-300 mx-2">Tarifs</Link>
            <Link href="/free-test" className="text-blue-400 hover:text-blue-300 mx-2">Test Gratuit</Link>
          </p>
        </footer>

      </div>
    </>
  );
}
