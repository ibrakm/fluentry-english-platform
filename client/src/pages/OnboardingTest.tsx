'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

interface AssessmentData {
  currentLevel?: string;
  goals: string[];
  experience?: string;
  focusAreas: string[];
  challenges: string[];
  timeCommitment?: string;
  learningStyle?: string;
  previousExperience?: string;
  targetExams?: string[];
  motivationLevel?: string;
  name: string;
  whatsapp: string;
  email: string;
}

const CEFR_LEVELS = [
  { id: 'a1', label: 'Beginner', description: 'I can buy things & order food', cefr: 'A1-A2' },
  { id: 'b1', label: 'Intermediate', description: 'I can have simple conversations about everyday topics', cefr: 'B1' },
  { id: 'b2', label: 'Upper-Intermediate', description: 'I can participate in discussions and explain my opinions', cefr: 'B2' },
  { id: 'c1', label: 'Advanced', description: 'I speak confidently in any situation, including work and social settings', cefr: 'C1-C2' },
];

const GOALS = [
  { id: 'career', emoji: '💼', label: 'Career Growth', description: 'Advance in my job' },
  { id: 'travel', emoji: '✈️', label: 'Travel', description: 'Communicate while traveling' },
  { id: 'exam', emoji: '📝', label: 'Pass an Exam', description: 'IELTS, TOEFL, TOEIC' },
  { id: 'fluency', emoji: '🗣️', label: 'Fluency', description: 'Speak naturally and confidently' },
  { id: 'confidence', emoji: '💪', label: 'Confidence', description: 'Feel less anxious speaking' },
  { id: 'other', emoji: '🎯', label: 'Other', description: 'Something else' },
];

const EXPERIENCE = [
  { id: '0-6', label: '0-6 months', description: 'Just starting my English journey' },
  { id: '6-12', label: '6-12 months', description: 'Learning for less than a year' },
  { id: '1-3', label: '1-3 years', description: 'Learning for 1-3 years' },
  { id: '3-5', label: '3-5 years', description: 'Learning for 3-5 years' },
  { id: '5+', label: '5+ years', description: 'Learning for 5+ years' },
];

const FOCUS_AREAS = [
  { id: 'speaking', emoji: '🗣️', label: 'Speaking', description: 'Improve my speaking skills' },
  { id: 'listening', emoji: '👂', label: 'Listening', description: 'Understand native speakers' },
  { id: 'writing', emoji: '✍️', label: 'Writing', description: 'Write emails and essays' },
  { id: 'grammar', emoji: '📚', label: 'Grammar', description: 'Master grammar rules' },
  { id: 'vocabulary', emoji: '📖', label: 'Vocabulary', description: 'Learn new words' },
  { id: 'pronunciation', emoji: '🎤', label: 'Pronunciation', description: 'Sound more natural' },
];

const CHALLENGES = [
  { id: 'fear', label: 'Fear of making mistakes', description: 'I\'m afraid to speak because I might make errors' },
  { id: 'accent', label: 'Accent/Pronunciation', description: 'People don\'t understand my accent' },
  { id: 'speed', label: 'Speaking too slowly', description: 'I can\'t keep up with native speakers' },
  { id: 'vocabulary', label: 'Limited vocabulary', description: 'I don\'t know enough words' },
  { id: 'confidence', label: 'Lack of confidence', description: 'I\'m not confident in my abilities' },
  { id: 'fluency', label: 'Not fluent enough', description: 'I pause too much when speaking' },
];

const TIME_COMMITMENT = [
  { id: '15min', label: '15 min/day', description: 'Very flexible' },
  { id: '30min', label: '30 min/day', description: 'Moderate commitment' },
  { id: '1hour', label: '1 hour/day', description: 'Serious learner' },
  { id: '2hour', label: '2+ hours/day', description: 'Very committed' },
];

const LEARNING_STYLE = [
  { id: 'conversation', label: 'Conversation Practice', description: 'Learn by talking' },
  { id: 'structured', label: 'Structured Lessons', description: 'Follow a curriculum' },
  { id: 'immersion', label: 'Immersion', description: 'Learn through real content' },
  { id: 'mixed', label: 'Mixed Approach', description: 'Combination of methods' },
];

