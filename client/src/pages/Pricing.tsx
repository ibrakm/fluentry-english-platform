import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Star, Shield, Target, TrendingUp, Zap, MessageCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

// ─── Shared features that appear on every plan ───────────────────────────────
const baseFeatures = [
  "1-on-1 private sessions via Google Meet",
  "Personalised lesson plan for your goals",
  "WhatsApp support between sessions",
];

// ─── Plan definitions ─────────────────────────────────────────────────────────
const plans = [
  {
    id: "standard",
    label: "Standard",
    badge: null,
    color: "border-gray-300",
    badgeCls: "",
    btnCls: "bg-blue-600 hover:bg-blue-700 text-white",
    priceCls: "text-blue-600",
    bgCls: "bg-blue-50",
    lessonsPerWeek: 2,
    totalPerMonth: 8,
    price: 800,
    tagline: "Steady, consistent progress",
    desc: "Two sessions a week gives you enough practice to build real habits without overwhelming your schedule.",
    features: [
      ...baseFeatures,
      "Feedback on Speaking & Listening",
      "Monthly progress check-in",
    ],
    waText: "Standard plan (800 MAD/month — 2 lessons/week)",
  },
  {
    id: "intensive",
    label: "Intensive",
    badge: "MOST POPULAR",
    color: "border-blue-600",
    badgeCls: "bg-blue-600 text-white",
    btnCls: "bg-blue-600 hover:bg-blue-700 text-white",
    priceCls: "text-blue-600",
    bgCls: "bg-blue-50",
    lessonsPerWeek: 4,
    totalPerMonth: 16,
    price: 1600,
    tagline: "Faster results, deeper practice",
    desc: "Four sessions a week means you improve noticeably within weeks. Ideal if you have a deadline or a specific goal.",
    features: [
      ...baseFeatures,
      "Feedback on Writing, Speaking, Reading & Listening",
      "Personalised IELTS study plan (if applicable)",
      "Email writing & presentation coaching",
      "Bi-weekly progress review",
    ],
    waText: "Intensive plan (1,600 MAD/month — 4 lessons/week)",
  },
  {
    id: "accelerator",
    label: "Accelerator",
    badge: "FASTEST RESULTS",
    color: "border-orange-500",
    badgeCls: "bg-orange-500 text-white",
    btnCls: "bg-orange-500 hover:bg-orange-600 text-white",
    priceCls: "text-orange-600",
    bgCls: "bg-orange-50",
    lessonsPerWeek: 6,
    totalPerMonth: 24,
    price: 2400,
    tagline: "Maximum speed — for urgent goals",
    desc: "Six sessions a week is the fastest way to reach fluency. Best for IELTS candidates with a test date or professionals with an urgent deadline.",
    features: [
      ...baseFeatures,
      "Feedback on Writing, Speaking, Reading & Listening",
      "Personalised IELTS study plan",
      "Email writing & presentation coaching",
      "Business communication curriculum",
      "Meeting & negotiation English",
      "Priority scheduling — your time, your pace",
      "Weekly progress review",
    ],
    waText: "Accelerator plan (2,400 MAD/month — 6 lessons/week)",
  },
];

