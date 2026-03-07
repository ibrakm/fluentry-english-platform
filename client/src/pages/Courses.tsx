import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  BookOpen, Users, Briefcase, Award, CheckCircle, MessageCircle,
  ArrowRight, Shield, Star, Clock, Target, TrendingUp
} from "lucide-react";
import { SEO } from "@/components/SEO";

const courses = [
  {
    id: "ielts-prep",
    icon: Award,
    color: "blue",
    badge: "MOST POPULAR",
    title: "IELTS & TOEFL Preparation",
    tagline: "Achieve your target band score — guaranteed",
    audience: "Students planning to study abroad or needing an official English certification.",
    outcomes: [
      "Achieve 7.5+ IELTS band score in 8 weeks",
      "Master all 4 sections: Listening, Reading, Writing, Speaking",
      "Weekly mock tests with detailed scoring and feedback",
      "Personalised study plan and time management strategies",
      "Results guarantee — free coaching until you hit your target",
    ],
    program: "8-Week IELTS Accelerator",
    price: "12,000 MAD",
    cta: "Book Free Strategy Call",
    ctaLink: "https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20IELTS%20preparation",
  },
  {
    id: "business-english",
    icon: Briefcase,
    color: "purple",
    badge: "HIGH INCOME IMPACT",
    title: "Business English Mastery",
    tagline: "Lead meetings, write emails, present with authority",
    audience: "Professionals in Casablanca, Rabat, and Tangier who need English for career advancement.",
    outcomes: [
      "Lead international meetings and presentations confidently",
      "Write compelling professional emails and reports",
      "Master negotiation and business communication vocabulary",
      "LinkedIn profile English review included",
      "Guaranteed professional fluency milestone",
    ],
    program: "12-Week Business English Mastery",
    price: "15,000 MAD",
    cta: "Book Free Strategy Call",
    ctaLink: "https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20Business%20English",
  },
  {
    id: "conversation-practice",
    icon: Users,
    color: "green",
    badge: "CONFIDENCE BUILDER",
    title: "Conversation & Fluency",
    tagline: "Stop freezing — start speaking naturally",
    audience: "Learners who understand English but struggle to speak fluently and spontaneously.",
    outcomes: [
      "Eliminate hesitation and speak on any topic with confidence",
      "Improve pronunciation and natural flow",
      "Master idiomatic expressions and everyday vocabulary",
      "Real-life scenarios: travel, interviews, social situations",
      "Flexible monthly plans from 500 MAD/month",
    ],
    program: "Flexible Monthly Plans",
    price: "From 500 MAD/month",
    cta: "Start Conversation Coaching",
    ctaLink: "https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20Conversation%20Practice",
  },
  {
    id: "general-english",
    icon: BookOpen,
    color: "orange",
    badge: "FOUNDATION",
    title: "General English",
    tagline: "Build a strong foundation from scratch",
    audience: "Beginners and intermediate learners who want to improve all four English skills.",
    outcomes: [
      "Master all four skills: Reading, Writing, Listening, Speaking",
      "Build strong grammar foundations",
      "Expand practical vocabulary for daily life",
      "Develop confidence for travel, work, and study",
      "Group study available from 200 MAD/month",
    ],
    program: "Flexible Monthly Plans",
    price: "From 200 MAD/month",
    cta: "Start General English",
    ctaLink: "https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20General%20English",
  },
];

const colorMap: Record<string, { border: string; badge: string; icon: string; btn: string; price: string }> = {
  blue: {
    border: "border-blue-600",
    badge: "bg-blue-600 text-white",
    icon: "bg-blue-100 text-blue-600",
    btn: "bg-blue-600 hover:bg-blue-700 text-white",
    price: "text-blue-600",
  },
  purple: {
    border: "border-purple-600",
    badge: "bg-purple-600 text-white",
    icon: "bg-purple-100 text-purple-600",
    btn: "bg-purple-600 hover:bg-purple-700 text-white",
    price: "text-purple-600",
  },
  green: {
    border: "border-green-600",
    badge: "bg-green-600 text-white",
    icon: "bg-green-100 text-green-600",
    btn: "bg-green-600 hover:bg-green-700 text-white",
    price: "text-green-600",
  },
  orange: {
    border: "border-orange-500",
    badge: "bg-orange-500 text-white",
    icon: "bg-orange-100 text-orange-600",
    btn: "bg-orange-500 hover:bg-orange-600 text-white",
    price: "text-orange-600",
  },
};

