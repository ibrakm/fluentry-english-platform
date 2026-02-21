import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, RotateCcw, BookOpen, Zap, Headphones, FileText, AlertCircle, Lock, CheckCircle } from "lucide-react";

interface Question {
  id: number;
  type: "grammar" | "vocabulary" | "reading" | "listening" | "error_correction" | "register";
  question: string;
  passage?: string;
  options: string[];
  correctAnswer: number;
  difficulty: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

interface TestResult {
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  score: number;
  totalQuestions: number;
  percentage: number;
  testType: "quick" | "comprehensive";
}

interface LeadData {
  name: string;
  email: string;
  phone: string;
}

// ─── QUICK TEST (10 questions) ───────────────────────────────────────────────
const quickTestQuestions: Question[] = [
  {
    id: 1,
    type: "grammar",
    question: "She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    correctAnswer: 1,
    difficulty: "A2",
  },
  {
    id: 2,
    type: "grammar",
    question: "I have ___ this movie before.",
    options: ["see", "saw", "seen", "seeing"],
    correctAnswer: 2,
    difficulty: "A2",
  },
  {
    id: 3,
    type: "grammar",
    question: "If I ___ you, I would accept the job.",
    options: ["am", "was", "were", "be"],
    correctAnswer: 2,
    difficulty: "B1",
  },
  {
    id: 4,
    type: "vocabulary",
    question: "What does 'ambitious' mean?",
    options: ["Lazy", "Determined to succeed", "Confused", "Tired"],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 5,
    type: "error_correction",
    question: "Find the mistake: 'She don't like coffee in the mornings.'",
    options: ["She → Her", "'don't' should be 'doesn't'", "'like' should be 'likes'", "No mistake"],
    correctAnswer: 1,
    difficulty: "A2",
  },
  {
    id: 6,
    type: "reading",
    passage: "Many companies now allow employees to work from home. Studies show that remote workers are often more productive because they have fewer distractions. However, some employees feel isolated and miss the social interaction of an office environment.",
    question: "According to the passage, why are remote workers often more productive?",
    options: [
      "They earn more money",
      "They have fewer distractions",
      "They work longer hours",
      "They have better equipment",
    ],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 7,
    type: "grammar",
    question: "The report ___ by the manager before the meeting.",
    options: ["was written", "wrote", "has written", "writing"],
    correctAnswer: 0,
    difficulty: "B2",
  },
  {
    id: 8,
    type: "vocabulary",
    question: "Choose the word closest in meaning to 'meticulous':",
    options: ["Careless", "Very careful and precise", "Generous", "Aggressive"],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 9,
    type: "register",
    question: "Which sentence is most appropriate for a formal business email?",
    options: [
      "Hey! Just wanted to check in about the thing we talked about.",
      "I am writing to follow up on our previous discussion regarding the proposal.",
      "So, did you get my last message? What do you think?",
      "Can't wait to hear back from you, it's super urgent!",
    ],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 10,
    type: "grammar",
    question: "Had she known about the problem, she ___ earlier.",
    options: ["would have left", "would leave", "will leave", "had left"],
    correctAnswer: 0,
    difficulty: "C1",
  },
];

// ─── COMPREHENSIVE TEST (25 questions) ──────────────────────────────────────
const comprehensiveTestQuestions: Question[] = [
  // Grammar (A1–A2)
  {
    id: 1,
    type: "grammar",
    question: "What ___ your name?",
    options: ["is", "are", "am", "be"],
    correctAnswer: 0,
    difficulty: "A1",
  },
  {
    id: 2,
    type: "grammar",
    question: "They ___ football every weekend.",
    options: ["plays", "play", "playing", "played"],
    correctAnswer: 1,
    difficulty: "A1",
  },
  {
    id: 3,
    type: "grammar",
    question: "I ___ to the market yesterday.",
    options: ["go", "goes", "went", "gone"],
    correctAnswer: 2,
    difficulty: "A2",
  },
  {
    id: 4,
    type: "error_correction",
    question: "Find the mistake: 'He don't speak English very well.'",
    options: ["He → Him", "'don't' should be 'doesn't'", "'speak' should be 'speaks'", "No mistake"],
    correctAnswer: 1,
    difficulty: "A2",
  },
  {
    id: 5,
    type: "grammar",
    question: "She has been working here ___ five years.",
    options: ["since", "for", "during", "while"],
    correctAnswer: 1,
    difficulty: "B1",
  },
  // Vocabulary (B1–B2)
  {
    id: 6,
    type: "vocabulary",
    question: "What does 'negotiate' mean?",
    options: [
      "To refuse an offer",
      "To discuss something to reach an agreement",
      "To sign a contract",
      "To cancel a meeting",
    ],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 7,
    type: "vocabulary",
    question: "Choose the correct word: 'The new policy will ___ all employees.'",
    options: ["effect", "affect", "infect", "reflect"],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 8,
    type: "grammar",
    question: "If I ___ more time, I would learn another language.",
    options: ["have", "had", "would have", "will have"],
    correctAnswer: 1,
    difficulty: "B1",
  },
  // Reading Comprehension (B1)
  {
    id: 9,
    type: "reading",
    passage: "Morocco has seen a significant increase in English language learning over the past decade. Young professionals, in particular, recognize that English is essential for career advancement in international companies. Many universities now offer courses taught entirely in English, and private language schools have seen record enrollment numbers.",
    question: "According to the passage, why do young professionals in Morocco learn English?",
    options: [
      "Because it is required by the government",
      "Because it is essential for career advancement",
      "Because French is no longer spoken",
      "Because it is easier than Arabic",
    ],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 10,
    type: "reading",
    passage: "Morocco has seen a significant increase in English language learning over the past decade. Young professionals, in particular, recognize that English is essential for career advancement in international companies. Many universities now offer courses taught entirely in English, and private language schools have seen record enrollment numbers.",
    question: "What change has happened in Moroccan universities?",
    options: [
      "They no longer teach French",
      "They have reduced tuition fees",
      "Some now offer courses taught entirely in English",
      "They have closed their language departments",
    ],
    correctAnswer: 2,
    difficulty: "B1",
  },
  // Error Correction (B2)
  {
    id: 11,
    type: "error_correction",
    question: "Find the mistake: 'Despite of the rain, we continued the meeting outside.'",
    options: [
      "'Despite of' should be 'Despite'",
      "'continued' should be 'continue'",
      "'outside' should be 'outdoor'",
      "No mistake",
    ],
    correctAnswer: 0,
    difficulty: "B2",
  },
  {
    id: 12,
    type: "grammar",
    question: "The contract ___ by both parties before the deadline.",
    options: ["must sign", "must be signed", "must have sign", "must signing"],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 13,
    type: "vocabulary",
    question: "Choose the word closest in meaning to 'concise':",
    options: ["Long and detailed", "Short and clear", "Confusing", "Formal"],
    correctAnswer: 1,
    difficulty: "B2",
  },
  // Listening (B2) — based on the audio conversation
  {
    id: 14,
    type: "listening",
    question: "🎧 Listen to the conversation, then answer: What is James preparing for?",
    options: [
      "A job interview",
      "An afternoon presentation",
      "A training workshop",
      "A client dinner",
    ],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 15,
    type: "listening",
    question: "🎧 According to the conversation, what does Sarah suggest James do to make the introduction more engaging?",
    options: [
      "Add more slides",
      "Start with a surprising fact or short story",
      "Use more graphs and charts",
      "Make the presentation shorter",
    ],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 16,
    type: "listening",
    question: "🎧 Why does Sarah tell James to speak slowly and clearly?",
    options: [
      "Because the audience does not speak English",
      "Because the room is very large",
      "Because clients from Casablanca are joining online",
      "Because James speaks too fast normally",
    ],
    correctAnswer: 2,
    difficulty: "B2",
  },
  // Register & Advanced Grammar (C1)
  {
    id: 17,
    type: "register",
    question: "Which sentence is most appropriate for a formal business email?",
    options: [
      "Hey! Just wanted to check in about the thing we talked about.",
      "I am writing to follow up on our previous discussion regarding the proposal.",
      "So, did you get my last message? What do you think?",
      "Can't wait to hear back, it's super urgent!",
    ],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 18,
    type: "reading",
    passage: "Emotional intelligence (EQ) refers to the ability to recognize, understand, and manage one's own emotions, as well as the emotions of others. Research suggests that EQ is a stronger predictor of professional success than IQ in many fields, particularly those involving leadership and teamwork. Employees with high EQ tend to resolve conflicts more effectively and build stronger professional relationships.",
    question: "According to the passage, in which fields is EQ particularly important?",
    options: [
      "Technical and scientific fields",
      "Leadership and teamwork",
      "Finance and accounting",
      "Engineering and design",
    ],
    correctAnswer: 1,
    difficulty: "C1",
  },
  {
    id: 19,
    type: "error_correction",
    question: "Find the mistake: 'The data shows that sales have raised by 20% this quarter.'",
    options: [
      "'data shows' should be 'data show'",
      "'raised' should be 'risen'",
      "'by' should be 'with'",
      "No mistake",
    ],
    correctAnswer: 1,
    difficulty: "C1",
  },
  {
    id: 20,
    type: "grammar",
    question: "Had the manager ___ the report earlier, the problem could have been avoided.",
    options: ["reviewed", "review", "reviewing", "reviews"],
    correctAnswer: 0,
    difficulty: "C1",
  },
  {
    id: 21,
    type: "vocabulary",
    question: "Choose the word closest in meaning to 'ambiguous':",
    options: ["Clear and direct", "Open to more than one interpretation", "Completely wrong", "Very formal"],
    correctAnswer: 1,
    difficulty: "C1",
  },
  {
    id: 22,
    type: "grammar",
    question: "Not only ___ the project on time, but they also exceeded expectations.",
    options: [
      "they completed",
      "did they complete",
      "they did complete",
      "completed they",
    ],
    correctAnswer: 1,
    difficulty: "C1",
  },
  {
    id: 23,
    type: "reading",
    passage: "Emotional intelligence (EQ) refers to the ability to recognize, understand, and manage one's own emotions, as well as the emotions of others. Research suggests that EQ is a stronger predictor of professional success than IQ in many fields, particularly those involving leadership and teamwork. Employees with high EQ tend to resolve conflicts more effectively and build stronger professional relationships.",
    question: "What does the passage suggest about employees with high EQ?",
    options: [
      "They earn higher salaries",
      "They are better at technical tasks",
      "They resolve conflicts more effectively",
      "They work longer hours",
    ],
    correctAnswer: 2,
    difficulty: "C1",
  },
  {
    id: 24,
    type: "vocabulary",
    question: "Choose the most precise word: 'The CEO gave a ___ speech that left no room for misunderstanding.'",
    options: ["verbose", "unequivocal", "ambiguous", "tentative"],
    correctAnswer: 1,
    difficulty: "C2",
  },
  {
    id: 25,
    type: "grammar",
    question: "The proposal, ___ by the board last week, has already been implemented.",
    options: ["ratified", "ratifying", "having ratify", "to ratify"],
    correctAnswer: 0,
    difficulty: "C2",
  },
];

// ─── LEVEL INFO ──────────────────────────────────────────────────────────────
const getLevelInfo = (level: string) => {
  const levels: Record<string, { title: string; description: string; color: string; recommendation: string; package: string }> = {
    A1: {
      title: "Beginner",
      description: "You can understand and use familiar everyday expressions and very basic phrases. You can introduce yourself and ask basic questions.",
      color: "bg-gray-500",
      recommendation: "You need to build your foundation. Focus on basic vocabulary, simple grammar, and everyday phrases.",
      package: "Starter Package (45 min/lesson)",
    },
    A2: {
      title: "Elementary",
      description: "You can understand sentences and frequently used expressions related to areas of immediate relevance. You can communicate in simple, routine tasks.",
      color: "bg-blue-500",
      recommendation: "You have the basics. Now focus on expanding vocabulary and building confidence in conversation.",
      package: "Starter Package (45 min/lesson)",
    },
    B1: {
      title: "Intermediate",
      description: "You can understand the main points of clear standard input on familiar matters. You can deal with most situations likely to arise while travelling in an English-speaking country.",
      color: "bg-green-500",
      recommendation: "You are at a great stage! Focus on fluency, complex grammar, and professional communication.",
      package: "Standard Package (1 hour/lesson)",
    },
    B2: {
      title: "Upper Intermediate",
      description: "You can understand the main ideas of complex text on both concrete and abstract topics. You can interact with a degree of fluency and spontaneity.",
      color: "bg-yellow-500",
      recommendation: "You are almost advanced! Focus on nuance, professional writing, and business English.",
      package: "Standard or Premium Package (1 hour/lesson)",
    },
    C1: {
      title: "Advanced",
      description: "You can understand a wide range of demanding, longer texts, and recognize implicit meaning. You can express yourself fluently and spontaneously.",
      color: "bg-orange-500",
      recommendation: "Excellent level! Focus on mastering idiomatic expressions, advanced writing, and presentation skills.",
      package: "Premium Package (1 hour/lesson)",
    },
    C2: {
      title: "Mastery",
      description: "You can understand with ease virtually everything heard or read. You can express yourself spontaneously, very fluently and precisely.",
      color: "bg-purple-600",
      recommendation: "Outstanding! You are at near-native level. Focus on accent refinement, public speaking, and specialized vocabulary.",
      package: "Premium Package (1 hour/lesson)",
    },
  };
  return levels[level] || levels["A1"];
};

// ─── WEBHOOK URL ─────────────────────────────────────────────────────────────
const GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbzhG3jRJnkgYlr9Cvuzu94zhfOKF9TzPYOztESLVb5ToSa2lWU6cGuzADxIM6PGkj41cg/exec";

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function ProfessionalEnglishTest() {
  const [stage, setStage] = useState<"selection" | "testing" | "lead_capture" | "results">("selection");
  const [testType, setTestType] = useState<"quick" | "comprehensive" | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [leadData, setLeadData] = useState<LeadData>({ name: "", email: "", phone: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const questions = testType === "quick" ? quickTestQuestions : comprehensiveTestQuestions;

  const handleStartTest = (type: "quick" | "comprehensive") => {
    setTestType(type);
    setStage("testing");
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setAudioPlayed(false);
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
    const finalScore = selectedAnswers.filter((ans, i) => ans === questions[i].correctAnswer).length;
    const percentage = Math.round((finalScore / questions.length) * 100);
    let level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
    if (percentage <= 20) level = "A1";
    else if (percentage <= 40) level = "A2";
    else if (percentage <= 55) level = "B1";
    else if (percentage <= 70) level = "B2";
    else if (percentage <= 85) level = "C1";
    else level = "C2";

    setTestResult({ level, score: finalScore, totalQuestions: questions.length, percentage, testType: testType! });
    setStage("lead_capture");
  };

  const handleLeadSubmit = async () => {
    if (!leadData.name.trim()) { setLeadError("Please enter your name."); return; }
    if (!leadData.email.trim() && !leadData.phone.trim()) { setLeadError("Please enter your email or WhatsApp number."); return; }
    setLeadError("");
    setIsSubmitting(true);

    const levelInfo = getLevelInfo(testResult!.level);
    const payload = {
      name: leadData.name,
      email: leadData.email || "Not provided",
      phone: leadData.phone || "Not provided",
      level: testResult!.level,
      levelTitle: levelInfo.title,
      score: testResult!.score,
      total: testResult!.totalQuestions,
      percentage: testResult!.percentage,
      testType: testType === "quick" ? "Quick Test (10 questions)" : "Full Assessment (25 questions)",
      recommendation: levelInfo.package,
    };

    try {
      await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (_) { /* no-cors mode always throws, data still sent */ }

    setLeadSubmitted(true);
    setIsSubmitting(false);
    setStage("results");
  };

  const handleRetakeTest = () => {
    setStage("selection");
    setTestType(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setTestResult(null);
    setLeadData({ name: "", email: "", phone: "" });
    setLeadSubmitted(false);
  };

  // ── SELECTION STAGE ────────────────────────────────────────────────────────
  if (stage === "selection") {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1 rounded-full mb-2">
            100% FREE — No Registration Required
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Discover Your Real English Level
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take our CEFR-aligned test and get a personalized coaching recommendation — completely free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Test */}
          <Card className="p-8 border-2 border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg"><Zap className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">Quick Test</h2>
              </div>
              <p className="text-gray-700">Fast and effective — perfect if you want a quick snapshot of your level.</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> 10 questions</p>
                <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> 5–8 minutes</p>
                <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Grammar, vocabulary & reading</p>
                <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Instant CEFR level result</p>
              </div>
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-6 shadow-md hover:shadow-lg transition-all" onClick={() => handleStartTest("quick")}>
                🚀 Start Quick Test — It's Free!
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* Comprehensive Test */}
          <Card className="p-8 border-2 border-purple-300 hover:border-purple-600 hover:shadow-xl transition-all bg-gradient-to-br from-purple-50 to-purple-100 relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full shadow">
              MOST ACCURATE ⭐
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 p-2 rounded-lg"><BookOpen className="w-6 h-6 text-white" /></div>
                <h2 className="text-2xl font-bold text-gray-900">Full Assessment</h2>
              </div>
              <p className="text-gray-700">The most accurate test — includes reading, listening, and error correction like real CEFR exams.</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-500" /> 25 questions</p>
                <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-500" /> 20–25 minutes</p>
                <p className="flex items-center gap-2"><Headphones className="w-4 h-4 text-purple-500" /> Listening comprehension (audio)</p>
                <p className="flex items-center gap-2"><FileText className="w-4 h-4 text-purple-500" /> Reading comprehension passages</p>
                <p className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-purple-500" /> Error correction exercises</p>
                <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-500" /> Detailed CEFR breakdown + coaching plan</p>
              </div>
              <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-6 shadow-md hover:shadow-lg transition-all" onClick={() => handleStartTest("comprehensive")}>
                🎯 Take the Full Assessment — Free!
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Trust section */}
        <Card className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3 text-center">What happens after the test?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-700">
            <div className="space-y-1">
              <div className="text-2xl">📊</div>
              <p className="font-semibold">Get Your CEFR Level</p>
              <p>Instantly see your level from A1 (Beginner) to C2 (Mastery)</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl">🎯</div>
              <p className="font-semibold">Get a Personalized Plan</p>
              <p>Receive a tailored coaching recommendation for your level</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl">📱</div>
              <p className="font-semibold">Connect with Your Coach</p>
              <p>Book your first lesson directly via WhatsApp — no commitment needed</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // ── TESTING STAGE ──────────────────────────────────────────────────────────
  if (stage === "testing" && testType) {
    const question = questions[currentQuestion];
    const isAnswered = selectedAnswers[currentQuestion] !== undefined;
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const isListeningQuestion = question.type === "listening";

    const typeLabels: Record<string, { label: string; color: string; icon: string }> = {
      grammar: { label: "Grammar", color: "bg-blue-100 text-blue-700", icon: "📝" },
      vocabulary: { label: "Vocabulary", color: "bg-green-100 text-green-700", icon: "📚" },
      reading: { label: "Reading Comprehension", color: "bg-yellow-100 text-yellow-700", icon: "📖" },
      listening: { label: "Listening Comprehension", color: "bg-purple-100 text-purple-700", icon: "🎧" },
      error_correction: { label: "Error Correction", color: "bg-red-100 text-red-700", icon: "🔍" },
      register: { label: "Language Register", color: "bg-orange-100 text-orange-700", icon: "💼" },
    };
    const typeInfo = typeLabels[question.type] || typeLabels.grammar;

    return (
      <div className="space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span className="font-semibold">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question Type Badge */}
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${typeInfo.color}`}>
            {typeInfo.icon} {typeInfo.label}
          </span>
          <span className="text-xs text-gray-400">Level: {question.difficulty}</span>
        </div>

        {/* Listening Audio Player */}
        {isListeningQuestion && (
          <Card className="p-4 bg-purple-50 border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <Headphones className="w-5 h-5 text-purple-600" />
              <p className="font-semibold text-purple-800">Listen to the conversation before answering</p>
            </div>
            <audio
              ref={audioRef}
              controls
              className="w-full"
              onPlay={() => setAudioPlayed(true)}
              src="/audio/listening-test-1.mp3"
            >
              Your browser does not support the audio element.
            </audio>
            {!audioPlayed && (
              <p className="text-xs text-purple-600 mt-2">⚠️ Please listen to the audio before answering the listening questions.</p>
            )}
          </Card>
        )}

        {/* Reading Passage */}
        {question.passage && question.type === "reading" && (
          <Card className="p-5 bg-yellow-50 border-yellow-200">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-yellow-700" />
              <p className="font-semibold text-yellow-800 text-sm">Read the passage carefully:</p>
            </div>
            <p className="text-gray-800 text-sm leading-relaxed italic">"{question.passage}"</p>
          </Card>
        )}

        {/* Question Card */}
        <Card className="p-8 border-2 border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestion] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 text-blue-800"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                  }`}
                >
                  <span className="font-bold mr-3 text-gray-400">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              );
            })}
          </div>
        </Card>

