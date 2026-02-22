import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Users, Zap, Globe, BookOpen, ArrowRight, Star, Award, Clock, X } from "lucide-react";
import { useState } from "react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SEO } from "@/components/SEO";

export default function Home() {
  const title = "1-on-1 English Coaching Online | Fluentry Morocco";
  const description = "Achieve fluency with personalized 1-on-1 English coaching from Morocco's TESOL-certified expert. Take a free CEFR level test, explore Business English, IELTS/TOEFL prep, and book your first lesson today. From 62.50 MAD/lesson.";
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      <SEO title={title} description={description} path="/" />
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
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-4 shadow-xl">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
                <Link href="/free-test">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700 w-full sm:w-auto"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).plausible) {
                        (window as any).plausible("Start Free Test");
                      }
                    }}
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

            <div className="hidden md:block">
              <img
                src="/hero-illustration.png"
                alt="Online English lesson with Mr. Ibrahim K. — Fluentry Morocco"
                className="w-full h-auto rounded-lg shadow-2xl"
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

      {/* Social Proof / Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-center text-gray-500 mb-12">Real results from real students across Morocco.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-blue-50">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Ibrahim's coaching completely changed how I approach English. I went from translating every word to actually thinking in English. My IELTS score improved by 1.5 bands!"
              </p>
              <div>
                <p className="font-semibold text-gray-900">Fatima Z.</p>
                <p className="text-sm text-gray-500">IELTS Student, Casablanca</p>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "As a business professional, I needed to improve my presentation skills fast. Ibrahim's Business English course gave me the confidence to lead international meetings."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Youssef B.</p>
                <p className="text-sm text-gray-500">Marketing Manager, Rabat</p>
              </div>
            </Card>
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
