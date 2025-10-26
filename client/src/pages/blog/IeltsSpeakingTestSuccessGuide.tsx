import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function IeltsSpeakingTestSuccessGuide() {
  return (
    <>
      <Helmet>
        <title>IELTS Speaking Test: Complete Success Guide for Moroccan Students | Fluentry</title>
        <meta name="description" content="Everything you need to know to ace the IELTS Speaking test, including common questions, scoring criteria, and expert tips from a TESOL-certified coach." />
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
                <Badge className="mb-4">Exam Preparation</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  IELTS Speaking Test: Complete Success Guide for Moroccan Students
                </h1>
                <div className="flex items-center gap-6 text-gray-600">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    December 28, 2024
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    12 min read
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6">
                  The IELTS Speaking test intimidates many Moroccan students, but it doesn't have to. As someone who has helped dozens of students achieve their target scores, I'll share exactly what you need to know to succeed.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Understanding the IELTS Speaking Test Format</h2>
                
                <p>
                  The speaking test lasts 11-14 minutes and has three parts:
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">Part 1: Introduction and Interview (4-5 minutes)</h3>
                <p>
                  The examiner asks general questions about yourself, your home, family, work, studies, and interests.
                </p>

                <p className="font-semibold mt-4">Common Part 1 Topics:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Your hometown or city</li>
                  <li>Your work or studies</li>
                  <li>Your hobbies and interests</li>
                  <li>Your daily routine</li>
                  <li>Your family</li>
                  <li>Food preferences</li>
                  <li>Technology use</li>
                  <li>Travel experiences</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Part 2: Individual Long Turn (3-4 minutes)</h3>
                <p>
                  You receive a task card with a topic. You have 1 minute to prepare, then speak for 1-2 minutes. The examiner may ask 1-2 follow-up questions.
                </p>

                <p className="font-semibold mt-4">Example Task Card:</p>
                <div className="bg-slate-100 p-4 rounded-lg my-4">
                  <p className="font-semibold mb-2">Describe a person who has influenced you.</p>
                  <p className="text-sm mb-1">You should say:</p>
                  <ul className="text-sm list-disc pl-6 space-y-1">
                    <li>Who this person is</li>
                    <li>How you know them</li>
                    <li>What they have done to influence you</li>
                    <li>And explain why this person is important to you</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3">Part 3: Two-Way Discussion (4-5 minutes)</h3>
                <p>
                  The examiner asks more abstract questions related to the Part 2 topic. This tests your ability to discuss issues and express opinions.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Four Scoring Criteria</h2>
                
                <p>
                  Understanding how you're scored is crucial. Each criterion is worth 25% of your speaking score:
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">1. Fluency and Coherence</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Speak at a natural pace without long pauses</li>
                  <li>Use linking words (however, moreover, for example)</li>
                  <li>Organize your ideas logically</li>
                  <li>Self-correct naturally when needed</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">2. Lexical Resource (Vocabulary)</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Use a wide range of vocabulary</li>
                  <li>Use less common words and phrases</li>
                  <li>Paraphrase when you don't know a word</li>
                  <li>Use collocations naturally (make a decision, take a chance)</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">3. Grammatical Range and Accuracy</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Use a variety of sentence structures</li>
                  <li>Mix simple and complex sentences</li>
                  <li>Use different tenses correctly</li>
                  <li>Make few grammatical errors</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">4. Pronunciation</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Speak clearly and be easily understood</li>
                  <li>Use appropriate stress and intonation</li>
                  <li>Pronounce individual sounds correctly</li>
                  <li>Use natural rhythm and connected speech</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                  <p className="font-semibold text-blue-900 mb-2">💡 Important Note:</p>
                  <p className="text-blue-800">
                    You don't need a British or American accent to score high! The examiner evaluates clarity and naturalness, not which accent you have.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Common Mistakes Moroccan Students Make</h2>
                
                <h3 className="text-xl font-bold mt-6 mb-3">1. Giving Very Short Answers in Part 1</h3>
                <p className="font-semibold text-red-600">❌ Weak Answer:</p>
                <p className="mb-2">"Do you like your hometown?" → "Yes, I do."</p>
                
                <p className="font-semibold text-green-600">✓ Strong Answer:</p>
                <p className="mb-6">"Yes, I really love Tangier. It's a vibrant coastal city with a rich history. What I appreciate most is the mix of cultures—you can feel both European and Moroccan influences. Plus, the beaches are beautiful, which makes it a great place to relax."</p>

                <h3 className="text-xl font-bold mt-6 mb-3">2. Memorizing and Reciting Answers</h3>
                <p>
                  Examiners are trained to detect memorized responses. They sound unnatural and will lower your score. Instead, prepare ideas and vocabulary, but speak naturally.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">3. Stopping When You Make a Mistake</h3>
                <p className="mb-6">
                  Don't panic or apologize for mistakes. Self-correct naturally and continue speaking. The examiner expects some errors—it's normal.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">4. Using Overly Simple Vocabulary</h3>
                <p>
                  Instead of always saying "good," use: excellent, wonderful, fantastic, beneficial, advantageous. Show your vocabulary range!
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Strategies for Each Part</h2>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Part 1 Strategy: Extend Your Answers</h3>
                <p>
                  Use the IDEA method:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>I</strong>nitial answer (directly answer the question)</li>
                  <li><strong>D</strong>etails (add specific information)</li>
                  <li><strong>E</strong>xample (give a personal example)</li>
                  <li><strong>A</strong>lternative/Additional point (add another perspective)</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Part 2 Strategy: Use Your Preparation Time Wisely</h3>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>Read the task card carefully (10 seconds)</li>
                  <li>Choose your topic/person/place quickly (10 seconds)</li>
                  <li>Write brief notes for each bullet point (40 seconds)</li>
                  <li>Don't write full sentences—just keywords</li>
                </ol>

                <p className="font-semibold mt-4">Speaking Structure for Part 2:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Introduction</strong> (10 seconds): Briefly introduce your topic</li>
                  <li><strong>Main points</strong> (60-80 seconds): Cover all bullet points with details</li>
                  <li><strong>Conclusion</strong> (10-20 seconds): Summarize or add final thoughts</li>
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3">Part 3 Strategy: Think Before You Speak</h3>
                <p>
                  It's okay to take 2-3 seconds to think. Use these phrases:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>"That's an interesting question. I think..."</li>
                  <li>"Well, from my perspective..."</li>
                  <li>"That's a complex issue, but I believe..."</li>
                  <li>"Let me think about that for a moment..."</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Useful Phrases for Higher Scores</h2>
                
                <p className="font-semibold">Giving Opinions:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>In my opinion / From my perspective</li>
                  <li>I strongly believe that...</li>
                  <li>It seems to me that...</li>
                  <li>I'm convinced that...</li>
                </ul>

                <p className="font-semibold">Adding Information:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Furthermore / Moreover / Additionally</li>
                  <li>On top of that</li>
                  <li>Another point worth mentioning is...</li>
                  <li>What's more</li>
                </ul>

                <p className="font-semibold">Contrasting:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>However / Nevertheless / On the other hand</li>
                  <li>Despite this / In spite of this</li>
                  <li>While it's true that... it's also important to consider...</li>
                </ul>

                <p className="font-semibold">Giving Examples:</p>
                <ul className="list-disc pl-6 space-y-1 mb-6">
                  <li>For instance / For example</li>
                  <li>To illustrate this point...</li>
                  <li>A good example of this would be...</li>
                  <li>Take... for instance</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Your 30-Day Preparation Plan</h2>
                
                <div className="bg-slate-50 p-6 rounded-lg my-6">
                  <p className="font-semibold mb-3">Week 1: Master Part 1</p>
                  <p className="mb-4">Practice answering 50 common Part 1 questions. Record yourself and aim for 3-4 sentence answers.</p>

                  <p className="font-semibold mb-3">Week 2: Conquer Part 2</p>
                  <p className="mb-4">Practice 20 different Part 2 topics. Time yourself—1 minute prep, 2 minutes speaking.</p>

                  <p className="font-semibold mb-3">Week 3: Develop Part 3 Skills</p>
                  <p className="mb-4">Practice abstract discussion questions. Focus on giving extended, well-structured answers.</p>

                  <p className="font-semibold mb-3">Week 4: Full Mock Tests</p>
                  <p>Do 5 complete speaking tests (all 3 parts). Get feedback from a teacher or native speaker.</p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Test Day Tips</h2>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><strong>Arrive early</strong> to feel relaxed and prepared</li>
                  <li><strong>Dress comfortably</strong> but professionally</li>
                  <li><strong>Be friendly</strong> with the examiner—smile and make eye contact</li>
                  <li><strong>Speak clearly</strong> but at a natural pace</li>
                  <li><strong>Don't worry about mistakes</strong>—keep speaking confidently</li>
                  <li><strong>If you don't understand</strong>, politely ask: "Could you repeat that, please?"</li>
                </ul>

                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg mt-12">
                  <h3 className="text-2xl font-bold mb-4">Need IELTS Speaking Coaching?</h3>
                  <p className="mb-6">
                    I specialize in IELTS preparation for Moroccan students. Get personalized feedback, practice with real test questions, and build the confidence you need to achieve your target score.
                  </p>
                  <Link href="/book-lesson">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      Book Your IELTS Consultation
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
                      IELTS preparation specialist helping Moroccan students achieve their target scores for university admission and immigration.
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