        {/* Navigation */}
        <Button
          size="lg"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-6"
          onClick={handleNextQuestion}
          disabled={!isAnswered}
        >
          {currentQuestion < questions.length - 1 ? (
            <>Next Question <ChevronRight className="ml-2 h-5 w-5" /></>
          ) : (
            <>🎉 Finish & Get My Results!</>
          )}
        </Button>
      </div>
    );
  }

  // ── LEAD CAPTURE STAGE ─────────────────────────────────────────────────────
  if (stage === "lead_capture" && testResult) {
    const levelInfo = getLevelInfo(testResult.level);
    return (
      <div className="space-y-6 max-w-lg mx-auto">
        {/* Teaser */}
        <div className={`${levelInfo.color} text-white rounded-2xl p-8 text-center space-y-3 relative`}>
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/30 backdrop-blur-sm">
            <div className="text-center space-y-2">
              <Lock className="w-10 h-10 text-white mx-auto" />
              <p className="text-white font-bold text-lg">Your result is ready!</p>
              <p className="text-white/90 text-sm">Enter your details below to unlock it</p>
            </div>
          </div>
          <p className="text-lg font-semibold opacity-0">Your Level</p>
          <h1 className="text-7xl font-bold opacity-0">??</h1>
          <p className="text-2xl font-semibold opacity-0">Level Title</p>
          <p className="text-lg opacity-0">Score: {testResult.score}/{testResult.totalQuestions}</p>
        </div>

        {/* Lead Form */}
        <Card className="p-8 border-2 border-blue-200 shadow-lg">
          <div className="space-y-5">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">🎯 Unlock Your Results</h2>
              <p className="text-gray-600 text-sm">
                Enter your details to see your CEFR level and get a free personalized coaching recommendation from Mr. Ibrahim.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Youssef El Amrani"
                  value={leadData.name}
                  onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="e.g. +212 6XX XXX XXX"
                  value={leadData.phone}
                  onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. youssef@gmail.com"
                  value={leadData.email}
                  onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {leadError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {leadError}
              </div>
            )}

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-6 shadow-lg"
              onClick={handleLeadSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Unlocking..." : "🔓 Unlock My Results Now!"}
            </Button>

            <p className="text-center text-xs text-gray-400">
              🔒 Your information is private and will only be used to send you your results and coaching recommendation.
            </p>
          </div>
        </Card>
      </div>
    );
  }

  // ── RESULTS STAGE ──────────────────────────────────────────────────────────
  if (stage === "results" && testResult) {
    const levelInfo = getLevelInfo(testResult.level);
    const whatsappMessage = encodeURIComponent(
      `Hi Mr. Ibrahim! 👋\n\nI just completed the English test on your Fluentry website and I got my results:\n\n📊 My Level: ${testResult.level} — ${levelInfo.title}\n✅ Score: ${testResult.score}/${testResult.totalQuestions} (${testResult.percentage}%)\n\nMy name is ${leadData.name}.\n\nCould you please tell me what you recommend for me and how we can start working together? 😊`
    );

    return (
      <div className="space-y-8">
        {/* Results Header */}
        <div className={`${levelInfo.color} text-white rounded-2xl p-12 text-center space-y-4`}>
          {leadSubmitted && (
            <div className="bg-white/20 rounded-xl px-4 py-2 inline-block mb-2">
              <p className="text-sm font-semibold">✅ Your results have been sent to Mr. Ibrahim!</p>
            </div>
          )}
          <p className="text-lg font-semibold opacity-90">Your English Level</p>
          <h1 className="text-7xl font-bold">{testResult.level}</h1>
          <p className="text-3xl font-semibold">{levelInfo.title}</p>
          <p className="text-lg opacity-90">
            You scored {testResult.score} out of {testResult.totalQuestions} ({testResult.percentage}%)
          </p>
        </div>

        {/* What this means */}
        <Card className="p-8 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means For You</h2>
          <p className="text-lg text-gray-700 mb-6">{levelInfo.description}</p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl">
            <p className="text-gray-800">
              <strong>🎯 Mr. Ibrahim's Recommendation:</strong> {levelInfo.recommendation}
            </p>
            <p className="text-gray-700 mt-2">
              <strong>📦 Suggested Package:</strong> {levelInfo.package}
            </p>
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <h2 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6 opacity-90">
            Mr. Ibrahim has received your results and is ready to help you reach the next level. Message him now — your first consultation is free!
          </p>
          <div className="space-y-3">
            <a
              href={`https://wa.me/212614902990?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6 shadow-lg">
                💬 Message Mr. Ibrahim on WhatsApp
              </Button>
            </a>
            <a href="/book-lesson">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg py-6">
                📅 Book Your First Lesson Now
              </Button>
            </a>
            <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10" onClick={handleRetakeTest}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake Test
            </Button>
          </div>
        </Card>

        {/* Test Details */}
        <Card className="p-6 bg-gray-50">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your Test Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Test Type</p>
              <p className="font-bold text-gray-900 capitalize">{testResult.testType}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Questions</p>
              <p className="font-bold text-gray-900">{testResult.totalQuestions}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Correct</p>
              <p className="font-bold text-gray-900">{testResult.score}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Score</p>
              <p className="font-bold text-gray-900">{testResult.percentage}%</p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return null;
}
