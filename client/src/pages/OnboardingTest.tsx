import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

type Stage = "level" | "goals" | "experience" | "email" | "results";

interface LevelOption {
  id: string;
  title: string;
  cefr: string;
  description: string;
}

interface GoalOption {
  id: string;
  title: string;
  icon: string;
}

interface ExperienceOption {
  id: string;
  title: string;
  description: string;
}

const levelOptions: LevelOption[] = [
  {
    id: "beginner",
    title: "Beginner",
    cefr: "A1-A2",
    description: "I can buy things & order food",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    cefr: "B1",
    description: "I can have simple conversations about everyday topics",
  },
  {
    id: "upper-intermediate",
    title: "Upper-Intermediate",
    cefr: "B2",
    description: "I can participate in discussions and explain my opinions.",
  },
  {
    id: "advanced",
    title: "Advanced",
    cefr: "C1-C2",
    description: "I speak confidently in any situation, including work and social settings.",
  },
];

const goalOptions: GoalOption[] = [
  { id: "career", title: "Career Growth", icon: "💼" },
  { id: "travel", title: "Travel", icon: "✈️" },
  { id: "exam", title: "Pass an Exam", icon: "📝" },
  { id: "fluency", title: "Fluency", icon: "🗣️" },
  { id: "confidence", title: "Confidence", icon: "💪" },
  { id: "other", title: "Other", icon: "🎯" },
];

const experienceOptions: ExperienceOption[] = [
  {
    id: "0-6",
    title: "0-6 months",
    description: "Just starting my English journey",
  },
  {
    id: "6-12",
    title: "6-12 months",
    description: "Learning for less than a year",
  },
  {
    id: "1-3",
    title: "1-3 years",
    description: "Learning for 1-3 years",
  },
  {
    id: "3-5",
    title: "3-5 years",
    description: "Learning for 3-5 years",
  },
  {
    id: "5plus",
    title: "5+ years",
    description: "Learning for 5+ years",
  },
];

