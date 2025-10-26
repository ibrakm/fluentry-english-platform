import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, CheckCircle, TrendingUp } from "lucide-react";
import ProfessionalEnglishTest from "@/components/ProfessionalEnglishTest";

export default function FreeTest() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 shadow-xl">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your True English Level
          </h1>
          <p className="text-lg text-blue-100">
            Take our quick, free, and accurate English proficiency test. Get your CEFR level and personalized course recommendations in minutes.
          </p>
        </div>
      </section>

      {/* Test Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <ProfessionalEnglishTest />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
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
                Answer 10 questions that assess your grammar, vocabulary, and comprehension skills across different difficulty levels.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 rounded-full p-4">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Scoring</h3>
              <p className="text-gray-600">
                Our system instantly calculates your score and determines your CEFR level (A1 to C2) with detailed accuracy.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 rounded-full p-4">
                  <span className="text-3xl font-bold text-blue-600">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Plan</h3>
              <p className="text-gray-600">
                Receive a detailed report with your level and a personalized recommendation for the best Fluentry course for you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
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
                    Objective, data-driven scoring means no bias—just a clear picture of your English proficiency.
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
                    See concrete evidence of your progress every time you re-test. Track your improvement over time.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white border-l-4 border-blue-600 p-8 rounded-r-lg shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Understanding CEFR Levels</h3>
            <p className="text-gray-700 mb-6">
              The Common European Framework of Reference (CEFR) is an international standard for describing language proficiency. Your test will place you at one of these levels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-blue-600 text-lg mb-2">A1 - A2</p>
                <p className="text-gray-700 font-semibold mb-2">Beginner</p>
                <p className="text-sm text-gray-600">Basic communication, simple sentences, everyday vocabulary</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-blue-600 text-lg mb-2">B1 - B2</p>
                <p className="text-gray-700 font-semibold mb-2">Intermediate</p>
                <p className="text-sm text-gray-600">Fluent conversation, complex topics, professional communication</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-bold text-blue-600 text-lg mb-2">C1 - C2</p>
                <p className="text-gray-700 font-semibold mb-2">Advanced</p>
                <p className="text-sm text-gray-600">Near-native fluency, nuanced expression, academic/professional mastery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Once you've completed the test and received your level, book your first lesson with a Fluentry coach. **Please remember to include your test result (e.g., "B2") in your booking notes!**
          </p>
          <a href="https://calendly.com/ibrahimkabaikm/30min" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600 font-semibold shadow-2xl shadow-orange-500/50"
            >
              Book Your First Lesson
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

