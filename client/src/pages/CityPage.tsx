import { Button } from "@/components/ui/button";
import {
  CheckCircle, Star, Shield, MessageCircle, ArrowRight,
  MapPin, Clock, Trophy, Users, ChevronDown, ChevronUp,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface CityPageProps {
  city: string;                  // e.g. "Casablanca"
  cityAr: string;                // e.g. "الدار البيضاء"
  cityFr: string;                // e.g. "Casablanca"
  region: string;                // e.g. "Grand Casablanca"
  slug: string;                  // e.g. "casablanca"
  description: string;           // city-specific intro paragraph
  localContext: string;          // why English matters in this city
  industries: string[];          // top industries needing English
  nearbyAreas: string[];         // surrounding areas
  waMsg: string;                 // pre-filled WhatsApp message
}

const faqs = (city: string) => [
  {
    q: `How much does an English lesson cost in ${city}?`,
    a: `Fluentry offers 1-on-1 online English coaching from 80 MAD per session. Monthly plans start at 640 MAD (Standard, 8 sessions/month) up to 1,560 MAD (Accelerator, 24 sessions/month). All sessions are online via Google Meet — no travel required.`,
  },
  {
    q: `Is online English coaching as effective as in-person classes in ${city}?`,
    a: `Yes — and often more so. Online 1-on-1 coaching with Mr. Ibrahim is fully personalised to your goals. You save travel time and can schedule sessions around your work or studies. Students in ${city} consistently achieve their goals within 8–12 weeks.`,
  },
  {
    q: `What English programs are available for professionals in ${city}?`,
    a: `Fluentry offers Business English (for meetings, emails, and presentations), IELTS Preparation (for visas and university), Conversation & Fluency (for confidence), and General English (for foundations). All programs are 1-on-1 and fully customised.`,
  },
  {
    q: `How do I start English coaching from ${city}?`,
    a: `Book a free 10-minute strategy call with Mr. Ibrahim on WhatsApp. He will ask about your goals, current level, and schedule — then recommend the right plan. No commitment or payment required for the first call.`,
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors">
        <h3 className="font-semibold text-gray-900 text-sm pr-4">{q}</h3>
        {open ? <ChevronUp className="w-4 h-4 text-blue-600 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </div>
      {open && <div className="px-5 pb-5 bg-white"><p className="text-gray-600 text-sm leading-relaxed">{a}</p></div>}
    </div>
  );
}

export default function CityPage({
  city, cityAr, cityFr, region, slug, description, localContext, industries, nearbyAreas, waMsg,
}: CityPageProps) {
  const { langPrefix } = useLanguage();
  const cityFaqs = faqs(city);

  return (
    <>
      <SEO
        title={`English Coach ${city} | 1-on-1 Online Lessons | Fluentry`}
        description={`Private 1-on-1 English coaching for students and professionals in ${city}, Morocco. TESOL-certified Mr. Ibrahim. IELTS prep, Business English, Conversation. From 80 MAD/hr. Online via Google Meet.`}
        path={`/english-coach-${slug}`}

        titleFr={`Coach d'anglais ${city} | Cours particuliers en ligne | Fluentry`}
        titleAr={`مدرب إنجليزية ${city} | دروس خصوصية عبر الإنترنت | Fluentry`}
        descriptionFr={`Coaching d'anglais personnalisé 1-à-1 pour les étudiants et professionnels à ${city}, Maroc. M. Ibrahim certifié TESOL. IELTS, anglais des affaires, conversation. À partir de 80 MAD/h.`}
        descriptionAr={`تدريب إنجليزية مخصص فردي للطلاب والمهنيين في ${city}، المغرب. الأستاذ إبراهيم معتمد TESOL. IELTS، إنجليزية الأعمال، محادثة. ابتداءً من 80 درهم/ساعة.`}
        keywords={`English coach ${city}, English lessons ${city}, English tutor ${city}, cours anglais ${cityFr}, تعلم الإنجليزية ${cityAr}, English coaching ${city} Morocco, IELTS ${city}, Business English ${city}, online English ${city}, private English teacher ${city}`}
        breadcrumbs={[
          { name: "Courses", item: "https://fluentry.online/courses" },
          { name: `English Coach ${city}`, item: `https://fluentry.online/english-coach-${slug}` },
        ]}
        faqItems={cityFaqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1d4ed8] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-10 w-96 h-48 bg-indigo-400 rounded-full blur-3xl" />
          </div>
          <div className="relative container mx-auto max-w-5xl px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-5">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  Serving students in {city} & across Morocco
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
                  English Coach<br />
                  <span className="text-yellow-400">{city}</span><br />
                  — Online, 1-on-1
                </h1>
                <p className="text-blue-100 text-lg mb-6">{description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`https://wa.me/212672580932?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold w-full sm:w-auto">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book Free Consultation Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <Link href={`${langPrefix}/free-test`}>
                    <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 w-full sm:w-auto">
                      Take Free Level Test
                    </Button>
                  </Link>
                </div>
                <p className="text-blue-200 text-sm mt-3">No commitment · Free 10-min consultation</p>
              </div>

              {/* Quick facts */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-7 backdrop-blur-sm">
                <h2 className="text-white font-bold text-lg mb-5">Quick Facts</h2>
                <div className="space-y-4">
                  {[
                    { label: "Location served", value: city, sub: region + ", Morocco" },
                    { label: "Session format", value: "Online", sub: "Google Meet · Any device" },
                    { label: "Rate from", value: "80 MAD/hr", sub: "Standard plan · 8 sessions/month" },
                    { label: "Best value", value: "75 MAD/hr", sub: "Intensive plan · 16 sessions/month" },
                    { label: "Free trial", value: "10-min call", sub: "No payment · No commitment" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start justify-between border-b border-white/10 pb-3">
                      <div>
                        <p className="text-blue-200 text-xs">{item.label}</p>
                        <p className="text-xs text-blue-300">{item.sub}</p>
                      </div>
                      <p className="text-white font-bold text-base">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY ENGLISH MATTERS IN THIS CITY ── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Local Context</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                  Why English Matters in {city}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{localContext}</p>
                <div className="space-y-2">
                  {industries.map((ind) => (
                    <div key={ind} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {ind}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">Programs Available in {city}</h3>
                {[
                  { title: "Business English", desc: "For professionals in meetings, emails, and presentations", color: "border-purple-400", badge: "bg-purple-100 text-purple-700" },
                  { title: "IELTS Preparation", desc: "For university, immigration, and professional certification", color: "border-blue-400", badge: "bg-blue-100 text-blue-700" },
                  { title: "Conversation & Fluency", desc: "For students who understand English but freeze when speaking", color: "border-green-400", badge: "bg-green-100 text-green-700" },
                  { title: "General English", desc: "For beginners and intermediate learners building foundations", color: "border-orange-400", badge: "bg-orange-100 text-orange-700" },
                ].map((prog) => (
                  <div key={prog.title} className={`bg-white rounded-xl border-l-4 ${prog.color} p-4`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${prog.badge}`}>{prog.title}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{prog.desc}</p>
                  </div>
                ))}
                <Link href={`${langPrefix}/pricing`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2">
                    View All Plans & Prices <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              How It Works — From {city}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", icon: MessageCircle, title: "Book Free Call", desc: "Message Mr. Ibrahim on WhatsApp. He will ask about your goals and current level. Free, 10 minutes, no commitment." },
                { step: "2", icon: Trophy, title: "Get Your Plan", desc: "Mr. Ibrahim creates a personalised study plan based on your goals, schedule, and current English level." },
                { step: "3", icon: Star, title: "Start Improving", desc: "Sessions are online via Google Meet. You practise, get real-time feedback, and improve every week." },
              ].map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step}
                  </div>
                  <Icon className="w-6 h-6 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">What Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { text: "After 2 months with Mr. Ibrahim, I passed my IELTS with a 7.5. His lessons are focused and practical — no time wasted.", name: "Fatima Z.", role: "IELTS Student, Casablanca" },
                { text: "I needed English for my job in logistics. Mr. Ibrahim helped me with emails and meetings. Very patient and professional.", name: "Ahmed M.", role: "Logistics Professional, Casablanca" },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 border border-blue-100">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEARBY AREAS ── */}
        <section className="py-10 px-4 bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-gray-500 text-sm mb-3">Also serving students in nearby areas</p>
            <div className="flex flex-wrap justify-center gap-2">
              {nearbyAreas.map((area) => (
                <span key={area} className="inline-block bg-gray-100 text-gray-600 rounded-full px-4 py-1.5 text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              English Coaching {city} — FAQ
            </h2>
            <div className="space-y-3">
              {cityFaqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#0f172a] to-[#1d4ed8] text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 text-green-300" />
              Results Guaranteed — or we coach you for free
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start English Coaching in {city}?
            </h2>
            <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">
              Book a free 10-minute call with Mr. Ibrahim. No commitment, no payment — just a conversation about your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/212672580932?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold px-8 w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Free Consultation Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href={`${langPrefix}/pricing`}>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="text-blue-200 text-sm mt-5">No commitment · No payment required · Free 10-min consultation</p>
          </div>
        </section>

      </div>
    </>
  );
}
