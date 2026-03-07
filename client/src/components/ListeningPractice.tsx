/**
 * ListeningPractice — Interactive Listening Exercises
 *
 * Features:
 * - Real audio files (MP3) with a custom HTML5 audio player
 * - Play / Pause / Replay controls
 * - Animated progress bar
 * - Transcript reveal (hidden by default, shown on demand)
 * - Vocabulary flashcards
 * - Multiple-choice comprehension questions with instant feedback
 * - Score celebration with confetti-style animation
 * - Motivational CTA after completion → WhatsApp booking
 */

import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Play, Pause, RotateCcw, Volume2, ChevronDown, ChevronUp,
  CheckCircle, XCircle, ArrowRight, MessageCircle, Star,
  BookOpen, Headphones, Trophy, Zap,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface VocabItem {
  word: string;
  meaning: string;
}

interface Exercise {
  id: string;
  title: string;
  level: "A1" | "A2" | "B1" | "B2";
  topic: string;
  emoji: string;
  duration: string;
  audioSrc: string;
  transcript: string;
  questions: Question[];
  vocabulary: VocabItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const exercises: Exercise[] = [
  {
    id: "ordering-coffee",
    title: "Ordering Coffee at a Café",
    level: "A1",
    topic: "Daily Life",
    emoji: "☕",
    duration: "~1 min",
    audioSrc: "/audio/ordering-coffee.mp3",
    transcript: `Customer: Hi, I'd like to order a coffee, please.
Barista: Sure! What size would you like? Small, medium, or large?
Customer: I'll have a medium, please.
Barista: And what type of coffee? We have espresso, cappuccino, latte, or americano.
Customer: A cappuccino, please.
Barista: Great! That's one medium cappuccino. Would you like anything else?
Customer: No, that's all. How much is it?
Barista: That's $4.50.
Customer: Here you go. Keep the change.
Barista: Thank you! Your coffee will be ready in just a moment.`,
    questions: [
      {
        id: "q1",
        question: "What size coffee does the customer order?",
        options: ["Small", "Medium", "Large", "Extra Large"],
        correctAnswer: 1,
        explanation: "The customer says 'I'll have a medium, please.'",
      },
      {
        id: "q2",
        question: "What type of coffee does the customer choose?",
        options: ["Espresso", "Cappuccino", "Latte", "Americano"],
        correctAnswer: 1,
        explanation: "The customer specifically asks for 'A cappuccino, please.'",
      },
      {
        id: "q3",
        question: "How much does the coffee cost?",
        options: ["$3.50", "$4.50", "$5.50", "$6.50"],
        correctAnswer: 1,
        explanation: "The barista says 'That's $4.50.'",
      },
    ],
    vocabulary: [
      { word: "Cappuccino", meaning: "A coffee drink made with espresso and steamed milk" },
      { word: "Barista", meaning: "A person who makes and serves coffee" },
      { word: "Keep the change", meaning: "Tell someone to keep the extra money as a tip" },
    ],
  },
  {
    id: "hotel-reservation",
    title: "Making a Hotel Reservation",
    level: "A2",
    topic: "Travel",
    emoji: "🏨",
    duration: "~2 min",
    audioSrc: "/audio/hotel-reservation.mp3",
    transcript: `Receptionist: Good morning! Welcome to the Grand Hotel. How can I help you?
Guest: Hi, I'd like to make a reservation for next week.
Receptionist: Of course! What dates would you like to stay?
Guest: From Monday to Wednesday. That's three nights.
Receptionist: Perfect! What type of room would you prefer? We have single, double, or suite rooms.
Guest: I'd like a double room with a view of the city, please.
Receptionist: Excellent choice! We have a beautiful double room on the 5th floor with a city view. The rate is $150 per night.
Guest: That sounds great. What's included in the room?
Receptionist: The room includes free Wi-Fi, a flat-screen TV, air conditioning, and complimentary breakfast.
Guest: Perfect! I'll take it. What's your cancellation policy?
Receptionist: You can cancel up to 48 hours before your arrival without any charge.
Guest: Great! Here's my credit card.`,
    questions: [
      {
        id: "q1",
        question: "How many nights does the guest want to stay?",
        options: ["One night", "Two nights", "Three nights", "Four nights"],
        correctAnswer: 2,
        explanation: "The guest says 'From Monday to Wednesday. That's three nights.'",
      },
      {
        id: "q2",
        question: "What is the price per night?",
        options: ["$100", "$125", "$150", "$175"],
        correctAnswer: 2,
        explanation: "The receptionist states 'The rate is $150 per night.'",
      },
      {
        id: "q3",
        question: "What is NOT included in the room?",
        options: ["Wi-Fi", "Breakfast", "Parking", "TV"],
        correctAnswer: 2,
        explanation: "Wi-Fi, TV, air conditioning, and breakfast are mentioned — but not parking.",
      },
      {
        id: "q4",
        question: "What is the cancellation policy?",
        options: [
          "Cancel anytime",
          "Cancel up to 24 hours before",
          "Cancel up to 48 hours before",
          "No cancellations allowed",
        ],
        correctAnswer: 2,
        explanation: "'You can cancel up to 48 hours before your arrival without any charge.'",
      },
    ],
    vocabulary: [
      { word: "Reservation", meaning: "A booking made in advance" },
      { word: "Suite", meaning: "A set of luxurious hotel rooms" },
      { word: "Complimentary", meaning: "Given free of charge" },
      { word: "Cancellation policy", meaning: "The rules about canceling a booking" },
    ],
  },
  {
    id: "job-interview",
    title: "Job Interview Conversation",
    level: "B1",
    topic: "Work & Career",
    emoji: "💼",
    duration: "~3 min",
    audioSrc: "/audio/job-interview.mp3",
    transcript: `Interviewer: Good morning! Thank you for coming in today. I'm Sarah, the HR manager. How are you?
Candidate: Good morning! I'm doing well, thank you for having me.
Interviewer: Great! Can you tell me about your previous work experience?
Candidate: Of course. I've worked in marketing for five years. My most recent position was as a Marketing Coordinator at Tech Solutions Inc.
Interviewer: That's impressive! What were your main responsibilities?
Candidate: I was responsible for managing social media campaigns, creating content, and analyzing market trends. I also collaborated with the sales team to develop marketing strategies.
Interviewer: Excellent! Why are you interested in this position?
Candidate: I'm very interested because your company is known for innovation and creativity. I believe my skills in digital marketing align well with your needs.
Interviewer: What are your strengths?
Candidate: I'm a quick learner, detail-oriented, and I work well in teams. I'm also proficient in various marketing tools and software.
Interviewer: And what areas would you like to improve?
Candidate: I'd like to develop my leadership skills further. I'm currently taking courses in project management.
Interviewer: That's admirable! Do you have any questions for me?
Candidate: Yes, could you tell me more about the team I'd be working with?`,
    questions: [
      {
        id: "q1",
        question: "How many years of experience does the candidate have in marketing?",
        options: ["Two years", "Three years", "Five years", "Seven years"],
        correctAnswer: 2,
        explanation: "The candidate states 'I've worked in marketing for five years.'",
      },
      {
        id: "q2",
        question: "What was the candidate's most recent job title?",
        options: ["Marketing Manager", "Marketing Coordinator", "Marketing Director", "Social Media Manager"],
        correctAnswer: 1,
        explanation: "'My most recent position was as a Marketing Coordinator at Tech Solutions Inc.'",
      },
      {
        id: "q3",
        question: "Which is NOT mentioned as a responsibility?",
        options: ["Managing social media", "Creating content", "Analyzing market trends", "Managing finances"],
        correctAnswer: 3,
        explanation: "Social media, content, and market trends are mentioned — but not managing finances.",
      },
      {
        id: "q4",
        question: "What area does the candidate want to improve?",
        options: ["Digital marketing", "Social media", "Leadership skills", "Communication"],
        correctAnswer: 2,
        explanation: "'I'd like to develop my leadership skills further.'",
      },
    ],
    vocabulary: [
      { word: "HR manager", meaning: "Human Resources manager who handles hiring" },
      { word: "Proficient", meaning: "Competent or skilled in doing something" },
      { word: "Detail-oriented", meaning: "Paying careful attention to small details" },
      { word: "Align", meaning: "To match or correspond with something" },
    ],
  },
  {
    id: "travel-plans",
    title: "Planning a Vacation",
    level: "B2",
    topic: "Travel & Leisure",
    emoji: "✈️",
    duration: "~2.5 min",
    audioSrc: "/audio/travel-plans.mp3",
    transcript: `Friend 1: I'm thinking about taking a vacation next month. Do you have any suggestions?
Friend 2: That's exciting! Where are you thinking of going?
Friend 1: I'm considering either Thailand or Portugal. I want somewhere warm with beautiful beaches.
Friend 2: Both are amazing! Thailand is known for its tropical climate, stunning islands, and affordable prices. Plus, the food is incredible.
Friend 1: That sounds great! What about Portugal?
Friend 2: Portugal is wonderful too. It has beautiful coastal towns, rich history, and excellent wine. The weather is pleasant, and it's less crowded than Thailand.
Friend 1: How long would you recommend staying?
Friend 2: For Thailand, I'd suggest at least two weeks to explore different islands and cities. For Portugal, one to two weeks is ideal.
Friend 1: What about the best time to visit?
Friend 2: Thailand is best from November to February when it's dry and cool. Portugal is lovely year-round, but spring and fall are particularly nice.
Friend 1: Thanks for the advice! I think I'll go with Thailand. Can you recommend some specific places?
Friend 2: Absolutely! I'd definitely visit Bangkok, Phuket, and the Phi Phi Islands. And don't miss the night markets for authentic food!`,
    questions: [
      {
        id: "q1",
        question: "What are the two destinations being considered?",
        options: ["Thailand and Vietnam", "Thailand and Portugal", "Portugal and Spain", "Thailand and Greece"],
        correctAnswer: 1,
        explanation: "'I'm considering either Thailand or Portugal.'",
      },
      {
        id: "q2",
        question: "How long does Friend 2 recommend for Thailand?",
        options: ["One week", "One to two weeks", "At least two weeks", "Three weeks"],
        correctAnswer: 2,
        explanation: "'For Thailand, I'd suggest at least two weeks.'",
      },
      {
        id: "q3",
        question: "What is the best time to visit Thailand?",
        options: ["March to May", "June to August", "November to February", "September to October"],
        correctAnswer: 2,
        explanation: "'Thailand is best from November to February when it's dry and cool.'",
      },
      {
        id: "q4",
        question: "Which destination does Friend 1 choose?",
        options: ["Portugal", "Thailand", "Both equally", "Neither"],
        correctAnswer: 1,
        explanation: "'I think I'll go with Thailand.'",
      },
    ],
    vocabulary: [
      { word: "Tropical", meaning: "Relating to warm regions near the equator" },
      { word: "Coastal", meaning: "Located near or along the coast" },
      { word: "Authentic", meaning: "Genuine or real" },
      { word: "Crowded", meaning: "Filled with many people" },
    ],
  },
];

// ─── Level badge colours ───────────────────────────────────────────────────────
const levelColors: Record<string, string> = {
  A1: "bg-emerald-100 text-emerald-800 border-emerald-300",
  A2: "bg-green-100 text-green-800 border-green-300",
  B1: "bg-yellow-100 text-yellow-800 border-yellow-300",
  B2: "bg-orange-100 text-orange-800 border-orange-300",
};

// ─── Audio Player ─────────────────────────────────────────────────────────────
function AudioPlayer({ src, title }: { src: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => { setDuration(audio.duration); setLoaded(true); };
    const onTime = () => setCurrentTime(audio.currentTime);
    const onEnded = () => setPlaying(false);
    const onError = () => setError(true);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  const replay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setPlaying(true);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-white shadow-lg">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
          <Headphones className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm truncate">{title}</p>
          <p className="text-blue-200 text-xs">
            {error ? "Audio unavailable — read the transcript below" : loaded ? `${fmt(currentTime)} / ${fmt(duration)}` : "Loading audio..."}
          </p>
        </div>
      </div>

      {!error && (
        <>
          {/* Progress bar */}
          <div className="relative mb-3">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={seek}
              className="absolute inset-0 w-full opacity-0 cursor-pointer h-2"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 justify-center">
            <button
              onClick={replay}
              className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              title="Replay from start"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={togglePlay}
              className="w-14 h-14 bg-white text-blue-700 hover:bg-blue-50 rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              {playing
                ? <Pause className="w-6 h-6" />
                : <Play className="w-6 h-6 ml-0.5" />}
            </button>
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <Volume2 className="w-4 h-4" />
            </div>
          </div>

          <p className="text-center text-blue-200 text-xs mt-3">
            💡 Tip: Listen once without reading, then check the transcript.
          </p>
        </>
      )}

      {error && (
        <p className="text-center text-blue-200 text-sm">
          📖 Read the transcript below to follow the conversation.
        </p>
      )}
    </div>
  );
}