export default function Courses() {
  return (
    <>
      <SEO
        title="English Courses Morocco | IELTS Prep, Business English & Conversation | Fluentry"
        description="Outcome-based English courses in Morocco: 8-Week IELTS Accelerator (7.5+ guaranteed), 12-Week Business English Mastery, Conversation & Pronunciation. 1-on-1 with TESOL-certified Mr. Ibrahim K."
        path="/courses"
        keywords="English courses Morocco, IELTS preparation Morocco, IELTS coaching Morocco, Business English course Morocco, English conversation course Morocco, TOEFL preparation Morocco, pronunciation coaching Morocco, cours anglais Maroc, دورات إنجليزية المغرب, online English course Morocco, English program Morocco 2026"
        breadcrumbs={[{ name: "Courses", item: "https://fluentry.com/courses" }]}
      />
      <div className="min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Shield className="w-4 h-4 text-green-300" />
              Results Guaranteed on All Signature Programs
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Programs Built Around Your Goal
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Every Fluentry program is structured around a specific, measurable outcome. You know exactly what you'll achieve — and we guarantee it.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 px-4 bg-blue-950 text-white">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { stat: "+1.5 Bands", label: "Average IELTS Improvement" },
                { stat: "90%", label: "Students Achieve Their Goal" },
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

        {/* Courses Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Program</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Not sure which program is right for you? Take the free level test or book a free 10-minute strategy call — Mr. Ibrahim will recommend the best fit for your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course) => {
                const Icon = course.icon;
                const colors = colorMap[course.color];
                return (
                  <Card key={course.id} className={`p-8 hover:shadow-xl transition-shadow flex flex-col border-2 ${colors.border} relative`}>
                    {/* Badge */}
                    <div className={`absolute -top-4 left-6 px-4 py-1 rounded-full text-xs font-bold ${colors.badge}`}>
                      {course.badge}
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5 mt-2">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                        <p className="text-gray-500 text-sm">{course.tagline}</p>
                      </div>
                    </div>

                    {/* Who it's for */}
                    <div className="mb-5">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Who it's for</p>
                      <p className="text-gray-600 text-sm">{course.audience}</p>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-6 flex-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">What you'll achieve</p>
                      <ul className="space-y-2">
                        {course.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex gap-3">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Program + Price */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-5">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Program</p>
                      <p className="font-bold text-gray-900">{course.program}</p>
                      <p className={`text-2xl font-extrabold mt-1 ${colors.price}`}>{course.price}</p>
                    </div>

                    {/* CTA */}
                    <a href={course.ctaLink} target="_blank" rel="noopener noreferrer">
                      <Button className={`w-full text-base py-3 ${colors.btn}`}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {course.cta}
                      </Button>
                    </a>
                    <p className="text-xs text-gray-400 text-center mt-2">Free 10-min consultation · No commitment</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How Sessions Work */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Every Session Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Personalised Focus", desc: "Each session is built around your specific goals, level, and the challenges you face as a Moroccan learner." },
                { icon: TrendingUp, title: "Progress Tracking", desc: "Clear milestones and regular check-ins so you always know exactly how far you've come and what's next." },
                { icon: Clock, title: "Flexible Scheduling", desc: "Sessions via Google Meet. Reschedule up to 24 hours in advance. Your time, your pace." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Student Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Fatima Z.", role: "IELTS Student, Casablanca", result: "IELTS +1.5 Bands",
                  text: "Ibrahim's coaching completely changed how I approach English. My IELTS score improved by 1.5 bands in just 8 weeks!",
                },
                {
                  name: "Youssef B.", role: "Marketing Manager, Rabat", result: "Leads International Meetings",
                  text: "As a business professional, I needed to improve my presentation skills fast. I can now lead international meetings with confidence.",
                },
              ].map((t) => (
                <Card key={t.name} className="p-6 bg-blue-50 border-0">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">{t.result}</span>
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

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Program is Right for You?</h2>
            <p className="text-lg text-orange-100 mb-8">
              Take our free level test to discover your CEFR level, or book a free 10-minute strategy call with Mr. Ibrahim — he'll recommend the perfect program for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/free-test">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold w-full sm:w-auto">
                  Take the Free Level Test
                </Button>
              </Link>
              <a
                href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call%20to%20find%20the%20right%20program"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book Free Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
