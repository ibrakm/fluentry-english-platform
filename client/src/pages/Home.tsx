import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Users, Zap, Globe, BookOpen, ArrowRight, Star, Award, Clock, X } from "lucide-react";
import { useState } from "react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Testimonials } from "@/components/Testimonials";
import { SEO } from "@/components/SEO";

const homeFAQ = [
  {
    question: "How much does English coaching cost in Morocco?",
    answer: "Fluentry offers English coaching from 62.50 MAD per lesson. Packages start at 250 MAD for 4 sessions, 450 MAD for 8 sessions, and 600 MAD for 12 sessions. All lessons are 1-on-1 with a TESOL-certified coach.",
  },
  {
    question: "Can I learn English online in Morocco?",
    answer: "Yes! Fluentry offers 100% online 1-on-1 English coaching for students and professionals in Morocco. Sessions are conducted via video call, flexible to your schedule.",
  },
  {
    question: "How do I know my English level before starting?",
    answer: "Fluentry offers a free CEFR English level test that takes only 5 minutes. It assesses your level from A1 (beginner) to C2 (mastery) and gives you a personalized learning recommendation.",
  },
  {
    question: "Is Mr. Ibrahim K. a certified English teacher?",
    answer: "Yes. Mr. Ibrahim K. holds a TESOL certification and has helped hundreds of Moroccan students and professionals improve their English for work, travel, and academic purposes.",
  },
  {
    question: "What types of English courses does Fluentry offer?",
    answer: "Fluentry offers General English, Business English, IELTS Preparation, TOEFL Preparation, Conversation Practice, and Pronunciation Coaching — all tailored to your specific goals.",
  },
  {
    question: "How quickly can I improve my English?",
    answer: "With consistent 1-on-1 coaching, most students see noticeable improvement within 4–8 weeks. The pace depends on your starting level, goals, and practice outside sessions.",
  },
];

export default function Home() {
  const title = "English Coaching Online Morocco | 1-on-1 TESOL-Certified Lessons from 62.50 MAD";
  const description = "Personalized English coaching in Morocco with TESOL-certified Mr. Ibrahim K. Free CEFR test, Business English, IELTS prep. Book your first lesson today.";
  const [bannerVisible, setBannerVisible] = useState(true);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://fluentry-english-platform.vercel.app"
      }
    ]
  };

  return (
    <>
      <SEO title={title} description={description} path="/" faqItems={homeFAQ} />
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
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

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Speak English with Confidence.<br className="hidden md:block" /> Start Fluently Today.
              </h1>
              {/* Bilingual subtitle for Moroccan audience */}
              <p className="text-base text-yellow-300 font-medium mb-2 italic">
                تجمد وأنت تتكلم الإنجليزية؟ — Vous bloquez quand vous parlez anglais ?
              </p>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Personalized online coaching from Morocco's passionate English expert, Mr. Ibrahim K. Real-world fluency, not just textbook grammar.
              </p>

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
                    Book Free 10-Min Consultation
                  </Button>
                </a>
                <Link href="/onboarding-test">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700 w-full sm:w-auto"
                  >
                    Tell Us About You
                  </Button>
                </Link>
                <Link href="/free-test">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700 w-full sm:w-auto"
                  >
                    Take Free CEFR Test
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-sm text-blue-200">
                No credit card required · Lessons from 62.50 MAD · Cancel anytime
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-xs text-blue-200">Students Coached</p>
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
                src="/hero-illustration.png"
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

      {/* Quick Intro */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stop Translating. Start Communicating.
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fluentry is more than just English lessons — it's a mindset shift. Based in Morocco, we connect students, professionals, and adults with a dedicated coach who is passionate about helping you achieve true fluency. We focus on real-world communication, not just textbooks.
            </p>
            <blockquote className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded text-left">
              <p className="text-xl font-semibold text-blue-900">
                "English isn't just grammar and vocabulary. It's confidence, clarity, and connection."
              </p>
              <footer className="text-sm text-gray-600 mt-2">— Mr. Ibrahim K., Founder & Coach</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why Choose Fluentry */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Fluentry?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personalized 1-on-1 Coaching
              </h3>
              <p className="text-gray-600">
                Every lesson is tailored to your goals, level, and interests. No crowded classrooms — just you and your coach.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-World Fluency
              </h3>
              <p className="text-gray-600">
                We don't just teach English — we help you think in English. Practice conversations, presentations, and real-life scenarios.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Online Learning
              </h3>
              <p className="text-gray-600">
                Learn from anywhere in Morocco or abroad. Schedule lessons that fit your life, not the other way around.
              </p>
            </Card>
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
              { step: "1", icon: <CheckCircle className="w-6 h-6 text-blue-600" />, title: "Take the Free Test", desc: "Find your CEFR level in minutes with our free English proficiency test." },
              { step: "2", icon: <Clock className="w-6 h-6 text-blue-600" />, title: "Book Your Lesson", desc: "Choose a time that works for you via Calendly or WhatsApp." },
              { step: "3", icon: <Star className="w-6 h-6 text-blue-600" />, title: "Start Learning", desc: "Join your personalized lesson on Google Meet and start improving from day one." },
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
            <Link href="/free-test">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start with the Free Test
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Courses Designed for Your Success
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Whether you're a student, professional, or lifelong learner, we have a course for you.
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
                    src="/images/the-unspoken-passport.png"
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
                      src="/hero-illustration.png"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your English Journey?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Book a free 10-minute consultation to discuss your goals and find the perfect course for you. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20free%2010-minute%20consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 font-semibold shadow-xl w-full sm:w-auto"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).plausible) {
                    (window as any).plausible("CTA Free Consultation Click");
                  }
                }}
              >
                Book Your Free Consultation Now
              </Button>
            </a>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-600 w-full sm:w-auto"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
