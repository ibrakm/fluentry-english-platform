import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface Idiom {
  idiom: string;
  meaning: string;
}

const idioms: Idiom[] = [
  { idiom: "Break the ice", meaning: "Start a conversation in a social setting" },
  { idiom: "Hit the books", meaning: "Study hard" },
  { idiom: "Piece of cake", meaning: "Very easy" },
  { idiom: "Cost an arm and a leg", meaning: "Very expensive" },
  { idiom: "Under the weather", meaning: "Feeling sick" },
  { idiom: "Spill the beans", meaning: "Reveal a secret" },
  { idiom: "On cloud nine", meaning: "Very happy" },
  { idiom: "Break a leg", meaning: "Good luck" },
];

export default function IdiomMatcher() {
  const [selectedIdiom, setSelectedIdiom] = useState<number | null>(null);
  const [selectedMeaning, setSelectedMeaning] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Shuffle meanings for display
  const [shuffledMeanings] = useState(() => {
    const meanings = [...idioms];
    for (let i = meanings.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [meanings[i], meanings[j]] = [meanings[j], meanings[i]];
    }
    return meanings;
  });

  const handleIdiomClick = (index: number) => {
    if (matched.includes(index)) return;
    setSelectedIdiom(index);
    
    if (selectedMeaning !== null) {
      checkMatch(index, selectedMeaning);
    }
  };

  const handleMeaningClick = (index: number) => {
    if (matched.includes(index)) return;
    setSelectedMeaning(index);
    
    if (selectedIdiom !== null) {
      checkMatch(selectedIdiom, index);
    }
  };

  const checkMatch = (idiomIndex: number, meaningIndex: number) => {
    setAttempts(attempts + 1);
    
    if (idioms[idiomIndex].meaning === shuffledMeanings[meaningIndex].meaning) {
      setMatched([...matched, idiomIndex, meaningIndex]);
      setScore(score + 1);
      setSelectedIdiom(null);
      setSelectedMeaning(null);
      
      if (matched.length + 2 >= idioms.length * 2) {
        setTimeout(() => setShowResult(true), 500);
      }
    } else {
      setTimeout(() => {
        setSelectedIdiom(null);
        setSelectedMeaning(null);
      }, 1000);
    }
  };

  const resetGame = () => {
    setSelectedIdiom(null);
    setSelectedMeaning(null);
    setMatched([]);
    setScore(0);
    setShowResult(false);
    setAttempts(0);
  };

  if (showResult) {
    const accuracy = ((score / attempts) * 100).toFixed(0);
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Game Complete!</CardTitle>
          <CardDescription className="text-center">Your idiom matching results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-2">{accuracy}%</div>
            <p className="text-xl mb-4">You matched all {score} idioms in {attempts} attempts</p>
            {Number(accuracy) >= 80 && (
              <p className="text-green-600 font-semibold">Excellent! You know your idioms! 🎉</p>
            )}
            {Number(accuracy) >= 60 && Number(accuracy) < 80 && (
              <p className="text-blue-600 font-semibold">Good job! Keep learning idioms! 👍</p>
            )}
            {Number(accuracy) < 60 && (
              <p className="text-orange-600 font-semibold">Keep practicing! Idioms are tricky! 💪</p>
            )}
          </div>
          <div className="flex gap-4 justify-center">
            <Button onClick={resetGame} className="bg-primary hover:bg-primary/90">
              Play Again
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
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Idiom Matcher</CardTitle>
        <CardDescription>Match each idiom with its correct meaning. Score: {score}/{idioms.length}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Idioms Column */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg mb-4">Idioms</h3>
            {idioms.map((item, index) => (
              <Button
                key={index}
                onClick={() => handleIdiomClick(index)}
                disabled={matched.includes(index)}
                variant="outline"
                className={`w-full h-auto py-4 px-6 text-left justify-start whitespace-normal ${
                  matched.includes(index) ? 'bg-green-100 border-green-500 opacity-50' :
                  selectedIdiom === index ? 'bg-primary text-primary-foreground border-primary' :
                  'hover:bg-accent'
                }`}
              >
                {item.idiom}
                {matched.includes(index) && <span className="ml-auto">✓</span>}
              </Button>
            ))}
          </div>

          {/* Meanings Column */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg mb-4">Meanings</h3>
            {shuffledMeanings.map((item, index) => {
              const originalIndex = idioms.findIndex(i => i.meaning === item.meaning);
              return (
                <Button
                  key={index}
                  onClick={() => handleMeaningClick(index)}
                  disabled={matched.includes(index)}
                  variant="outline"
                  className={`w-full h-auto py-4 px-6 text-left justify-start whitespace-normal ${
                    matched.includes(index) ? 'bg-green-100 border-green-500 opacity-50' :
                    selectedMeaning === index ? 'bg-primary text-primary-foreground border-primary' :
                    'hover:bg-accent'
                  }`}
                >
                  {item.meaning}
                  {matched.includes(index) && <span className="ml-auto">✓</span>}
                </Button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

