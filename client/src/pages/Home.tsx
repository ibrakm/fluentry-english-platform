import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, Users, Zap, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-4 shadow-xl">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Speak English with Confidence. Start Fluently Today.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your journey to natural, confident English communication begins here. Personalized online coaching from Morocco's passionate English experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-test">
              <Button 
                size="lg" 
                className="bg-orange-500 text-white hover:bg-orange-600 font-semibold shadow-2xl shadow-orange-500/50"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).plausible) {
                    (window as any).plausible('Start Free Test');
                  }
                }}
              >
                Start Free CEFR Test
              </Button>
            </Link>
            <Link href="/book-lesson">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).plausible) {
                    (window as any).plausible('Book Lesson Click');
                  }
                }}
              >
                Book a Lesson
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-100">
            Fast, friendly, flexible. From 70 MAD/lesson with packages.
          </p>
        </div>
      </section>

      {/* Trust Signals Section (New) */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase text-gray-500 mb-6">
            Trusted by students from leading universities and companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {/* Placeholder Logos - Replace with actual images */}
            <span className="text-2xl font-bold text-gray-700">University A</span>
            <span className="text-2xl font-bold text-gray-700">Company B</span>
            <span className="text-2xl font-bold text-gray-700">Tech Startup C</span>
            <span className="text-2xl font-bold text-gray-700">Business School D</span>
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
                Your Fluency, Your Schedule.
              </p>
              <p className="text-gray-700 mt-2">
                Learn from anywhere, anytime, with the support you need to speak English naturally and confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Fluentry?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Personalized Coaching
                  </h3>
                  <p className="text-gray-600">
                    One-on-One Attention: Whether you choose private sessions or small-group classes, your coach is focused entirely on your goals, challenges, and learning pace.
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 2 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <Globe className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Flexible & Convenient
                  </h3>
                  <p className="text-gray-600">
                    Learn from Anywhere: No more commuting. All you need is an internet connection to connect with your coach via Google Meet. Perfect for busy students and working professionals.
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 3 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    AI-Powered Progress
                  </h3>
                  <p className="text-gray-600">
                    Measure Your Growth: Our quick, AI-powered English tests give you an objective assessment of your level, helping us tailor your lessons for maximum impact.
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 4 */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Moroccan Heart, Global Mind
                  </h3>
                  <p className="text-gray-600">
                    Relatable & Dedicated: Learn with passionate, experienced teachers who understand the local context and the journey to global fluency.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                See Our Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Fluentry helped me prepare for my job interview. My coach was incredibly supportive, and I got the job! My confidence has skyrocketed."
              </p>
              <p className="font-semibold text-gray-900">Fatima Z.</p>
              <p className="text-sm text-gray-600">Professional, Casablanca</p>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The Conversation Practice classes are amazing. It feels like talking to a friend, but I'm learning so much new vocabulary and correcting old mistakes."
              </p>
              <p className="font-semibold text-gray-900">Ahmed K.</p>
              <p className="text-sm text-gray-600">University Student, Rabat</p>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The free AI test was a great starting point. It showed me exactly where I needed to focus. The Business English course is perfect for my career."
              </p>
              <p className="font-semibold text-gray-900">Youssef B.</p>
              <p className="text-sm text-gray-600">Entrepreneur, Marrakech</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Darija Message Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-800 to-blue-700">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Bghiti t7assen l-English dyalek?
            </h2>
            <div className="text-white/95 space-y-4 text-lg leading-relaxed">
              <p>
                Doroosi one-on-one faqat - ma kan5dmch b groups, 7it levels kaykhtalfo, w bzzaf dyal students kayb9aw ghir galsin w ma kaystafdowch mzyan.
              </p>
              <p>
                Ana English teacher 3ndi experience; kan9ddem lessons online w in-person, b thaman mzyan w flexible.
              </p>
              <p>
                General English + courses mkhasssin l-sectors: tourism, logistics, sales, w majalat okhra.
              </p>
              <p>
                Exam preparation: IELTS & TOEFL training lli kay3awnk tkon ready l-tests kbira w t7a9aq goals dyalek.
              </p>
              <p>
                Ila nta f Tangier wla ay blassa, t9der t9ra m3aya online mn comfort dyal dar, wla private face-to-face.
              </p>
              <p className="text-xl font-bold text-blue-200">
                Start improving mn awal sessions!
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-white/90 mb-6">
                Sift liya message daba, w let's start your English journey today!
              </p>
              <a href="https://wa.me/212672580932" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 font-semibold shadow-2xl shadow-orange-500/50">
                  Message Ibrahim on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-blue-800 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Unlock Your English Potential?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Don't wait another day to start speaking fluently. Book your first session now and feel the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-lesson">
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 font-semibold shadow-2xl shadow-orange-500/50">
                Book Your Lesson Today
              </Button>
            </Link>
            <a
              href="https://wa.me/212672580932"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700 w-full sm:w-auto"
              >
                Contact Ibrahim on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

