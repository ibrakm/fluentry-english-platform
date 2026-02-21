import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  RotateCcw,
  BookOpen,
  Zap,
  Lock,
  Mail,
  Phone,
  User,
  CheckCircle2,
  Trophy,
  ArrowRight,
  Star,
} from "lucide-react";

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
): { title: string; description: string; color: string; bgColor: string; nextStep: string; recommendation: string } => {
  const levels: Record<string, { title: string; description: string; color: string; bgColor: string; nextStep: string; recommendation: string }> = {
    A1: {
      title: "Beginner",
      description: "You can understand and use very basic English in familiar situations. You are at the very beginning of your English journey.",
      color: "bg-blue-500",
      bgColor: "from-blue-500 to-blue-700",
      nextStep: "Start with our Starter Package — designed specifically for beginners like you.",
      recommendation: "Starter Package (45 min/lesson)",
    },
    A2: {
      title: "Elementary",
      description: "You can communicate in simple, routine tasks and describe basic information about yourself and your surroundings.",
      color: "bg-cyan-500",
      bgColor: "from-cyan-500 to-cyan-700",
      nextStep: "Our Starter Package will build your confidence and vocabulary rapidly.",
      recommendation: "Starter Package (45 min/lesson)",
    },
    B1: {
      title: "Intermediate",
      description: "You can handle most situations while traveling and discuss familiar topics. You are ready to move to the next level!",
      color: "bg-green-500",
      bgColor: "from-green-500 to-emerald-600",
      nextStep: "Our Standard Package is perfect for you — focused on fluency and conversation.",
      recommendation: "Standard Package (1 hour/lesson)",
    },
    B2: {
      title: "Upper Intermediate",
      description: "You can interact fluently with native speakers and discuss complex topics with confidence.",
      color: "bg-emerald-500",
      bgColor: "from-emerald-500 to-teal-600",
      nextStep: "Our Premium Package will take you to professional-level fluency.",
      recommendation: "Premium Package (1 hour/lesson)",
    },
    C1: {
      title: "Advanced",
      description: "You can express yourself fluently and use language flexibly for professional, academic, and social purposes.",
      color: "bg-purple-500",
      bgColor: "from-purple-500 to-purple-700",
      nextStep: "Our Premium Package will help you achieve near-native mastery.",
      recommendation: "Premium Package (1 hour/lesson)",
    },
    C2: {
      title: "Mastery",
      description: "You have near-native proficiency and can understand sophisticated language with ease. Excellent work!",
      color: "bg-indigo-500",
      bgColor: "from-indigo-500 to-indigo-700",
      nextStep: "Our Premium Package will help you perfect your professional English.",
      recommendation: "Premium Package (1 hour/lesson)",
    },
  };
  return levels[level];
};

const COACH_WHATSAPP = "212672580932";

