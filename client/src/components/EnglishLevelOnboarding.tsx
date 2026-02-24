import React, { useState } from 'react';
import { ChevronRight, CheckCircle, MessageCircle, Mail, Calendar, Phone } from 'lucide-react';

interface OnboardingStep {
  id: string;
  title: string;
  description?: string;
  type: 'intro' | 'challenges' | 'encouragement' | 'level' | 'email' | 'results';
  options?: Array<{ id: string; label: string; description?: string }>;
  multiSelect?: boolean;
}

const steps: OnboardingStep[] = [
  {
    id: 'intro',
    title: 'Boost your confidence in English',
    description: 'Can your English surprise me? Let\'s find out!',
    type: 'intro',
  },
  {
    id: 'challenges',
    title: 'What\'s the hardest part of speaking English for you?',
    type: 'challenges',
    multiSelect: true,
    options: [
      { id: 'starting', label: 'Starting conversations' },
      { id: 'flow', label: 'Maintaining a natural flow' },
      { id: 'words', label: 'Finding the right words quickly' },
      { id: 'accents', label: 'Understanding different accents' },
      { id: 'complex', label: 'Expressing complex thoughts' },
    ],
  },
  {
    id: 'encouragement',
    title: 'You\'re doing just fine 😊',
    type: 'encouragement',
  },
  {
    id: 'level',
    title: 'What\'s your current language level?',
    type: 'level',
    options: [
      {
        id: 'a1-a2',
        label: 'Beginner',
        description: 'A1-A2: I can buy things & order food',
      },
      {
        id: 'b1',
        label: 'Intermediate',
        description: 'B1: I can have simple conversations about everyday topics',
      },
      {
        id: 'b2',
        label: 'Upper-Intermediate',
        description: 'B2: I can participate in discussions and explain my opinions',
      },
      {
        id: 'c1-c2',
        label: 'Advanced',
        description: 'C1-C2: I speak confidently in any situation',
      },
    ],
  },
  {
    id: 'email',
    title: 'One more thing...',
    description: 'Share your email to get personalized recommendations',
    type: 'email',
  },
  {
    id: 'results',
    title: 'Assessment Complete!',
    type: 'results',
  },
];

interface OnboardingProps {
  onComplete?: (data: OnboardingData) => void;
  onSkip?: () => void;
}

interface OnboardingData {
  challenges: string[];
  level: string;
  email: string;
}

