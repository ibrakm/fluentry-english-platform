import { Button } from "@/components/ui/button";
import {
  CheckCircle, Star, Shield, MessageCircle, Zap, ArrowRight,
  Clock, Users, Trophy, ChevronDown, ChevronUp, TrendingDown, AlertCircle,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { useState } from "react";

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How much does an English lesson cost in Morocco with Fluentry?",
    a: "The hourly rate depends on how many sessions you book per month. Standard plan: 80 MAD/hr (8 sessions/month). Intensive plan: 75 MAD/hr (16 sessions/month). Accelerator plan: 65 MAD/hr (24 sessions/month). The more you commit, the less you pay per session — and the faster you improve.",
  },
  {
    q: "Is there a free trial lesson available?",
    a: "Yes — a free 10-minute strategy call with Mr. Ibrahim is available to discuss your goals and find the right plan. No commitment, no payment.",
  },
  {
    q: "Can I pay monthly and switch plans?",
    a: "Yes. All plans are billed monthly. You can upgrade, downgrade, or pause at any time by messaging Mr. Ibrahim on WhatsApp.",
  },
  {
    q: "What is included in every session?",
    a: "Every session includes personalised lesson planning, real-time feedback, homework materials, WhatsApp support between sessions, and monthly progress reports. No hidden fees.",
  },
  {
    q: "Do you offer group English lessons at a lower price?",
    a: "Yes. Group coaching starts from 30 MAD per session (200 MAD/month for 8 sessions). Groups are kept small — 3 to 6 students — so everyone gets speaking time.",
  },
  {
    q: "Where do sessions take place?",
    a: "All sessions are online via Google Meet. You only need a phone or computer and a stable internet connection.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors">
        <h3 className="font-semibold text-gray-900 text-sm pr-4">{q}</h3>
        {open
          ? <ChevronUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </div>
      {open && (
        <div className="px-5 pb-5 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── Savings badge ─────────────────────────────────────────────────────────────
function SaveBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
      <TrendingDown className="w-3 h-3" /> {text}
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <SEO
        title="English Lesson Prices Morocco | From 80 MAD/hr | Fluentry"
        description="Affordable 1-on-1 English coaching in Morocco. Standard 80 MAD/hr, Intensive 75 MAD/hr, Accelerator 65 MAD/hr. IELTS & Business English programs. TESOL-certified Mr. Ibrahim."
        path="/pricing"
        keywords="English lesson price Morocco, affordable English tutor Morocco, English coaching cost Morocco, cours anglais prix Maroc, تكلفة دروس الإنجليزية المغرب, English lesson packages Morocco, IELTS program price Morocco, Business English program price Morocco, 80 MAD English lesson Morocco"
        breadcrumbs={[{ name: "Pricing", item: "https://fluentry.online/pricing" }]}
        faqItems={faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <div className="min-h-screen bg-white">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1d4ed8] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-10 w-96 h-48 bg-indigo-400 rounded-full blur-3xl" />
          </div>
          <div className="relative container mx-auto max-w-4xl px-4 py-20 text-center">
            {/* Urgency nudge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 px-4 py-2 rounded-full text-sm font-medium mb-5 text-red-200">
              <AlertCircle className="w-4 h-4" />
              Only 3 spots available this month — prices may increase in April
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
              The More You Practise,<br />
              <span className="text-yellow-400">The Less You Pay Per Hour.</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Unlike language schools that charge a flat rate regardless of commitment,
              Fluentry rewards students who are serious. Book more sessions — pay less per hour — progress faster.
            </p>

            {/* Rate comparison bar — anchoring */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { label: "Standard", rate: "80 MAD/hr", color: "bg-white/10 border-white/20" },
                { label: "Intensive", rate: "75 MAD/hr", color: "bg-blue-500/30 border-blue-400/40", badge: "Save 80 MAD/mo" },
                { label: "Accelerator", rate: "65 MAD/hr", color: "bg-yellow-400/20 border-yellow-400/40 text-yellow-200", badge: "Save 360 MAD/mo" },
              ].map((item) => (
                <div key={item.label} className={`flex flex-col items-center px-5 py-3 rounded-xl border ${item.color}`}>
                  <span className="text-xs text-blue-200 mb-1">{item.label}</span>
                  <span className="text-xl font-extrabold">{item.rate}</span>
                  {item.badge && (
                    <span className="text-xs text-green-300 font-semibold mt-1">↓ {item.badge}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              {[
                { icon: Trophy, label: "100+ Students Coached" },
                { icon: Star, label: "4.9★ Average Rating" },
                { icon: Clock, label: "Results in 8 Weeks" },
                { icon: Shield, label: "Results Guaranteed" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-yellow-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLAN CARDS ───────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Choose Your Pace</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                All Plans — 1-on-1 with Mr. Ibrahim
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Every plan includes private sessions, a personalised study plan, and WhatsApp support.
                The more sessions you book, the lower your hourly rate — and the faster you reach fluency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

              {/* ── Standard ── */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-7 flex flex-col hover:shadow-lg transition-shadow">
                <div className="mb-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Standard</p>
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    640 <span className="text-base font-normal text-gray-400">MAD/month</span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">8 sessions/month · 2 per week</p>
                </div>

                {/* Per-hour rate — anchoring */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-5 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rate per session</span>
                  <span className="font-bold text-gray-900 text-lg">80 MAD/hr</span>
                </div>

                <ul className="space-y-3 flex-1 mb-6">
                  {[
                    "2 × 1-hour private sessions/week",
                    "Personalised lesson plan",
                    "WhatsApp support",
                    "Speaking & Listening feedback",
                    "Monthly progress check-in",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Loss-aversion nudge */}
                <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4 text-center">
                  💡 Upgrade to Intensive and save 80 MAD/month
                </p>

                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Standard%20plan%20(640%20MAD%2Fmonth%20%E2%80%94%202%20lessons%2Fweek)"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" /> Get Started
                  </Button>
                </a>
                <p className="text-xs text-gray-400 text-center mt-2">Free 10-min call first · No commitment</p>
              </div>

              {/* ── Intensive — FEATURED ── */}
              <div className="bg-blue-600 rounded-2xl border-2 border-blue-600 p-7 flex flex-col shadow-2xl relative md:-mt-4 md:mb-4">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                  ⭐ MOST POPULAR — BEST VALUE
                </div>

                <div className="mb-2">
                  <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-1">Intensive</p>
                  <h3 className="text-3xl font-extrabold text-white">
                    1,200 <span className="text-base font-normal text-blue-200">MAD/month</span>
                  </h3>
                  <p className="text-sm text-blue-200 mt-1">16 sessions/month · 4 per week</p>
                </div>

                {/* Per-hour rate with savings */}
                <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-3 mb-2 flex items-center justify-between">
                  <span className="text-sm text-blue-100">Rate per session</span>
                  <div className="text-right">
                    <span className="font-bold text-white text-lg">75 MAD/hr</span>
                    <span className="block text-xs text-green-300 font-semibold">↓ 5 MAD cheaper than Standard</span>
                  </div>
                </div>

                {/* Savings callout */}
                <div className="bg-green-400/20 border border-green-400/30 rounded-xl px-4 py-2.5 mb-5 text-center">
                  <p className="text-green-200 text-xs font-bold">
                    You save 80 MAD/month vs paying Standard rate for 16 sessions
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-6">
                  {[
                    "4 × 1-hour private sessions/week",
                    "Personalised lesson plan",
                    "WhatsApp support",
                    "Full 4-skills feedback",
                    "IELTS study plan (if applicable)",
                    "Email & presentation coaching",
                    "Bi-weekly progress review",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-white">
                      <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Social proof */}
                <p className="text-xs text-blue-200 text-center mb-4">
                  🔥 7 out of 10 students choose this plan
                </p>

                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Intensive%20plan%20(1%2C200%20MAD%2Fmonth%20%E2%80%94%204%20lessons%2Fweek)"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold text-base py-3">
                    <MessageCircle className="w-4 h-4 mr-2" /> Get Started — Best Value
                  </Button>
                </a>
                <p className="text-xs text-blue-200 text-center mt-2">Free 10-min call first · No commitment</p>
              </div>

              {/* ── Accelerator ── */}
              <div className="bg-white rounded-2xl border-2 border-orange-400 p-7 flex flex-col hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-4 left-6 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow">
                  ⚡ FASTEST RESULTS
                </div>

                <div className="mb-2">
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">Accelerator</p>
                  <h3 className="text-3xl font-extrabold text-gray-900">
                    1,560 <span className="text-base font-normal text-gray-400">MAD/month</span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">24 sessions/month · 6 per week</p>
                </div>

                {/* Per-hour rate with savings */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 mb-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rate per session</span>
                  <div className="text-right">
                    <span className="font-bold text-orange-600 text-lg">65 MAD/hr</span>
                    <span className="block text-xs text-green-600 font-semibold">↓ 15 MAD cheaper than Standard</span>
                  </div>
                </div>

                {/* Savings callout */}
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 mb-5 text-center">
                  <p className="text-green-700 text-xs font-bold">
                    You save 360 MAD/month vs paying Standard rate for 24 sessions
                  </p>
                </div>

                <ul className="space-y-3 flex-1 mb-6">
                  {[
                    "6 × 1-hour private sessions/week",
                    "Personalised lesson plan",
                    "WhatsApp support",
                    "Full 4-skills feedback",
                    "Personalised IELTS study plan",
                    "Business communication curriculum",
                    "Meeting & negotiation English",
                    "Priority scheduling",
                    "Weekly progress review",
                  ].map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Scarcity */}
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4 text-center">
                  ⚠️ Only 2 Accelerator spots available this month
                </p>

                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Accelerator%20plan%20(1%2C560%20MAD%2Fmonth%20%E2%80%94%206%20lessons%2Fweek)"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold">
                    <MessageCircle className="w-4 h-4 mr-2" /> Claim My Spot
                  </Button>
                </a>
                <p className="text-xs text-gray-400 text-center mt-2">Free 10-min call first · No commitment</p>
              </div>
            </div>

            {/* ── Flexible options row ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 max-w-2xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-sm">Pay-Per-Lesson</p>
                  <p className="text-gray-500 text-xs">No commitment · 80 MAD/session</p>
                </div>
                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20single%20lesson%20(80%20MAD)"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50 whitespace-nowrap">
                    Book Now
                  </Button>
                </a>
              </div>
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-sm">Group Study</p>
                  <p className="text-green-700 text-xs font-semibold">200 MAD/month · 30 MAD/session</p>
                </div>
                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Group%20Study%20plan%20(200%20MAD%2Fmonth)"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white whitespace-nowrap">
                    Join Group
                  </Button>
                </a>
              </div>
            </div>

            {/* ── Cost comparison anchor ── */}
            <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 max-w-3xl mx-auto">
              <h3 className="font-bold text-blue-900 text-center mb-4 text-sm uppercase tracking-wide">
                How Fluentry Compares to Other Options
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-center">
                  <thead>
                    <tr className="text-blue-700 font-semibold border-b border-blue-200">
                      <th className="pb-2 text-left">Option</th>
                      <th className="pb-2">Cost/hr</th>
                      <th className="pb-2">1-on-1?</th>
                      <th className="pb-2">Personalised?</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-blue-100">
                      <td className="py-2 text-left font-medium">Language school (Morocco)</td>
                      <td>150–300 MAD</td>
                      <td>❌</td>
                      <td>❌</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-2 text-left font-medium">Preply / iTalki tutor</td>
                      <td>200–400 MAD</td>
                      <td>✅</td>
                      <td>⚠️ Varies</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-2 text-left font-medium">Duolingo / Apps</td>
                      <td>~50 MAD</td>
                      <td>❌</td>
                      <td>❌</td>
                    </tr>
                    <tr className="bg-blue-100 rounded-lg font-bold text-blue-900">
                      <td className="py-2 text-left">Fluentry (Intensive)</td>
                      <td className="text-green-700">75 MAD ✅</td>
                      <td>✅</td>
                      <td>✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-blue-600 text-center mt-3">
                Private, personalised coaching at a fraction of what language schools charge.
              </p>
            </div>
          </div>
        </section>

        {/* ── STRUCTURED PROGRAMS ──────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Goal-Focused</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Structured Programs</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Have a specific target — an IELTS band score or professional fluency? These fixed-duration programs
                include a clear roadmap, a results guarantee, and the Intensive hourly rate built in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* IELTS */}
              <div className="rounded-2xl overflow-hidden border-2 border-blue-600 shadow-lg">
                <div className="bg-blue-600 px-7 py-5 flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">IELTS Prep</p>
                    <h3 className="text-white text-2xl font-bold">8-Week IELTS Program</h3>
                    <p className="text-blue-200 text-sm mt-1">2 sessions/week · 16 sessions total</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-3">
                    <Trophy className="w-7 h-7 text-yellow-300" />
                  </div>
                </div>
                <div className="bg-white p-7">
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-4xl font-extrabold text-blue-600">1,200</span>
                    <span className="text-gray-500 mb-1">MAD total</span>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <SaveBadge text="75 MAD/hr — Intensive rate" />
                    <span className="text-xs text-gray-400 line-through">1,280 MAD at Standard rate</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-5">
                    16 private sessions over 8 weeks, focused entirely on IELTS. All four sections covered with
                    practice tests and detailed feedback every week. Guaranteed band improvement.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "16 × 1-hour private sessions",
                      "All 4 IELTS sections: L, R, W, S",
                      "Personalised IELTS study plan",
                      "Mock tests with band-score feedback",
                      "WhatsApp support throughout",
                      "Results guarantee included",
                    ].map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%208-Week%20IELTS%20Program%20(1%2C200%20MAD)"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-3">
                      <MessageCircle className="w-4 h-4 mr-2" /> Book Free Strategy Call
                    </Button>
                  </a>
                  <p className="text-xs text-gray-400 text-center mt-2">Free 10-min consultation · No commitment</p>
                </div>
              </div>

              {/* Business English */}
              <div className="rounded-2xl overflow-hidden border-2 border-purple-600 shadow-lg">
                <div className="bg-purple-600 px-7 py-5 flex items-center justify-between">
                  <div>
                    <p className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-1">Business English</p>
                    <h3 className="text-white text-2xl font-bold">12-Week Business English</h3>
                    <p className="text-purple-200 text-sm mt-1">2 sessions/week · 24 sessions total</p>
                  </div>
                  <div className="bg-white/20 rounded-xl p-3">
                    <Zap className="w-7 h-7 text-yellow-300" />
                  </div>
                </div>
                <div className="bg-white p-7">
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-4xl font-extrabold text-purple-600">1,560</span>
                    <span className="text-gray-500 mb-1">MAD total</span>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <SaveBadge text="65 MAD/hr — Accelerator rate" />
                    <span className="text-xs text-gray-400 line-through">1,920 MAD at Standard rate</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-5">
                    24 private sessions over 12 weeks, focused on professional English. Master emails, meetings,
                    presentations, and the vocabulary you use at work — in Casablanca, Rabat, or anywhere.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "24 × 1-hour private sessions",
                      "Business communication curriculum",
                      "Professional email writing",
                      "Meeting & negotiation English",
                      "Presentation coaching",
                      "WhatsApp support throughout",
                    ].map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%2012-Week%20Business%20English%20Program%20(1%2C560%20MAD)"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-base py-3">
                      <MessageCircle className="w-4 h-4 mr-2" /> Book Free Strategy Call
                    </Button>
                  </a>
                  <p className="text-xs text-gray-400 text-center mt-2">Free 10-min consultation · No commitment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ──────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              What Every Session Includes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { emoji: "🎯", title: "Goal-Focused Practice", desc: "Every session is built around your specific goal — IELTS, business, or fluency." },
                { emoji: "💬", title: "Real-Time Feedback", desc: "Instant corrections on pronunciation, grammar, and vocabulary as you speak." },
                { emoji: "📱", title: "WhatsApp Support", desc: "Ask questions and get feedback between sessions, any time." },
                { emoji: "📊", title: "Progress Tracking", desc: "Monthly reports showing exactly how far you've come and what's next." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">What Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  text: "After 2 months with Mr. Ibrahim, I passed my IELTS with a 7.5. His lessons are focused and practical — no time wasted.",
                  name: "Fatima Z.", role: "IELTS Student, Casablanca",
                },
                {
                  text: "I needed English for my job in logistics. Mr. Ibrahim helped me with emails and meetings. Very patient and professional.",
                  name: "Ahmed M.", role: "Logistics Professional, Casablanca",
                },
              ].map((t) => (
                <div key={t.name} className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
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

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Common Questions</h2>
            <div className="space-y-3">
              {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#0f172a] to-[#1d4ed8] text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 text-green-300" />
              Results Guaranteed — or we coach you for free
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Plan Is Right for You?
            </h2>
            <p className="text-blue-100 mb-3 text-lg max-w-xl mx-auto">
              Book a free 10-minute call with Mr. Ibrahim. He will listen to your goals and recommend the exact plan
              that fits your schedule and budget.
            </p>
            {/* Urgency */}
            <p className="text-yellow-300 text-sm font-semibold mb-8">
              ⏳ Only 3 spots open this month — prices may increase in April
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20a%20free%20strategy%20call%20to%20find%20the%20right%20plan"
                target="_blank" rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold px-8 w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Free Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href="/free-test">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 w-full sm:w-auto">
                  Take Free Level Test First
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
