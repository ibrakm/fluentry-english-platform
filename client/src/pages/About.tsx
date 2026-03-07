import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Heart, Target, Lightbulb, Award, BookOpen, Users, Globe,
  CheckCircle, Star, MessageCircle, Shield, TrendingUp, ArrowRight
} from "lucide-react";
import { SEO } from "@/components/SEO";

const credentials = [
  {
    icon: Award,
    title: "TESOL Certificate",
    subtitle: "Internationally Recognised",
    desc: "Teaching English to Speakers of Other Languages — the gold standard for ELT professionals worldwide.",
  },
  {
    icon: BookOpen,
    title: "B.A. in English Studies",
    subtitle: "University Degree",
    desc: "Deep academic grounding in English language, linguistics, and literature.",
  },
  {
    icon: Users,
    title: "Private School Teacher",
    subtitle: "Classroom + Online",
    desc: "Active English teacher at a private school in Morocco, with parallel 1-on-1 online coaching.",
  },
  {
    icon: Globe,
    title: "Specialised Training",
    subtitle: "IELTS · Business · Conversation",
    desc: "Focused expertise in IELTS/TOEFL preparation, Business English, and conversational fluency.",
  },
];

const results = [
  { stat: "100+", label: "Students Coached" },
  { stat: "4.9★", label: "Average Rating" },
  { stat: "90%", label: "Achieve Their Goal" },
  { stat: "3+", label: "Years of Experience" },
];

const testimonials = [
  {
    name: "Fatima Z.",
    role: "HR Manager, Casablanca",
    text: "Ibrahim's coaching completely changed how I approach English. I went from translating every word to actually thinking in English. My IELTS score improved by 1.5 bands!",
    result: "IELTS +1.5 Bands",
    stars: 5,
  },
  {
    name: "Youssef B.",
    role: "Marketing Manager, Rabat",
    text: "As a business professional, I needed to improve my presentation skills fast. Ibrahim's Business English program gave me the confidence to lead international meetings.",
    result: "Leads International Meetings",
    stars: 5,
  },
  {
    name: "Salma C.",
    role: "TOEFL Student, Fes",
    text: "Mr. Ibrahim is patient and knows exactly how to correct pronunciation for Arabic speakers. I scored 28/30 on the TOEFL speaking section!",
    result: "TOEFL Speaking 28/30",
    stars: 5,
  },
];

