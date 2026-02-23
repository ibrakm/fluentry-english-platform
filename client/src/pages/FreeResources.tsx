import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GrammarChallenge from "@/components/games/GrammarChallenge";
import IdiomMatcher from "@/components/games/IdiomMatcher";
import VocabularyQuiz from "@/components/games/VocabularyQuiz";
import IdiomGuide from "@/components/IdiomGuide";
import ListeningPractice from "@/components/ListeningPractice";
import PracticeExercises from "@/components/PracticeExercises";
import { BookOpen, Download, FileText, GamepadIcon, Headphones, PenTool, BookMarked } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { useState } from "react";

const gameTabs = [
  { id: "vocabulary", label: "Vocabulary", icon: BookOpen },
  { id: "grammar", label: "Grammar", icon: PenTool },
  { id: "idioms", label: "Idiom Matcher", icon: BookMarked },
];

const resourceTabs = [
  { id: "exercises", label: "Practice", icon: PenTool },
  { id: "listening", label: "Listening", icon: Headphones },
  { id: "idiomguide", label: "Idiom Guide", icon: BookMarked },
];

export default function FreeResources() {
  const [activeGameTab, setActiveGameTab] = useState("vocabulary");
  const [activeResourceTab, setActiveResourceTab] = useState("exercises");

  return (
    <>
      <Helmet>
        <title>Free English Learning Resources - Games, Guides & Exercises | Fluentry Morocco</title>
        <meta name="description" content="Practice English for free with interactive games, downloadable guides, and expert exercises. Learn English online with Fluentry - Morocco's trusted English coaching platform." />
        <meta name="keywords" content="free English resources Morocco, English learning games, English practice online, IELTS preparation Morocco, business English Morocco, English teacher Tangier" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Free English Learning Resources
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90">
                Practice your English with interactive games, idiom guides, and exercises — completely free!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#games">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                    Start Playing
                  </Button>
                </a>
                <Link href="/book-lesson">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 font-semibold px-8">
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Meet Your Coach ── */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/ibrahim-photo.jpg"
                    alt="Mr. Ibrahim K. - TESOL Certified English Coach"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3">Meet Your Coach</h2>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Mr. Ibrahim K.</h3>
                  <p className="text-gray-600 mb-3 text-sm sm:text-base">
                    TESOL-Certified English Language Coach based in Tangier, Morocco. With a Bachelor's degree in English Studies and extensive teaching experience, Mr. Ibrahim specializes in helping students and professionals build real fluency and confidence.
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 mb-5 text-sm sm:text-base">
                    "Fluency comes from confidence, not perfection."
                  </blockquote>
                  <Link href="/about">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                      Learn More About Mr. Ibrahim
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Interactive Games ── */}
        <section id="games" className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Interactive Learning Games</h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                Test your English skills with fun, interactive games. Get instant feedback and track your progress!
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Custom mobile-friendly tab bar */}
              <div className="flex rounded-xl bg-gray-100 p-1 gap-1 mb-6">
                {gameTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveGameTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        activeGameTab === tab.id
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      style={{ WebkitTapHighlightColor: "transparent", minHeight: "44px" }}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Game content */}
              <div>
                {activeGameTab === "vocabulary" && <VocabularyQuiz />}
                {activeGameTab === "grammar" && <GrammarChallenge />}
                {activeGameTab === "idioms" && <IdiomMatcher />}
              </div>
            </div>
          </div>
        </section>

        {/* ── More Free Resources ── */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">More Free Resources</h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                Practice exercises, listening comprehension, and a complete idiom guide — all free
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Resource tab selector cards */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {resourceTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeResourceTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveResourceTab(tab.id)}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                        isActive
                          ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                          : "border-gray-200 bg-white text-gray-500 hover:border-blue-300 hover:text-blue-600"
                      }`}
                      style={{ WebkitTapHighlightColor: "transparent", minHeight: "80px" }}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isActive ? "bg-blue-100" : "bg-gray-100"
                      }`}>
                        <Icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold leading-tight">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Resource content */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                {activeResourceTab === "exercises" && <PracticeExercises />}
                {activeResourceTab === "listening" && <ListeningPractice />}
                {activeResourceTab === "idiomguide" && <IdiomGuide />}
              </div>
            </div>
          </div>
        </section>

        {/* ── Additional Resources Grid ── */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Additional Resources</h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                Download guides and explore more learning materials
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Download className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-base">Downloadable Guides</CardTitle>
                  <CardDescription className="text-xs">PDF guides covering common mistakes, business English, and exam prep</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-xs text-gray-500 mb-4">
                    <li>• Common English Mistakes</li>
                    <li>• Business Email Templates</li>
                    <li>• IELTS Speaking Guide</li>
                    <li>• Essential Travel Phrases</li>
                  </ul>
                  <Button variant="outline" className="w-full text-xs" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <GamepadIcon className="w-5 h-5 text-orange-600" />
                  </div>
                  <CardTitle className="text-base">Video Lessons</CardTitle>
                  <CardDescription className="text-xs">Short video tutorials on grammar, vocabulary, and pronunciation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-xs text-gray-500 mb-4">
                    <li>• 5-minute English tips</li>
                    <li>• Grammar explained simply</li>
                    <li>• Common mistakes to avoid</li>
                    <li>• Pronunciation demos</li>
                  </ul>
                  <Button variant="outline" className="w-full text-xs" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-base">Level Assessment</CardTitle>
                  <CardDescription className="text-xs">Take a free test to discover your English level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-xs text-gray-500 mb-4">
                    <li>• CEFR level assessment</li>
                    <li>• Personalized learning plan</li>
                    <li>• Skill breakdown report</li>
                    <li>• Course recommendations</li>
                  </ul>
                  <Link href="/free-test">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-xs">
                      Take Free Test
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                  </div>
                  <CardTitle className="text-base">Study Tips & Blog</CardTitle>
                  <CardDescription className="text-xs">Articles and tips on effective English learning strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-xs text-gray-500 mb-4">
                    <li>• How to think in English</li>
                    <li>• Best learning techniques</li>
                    <li>• Student success stories</li>
                    <li>• Weekly learning tips</li>
                  </ul>
                  <Link href="/blog">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xs">
                      Read Blog
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Take Your English to the Next Level?
              </h2>
              <p className="text-base sm:text-lg mb-8 text-white/90">
                These free resources are just the beginning. Book a free 10-minute consultation with Mr. Ibrahim K. to create your personalized learning plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/book-lesson">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 font-semibold px-8">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
