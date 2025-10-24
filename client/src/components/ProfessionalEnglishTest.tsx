import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, RotateCcw, BookOpen, Zap } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

const quickTestQuestions: Question[] = [
  {
    id: 1,
    question: "What is your name?",
    options: ["My name is John", "I am John", "John is me", "Me John"],
    correctAnswer: 0,
    difficulty: "A1",
  },
  {
    id: 2,
    question: "Where do you live?",
    options: ["I live in Morocco", "I am living in Morocco", "In Morocco I live", "Morocco I live in"],
    correctAnswer: 0,
    difficulty: "A1",
  },
  {
    id: 3,
    question: "What time is it?",
    options: ["It is 3 o'clock", "Is 3 o'clock", "3 o'clock is", "The time is 3 o'clock"],
    correctAnswer: 0,
    difficulty: "A1",
  },
  {
    id: 4,
    question: "She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correctAnswer: 1,
    difficulty: "A2",
  },
  {
    id: 5,
    question: "I have ___ this movie before.",
    options: ["see", "saw", "seen", "seeing"],
    correctAnswer: 2,
    difficulty: "A2",
  },
  {
    id: 6,
    question: "If I ___ you, I would accept the job.",
    options: ["am", "was", "were", "be"],
    correctAnswer: 2,
    difficulty: "B1",
  },
  {
    id: 7,
    question: "What does 'ambitious' mean?",
    options: ["Lazy", "Determined to succeed", "Confused", "Tired"],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 8,
    question: "Despite ___ the rain, we went to the park.",
    options: ["of", "the", "a", "an"],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 9,
    question: "The company has ___ significant growth this year.",
    options: ["experienced", "experience", "experiencing", "experiences"],
    correctAnswer: 0,
    difficulty: "B2",
  },
  {
    id: 10,
    question: "Which sentence is most appropriate for a formal email?",
    options: [
      "Hi, I wanna talk about the project",
      "I would like to discuss the project with you",
      "Yo, let's chat about the project",
      "The project, we need to talk",
    ],
    correctAnswer: 1,
    difficulty: "C1",
  },
];

const comprehensiveTestQuestions: Question[] = [
  ...quickTestQuestions,
  {
    id: 11,
    question: "The phenomenon ___ by scientists for decades.",
    options: ["has been studied", "has studied", "is studying", "studies"],
    correctAnswer: 0,
    difficulty: "C1",
  },
  {
    id: 12,
    question: "What is the best synonym for 'meticulous'?",
    options: ["Careless", "Thorough and careful", "Quick", "Disorganized"],
    correctAnswer: 1,
    difficulty: "C1",
  },
  {
    id: 13,
    question: "Reading passage: 'Climate change poses unprecedented challenges...' What is the main idea?",
    options: [
      "Climate is stable",
      "Climate change presents new challenges",
      "Weather is predictable",
      "Temperature doesn't affect nature",
    ],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 14,
    question: "Which word completes the sentence? 'His ___ behavior surprised everyone.'",
    options: ["erratic", "systematic", "organized", "planned"],
    correctAnswer: 0,
    difficulty: "C1",
  },
  {
    id: 15,
    question: "Choose the correct form: 'Had I known, I ___ differently.'",
    options: ["would act", "would have acted", "act", "acted"],
    correctAnswer: 1,
    difficulty: "C2",
  },
];

interface TestResult {
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  score: number;
  totalQuestions: number;
  percentage: number;
  testType: "quick" | "comprehensive";
}

const getLevelInfo = (
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
): { title: string; description: string; color: string } => {
  const levels: Record<
    string,
    { title: string; description: string; color: string }
  > = {
    A1: {
      title: "Beginner",
      description: "You can understand and use very basic English in familiar situations.",
      color: "bg-blue-500",
    },
    A2: {
      title: "Elementary",
      description: "You can communicate in simple, routine tasks and describe basic information.",
      color: "bg-cyan-500",
    },
    B1: {
      title: "Intermediate",
      description: "You can handle most situations while traveling and discuss familiar topics.",
      color: "bg-green-500",
    },
    B2: {
      title: "Upper Intermediate",
      description: "You can interact fluently with native speakers and discuss complex topics.",
      color: "bg-emerald-500",
    },
    C1: {
      title: "Advanced",
      description: "You can express yourself fluently and use language flexibly for professional purposes.",
      color: "bg-purple-500",
    },
    C2: {
      title: "Mastery",
      description: "You have near-native proficiency and can understand sophisticated language.",
      color: "bg-indigo-500",
    },
  };
  return levels[level];
};