const methodSteps = [
  {
    icon: Lightbulb,
    title: "Communication-First Learning",
    desc: "Real conversations from Day One. We prioritise speaking using real-life topics, not grammar drills in isolation.",
  },
  {
    icon: Target,
    title: "Outcome-Based Roadmap",
    desc: "Every student gets a personalised week-by-week plan with clear milestones and a measurable end goal.",
  },
  {
    icon: TrendingUp,
    title: "Morocco-Specific Expertise",
    desc: "Mr. Ibrahim understands the exact challenges Moroccan learners face — French interference, Arabic pronunciation patterns — and addresses them directly.",
  },
  {
    icon: Heart,
    title: "Positive, Judgement-Free Zone",
    desc: "A supportive environment where mistakes are celebrated as learning opportunities. Confidence grows here.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Mr. Ibrahim K. — TESOL-Certified English Coach Morocco | Fluentry"
        description="Meet Mr. Ibrahim K., TESOL-certified English coach based in Tangier, Morocco. 100+ students coached, 4.9★ rating, results guaranteed. Specialising in IELTS, Business English, and conversational fluency."
        path="/about"
      />
      <div className="min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Award className="w-4 h-4" />
                  TESOL-Certified · Based in Morocco
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  Meet Mr. Ibrahim K.
                </h1>
                <p className="text-xl text-blue-200 mb-6">
                  Morocco's outcome-focused English coach — helping students and professionals achieve real, measurable results since 2022.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book Free Strategy Call
                    </Button>
                  </a>
                  <Link href="/free-test">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                      Take Free Level Test
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Photo / Stats card */}
              <div className="flex flex-col gap-4">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <img
                    src="/ibrahim-photo.jpg"
                    alt="Mr. Ibrahim K. — English Language Coach, Tangier Morocco"
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400 shadow-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const div = document.createElement("div");
                        div.className = "w-32 h-32 rounded-full mx-auto mb-4 bg-blue-600 flex items-center justify-center border-4 border-yellow-400 shadow-xl";
                        div.innerHTML = '<span class="text-white text-4xl font-bold">IK</span>';
                        parent.insertBefore(div, target);
                      }
                    }}
                  />
                  <h2 className="text-xl font-bold text-white">Mr. Ibrahim K.</h2>
                  <p className="text-blue-300 text-sm">TESOL-Certified English Coach</p>
                  <p className="text-blue-400 text-xs mt-1">Tangier, Morocco 🇲🇦</p>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {results.map((r) => (
                    <div key={r.label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                      <p className="text-2xl font-extrabold text-yellow-300">{r.stat}</p>
                      <p className="text-xs text-blue-300 mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Guarantee Banner */}
        <section className="bg-green-700 text-white py-4 px-4">
          <div className="container mx-auto max-w-4xl flex items-center justify-center gap-3 text-center flex-wrap">
            <Shield className="w-5 h-5 text-green-300 flex-shrink-0" />
            <p className="font-semibold text-sm">
              Results Guaranteed on all signature programs — if you don't reach your goal, Mr. Ibrahim coaches you for free until you do.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Story Behind Fluentry</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-8">
              <p className="text-xl italic text-blue-900 font-semibold mb-3">
                "Fluency comes from confidence, not perfection. My goal is to make English learning practical, enjoyable, and personal to every student."
              </p>
              <p className="text-blue-700 font-bold">— Mr. Ibrahim K.</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
              <p>
                Mr. Ibrahim K. is a <strong>TESOL-certified English language coach</strong> with a <strong>Bachelor's degree in English Studies</strong> and over three years of experience teaching learners across Morocco and internationally.
              </p>
              <p>
                He currently teaches English at a <strong>private school in Morocco</strong> while also running <strong>Fluentry</strong> — his online coaching practice dedicated to helping motivated students and professionals achieve specific, measurable English goals.
              </p>
              <p>
                What makes Mr. Ibrahim different is his deep understanding of the <strong>unique challenges Moroccan learners face</strong> — the interference of French and Darija, the difficulty of English sounds that don't exist in Arabic, and the confidence barrier that stops so many people from speaking even when they know the grammar. He addresses all of these directly, in every session.
              </p>
              <p>
                Fluentry was built on a simple belief: <strong>students deserve to pay for results, not just hours</strong>. Every program is structured around a clear outcome — an IELTS band score, a professional fluency milestone, or the confidence to lead meetings in English — and backed by a results guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Professional Qualifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((c) => {
                const Icon = c.icon;
                return (
                  <Card key={c.title} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-600">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
                        <p className="text-blue-600 text-sm font-semibold mb-1">{c.subtitle}</p>
                        <p className="text-gray-600 text-sm">{c.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Fluency Bridge Method */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                Proprietary Methodology
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                The Fluency Bridge Method™
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A conversation-first, confidence-building approach that bridges the gap between knowing English and using it naturally — developed specifically for Moroccan learners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methodSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who I Teach */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Who Mr. Ibrahim Teaches</h2>
            <p className="text-center text-gray-600 mb-10">
              Students, professionals, and lifelong learners from across Morocco — online and in Tangier.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "IELTS / TOEFL Students", emoji: "🎓" },
                { label: "Business Professionals", emoji: "💼" },
                { label: "Tourism & Hospitality", emoji: "🏨" },
                { label: "Logistics & Trade", emoji: "🚢" },
                { label: "Engineers & Tech", emoji: "💻" },
                { label: "University Students", emoji: "📚" },
                { label: "HR & Finance", emoji: "📊" },
                { label: "General Learners", emoji: "🗣️" },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-blue-100 p-4 rounded-xl text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-2">{item.emoji}</div>
                  <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What Students Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <Card key={t.name} className="p-6 bg-blue-50 border-0">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                      {t.result}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm italic mb-4">"{t.text}"</p>
                  <div className="border-t border-blue-200 pt-3">
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 px-4 bg-blue-950 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <Target className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-blue-200 text-lg leading-relaxed">
              To provide accessible, high-quality, and personalised online English coaching in Morocco that transforms learners into confident, natural communicators — ready to thrive in a global environment. Every student deserves to pay for results, not just hours.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Mr. Ibrahim?</h2>
            <p className="text-lg text-orange-100 mb-8">
              Book a free 10-minute strategy call. No commitment, no pressure — just a clear plan to reach your English goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Free Strategy Call
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 w-full sm:w-auto">
                  View Programs & Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-orange-200 mt-4">
              <Shield className="w-4 h-4 inline mr-1" />
              Results guaranteed on all signature programs
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
