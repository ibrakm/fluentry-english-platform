import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  BookOpen, Users, Briefcase, Award, CheckCircle, MessageCircle,
  ArrowRight, Shield, Star, Clock, Target, TrendingUp
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t, langPrefix, isRTL } = useLanguage();

  return (
    <>
      <SEO
        title="English Courses Morocco | IELTS Prep, Business English & Conversation | Fluentry"
        description="Outcome-based English courses in Morocco: 8-Week IELTS Accelerator (7.5+ guaranteed), 12-Week Business English Mastery, Conversation & Pronunciation. 1-on-1 with TESOL-certified Mr. Ibrahim K."
        path="/courses"
        keywords="English courses Morocco, IELTS preparation Morocco, IELTS coaching Morocco, Business English course Morocco, English conversation course Morocco, TOEFL preparation Morocco, pronunciation coaching Morocco, cours anglais Maroc, دورات إنجليزية المغرب, online English course Morocco, English program Morocco 2026"
        breadcrumbs={[{ name: "Courses", item: "https://fluentry.online/courses" }]}
        faqItems={[
          { question: "What English courses does Fluentry offer in Morocco?", answer: "Fluentry offers four programmes: the 8-Week IELTS Accelerator (targeting band 7.5+), the 12-Week Business English Mastery programme for professionals, the Conversation & Fluency course for everyday speaking confidence, and General English for beginners. All courses are 100% online, 1-on-1 with TESOL-certified coach Mr. Ibrahim K." },
          { question: "How long does it take to improve my English with Fluentry?", answer: "Most students see measurable improvement within 4–6 weeks of consistent lessons. The IELTS Accelerator runs for 8 weeks with 3 sessions per week. The Business English programme runs for 12 weeks. Progress depends on your starting level and how much you practise between sessions." },
          { question: "Are the English courses suitable for beginners in Morocco?", answer: "Yes. Fluentry accepts students from A1 (complete beginner) to C1 (advanced) level. Every student starts with a free placement test to identify their current level and set personalised goals before the first lesson." },
          { question: "Can I take English lessons online from anywhere in Morocco?", answer: "Yes. All lessons are conducted online via Google Meet or Zoom, so you can join from Tangier, Casablanca, Rabat, Marrakech, Fes, Agadir, or anywhere in Morocco with an internet connection." },
          { question: "What is the price of English courses at Fluentry?", answer: "Fluentry charges 100 MAD per hour for 1-on-1 lessons. Monthly packages start from 800 MAD (Standard: 2 sessions/week) up to 2,400 MAD (Accelerator: 6 sessions/week). Group coaching starts from 35 MAD per session. All prices are transparent with no hidden fees." }
        ]}
      />
      <div className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Shield className="w-4 h-4 text-green-300" />
              {t("courses.hero.badge")}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t("courses.hero.title")}
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {t("courses.hero.subtitle")}
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 px-4 bg-blue-950 text-white">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { stat: "+1.5 Bands", labelKey: "home.results.ieltsBands" },
                { stat: "90%", labelKey: "home.results.achieve" },
                { stat: "8 Weeks", labelKey: "home.results.time" },
                { stat: "100%", labelKey: "home.results.satisfaction" },
              ].map((item) => (
                <div key={item.labelKey} className="border-r border-blue-700 last:border-0 px-2">
                  <p className="text-2xl font-extrabold text-yellow-300">{item.stat}</p>
                  <p className="text-xs text-blue-300 mt-1">{t(item.labelKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("courses.grid.title")}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("courses.grid.subtitle")}
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
                    <div className={`flex items-start gap-4 mb-5 mt-2 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                        <p className="text-gray-500 text-sm">{course.tagline}</p>
                      </div>
                    </div>

                    {/* Who it's for */}
                    <div className={`mb-5 ${isRTL ? "text-right" : ""}`}>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{t("courses.card.whoFor")}</p>
                      <p className="text-gray-600 text-sm">{course.audience}</p>
                    </div>

                    {/* Outcomes */}
                    <div className="mb-6 flex-1">
                      <p className={`text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 ${isRTL ? "text-right" : ""}`}>{t("courses.card.achieve")}</p>
                      <ul className="space-y-2">
                        {course.outcomes.map((outcome, idx) => (
                          <li key={idx} className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Program + Price */}
                    <div className={`bg-gray-50 rounded-xl p-4 mb-5 ${isRTL ? "text-right" : ""}`}>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{t("courses.card.program")}</p>
                      <p className="font-bold text-gray-900">{course.program}</p>
                      <p className={`text-2xl font-extrabold mt-1 ${colors.price}`}>{course.price}</p>
                    </div>

                    {/* CTA */}
                    <a href={course.ctaLink} target="_blank" rel="noopener noreferrer">
                      <Button className={`w-full text-base py-3 ${colors.btn}`}>
                        <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                        {course.cta}
                      </Button>
                    </a>
                    <p className="text-xs text-gray-400 text-center mt-2">{t("pricing.noCommit")}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How Sessions Work */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("courses.sessions.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Target, titleKey: "courses.sessions.focus.title", descKey: "courses.sessions.focus.desc" },
                { icon: TrendingUp, titleKey: "courses.sessions.progress.title", descKey: "courses.sessions.progress.desc" },
                { icon: Clock, titleKey: "courses.sessions.schedule.title", descKey: "courses.sessions.schedule.desc" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.titleKey} className="p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{t(item.titleKey)}</h3>
                    <p className="text-gray-600 text-sm">{t(item.descKey)}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t("courses.testimonials.title")}</h2>
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
              ].map((item) => (
                <Card key={item.name} className="p-6 bg-blue-50 border-0">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">{item.result}</span>
                  </div>
                  <p className="text-gray-700 text-sm italic mb-4">"{item.text}"</p>
                  <div className="border-t border-blue-200 pt-3">
                    <p className="font-bold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">{t("courses.cta.title")}</h2>
            <p className="text-lg text-orange-100 mb-8">
              {t("courses.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${langPrefix}/free-test`}>
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold w-full sm:w-auto">
                  {t("courses.cta.freeTest")}
                </Button>
              </Link>
              <a
                href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call%20to%20find%20the%20right%20program"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 w-full sm:w-auto">
                  <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t("courses.cta.bookCall")}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />
                </Button>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
