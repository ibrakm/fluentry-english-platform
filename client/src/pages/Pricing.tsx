import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Zap, Star } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Pricing() {
  const title = "Affordable English Lesson Pricing & Packages | Fluentry";
  const description = "View Fluentry's clear and affordable pricing for 1-on-1 English coaching. Choose from Starter, Standard, and Premium packages, or pay-per-lesson. Save up to 20% with monthly plans.";
  
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
            All packages include 1-hour personalized lessons via Google Meet with Mr. Ibrahim K.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-sm text-gray-500 mt-3">8 lessons/month • 2 lessons/week</p>
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
              </ul>
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim,%20I'm%20interested%20in%20the%20Starter%20Package" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </a>
            </Card>

            {/* Standard Package - BEST VALUE */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-blue-600 relative transform md:scale-105">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
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
                  <span className="text-gray-700">8 lessons per month</span>
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
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim,%20I'm%20interested%20in%20the%20Standard%20Package" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </a>
            </Card>

            {/* Premium Package */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-purple-600">
              <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
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
                  <span className="text-gray-700">12 lessons per month</span>
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
              <a href="https://wa.me/212672580932?text=Hi%20Ibrahim,%20I'm%20interested%20in%20the%20Premium%20Package" target="_blank" rel="noopener noreferrer">
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
                  <p className="text-sm text-gray-600">per lesson</p>
                </div>
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
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Interactive Speaking Practice</h3>
                <p className="text-gray-600 text-sm">
                  Real conversations on topics that matter to you.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Personalized Feedback</h3>
                <p className="text-gray-600 text-sm">
                  Targeted corrections and guidance tailored to your needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Grammar & Vocabulary Building</h3>
                <p className="text-gray-600 text-sm">
                  Improve accuracy and expand your word bank naturally.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Real-Life Scenarios</h3>
                <p className="text-gray-600 text-sm">
                  Practice English in situations you'll actually encounter.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Confidence Building</h3>
                <p className="text-gray-600 text-sm">
                  A supportive environment where mistakes are learning opportunities.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Flexible Rescheduling</h3>
                <p className="text-gray-600 text-sm">
                  Cancel or reschedule up to 24 hours in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ahmed — Career Advancement</h3>
              <p className="text-gray-700 mb-4">
                "I joined Fluentry to improve my communication with international clients. After completing the Business English course, my fluency and confidence improved so much that I was promoted to a senior position in my company."
              </p>
              <p className="font-semibold text-gray-900">Ahmed M.</p>
              <p className="text-sm text-gray-600">Logistics Professional, Casablanca</p>
            </Card>

            {/* Story 2 */}
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Youssef — Global Business</h3>
              <p className="text-gray-700 mb-4">
                "As a businessman who travels abroad regularly, I needed to strengthen my English for global meetings. Today, I negotiate and present comfortably in English, expanding my business network internationally."
              </p>
              <p className="font-semibold text-gray-900">Youssef B.</p>
              <p className="text-sm text-gray-600">Entrepreneur, Marrakech</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Pricing FAQ
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Can I switch between packages?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or change your package at any time. Contact Ibrahim on WhatsApp to make the switch.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept bank transfers (MAD), mobile payments, and international payments. Contact Ibrahim for payment details and options.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Is there a free trial lesson?
              </h3>
              <p className="text-gray-600">
                Yes! We offer a free 10-minute consultation where you can meet Mr. Ibrahim K., discuss your goals, and get a personalized learning plan. Book your free consultation today!
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What if I miss a lesson?
              </h3>
              <p className="text-gray-600">
                You can reschedule up to 24 hours in advance. Missed lessons without notice cannot be refunded or rescheduled.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Invest in Your English?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Choose your package and start your journey to fluent English with Mr. Ibrahim K. today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/212672580932?text=Hi%20Ibrahim,%20I'd%20like%20to%20book%20a%20free%2010-minute%20consultation" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Book Free Consultation
              </Button>
            </a>
            <a href="https://wa.me/212672580932" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700 w-full sm:w-auto"
              >
                Chat with Ibrahim
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