function buildWhatsAppNotification(
  studentName: string,
  studentEmail: string,
  studentPhone: string,
  level: string,
  levelTitle: string,
  score: number,
  total: number,
  percentage: number,
  recommendation: string
): string {
  const message = [
    `🎯 NEW STUDENT LEAD — Fluentry Test`,
    ``,
    `👤 Name: ${studentName}`,
    studentEmail ? `📧 Email: ${studentEmail}` : ``,
    studentPhone ? `📱 WhatsApp: ${studentPhone}` : ``,
    ``,
    `📊 Test Result: ${level} — ${levelTitle}`,
    `✅ Score: ${score}/${total} (${percentage}%)`,
    `💡 Recommendation: ${recommendation}`,
    ``,
    `👉 Follow up with this student now!`,
  ]
    .filter((line) => line !== undefined)
    .join("\n");
  return `https://wa.me/${COACH_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function ProfessionalEnglishTest() {
  const [stage, setStage] = useState<"selection" | "testing" | "lead-capture" | "results">("selection");
  const [testType, setTestType] = useState<"quick" | "comprehensive" | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  // Lead capture form state
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadError, setLeadError] = useState("");

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
      // Calculate result but show lead capture FIRST
      const finalScore = selectedAnswers.reduce((acc, answer, idx) => {
        return acc + (answer === questions[idx].correctAnswer ? 1 : 0);
      }, 0);
      const percentage = Math.round((finalScore / questions.length) * 100);
      let level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
      if (percentage <= 20) level = "A1";
      else if (percentage <= 40) level = "A2";
      else if (percentage <= 55) level = "B1";
      else if (percentage <= 70) level = "B2";
      else if (percentage <= 85) level = "C1";
      else level = "C2";

      setTestResult({
        level,
        score: finalScore,
        totalQuestions: questions.length,
        percentage,
        testType: testType!,
      });
      setStage("lead-capture");
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError("");

    if (!leadName.trim()) {
      setLeadError("Please enter your name.");
      return;
    }
    if (!leadEmail.trim() && !leadPhone.trim()) {
      setLeadError("Please enter at least your email or WhatsApp number.");
      return;
    }

    setLeadSubmitting(true);

    // Build WhatsApp notification link for coach and open it
    if (testResult) {
      const levelInfo = getLevelInfo(testResult.level);
      const waLink = buildWhatsAppNotification(
        leadName,
        leadEmail,
        leadPhone,
        testResult.level,
        levelInfo.title,
        testResult.score,
        testResult.totalQuestions,
        testResult.percentage,
        levelInfo.recommendation
      );
      // Open WhatsApp notification in a new tab (coach gets notified)
      window.open(waLink, "_blank", "noopener,noreferrer");
    }

    // Small delay for UX
    await new Promise((r) => setTimeout(r, 800));
    setLeadSubmitting(false);
    setStage("results");
  };

  const handleRetakeTest = () => {
    setStage("selection");
    setTestType(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setTestResult(null);
    setLeadName("");
    setLeadEmail("");
    setLeadPhone("");
  };

  // ─── SELECTION STAGE ────────────────────────────────────────────────────────
  if (stage === "selection") {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-2">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            100% Free — No Registration Required
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Discover Your True English Level
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take our professional CEFR assessment and receive a <strong>personalized coaching plan</strong> sent directly to you.
          </p>
        </div>

        {/* Test Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Test */}
          <Card className="p-8 border-2 border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-blue-100 group">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Quick Test</h2>
                  <p className="text-blue-600 text-sm font-medium">5–10 minutes</p>
                </div>
              </div>
              <p className="text-gray-700">
                Perfect for a fast and accurate snapshot of your English level.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> 10 carefully selected questions</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Covers A1 to C1 levels</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Personalized result sent to you</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Free coaching recommendation</p>
              </div>
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all group-hover:scale-[1.02]"
                onClick={() => handleStartTest("quick")}
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Quick Test — It's Free!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* Comprehensive Test */}
          <Card className="p-8 border-2 border-purple-200 hover:border-purple-500 hover:shadow-xl transition-all bg-gradient-to-br from-purple-50 to-purple-100 group relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST ACCURATE
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Full Assessment</h2>
                  <p className="text-purple-600 text-sm font-medium">15–20 minutes</p>
                </div>
              </div>
              <p className="text-gray-700">
                A thorough assessment covering all aspects of English proficiency.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> 15 in-depth questions</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Covers all levels A1 to C2</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Detailed breakdown by skill</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" /> Full personalized coaching plan</p>
              </div>
              <Button
                size="lg"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-all group-hover:scale-[1.02]"
                onClick={() => handleStartTest("comprehensive")}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Take Full Assessment — Free!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Trust Badge */}
        <Card className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">What happens after the test?</h3>
              <p className="text-gray-700 text-sm mt-1">
                After completing the test, you'll enter your contact details and receive your <strong>CEFR level result + a personalized coaching recommendation</strong> from Mr. Ibrahim K. directly to your email or WhatsApp. <strong>No spam, ever.</strong>
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // ─── TESTING STAGE ──────────────────────────────────────────────────────────
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
            <span className="text-sm font-semibold text-blue-600">{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 shadow-md">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                Level: {question.difficulty}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{question.question}</h2>
            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerClick(idx)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all font-medium ${
                    selectedAnswers[currentQuestion] === idx
                      ? "border-blue-600 bg-blue-50 text-blue-900 shadow-md"
                      : "border-gray-200 bg-white text-gray-900 hover:border-blue-300 hover:bg-blue-50/50"
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

        {/* Next Button */}
        <Button
          size="lg"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-6 shadow-lg disabled:opacity-40"
          onClick={handleNextQuestion}
          disabled={!isAnswered}
        >
          {currentQuestion === questions.length - 1 ? (
            <>
              <Trophy className="mr-2 h-5 w-5" />
              Finish & Get My Results!
            </>
          ) : (
            <>
              Next Question
              <ChevronRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
        {!isAnswered && (
          <p className="text-center text-sm text-gray-500">Please select an answer to continue</p>
        )}
      </div>
    );
  }

  // ─── LEAD CAPTURE STAGE ─────────────────────────────────────────────────────
  if (stage === "lead-capture") {
    return (
      <div className="space-y-6 max-w-lg mx-auto">
        {/* Teaser — show locked result */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl p-8 text-center space-y-3 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-2xl">
            <Lock className="w-10 h-10 mb-3 text-white/90" />
            <p className="text-white font-bold text-lg">Your result is ready!</p>
            <p className="text-white/80 text-sm">Enter your details below to unlock it</p>
          </div>
          <p className="text-lg font-semibold opacity-50">Your English Level</p>
          <h1 className="text-8xl font-bold opacity-20 blur-sm">??</h1>
          <p className="text-2xl font-semibold opacity-50">Loading...</p>
        </div>

        {/* Lead Form */}
        <Card className="p-8 border-2 border-blue-200 shadow-xl">
          <div className="space-y-5">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">You've Completed the Test!</h2>
              <p className="text-gray-600">
                Enter your details to unlock your <strong>CEFR level result</strong> and receive a <strong>free personalized coaching plan</strong> from Mr. Ibrahim K.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="e.g. Youssef El Amrani"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-400 transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 placeholder-gray-400 transition-colors"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-600" />
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  placeholder="+212 6XX XXX XXX"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 text-gray-900 placeholder-gray-400 transition-colors"
                />
              </div>

              {leadError && (
                <p className="text-red-600 text-sm font-medium bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                  {leadError}
                </p>
              )}

              <p className="text-xs text-gray-500 text-center">
                🔒 Your information is 100% private. We will never share it with anyone.
              </p>

              <Button
                type="submit"
                size="lg"
                disabled={leadSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg py-6 shadow-xl hover:shadow-2xl transition-all disabled:opacity-60"
              >
                {leadSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Sending your results...
                  </>
                ) : (
                  <>
                    <Trophy className="mr-2 h-5 w-5" />
                    Unlock My Results Now!
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    );
  }

  // ─── RESULTS STAGE ──────────────────────────────────────────────────────────
  if (stage === "results" && testResult) {
    const levelInfo = getLevelInfo(testResult.level);

    return (
      <div className="space-y-8">
        {/* Congratulations Banner */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-bold">
            <CheckCircle2 className="w-5 h-5" />
            Test Complete! Your results are below.
          </div>
        </div>

        {/* Results Header */}
        <div className={`bg-gradient-to-br ${levelInfo.bgColor} text-white rounded-2xl p-12 text-center space-y-4 shadow-xl`}>
          <p className="text-lg font-semibold opacity-90">Your Official CEFR Level</p>
          <h1 className="text-8xl font-bold drop-shadow-lg">{testResult.level}</h1>
          <p className="text-3xl font-bold">{levelInfo.title}</p>
          <div className="flex items-center justify-center gap-2 bg-white/20 rounded-full px-6 py-2 w-fit mx-auto">
            <Trophy className="w-5 h-5" />
            <p className="text-lg font-semibold">
              {testResult.score}/{testResult.totalQuestions} correct — {testResult.percentage}%
            </p>
          </div>
        </div>

        {/* What This Means */}
        <Card className="p-8 border-2 border-gray-200 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What This Means For You</h2>
          <p className="text-lg text-gray-700 mb-5">{levelInfo.description}</p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl">
            <p className="text-gray-800 font-medium">
              <strong>🎯 Coach's Recommendation:</strong> {levelInfo.nextStep}
            </p>
          </div>
        </Card>

        {/* Confirmation Banner */}
        {(leadEmail || leadPhone) && (
          <Card className="p-5 bg-green-50 border-green-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <p className="text-green-800 font-medium text-sm">
                💬 Your details have been sent to Mr. Ibrahim K. He will contact you on{" "}
                <strong>{leadPhone || leadEmail}</strong> very soon. Check your WhatsApp!
              </p>
            </div>
          </Card>
        )}

        {/* CTA Card */}
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
          <h2 className="text-2xl font-bold mb-3">Ready to Reach the Next Level?</h2>
          <p className="text-lg mb-6 opacity-90">
            Mr. Ibrahim K. will create a personalized lesson plan based on your <strong>{testResult.level} — {levelInfo.title}</strong> level. Start your journey today!
          </p>
          <div className="space-y-3">
            <a href="/book-lesson">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg py-6 shadow-lg">
                <ArrowRight className="mr-2 h-5 w-5" />
                Book Your First Lesson Now — Spots Are Limited!
              </Button>
            </a>
            <a
              href={`https://wa.me/212672580932?text=Hello%20Mr.%20Ibrahim!%20I%20just%20took%20the%20Fluentry%20English%20test%20and%20got%20${testResult.level}%20(${levelInfo.title}).%20I%27d%20like%20to%20book%20a%20lesson.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6 shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Message Mr. Ibrahim on WhatsApp
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white text-white hover:bg-white/10 font-medium"
              onClick={handleRetakeTest}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake the Test
            </Button>
          </div>
        </Card>

        {/* Test Details */}
        <Card className="p-6 bg-gray-50 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your Test Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-white rounded-xl border">
              <p className="text-xs text-gray-500 mb-1">Test Type</p>
              <p className="font-bold text-gray-900 capitalize">{testResult.testType}</p>
            </div>
            <div className="text-center p-3 bg-white rounded-xl border">
              <p className="text-xs text-gray-500 mb-1">Questions</p>
              <p className="font-bold text-gray-900">{testResult.totalQuestions}</p>
            </div>
            <div className="text-center p-3 bg-white rounded-xl border">
              <p className="text-xs text-gray-500 mb-1">Correct</p>
              <p className="font-bold text-gray-900">{testResult.score}</p>
            </div>
            <div className="text-center p-3 bg-white rounded-xl border">
              <p className="text-xs text-gray-500 mb-1">Score</p>
              <p className="font-bold text-gray-900">{testResult.percentage}%</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return null;
}
