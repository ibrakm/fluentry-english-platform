import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, RotateCcw, Volume2 } from "lucide-react";

interface Question {
  id: number;
  type: "grammar" | "gapfill" | "vocabulary" | "reading" | "writing" | "listening";
  question: string;
  options?: string[];
  correctAnswer?: number;
  correctText?: string;
  difficulty: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  passage?: string;
  audioUrl?: string;
}

const questions: Question[] = [
  // Grammar & Correction
  {
    id: 1,
    type: "grammar",
    question: "Choose the grammatically correct sentence:",
    options: [
      "She go to school every day",
      "She goes to school every day",
      "She going to school every day",
      "She gone to school every day",
    ],
    correctAnswer: 1,
    difficulty: "A1",
  },
  {
    id: 2,
    type: "grammar",
    question: "Which sentence is correct?",
    options: [
      "If I were you, I will do that",
      "If I was you, I would do that",
      "If I were you, I would do that",
      "If I am you, I would do that",
    ],
    correctAnswer: 2,
    difficulty: "B1",
  },
  {
    id: 3,
    type: "grammar",
    question: "Identify the correct use of the present perfect:",
    options: [
      "I have finished my work yesterday",
      "I finished my work since morning",
      "I have been working for three hours",
      "I am finishing my work now",
    ],
    correctAnswer: 2,
    difficulty: "B2",
  },

  // Gap Filling
  {
    id: 4,
    type: "gapfill",
    question: "Fill in the blank: 'She ___ to the cinema last night.'",
    options: ["go", "goes", "went", "going"],
    correctAnswer: 2,
    difficulty: "A1",
  },
  {
    id: 5,
    type: "gapfill",
    question: "Complete: 'I wish I ___ more time to study.'",
    options: ["have", "had", "would have", "having"],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 6,
    type: "gapfill",
    question:
      "Fill in: 'The company ___ significant growth despite the economic challenges.'",
    options: ["experienced", "has experienced", "is experiencing", "will experience"],
    correctAnswer: 1,
    difficulty: "B2",
  },

  // Vocabulary
  {
    id: 7,
    type: "vocabulary",
    question: "What does 'procrastinate' mean?",
    options: [
      "To work very hard",
      "To delay or postpone unnecessarily",
      "To plan ahead carefully",
      "To complete tasks quickly",
    ],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 8,
    type: "vocabulary",
    question: "Choose the word that best completes the sentence: 'His ___ behavior annoyed everyone.'",
    options: ["erratic", "systematic", "organized", "planned"],
    correctAnswer: 0,
    difficulty: "B2",
  },
  {
    id: 9,
    type: "vocabulary",
    question: "What is a synonym for 'meticulous'?",
    options: ["Careless", "Thorough and careful", "Quick", "Lazy"],
    correctAnswer: 1,
    difficulty: "C1",
  },

  // Reading Comprehension
  {
    id: 10,
    type: "reading",
    passage:
      "Climate change is one of the most pressing issues of our time. Rising temperatures are causing glaciers to melt and sea levels to rise. This threatens coastal communities and ecosystems. Scientists agree that human activities, particularly the burning of fossil fuels, are the primary cause.",
    question: "According to the passage, what is causing glaciers to melt?",
    options: [
      "Coastal communities",
      "Rising temperatures",
      "Fossil fuels",
      "Ecosystems",
    ],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 11,
    type: "reading",
    passage:
      "The Renaissance was a period of great cultural and intellectual achievement in Europe. Artists like Leonardo da Vinci and Michelangelo created masterpieces that still inspire us today. This era marked the transition from medieval to modern times.",
    question: "What does the passage suggest about the Renaissance?",
    options: [
      "It was a period of decline",
      "It was a period of great cultural achievement",
      "It only affected artists",
      "It had no lasting impact",
    ],
    correctAnswer: 1,
    difficulty: "B2",
  },

  // Writing (Sentence Construction)
  {
    id: 12,
    type: "writing",
    question: "Which sentence is the best written version?",
    options: [
      "The student studied hard because he want to pass the exam",
      "The student studied hard because he wanted to pass the exam",
      "The student studying hard because he wanted to pass the exam",
      "The student studied hardly because he wanted to pass the exam",
    ],
    correctAnswer: 1,
    difficulty: "A2",
  },
  {
    id: 13,
    type: "writing",
    question: "Choose the most appropriate way to express this idea:",
    options: [
      "Despite of the rain, we went to the park",
      "Although the rain, we went to the park",
      "Despite the rain, we went to the park",
      "In spite of the rain, we went to the park",
    ],
    correctAnswer: 2,
    difficulty: "B1",
  },

  // Listening (Text-based simulation)
  {
    id: 14,
    type: "listening",
    question:
      "Listen to this dialogue: 'Hi Sarah, how was your weekend?' 'It was great! I went hiking with my friends.' What did Sarah do last weekend?",
    options: ["Went to work", "Went hiking", "Stayed at home", "Went shopping"],
    correctAnswer: 1,
    difficulty: "A1",
  },
  {
    id: 15,
    type: "listening",
    question:
      "Listen: 'The conference will be held on March 15th at the Grand Hotel. Registration starts at 8:30 AM.' When does registration start?",
    options: ["8:00 AM", "8:30 AM", "9:00 AM", "March 15th"],
    correctAnswer: 1,
    difficulty: "A2",
  },
];

