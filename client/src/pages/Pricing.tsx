import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Zap, Star, Shield, Target, TrendingUp, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

const pricingFAQ = [
  {
    question: "How much does a private English coaching program cost in Morocco?",
    answer: "Fluentry's outcome-based programs start at 500 MAD/month for flexible monthly coaching. The 8-Week IELTS Accelerator is 12,000 MAD, the 12-Week Business English Mastery is 15,000 MAD, and the VIP Concierge program is 25,000 MAD. All programs include a results guarantee.",
  },
  {
    question: "Is there a free trial or consultation available?",
    answer: "Yes! You can book a free 10-minute strategy call with Mr. Ibrahim to discuss your goals, get your level assessed, and find the right program. No commitment required.",
  },
  {
    question: "What is the results guarantee?",
    answer: "If you complete a program and don't achieve your stated goal (e.g., target IELTS band score or professional fluency milestone), Mr. Ibrahim will continue coaching you for free until you do. This applies to all signature programs.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "Fluentry accepts payment via bank transfer, CIH, Barid Bank, and other local Moroccan payment methods. International payments are also accepted. Contact Mr. Ibrahim on WhatsApp for details.",
  },
  {
    question: "Can I pay in installments?",
    answer: "Yes. For the 8-Week and 12-Week programs, payment can be split into two installments. Contact Mr. Ibrahim on WhatsApp to arrange a payment plan.",
  },
];