// ─── Focused programs ─────────────────────────────────────────────────────────
const programs = [
  {
    id: "ielts",
    icon: Target,
    color: "border-blue-600",
    iconCls: "bg-blue-100 text-blue-600",
    badgeCls: "bg-blue-600 text-white",
    btnCls: "bg-blue-600 hover:bg-blue-700 text-white",
    priceCls: "text-blue-600",
    bgCls: "bg-blue-50",
    badge: "IELTS PREP",
    title: "8-Week IELTS Program",
    subtitle: "2 sessions/week · 16 sessions total",
    price: "1,600 MAD",
    priceNote: "16 sessions × 100 MAD",
    desc: "16 private sessions over 8 weeks, focused entirely on IELTS. We cover all four sections with practice tests and feedback every week.",
    features: [
      "16 × 1-hour private sessions",
      "2 sessions per week for 8 weeks",
      "All 4 IELTS sections covered",
      "Personalised IELTS study plan",
      "Feedback on Writing, Speaking, Reading & Listening",
      "WhatsApp support between sessions",
    ],
    waText: "8-Week IELTS Program (1%2C600%20MAD)",
  },
  {
    id: "business",
    icon: TrendingUp,
    color: "border-purple-600",
    iconCls: "bg-purple-100 text-purple-600",
    badgeCls: "bg-purple-600 text-white",
    btnCls: "bg-purple-600 hover:bg-purple-700 text-white",
    priceCls: "text-purple-600",
    bgCls: "bg-purple-50",
    badge: "BUSINESS ENGLISH",
    title: "12-Week Business English",
    subtitle: "2 sessions/week · 24 sessions total",
    price: "2,400 MAD",
    priceNote: "24 sessions × 100 MAD",
    desc: "24 private sessions over 12 weeks, focused on professional English. Emails, meetings, presentations, and the vocabulary you use at work.",
    features: [
      "24 × 1-hour private sessions",
      "2 sessions per week for 12 weeks",
      "Business communication curriculum",
      "Email writing & presentation coaching",
      "Meeting & negotiation English",
      "WhatsApp support between sessions",
    ],
    waText: "12-Week Business English Program (2%2C400%20MAD)",
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="English Lesson Prices Morocco | From 100 MAD/hr | Fluentry"
        description="Affordable English coaching in Morocco from 100 MAD/hr. Standard (800 MAD/mo), Intensive (1,600 MAD/mo) & Accelerator (2,400 MAD/mo) plans. IELTS & Business English programs. TESOL-certified."
        path="/pricing"
        keywords="English lesson price Morocco, affordable English tutor Morocco, English coaching cost Morocco, cours anglais prix Maroc, تكلفة دروس الإنجليزية المغرب, English lesson packages Morocco, 100 MAD English lesson Morocco, IELTS program price Morocco, Business English program price Morocco"
        breadcrumbs={[{ name: "Pricing", item: "https://fluentry.com/pricing" }]}
      />
      <div className="min-h-screen">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-14 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <Shield className="w-4 h-4 text-green-300" />
              Transparent Pricing — 100 MAD per Hour
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Honest Pricing</h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Every plan is 100 MAD per hour. The more sessions you book per week, the faster you progress.
            </p>
          </div>
        </section>

        {/* ── Monthly Plans by Frequency ── */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Pace</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                All sessions are 1-on-1, online via Google Meet, with Mr. Ibrahim K. Pick how many sessions you want per week.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {plans.map((plan) => (
                <Card key={plan.id} className={`p-7 border-2 ${plan.color} hover:shadow-xl transition-shadow flex flex-col relative`}>
                  {plan.badge && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${plan.badgeCls}`}>
                      {plan.badge}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.label}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.tagline}</p>

                  {/* Frequency badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${plan.bgCls} ${plan.priceCls}`}>
                      <Zap className="w-3 h-3" />
                      {plan.lessonsPerWeek} lessons/week · {plan.totalPerMonth}/month
                    </span>
                  </div>

                  {/* Price */}
                  <div className={`${plan.bgCls} rounded-xl p-4 mb-4`}>
                    <p className={`text-3xl font-bold ${plan.priceCls}`}>
                      {plan.price.toLocaleString()} MAD
                    </p>
                    <p className="text-gray-500 text-xs mt-1">per month · 100 MAD per lesson</p>
                  </div>

                  <p className="text-gray-600 text-sm mb-5">{plan.desc}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={`w-full text-base py-3 ${plan.btnCls}`}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Started
                    </Button>
                  </a>
                  <p className="text-xs text-gray-400 text-center mt-2">Free 10-min call first · No commitment</p>
                </Card>
              ))}
            </div>

            {/* Pay-per-lesson & Group — secondary options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

              {/* Pay per lesson */}
              <Card className="p-6 border-2 border-gray-200 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Pay-Per-Lesson</h3>
                <p className="text-gray-500 text-sm mb-4">No commitment. Book when you need it.</p>
                <p className="text-3xl font-bold text-gray-900 mb-1">100 MAD</p>
                <p className="text-gray-500 text-xs mb-4">per lesson · 1 hour</p>
                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20single%20lesson%20(100%20MAD)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full border-gray-400 hover:bg-gray-100">
                    Book a Single Lesson
                  </Button>
                </a>
              </Card>

              {/* Group study */}
              <Card className="p-6 border-2 border-green-600 relative">
                <div className="absolute -top-4 left-6 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  GROUP — MOST AFFORDABLE
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Group Study</h3>
                <p className="text-gray-500 text-sm mb-4">Small groups of 3–6 students. 2 sessions/week.</p>
                <p className="text-3xl font-bold text-green-600 mb-1">200 MAD</p>
                <p className="text-gray-500 text-xs mb-1">per month · 8 sessions</p>
                <p className="text-green-700 text-xs font-semibold mb-4">= 30 MAD per lesson</p>
                <ul className="space-y-1 mb-4 text-sm">
                  {["8 sessions/month (2/week)", "1-hour sessions", "Max 6 students per group", "Live via Google Meet"].map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Group%20Study%20plan%20(200%20MAD%2Fmonth)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Join the Group
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Focused Programs ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Focused Programs</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Have a specific goal like IELTS or Business English? These structured programs give you a clear plan and dedicated sessions to get there.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((prog) => {
                const Icon = prog.icon;
                return (
                  <Card key={prog.id} className={`p-8 border-2 ${prog.color} hover:shadow-xl transition-shadow relative`}>
                    <div className={`absolute -top-4 left-6 px-4 py-1 rounded-full text-xs font-bold ${prog.badgeCls}`}>
                      {prog.badge}
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${prog.iconCls}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{prog.title}</h3>
                    <p className="text-gray-500 text-sm mb-5">{prog.subtitle}</p>

                    <div className={`${prog.bgCls} rounded-xl p-4 mb-5`}>
                      <p className={`text-3xl font-bold ${prog.priceCls}`}>{prog.price}</p>
                      <p className="text-gray-500 text-sm mt-1">{prog.priceNote}</p>
                    </div>

                    <p className="text-gray-600 text-sm mb-5">{prog.desc}</p>

                    <ul className="space-y-3 mb-6">
                      {prog.features.map((f, i) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20${prog.waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className={`w-full text-base py-3 ${prog.btnCls}`}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book Free Strategy Call
                      </Button>
                    </a>
                    <p className="text-xs text-gray-400 text-center mt-2">Free 10-min call first · No commitment</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── What every session includes ── */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">What Every Session Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: "Speaking Practice", desc: "Real conversation on topics relevant to your goals." },
                { title: "Personalised Feedback", desc: "Corrections and guidance tailored to your level and needs." },
                { title: "Grammar & Vocabulary", desc: "Practical grammar and vocabulary you will actually use." },
                { title: "Flexible Rescheduling", desc: "Cancel or reschedule up to 24 hours in advance." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">What Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-blue-50">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm">
                  "After 2 months with Mr. Ibrahim, I passed my IELTS with a 7.5. His lessons are focused and practical — no time wasted."
                </p>
                <p className="font-bold text-gray-900 text-sm">Fatima Z.</p>
                <p className="text-xs text-gray-500">IELTS Student, Casablanca</p>
              </Card>
              <Card className="p-6 bg-blue-50">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-4 italic text-sm">
                  "I needed English for my job in logistics. Mr. Ibrahim helped me with emails and meetings. Very patient and professional."
                </p>
                <p className="font-bold text-gray-900 text-sm">Ahmed M.</p>
                <p className="text-xs text-gray-500">Logistics Professional, Casablanca</p>
              </Card>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Common Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can I switch plans?", a: "Yes. Contact Ibrahim on WhatsApp and he will adjust your plan for the next month." },
                { q: "What payment methods do you accept?", a: "Bank transfer, CIH, Barid Bank, and other local Moroccan payment methods. Contact Ibrahim on WhatsApp for details." },
                { q: "Is there a free trial?", a: "Yes — you can book a free 10-minute strategy call to meet Mr. Ibrahim, discuss your goals, and get a recommendation. No payment required." },
                { q: "What if I miss a session?", a: "You can reschedule up to 24 hours in advance. Missed sessions without notice cannot be refunded or rescheduled." },
                { q: "How many students are in a group session?", a: "Groups are kept small — usually 3 to 6 students — so everyone gets speaking time and attention." },
                { q: "Where do sessions take place?", a: "All sessions are online via Google Meet. You just need a phone or computer and a stable internet connection." },
              ].map((faq) => (
                <Card key={faq.q} className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-14 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan to Choose?</h2>
            <p className="text-orange-100 mb-8 text-lg">
              Book a free 10-minute call with Mr. Ibrahim. He will listen to your goals and recommend the right plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20a%20free%20strategy%20call%20to%20find%20the%20right%20plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Free Strategy Call
                </Button>
              </a>
              <Link href="/free-test">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 w-full sm:w-auto">
                  Take Free Level Test First
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
