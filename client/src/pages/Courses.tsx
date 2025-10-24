import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { BookOpen, Users, Briefcase, Award } from "lucide-react";

interface Course {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  audience: string;
  outcomes: string[];
  cta: string;
}

const courses: Course[] = [
  {
    id: "general-english",
    icon: <BookOpen className="w-8 h-8" />,
    title: "General English",
    description: "Build a strong foundation in all English skills",
    audience: "Students and adults who need to improve their overall English skills for travel, daily life, or future studies.",
    outcomes: [
      "Master all four skills (reading, writing, listening, speaking)",
      "Build a strong foundation in grammar",
      "Expand practical vocabulary",
    ],
    cta: "Start General English",
  },
  {
    id: "conversation-practice",
    icon: <Users className="w-8 h-8" />,
    title: "Conversation Practice",
    description: "Speak fluently and naturally in any situation",
    audience: "Learners who understand English but struggle to speak fluently and spontaneously.",
    outcomes: [
      "Eliminate hesitation and practice speaking on a wide range of topics",
      "Improve pronunciation and flow",
      "Master natural idiomatic expression",
    ],
    cta: "Join a Conversation Group",
  },
  {
    id: "business-english",
    icon: <Briefcase className="w-8 h-8" />,
    title: "Business English",
    description: "Excel in professional communication and career growth",
    audience: "Professionals and entrepreneurs aiming to use English confidently in the workplace.",
    outcomes: [
      "Master professional communication: emails, presentations, meetings, and negotiation skills",
      "Learn industry-specific vocabulary",
      "Understand corporate etiquette",
    ],
    cta: "Boost Your Career",
  },
  {
    id: "exam-prep",
    icon: <Award className="w-8 h-8" />,
    title: "Exam Preparation (IELTS/TOEFL)",
    description: "Achieve your target score and study abroad",
    audience: "Students planning to study abroad or needing an official English certification.",
    outcomes: [
      "Develop test-taking strategies and time management skills",
      "Practice all sections of the exam",
      "Get targeted feedback and mock tests",
    ],
    cta: "Get Exam Ready",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Courses Designed for Your Life and Goals
          </h1>
          <p className="text-lg text-blue-100">
            Whether you're starting from scratch, aiming for a promotion, or preparing for a major exam, we have the perfect program to get you there.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="p-8 hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-blue-600">{course.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 font-semibold">{course.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Who It's For:</h4>
                  <p className="text-gray-600">{course.audience}</p>
                </div>

                <div className="mb-6 flex-1">
                  <h4 className="font-semibold text-gray-900 mb-3">Learning Outcomes:</h4>
                  <ul className="space-y-2">
                    {course.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-600">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/book-lesson">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6">
                    {course.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Take our quick, free AI-powered English test to find your exact level and get a personalized course recommendation.
          </p>
          <a
            href="https://www.efset.org/quick-check/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Take the Free Level Test
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