export default function Pricing() {
  const title = "English Coaching Programs Morocco | IELTS & Business English | Fluentry";
  const description = "Outcome-based English coaching programs in Morocco. 8-Week IELTS Accelerator (12,000 MAD), Business English Mastery (15,000 MAD), VIP Concierge (25,000 MAD). Results guaranteed.";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fluentry-english-platform.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://fluentry-english-platform.vercel.app/pricing" }
    ]
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/pricing"
        faqItems={pricingFAQ}
        courseData={{
          name: "8-Week IELTS Accelerator — Fluentry Morocco",
          description: "Achieve 7.5+ IELTS band score in 8 weeks with TESOL-certified Mr. Ibrahim K. Results guaranteed or coaching continues for free.",
          provider: "Fluentry",
          price: "12000",
          priceCurrency: "MAD",
        }}
      />
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4 text-green-300" />
            Results Guaranteed on All Programs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in Results, Not Just Lessons
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Every Fluentry program is built around a specific outcome. You know exactly what you'll achieve — and we guarantee it.
          </p>
        </div>
      </section>

      {/* Value Ladder Explainer */}
      <section className="py-10 px-4 bg-blue-950 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { stat: "+1.5 Bands", label: "Average IELTS Improvement" },
              { stat: "90%", label: "Students Achieve Target" },
              { stat: "8 Weeks", label: "Average Time to Results" },
              { stat: "100%", label: "Satisfaction Guaranteed" },
            ].map((item) => (
              <div key={item.label} className="border-r border-blue-700 last:border-0 px-2">
                <p className="text-2xl font-extrabold text-yellow-300">{item.stat}</p>
                <p className="text-xs text-blue-300 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Programs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Signature Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete transformation programs with structured milestones, weekly accountability, and a results guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">

            {/* IELTS Accelerator */}
            <Card className="p-8 border-2 border-blue-600 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">8-Week IELTS Accelerator</h3>
              <p className="text-blue-600 font-semibold text-sm mb-4">For students seeking to study abroad</p>
              <div className="bg-blue-50 rounded-xl p-5 mb-6">
                <p className="text-4xl font-bold text-blue-600">12,000 MAD</p>
                <p className="text-gray-500 text-sm mt-1">Full 8-week program</p>
                <div className="flex items-center gap-2 text-green-600 text-xs font-semibold mt-2">
                  <Shield className="w-3 h-3" />
                  Results guaranteed or free coaching until you succeed
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Achieve your target IELTS band score (7.5+) in 8 weeks with our proven methodology. Includes personalized study plan, weekly mock tests, and direct feedback on all 4 skills.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "16 x 1-hour private sessions (2/week)",
                  "Personalized IELTS study plan",
                  "Weekly mock tests with scoring",
                  "Feedback on Writing, Speaking, Reading & Listening",
                  "WhatsApp support between sessions",
                  "Results guarantee — free coaching until goal achieved",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%208-Week%20IELTS%20Accelerator%20program" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base py-3">
                  Book Free Strategy Call
                </Button>
              </a>
              <p className="text-xs text-gray-400 text-center mt-3">Free 10-min consultation · No commitment</p>
            </Card>

            {/* Business English Mastery */}
            <Card className="p-8 border-2 border-purple-600 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                HIGH INCOME IMPACT
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">12-Week Business English Mastery</h3>
              <p className="text-purple-600 font-semibold text-sm mb-4">For professionals in Casablanca & Rabat</p>
              <div className="bg-purple-50 rounded-xl p-5 mb-6">
                <p className="text-4xl font-bold text-purple-600">15,000 MAD</p>
                <p className="text-gray-500 text-sm mt-1">Full 12-week program</p>
                <div className="flex items-center gap-2 text-green-600 text-xs font-semibold mt-2">
                  <Shield className="w-3 h-3" />
                  Guaranteed professional fluency milestone
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Lead international meetings, write compelling emails, and present with authority. Designed for professionals in finance, tech, and management who want to accelerate their careers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "24 x 1-hour private sessions (2/week)",
                  "Business communication curriculum",
                  "Email writing & presentation coaching",
                  "Meeting & negotiation English",
                  "LinkedIn profile English review",
                  "WhatsApp support between sessions",
                  "Results guarantee included",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%2012-Week%20Business%20English%20Mastery%20program" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-base py-3">
                  Book Free Strategy Call
                </Button>
              </a>
              <p className="text-xs text-gray-400 text-center mt-3">Free 10-min consultation · No commitment</p>
            </Card>

            {/* VIP Concierge */}
            <Card className="p-8 border-2 border-yellow-500 hover:shadow-xl transition-shadow relative bg-gradient-to-b from-yellow-50 to-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                VIP ELITE
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">VIP Concierge Coaching</h3>
              <p className="text-yellow-700 font-semibold text-sm mb-4">For executives & serious investors</p>
              <div className="bg-yellow-50 rounded-xl p-5 mb-6 border border-yellow-200">
                <p className="text-4xl font-bold text-yellow-700">25,000 MAD</p>
                <p className="text-gray-500 text-sm mt-1">Complete VIP program</p>
                <div className="flex items-center gap-2 text-green-600 text-xs font-semibold mt-2">
                  <Shield className="w-3 h-3" />
                  Full results guarantee — no exceptions
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Unlimited 1-on-1 sessions, 24/7 WhatsApp access, fully bespoke curriculum, and direct involvement in every aspect of your English journey. The ultimate transformation experience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited 1-on-1 sessions",
                  "24/7 WhatsApp direct access",
                  "Fully bespoke curriculum",
                  "Pronunciation deep-dive coaching",
                  "Accent reduction (if desired)",
                  "Business, IELTS, or general fluency",
                  "Priority scheduling — your time, your pace",
                  "Full results guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20VIP%20Concierge%20Coaching%20program" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-base py-3">
                  Apply for VIP Program
                </Button>
              </a>
              <p className="text-xs text-gray-400 text-center mt-3">Limited spots — apply to check availability</p>
            </Card>

          </div>

          {/* Flexible Monthly Plans — Secondary */}
          <div className="mt-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Flexible Monthly Plans</h3>
              <p className="text-gray-500 text-sm">Prefer a flexible approach? Choose a monthly plan with no long-term commitment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">

              {/* Starter */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-7 h-7 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Starter</h3>
                </div>
                <p className="text-gray-500 text-sm mb-4">For new learners or occasional practice</p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-3xl font-bold text-blue-600">500 MAD</p>
                  <p className="text-gray-500 text-xs mt-1">per month · 8 lessons · 45 min each</p>
                  <p className="text-xs text-gray-500 mt-1">= 62.50 MAD per lesson</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {["8 lessons/month (2/week)", "45-min sessions", "Personalized lesson plan"].map((f, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /><span className="text-gray-700">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Starter%20monthly%20plan%20(500%20MAD%2Fmonth)" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                </a>
              </Card>

              {/* Standard */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  BEST VALUE
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-7 h-7 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Standard</h3>
                </div>
                <p className="text-gray-500 text-sm mb-4">Ideal for regular learners improving fluency</p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-blue-600">720 MAD</p>
                    <p className="text-sm text-gray-400 line-through">800 MAD</p>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">per month · 8 lessons · 1 hour each</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">Save 10% per lesson</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {["8 lessons/month (2/week)", "1-hour sessions", "Priority scheduling", "Customized learning plan", "Progress reports"].map((f, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /><span className="text-gray-700">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Standard%20monthly%20plan%20(720%20MAD%2Fmonth)" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                </a>
              </Card>

              {/* Premium */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-purple-600 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  MOST POPULAR
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-7 h-7 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Premium</h3>
                </div>
                <p className="text-gray-500 text-sm mb-4">For serious learners aiming for mastery</p>
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-purple-600">960 MAD</p>
                    <p className="text-sm text-gray-400 line-through">1,200 MAD</p>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">per month · 12 lessons · 1 hour each</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">Save 20% per lesson</p>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {["12 lessons/month (3/week)", "1-hour sessions", "VIP priority scheduling", "Advanced learning plan", "Weekly progress reports", "Study materials included"].map((f, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /><span className="text-gray-700">{f}</span></li>
                  ))}
                </ul>
                <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Premium%20monthly%20plan%20(960%20MAD%2Fmonth)" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
                </a>
              </Card>
            </div>

            {/* Pay-Per-Lesson */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-6 bg-gray-50 border-2 border-gray-300">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Pay-Per-Lesson</h3>
                    <p className="text-gray-500 text-sm">No commitment required. Book lessons as you go.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-gray-900">100 MAD</p>
                    <p className="text-sm text-gray-500">per lesson · <strong>1 hour</strong></p>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20single%20lesson%20(100%20MAD)" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-gray-400 hover:bg-gray-100">
                      Book a Single Lesson
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Group Study */}
          <div className="max-w-3xl mx-auto mt-8">
            <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow border-2 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                GROUP STUDY — AFFORDABLE
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Group Study</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn with other students in a small, interactive group. Perfect for those who enjoy collaborative learning and want an affordable option to practise English regularly.
                  </p>
                  <ul className="space-y-2 text-sm">
                    {["8 lessons/month (2/week)", "1-hour sessions", "Small group — interactive & engaging", "Structured group lesson plan", "Live via Google Meet"].map((f, i) => (
                      <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /><span className="text-gray-700">{f}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-green-50 p-6 rounded-lg mb-4">
                    <p className="text-5xl font-bold text-green-600">200 MAD</p>
                    <p className="text-gray-500 mt-1 text-sm">per month</p>
                    <p className="text-sm text-gray-400 mt-2">8 lessons · 2/week · 1 hour each</p>
                    <p className="text-sm font-bold text-green-700 mt-2">Only 25 MAD per lesson!</p>
                  </div>
                  <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Group%20Study%20plan%20(200%20MAD%2Fmonth)" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3">
                      Join the Group
                    </Button>
                  </a>
                  <p className="text-xs text-gray-400 mt-2">Limited spots available per group</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What's Included in Every Session
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Interactive Speaking Practice", desc: "Real conversations on topics that matter to you." },
              { title: "Personalized Feedback", desc: "Targeted corrections and guidance tailored to your needs." },
              { title: "Grammar & Vocabulary Building", desc: "Improve accuracy and expand your word bank naturally." },
              { title: "Real-Life Scenarios", desc: "Practice English in situations you'll actually encounter." },
              { title: "Confidence Building", desc: "A supportive environment where mistakes are learning opportunities." },
              { title: "Flexible Rescheduling", desc: "Cancel or reschedule up to 24 hours in advance." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-blue-50">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I joined Fluentry to improve my communication with international clients. After completing the Business English program, my fluency improved so much that I was promoted to a senior position."
              </p>
              <div>
                <p className="font-bold text-gray-900">Ahmed M.</p>
                <p className="text-sm text-gray-600">Logistics Professional, Casablanca</p>
              </div>
            </Card>
            <Card className="p-6 bg-blue-50">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "After 2 months with Mr. Ibrahim, I achieved 7.5 on the IELTS. His method is unique — focused, practical, and results-driven. I couldn't have done it without Fluentry."
              </p>
              <div>
                <p className="font-bold text-gray-900">Fatima Z.</p>
                <p className="text-sm text-gray-600">HR Manager, Casablanca</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Can I switch between packages?", a: "Absolutely! You can upgrade or change your plan at any time. Contact Ibrahim on WhatsApp to make the switch." },
              { q: "What payment methods do you accept?", a: "We accept bank transfers (MAD), mobile payments, and international payments. Installment plans are available for signature programs. Contact Ibrahim for details." },
              { q: "Is there a free trial lesson?", a: "Yes! We offer a free 10-minute strategy call where you can meet Mr. Ibrahim K., discuss your goals, and get a personalized program recommendation." },
              { q: "What if I miss a lesson?", a: "You can reschedule up to 24 hours in advance. Missed lessons without notice cannot be refunded or rescheduled." },
              { q: "How many students are in a Group Study session?", a: "Group Study sessions are kept small (typically 3–6 students) to ensure everyone gets attention and plenty of speaking practice." },
              { q: "What is the results guarantee exactly?", a: "If you complete a signature program and don't achieve your stated goal, Mr. Ibrahim will continue coaching you for free — additional sessions at no charge — until you reach your target. This applies to the IELTS Accelerator, Business English Mastery, and VIP Concierge programs." },
            ].map((faq) => (
              <Card key={faq.q} className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in Your English?</h2>
          <p className="text-lg text-orange-100 mb-4">
            Book a free 10-minute strategy call. No commitment, no pressure — just a clear plan to reach your goals.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4" />
            Results guaranteed on all signature programs
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call%20to%20discuss%20programs" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold w-full sm:w-auto">
                Book Free Strategy Call
              </Button>
            </a>
            <Link href="/free-test">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 w-full sm:w-auto">
                Take Free Level Test
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
