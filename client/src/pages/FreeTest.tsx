import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, CheckCircle, TrendingUp, Mic, BookOpen } from "lucide-react";
import ProfessionalEnglishTest from "@/components/ProfessionalEnglishTest";
import SpeakingTest from "@/components/SpeakingTest";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";

type TestTab = "written" | "speaking";

export default function FreeTest() {
  const [activeTab, setActiveTab] = useState<TestTab>("written");

  const freeTestFAQ = [
    { question: "Is the Fluentry English level test really free?", answer: "Yes. The English level test is 100% free, takes about 5 minutes, and requires no registration or payment. You will receive your CEFR level (A1–C2) and a personalised learning recommendation immediately after completing the test." },
    { question: "What does the free English test measure?", answer: "The test assesses your reading comprehension, grammar, vocabulary, and listening skills across the full CEFR scale from A1 (beginner) to C2 (mastery). It is designed specifically for Moroccan English learners and gives an accurate snapshot of your current level." },
    { question: "What is the CEFR scale?", answer: "CEFR stands for Common European Framework of Reference for Languages. It is the international standard for measuring language proficiency. The levels are: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate), C1 (Advanced), and C2 (Mastery). Most professional jobs in Morocco require B2 or above." },
    { question: "What happens after I take the free English test?", answer: "After completing the test, you will receive your CEFR level and a personalised course recommendation from Mr. Ibrahim K. You can then book a free 10-minute strategy call on WhatsApp to discuss your goals and get a tailored learning plan." },
    { question: "How accurate is the Fluentry English level test?", answer: "The test is designed by TESOL-certified coach Mr. Ibrahim K. based on CEFR descriptors and is calibrated against real student performance. It is accurate enough to place you in the correct programme, though a full diagnostic session with Mr. Ibrahim provides even more detailed insights." },
  ];

  return (
    <>
      <SEO
        title="Free English Level Test Morocco | CEFR A1–C2 in 5 Minutes | Fluentry"
        description="Discover your exact English level in 5 minutes with Fluentry's free CEFR assessment (A1–C2). Get a personalised learning roadmap from TESOL-certified coach Mr. Ibrahim K. No registration required. 100% free for all Moroccan learners."
        path="/free-test"
        keywords="free English level test Morocco, CEFR test Morocco, English proficiency test free, test niveau anglais gratuit Maroc, اختبار مستوى الإنجليزية مجاني, English assessment Morocco, CEFR level test online Morocco, English test A1 B1 B2 C1 Morocco, test my English level free, English placement test Morocco"
        breadcrumbs={[{ name: "Free Level Test", item: "https://fluentry.online/free-test" }]}
        faqItems={freeTestFAQ}
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

        {/* Tab Switcher */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex">
              <button
                onClick={() => setActiveTab("written")}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === "written"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Written Test
              </button>
              <button
                onClick={() => setActiveTab("speaking")}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === "speaking"
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Mic className="w-4 h-4" />
                Speaking Test
                <span className="bg-orange-100 text-orange-700 text-xs font-black px-2 py-0.5 rounded-full ml-1">NEW</span>
              </button>
            </div>
          </div>
        </section>

        {/* Test Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {activeTab === "written" ? (
              <ProfessionalEnglishTest />
            ) : (
              <SpeakingTest />
            )}
          </div>
        </section>

        {/* How It Works — only shown for written test */}
        {activeTab === "written" && (
          <>
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
          </>
        )}

        {/* CTA */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Once you've completed the test and received your level, book your first lesson with Mr. Ibrahim K.
              <br />
              <strong>Please include your test result (e.g., "B2") in your booking notes!</strong>
            </p>
            <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20lesson%20and%20start%20with%20a%20free%20strategy%20call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Book a Free Consultation Call
              </Button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
