/**
 * /start — Facebook Ads Dedicated Landing Page
 *
 * This page is optimised for Facebook ad traffic.
 * It has NO navigation menu to reduce distractions and maximise conversions.
 * Direct students to book a lesson or take the free test.
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Star, Award, MessageCircle, Clock, Users, Zap, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

const testimonials = [
  {
    name: "Fatima Z.",
    role: "HR Manager, Casablanca",
    text: "After just 2 months with Mr. Ibrahim, I passed my IELTS with a 7.5 band score. His method is completely different from any other teacher I've tried.",
    stars: 5,
  },
  {
    name: "Youssef A.",
    role: "Software Engineer, Rabat",
    text: "I can now confidently lead meetings in English with international clients. Mr. Ibrahim helped me go from B1 to C1 in 4 months.",
    stars: 5,
  },
  {
    name: "Nadia B.",
    role: "University Student, Marrakech",
    text: "The lessons are so practical and fun. I stopped being afraid to speak English. I highly recommend Fluentry to everyone!",
    stars: 5,
  },
];

const packages = [
  {
    name: "Starter",
    price: "500 MAD",
    period: "/month",
    lessons: "4 lessons/month",
    duration: "45 min each",
    color: "border-green-300",
    badge: null,
  },
  {
    name: "Standard",
    price: "800 MAD",
    period: "/month",
    lessons: "8 lessons/month",
    duration: "1 hour each",
    color: "border-blue-500",
    badge: "MOST POPULAR",
  },
  {
    name: "Premium",
    price: "1,400 MAD",
    period: "/month",
    lessons: "16 lessons/month",
    duration: "1 hour each",
    color: "border-purple-500",
    badge: "FASTEST RESULTS",
  },
];

export default function StartPage() {
  const whatsappLink =
    "https://wa.me/212614902990?text=Hi%20Mr.%20Ibrahim!%20I%20saw%20your%20ad%20on%20Facebook%20and%20I%27d%20like%20to%20start%20learning%20English%20with%20you.%20Can%20we%20schedule%20a%20free%20consultation%3F";

  return (
    <>
      <SEO
        title="Start Learning English Today | Fluentry — Online Coaching Morocco"
        description="Join 100+ students who improved their English with Mr. Ibrahim K. Personalized 1-on-1 online coaching from Morocco. Book your free consultation now."
        path="/start"
      />

      {/* ── MINIMAL HEADER (no nav) ── */}
      <header className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-blue-700">Fluentry</span>
            <span className="text-xs text-gray-400 hidden sm:block">English Coaching</span>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white font-bold">
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp Us
            </Button>
          </a>
        </div>
      </header>

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-500/40 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 text-yellow-400" />
              TESOL-Certified Coach · Morocco · 100+ Students
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Speak English with<br />
              <span className="text-yellow-400">Real Confidence</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-2xl mx-auto">
              Personalised 1-on-1 online English coaching designed for Moroccan students and professionals.
            </p>

            <p className="text-lg text-blue-200 mb-10">
              From beginner to advanced — at your pace, on your schedule.
            </p>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="text-center">
                <p className="text-3xl font-black text-white">100+</p>
                <p className="text-sm text-blue-200">Students Coached</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-white">4.9★</p>
                <p className="text-sm text-blue-200">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-white">3+</p>
                <p className="text-sm text-blue-200">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-white">TESOL</p>
                <p className="text-sm text-blue-200">Certified</p>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white text-xl font-black py-8 px-10 shadow-2xl shadow-green-500/40 w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Book Free Consultation on WhatsApp
                </Button>
              </a>
              <Link href="/free-test">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 text-lg font-bold py-8 px-8 w-full sm:w-auto"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Take Free English Test First
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-sm text-blue-300">
              ✅ Free 10-minute consultation · No commitment · Lessons from 62.50 MAD
            </p>
          </div>
        </section>

        {/* ── URGENCY BANNER ── */}
        <section className="bg-yellow-400 py-3 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="font-black text-yellow-900 text-sm md:text-base">
              ⚡ Limited spots available this month — Mr. Ibrahim takes a maximum of 15 students at a time
            </p>
          </div>
        </section>

        {/* ── WHAT YOU GET ── */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
              What You Get With Fluentry
            </h2>
            <p className="text-center text-gray-500 mb-12">
              Not just lessons — a complete transformation in how you speak and think in English.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "100% Personalised Lessons",
                  desc: "Every lesson is designed specifically for your level, goals, and weaknesses. No generic textbooks.",
                },
                {
                  icon: "💬",
                  title: "Real Conversation Practice",
                  desc: "You speak from day one. No boring grammar drills — real conversations on topics that matter to you.",
                },
                {
                  icon: "📈",
                  title: "Measurable Progress",
                  desc: "You take a CEFR test before and after. You will see exactly how much you've improved.",
                },
                {
                  icon: "🏆",
                  title: "IELTS & TOEFL Preparation",
                  desc: "Targeted preparation for international exams with proven strategies from a certified coach.",
                },
                {
                  icon: "💼",
                  title: "Business English",
                  desc: "Emails, presentations, meetings, negotiations — everything you need for your professional life.",
                },
                {
                  icon: "📱",
                  title: "WhatsApp Support",
                  desc: "Ask questions between lessons. Mr. Ibrahim is available to help you whenever you need it.",
                },
              ].map((item) => (
                <Card key={item.title} className="p-6 flex items-start gap-4 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
              What Students Say
            </h2>
            <p className="text-center text-gray-500 mb-12">Real results from real students across Morocco</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <Card key={t.name} className="p-6 border-gray-200">
                  <div className="flex mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-center text-gray-500 mb-12">No hidden fees. Cancel anytime.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.name} className={`p-6 border-2 ${pkg.color} relative`}>
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full whitespace-nowrap">
                      {pkg.badge}
                    </div>
                  )}
                  <h3 className="text-xl font-black text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 text-sm">{pkg.period}</span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> {pkg.lessons}</p>
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" /> {pkg.duration}</p>
                    <p className="flex items-center gap-2"><Users className="w-4 h-4 text-purple-500" /> 1-on-1 with Mr. Ibrahim</p>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">
              Not sure which plan is right for you? <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">Ask Mr. Ibrahim on WhatsApp</a>
            </p>
          </div>
        </section>

        {/* ── ABOUT MR. IBRAHIM ── */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-3xl font-black">IK</span>
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-3">Meet Mr. Ibrahim Kabaj</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              TESOL-certified English coach based in Morocco with over 3 years of experience helping students and professionals achieve real fluency. His teaching philosophy is simple: <strong>speak from day one, learn through real conversations, and build confidence fast.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">✅ TESOL Certified</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">✅ 100+ Students</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">✅ IELTS Specialist</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">✅ Business English</span>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Ready to Start?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Book your free 10-minute consultation now. No commitment, no credit card. Just a conversation about your goals.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white text-xl font-black py-8 px-12 shadow-2xl shadow-green-500/40"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Message Mr. Ibrahim on WhatsApp
              </Button>
            </a>
            <p className="mt-4 text-sm text-blue-300">
              ⚡ Usually replies within 1 hour · Available 7 days a week
            </p>
          </div>
        </section>

        {/* ── MINIMAL FOOTER ── */}
        <footer className="bg-gray-900 text-gray-400 py-6 px-4 text-center text-sm">
          <p>© 2026 Fluentry English Coaching · Morocco · <a href="mailto:ibrahimkabaikm@gmail.com" className="text-gray-300 hover:text-white">ibrahimkabaikm@gmail.com</a></p>
          <p className="mt-1">
            <Link href="/" className="text-gray-400 hover:text-white mr-4">Home</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white mr-4">Pricing</Link>
            <Link href="/free-test" className="text-gray-400 hover:text-white">Free Test</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
