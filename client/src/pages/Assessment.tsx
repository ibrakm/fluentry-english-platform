import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ChevronRight, Mail, Calendar, Phone } from 'lucide-react';

const Assessment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email || !level) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          level,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting assessment');
    }
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Assessment Complete - Fluentry</title>
        </Helmet>
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 text-center space-y-8">
            <div className="inline-block">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Assessment Complete!</h2>
              <p className="text-purple-100 text-lg">Thank you for completing the assessment!</p>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30 space-y-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-400 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-purple-100 text-sm">Your Level</p>
                  <p className="text-white font-semibold capitalize">{level}</p>
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

            <div className="space-y-4">
              <p className="text-purple-100">Here's what you can do next:</p>

              <a
                href="/book-lesson"
                className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-green-400 to-cyan-400 text-white font-bold hover:shadow-lg transition"
              >
                <Calendar className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-sm font-semibold">Book Your First Lesson</p>
                  <p className="text-xs opacity-90">Start practicing with our expert coach</p>
                </div>
                <ChevronRight className="w-5 h-5 ml-auto" />
              </a>

              <a
                href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%20just%20completed%20your%20English%20assessment%20and%20would%20like%20to%20know%20more%20about%20personalized%20lessons."
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
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>English Level Assessment - Fluentry</title>
        <meta
          name="description"
          content="Take our English level assessment to discover your CEFR level and get personalized learning recommendations."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white text-sm font-medium">
                Step {step} of 2
              </div>
              <button
                onClick={() => window.location.href = '/'}
                className="text-purple-200 hover:text-white text-sm font-medium transition"
              >
                Skip
              </button>
            </div>
            <div className="w-full h-2 bg-purple-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-500"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            {step === 1 ? (
              <div className="text-center space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    What's Your English Level?
                  </h2>
                  <p className="text-purple-100 text-lg">
                    Choose the level that best describes your current English proficiency
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'beginner', label: 'Beginner (A1-A2)', desc: 'I can only speak basic English' },
                    { id: 'intermediate', label: 'Intermediate (B1)', desc: 'I can have simple conversations' },
                    { id: 'upper-intermediate', label: 'Upper-Intermediate (B2)', desc: 'I can discuss complex topics' },
                    { id: 'advanced', label: 'Advanced (C1-C2)', desc: 'I speak fluently and naturally' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setLevel(option.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                        level === option.id
                          ? 'border-green-400 bg-green-400/10'
                          : 'border-purple-400/30 bg-purple-400/5 hover:border-purple-400/50'
                      }`}
                    >
                      <h4 className="text-white font-bold">{option.label}</h4>
                      <p className="text-purple-200 text-sm">{option.desc}</p>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!level}
                  className={`w-full px-6 py-3 rounded-lg font-bold transition ${
                    level
                      ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-white hover:shadow-lg'
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  Continue <ChevronRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="text-center space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    One More Thing...
                  </h2>
                  <p className="text-purple-100 text-lg">
                    Share your email to get personalized recommendations
                  </p>
                </div>

                <div className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-purple-400/30 text-white placeholder-purple-300/50 focus:border-green-400 focus:outline-none transition"
                  />
                  <p className="text-purple-100 text-sm">
                    We'll send your personalized recommendations and assessment results to this email.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 px-6 py-3 rounded-lg border-2 border-purple-300 text-white font-medium hover:bg-purple-400/10 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!email}
                    className={`flex-1 px-6 py-3 rounded-lg font-bold transition ${
                      email
                        ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-white hover:shadow-lg'
                        : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    }`}
                  >
                    Complete <ChevronRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-purple-100 text-sm">
            Your data is secure and will help personalize your learning experience
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;