export const EnglishLevelOnboarding: React.FC<OnboardingProps> = ({
  onComplete,
  onSkip,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentStep = steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleChallengeToggle = (id: string) => {
    setSelectedChallenges((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleLevelSelect = (id: string) => {
    setSelectedLevel(id);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const submitAssessment = async () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      // Send assessment data to backend
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          challenges: selectedChallenges,
          level: selectedLevel,
          email: email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsComplete(true);
        if (onComplete) {
          onComplete({
            challenges: selectedChallenges,
            level: selectedLevel,
            email: email,
          });
        }
      } else {
        alert('Error submitting assessment. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting assessment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentStep.type === 'email') {
      submitAssessment();
    } else if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    }
  };

  const canProceed = () => {
    if (currentStep.type === 'challenges') {
      return selectedChallenges.length > 0;
    }
    if (currentStep.type === 'level') {
      return selectedLevel !== '';
    }
    if (currentStep.type === 'email') {
      return isValidEmail(email);
    }
    return true;
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 text-center space-y-8">
            {/* Success Icon */}
            <div className="inline-block">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Results Summary */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Assessment Complete!
              </h2>
              <p className="text-purple-100 text-lg">
                Thank you for completing the assessment, {email.split('@')[0]}!
              </p>
            </div>

            {/* Results Details */}
            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30 space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-purple-100 text-sm">Your English Level</p>
                  <p className="text-white font-semibold capitalize">
                    {selectedLevel.replace('-', ' ')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-cyan-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-purple-100 text-sm">Focus Areas</p>
                  <p className="text-white font-semibold">
                    {selectedChallenges.length} area{selectedChallenges.length !== 1 ? 's' : ''} identified
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-400/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-purple-100 text-sm">Confirmation Sent</p>
                  <p className="text-white font-semibold text-sm">{email}</p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-4">
              <p className="text-purple-100">
                We've sent detailed recommendations to your email. Here's what you can do next:
              </p>

              <div className="space-y-3">
                {/* Book a Lesson CTA */}
                <a
                  href="/book-lesson"
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-green-400 to-cyan-400 text-white font-bold hover:shadow-lg hover:shadow-green-400/50 transition transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-sm font-semibold">Book Your First Lesson</p>
                    <p className="text-xs opacity-90">Start practicing with our expert coaches</p>
                  </div>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </a>

                {/* Contact CTA */}
                <a
                  href="https://wa.me/1234567890?text=Hi%20Fluentry!%20I%20just%20completed%20your%20English%20assessment%20and%20would%20like%20to%20know%20more%20about%20personalized%20lessons."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border-2 border-white/30 text-white font-bold hover:bg-white/10 transition"
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-sm font-semibold">Contact Us on WhatsApp</p>
                    <p className="text-xs opacity-90">Get personalized guidance from our team</p>
                  </div>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </a>

                {/* Explore Resources CTA */}
                <a
                  href="/free-resources"
                  className="flex items-center gap-3 p-4 rounded-lg border-2 border-white/30 text-white font-bold hover:bg-white/10 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-sm font-semibold">Explore Free Resources</p>
                    <p className="text-xs opacity-90">Start learning right away with our guides</p>
                  </div>
                  <ChevronRight className="w-5 h-5 ml-auto" />
                </a>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-purple-100 text-sm border-t border-white/20 pt-6">
              <p>
                We'll use your assessment results to create a personalized learning plan tailored to your goals and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="text-white text-sm font-medium">
              Step {currentStepIndex + 1} of {steps.length}
            </div>
            <button
              onClick={handleSkip}
              className="text-purple-200 hover:text-white text-sm font-medium transition"
            >
              Skip
            </button>
          </div>
          <div className="w-full h-2 bg-purple-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
          {/* Avatar and Title */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {currentStep.title}
            </h2>
            {currentStep.description && (
              <p className="text-purple-100 text-lg">
                {currentStep.description}
              </p>
            )}
          </div>

          {/* Step Content */}
          {currentStep.type === 'intro' && (
            <div className="text-center">
              <p className="text-purple-100 mb-8">
                Free assessment — it takes just 4 min
              </p>
              <div className="inline-flex items-center gap-2 bg-green-400/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                4.8 • 14K+ ratings
              </div>
            </div>
          )}

          {currentStep.type === 'challenges' && currentStep.options && (
            <div className="space-y-3">
              {currentStep.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleChallengeToggle(option.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedChallenges.includes(option.id)
                      ? 'border-green-400 bg-green-400/10'
                      : 'border-purple-400/30 bg-purple-400/5 hover:border-purple-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                        selectedChallenges.includes(option.id)
                          ? 'border-green-400 bg-green-400'
                          : 'border-purple-300'
                      }`}
                    >
                      {selectedChallenges.includes(option.id) && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-white font-medium">
                      {option.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentStep.type === 'encouragement' && (
            <div className="text-center space-y-6">
              <div className="flex justify-center gap-2 flex-wrap">
                {['😢', '😟', '😕', '😐', '🙂', '😊', '😄', '😆', '😂'].map(
                  (emoji, idx) => (
                    <div
                      key={idx}
                      className="text-4xl opacity-70 hover:opacity-100 transition cursor-pointer"
                    >
                      {emoji}
                    </div>
                  )
                )}
              </div>
              <p className="text-purple-100">
                7 out of 10 also struggle with spontaneous speaking, even after
                years of study
              </p>
            </div>
          )}

          {currentStep.type === 'level' && currentStep.options && (
            <div className="space-y-3">
              {currentStep.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleLevelSelect(option.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedLevel === option.id
                      ? 'border-green-400 bg-green-400/10'
                      : 'border-purple-400/30 bg-purple-400/5 hover:border-purple-400/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold">{option.label}</h4>
                      <p className="text-purple-200 text-sm">
                        {option.description}
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition ${
                        selectedLevel === option.id
                          ? 'border-green-400 bg-green-400'
                          : 'border-purple-300'
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentStep.type === 'email' && (
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:border-green-400 focus:outline-none transition"
                />
              </div>
              <p className="text-purple-100 text-sm">
                We'll send your personalized recommendations and assessment results to this email.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex gap-3">
            {currentStepIndex > 0 && (
              <button
                onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-purple-300 text-white font-medium hover:bg-purple-400/10 transition"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed() || isSubmitting}
              className={`flex-1 px-6 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                canProceed() && !isSubmitting
                  ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-white hover:shadow-lg hover:shadow-green-400/50'
                  : 'bg-gray-400 text-gray-600 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  {currentStepIndex === steps.length - 1 ? 'Complete' : 'Continue'}
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-purple-100 text-sm">
          Your data is secure and will help personalize your learning experience
        </div>
      </div>
    </div>
  );
};

export default EnglishLevelOnboarding;
