import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Volume2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

interface ListeningExercise {
  id: string;
  title: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  duration: string;
  transcript: string;
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }>;
  vocabulary: Array<{
    word: string;
    meaning: string;
  }>;
}

const listeningExercises: ListeningExercise[] = [
  {
    id: "ordering-coffee",
    title: "Ordering Coffee at a Café",
    level: "A1",
    duration: "2:15",
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
        explanation: "The customer says 'I'll have a medium, please.' when asked about the size.",
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
        explanation: "The barista says 'That's $4.50' when asked about the price.",
      },
    ],
    vocabulary: [
      { word: "Cappuccino", meaning: "A coffee drink made with espresso and steamed milk" },
      { word: "Barista", meaning: "A person who makes and serves coffee" },
      { word: "Keep the change", meaning: "Tell someone to keep the extra money as a tip" },
      { word: "Size", meaning: "The dimensions or amount of something" },
    ],
  },
  {
    id: "hotel-reservation",
    title: "Making a Hotel Reservation",
    level: "A2",
    duration: "3:45",
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
        explanation: "The receptionist mentions Wi-Fi, TV, air conditioning, and breakfast, but doesn't mention parking.",
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
        explanation: "The receptionist says 'You can cancel up to 48 hours before your arrival without any charge.'",
      },
    ],
    vocabulary: [
      { word: "Reservation", meaning: "A booking or arrangement made in advance" },
      { word: "Suite", meaning: "A set of rooms, typically luxurious" },
      { word: "Complimentary", meaning: "Given free of charge" },
      { word: "Cancellation policy", meaning: "The rules about canceling a booking" },
    ],
  },
  {
    id: "job-interview",
    title: "Job Interview Conversation",
    level: "B1",
    duration: "5:20",
    transcript: `Interviewer: Good morning! Thank you for coming in today. I'm Sarah, the HR manager. How are you?
Candidate: Good morning! I'm doing well, thank you for having me.
Interviewer: Great! Let's start with your background. Can you tell me about your previous work experience?
Candidate: Of course. I've worked in marketing for five years. My most recent position was as a Marketing Coordinator at Tech Solutions Inc.
Interviewer: That's impressive! What were your main responsibilities?
Candidate: I was responsible for managing social media campaigns, creating content, and analyzing market trends. I also collaborated with the sales team to develop marketing strategies.
Interviewer: Excellent! Why are you interested in this position?
Candidate: I'm very interested in this role because your company is known for innovation and creativity. I believe my skills in digital marketing align well with your needs, and I'm excited about the opportunity to contribute to your team.
Interviewer: That's great to hear. What are your strengths?
Candidate: I'm a quick learner, detail-oriented, and I work well in teams. I'm also proficient in various marketing tools and software.
Interviewer: And what would you say are areas you'd like to improve?
Candidate: I'd like to develop my leadership skills further. I'm currently taking courses in project management to enhance my abilities in this area.
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
        explanation: "The candidate says 'My most recent position was as a Marketing Coordinator at Tech Solutions Inc.'",
      },
      {
        id: "q3",
        question: "Which of the following is NOT mentioned as a responsibility?",
        options: ["Managing social media campaigns", "Creating content", "Analyzing market trends", "Managing finances"],
        correctAnswer: 3,
        explanation: "The candidate mentions social media, content, market trends, and sales collaboration, but not managing finances.",
      },
      {
        id: "q4",
        question: "What area does the candidate want to improve?",
        options: ["Digital marketing", "Social media", "Leadership skills", "Communication"],
        correctAnswer: 2,
        explanation: "The candidate says 'I'd like to develop my leadership skills further.'",
      },
    ],
    vocabulary: [
      { word: "HR manager", meaning: "Human Resources manager who handles hiring and employee matters" },
      { word: "Proficient", meaning: "Competent or skilled in doing something" },
      { word: "Detail-oriented", meaning: "Paying careful attention to small details" },
      { word: "Align", meaning: "To match or correspond with something" },
    ],
  },
  {
    id: "travel-plans",
    title: "Planning a Vacation",
    level: "B2",
    duration: "4:30",
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
        explanation: "Friend 1 says 'I'm considering either Thailand or Portugal.'",
      },
      {
        id: "q2",
        question: "How long does Friend 2 recommend for Thailand?",
        options: ["One week", "One to two weeks", "At least two weeks", "Three weeks"],
        correctAnswer: 2,
        explanation: "Friend 2 says 'For Thailand, I'd suggest at least two weeks.'",
      },
      {
        id: "q3",
        question: "What is the best time to visit Thailand?",
        options: [
          "March to May",
          "June to August",
          "November to February",
          "September to October",
        ],
        correctAnswer: 2,
        explanation: "Friend 2 states 'Thailand is best from November to February when it's dry and cool.'",
      },
      {
        id: "q4",
        question: "Which destination does Friend 1 choose?",
        options: ["Portugal", "Thailand", "Both equally", "Neither"],
        correctAnswer: 1,
        explanation: "Friend 1 concludes 'I think I'll go with Thailand.'",
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

export default function ListeningPractice() {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const currentExercise = listeningExercises.find((ex) => ex.id === selectedExercise);

  const levelColors = {
    A1: "bg-green-100 text-green-800",
    A2: "bg-green-100 text-green-800",
    B1: "bg-yellow-100 text-yellow-800",
    B2: "bg-yellow-100 text-yellow-800",
    C1: "bg-orange-100 text-orange-800",
    C2: "bg-red-100 text-red-800",
  };

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedExercise(null);
    setUserAnswers({});
    setShowResults(false);
  };

  if (!selectedExercise) {
    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Listening Practice</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Improve your listening skills with real-world conversations and comprehension exercises
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {listeningExercises.map((exercise) => (
            <Card
              key={exercise.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedExercise(exercise.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="mb-2">{exercise.title}</CardTitle>
                    <CardDescription>{exercise.duration}</CardDescription>
                  </div>
                  <Badge className={levelColors[exercise.level]}>{exercise.level}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Start Exercise
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Button onClick={handleReset} variant="outline" className="mb-4">
        ← Back to Exercises
      </Button>

      {currentExercise && (
        <div className="space-y-8">
          {/* Header */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">{currentExercise.title}</h2>
                <p className="text-gray-600">Duration: {currentExercise.duration}</p>
              </div>
              <Badge className={levelColors[currentExercise.level]}>
                {currentExercise.level}
              </Badge>
            </div>
          </div>

          {/* Audio Player */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                Listen to the Conversation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <p className="text-gray-600 mb-4">Audio player would be displayed here</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Play Audio
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Transcript */}
          <Card>
            <CardHeader>
              <CardTitle>Transcript</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2 max-h-64 overflow-y-auto">
                {currentExercise.transcript.split("\n").map((line, idx) => (
                  <p key={idx} className="text-gray-700">
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vocabulary */}
          <Card>
            <CardHeader>
              <CardTitle>Key Vocabulary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {currentExercise.vocabulary.map((vocab, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">{vocab.word}</p>
                    <p className="text-gray-600 text-sm">{vocab.meaning}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Questions */}
          <Card>
            <CardHeader>
              <CardTitle>Comprehension Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentExercise.questions.map((question, qIdx) => (
                <div key={question.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                  <p className="font-semibold text-gray-900 mb-4">
                    {qIdx + 1}. {question.question}
                  </p>
                  <div className="space-y-2">
                    {question.options.map((option, optIdx) => (
                      <label
                        key={optIdx}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                          userAnswers[question.id] === optIdx
                            ? "bg-blue-50 border-blue-600"
                            : "border-gray-200 hover:border-gray-300"
                        } ${
                          showResults && optIdx === question.correctAnswer
                            ? "bg-green-50 border-green-600"
                            : ""
                        } ${
                          showResults &&
                          userAnswers[question.id] === optIdx &&
                          optIdx !== question.correctAnswer
                            ? "bg-red-50 border-red-600"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={optIdx}
                          checked={userAnswers[question.id] === optIdx}
                          onChange={() => handleAnswerSelect(question.id, optIdx)}
                          disabled={showResults}
                          className="mr-3"
                        />
                        <span className="flex-1">{option}</span>
                        {showResults && optIdx === question.correctAnswer && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                        {showResults &&
                          userAnswers[question.id] === optIdx &&
                          optIdx !== question.correctAnswer && (
                            <AlertCircle className="w-5 h-5 text-red-600" />
                          )}
                      </label>
                    ))}
                  </div>
                  {showResults && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Explanation:</span> {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Submit Button */}
          {!showResults && (
            <Button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              disabled={Object.keys(userAnswers).length < currentExercise.questions.length}
            >
              Submit Answers
            </Button>
          )}

          {showResults && (
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <p className="text-lg font-semibold text-green-900">
                  Score: {Object.values(userAnswers).filter((ans, idx) => ans === currentExercise.questions[idx].correctAnswer).length} / {currentExercise.questions.length}
                </p>
              </div>
              <Button onClick={handleReset} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Try Another Exercise
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
