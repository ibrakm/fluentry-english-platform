import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, CheckCircle, TrendingUp } from "lucide-react";

export default function FreeTest() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your True English Level in 10 Minutes
          </h1>
          <p className="text-lg text-blue-100">
            Stop guessing. Our quick, free, and accurate AI-powered test assesses your current fluency, grammar, and vocabulary to give you an objective starting point.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 rounded-full p-4">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Questions</h3>
              <p className="text-gray-600">
                Answer a series of adaptive questions that adjust based on your responses, ensuring a precise assessment of your skill level.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 rounded-full p-4">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our intelligent system instantly processes your answers, identifying strengths and pinpointing areas for improvement.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 rounded-full p-4">
                  <span className="text-3xl font-bold text-blue-600">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Results</h3>
              <p className="text-gray-600">
                Receive a detailed report with your CEFR level (A1 to C2) and a personalized recommendation for the best Fluentry course for you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Benefits of Testing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Accuracy</h3>
                  <p className="text-gray-600">
                    Objective, AI-driven scoring means no bias—just a clear picture of your English proficiency.
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Personalization</h3>
                  <p className="text-gray-600">
                    Use your test results to start your learning journey at the perfect level, maximizing your progress from day one.
                  </p>
                </div>
              </div>
            </Card>

            {/* Benefit 3 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Motivation</h3>
                  <p className="text-gray-600">
                    See concrete evidence of your progress every time you re-test.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Test Your Level?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Get your personalized English proficiency report in just 10 minutes.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            onClick={() => alert("Test functionality would be integrated here")}
          >
            Take the Free Test Now!
          </Button>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">What is the CEFR Level?</h3>
            <p className="text-blue-800 mb-4">
              The Common European Framework of Reference (CEFR) is an international standard for describing language proficiency. Your test will place you at one of these levels:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="font-bold text-blue-900">A1 - A2</p>
                <p className="text-sm text-blue-800">Beginner</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-blue-900">B1 - B2</p>
                <p className="text-sm text-blue-800">Intermediate</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-blue-900">C1 - C2</p>
                <p className="text-sm text-blue-800">Advanced</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

