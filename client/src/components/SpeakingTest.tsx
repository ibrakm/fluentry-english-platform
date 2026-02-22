import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff, RotateCcw, ChevronRight, Volume2, CheckCircle, AlertCircle } from "lucide-react";

// ─── SPEAKING PROMPTS ────────────────────────────────────────────────────────
const speakingPrompts = [
  {
    id: 1,
    level: "A2",
    title: "Introduce Yourself",
    instruction: "Read the sentence below aloud clearly and naturally:",
    sentence: "My name is Ibrahim and I work as an English teacher in Morocco.",
    keywords: ["name", "work", "teacher", "morocco"],
    tip: "Speak clearly and don't rush. Focus on each word.",
  },
  {
    id: 2,
    level: "B1",
    title: "Daily Routine",
    instruction: "Read the sentence below aloud clearly and naturally:",
    sentence: "Every morning I prepare my lessons before my students arrive for their classes.",
    keywords: ["morning", "prepare", "lessons", "students", "classes"],
    tip: "Pay attention to the 'th' sound in 'their'.",
  },
  {
    id: 3,
    level: "B2",
    title: "Professional Context",
    instruction: "Read the sentence below aloud clearly and naturally:",
    sentence: "Effective communication is essential for professional success in any international environment.",
    keywords: ["effective", "communication", "essential", "professional", "international"],
    tip: "Stress the important words: 'effective', 'essential', 'professional'.",
  },
  {
    id: 4,
    level: "C1",
    title: "Complex Idea",
    instruction: "Read the sentence below aloud clearly and naturally:",
    sentence: "The ability to articulate complex ideas with clarity and confidence distinguishes exceptional communicators.",
    keywords: ["articulate", "complex", "clarity", "confidence", "distinguishes", "exceptional"],
    tip: "This is a challenging sentence — take your time and pronounce each syllable.",
  },
];

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface SpeakingResult {
  promptId: number;
  transcript: string;
  score: number;
  feedback: string;
  matchedKeywords: string[];
  missedKeywords: string[];
}

// ─── BROWSER SUPPORT CHECK ───────────────────────────────────────────────────
const isSpeechRecognitionSupported = () => {
  return "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
};

