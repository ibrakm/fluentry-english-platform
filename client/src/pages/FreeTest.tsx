import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, CheckCircle, TrendingUp } from "lucide-react";
import ProfessionalEnglishTest from "@/components/ProfessionalEnglishTest";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

export default function FreeTest() {
  return (
    <>
      <SEO
        title="Free English Level Test - CEFR Assessment | Fluentry Morocco"
        description="Take our free English proficiency test and discover your CEFR level (A1–C2) in minutes. Get personalized course recommendations from Mr. Ibrahim K., TESOL-certified coach in Morocco."
        path="/free-test"
      />
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
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Questions</h3>
              <p className="text-gray-600 text-sm">
                Answer questions that assess your grammar, vocabulary, and comprehension across different difficulty levels.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Scoring</h3>
              <p className="text-gray-600 text-sm">
                Our system instantly calculates your score and determines your CEFR level (A1 to C2) with detailed accuracy.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Plan</h3>
              <p className="text-gray-600 text-sm">
                Receive a detailed report with your level and a personalized recommendation for the best Fluentry course for you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CEFR Levels */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Understanding CEFR Levels
          </h2>
          <p className="text-center text-gray-600 mb-12">
            The Common European Framework of Reference (CEFR) is the international standard for describing language proficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-2">A1 – A2 · Beginner</h3>
              <p className="text-gray-600 text-sm">Basic communication, simple sentences, everyday vocabulary.</p>
            </Card>
            <Card className="p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 mb-2">B1 – B2 · Intermediate</h3>
              <p className="text-gray-600 text-sm">Fluent conversation, complex topics, professional communication.</p>
            </Card>
            <Card className="p-6 border-l-4 border-purple-500">
              <h3 className="font-bold text-gray-900 mb-2">C1 – C2 · Advanced</h3>
              <p className="text-gray-600 text-sm">Near-native fluency, nuanced expression, academic/professional mastery.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Benefits of Testing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Accuracy", desc: "Objective, data-driven scoring means no bias — just a clear picture of your English proficiency." },
              { title: "Personalization", desc: "Start your learning journey at the perfect level, maximizing your progress from day one." },
              { title: "Motivation", desc: "See concrete evidence of your progress every time you re-test and track your improvement over time." },
            ].map((b) => (
              <Card key={b.title} className="p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Once you've completed the test and received your level, book your first lesson with Mr. Ibrahim K.
            <br />
            <strong>Please include your test result (e.g., "B2") in your booking notes!</strong>
          </p>
          <Link href="/book-lesson">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Book Your First Lesson
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