interface TestResult {
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  score: number;
  totalQuestions: number;
  percentage: number;
  sectionScores: {
    grammar: { correct: number; total: number };
    gapfill: { correct: number; total: number };
    vocabulary: { correct: number; total: number };
    reading: { correct: number; total: number };
    writing: { correct: number; total: number };
    listening: { correct: number; total: number };
  };
}

const getLevelDescription = (
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
): { title: string; description: string; course: string } => {
  const descriptions: Record<
    string,
    { title: string; description: string; course: string }
  > = {
    A1: {
      title: "Beginner",
      description:
        "You can understand and use very basic English. You can introduce yourself and answer simple questions about personal details.",
      course: "General English",
    },
    A2: {
      title: "Elementary",
      description:
        "You can communicate in simple, routine tasks. You can describe yourself, your family, and basic daily activities.",
      course: "General English",
    },
    B1: {
      title: "Intermediate",
      description:
        "You can handle most situations while traveling and discuss familiar topics. You can express opinions and explain reasons.",
      course: "Conversation Practice",
    },
    B2: {
      title: "Upper Intermediate",
      description:
        "You can interact fluently with native speakers. You can discuss complex topics and express nuanced opinions.",
      course: "Business English or Conversation Practice",
    },
    C1: {
      title: "Advanced",
      description:
        "You can express yourself fluently and spontaneously. You can use language flexibly for social, academic, and professional purposes.",
      course: "Business English or Exam Preparation",
    },
    C2: {
      title: "Mastery",
      description:
        "You have near-native proficiency. You can understand and produce sophisticated language in all contexts.",
      course: "Exam Preparation or Advanced Coaching",
    },
  };
  return descriptions[level];
};

const getQuestionTypeLabel = (
  type: "grammar" | "gapfill" | "vocabulary" | "reading" | "writing" | "listening"
): string => {
  const labels: Record<string, string> = {
    grammar: "Grammar & Correction",
    gapfill: "Gap Filling",
    vocabulary: "Vocabulary",
    reading: "Reading Comprehension",
    writing: "Writing",
    listening: "Listening",
  };
  return labels[type];
};