export default function ProfessionalEnglishTest() {
  const [stage, setStage] = useState<"selection" | "testing" | "results">("selection");
  const [testType, setTestType] = useState<"quick" | "comprehensive" | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const questions = testType === "quick" ? quickTestQuestions : comprehensiveTestQuestions;

  const handleStartTest = (type: "quick" | "comprehensive") => {
    setTestType(type);
    setStage("testing");
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
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
      finishTest();
    }
  };

  const finishTest = () => {
    const percentage = Math.round((score / questions.length) * 100);
    let level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

    if (percentage <= 20) level = "A1";
    else if (percentage <= 40) level = "A2";
    else if (percentage <= 55) level = "B1";
    else if (percentage <= 70) level = "B2";
    else if (percentage <= 85) level = "C1";
    else level = "C2";

    setTestResult({
      level,
      score,
      totalQuestions: questions.length,
      percentage,
      testType: testType!,
    });
    setStage("results");
  };

  const handleRetakeTest = () => {
    setStage("selection");
    setTestType(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setTestResult(null);
  };

  // Selection Stage
  if (stage === "selection") {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Test Your English Level</h1>
          <p className="text-xl text-gray-600">
            Choose a test to find out your current English proficiency level
          </p>
        </div>

        {/* Test Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Test */}
          <Card className="p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Quick Test</h2>
              </div>
              <p className="text-gray-700">
                Perfect for beginners who want a quick assessment of their English level.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✓ 10 questions</p>
                <p>✓ 5-10 minutes</p>
                <p>✓ Multiple choice format</p>
                <p>✓ Instant results</p>
              </div>
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => handleStartTest("quick")}
              >
                Start Quick Test
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Comprehensive Test */}
          <Card className="p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Comprehensive Test</h2>
              </div>
              <p className="text-gray-700">
                For a detailed assessment covering all aspects of English proficiency.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✓ 15 questions</p>
                <p>✓ 15-20 minutes</p>
                <p>✓ All skill levels</p>
                <p>✓ Detailed breakdown</p>
              </div>
              <Button
                size="lg"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => handleStartTest("comprehensive")}
              >
                Start Comprehensive Test
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Info Section */}
        <Card className="p-6 bg-blue-50 border-blue-200">
          <h3 className="font-bold text-gray-900 mb-2">About Our Test</h3>
          <p className="text-gray-700 text-sm">
            Our English level test is based on the CEFR (Common European Framework of Reference) standards. After completing the test, you'll receive your level (A1-C2) and personalized recommendations for your learning path.
          </p>
        </Card>
      </div>
    );
  }

  // Testing Stage
  if (stage === "testing" && testType) {
    const question = questions[currentQuestion];
    const isAnswered = selectedAnswers[currentQuestion] !== undefined;
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-blue-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100">
          <div className="space-y-6">
            {/* Difficulty Badge */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                Level: {question.difficulty}
              </span>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold text-gray-900">{question.question}</h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerClick(idx)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all font-medium ${
                    selectedAnswers[currentQuestion] === idx
                      ? "border-blue-600 bg-blue-50 text-blue-900"
                      : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedAnswers[currentQuestion] === idx
                          ? "border-blue-600 bg-blue-600"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedAnswers[currentQuestion] === idx && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <Button
          size="lg"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={handleNextQuestion}
          disabled={!isAnswered}
        >
          {currentQuestion === questions.length - 1 ? "Finish Test" : "Next Question"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }

  // Results Stage
  if (stage === "results" && testResult) {
    const levelInfo = getLevelInfo(testResult.level);

    return (
      <div className="space-y-8">
        {/* Results Header */}
        <div className={`${levelInfo.color} text-white rounded-2xl p-12 text-center space-y-4`}>
          <p className="text-lg font-semibold opacity-90">Your English Level</p>
          <h1 className="text-7xl font-bold">{testResult.level}</h1>
          <p className="text-2xl font-semibold">{levelInfo.title}</p>
          <p className="text-lg opacity-90">
            You scored {testResult.score} out of {testResult.totalQuestions} ({testResult.percentage}%)
          </p>
        </div>

        {/* Level Description */}
        <Card className="p-8 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means</h2>
          <p className="text-lg text-gray-700 mb-6">{levelInfo.description}</p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-gray-700">
              <strong>Next Step:</strong> Based on your level, we recommend starting with our{" "}
              <strong>{testResult.level === "A1" || testResult.level === "A2" ? "General English" : testResult.level === "B1" || testResult.level === "B2" ? "Conversation Practice" : "Business English"}</strong>{" "}
              course. Your coach will tailor lessons specifically for your level and help you progress steadily.
            </p>
          </div>
        </Card>

        {/* Coaching Recommendation */}
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <h2 className="text-2xl font-bold mb-4">Ready to Improve Your English?</h2>
          <p className="text-lg mb-6 opacity-90">
            Now that you know your level, it's time to accelerate your progress with personalized one-on-one coaching. Our experienced coaches will guide you from your current level to fluency.
          </p>
          <div className="space-y-3">
            <a href="/book-lesson">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold">
                Book Your First Lesson Now
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white text-white hover:bg-white/10"
              onClick={handleRetakeTest}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake Test
            </Button>
          </div>
        </Card>

        {/* Test Details */}
        <Card className="p-6 bg-gray-50">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Test Details</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Test Type</p>
              <p className="font-bold text-gray-900 capitalize">{testResult.testType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Questions</p>
              <p className="font-bold text-gray-900">{testResult.totalQuestions}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Correct Answers</p>
              <p className="font-bold text-gray-900">{testResult.score}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Percentage</p>
              <p className="font-bold text-gray-900">{testResult.percentage}%</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return null;
}