// ─── SCORING LOGIC ───────────────────────────────────────────────────────────
function scoreTranscript(transcript: string, prompt: (typeof speakingPrompts)[0]): SpeakingResult {
  const lowerTranscript = transcript.toLowerCase();
  const matched: string[] = [];
  const missed: string[] = [];

  for (const keyword of prompt.keywords) {
    if (lowerTranscript.includes(keyword.toLowerCase())) {
      matched.push(keyword);
    } else {
      missed.push(keyword);
    }
  }

  const keywordScore = Math.round((matched.length / prompt.keywords.length) * 100);

  // Check sentence length similarity (fluency proxy)
  const expectedWords = prompt.sentence.split(" ").length;
  const spokenWords = transcript.trim().split(" ").length;
  const fluencyRatio = Math.min(spokenWords / expectedWords, 1);
  const fluencyScore = Math.round(fluencyRatio * 100);

  const finalScore = Math.round(keywordScore * 0.7 + fluencyScore * 0.3);

  let feedback = "";
  if (finalScore >= 85) {
    feedback = "Excellent! Your pronunciation and fluency are very clear. Well done!";
  } else if (finalScore >= 65) {
    feedback = "Good job! Most words were clear. Keep practising for more natural flow.";
  } else if (finalScore >= 40) {
    feedback = "Nice try! Some words were hard to catch. Try speaking more slowly and clearly.";
  } else {
    feedback = "Keep practising! Try to speak each word clearly. Don't rush.";
  }

  return {
    promptId: prompt.id,
    transcript,
    score: finalScore,
    feedback,
    matchedKeywords: matched,
    missedKeywords: missed,
  };
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function SpeakingTest() {
  const [stage, setStage] = useState<"intro" | "testing" | "results">("intro");
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [results, setResults] = useState<SpeakingResult[]>([]);
  const [currentResult, setCurrentResult] = useState<SpeakingResult | null>(null);
  const [error, setError] = useState("");
  const [isSupported] = useState(isSpeechRecognitionSupported);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const currentPrompt = speakingPrompts[currentPromptIndex];

  const startRecording = useCallback(() => {
    if (!isSupported) return;
    setError("");
    setTranscript("");
    setCurrentResult(null);

    const SpeechRecognition =
      (window as unknown as { SpeechRecognition?: typeof window.SpeechRecognition; webkitSpeechRecognition?: typeof window.SpeechRecognition }).SpeechRecognition ||
      (window as unknown as { SpeechRecognition?: typeof window.SpeechRecognition; webkitSpeechRecognition?: typeof window.SpeechRecognition }).webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setTranscript(spokenText);
      const result = scoreTranscript(spokenText, currentPrompt);
      setCurrentResult(result);
    };

    recognition.onerror = (event) => {
      setIsRecording(false);
      if (event.error === "not-allowed") {
        setError("Microphone access was denied. Please allow microphone access in your browser settings and try again.");
      } else if (event.error === "no-speech") {
        setError("No speech detected. Please try again and speak clearly into your microphone.");
      } else {
        setError("An error occurred. Please try again.");
      }
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [currentPrompt, isSupported]);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
  }, []);

  const handleNextPrompt = () => {
    if (currentResult) {
      const newResults = [...results, currentResult];
      setResults(newResults);

      if (currentPromptIndex < speakingPrompts.length - 1) {
        setCurrentPromptIndex(currentPromptIndex + 1);
        setTranscript("");
        setCurrentResult(null);
        setError("");
      } else {
        setStage("results");
      }
    }
  };

  const handleRetry = () => {
    setTranscript("");
    setCurrentResult(null);
    setError("");
  };

  const handleRestart = () => {
    setStage("intro");
    setCurrentPromptIndex(0);
    setTranscript("");
    setCurrentResult(null);
    setResults([]);
    setError("");
  };

  const getOverallScore = () => {
    if (results.length === 0) return 0;
    return Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length);
  };

  const getOverallLevel = (score: number) => {
    if (score >= 85) return { level: "C1–C2", label: "Advanced / Mastery", color: "bg-purple-600", emoji: "🏆" };
    if (score >= 70) return { level: "B2", label: "Upper Intermediate", color: "bg-blue-600", emoji: "⭐" };
    if (score >= 55) return { level: "B1", label: "Intermediate", color: "bg-green-600", emoji: "✅" };
    if (score >= 40) return { level: "A2", label: "Elementary", color: "bg-yellow-500", emoji: "📈" };
    return { level: "A1", label: "Beginner", color: "bg-orange-500", emoji: "🌱" };
  };

  // ── INTRO STAGE ────────────────────────────────────────────────────────────
  if (stage === "intro") {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-block bg-orange-100 text-orange-700 text-sm font-bold px-4 py-1 rounded-full mb-2">
            NEW — Speaking Practice
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Test Your Speaking & Pronunciation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read sentences aloud and get instant feedback on your pronunciation and fluency. Uses your browser's built-in speech recognition — no app needed.
          </p>
        </div>

        {!isSupported && (
          <Card className="p-6 bg-red-50 border-red-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-800">Browser Not Supported</p>
                <p className="text-red-700 text-sm mt-1">
                  Your browser does not support speech recognition. Please use <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong> on a desktop or Android device for the best experience.
                </p>
              </div>
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5 text-center border-orange-200 bg-orange-50">
            <Mic className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="font-bold text-gray-900">4 Speaking Prompts</p>
            <p className="text-sm text-gray-600">From A2 to C1 level sentences</p>
          </Card>
          <Card className="p-5 text-center border-blue-200 bg-blue-50">
            <Volume2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="font-bold text-gray-900">Instant Feedback</p>
            <p className="text-sm text-gray-600">See which words were clear and which need work</p>
          </Card>
          <Card className="p-5 text-center border-green-200 bg-green-50">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-bold text-gray-900">No Sign-Up Needed</p>
            <p className="text-sm text-gray-600">100% free, runs in your browser</p>
          </Card>
        </div>

        <Card className="p-6 bg-yellow-50 border-yellow-200">
          <h3 className="font-bold text-gray-900 mb-3">📋 Before You Start:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold">1.</span> Make sure you are in a quiet place</li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold">2.</span> Allow microphone access when your browser asks</li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold">3.</span> Read each sentence aloud clearly and at a natural pace</li>
            <li className="flex items-start gap-2"><span className="text-yellow-600 font-bold">4.</span> Use <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong> for best results</li>
          </ul>
        </Card>

        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-bold py-6 shadow-lg"
          onClick={() => setStage("testing")}
          disabled={!isSupported}
        >
          <Mic className="mr-2 h-5 w-5" />
          Start Speaking Test — It's Free!
        </Button>
      </div>
    );
  }

  // ── TESTING STAGE ──────────────────────────────────────────────────────────
  if (stage === "testing") {
    const progress = ((currentPromptIndex + 1) / speakingPrompts.length) * 100;

    return (
      <div className="space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Prompt {currentPromptIndex + 1} of {speakingPrompts.length}</span>
            <span className="font-semibold">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Level Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
            🎤 Speaking Practice
          </span>
          <span className="text-xs text-gray-400">CEFR Level: {currentPrompt.level}</span>
        </div>

        {/* Prompt Card */}
        <Card className="p-8 border-2 border-orange-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{currentPrompt.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{currentPrompt.instruction}</p>

          {/* Sentence to read */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6 text-center mb-4">
            <p className="text-xl font-semibold text-gray-900 leading-relaxed">
              "{currentPrompt.sentence}"
            </p>
          </div>

          <p className="text-xs text-gray-500 italic">💡 Tip: {currentPrompt.tip}</p>
        </Card>

        {/* Error message */}
        {error && (
          <Card className="p-4 bg-red-50 border-red-200">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </Card>
        )}

        {/* Transcript display */}
        {transcript && (
          <Card className="p-5 bg-blue-50 border-blue-200">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">What we heard:</p>
            <p className="text-gray-800 italic">"{transcript}"</p>
          </Card>
        )}

        {/* Result display */}
        {currentResult && (
          <Card className="p-6 border-2 border-green-200 bg-green-50">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900">Your Score</h3>
              <span className={`text-2xl font-black ${currentResult.score >= 70 ? "text-green-600" : currentResult.score >= 50 ? "text-yellow-600" : "text-red-600"}`}>
                {currentResult.score}%
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-4">{currentResult.feedback}</p>

            {currentResult.matchedKeywords.length > 0 && (
              <div className="mb-2">
                <p className="text-xs font-bold text-green-700 mb-1">✅ Clear words:</p>
                <div className="flex flex-wrap gap-1">
                  {currentResult.matchedKeywords.map((kw) => (
                    <span key={kw} className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-medium">{kw}</span>
                  ))}
                </div>
              </div>
            )}

            {currentResult.missedKeywords.length > 0 && (
              <div>
                <p className="text-xs font-bold text-orange-700 mb-1">⚠️ Practise these words:</p>
                <div className="flex flex-wrap gap-1">
                  {currentResult.missedKeywords.map((kw) => (
                    <span key={kw} className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full font-medium">{kw}</span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {!isRecording && !currentResult && (
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg font-bold py-6 shadow-lg"
              onClick={startRecording}
            >
              <Mic className="mr-2 h-5 w-5" />
              🎤 Start Speaking
            </Button>
          )}

          {isRecording && (
            <Button
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-6 shadow-lg animate-pulse"
              onClick={stopRecording}
            >
              <MicOff className="mr-2 h-5 w-5" />
              ⏹ Stop Recording
            </Button>
          )}

          {currentResult && (
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-6"
                onClick={handleNextPrompt}
              >
                {currentPromptIndex < speakingPrompts.length - 1 ? (
                  <>Next Prompt <ChevronRight className="ml-2 h-5 w-5" /></>
                ) : (
                  <>🎉 See My Final Results!</>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-orange-300 text-orange-700 hover:bg-orange-50"
                onClick={handleRetry}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── RESULTS STAGE ──────────────────────────────────────────────────────────
  if (stage === "results") {
    const overallScore = getOverallScore();
    const levelInfo = getOverallLevel(overallScore);
    const whatsappMessage = encodeURIComponent(
      `Hi Mr. Ibrahim! 👋\n\nI just completed the Speaking Test on your Fluentry website!\n\n🎤 My Speaking Score: ${overallScore}%\n📊 Estimated Level: ${levelInfo.level} — ${levelInfo.label}\n\nCould you please tell me what you recommend for improving my speaking and pronunciation? 😊`
    );

    return (
      <div className="space-y-8">
        {/* Results Header */}
        <div className={`${levelInfo.color} text-white rounded-2xl p-12 text-center space-y-4`}>
          <p className="text-lg font-semibold opacity-90">Your Speaking Score</p>
          <h1 className="text-7xl font-bold">{overallScore}%</h1>
          <p className="text-3xl font-semibold">{levelInfo.emoji} {levelInfo.label}</p>
          <p className="text-lg opacity-90">Estimated Level: {levelInfo.level}</p>
        </div>

        {/* Per-prompt breakdown */}
        <Card className="p-8 border-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prompt-by-Prompt Breakdown</h2>
          <div className="space-y-4">
            {results.map((result, index) => {
              const prompt = speakingPrompts.find((p) => p.id === result.promptId);
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900">{prompt?.title}</p>
                    <p className="text-sm text-gray-500">Level {prompt?.level}</p>
                  </div>
                  <div className={`text-xl font-black ${result.score >= 70 ? "text-green-600" : result.score >= 50 ? "text-yellow-600" : "text-red-600"}`}>
                    {result.score}%
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-8 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
          <h2 className="text-2xl font-bold mb-3">Want to Improve Your Speaking?</h2>
          <p className="text-lg mb-6 opacity-90">
            Mr. Ibrahim specialises in helping students speak English with confidence and clarity. Message him now — your first consultation is free!
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
              <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg py-6">
                📅 Book Your First Lesson Now
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white text-white hover:bg-white/10"
              onClick={handleRestart}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Retake the Speaking Test
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return null;
}
