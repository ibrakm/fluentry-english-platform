/*
 * A2ToB1SixMonthPlan.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * SEO Blog Post: From A2 to B1 in 6 Months: A Realistic Step-by-Step Plan
 * Targets learners seeking a concrete roadmap to improve their English level
 * with a practical weekly schedule and monthly milestones.
 *
 * This post will rank #1 for:
 * - "passer de A2 à B1 anglais"
 * - "progresser rapidement en anglais Maroc"
 * - "how to improve English from A2 to B1"
 * - "6 month English plan"
 */

import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, Calendar, Target, TrendingUp } from "lucide-react";

export default function A2ToB1SixMonthPlan() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "From A2 to B1 in 6 Months: A Realistic Step-by-Step Plan for Moroccan English Learners",
    "description": "A practical 6-month plan for Moroccan learners to advance from A2 to B1 English. Follow our weekly schedule and expert tips to improve your fluency and confidence.",
    "image": "https://fluentry.com/assets/images/blog/a2-to-b1-plan.jpg",
    "author": {
      "@type": "Person",
      "name": "Mr. Ibrahim",
      "url": "https://fluentry.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fluentry English Coaching",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fluentry.com/assets/logo.png"
      }
    },
    "datePublished": "2026-02-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fluentry.com/blog/a2-to-b1-english-6-month-plan-morocco"
    }
  };

  return (
    <>
      <SEO
        path="/blog/a2-to-b1-english-6-month-plan-morocco"
        title="From A2 to B1 in 6 Months: A Realistic Step-by-Step Plan for Moroccan English Learners"
        description="A practical 6-month plan for Moroccan learners to advance from A2 to B1 English. Follow our weekly schedule and expert tips to improve your fluency and confidence."
        keywords="A2 to B1 English, progresser en anglais Maroc, 6 month English plan, improve English level"
      />

      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto py-16 px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Learning Plan</p>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              From A2 to B1 in 6 Months: A Realistic Step-by-Step Plan
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Follow our practical weekly schedule to reach the intermediate level and speak English with confidence.
            </p>
            <p className="text-sm text-gray-400 mt-4">By Mr. Ibrahim • Last updated: Feb 24, 2026</p>
          </div>

          {/* Intro */}
          <article className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              Are you feeling stuck in the A2 "pre-intermediate" English level? You can understand basic phrases and answer simple questions, but you struggle to have a real, spontaneous conversation. This is a common frustration for many Moroccan learners, but it is a barrier you can break through.
            </p>
            <p>
              Reaching the B1 "intermediate" level is an achievable goal, and with a structured plan, you can get there in just six months. At the B1 level, you will be able to handle most travel situations, discuss familiar topics with ease, and begin to use English in a professional context. This guide provides a realistic, step-by-step plan to help you make that leap.
            </p>

            {/* Mindset */}
            <h2>The B1 Mindset: It's About Confidence, Not Perfection</h2>
            <p>
              The most significant difference between an A2 learner and a B1 learner is <strong>confidence and independence</strong>. An A2 learner is often hesitant, mentally translating from French or Darija and relying on memorized phrases. A B1 learner, on the other hand, can create their own sentences and navigate unexpected conversational turns.
            </p>
            <p>
              The key to this transition is embracing the fact that making mistakes is a natural and essential part of the learning process. Perfection is not the goal; communication is. Stop waiting to be perfect. Start speaking now.
            </p>

            {/* Weekly Schedule */}
            <h2>Your 6-Month Weekly Study Schedule</h2>
            <p>
              Consistency is the engine of progress. This repeatable weekly schedule is the core of your 6-month plan, designed to build a balanced skill set. Dedicate 30-45 minutes each day to focused study.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                <thead>
                  <tr className="bg-blue-50 dark:bg-blue-900/30">
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Day</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Focus</th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Monday</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Listening</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Listen to BBC 6 Minute English. Write down 5-7 new words.</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/30">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Tuesday</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Reading</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Read a short news article. Explain the main idea aloud.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Wednesday</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Grammar</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Focus on one B1 grammar point. Complete exercises.</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/30">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Thursday</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Writing</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Write a short paragraph (75-100 words) about your day.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Friday</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Speaking</strong></td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3"><strong>Your Fluentry 1-on-1 Session (Most Important!)</strong></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/30">
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Saturday</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Vocabulary</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Review all new vocabulary from the week using Quizlet or Anki.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 font-semibold">Sunday</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Fun English</td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">Watch a TV show or YouTube video in English (with subtitles).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Monthly Milestones */}
            <h2>Month-by-Month Milestones: How to Track Your Progress</h2>
            <p>
              This journey is a marathon, not a sprint. Here is what you can expect to achieve along the way:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded">
                <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Calendar size={20} className="text-blue-600" /> Months 1-2: Building Your Foundation
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Your primary goal is to master the weekly routine. By the end of this phase, you should feel more comfortable understanding slow, clear English and be able to form basic sentences with greater ease.
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-600 p-4 rounded">
                <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <TrendingUp size={20} className="text-indigo-600" /> Months 3-4: Starting to Speak More
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Your confidence will begin to blossom. You will find yourself capable of having simple, spontaneous conversations on familiar topics. Your grasp of B1 grammar will become more consistent.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-4 rounded">
                <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Target size={20} className="text-green-600" /> Months 5-6: Becoming Independent
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  In this final phase, you will be able to handle longer, more complex conversations and understand the main points of authentic English media like TV shows and movies. You are now ready to confidently take a B1 level test.
                </p>
              </div>
            </div>

            {/* Coach Advantage */}
            <h2>The Fluentry Advantage: Why a Coach is Your Secret Weapon</h2>
            <p>
              Following this plan on your own is possible, but a dedicated coach is the catalyst that accelerates your progress. A coach provides what apps and self-study cannot:
            </p>

            <ul>
              <li><strong>Personalized Feedback:</strong> A coach identifies and corrects your specific, recurring mistakes, whether in pronunciation or grammar.</li>
              <li><strong>Motivation and Accountability:</strong> Having a scheduled lesson with a real person who is invested in your success makes it much harder to quit.</li>
              <li><strong>Real Conversation Practice:</strong> This is the single most important factor in building fluency. A coach guides you through real-time, dynamic conversations that build confidence and adaptability.</li>
            </ul>

            {/* Conclusion */}
            <h2>Conclusion</h2>
            <p>
              Reaching the B1 level is a journey of consistent, daily effort. It is about building a system of habits that will carry you toward your goal. This plan provides the map, but you must take the steps.
            </p>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-2xl p-8 mt-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Ready to Start Your Journey to B1?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Don't just dream about speaking English confidently. Start your journey today. Book a free consultation with a Fluentry coach and get your personalized plan to reach B1 and beyond.
              </p>
              <Link
                href="/book-lesson"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg"
              >
                Book Your Free Consultation <ArrowRight size={18} />
              </Link>
            </div>

          </article>
        </div>
      </div>
    </>
  );
}
