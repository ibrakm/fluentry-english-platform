import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function BookLesson() {
  return (
    <>
      <SEO
        title="Book an English Lesson Online | Fluentry Morocco"
        description="Book your 1-on-1 English lesson with Mr. Ibrahim K. in seconds. Choose a time via Calendly or message on WhatsApp. Lessons via Google Meet from anywhere in Morocco."
        path="/book-lesson"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 shadow-xl">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Get Started: Book Your First Session
          </h1>
          <p className="text-lg text-blue-100">
            We've made scheduling your lessons as easy as possible. Choose the method that works best for you!{" "}
            <strong>Please remember to include your English Test results (e.g., "B2") in the booking notes or your message.</strong>
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: Calendly */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-10 h-10 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Book Online in 3 Clicks</h2>
              </div>

              <p className="text-gray-600 mb-6">
                Use our integrated scheduling tool to view your coach's real-time availability and secure your spot instantly. You'll receive an automatic Google Meet link for your session.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">How it works:</h3>
                <ol className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">1.</span>
                    <span>Choose your preferred coach and time slot</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">2.</span>
                    <span>Select your course type (e.g., Business English)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">3.</span>
                    <span>Confirm and <strong>include your test result (e.g., "B2") in the notes</strong></span>
                  </li>
                </ol>
              </div>

              <a
                href="https://calendly.com/ibrahimkabaikm/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Schedule via Calendly
                </Button>
              </a>
            </Card>

            {/* Option 2: WhatsApp */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <MessageCircle className="w-10 h-10 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Need to Chat First?</h2>
              </div>

              <p className="text-gray-600 mb-6">
                If you have specific questions about our programs, your level, or need help choosing a course, feel free to send us a message! Our team is ready to help you find the perfect fit.{" "}
                <strong>Please include your test result (e.g., "B2") in your first message.</strong>
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Why WhatsApp?</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Get personalized advice from our team</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Ask questions before booking</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fast and convenient communication</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20an%20English%20lesson.%20My%20level%20is%3A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Message Ibrahim on WhatsApp
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Happens Next?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <span className="text-lg font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Confirmation</h3>
                <p className="text-gray-600">
                  You'll receive an email confirmation with your lesson details and the Google Meet link.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <span className="text-lg font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Preparation</h3>
                <p className="text-gray-600">
                  Your coach will review your goals and test results to prepare a tailored first lesson just for you.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <span className="text-lg font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Learning!</h3>
                <p className="text-gray-600">
                  Log in at your scheduled time and start your journey to confident, fluent English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What do I need to join a lesson?
              </h3>
              <p className="text-gray-600">
                All you need is a computer or smartphone with a stable internet connection. Google Meet is completely free and requires no installation.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Can I reschedule my lesson?
              </h3>
              <p className="text-gray-600">
                Yes! You can reschedule your lesson up to 24 hours before the scheduled time. Contact us via WhatsApp or email for assistance.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What if I'm not sure about my English level?
              </h3>
              <p className="text-gray-600">
                Take our free CEFR English test to get an accurate assessment of your level, or contact us on WhatsApp to discuss your needs with our team.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you offer group classes?
              </h3>
              <p className="text-gray-600">
                Yes! We offer both one-on-one private sessions and small-group conversation practice classes. Contact Ibrahim on WhatsApp for more details about group class schedules.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your English?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Your first lesson is just a few clicks away. Let's get started!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/ibrahimkabaikm/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold w-full sm:w-auto"
              >
                Schedule via Calendly
              </Button>
            </a>
            <a
              href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20an%20English%20lesson."
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
    </>
  );
}
