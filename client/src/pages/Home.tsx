import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Users, BookOpen, ArrowRight, Star, Award, Clock, Shield, Target } from "lucide-react";
import { useState } from "react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Testimonials } from "@/components/Testimonials";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t, langPrefix, isRTL } = useLanguage();
  const title = "#1 English Coach Morocco | IELTS 7.5+ Guaranteed | Fluentry — Tangier";
  const description = "Morocco's top-rated TESOL-certified English coach. Achieve IELTS 7.5+, master Business English, or reach fluency in 8 weeks — guaranteed or free. 1-on-1 online lessons from Tangier. 100+ students coached. Book your free strategy call today.";
  const homeKeywords = "English coaching Morocco, IELTS preparation Morocco, IELTS coaching Tangier, Business English Morocco, cours anglais en ligne Maroc, تعلم الإنجليزية المغرب, English teacher Tangier Morocco, online English lessons Morocco, TESOL certified coach Morocco, IELTS 7.5 guaranteed Morocco, English fluency Morocco, learn English online Morocco, English for work Morocco, cours anglais Casablanca, cours anglais Rabat, cours anglais Marrakech, cours anglais Tanger, professeur anglais Maroc, IELTS coaching Casablanca, IELTS coaching Rabat, Business English coaching Tangier, 1-on-1 English coaching Morocco, English speaking course Morocco, TOEFL preparation Morocco, English pronunciation Morocco, speak English fluently Morocco, تعلم الانجليزية اون لاين المغرب, كوتش انجليزية المغرب, IELTS band 7 Morocco, English for professionals Morocco, English for job interviews Morocco";


  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/"

        titleFr="Coach d'anglais en ligne au Maroc | Cours personnalisés 1-à-1 | Fluentry"
        titleAr="مدرب إنجليزية عبر الإنترنت في المغرب | دروس مخصصة فردية | Fluentry"
        descriptionFr="Coaching d'anglais personnalisé 1-à-1 au Maroc avec M. Ibrahim K., certifié TESOL. IELTS, anglais des affaires, conversation. À partir de 65 MAD/h. Résultats garantis."
        descriptionAr="تدريب إنجليزية مخصص فردي في المغرب مع الأستاذ إبراهيم ك.، معتمد TESOL. IELTS، إنجليزية الأعمال، محادثة. ابتداءً من 65 درهم/ساعة. نتائج مضمونة."
        keywords={homeKeywords}
        faqItems={homeFAQ}
        reviewData={{
          ratingValue: "4.9",
          reviewCount: "47",
          bestRating: "5",
        }}
      />
      <div className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>

      {/* Bilingual Moroccan Banner - REMOVED */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24 px-4 shadow-xl">
        <div className="container mx-auto max-w-6xl">
          <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-start md:items-center ${isRTL ? "md:grid-flow-col-dense" : ""}`}>
            <div className={`text-center ${isRTL ? "md:text-right" : "md:text-left"}`}>
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-500/40 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 text-yellow-400" />
                {t("home.hero.badge2")}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {t("home.hero.h1a")}<br className="hidden md:block" />
                <span className="text-yellow-300">{t("home.hero.h1b")}</span><br className="hidden md:block" />
                {t("home.hero.h1c")}
              </h1>

              {/* Bilingual subtitle for Moroccan audience */}
              <p className="text-base text-yellow-300 font-medium mb-2 italic">
                {t("home.hero.bilingual")}
              </p>
              <p className="text-lg md:text-xl text-blue-100 mb-4">
                {t("home.hero.desc")} <strong className="text-white">{t("home.hero.desc2")}</strong>
              </p>

              {/* Money-back guarantee badge */}
              <div className="inline-flex items-center gap-2 bg-green-600/30 border border-green-400/40 text-green-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4 text-green-400" />
                {t("home.hero.guarantee2")}
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "md:justify-end" : "md:justify-start"}`}>
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
                    {t("home.hero.cta1")}
                  </Button>
                </a>
                <Link href={`${langPrefix}/pricing`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700 w-full sm:w-auto"
                  >
                    {t("home.hero.cta2")}
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-sm text-blue-200">
                {t("home.hero.noCommit")}
              </p>

              {/* Quick stats */}
              <div className={`flex flex-wrap gap-6 mt-8 justify-center ${isRTL ? "md:justify-end" : "md:justify-start"}`}>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-xs text-blue-200">{t("home.hero.studentsCoached")}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">90%</p>
                  <p className="text-xs text-blue-200">{t("home.hero.reachGoal")}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">4.9★</p>
                  <p className="text-xs text-blue-200">{t("home.hero.avgRating")}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">3+</p>
                  <p className="text-xs text-blue-200">{t("home.hero.yearsExp")}</p>
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
              { stat: "+1.5 Bands", label: t("home.results.ieltsBands") },
              { stat: "90%", label: t("home.results.achieve") },
              { stat: "8 Weeks", label: t("home.results.time") },
              { stat: "4.9 / 5", label: t("home.results.satisfaction") },
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
              {t("home.intro.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t("home.intro.desc")} <strong>{t("home.intro.strong")}</strong>{t("home.intro.desc2")}
            </p>
            <blockquote className={`bg-blue-50 border-l-4 border-blue-600 p-6 rounded ${isRTL ? "text-right border-l-0 border-r-4" : "text-left"}`}>
              <p className="text-xl font-semibold text-blue-900">
                {t("home.intro.quote")}
              </p>
              <footer className="text-sm text-gray-600 mt-2">{t("home.intro.quoteAuthor")}</footer>
            </blockquote>
          </div>
        </div>
      </section>


      {/* Why Choose Fluentry — Differentiators */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t("home.why.title")}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t("home.why.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("home.why.method.title")}
              </h3>
              <p className="text-gray-600">
                {t("home.why.method.desc")}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("home.why.guarantee.title")}
              </h3>
              <p className="text-gray-600">
                {t("home.why.guarantee.desc")}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t("home.why.morocco.title")}
              </h3>
              <p className="text-gray-600">
                {t("home.why.morocco.desc")}
              </p>
            </Card>
          </div>

          {/* Differentiator table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto text-sm border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left rounded-tl-lg">{t("home.why.table.feature")}</th>
                  <th className="p-4 text-center text-yellow-300 font-bold">{t("home.why.table.fluentry")}</th>
                  <th className="p-4 text-center rounded-tr-lg">{t("home.why.table.typical")}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [t("home.why.table.outcome"), t("home.why.table.outcomeF"), t("home.why.table.outcomeT")],
                  [t("home.why.table.resultsG"), t("home.why.table.resultsFY"), t("home.why.table.resultsTN")],
                  [t("home.why.table.moroccan"), t("home.why.table.moroccanF"), t("home.why.table.moroccanT")],
                  [t("home.why.table.tesol"), t("home.why.table.tesolF"), t("home.why.table.tesolT")],
                  [t("home.why.table.tracking"), t("home.why.table.trackingF"), t("home.why.table.trackingT")],
                  [t("home.why.table.method"), t("home.why.table.methodF"), t("home.why.table.methodT")],
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
            {t("home.how.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", icon: <CheckCircle className="w-6 h-6 text-blue-600" />, title: t("home.how.step1.title"), desc: t("home.how.step1.desc") },
              { step: "2", icon: <Clock className="w-6 h-6 text-blue-600" />, title: t("home.how.step2.title"), desc: t("home.how.step2.desc") },
              { step: "3", icon: <Star className="w-6 h-6 text-blue-600" />, title: t("home.how.step3.title"), desc: t("home.how.step3.desc") },
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
                {t("home.how.cta")}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t("home.courses.title")}
          </h2>
          <p className="text-center text-gray-600 mb-12">
            {t("home.courses.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { titleKey: "home.courses.general.title", descKey: "home.courses.general.desc" },
              { titleKey: "home.courses.business.title", descKey: "home.courses.business.desc" },
              { titleKey: "home.courses.ielts.title", descKey: "home.courses.ielts.desc" },
              { titleKey: "home.courses.conversation.title", descKey: "home.courses.conversation.desc" },
            ].map((course) => (
              <Card key={course.titleKey} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(course.titleKey)}</h3>
                <p className="text-sm text-gray-600 mb-4">{t(course.descKey)}</p>
                <Link href={`${langPrefix}/courses`}>
                  <Button variant="outline" size="sm" className="w-full">
                    {t("home.courses.learnMore")}
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
              {t("home.article.badge")}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {t("home.article.title")}
            </h2>
          </div>

          <Link href={`${langPrefix}/articles/the-unspoken-passport`}>
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
                <div className={`p-8 md:p-10 flex flex-col justify-center ${isRTL ? "text-right" : ""}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {t("home.article.h3")}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t("home.article.desc")}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span>{t("home.article.by")}</span>
                    <span>·</span>
                    <span>{t("home.article.read")}</span>
                  </div>
                  <div className={`flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                    {t("home.article.readArticle")}
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
              {t("home.blog.badge")}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {t("home.blog.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("home.blog.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                slug: "online-english-classes-morocco-2026-guide",
                title: t("home.blog.post1.title"),
                excerpt: t("home.blog.post1.excerpt"),
                category: t("home.blog.post1.category"),
                readTime: t("home.blog.post1.readTime")
              },
              {
                slug: "a2-to-b1-english-6-month-plan-morocco",
                title: t("home.blog.post2.title"),
                excerpt: t("home.blog.post2.excerpt"),
                category: t("home.blog.post2.category"),
                readTime: t("home.blog.post2.readTime")
              },
              {
                slug: "best-apps-websites-learn-english-morocco",
                title: t("home.blog.post3.title"),
                excerpt: t("home.blog.post3.excerpt"),
                category: t("home.blog.post3.category"),
                readTime: t("home.blog.post3.readTime")
              },
              {
                slug: "challenges-moroccan-english-learners-face",
                title: t("home.blog.post4.title"),
                excerpt: t("home.blog.post4.excerpt"),
                category: t("home.blog.post4.category"),
                readTime: t("home.blog.post4.readTime")
              }
            ].map((post) => (
              <Link key={post.slug} href={`${langPrefix}/blog/${post.slug}`}>
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
                    <div className={`flex items-center gap-1 text-blue-600 font-semibold mt-3 text-xs ${isRTL ? "flex-row-reverse justify-end" : ""}`}>
                      {t("home.blog.readMore")}
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href={`${langPrefix}/blog`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                {t("home.blog.viewAll")}
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
            {t("home.cta.title")}
          </h2>
          <p className="text-lg text-orange-100 mb-4">
            {t("home.cta.subtitle")}
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4" />
            {t("home.cta.guarantee")}
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
                {t("home.cta.button")}
              </Button>
            </a>
            <Link href={`${langPrefix}/pricing`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-600 w-full sm:w-auto"
              >
                {t("home.cta.viewPrograms")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
