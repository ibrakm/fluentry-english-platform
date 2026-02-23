
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { CheckCircle, Users, Zap } from "lucide-react";

export default function BookLesson() {
  const title = "Book Your English Lesson - Fluentry";
  const description = "Schedule your free 10-minute consultation or book your first 1-on-1 English lesson with Mr. Ibrahim K. today. Take the next step towards fluency.";

  return (
    <>
      <SEO title={title} description={description} path="/book-lesson" />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Journey to Fluency Starts Here</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">Schedule your personalized 1-on-1 English lesson with TESOL-certified coach, Mr. Ibrahim K. It only takes a minute.</p>
          </div>
        </section>

        {/* Main Content - Calendly Embed & Value Props */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side: Value Propositions */}
              <div className="lg:order-2">
                <Card className="p-8 bg-white shadow-xl rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect from Your Lesson:</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Personalized 1-on-1 Coaching</h3>
                        <p className="text-gray-600">Every lesson is 100% tailored to your specific goals, level, and learning style. No generic content.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Actionable Feedback & Corrections</h3>
                        <p className="text-gray-600">Receive immediate, constructive feedback on your grammar, pronunciation, and vocabulary to accelerate your progress.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">A Clear Path to Fluency</h3>
                        <p className="text-gray-600">End each session with a clear understanding of what you learned and what to practice next. Your coach is your partner in success.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600 mb-4">Have questions before booking?</p>
                    <a href="https://wa.me/212672580932?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%20%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%D8%8C%20%D8%A8%D8%BA%D9%8A%D8%AA%20%D9%86%D8%B9%D8%B1%D9%81%20%D9%83%D8%AB%D8%B1%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%AF%D8%B1%D9%88%D8%B3" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">Chat on WhatsApp</Button>
                    </a>
                  </div>
                </Card>
              </div>

              {/* Right Side: Calendly Embed */}
              <div className="lg:order-1">
                <div className="calendly-inline-widget w-full h-[700px] rounded-lg overflow-hidden shadow-2xl border-4 border-blue-600" 
                     data-url="https://calendly.com/ibrahimkabaikm/30min"
                     style={{ minWidth: '320px' }}>
                </div>
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
