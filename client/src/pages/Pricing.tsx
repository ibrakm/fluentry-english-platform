import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Zap, Star } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

export default function Pricing() {
  const title = "Affordable English Lesson Pricing & Packages | Fluentry";
  const description = "View Fluentry's clear and affordable pricing for 1-on-1 English coaching in Morocco. Choose from Starter (500 MAD/month), Standard (720 MAD/month), or Premium (960 MAD/month) packages, or pay 100 MAD per lesson.";

  return (
    <>
      <SEO title={title} description={description} path="/pricing" />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Clear, Affordable Pricing for Every Learner
          </h1>
          <p className="text-lg text-blue-100">
            Flexible packages designed to fit your budget and learning goals. Save up to 20% with monthly packages.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Choose Your Learning Package
          </h2>
          <p className="text-center text-gray-600 mb-12">
            All packages include personalized lessons via Google Meet with Mr. Ibrahim K.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Starter Package */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect for new learners or occasional practice
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-4xl font-bold text-blue-600">62.50 MAD</p>
                <p className="text-gray-600">per lesson (45 min)</p>
                <p className="text-sm text-gray-500 mt-3">8 lessons/month · 2 lessons/week</p>
                <p className="text-lg font-bold text-gray-900 mt-2">500 MAD/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">8 lessons per month (45 min each)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">2 lessons per week</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Personalized lesson plan</span>
                </li>
              </ul>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Starter%20Package%20(500%20MAD%2Fmonth)" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </a>
            </Card>

            {/* Standard Package - BEST VALUE */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-blue-600 relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                BEST VALUE
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Standard</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Ideal for regular learners improving fluency
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-4xl font-bold text-blue-600">90 MAD</p>
                  <p className="text-lg text-gray-500 line-through">100 MAD</p>
                </div>
                <p className="text-gray-600">per lesson</p>
                <p className="text-sm text-green-600 font-semibold mt-1">Save 10% per lesson</p>
                <p className="text-sm text-gray-500 mt-3">8 lessons/month</p>
                <p className="text-lg font-bold text-gray-900 mt-2">720 MAD/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">8 lessons per month (60 min each)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700"><strong>10% discount</strong> per lesson</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Priority scheduling</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Customized learning plan</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Progress reports</span>
                </li>
              </ul>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Standard%20Package%20(720%20MAD%2Fmonth)" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </a>
            </Card>

            {/* Premium Package - MOST POPULAR */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-purple-600 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-6 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                MOST POPULAR
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Premium</h3>
              </div>
              <p className="text-gray-600 mb-6">
                For serious learners aiming for mastery
              </p>
              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <p className="text-4xl font-bold text-purple-600">80 MAD</p>
                  <p className="text-lg text-gray-500 line-through">100 MAD</p>
                </div>
                <p className="text-gray-600">per lesson</p>
                <p className="text-sm text-green-600 font-semibold mt-1">Save 20% per lesson</p>
                <p className="text-sm text-gray-500 mt-3">12 lessons/month</p>
                <p className="text-lg font-bold text-gray-900 mt-2">960 MAD/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">12 lessons per month (60 min each)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700"><strong>20% discount</strong> per lesson</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">VIP priority scheduling</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Advanced learning plan</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Weekly progress reports</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Study materials included</span>
                </li>
              </ul>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Premium%20Package%20(960%20MAD%2Fmonth)" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Get Started
                </Button>
              </a>
            </Card>
          </div>

          {/* Pay-Per-Lesson Option */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="p-6 bg-gray-50 border-2 border-gray-300">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pay-Per-Lesson</h3>
                  <p className="text-gray-600">No commitment required. Book lessons as you go.</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">100 MAD</p>
                  <p className="text-sm text-gray-600">per lesson (60 min)</p>
                </div>
              </div>
              <div className="mt-4">
                <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20single%20lesson%20(100%20MAD)" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-gray-400 hover:bg-gray-100">
                    Book a Single Lesson
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What's Included in Every Lesson
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Interactive Speaking Practice", desc: "Real conversations on topics that matter to you." },
              { title: "Personalized Feedback", desc: "Targeted corrections and guidance tailored to your needs." },
              { title: "Grammar & Vocabulary Building", desc: "Improve accuracy and expand your word bank naturally." },
              { title: "Real-Life Scenarios", desc: "Practice English in situations you'll actually encounter." },
              { title: "Confidence Building", desc: "A supportive environment where mistakes are learning opportunities." },
              { title: "Flexible Rescheduling", desc: "Cancel or reschedule up to 24 hours in advance." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-blue-50">
              <p className="text-gray-700 mb-4 italic">
                "I joined Fluentry to improve my communication with international clients. After completing the Business English course, my fluency improved so much that I was promoted to a senior position."
              </p>
              <div>
                <p className="font-bold text-gray-900">Ahmed M.</p>
                <p className="text-sm text-gray-600">Logistics Professional, Casablanca</p>
              </div>
            </Card>
            <Card className="p-6 bg-blue-50">
              <p className="text-gray-700 mb-4 italic">
                "As a businessman who travels abroad regularly, I needed to strengthen my English for global meetings. Today, I negotiate and present comfortably in English."
              </p>
              <div>
                <p className="font-bold text-gray-900">Youssef B.</p>
                <p className="text-sm text-gray-600">Entrepreneur, Marrakech</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              { q: "Can I switch between packages?", a: "Absolutely! You can upgrade or change your package at any time. Contact Ibrahim on WhatsApp to make the switch." },
              { q: "What payment methods do you accept?", a: "We accept bank transfers (MAD), mobile payments, and international payments. Contact Ibrahim for payment details and options." },
              { q: "Is there a free trial lesson?", a: "Yes! We offer a free 10-minute consultation where you can meet Mr. Ibrahim K., discuss your goals, and get a personalized learning plan." },
              { q: "What if I miss a lesson?", a: "You can reschedule up to 24 hours in advance. Missed lessons without notice cannot be refunded or rescheduled." },
            ].map((faq) => (
              <Card key={faq.q} className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Invest in Your English?</h2>
          <p className="text-lg text-orange-100 mb-8">
            Choose your package and start your journey to fluent English with Mr. Ibrahim K. today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20start%20English%20lessons%20with%20Fluentry" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold w-full sm:w-auto">
                Book Free Consultation
              </Button>
            </a>
            <Link href="/free-test">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 w-full sm:w-auto">
                Take Free Level Test
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
