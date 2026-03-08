import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Users, Zap, Globe, BookOpen, ArrowRight, Star, Award, Clock, X, TrendingUp, Shield, Target } from "lucide-react";
import { useState } from "react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Testimonials } from "@/components/Testimonials";
import { SEO } from "@/components/SEO";

const homeFAQ = [
  {
    question: "How much does English coaching cost in Morocco?",
    answer: "Fluentry offers outcome-based English coaching programs starting from 500 MAD/month. For serious learners, the 8-Week IELTS Accelerator program is 12,000 MAD and includes a results guarantee. All lessons are 1-on-1 with a TESOL-certified coach.",
  },
  {
    question: "Can I learn English online in Morocco?",
    answer: "Yes! Fluentry offers 100% online 1-on-1 English coaching for students and professionals in Morocco. Sessions are conducted via Google Meet, flexible to your schedule.",
  },
  {
    question: "How do I know my English level before starting?",
    answer: "Fluentry offers a free CEFR English level test that takes only 5 minutes. It assesses your level from A1 (beginner) to C2 (mastery) and gives you a personalized learning recommendation.",
  },
  {
    question: "Is Mr. Ibrahim K. a certified English teacher?",
    answer: "Yes. Mr. Ibrahim K. holds a TESOL certification and has helped 100+ Moroccan students and professionals improve their English for work, travel, and academic purposes.",
  },
  {
    question: "What types of English courses does Fluentry offer?",
    answer: "Fluentry offers the 8-Week IELTS Accelerator, 12-Week Business English Mastery, General English, Conversation Practice, and Pronunciation Coaching — all tailored to your specific goals.",
  },
  {
    question: "How quickly can I improve my English?",
    answer: "With consistent 1-on-1 coaching, 90% of our students achieve their target score or fluency goal within 8 weeks. The pace depends on your starting level, goals, and practice outside sessions.",
  },
];

