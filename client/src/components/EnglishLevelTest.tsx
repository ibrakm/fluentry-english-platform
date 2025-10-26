import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is your name?",
    options: ["My name is John", "I am John", "John is me", "Me John"],
    correctAnswer: 0,
    difficulty: "A1",
  },
  {
    id: 2,
    question: "Choose the correct sentence:",
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
    id: 3,
    question: "What is the opposite of 'hot'?",
    options: ["Warm", "Cold", "Cool", "Warm"],
    correctAnswer: 1,
    difficulty: "A2",
  },
  {
    id: 4,
    question: "Complete: 'If I were you, I ___ do that.'",
    options: ["would", "will", "am", "have"],
    correctAnswer: 0,
    difficulty: "B1",
  },
  {
    id: 5,
    question: "Choose the most appropriate response: 'I've been waiting for hours.'",
    options: [
      "That's good",
      "You must be exhausted",
      "I like waiting",
      "Hours are long",
    ],
    correctAnswer: 1,
    difficulty: "B1",
  },
  {
    id: 6,
    question:
      "Which word best completes: 'The company ___ significant growth in the last quarter.'",
    options: ["experienced", "has experienced", "is experiencing", "will experience"],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 7,
    question:
      "Choose the sentence with the correct use of the subjunctive mood:",
    options: [
      "I suggest that he goes to the doctor",
      "I suggest that he go to the doctor",
      "I suggest him to go to the doctor",
      "I suggest him going to the doctor",
    ],
    correctAnswer: 1,
    difficulty: "B2",
  },
  {
    id: 8,
    question:
      "Which phrase best conveys the meaning of 'to procrastinate'?",
    options: [
      "To work very hard",
      "To delay or postpone unnecessarily",
      "To plan ahead carefully",
      "To complete tasks quickly",
    ],
    correctAnswer: 1,
    difficulty: "C1",
  },
  {
    id: 9,
    question:
      "Identify the sentence with the most sophisticated use of grammar:",
    options: [
      "The book was interesting and I liked it",
      "Having perused the manuscript, the editor found it to be of considerable merit",
      "The book is good",
      "I read the book and it was nice",
    ],
    correctAnswer: 1,
    difficulty: "C1",
  },
  {
    id: 10,
    question:
      "Which of the following best exemplifies idiomatic English usage?",
    options: [
      "The weather is very water today",
      "She let the cat out of the bag",
      "He is a very blue person",
      "The situation is very yellow",
    ],
    correctAnswer: 1,
    difficulty: "C2",
  },
];

interface TestResult {
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  score: number;
  totalQuestions: number;
  percentage: number;
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

export default function EnglishLevelTest() {
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

    setTestResult({
      level,
      score,
      totalQuestions: questions.length,
      percentage,
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
            English Level Assessment
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Take this quick 10-question test to discover your English proficiency level. The test adapts to your answers and provides an accurate CEFR assessment.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <div className="text-blue-600 font-bold">✓</div>
              <div>
                <p className="font-semibold text-gray-900">10 Questions</p>
                <p className="text-gray-600">Covers grammar, vocabulary, and comprehension</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-blue-600 font-bold">✓</div>
              <div>
                <p className="font-semibold text-gray-900">5-10 Minutes</p>
                <p className="text-gray-600">Quick assessment of your level</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-blue-600 font-bold">✓</div>
              <div>
                <p className="font-semibold text-gray-900">Instant Results</p>
                <p className="text-gray-600">Get your CEFR level and personalized recommendations</p>
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
                // This would navigate to book lesson page
                window.open("https://calendly.com/ibrahimkabaikm/30min", "_blank");
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
                  <p className="font-semibold text-gray-900 text-sm">{q.question}</p>
                  <p className="text-sm text-gray-600">
                    Your answer: {q.options[selectedAnswers[idx]]}
                  </p>
                  {selectedAnswers[idx] !== q.correctAnswer && (
                    <p className="text-sm text-green-600">
                      Correct answer: {q.options[q.correctAnswer]}
                    </p>
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
              Difficulty: {question.difficulty}
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

        <h3 className="text-2xl font-bold text-gray-900 mb-6">{question.question}</h3>

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

