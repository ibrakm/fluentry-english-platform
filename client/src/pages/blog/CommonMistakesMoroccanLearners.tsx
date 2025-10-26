import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function CommonMistakesMoroccanLearners() {
  return (
    <>
      <Helmet>
        <title>10 Common Mistakes Moroccan English Learners Make | Fluentry Blog</title>
        <meta name="description" content="Learn about the most frequent errors Arabic and French speakers make when learning English, with practical solutions for each one." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-8">
          <div className="container mx-auto px-4">
            <Link href="/blog">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <Badge className="mb-4">Grammar & Vocabulary</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  10 Common Mistakes Moroccan English Learners Make (And How to Fix Them)
                </h1>
                <div className="flex items-center gap-6 text-gray-600">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    January 10, 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    10 min read
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6">
                  As a TESOL-certified English coach who has worked with hundreds of Moroccan students, I've noticed patterns in the mistakes Arabic and French speakers commonly make. Understanding these errors is the first step to avoiding them and speaking more naturally.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Using "I" Instead of "Me" After Prepositions</h2>
                
                <p className="font-semibold text-red-600">❌ Incorrect: "Come with I to the market."</p>
                <p className="font-semibold text-green-600 mb-4">✓ Correct: "Come with me to the market."</p>
                
                <p>
                  <strong>Why this happens:</strong> In Darija and French, the pronoun structure works differently. Many students overgeneralize the use of "I" as the subject pronoun.
                </p>
                
                <p>
                  <strong>The fix:</strong> Remember that after prepositions (with, for, to, at, from), always use object pronouns: me, you, him, her, us, them.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Forgetting the "S" in Third Person Singular</h2>
                
                <p className="font-semibold text-red-600">❌ Incorrect: "She work in Casablanca."</p>
                <p className="font-semibold text-green-600 mb-4">✓ Correct: "She works in Casablanca."</p>
                
                <p>
                  <strong>Why this happens:</strong> Arabic doesn't add an "s" to verbs for third person, and French verb endings work differently.
                </p>
                
                <p>
                  <strong>The fix:</strong> Create a mental checklist: He/She/It = add "s" to the verb in present simple. Practice with daily routines: "He eats breakfast. She drinks coffee. It works well."
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Confusing "Make" and "Do"</h2>
                
                <p className="font-semibold text-red-600">❌ Incorrect: "I need to make my homework."</p>
                <p className="font-semibold text-green-600 mb-4">✓ Correct: "I need to do my homework."</p>
                
                <p>
                  <strong>Why this happens:</strong> In French, "faire" covers both meanings. In Darija, "dar" is used for both concepts.
                </p>
                
                <p>
                  <strong>The fix:</strong> General rule: "Make" = create something physical. "Do" = perform an activity or task. Common phrases: do homework, do exercise, do business / make food, make money, make a decision.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Using "Say" Instead of "Tell"</h2>
                
                <p className="font-semibold text-red-600">❌ Incorrect: "He said me the truth."</p>
                <p className="font-semibold text-green-600 mb-4">✓ Correct: "He told me the truth."</p>
                
                <p>
                  <strong>Why this happens:</strong> Both translate similarly in Arabic and French, causing confusion.
                </p>
                
                <p>
                  <strong>The fix:</strong> "Say" + what was said. "Tell" + person + what was said. Examples: "She said, 'Hello'" vs "She told me hello."
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Wrong Preposition After "Arrive"</h2>
                
                <p className="font-semibold text-red-600">❌ Incorrect: "I arrived to Marrakech yesterday."</p>
                <p className="font-semibold text-green-600 mb-4">✓ Correct: "I arrived in Marrakech yesterday."</p>
                
                <p>
                  <strong>Why this happens:</strong> French uses "arriver à" which translates literally as "arrive to."
                </p>
                
                <p>
                  <strong>The fix:</strong> Use "arrive in" for cities/countries, "arrive at" for specific places (arrive at the airport, arrive at the hotel).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Overusing "Actually"</h2>
                
                <p className="font-semibold text-red-600">❌ Incorrect: "Actually, I am a student." (meaning "Currently")</p>
                <p className="font-semibold text-green-600 mb-4">✓ Correct: "Currently, I am a student." OR "I am currently a student."</p>
                
                <p>
                  <strong>Why this happens:</strong> "Actuellement" in French means "currently," but "actually" in English means "in fact" or "to be honest."
                </p>
                
                <p>
                  <strong>The fix:</strong> Use "actually" only when correcting or clarifying: "I thought he was French, but actually he's Belgian." For "now," use: currently, at the moment, right now.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Missing Articles (A, An, The)</h2>
                
                <p className="font-semibold text-red-600">❌ Incorrect: "I need book for class."</p>
                <p className="font-semibold text-green-600 mb-4">✓ Correct: "I need a book for class."</p>
                
                <p>
                  <strong>Why this happens:</strong> Arabic article usage is very different from English, and students often omit them entirely.
                </p>
                
                <p>
                  <strong>The fix:</strong> Use "a/an" for singular countable nouns (first mention). Use "the" for specific things (second mention or known items). No article for plural general statements or uncountable nouns.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Wrong Word Order with Adjectives</h2>
                
                <p className="font-semibold text-red-600">❌ Incorrect: "I bought a car red."</p>
                <p className="font-semibold text-green-600 mb-4">✓ Correct: "I bought a red car."</p>
                
                <p>
                  <strong>Why this happens:</strong> In both Arabic and French, adjectives often come after nouns.
                </p>
                
                <p>
                  <strong>The fix:</strong> In English, adjectives almost always come BEFORE the noun: a beautiful house, an expensive phone, a difficult test.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">9. Using "Since" Instead of "For"</h2>
                
                <p className="font-semibold text-red-600">❌ Incorrect: "I have studied English since three years."</p>
                <p className="font-semibold text-green-600 mb-4">✓ Correct: "I have studied English for three years."</p>
                
                <p>
                  <strong>Why this happens:</strong> The distinction doesn't exist in the same way in Arabic or French.
                </p>
                
                <p>
                  <strong>The fix:</strong> Use "for" + period of time (for 3 years, for 2 months, for a week). Use "since" + specific point in time (since 2020, since Monday, since I was a child).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">10. Pronunciation: "P" vs "B" and "V" vs "F"</h2>
                
                <p className="font-semibold text-red-600">❌ Common errors: "bark" instead of "park," "ferry" instead of "very"</p>
                <p className="font-semibold text-green-600 mb-4">✓ Practice: park/bark, pen/ben, very/ferry, vote/float</p>
                
                <p>
                  <strong>Why this happens:</strong> Darija doesn't distinguish between P/B sounds, and V doesn't exist in Arabic.
                </p>
                
                <p>
                  <strong>The fix:</strong> For P: Hold a piece of paper in front of your mouth. When you say "P," it should move from the puff of air. For V: Touch your top teeth to your bottom lip and vibrate your voice. Practice minimal pairs daily.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                  <p className="font-semibold text-blue-900 mb-2">💡 Practice Strategy:</p>
                  <p className="text-blue-800">
                    Don't try to fix all these mistakes at once. Choose one mistake per week to focus on. Record yourself speaking, identify which mistakes you make most often, and work on those first.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Your Action Plan</h2>
                
                <ol className="list-decimal pl-6 space-y-3 mb-6">
                  <li><strong>Identify your top 3 mistakes</strong> from this list</li>
                  <li><strong>Create practice sentences</strong> using the correct forms</li>
                  <li><strong>Record yourself</strong> speaking these sentences daily</li>
                  <li><strong>Get feedback</strong> from a teacher or language partner</li>
                  <li><strong>Move to the next mistake</strong> once you've mastered the first ones</li>
                </ol>

                <p>
                  Remember: Making mistakes is part of learning. Every Moroccan English speaker I've coached has made these same errors. The difference between those who achieve fluency and those who don't is simple—they practice consistently and don't give up.
                </p>

                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg mt-12">
                  <h3 className="text-2xl font-bold mb-4">Get Personalized Feedback</h3>
                  <p className="mb-6">
                    Want me to help you identify and fix YOUR specific mistakes? Book a free consultation and I'll create a custom plan for your English goals.
                  </p>
                  <Link href="/book-lesson">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Book Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-lg">
                <div className="flex items-start gap-4">
                  <img 
                    src="/ibrahim-photo.jpg" 
                    alt="Mr. Ibrahim K." 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Mr. Ibrahim K.</h3>
                    <p className="text-gray-600 mb-2">TESOL-Certified English Language Coach</p>
                    <p className="text-sm text-gray-600">
                      Based in Tangier, Morocco. Specialized in helping Arabic and French speakers achieve English fluency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

