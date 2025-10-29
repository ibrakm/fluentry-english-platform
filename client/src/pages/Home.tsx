import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Users, Zap, Globe, BookOpen, ArrowRight } from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SEO } from "@/components/SEO";

export default function Home() {
  const title = "1-on-1 English Coaching & Free CEFR Test | Fluentry";
  const description = "Achieve fluency with personalized 1-on-1 English coaching from Morocco's experts. Take a free CEFR test, explore Business English, IELTS/TOEFL prep, and book your first lesson. Start communicating with confidence.";

  return (
    <>
      <SEO title={title} description={description} path="/" />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-4 shadow-xl">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Speak English with Confidence. Start Fluently Today.
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Your journey to natural, confident English communication begins here. Personalized online coaching from Morocco's passionate English experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="https://wa.me/212672580932?text=Hi%20Ibrahim,%20I'd%20like%20to%20book%20a%20free%2010-minute%20consultation" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-orange-500 text-white hover:bg-orange-600 font-semibold shadow-2xl shadow-orange-500/50"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).plausible) {
                        (window as any).plausible('Free Consultation Click');
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
                    className="border-white text-white hover:bg-blue-700"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).plausible) {
                        (window as any).plausible('Start Free Test');
                      }
                    }}
                  >
                    Take Free CEFR Test
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-blue-100">
                Fast, friendly, flexible. From 62.50 MAD/lesson with packages.
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src="/hero-illustration.png" 
                alt="Online English Lesson" 
                className="w-full h-auto rounded-lg shadow-2xl"
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
              Fluentry is more than just English lessons—it's a mindset shift. Based in Morocco, we connect students, professionals, and adults with dedicated coaches who are passionate about helping you achieve true fluency. We focus on real-world communication, not just textbooks.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <p className="text-xl font-semibold text-blue-900">
                "English isn't just grammar and vocabulary. It's confidence, clarity, and connection."
              </p>
              <p className="text-sm text-gray-600 mt-2">— Mr. Ibrahim K., Founder & Coach</p>
            </div>
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
                Every lesson is tailored to your goals, level, and interests. No crowded classrooms—just you and your coach.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-World Fluency
              </h3>
              <p className="text-gray-600">
                We don't just teach English—we help you think in English. Practice conversations, presentations, and real-life scenarios.
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
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">General English</h3>
              <p className="text-sm text-gray-600 mb-4">
                Build a strong foundation in speaking, listening, reading, and writing.
              </p>
              <Link href="/courses">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Business English</h3>
              <p className="text-sm text-gray-600 mb-4">
                Master professional communication for meetings, emails, and presentations.
              </p>
              <Link href="/courses">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">IELTS & TOEFL Prep</h3>
              <p className="text-sm text-gray-600 mb-4">
                Achieve your target score with focused test strategies and practice.
              </p>
              <Link href="/courses">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Conversation Practice</h3>
              <p className="text-sm text-gray-600 mb-4">
                Improve fluency and confidence through natural, engaging conversations.
              </p>
              <Link href="/courses">
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </Link>
            </Card>
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
                    alt="The Unspoken Passport"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                    <span>•</span>
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

      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-blue-50">
              <p className="text-gray-700 mb-4">
                "Ibrahim's coaching completely changed how I approach English. I went from translating every word to actually thinking in English. My IELTS score improved by 1.5 bands!"
              </p>
              <p className="font-semibold text-gray-900">— Amina, University Student</p>
            </Card>

            <Card className="p-6 bg-blue-50">
              <p className="text-gray-700 mb-4">
                "As a business professional, I needed to improve my presentation skills fast. Ibrahim's Business English course gave me the confidence to lead international meetings."
              </p>
              <p className="font-semibold text-gray-900">— Youssef, Marketing Manager</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your English Journey?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Book a free 10-minute consultation to discuss your goals and find the perfect course for you.
          </p>
          <a href="https://wa.me/212672580932?text=Hi%20Ibrahim,%20I'd%20like%20to%20book%20a%20free%2010-minute%20consultation" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 font-semibold shadow-xl"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).plausible) {
                  (window as any).plausible('CTA Free Consultation Click');
                }
              }}
            >
              Book Your Free Consultation Now
            </Button>
          </a>
        </div>
      </section>
    </div>
    </>
  );
}

