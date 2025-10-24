import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            From Morocco, for the World: The Fluentry Story
          </h1>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Meet Mr. Ibrahim K. — Your English Coach
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Mr. Ibrahim K. is a dedicated English educator from Tangier, Morocco, with years of experience helping learners gain confidence and fluency in real communication. He founded Fluentry because he saw a need for a more natural, communication-focused approach to learning English.
            </p>
            <p>
              Frustrated by traditional methods that focused too much on grammar rules and too little on actual speaking, Ibrahim created Fluentry to bridge the gap. His goal is simple: to help every learner in Morocco and beyond communicate their ideas, dreams, and expertise without hesitation.
            </p>
            <p>
              Ibrahim believes that English is not just a subject to study—it's a skill to master, and more importantly, a tool for empowerment. Through Fluentry, he has successfully guided dozens of students toward their personal and professional goals.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
              <p className="text-lg italic text-blue-900 font-semibold">
                "I believe that English is the key to countless opportunities. My passion is seeing that 'aha!' moment when a student finally expresses themselves perfectly, without translating in their head."
              </p>
              <p className="text-blue-800 mt-4 font-medium">— Mr. Ibrahim K., Founder & Lead Coach</p>
            </div>
            <p className="font-semibold text-gray-900">
              His Teaching Approach:
            </p>
            <p>
              Ibrahim combines interactive speaking practice, real-life scenarios, and individualized feedback to ensure every student speaks English naturally and confidently. He focuses on practical, engaging, and life-changing language learning.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="flex gap-4 items-start mb-8">
            <Target className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission: Empowering Confident Communicators
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide accessible, high-quality, and personalized English coaching that transforms learners into confident, natural communicators, ready to thrive in a global environment. We are committed to fostering a supportive and motivational learning space where every mistake is a step toward mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 px-4">
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
                Communication First
              </h3>
              <p className="text-gray-600 text-center">
                We prioritize speaking from Day One. Lessons are dynamic, engaging, and centered on real-life scenarios, debates, and discussions.
              </p>
            </Card>

            {/* Focus 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <Target className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Personalized Feedback
              </h3>
              <p className="text-gray-600 text-center">
                Your coach provides targeted, constructive feedback that addresses your specific weaknesses, whether it's pronunciation, vocabulary, or complex sentence structure.
              </p>
            </Card>

            {/* Focus 3 */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <Heart className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                Confidence Building
              </h3>
              <p className="text-gray-600 text-center">
                We create a judgment-free zone. Our motivational tone and focus on progress over perfection ensure you build the courage to use English in any situation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey with Mr. Ibrahim K.?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's start your journey to confident, fluent English communication. Ibrahim is ready to help you achieve your goals.
          </p>
            <a href="https://wa.me/212672580932" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Chat with Ibrahim on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

