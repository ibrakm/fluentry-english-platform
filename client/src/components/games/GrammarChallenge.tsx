import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface Question {
  sentence: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    sentence: "She ___ to Morocco last year.",
    options: ["go", "goes", "went", "going"],
    correct: 2,
    explanation: "Use past simple 'went' for completed actions in the past."
  },
  {
    sentence: "I ___ English for three years.",
    options: ["learn", "am learning", "have been learning", "learned"],
    correct: 2,
    explanation: "Use present perfect continuous for actions that started in the past and continue now."
  },
  {
    sentence: "If I ___ more time, I would practice more.",
    options: ["have", "had", "will have", "having"],
    correct: 1,
    explanation: "Use past simple in the 'if' clause of second conditional sentences."
  },
  {
    sentence: "The meeting ___ at 3 PM tomorrow.",
    options: ["start", "starts", "is starting", "will start"],
    correct: 1,
    explanation: "Use present simple for scheduled events in the future."
  },
  {
    sentence: "I enjoy ___ English with native speakers.",
    options: ["speak", "to speak", "speaking", "spoke"],
    correct: 2,
    explanation: "Use gerund (-ing form) after 'enjoy'."
  },
  {
    sentence: "This is the ___ book I've ever read.",
    options: ["good", "better", "best", "well"],
    correct: 2,
    explanation: "Use superlative 'best' when comparing more than two things."
  },
  {
    sentence: "She has lived here ___ 2020.",
    options: ["for", "since", "from", "until"],
    correct: 1,
    explanation: "Use 'since' with a specific point in time."
  },
  {
    sentence: "I ___ my homework when you called.",
    options: ["do", "did", "was doing", "have done"],
    correct: 2,
    explanation: "Use past continuous for an action in progress when another action happened."
  },
  {
    sentence: "English ___ all over the world.",
    options: ["speaks", "is speaking", "is spoken", "has spoken"],
    correct: 2,
    explanation: "Use passive voice 'is spoken' when the action is done to the subject."
  },
  {
    sentence: "I wish I ___ speak English fluently.",
    options: ["can", "could", "will", "would"],
    correct: 1,
    explanation: "Use 'could' after 'I wish' to express a present unreal situation."
  }
];

export default function GrammarChallenge() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Challenge Complete!</CardTitle>
          <CardDescription className="text-center">Your grammar results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-2">{percentage.toFixed(0)}%</div>
            <p className="text-xl mb-4">You scored {score} out of {questions.length}</p>
            {percentage >= 80 && (
              <p className="text-green-600 font-semibold">Outstanding! Your grammar is strong! 🎉</p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-blue-600 font-semibold">Good work! A few more lessons will help! 👍</p>
            )}
            {percentage < 60 && (
              <p className="text-orange-600 font-semibold">Keep practicing! Grammar takes time! 💪</p>
            )}
          </div>
          <div className="flex gap-4 justify-center">
            <Button onClick={resetQuiz} className="bg-primary hover:bg-primary/90">
              Try Again
            </Button>
            <Button variant="outline" asChild>
              <a href="https://fluentry-english-platform.vercel.app/book">Book a Lesson</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle>Grammar Challenge</CardTitle>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">Fill in the blank:</h3>
          <p className="text-xl">{questions[currentQuestion].sentence}</p>
        </div>

        <div className="grid gap-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === questions[currentQuestion].correct;
            const showCorrect = showFeedback && isCorrect;
            const showIncorrect = showFeedback && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => !showFeedback && handleAnswer(index)}
                disabled={showFeedback}
                style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                className={`w-full min-h-[52px] py-3 px-4 text-left rounded-xl border-2 font-medium text-sm sm:text-base transition-all duration-150 flex items-center gap-3 ${
                  showCorrect ? 'bg-green-50 border-green-500 text-green-800' :
                  showIncorrect ? 'bg-red-50 border-red-500 text-red-800' :
                  showFeedback ? 'bg-gray-50 border-gray-200 text-gray-500 opacity-60' :
                  'bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 active:bg-blue-100'
                }`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  showCorrect ? 'bg-green-500 text-white' :
                  showIncorrect ? 'bg-red-500 text-white' :
                  'bg-gray-100 text-gray-600'
                }`}>{String.fromCharCode(65 + index)}</span>
                <span className="flex-1">{option}</span>
                {showCorrect && <span className="text-green-600 font-bold ml-auto">✓</span>}
                {showIncorrect && <span className="text-red-600 font-bold ml-auto">✗</span>}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="space-y-3">
            <div className={`p-4 rounded-lg ${
              selectedAnswer === questions[currentQuestion].correct
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {selectedAnswer === questions[currentQuestion].correct
                ? '✓ Correct!'
                : '✗ Incorrect.'}
            </div>
            <div className="p-4 bg-blue-50 text-blue-800 border border-blue-200 rounded-lg">
              <p className="font-semibold mb-1">Explanation:</p>
              <p>{questions[currentQuestion].explanation}</p>
            </div>
            <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90">
              {currentQuestion + 1 < questions.length ? 'Next Question' : 'See Results'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

