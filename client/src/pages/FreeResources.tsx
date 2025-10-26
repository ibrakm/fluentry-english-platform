import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GrammarChallenge from "@/components/games/GrammarChallenge";
import IdiomMatcher from "@/components/games/IdiomMatcher";
import VocabularyQuiz from "@/components/games/VocabularyQuiz";
import { BookOpen, Download, FileText, GamepadIcon, Headphones, PenTool } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

export default function FreeResources() {
  return (
    <>
      <Helmet>
        <title>Free English Learning Resources - Games, Guides & Exercises | Fluentry Morocco</title>
        <meta name="description" content="Practice English for free with interactive games, downloadable guides, and expert exercises. Learn English online with Fluentry - Morocco's trusted English coaching platform. IELTS preparation, business English, and conversation practice." />
        <meta name="keywords" content="free English resources Morocco, English learning games, English practice online, IELTS preparation Morocco, business English Morocco, English teacher Tangier, learn English Casablanca, English exercises free, vocabulary quiz, grammar practice, English coaching Morocco" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Free English Learning Resources
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Practice your English with interactive games, downloadable guides, and expert exercises — completely free!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <a href="#games">Start Playing</a>
                </Button>
                <Link href="/book-lesson">
                  <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-white/90">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Mr. Ibrahim K. */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="/ibrahim-photo.jpg" 
                    alt="Mr. Ibrahim K. - TESOL Certified English Coach" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Meet Your Coach</h2>
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">Mr. Ibrahim K.</h3>
                  <p className="text-gray-600 mb-4">
                    TESOL-Certified English Language Coach based in Tangier, Morocco. With a Bachelor's degree in English Studies and extensive teaching experience, Mr. Ibrahim specializes in helping students and professionals build real fluency and confidence.
                  </p>
                  <p className="text-gray-600 mb-6">
                    "Fluency comes from confidence, not perfection. My goal is to make English learning practical, enjoyable, and personal to every student."
                  </p>
                  <Link href="/about">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More About Mr. Ibrahim
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Games Section */}
        <section id="games" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Learning Games</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Test your English skills with fun, interactive games. Get instant feedback and track your progress!
              </p>
            </div>

            <Tabs defaultValue="vocabulary" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="vocabulary">Vocabulary Quiz</TabsTrigger>
                <TabsTrigger value="grammar">Grammar Challenge</TabsTrigger>
                <TabsTrigger value="idioms">Idiom Matcher</TabsTrigger>
              </TabsList>
              
              <TabsContent value="vocabulary">
                <VocabularyQuiz />
              </TabsContent>
              
              <TabsContent value="grammar">
                <GrammarChallenge />
              </TabsContent>
              
              <TabsContent value="idioms">
                <IdiomMatcher />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Free Resources Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">More Free Resources</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Download guides, practice exercises, and learning materials to support your English journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Downloadable Guides */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Download className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Downloadable Guides</CardTitle>
                  <CardDescription>
                    PDF guides covering common mistakes, business English, and exam preparation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Common English Mistakes Moroccans Make</li>
                    <li>• Business Email Templates</li>
                    <li>• IELTS Speaking Success Guide</li>
                    <li>• Essential Travel Phrases</li>
                  </ul>
                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* Practice Exercises */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <PenTool className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>Practice Exercises</CardTitle>
                  <CardDescription>
                    Worksheets and exercises to practice grammar, vocabulary, and writing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Grammar worksheets with answers</li>
                    <li>• Daily conversation practice</li>
                    <li>• Writing prompts and tips</li>
                    <li>• Pronunciation exercises</li>
                  </ul>
                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* Listening Practice */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Headphones className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Listening Practice</CardTitle>
                  <CardDescription>
                    Audio lessons and comprehension exercises to improve your listening skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Real conversation examples</li>
                    <li>• Listening comprehension tests</li>
                    <li>• Pronunciation tutorials</li>
                    <li>• Accent training exercises</li>
                  </ul>
                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* Video Lessons */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <GamepadIcon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>Video Lessons</CardTitle>
                  <CardDescription>
                    Short video tutorials on grammar, vocabulary, and pronunciation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• 5-minute English tips</li>
                    <li>• Grammar explained simply</li>
                    <li>• Common mistakes to avoid</li>
                    <li>• Pronunciation demonstrations</li>
                  </ul>
                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* Level Assessment */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Level Assessment</CardTitle>
                  <CardDescription>
                    Take a free test to discover your English level and get personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• CEFR level assessment</li>
                    <li>• Personalized learning plan</li>
                    <li>• Skill breakdown report</li>
                    <li>• Course recommendations</li>
                  </ul>
                  <Link href="/free-test">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Take Free Test
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Study Tips */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle>Study Tips & Blog</CardTitle>
                  <CardDescription>
                    Articles and tips on effective English learning strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• How to think in English</li>
                    <li>• Best learning techniques</li>
                    <li>• Student success stories</li>
                    <li>• Weekly learning tips</li>
                  </ul>
                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Take Your English to the Next Level?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                These free resources are just the beginning. Book a free 10-minute consultation with Mr. Ibrahim K. to create your personalized learning plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-lesson">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Book Free Consultation
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-white/90">
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