export default function OnboardingTest() {
  const [stage, setStage] = useState<Stage>("level");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLevelSelect = (levelId: string) => {
    setSelectedLevel(levelId);
    setStage("goals");
  };

  const handleGoalToggle = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((g) => g !== goalId) : [...prev, goalId]
    );
  };

  const handleGoalsNext = () => {
    if (selectedGoals.length === 0) {
      setError("Please select at least one goal");
      return;
    }
    setError("");
    setStage("experience");
  };

  const handleExperienceSelect = (expId: string) => {
    setSelectedExperience(expId);
    setStage("email");
  };

  const handleEmailSubmit = async () => {
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setError("Please enter your email or WhatsApp number");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const levelInfo = levelOptions.find((l) => l.id === selectedLevel);
    const payload = {
      name,
      email: email || "Not provided",
      phone: phone || "Not provided",
      level: levelInfo?.cefr || "Unknown",
      goals: selectedGoals.join(", "),
      experience: selectedExperience,
      testType: "Onboarding Assessment",
    };

    // Submit in background without blocking
    fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {
      /* silent fail */
    });

    setIsSubmitting(false);
    setStage("results");
  };

  const currentProgress = {
    level: 25,
    goals: 50,
    experience: 75,
    email: 90,
    results: 100,
  };

  const progress = currentProgress[stage];

  return (
    <>
      <SEO
        title="English Level Assessment - Fluentry Morocco"
        description="Quick interactive assessment to discover your English level and personalized learning path. Get started in 2 minutes!"
        path="/onboarding-test"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-purple-300">Step {Math.ceil(progress / 25)} of 4</span>
              <span className="text-sm text-purple-300">{progress}%</span>
            </div>
            <div className="w-full bg-purple-950 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Level Selection */}
          {stage === "level" && (
            <Card className="p-8 bg-slate-800/50 border-purple-500/20 backdrop-blur">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-white">What's your current language level?</h2>
                  <p className="text-purple-200">Select the option that best describes you</p>
                </div>

                <div className="space-y-3">
                  {levelOptions.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => handleLevelSelect(level.id)}
                      className="w-full p-4 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-purple-500/30 hover:border-purple-500/60 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {level.title}
                          </h3>
                          <p className="text-sm text-purple-200">{level.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-purple-400">{level.cefr}</span>
                          <ChevronRight className="w-5 h-5 text-purple-400 mt-1" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {/* Goals Selection */}
          {stage === "goals" && (
            <Card className="p-8 bg-slate-800/50 border-purple-500/20 backdrop-blur">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-white">What are your goals?</h2>
                  <p className="text-purple-200">Select all that apply</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {goalOptions.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => handleGoalToggle(goal.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedGoals.includes(goal.id)
                          ? "bg-purple-600/50 border-purple-500"
                          : "bg-slate-700/50 border-purple-500/30 hover:border-purple-500/60"
                      }`}
                    >
                      <div className="text-2xl mb-2">{goal.icon}</div>
                      <h3 className="font-semibold text-white text-sm">{goal.title}</h3>
                    </button>
                  ))}
                </div>

                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <Button
                  size="lg"
                  onClick={handleGoalsNext}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6"
                >
                  Continue
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          )}

          {/* Experience Selection */}
          {stage === "experience" && (
            <Card className="p-8 bg-slate-800/50 border-purple-500/20 backdrop-blur">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-white">How long have you been learning English?</h2>
                  <p className="text-purple-200">This helps us personalize your learning path</p>
                </div>

                <div className="space-y-3">
                  {experienceOptions.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => handleExperienceSelect(exp.id)}
                      className="w-full p-4 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-purple-500/30 hover:border-purple-500/60 transition-all text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-purple-200">{exp.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-purple-400" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          )}

          {/* Email Capture */}
          {stage === "email" && (
            <Card className="p-8 bg-slate-800/50 border-purple-500/20 backdrop-blur">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold text-white">Get your personalized plan</h2>
                  <p className="text-purple-200">Enter your details to receive your results</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ahmed Hassan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none text-white placeholder-purple-300/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. +212 6XX XXX XXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none text-white placeholder-purple-300/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. ahmed@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none text-white placeholder-purple-300/50 transition-colors"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <Button
                  size="lg"
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6"
                >
                  {isSubmitting ? "Submitting..." : "Get My Personalized Plan"}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-xs text-purple-300">
                  🔒 Your information is private and will only be used to send your results.
                </p>
              </div>
            </Card>
          )}

          {/* Results */}
          {stage === "results" && (
            <Card className="p-8 bg-gradient-to-br from-purple-600/50 to-blue-600/50 border-purple-500/50 backdrop-blur">
              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <h2 className="text-4xl font-bold text-white">🎉 Assessment Complete!</h2>
                  <p className="text-purple-100">
                    We've received your information and will send your personalized learning plan shortly.
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6 space-y-4">
                  <div>
                    <p className="text-purple-200 text-sm">Your Level</p>
                    <p className="text-2xl font-bold text-white">
                      {levelOptions.find((l) => l.id === selectedLevel)?.cefr}
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-200 text-sm">Your Goals</p>
                    <p className="text-white">
                      {selectedGoals
                        .map((g) => goalOptions.find((go) => go.id === g)?.title)
                        .join(", ")}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <a href={`https://wa.me/212672580932?text=Hi%20Mr.%20Ibrahim!%20I%20just%20completed%20your%20English%20assessment.%20My%20level%20is%20${levelOptions.find((l) => l.id === selectedLevel)?.cefr}.%20I'm%20ready%20to%20start%20learning!`} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6">
                      💬 Message Mr. Ibrahim on WhatsApp
                    </Button>
                  </a>
                  <a href="/book-lesson">
                    <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white/10 font-bold py-6">
                      📅 Book Your First Lesson
                    </Button>
                  </a>
                </div>

                <p className="text-purple-200 text-sm">
                  Check your email for your personalized learning recommendations!
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