// ─── Vocabulary Flashcard ─────────────────────────────────────────────────────
function VocabCard({ word, meaning }: VocabItem) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="cursor-pointer select-none"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`rounded-xl p-4 border-2 transition-all min-h-[80px] flex flex-col justify-center ${flipped ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-200 hover:border-blue-400"}`}>
        {flipped ? (
          <p className="text-sm text-center">{meaning}</p>
        ) : (
          <p className="font-bold text-center text-gray-900">{word}</p>
        )}
        <p className={`text-xs text-center mt-1 ${flipped ? "text-blue-200" : "text-gray-400"}`}>
          {flipped ? "← tap to flip back" : "tap to see meaning →"}
        </p>
      </div>
    </div>
  );
}

// ─── Score / CTA Panel ────────────────────────────────────────────────────────
function ResultPanel({
  score,
  total,
  exerciseTitle,
  onRetry,
  onBack,
}: {
  score: number;
  total: number;
  exerciseTitle: string;
  onRetry: () => void;
  onBack: () => void;
}) {
  const pct = Math.round((score / total) * 100);
  const perfect = score === total;
  const good = pct >= 60;

  const messages = perfect
    ? { emoji: "🏆", title: "Perfect Score!", subtitle: "You nailed every question. Your listening skills are excellent!" }
    : good
    ? { emoji: "🎉", title: "Well Done!", subtitle: "Great listening! A few more practice sessions and you'll be perfect." }
    : { emoji: "💪", title: "Keep Going!", subtitle: "Don't worry — every listen makes you better. Try again!" };

  return (
    <div className="space-y-6">
      {/* Score card */}
      <div className={`rounded-2xl p-8 text-center border-2 ${perfect ? "bg-yellow-50 border-yellow-400" : good ? "bg-green-50 border-green-400" : "bg-blue-50 border-blue-400"}`}>
        <div className="text-6xl mb-3">{messages.emoji}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{messages.title}</h3>
        <p className="text-gray-600 mb-4">{messages.subtitle}</p>
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-2xl font-extrabold text-gray-900">{score} / {total}</span>
          <span className="text-gray-400 text-sm">({pct}%)</span>
        </div>
        {/* Star rating */}
        <div className="flex justify-center gap-1 mt-4">
          {[1, 2, 3].map((star) => (
            <Star
              key={star}
              className={`w-7 h-7 ${star <= Math.ceil((score / total) * 3) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={onRetry} variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">
          <RotateCcw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
        <Button onClick={onBack} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
          <ArrowRight className="w-4 h-4 mr-2" />
          Next Exercise
        </Button>
      </div>

      {/* Motivational CTA */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 text-white text-center shadow-xl">
        <div className="text-3xl mb-2">🎯</div>
        <h3 className="text-xl font-bold mb-2">
          You just practised real English — imagine doing this every day with a coach!
        </h3>
        <p className="text-blue-200 text-sm mb-5">
          Mr. Ibrahim builds personalised lessons around exactly the topics you need — whether it's IELTS, business English, or everyday conversation. One session is all it takes to feel the difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%20just%20finished%20a%20listening%20exercise%20on%20Fluentry%20and%20I%27d%20like%20to%20book%20a%20lesson!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-5 rounded-xl shadow-lg w-full sm:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            onClick={onBack}
            className="border-white text-white hover:bg-blue-800 px-6 py-5 rounded-xl w-full sm:w-auto"
          >
            <Zap className="w-4 h-4 mr-2" />
            Practice More
          </Button>
        </div>
        <p className="text-blue-300 text-xs mt-4">
          ✅ Free 10-min call · ✅ No commitment · ✅ Results guaranteed
        </p>
      </div>
    </div>
  );
}

// ─── Exercise Detail View ─────────────────────────────────────────────────────
function ExerciseView({ exercise, onBack }: { exercise: Exercise; onBack: () => void }) {
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [answered, setAnswered] = useState(false);

  const score = exercise.questions.filter(
    (q) => userAnswers[q.id] === q.correctAnswer
  ).length;

  const allAnswered = exercise.questions.every((q) => userAnswers[q.id] !== undefined);

  const handleSelect = (qId: string, idx: number) => {
    if (showResults) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: idx }));
  };

  const handleSubmit = () => setShowResults(true);

  const handleRetry = () => {
    setUserAnswers({});
    setShowResults(false);
    setShowTranscript(false);
  };

  return (
    <div className="space-y-6">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
      >
        ← Back to Exercises
      </button>

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="text-4xl">{exercise.emoji}</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Badge className={`${levelColors[exercise.level]} border text-xs font-bold`}>
              {exercise.level}
            </Badge>
            <Badge variant="outline" className="text-xs">{exercise.topic}</Badge>
            <span className="text-gray-400 text-xs">{exercise.duration}</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">{exercise.title}</h2>
        </div>
      </div>

      {/* Audio Player */}
      <AudioPlayer src={exercise.audioSrc} title={exercise.title} />

      {/* Transcript toggle */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-gray-700 text-sm"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            {showTranscript ? "Hide Transcript" : "Show Transcript"}
          </span>
          {showTranscript ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {showTranscript && (
          <div className="px-5 py-4 bg-white space-y-2 max-h-64 overflow-y-auto">
            {exercise.transcript.split("\n").map((line, i) => {
              const [speaker, ...rest] = line.split(":");
              return (
                <p key={i} className="text-sm text-gray-700">
                  <span className="font-semibold text-blue-700">{speaker}:</span>
                  {rest.join(":")}
                </p>
              );
            })}
          </div>
        )}
      </div>

      {/* Vocabulary flashcards */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-lg">📚</span> Key Vocabulary
          <span className="text-xs font-normal text-gray-400">(tap each card to see the meaning)</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {exercise.vocabulary.map((v, i) => (
            <VocabCard key={i} word={v.word} meaning={v.meaning} />
          ))}
        </div>
      </div>

      {/* Questions */}
      {!showResults ? (
        <div>
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-lg">🧠</span> Comprehension Questions
            <span className="text-xs font-normal text-gray-400">
              ({Object.keys(userAnswers).length}/{exercise.questions.length} answered)
            </span>
          </h3>
          <div className="space-y-5">
            {exercise.questions.map((q, qIdx) => (
              <div key={q.id} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-gray-900 mb-3 text-sm">
                  {qIdx + 1}. {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const selected = userAnswers[q.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(q.id, optIdx)}
                        className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${
                          selected
                            ? "border-blue-600 bg-blue-50 text-blue-900"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 text-gray-700"
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold ${selected ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 text-gray-400"}`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-bold rounded-xl disabled:opacity-50"
          >
            {allAnswered ? "✅ Submit Answers" : `Answer all ${exercise.questions.length} questions to submit`}
          </Button>
        </div>
      ) : (
        <div>
          {/* Show answered questions with feedback */}
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-lg">📝</span> Your Answers
          </h3>
          <div className="space-y-4 mb-6">
            {exercise.questions.map((q, qIdx) => {
              const userAns = userAnswers[q.id];
              const correct = userAns === q.correctAnswer;
              return (
                <div key={q.id} className={`rounded-xl p-5 border-2 ${correct ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400"}`}>
                  <div className="flex items-start gap-3 mb-3">
                    {correct
                      ? <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      : <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />}
                    <p className="font-semibold text-gray-900 text-sm">{qIdx + 1}. {q.question}</p>
                  </div>
                  <div className="space-y-1.5 ml-8">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctAnswer;
                      const isUser = optIdx === userAns;
                      return (
                        <div
                          key={optIdx}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                            isCorrect ? "bg-green-100 text-green-800 font-semibold" :
                            isUser && !isCorrect ? "bg-red-100 text-red-700 line-through" :
                            "text-gray-500"
                          }`}
                        >
                          <span className="font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                          {opt}
                          {isCorrect && <CheckCircle className="w-4 h-4 text-green-600 ml-auto" />}
                        </div>
                      );
                    })}
                  </div>
                  <div className="ml-8 mt-3 p-3 bg-white/70 rounded-lg border border-blue-200">
                    <p className="text-xs text-blue-800">
                      <span className="font-bold">💡 Explanation:</span> {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <ResultPanel
            score={score}
            total={exercise.questions.length}
            exerciseTitle={exercise.title}
            onRetry={handleRetry}
            onBack={onBack}
          />
        </div>
      )}
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function ListeningPractice() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = exercises.find((e) => e.id === selectedId);

  if (selected) {
    return <ExerciseView exercise={selected} onBack={() => setSelectedId(null)} />;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Headphones className="w-4 h-4" />
          4 Real Conversations · All Levels
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Listening Practice</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Listen to real English conversations, build your vocabulary, and test your comprehension. Pick a topic and level to get started.
        </p>
      </div>

      {/* Exercise cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {exercises.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelectedId(ex.id)}
            className="text-left bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg rounded-2xl p-5 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl group-hover:scale-110 transition-transform">{ex.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge className={`${levelColors[ex.level]} border text-xs font-bold`}>{ex.level}</Badge>
                  <span className="text-xs text-gray-400">{ex.topic}</span>
                  <span className="text-xs text-gray-400">· {ex.duration}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{ex.title}</h3>
                <p className="text-gray-500 text-xs">
                  {ex.questions.length} questions · vocabulary flashcards · audio included
                </p>
              </div>
              <div className="w-9 h-9 bg-blue-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors flex-shrink-0">
                <Play className="w-4 h-4 text-blue-600 group-hover:text-white ml-0.5" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 text-center">
        <p className="font-bold text-gray-900 mb-1">Want to practise speaking too?</p>
        <p className="text-gray-500 text-sm mb-4">
          These exercises train your ear. A 1-on-1 session with Mr. Ibrahim trains your mouth — the part that matters most.
        </p>
        <a
          href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27ve%20been%20using%20the%20free%20resources%20on%20Fluentry%20and%20I%27d%20like%20to%20book%20a%20lesson!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-md">
            <MessageCircle className="w-4 h-4 mr-2" />
            Book a Free Strategy Call
          </Button>
        </a>
      </div>
    </div>
  );
}