export default function OnboardingTest() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<AssessmentData>({
    goals: [],
    focusAreas: [],
    challenges: [],
    name: '',
    whatsapp: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 12;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting assessment:', error);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-purple-800/50 border-purple-600 p-8 text-white">
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold mb-4">Assessment Complete!</h2>
            <p className="text-lg text-purple-100 mb-6">
              We've received your information and will send your personalized learning plan shortly.
            </p>

            <div className="bg-purple-700/50 rounded-lg p-6 mb-8">
              <p className="text-sm text-purple-200 mb-4">Your Assessment Summary:</p>
              <div className="space-y-2 text-left">
                <p><strong>Level:</strong> {data.currentLevel || 'Not specified'}</p>
                <p><strong>Goals:</strong> {data.goals.join(', ') || 'Not specified'}</p>
                <p><strong>Focus Areas:</strong> {data.focusAreas.join(', ') || 'Not specified'}</p>
                <p><strong>Main Challenges:</strong> {data.challenges.join(', ') || 'Not specified'}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%20just%20completed%20the%20assessment%20on%20Fluentry.%20My%20level%20is%20${data.currentLevel || 'beginner'}%20and%20I%27m%20interested%20in%20${data.goals.join('%20and%20')}.%20Can%20we%20discuss%20a%20learning%20plan%3F`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
                  💬 Message Mr. Ibrahim on WhatsApp
                </Button>
              </a>
              <Link href="/book-lesson">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto">
                  📅 Book Your First Lesson
                </Button>
              </Link>
            </div>

            <p className="text-sm text-purple-300 mt-6">
              Check your email for your personalized learning recommendations!
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4 py-8">
      <Card className="w-full max-w-2xl bg-purple-800/50 border-purple-600 p-8 text-white">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Step {step + 1} of {totalSteps}</span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-purple-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {step === 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">What's your current language level?</h2>
              <p className="text-purple-200 mb-6">Select the option that best describes you</p>
              <div className="space-y-3">
                {CEFR_LEVELS.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => {
                      setData({ ...data, currentLevel: level.label });
                      handleNext();
                    }}
                    className="w-full p-4 border-2 border-dashed border-purple-500 rounded-lg hover:bg-purple-700/50 hover:border-green-400 transition text-left"
                  >
                    <div className="font-semibold">{level.label}</div>
                    <div className="text-sm text-purple-200">{level.description}</div>
                    <div className="text-xs text-purple-300 mt-1">{level.cefr}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">What are your goals?</h2>
              <p className="text-purple-200 mb-6">Select all that apply</p>
              <div className="grid grid-cols-2 gap-3">
                {GOALS.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => {
                      const newGoals = data.goals.includes(goal.label)
                        ? data.goals.filter((g) => g !== goal.label)
                        : [...data.goals, goal.label];
                      setData({ ...data, goals: newGoals });
                    }}
                    className={`p-4 border-2 border-dashed rounded-lg transition text-left ${
                      data.goals.includes(goal.label)
                        ? 'bg-purple-700/50 border-green-400'
                        : 'border-purple-500 hover:bg-purple-700/30'
                    }`}
                  >
                    <div className="text-2xl mb-2">{goal.emoji}</div>
                    <div className="font-semibold text-sm">{goal.label}</div>
                    <div className="text-xs text-purple-200">{goal.description}</div>
                  </button>
                ))}
              </div>
              <Button
                onClick={handleNext}
                disabled={data.goals.length === 0}
                className="w-full mt-6 bg-green-500 hover:bg-green-600"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">How long have you been learning English?</h2>
              <p className="text-purple-200 mb-6">This helps us personalize your learning path</p>
              <div className="space-y-3">
                {EXPERIENCE.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => {
                      setData({ ...data, experience: exp.label });
                      handleNext();
                    }}
                    className="w-full p-4 border-2 border-dashed border-purple-500 rounded-lg hover:bg-purple-700/50 hover:border-green-400 transition text-left"
                  >
                    <div className="font-semibold">{exp.label}</div>
                    <div className="text-sm text-purple-200">{exp.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">What areas do you want to focus on?</h2>
              <p className="text-purple-200 mb-6">Select all that apply</p>
              <div className="grid grid-cols-2 gap-3">
                {FOCUS_AREAS.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => {
                      const newAreas = data.focusAreas.includes(area.label)
                        ? data.focusAreas.filter((a) => a !== area.label)
                        : [...data.focusAreas, area.label];
                      setData({ ...data, focusAreas: newAreas });
                    }}
                    className={`p-4 border-2 border-dashed rounded-lg transition text-left ${
                      data.focusAreas.includes(area.label)
                        ? 'bg-purple-700/50 border-green-400'
                        : 'border-purple-500 hover:bg-purple-700/30'
                    }`}
                  >
                    <div className="text-2xl mb-2">{area.emoji}</div>
                    <div className="font-semibold text-sm">{area.label}</div>
                  </button>
                ))}
              </div>
              <Button
                onClick={handleNext}
                disabled={data.focusAreas.length === 0}
                className="w-full mt-6 bg-green-500 hover:bg-green-600"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">What are your main challenges?</h2>
              <p className="text-purple-200 mb-6">Select all that apply</p>
              <div className="space-y-3">
                {CHALLENGES.map((challenge) => (
                  <button
                    key={challenge.id}
                    onClick={() => {
                      const newChallenges = data.challenges.includes(challenge.label)
                        ? data.challenges.filter((c) => c !== challenge.label)
                        : [...data.challenges, challenge.label];
                      setData({ ...data, challenges: newChallenges });
                    }}
                    className={`w-full p-4 border-2 border-dashed rounded-lg transition text-left ${
                      data.challenges.includes(challenge.label)
                        ? 'bg-purple-700/50 border-green-400'
                        : 'border-purple-500 hover:bg-purple-700/30'
                    }`}
                  >
                    <div className="font-semibold">{challenge.label}</div>
                    <div className="text-sm text-purple-200">{challenge.description}</div>
                  </button>
                ))}
              </div>
              <Button
                onClick={handleNext}
                disabled={data.challenges.length === 0}
                className="w-full mt-6 bg-green-500 hover:bg-green-600"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">How much time can you commit daily?</h2>
              <p className="text-purple-200 mb-6">Be honest about your availability</p>
              <div className="space-y-3">
                {TIME_COMMITMENT.map((time) => (
                  <button
                    key={time.id}
                    onClick={() => {
                      setData({ ...data, timeCommitment: time.label });
                      handleNext();
                    }}
                    className="w-full p-4 border-2 border-dashed border-purple-500 rounded-lg hover:bg-purple-700/50 hover:border-green-400 transition text-left"
                  >
                    <div className="font-semibold">{time.label}</div>
                    <div className="text-sm text-purple-200">{time.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">What's your preferred learning style?</h2>
              <p className="text-purple-200 mb-6">How do you learn best?</p>
              <div className="space-y-3">
                {LEARNING_STYLE.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => {
                      setData({ ...data, learningStyle: style.label });
                      handleNext();
                    }}
                    className="w-full p-4 border-2 border-dashed border-purple-500 rounded-lg hover:bg-purple-700/50 hover:border-green-400 transition text-left"
                  >
                    <div className="font-semibold">{style.label}</div>
                    <div className="text-sm text-purple-200">{style.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 7 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Have you studied English before?</h2>
              <p className="text-purple-200 mb-6">Tell us about your previous experience</p>
              <div className="space-y-3">
                {[
                  { id: 'none', label: 'No formal study', description: 'Self-taught or minimal exposure' },
                  { id: 'school', label: 'School/University', description: 'Studied in academic settings' },
                  { id: 'courses', label: 'Online courses', description: 'Took online English courses' },
                  { id: 'tutor', label: 'Private tutoring', description: 'Had a private tutor before' },
                  { id: 'abroad', label: 'Studied abroad', description: 'Lived in an English-speaking country' },
                ].map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => {
                      setData({ ...data, previousExperience: exp.label });
                      handleNext();
                    }}
                    className="w-full p-4 border-2 border-dashed border-purple-500 rounded-lg hover:bg-purple-700/50 hover:border-green-400 transition text-left"
                  >
                    <div className="font-semibold">{exp.label}</div>
                    <div className="text-sm text-purple-200">{exp.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 8 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Are you preparing for any exams?</h2>
              <p className="text-purple-200 mb-6">Select if applicable</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'ielts', label: 'IELTS' },
                  { id: 'toefl', label: 'TOEFL' },
                  { id: 'toeic', label: 'TOEIC' },
                  { id: 'cambridge', label: 'Cambridge' },
                  { id: 'none', label: 'None' },
                ].map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => {
                      if (exam.id === 'none') {
                        setData({ ...data, targetExams: [] });
                      } else {
                        const newExams = data.targetExams?.includes(exam.label)
                          ? data.targetExams.filter((e) => e !== exam.label)
                          : [...(data.targetExams || []), exam.label];
                        setData({ ...data, targetExams: newExams });
                      }
                    }}
                    className={`p-4 border-2 border-dashed rounded-lg transition ${
                      data.targetExams?.includes(exam.label)
                        ? 'bg-purple-700/50 border-green-400'
                        : 'border-purple-500 hover:bg-purple-700/30'
                    }`}
                  >
                    <div className="font-semibold text-sm">{exam.label}</div>
                  </button>
                ))}
              </div>
              <Button
                onClick={handleNext}
                className="w-full mt-6 bg-green-500 hover:bg-green-600"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 9 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">What's your motivation level?</h2>
              <p className="text-purple-200 mb-6">How committed are you to improving?</p>
              <div className="space-y-3">
                {[
                  { id: 'high', label: 'Very motivated', description: 'I\'m determined to improve' },
                  { id: 'medium', label: 'Moderately motivated', description: 'I want to improve but have other priorities' },
                  { id: 'exploring', label: 'Just exploring', description: 'I\'m curious but not fully committed yet' },
                ].map((level) => (
                  <button
                    key={level.id}
                    onClick={() => {
                      setData({ ...data, motivationLevel: level.label });
                      handleNext();
                    }}
                    className="w-full p-4 border-2 border-dashed border-purple-500 rounded-lg hover:bg-purple-700/50 hover:border-green-400 transition text-left"
                  >
                    <div className="font-semibold">{level.label}</div>
                    <div className="text-sm text-purple-200">{level.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 10 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">What's your name?</h2>
              <p className="text-purple-200 mb-6">We'd love to know who we're helping</p>
              <input
                type="text"
                placeholder="e.g. Ahmed Hassan"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full p-3 bg-purple-700/50 border border-purple-500 rounded-lg text-white placeholder-purple-300 mb-4"
              />
              <Button
                onClick={handleNext}
                disabled={!data.name}
                className="w-full bg-green-500 hover:bg-green-600"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {step === 11 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Get your personalized plan</h2>
              <p className="text-purple-200 mb-6">Enter your details to receive your learning recommendations</p>
              <div className="space-y-4">
                <input
                  type="tel"
                  placeholder="e.g. +212 6XX XXX XXX"
                  value={data.whatsapp}
                  onChange={(e) => setData({ ...data, whatsapp: e.target.value })}
                  className="w-full p-3 bg-purple-700/50 border border-purple-500 rounded-lg text-white placeholder-purple-300"
                />
                <input
                  type="email"
                  placeholder="e.g. ahmed@gmail.com"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="w-full p-3 bg-purple-700/50 border border-purple-500 rounded-lg text-white placeholder-purple-300"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={!data.email}
                  className="w-full bg-green-500 hover:bg-green-600"
                >
                  Get My Personalized Plan <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-xs text-purple-300 mt-4 text-center">
                🔒 Your information is private and will only be used to send your results.
              </p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {step < totalSteps - 1 && step !== 1 && step !== 3 && step !== 4 && step !== 8 && (
          <div className="flex gap-4">
            {step > 0 && (
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="flex-1 border-purple-500 text-white hover:bg-purple-700/50"
              >
                Previous
              </Button>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}
