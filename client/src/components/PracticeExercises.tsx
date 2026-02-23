import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, BookOpen } from "lucide-react";
import { useState } from "react";

interface Exercise {
  id: string;
  title: string;
  type: "grammar" | "vocabulary" | "writing";
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  description: string;
  questions: Array<{
    id: string;
    question: string;
    type: "multiple-choice" | "fill-blank" | "matching";
    options?: string[];
    correctAnswer: string | number;
    explanation: string;
  }>;
}

const exercises: Exercise[] = [
  {
    id: "present-simple",
    title: "Present Simple Tense",
    type: "grammar",
    level: "A1",
    description: "Practice using the present simple tense with regular and irregular verbs",
    questions: [
      {
        id: "q1",
        question: "She _____ to school every day.",
        type: "fill-blank",
        options: ["go", "goes", "going", "gone"],
        correctAnswer: 1,
        explanation:
          "With third person singular (she), we add 's' to the verb. The correct answer is 'goes'.",
      },
      {
        id: "q2",
        question: "They _____ coffee in the morning.",
        type: "fill-blank",
        options: ["drink", "drinks", "drinking", "drank"],
        correctAnswer: 0,
        explanation:
          "With plural subjects (they), we use the base form of the verb without 's'. The correct answer is 'drink'.",
      },
      {
        id: "q3",
        question: "I _____ English and French.",
        type: "fill-blank",
        options: ["speak", "speaks", "speaking", "spoke"],
        correctAnswer: 0,
        explanation:
          "With 'I', we use the base form of the verb. The correct answer is 'speak'.",
      },
      {
        id: "q4",
        question: "He _____ in a bank.",
        type: "fill-blank",
        options: ["work", "works", "working", "worked"],
        correctAnswer: 1,
        explanation:
          "With 'he', we add 's' to the verb. The correct answer is 'works'.",
      },
    ],
  },
  {
    id: "past-tense",
    title: "Past Simple Tense",
    type: "grammar",
    level: "A2",
    description: "Master the past simple tense with both regular and irregular verbs",
    questions: [
      {
        id: "q1",
        question: "Yesterday, I _____ to the cinema.",
        type: "fill-blank",
        options: ["go", "goes", "went", "going"],
        correctAnswer: 2,
        explanation: "For past events, we use the past simple. 'Went' is the past form of 'go'.",
      },
      {
        id: "q2",
        question: "She _____ her homework last night.",
        type: "fill-blank",
        options: ["do", "does", "did", "doing"],
        correctAnswer: 2,
        explanation: "For past events, we use 'did' as the past form of 'do'.",
      },
      {
        id: "q3",
        question: "They _____ a great time at the party.",
        type: "fill-blank",
        options: ["have", "has", "had", "having"],
        correctAnswer: 2,
        explanation: "For plural subjects in the past, we use 'had'.",
      },
      {
        id: "q4",
        question: "He _____ his keys yesterday.",
        type: "fill-blank",
        options: ["lose", "loses", "lost", "losing"],
        correctAnswer: 2,
        explanation: "'Lost' is the past form of 'lose'.",
      },
    ],
  },
  {
    id: "vocabulary-food",
    title: "Food and Cooking Vocabulary",
    type: "vocabulary",
    level: "A1",
    description: "Learn common food items and cooking-related vocabulary",
    questions: [
      {
        id: "q1",
        question: "What do you use to cut bread?",
        type: "multiple-choice",
        options: ["Fork", "Knife", "Spoon", "Plate"],
        correctAnswer: 1,
        explanation: "A knife is the tool used to cut bread.",
      },
      {
        id: "q2",
        question: "Which one is a vegetable?",
        type: "multiple-choice",
        options: ["Apple", "Carrot", "Banana", "Orange"],
        correctAnswer: 1,
        explanation: "A carrot is a vegetable. The others are fruits.",
      },
      {
        id: "q3",
        question: "What is the opposite of 'hot' food?",
        type: "multiple-choice",
        options: ["Spicy", "Cold", "Salty", "Sweet"],
        correctAnswer: 1,
        explanation: "'Cold' is the opposite of 'hot' when describing food temperature.",
      },
      {
        id: "q4",
        question: "Which meal is eaten in the morning?",
        type: "multiple-choice",
        options: ["Lunch", "Dinner", "Breakfast", "Snack"],
        correctAnswer: 2,
        explanation: "Breakfast is the meal eaten in the morning.",
      },
    ],
  },
  {
    id: "vocabulary-business",
    title: "Business English Vocabulary",
    type: "vocabulary",
    level: "B1",
    description: "Essential vocabulary for business and professional communication",
    questions: [
      {
        id: "q1",
        question: "What is a 'deadline'?",
        type: "multiple-choice",
        options: [
          "The start of a project",
          "The final date to complete something",
          "A meeting with colleagues",
          "A break during work",
        ],
        correctAnswer: 1,
        explanation: "A deadline is the final date or time by which something must be completed.",
      },
      {
        id: "q2",
        question: "Which word means 'to make a plan or strategy'?",
        type: "multiple-choice",
        options: ["Execute", "Develop", "Implement", "Monitor"],
        correctAnswer: 1,
        explanation: "'Develop' means to create or make a plan or strategy.",
      },
      {
        id: "q3",
        question: "What does 'ROI' stand for?",
        type: "multiple-choice",
        options: [
          "Return on Investment",
          "Rate of Interest",
          "Research on Improvement",
          "Retail on Income",
        ],
        correctAnswer: 0,
        explanation: "ROI stands for 'Return on Investment', a key business metric.",
      },
      {
        id: "q4",
        question: "Which term means 'to make something better or more efficient'?",
        type: "multiple-choice",
        options: ["Optimize", "Organize", "Operate", "Observe"],
        correctAnswer: 0,
        explanation: "'Optimize' means to make something as good or effective as possible.",
      },
    ],
  },
  {
    id: "writing-email",
    title: "Writing a Professional Email",
    type: "writing",
    level: "B1",
    description: "Learn how to write clear, professional emails in English",
    questions: [
      {
        id: "q1",
        question: "What is the correct greeting for a formal email?",
        type: "multiple-choice",
        options: ["Hey!", "Hi there!", "Dear Mr. Smith,", "Yo!"],
        correctAnswer: 2,
        explanation: "'Dear Mr. Smith,' is the appropriate formal greeting for a professional email.",
      },
      {
        id: "q2",
        question: "Which sentence is appropriate for the opening of a professional email?",
        type: "multiple-choice",
        options: [
          "I hope this email finds you well.",
          "What's up?",
          "How's it going?",
          "Yo, buddy!",
        ],
        correctAnswer: 0,
        explanation:
          "'I hope this email finds you well.' is a professional and courteous opening.",
      },
      {
        id: "q3",
        question: "How should you end a professional email?",
        type: "multiple-choice",
        options: [
          "Cheers, mate!",
          "Yours sincerely,",
          "See ya!",
          "Later, dude!",
        ],
        correctAnswer: 1,
        explanation: "'Yours sincerely,' is a professional closing for formal emails.",
      },
      {
        id: "q4",
        question: "What should you do if you want to attach a document?",
        type: "multiple-choice",
        options: [
          "Just send the email without mentioning it",
          "Mention the attachment in the email body",
          "Send it in a separate email",
          "Call the recipient instead",
        ],
        correctAnswer: 1,
        explanation:
          "You should mention the attachment in the email body so the recipient knows to expect it.",
      },
    ],
  },
  {
    id: "writing-essay",
    title: "Writing an Essay - Structure and Tips",
    type: "writing",
    level: "B2",
    description: "Master the structure and techniques for writing effective essays",
    questions: [
      {
        id: "q1",
        question: "What are the main parts of an essay?",
        type: "multiple-choice",
        options: [
          "Introduction, Body, Conclusion",
          "Title, Introduction, Conclusion",
          "Introduction, Middle, End",
          "Start, Middle, Finish",
        ],
        correctAnswer: 0,
        explanation:
          "A well-structured essay has three main parts: Introduction, Body, and Conclusion.",
      },
      {
        id: "q2",
        question: "What should the introduction of an essay contain?",
        type: "multiple-choice",
        options: [
          "Your conclusion",
          "Your thesis statement",
          "All your evidence",
          "The conclusion of your argument",
        ],
        correctAnswer: 1,
        explanation:
          "The introduction should present your thesis statement, which is the main idea of your essay.",
      },
      {
        id: "q3",
        question: "How many body paragraphs should an essay typically have?",
        type: "multiple-choice",
        options: ["One", "Two", "Three or more", "As many as possible"],
        correctAnswer: 2,
        explanation:
          "An essay typically has three or more body paragraphs, each supporting the thesis with evidence.",
      },
      {
        id: "q4",
        question: "What is the purpose of the conclusion?",
        type: "multiple-choice",
        options: [
          "To introduce new ideas",
          "To summarize your main points and restate your thesis",
          "To add more evidence",
          "To start a new topic",
        ],
        correctAnswer: 1,
        explanation:
          "The conclusion should summarize your main points and restate your thesis in a new way.",
      },
    ],
  },
];