export default function Home() {
  const title = "English Coaching Morocco | IELTS Prep & Business English | Fluentry";
  const description = "Learn English online in Morocco with TESOL-certified coach Mr. Ibrahim K. IELTS 7.5+ guaranteed, Business English & conversation. 1-on-1 lessons from 100 MAD/hr. Free level test.";
  const homeKeywords = "English coaching Morocco, cours anglais en ligne Maroc, IELTS preparation Morocco, تعلم الإنجليزية المغرب, English teacher Tangier, online English lessons Morocco, Business English Morocco, IELTS coaching Casablanca, English tutor Morocco, professeur anglais Maroc, TESOL certified coach Morocco, learn English online Morocco, English for work Morocco, IELTS 7.5 Morocco, English fluency Morocco, cours anglais Casablanca, cours anglais Rabat, cours anglais Marrakech, English lessons Morocco online, 1-on-1 English coaching Morocco";
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/"
        keywords={homeKeywords}
        faqItems={homeFAQ}
      />
      <div className="min-h-screen">

      {/* Bilingual Moroccan Banner */}
      {bannerVisible && (
        <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-3 px-4 relative">
          <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left flex-1">
              <span className="text-lg">🇲🇦</span>
              <span className="text-sm sm:text-base font-semibold">
                <span className="text-yellow-300">بالعربية:</span> تعلم الإنجليزية مع كوتش متخصص — نتائج مضمونة
              </span>
              <span className="hidden sm:block text-green-300">|</span>
              <span className="text-sm sm:text-base font-semibold">
                <span className="text-yellow-300">En français:</span> Coaching anglais en ligne — Résultats garantis
              </span>
            </div>
            <button
              onClick={() => setBannerVisible(false)}
              className="text-green-200 hover:text-white transition-colors flex-shrink-0"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24 px-4 shadow-xl">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start md:items-center">
            <div className="text-center md:text-left">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-500/40 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 text-yellow-400" />
                TESOL-Certified Coach · Based in Morocco
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                From Frozen to Fluent.<br className="hidden md:block" />
                <span className="text-yellow-300">Achieve 7.5+ IELTS</span><br className="hidden md:block" />
                in 8 Weeks.
              </h1>

              {/* Bilingual subtitle for Moroccan audience */}
              <p className="text-base text-yellow-300 font-medium mb-2 italic">
                تجمد وأنت تتكلم الإنجليزية؟ — Vous bloquez quand vous parlez anglais ?
              </p>
              <p className="text-lg md:text-xl text-blue-100 mb-4">
                Morocco's outcome-focused English coach. Mr. Ibrahim K. delivers real results — not just lessons. <strong className="text-white">90% of students reach their goal in 8 weeks.</strong>
              </p>

              {/* Money-back guarantee badge */}
              <div className="inline-flex items-center gap-2 bg-green-600/30 border border-green-400/40 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4 text-green-400" />
                Results Guaranteed — or we coach you for free until you succeed
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%2010-minute%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-orange-500 text-white hover:bg-orange-600 font-semibold shadow-2xl shadow-orange-500/50 w-full sm:w-auto"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).plausible) {
                        (window as any).plausible("Free Consultation Click");
                      }
                    }}
                  >
                    Book Free 10-Min Strategy Call
                  </Button>
                </a>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700 w-full sm:w-auto"
                  >
                    View Programs & Pricing
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-sm text-blue-200">
                No commitment required · Free 10-min consultation · Results guaranteed
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-xs text-blue-200">Students Coached</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">90%</p>
                  <p className="text-xs text-blue-200">Reach Their Goal</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">4.9★</p>
                  <p className="text-xs text-blue-200">Average Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">3+</p>
                  <p className="text-xs text-blue-200">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <img
                src="/hero-illustration.webp"
                alt="Online English lesson with Mr. Ibrahim K. — Fluentry Morocco"
                className="w-full h-auto rounded-lg shadow-2xl max-w-md"
                loading="eager"
                width="600"
                height="450"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Proof Bar */}
      <section className="bg-blue-950 text-white py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { stat: "+1.5 Bands", label: "Average IELTS Improvement" },
              { stat: "90%", label: "Students Achieve Target Score" },
              { stat: "8 Weeks", label: "Average Time to Results" },
              { stat: "4.9 / 5", label: "Student Satisfaction" },
            ].map((item) => (
              <div key={item.label} className="border-r border-blue-700 last:border-0 px-2">
                <p className="text-2xl font-extrabold text-yellow-300">{item.stat}</p>
                <p className="text-xs text-blue-300 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stop Buying Lessons. Start Buying Results.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Most English teachers sell you hours. Fluentry sells you outcomes. Mr. Ibrahim K. works with a select group of motivated students in Morocco to deliver one thing: <strong>measurable, guaranteed progress</strong> — whether that's an IELTS band score, a promotion, or the confidence to lead meetings in English.
            </p>
            <blockquote className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded text-left">
              <p className="text-xl font-semibold text-blue-900">
                "English isn't just grammar and vocabulary. It's confidence, clarity, and connection — and I guarantee you'll feel all three."
              </p>
              <footer className="text-sm text-gray-600 mt-2">— Mr. Ibrahim K., TESOL-Certified Coach & Founder of Fluentry</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Signature Programs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outcome-Based Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Not just lessons — complete transformation programs with clear goals, structured milestones, and a results guarantee.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* IELTS Accelerator */}
            <Card className="p-8 border-2 border-blue-600 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">8-Week IELTS Accelerator</h3>
              <p className="text-blue-600 font-semibold text-sm mb-3">For students seeking to study abroad</p>
              <p className="text-gray-600 text-sm mb-4">
                Achieve 7.5+ band score in 8 weeks with our proven methodology. Personalized study plan, weekly mock tests, and direct feedback on all 4 skills.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-blue-600">12,000 MAD</p>
                <p className="text-xs text-gray-500">Full 8-week program · Results guaranteed</p>
              </div>
              <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mb-4">
                <Shield className="w-4 h-4" />
                Money-back guarantee if you don't reach your target
              </div>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%208-Week%20IELTS%20Accelerator%20program" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Book Free Strategy Call
                </Button>
              </a>
            </Card>

            {/* Business English Mastery */}
            <Card className="p-8 border-2 border-purple-600 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                HIGH INCOME
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">12-Week Business English Mastery</h3>
              <p className="text-purple-600 font-semibold text-sm mb-3">For professionals in Casablanca & Rabat</p>
              <p className="text-gray-600 text-sm mb-4">
                Lead international meetings, write compelling emails, and present with authority. Designed for professionals in finance, tech, and management.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-purple-600">15,000 MAD</p>
                <p className="text-xs text-gray-500">Full 12-week program · Results guaranteed</p>
              </div>
              <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mb-4">
                <Shield className="w-4 h-4" />
                Guaranteed fluency for professional settings
              </div>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%2012-Week%20Business%20English%20Mastery%20program" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Book Free Strategy Call
                </Button>
              </a>
            </Card>

            {/* VIP Concierge */}
            <Card className="p-8 border-2 border-yellow-500 hover:shadow-xl transition-shadow relative bg-gradient-to-b from-yellow-50 to-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white px-5 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                VIP ELITE
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">VIP Concierge Coaching</h3>
              <p className="text-yellow-700 font-semibold text-sm mb-3">For executives & serious investors</p>
              <p className="text-gray-600 text-sm mb-4">
                Unlimited 1-on-1 sessions, 24/7 WhatsApp access, fully bespoke curriculum, and direct involvement in every aspect of your English journey.
              </p>
              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-yellow-700">25,000 MAD</p>
                <p className="text-xs text-gray-500">Complete VIP program · Unlimited access</p>
              </div>
              <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mb-4">
                <Shield className="w-4 h-4" />
                Full results guarantee — no exceptions
              </div>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20VIP%20Concierge%20Coaching%20program" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Apply for VIP Program
                </Button>
              </a>
            </Card>

          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-4">Prefer a flexible monthly plan? <Link href="/pricing" className="text-blue-600 font-semibold hover:underline">View all pricing options →</Link></p>
          </div>
        </div>
      </section>

      {/* Why Choose Fluentry — Differentiators */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Why Fluentry is Different
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            There are hundreds of English teachers in Morocco. Here is why serious learners choose Fluentry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                The Fluency Bridge Method™
              </h3>
              <p className="text-gray-600">
                Our proprietary conversation-first, confidence-building approach. We don't teach grammar rules — we build real communication skills that transfer to real life.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Results Guarantee
              </h3>
              <p className="text-gray-600">
                If you don't achieve your target IELTS score or fluency goal within the program duration, we continue coaching you for free until you do. Zero risk.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Morocco-Specific Expertise
              </h3>
              <p className="text-gray-600">
                Mr. Ibrahim K. understands the exact challenges Moroccan learners face — from French interference to Arabic pronunciation patterns — and addresses them directly.
              </p>
            </Card>
          </div>

          {/* Differentiator table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left rounded-tl-lg">Feature</th>
                  <th className="p-4 text-center text-yellow-300 font-bold">Fluentry</th>
                  <th className="p-4 text-center rounded-tr-lg">Typical Tutor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Outcome-based programs", "✅ Yes", "❌ Hourly lessons"],
                  ["Results guarantee", "✅ Yes", "❌ No"],
                  ["Morocco-specific curriculum", "✅ Yes", "❌ Generic"],
                  ["TESOL-certified coach", "✅ Yes", "⚠️ Often not"],
                  ["Structured progress tracking", "✅ Yes", "❌ No"],
                  ["Fluency Bridge Method™", "✅ Exclusive", "❌ No"],
                ].map(([feature, fluentry, other], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 font-medium text-gray-700 border-b border-gray-100">{feature}</td>
                    <td className="p-4 text-center font-semibold text-green-600 border-b border-gray-100">{fluentry}</td>
                    <td className="p-4 text-center text-gray-500 border-b border-gray-100">{other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", icon: <CheckCircle className="w-6 h-6 text-blue-600" />, title: "Book a Free Strategy Call", desc: "10 minutes with Mr. Ibrahim to discuss your goals, current level, and the right program for you." },
              { step: "2", icon: <Clock className="w-6 h-6 text-blue-600" />, title: "Get Your Custom Roadmap", desc: "Receive a personalized week-by-week plan with clear milestones and measurable outcomes." },
              { step: "3", icon: <Star className="w-6 h-6 text-blue-600" />, title: "Achieve Your Goal", desc: "Follow the program, track your progress, and reach your target — guaranteed." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%2010-minute%20strategy%20call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Book Your Free Strategy Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            All Course Offerings
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Whether you're a student, professional, or lifelong learner, we have a program for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "General English", desc: "Build a strong foundation in speaking, listening, reading, and writing." },
              { title: "Business English", desc: "Master professional communication for meetings, emails, and presentations." },
              { title: "IELTS & TOEFL Prep", desc: "Achieve your target score with focused test strategies and practice." },
              { title: "Conversation Practice", desc: "Improve fluency and confidence through natural, engaging conversations." },
            ].map((course) => (
              <Card key={course.title} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.desc}</p>
                <Link href="/courses">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              Featured Article
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest from Fluentry
            </h2>
          </div>

          <Link href="/articles/the-unspoken-passport">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="/images/the-unspoken-passport.webp"
                    alt="The Unspoken Passport — Why English Still Shapes the World"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    The Unspoken Passport: Why English Still Shapes the World
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore how English connects cultures, careers, and opportunities in our global era. A thoughtful reflection on the enduring significance of English in the modern world.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span>By Mr. Ibrahim K.</span>
                    <span>·</span>
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                    Read Article
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* Featured Blog Posts Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              English Learning Blog
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Expert Tips & Strategies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from TESOL-certified coach Mr. Ibrahim K. Practical advice to help you master English faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                slug: "online-english-classes-morocco-2026-guide",
                title: "Online English Classes for Moroccans",
                excerpt: "Compare prices and methods to find the best way to learn English online.",
                category: "Learning Guide",
                readTime: "12 min"
              },
              {
                slug: "a2-to-b1-english-6-month-plan-morocco",
                title: "From A2 to B1 in 6 Months",
                excerpt: "A practical 6-month plan with weekly schedule to improve your English.",
                category: "Learning Plan",
                readTime: "10 min"
              },
              {
                slug: "best-apps-websites-learn-english-morocco",
                title: "15 Best Apps & Websites for Learning English",
                excerpt: "Discover the top digital tools for vocabulary, listening, and reading.",
                category: "Tool Review",
                readTime: "14 min"
              },
              {
                slug: "challenges-moroccan-english-learners-face",
                title: "5 Challenges Moroccan Learners Face",
                excerpt: "Understand the unique obstacles and practical solutions for Moroccan learners.",
                category: "Learning Insights",
                readTime: "11 min"
              }
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="relative h-40 bg-gradient-to-br from-blue-100 to-blue-50">
                    <img
                      src="/hero-illustration.webp"
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-blue-600 font-semibold mt-3 text-xs">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                View All Blog Posts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Stop Struggling and Start Achieving?
          </h2>
          <p className="text-lg text-orange-100 mb-4">
            Book a free 10-minute strategy call. No commitment, no pressure — just a clear plan to reach your English goals.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4" />
            Results guaranteed — or we coach you for free
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%2010-minute%20strategy%20call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 font-semibold shadow-xl w-full sm:w-auto"
              >
                Book Your Free Strategy Call
              </Button>
            </a>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-600 w-full sm:w-auto"
              >
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
