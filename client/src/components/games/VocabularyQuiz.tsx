import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface Question {
  word: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    word: "Fluent",
    options: ["Able to speak smoothly and easily", "Unable to speak", "Speaking slowly", "Confused"],
    correct: 0
  },
  {
    word: "Confidence",
    options: ["Fear", "Belief in one's abilities", "Doubt", "Confusion"],
    correct: 1
  },
  {
    word: "Communicate",
    options: ["To hide information", "To share information", "To forget", "To ignore"],
    correct: 1
  },
  {
    word: "Professional",
    options: ["Amateur", "Relating to a job or career", "Casual", "Unprepared"],
    correct: 1
  },
  {
    word: "Achievement",
    options: ["Failure", "Something accomplished successfully", "Beginning", "Attempt"],
    correct: 1
  },
  {
    word: "Negotiate",
    options: ["To argue angrily", "To discuss to reach agreement", "To refuse", "To accept immediately"],
    correct: 1
  },
  {
    word: "Presentation",
    options: ["A formal talk to an audience", "A written report", "A phone call", "An email"],
    correct: 0
  },
  {
    word: "Vocabulary",
    options: ["Grammar rules", "Words used in a language", "Pronunciation", "Writing style"],
    correct: 1
  },
  {
    word: "Pronunciation",
    options: ["Writing words", "How words are spoken", "Word meaning", "Grammar"],
    correct: 1
  },
  {
    word: "Fluency",
    options: ["Making mistakes", "Ability to speak smoothly", "Speaking slowly", "Writing well"],
    correct: 1
  }
];

export default function VocabularyQuiz() {
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

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
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
          <CardTitle className="text-2xl text-center">Quiz Complete!</CardTitle>
          <CardDescription className="text-center">Here's how you did</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-2">{percentage.toFixed(0)}%</div>
            <p className="text-xl mb-4">You scored {score} out of {questions.length}</p>
            {percentage >= 80 && (
              <p className="text-green-600 font-semibold">Excellent work! 🎉</p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-blue-600 font-semibold">Good job! Keep practicing! 👍</p>
            )}
            {percentage < 60 && (
              <p className="text-orange-600 font-semibold">Keep learning! Practice makes perfect! 💪</p>
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
          <CardTitle>Vocabulary Builder Quiz</CardTitle>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">What does "{questions[currentQuestion].word}" mean?</h3>
          <p className="text-muted-foreground">Choose the correct definition</p>
        </div>

        <div className="grid gap-3">
          {questions[currentQuestion].options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === questions[currentQuestion].correct;
            const showCorrect = showFeedback && isCorrect;
            const showIncorrect = showFeedback && isSelected && !isCorrect;

            return (
              <Button
                key={index}
                onClick={() => !showFeedback && handleAnswer(index)}
                disabled={showFeedback}
                variant="outline"
                className={`h-auto py-4 px-6 text-left justify-start whitespace-normal ${
                  showCorrect ? 'bg-green-100 border-green-500 hover:bg-green-100' :
                  showIncorrect ? 'bg-red-100 border-red-500 hover:bg-red-100' :
                  'hover:bg-accent'
                }`}
              >
                <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                {option}
                {showCorrect && <span className="ml-auto">✓</span>}
                {showIncorrect && <span className="ml-auto">✗</span>}
              </Button>
            );
          })}
        </div>

        {showFeedback && (
          <div className={`p-4 rounded-lg ${
            selectedAnswer === questions[currentQuestion].correct
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {selectedAnswer === questions[currentQuestion].correct
              ? '✓ Correct! Well done!'
              : '✗ Not quite. The correct answer is highlighted above.'}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