export default function PracticeExercises() {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string | number>>({});
  const [showResults, setShowResults] = useState(false);

  const currentExercise = exercises.find((ex) => ex.id === selectedExercise);

  const levelColors = {
    A1: "bg-green-100 text-green-800",
    A2: "bg-green-100 text-green-800",
    B1: "bg-yellow-100 text-yellow-800",
    B2: "bg-yellow-100 text-yellow-800",
    C1: "bg-orange-100 text-orange-800",
    C2: "bg-red-100 text-red-800",
  };

  const typeColors = {
    grammar: "bg-blue-100 text-blue-800",
    vocabulary: "bg-purple-100 text-purple-800",
    writing: "bg-pink-100 text-pink-800",
  };

  const handleAnswerSelect = (questionId: string, answer: string | number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Practice Exercises</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Improve your grammar, vocabulary, and writing skills with interactive exercises
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card
              key={exercise.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedExercise(exercise.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={typeColors[exercise.type]}>
                    {exercise.type.charAt(0).toUpperCase() + exercise.type.slice(1)}
                  </Badge>
                  <Badge className={levelColors[exercise.level]}>{exercise.level}</Badge>
                </div>
                <CardTitle className="text-lg">{exercise.title}</CardTitle>
                <CardDescription>{exercise.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <BookOpen className="w-4 h-4 mr-2" />
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
                <p className="text-gray-600">{currentExercise.description}</p>
              </div>
              <div className="flex gap-2">
                <Badge className={typeColors[currentExercise.type]}>
                  {currentExercise.type.charAt(0).toUpperCase() + currentExercise.type.slice(1)}
                </Badge>
                <Badge className={levelColors[currentExercise.level]}>
                  {currentExercise.level}
                </Badge>
              </div>
            </div>
          </div>

          {/* Questions */}
          <Card>
            <CardContent className="pt-6 space-y-8">
              {currentExercise.questions.map((question, qIdx) => (
                <div key={question.id} className="border-b pb-8 last:border-b-0 last:pb-0">
                  <p className="font-semibold text-lg text-gray-900 mb-4">
                    {qIdx + 1}. {question.question}
                  </p>

                  {question.type === "multiple-choice" && question.options && (
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
                  )}

                  {question.type === "fill-blank" && question.options && (
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
                          <span className="flex-1 font-semibold text-blue-600">{option}</span>
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
                  )}

                  {showResults && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
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
