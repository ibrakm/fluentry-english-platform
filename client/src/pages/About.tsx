import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Heart, Target, Lightbulb, Award, BookOpen, Users, Globe,
  CheckCircle, Star, MessageCircle, Shield, TrendingUp, ArrowRight
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

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
  { stat: "100+", labelKey: "home.hero.studentsCoached" },
  { stat: "4.9★", labelKey: "home.hero.avgRating" },
  { stat: "90%", labelKey: "home.hero.reachGoal" },
  { stat: "3+", labelKey: "home.hero.yearsExp" },
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
  const { t, langPrefix, isRTL } = useLanguage();

  const aboutFAQ = [
    { question: "Who is Mr. Ibrahim K.?", answer: "Mr. Ibrahim K. is a TESOL-certified English language coach based in Tangier, Morocco. He holds a Bachelor's degree in English Studies and has coached 100+ Moroccan students and professionals to achieve their English goals, from IELTS band improvements to Business English fluency." },
    { question: "Is Mr. Ibrahim K. a certified English teacher?", answer: "Yes. Mr. Ibrahim K. holds an internationally recognised TESOL (Teaching English to Speakers of Other Languages) certification. He also has a B.A. in English Studies and is an active English teacher at a private school in Morocco." },
    { question: "What makes Fluentry different from other English schools in Morocco?", answer: "Fluentry is 100% personalised — no group classes, no generic curriculum. Every student gets a tailored week-by-week learning plan built around their specific goals, level, and schedule. Mr. Ibrahim also offers a results guarantee: if you don't reach your target, coaching continues for free." },
    { question: "Does Mr. Ibrahim offer a results guarantee?", answer: "Yes. Fluentry offers a results guarantee on all structured programmes. If you complete the full programme and don't achieve your target score or fluency goal, Mr. Ibrahim will continue coaching you at no additional cost until you do." },
    { question: "How can I contact Mr. Ibrahim to start English coaching?", answer: "You can reach Mr. Ibrahim directly on WhatsApp at +212 672 580 932, or book a free 10-minute strategy call through the Fluentry website. The first consultation is completely free and no-commitment." },
  ];

  return (
    <>
      <SEO
        title="Mr. Ibrahim K. | TESOL-Certified English Coach Tangier Morocco | Fluentry"
        description="Meet Ibrahim K. — Morocco's most trusted TESOL-certified English coach in Tangier. 100+ students coached, 4.9★ rating, 3+ years experience. Specialist in IELTS preparation, Business English, and fluency coaching. Results guaranteed or your money back."
        path="/about"
        keywords="English coach Tangier Morocco, TESOL certified English teacher Morocco, Ibrahim English coach Fluentry, IELTS coach Morocco, Business English coach Tangier, professeur anglais Tanger, مدرب الإنجليزية طنجة, English tutor Morocco, about Fluentry coach, best English teacher Morocco, English coaching results Morocco, IELTS preparation coach Tangier"
        breadcrumbs={[{ name: "About", item: "https://fluentry.online/about" }]}
        faqItems={aboutFAQ}
      />
      <div className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${isRTL ? "md:grid-flow-col-dense" : ""}`}>
              {/* Text */}
              <div className={isRTL ? "text-right" : ""}>
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Award className="w-4 h-4" />
                  {t("about.hero.badge")}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                  {t("about.hero.title")}
                </h1>
                <p className="text-xl text-blue-200 mb-6">
                  {t("about.hero.subtitle")}
                </p>
                <div className={`flex flex-wrap gap-4 ${isRTL ? "justify-end" : ""}`}>
                  <a
                    href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
                      <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                      {t("about.hero.cta1")}
                    </Button>
                  </a>
                  <Link href={`${langPrefix}/free-test`}>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                      {t("about.hero.cta2")}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Photo / Stats card */}
              <div className="flex flex-col gap-4">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <img loading="lazy"
                    src="/ibrahim-photo.webp"
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
                  <p className="text-blue-300 text-sm">{t("about.hero.role")}</p>
                  <p className="text-blue-400 text-xs mt-1">{t("about.hero.location")}</p>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {results.map((r) => (
                    <div key={r.labelKey} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                      <p className="text-2xl font-extrabold text-yellow-300">{r.stat}</p>
                      <p className="text-xs text-blue-300 mt-1">{t(r.labelKey)}</p>
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
              {t("about.guarantee")}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("about.story.title")}</h2>
            <div className={`bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl mb-8 ${isRTL ? "border-l-0 border-r-4 rounded-r-none rounded-l-2xl text-right" : ""}`}>
              <p className="text-xl italic text-blue-900 font-semibold mb-3">
                {t("about.story.quote")}
              </p>
              <p className="text-blue-700 font-bold">{t("about.story.quoteBy")}</p>
            </div>
            <div className={`prose prose-lg max-w-none text-gray-700 space-y-5 ${isRTL ? "text-right" : ""}`}>
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
              <p>{t("about.story.p4")}</p>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t("about.credentials.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((c) => {
                const Icon = c.icon;
                return (
                  <Card key={c.title} className={`p-6 hover:shadow-lg transition-shadow ${isRTL ? "border-r-4 border-blue-600" : "border-l-4 border-blue-600"}`}>
                    <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
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
                {t("about.method.badge")}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {t("about.method.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("about.method.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {methodSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="p-6 hover:shadow-lg transition-shadow">
                    <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{t("about.who.title")}</h2>
            <p className="text-center text-gray-600 mb-10">
              {t("about.who.subtitle")}
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
              {t("about.testimonials.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item) => (
                <Card key={item.name} className="p-6 bg-blue-50 border-0">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                      {item.result}
                    </span>
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

        {/* Mission */}
        <section className="py-12 px-4 bg-blue-950 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <Target className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{t("about.mission.title")}</h2>
            <p className="text-blue-200 text-lg leading-relaxed">
              {t("about.mission.text")}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">{t("about.cta.title")}</h2>
            <p className="text-lg text-orange-100 mb-8">
              {t("about.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold w-full sm:w-auto">
                  <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t("about.cta.button")}
                </Button>
              </a>
              <Link href={`${langPrefix}/pricing`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 w-full sm:w-auto">
                  {t("about.cta.viewPricing")}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? "mr-2" : "ml-2"}`} />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-orange-200 mt-4">
              <Shield className="w-4 h-4 inline mr-1" />
              {t("about.cta.guarantee")}
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
