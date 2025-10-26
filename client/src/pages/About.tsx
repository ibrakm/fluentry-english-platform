import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Target, Lightbulb, Award, BookOpen, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4 shadow-xl">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your Coach: Mr. Ibrahim K.
          </h1>
          <p className="text-xl text-blue-100">
            TESOL-Certified English Language Coach | Based in Tangier, Morocco
          </p>
        </div>
      </section>

      {/* Coach Profile Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Photo Placeholder */}
                        {/* Coach Photo */}
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 text-center shadow-lg">
                <img 
                  src="/ibrahim-photo.jpg" 
                  alt="Mr. Ibrahim K. - English Language Coach" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Mr. Ibrahim K. — Founder & Certified English Language Coach
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Mr. Ibrahim K. is a <strong>TESOL-certified English language coach</strong> with a <strong>Bachelor's degree in English Studies</strong> and extensive experience teaching learners from Morocco and abroad.
                </p>
                <p>
                  He specializes in helping students and professionals build real fluency and confidence through personalized one-on-one coaching. His lessons focus on practical communication, clear pronunciation, and natural conversation skills for real-life success.
                </p>
                <p>
                  As an <strong>English teacher in Tangier</strong>, he has taught students, business professionals, and corporate teams, offering specialized courses in Business English, IELTS & TOEFL Preparation, Tourism and Logistics English, and General English & Conversation Practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Qualifications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🎓 Professional Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    TESOL Certificate
                  </h3>
                  <p className="text-gray-600">
                    Teaching English to Speakers of Other Languages — internationally recognized certification
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    B.A. in English Studies
                  </h3>
                  <p className="text-gray-600">
                    Bachelor's degree with deep knowledge of English language, literature, and linguistics
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Private School Experience
                  </h3>
                  <p className="text-gray-600">
                    Extensive teaching experience in private schools and online international programs
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Specialized Training
                  </h3>
                  <p className="text-gray-600">
                    Business English, Exam Preparation (IELTS, TOEFL), and Conversation Fluency
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            💬 Teaching Philosophy
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-8">
            <p className="text-xl italic text-blue-900 font-semibold mb-4">
              "Fluency comes from confidence, not perfection. My goal is to make English learning practical, enjoyable, and personal to every student."
            </p>
            <p className="text-blue-800 font-medium">— Mr. Ibrahim K.</p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Mr. Ibrahim believes English is not just a subject — it's a tool for success. His goal is to help learners speak confidently, think clearly, and connect with the world.
            </p>
            <p>
              He combines modern AI tools, TESOL teaching methods, and a communication-first approach to create an engaging learning experience. Each session is tailored to the learner's level, goals, and professional background — helping them speak English with clarity, confidence, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Fluentry Method: Speak, Practice, Master
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Focus 1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <Lightbulb className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Communication-First Learning
              </h3>
              <p className="text-gray-600 text-center">
                Real conversations, not memorization. We prioritize speaking from Day One with interactive lessons using technology and real-life topics.
              </p>
            </Card>

            {/* Focus 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <Target className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Personalized Study Plans
              </h3>
              <p className="text-gray-600 text-center">
                Every lesson is tailored based on each learner's goals, whether it's Business English training, IELTS preparation, or conversation practice.
              </p>
            </Card>

            {/* Focus 3 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <Heart className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Positive, Encouraging Environment
              </h3>
              <p className="text-gray-600 text-center">
                A judgment-free zone to build long-term confidence. Our focus is on progress over perfection.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Students Served */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Who I Teach
          </h2>
          <p className="text-center text-lg text-gray-700 mb-8">
            Mr. Ibrahim currently teaches students, university learners, and professionals in sectors such as:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="font-semibold text-blue-900">Tourism & Hospitality</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="font-semibold text-blue-900">Business & Trade</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="font-semibold text-blue-900">Logistics & Transport</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="font-semibold text-blue-900">Education & Communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="flex gap-4 items-start">
            <Target className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission: Empowering Confident Communicators
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide accessible, high-quality, and personalized <strong>online English classes in Morocco</strong> that transform learners into confident, natural communicators, ready to thrive in a global environment. We are committed to fostering a supportive and motivational learning space where every mistake is a step toward mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey with Mr. Ibrahim K.?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Book your free 10-minute consultation and discover how personalized <strong>private English lessons in Morocco</strong> can transform your fluency and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-lesson">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Book Free Consultation
              </Button>
            </Link>
            <a href="https://wa.me/212672580932" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

