import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Users } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Affordable English Coaching with Proven Results
          </h1>
          <p className="text-lg text-blue-100">
            Flexible pricing options designed to fit your budget and learning goals.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            1-on-1 Lesson Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plan 1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Pay-Per-Lesson</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Perfect if you want flexibility and want to try lessons first.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">100 DH</p>
                <p className="text-gray-600">per 1-hour lesson</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Book lessons as you go</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">No commitment required</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Personalized feedback</span>
                </li>
              </ul>
              <a href="https://calendly.com/ibrahimkabaikm/30min" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Book Your First Lesson
                </Button>
              </a>
            </Card>

            {/* Plan 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2 border-blue-600 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                BEST VALUE
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Monthly Package</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Save 30% with our monthly package. Ideal for committed learners.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">70 DH</p>
                <p className="text-gray-600">per 1-hour lesson (12 lessons/month)</p>
                <p className="text-sm text-gray-500 mt-2">Total: 840 DH/month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">12 lessons per month</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">30% discount per lesson</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Consistent progress tracking</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Priority scheduling</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Customized learning plan</span>
                </li>
              </ul>
              <a href="https://wa.me/212672580932" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started with Monthly Plan
                </Button>
              </a>
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
                Can I switch from pay-per-lesson to the monthly plan?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade to the monthly plan at any time. Contact Ibrahim on WhatsApp to make the switch.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept bank transfers and mobile payments. Contact Ibrahim for payment details and options.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you offer group classes at a different price?
              </h3>
              <p className="text-gray-600">
                Yes! We offer small-group conversation classes at special rates. Contact Ibrahim on WhatsApp for details about group pricing and schedules.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Is there a free trial lesson?
              </h3>
              <p className="text-gray-600">
                We recommend taking our free AI-powered English test first to determine your level, then booking your first paid lesson. This ensures your lesson is tailored perfectly to your needs.
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
            Choose your plan and start your journey to fluent English with Mr. Ibrahim K. today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/ibrahimkabaikm/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Book Your First Lesson
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
  );
}