export default function ComprehensiveEnglishTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const handleStartTest = () => {
    setTestStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  const handleAnswerClick = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const percentage = Math.round((score / questions.length) * 100);
    let level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

    if (percentage <= 20) level = "A1";
    else if (percentage <= 40) level = "A2";
    else if (percentage <= 55) level = "B1";
    else if (percentage <= 70) level = "B2";
    else if (percentage <= 85) level = "C1";
    else level = "C2";

    // Calculate section scores
    const sectionScores = {
      grammar: { correct: 0, total: 0 },
      gapfill: { correct: 0, total: 0 },
      vocabulary: { correct: 0, total: 0 },
      reading: { correct: 0, total: 0 },
      writing: { correct: 0, total: 0 },
      listening: { correct: 0, total: 0 },
    };

    questions.forEach((q, idx) => {
      sectionScores[q.type].total += 1;
      if (selectedAnswers[idx] === q.correctAnswer) {
        sectionScores[q.type].correct += 1;
      }
    });

    setTestResult({
      level,
      score,
      totalQuestions: questions.length,
      percentage,
      sectionScores,
    });
    setShowResult(true);
  };

  const handleRetakeTest = () => {
    handleStartTest();
  };

  if (!testStarted) {
    return (
      <div className="space-y-8">
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive English Level Assessment
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Take this comprehensive 15-question test covering all essential English skills. The test assesses your proficiency across grammar, vocabulary, reading, writing, and listening.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <div className="text-blue-600 font-bold">✓</div>
              <div>
                <p className="font-semibold text-gray-900">6 Skill Sections</p>
                <p className="text-gray-600">Grammar, Gap Filling, Vocabulary, Reading, Writing, Listening</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-blue-600 font-bold">✓</div>
              <div>
                <p className="font-semibold text-gray-900">15 Questions</p>
                <p className="text-gray-600">Comprehensive assessment of your English skills</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-blue-600 font-bold">✓</div>
              <div>
                <p className="font-semibold text-gray-900">10-15 Minutes</p>
                <p className="text-gray-600">Quick but thorough assessment of your level</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-blue-600 font-bold">✓</div>
              <div>
                <p className="font-semibold text-gray-900">Detailed Results</p>
                <p className="text-gray-600">See your CEFR level and breakdown by skill section</p>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleStartTest}
          >
            Start the Test Now
          </Button>
        </Card>
      </div>
    );
  }

  if (showResult && testResult) {
    const levelInfo = getLevelDescription(testResult.level);
    return (
      <div className="space-y-8">
        <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Your Level: {levelInfo.title}
            </h2>
            <p className="text-6xl font-bold text-green-600 mb-4">
              {testResult.level}
            </p>
            <p className="text-xl text-gray-700">
              You scored {testResult.score} out of {testResult.totalQuestions} ({testResult.percentage}%)
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              What This Means
            </h3>
            <p className="text-gray-700 mb-6">{levelInfo.description}</p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Recommended Course
            </h3>
            <p className="text-lg text-blue-600 font-semibold mb-6">
              {levelInfo.course}
            </p>

            <p className="text-gray-600 text-sm">
              Based on your test results, we recommend starting with the course above. Your Fluentry coach will tailor lessons to your specific needs and learning pace.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                window.location.href = "/book-lesson";
              }}
            >
              Book Your First Lesson
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              onClick={handleRetakeTest}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake the Test
            </Button>
          </div>
        </Card>

        {/* Coaching Recommendation */}
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Personalized Learning Path
              </h3>
              <p className="text-gray-700 mb-4">
                Congratulations on completing the test! You've identified your current English level. Now it's time to take the next step and accelerate your progress with personalized coaching.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <div className="text-blue-600 font-bold text-lg">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Start From Your Level</p>
                    <p className="text-sm text-gray-600">We'll tailor lessons specifically for {testResult.level} level, ensuring you're neither bored nor overwhelmed</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-600 font-bold text-lg">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Guided Progress</p>
                    <p className="text-sm text-gray-600">Your coach will focus on your weak areas and build on your strengths to help you advance steadily</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-600 font-bold text-lg">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Real-World Communication</p>
                    <p className="text-sm text-gray-600">Move beyond textbooks to speak naturally and confidently in real-life situations</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-600 font-bold text-lg">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Flexible & Convenient</p>
                    <p className="text-sm text-gray-600">One-on-one lessons via Google Meet, scheduled at times that work for you</p>
                  </div>
                </div>
              </div>
              <a href="/book-lesson">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Book Your First Coaching Lesson Now
                </Button>
              </a>
            </div>
          </div>
        </Card>

        {/* Section Breakdown */}
        <Card className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Your Performance by Section
          </h3>
          <div className="space-y-4">
            {Object.entries(testResult.sectionScores).map(([section, scores]) => (
              <div key={section}>
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-900">
                    {getQuestionTypeLabel(
                      section as
                        | "grammar"
                        | "gapfill"
                        | "vocabulary"
                        | "reading"
                        | "writing"
                        | "listening"
                    )}
                  </p>
                  <p className="text-sm font-bold text-blue-600">
                    {scores.correct}/{scores.total}
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{
                      width: `${(scores.correct / scores.total) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Answer Review */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Your Answers
          </h3>
          <div className="space-y-3">
            {questions.map((q, idx) => (
              <div key={q.id} className="flex gap-3 pb-3 border-b last:border-b-0">
                <div className="flex-shrink-0">
                  {selectedAnswers[idx] === q.correctAnswer ? (
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
                      ✗
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">
                    [{getQuestionTypeLabel(q.type)}] {q.question}
                  </p>
                  {q.options && (
                    <>
                      <p className="text-sm text-gray-600">
                        Your answer: {q.options[selectedAnswers[idx]]}
                      </p>
                      {selectedAnswers[idx] !== q.correctAnswer && (
                        <p className="text-sm text-green-600">
                          Correct answer: {q.options[q.correctAnswer!]}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-blue-600">
              {getQuestionTypeLabel(question.type)} | Difficulty: {question.difficulty}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Passage for Reading Questions */}
        {question.passage && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-blue-600">
            <p className="text-gray-700 italic">{question.passage}</p>
          </div>
        )}

        {/* Listening Indicator */}
        {question.type === "listening" && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center gap-3 border-l-4 border-blue-600">
            <Volume2 className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-700">
              <strong>Audio Transcript:</strong> {question.question}
            </p>
          </div>
        )}

        {/* Question Text */}
        {!question.passage && question.type !== "listening" && (
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{question.question}</h3>
        )}

        {question.type === "listening" && (
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {question.question.split("Listen:")[1]?.trim() || question.question}
          </h3>
        )}

        {/* Answer Options */}
        {question.options && (
          <div className="space-y-3 mb-8">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerClick(idx)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswers[currentQuestion] === idx
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === idx
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedAnswers[currentQuestion] === idx && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="font-medium text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        <Button
          size="lg"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleNextQuestion}
          disabled={!isAnswered}
        >
          {currentQuestion === questions.length - 1 ? "See Results" : "Next Question"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </Card>
    </div>
  );
}

