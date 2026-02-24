import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Users,
  TrendingUp,
  MessageSquare,
  BookOpen,
  Award,
  ArrowRight,
  Star,
  Play,
} from 'lucide-react';
import EnglishLevelOnboarding from '../components/EnglishLevelOnboarding';
import Testimonials from '../components/Testimonials';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

const HomeRedesigned: React.FC = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleOnboardingComplete = (data: any) => {
    console.log('Onboarding completed:', data);
    setShowOnboarding(false);
    // Redirect to appropriate learning path based on level
  };

  if (showOnboarding) {
    return (
      <EnglishLevelOnboarding
        onComplete={handleOnboardingComplete}
        onSkip={() => setShowOnboarding(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -ml-48 -mb-48" />
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-green-400/20 text-green-300 text-sm font-medium border border-green-400/30">
                  🎯 Master English with AI
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Master English with{' '}
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  AI-Powered
                </span>{' '}
                Conversations
              </h1>

              <p className="text-xl text-purple-100 leading-relaxed">
                Practice speaking English with our advanced AI language partners.
                Get instant feedback and improve your skills naturally.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setShowOnboarding(true)}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-green-400 to-cyan-400 text-white font-bold hover:shadow-lg hover:shadow-green-400/50 transition transform hover:scale-105"
                >
                  Start Free Assessment
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                <Link
                  to="/book-lesson"
                  className="px-8 py-4 rounded-lg border-2 border-green-400 text-white font-bold hover:bg-green-400/10 transition"
                >
                  Book a Lesson
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 border-2 border-purple-700"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-purple-100">
                    4.8 • 2,000+ students learning
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Interactive Demo */}
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-400" />
                    <span className="text-white font-semibold">AI Language Partner</span>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-3">
                    <div className="bg-purple-700/50 rounded-lg p-3 text-white text-sm">
                      Hello! I'm your AI language partner. How can I help you
                      practice English today?
                    </div>
                    <div className="bg-cyan-500/30 rounded-lg p-3 text-white text-sm ml-8">
                      I'd like to practice speaking about technology
                    </div>
                    <div className="bg-purple-700/50 rounded-lg p-3 text-white text-sm">
                      Great! Technology is fascinating. What interests you most?
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-purple-800/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-xs text-purple-100 mb-2">
                      <span>Performance</span>
                      <span className="text-green-400 font-bold">91.7%</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-white">
                        <span>Pronunciation</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full h-2 bg-purple-900 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need to master English
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'Personalized Learning Path',
                description: 'AI-tailored to your goals and level',
              },
              {
                icon: MessageSquare,
                title: 'AI Conversation Partner',
                description: 'Practice anytime, anywhere',
              },
              {
                icon: TrendingUp,
                title: 'Real-time Progress Tracking',
                description: 'Monitor your improvement',
              },
              {
                icon: Award,
                title: 'Instant Feedback',
                description: 'Get immediate corrections',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tutor Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Practice with Your Personal AI Language Tutor
              </h2>
              <p className="text-lg text-gray-600">
                Engage in natural conversations with our advanced AI tutor that
                adapts to your learning style and helps you improve your English
                speaking skills.
              </p>

              <div className="space-y-4">
                {[
                  'Natural Conversations',
                  'Personalized Learning',
                  'Instant Feedback',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 to-cyan-400 text-white font-bold hover:shadow-lg transition">
                Try AI Tutor Now
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-lg">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white space-y-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-semibold">AI Language Tutor</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-purple-700/50 rounded p-2">
                    Hello! How can I help you practice today?
                  </div>
                  <div className="bg-cyan-500/30 rounded p-2 ml-6">
                    I want hamburger please
                  </div>
                  <div className="bg-purple-700/50 rounded p-2">
                    Try: "I would like a hamburger, please"
                  </div>
                </div>

                <div className="bg-purple-800/50 rounded p-3 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span>Overall Score</span>
                    <span className="text-green-400 font-bold">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Assessment
            </h2>
            <p className="text-xl text-gray-600">
              Test Your Language Skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Speaking Tests',
                description: 'Evaluate your speaking skills with instant feedback',
                icon: MessageSquare,
              },
              {
                title: 'Reading & Vocabulary',
                description: 'Comprehensive tests for reading comprehension',
                icon: BookOpen,
              },
            ].map((test, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-xl p-8 border border-purple-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center mb-4">
                  <test.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {test.title}
                </h3>
                <p className="text-gray-600 mb-4">{test.description}</p>
                <button className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowOnboarding(true)}
            className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-green-400 to-cyan-400 text-white font-bold hover:shadow-lg transition"
          >
            Try a Sample Assessment
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Blog Posts
            </h2>
            <p className="text-xl text-gray-600">
              Learn English tips and strategies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <Link
                key={idx}
                to="/blog"
                className="bg-white rounded-xl overflow-hidden border border-purple-100 hover:border-purple-300 hover:shadow-lg transition group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-cyan-400" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium mb-3">
                    Learning Guide
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                    How to Master English Speaking
                  </h3>
                  <p className="text-gray-600 text-sm">10 min read</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-green-400 to-cyan-400 text-white font-bold hover:shadow-lg transition"
            >
              View All Blog Posts
              <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeRedesigned;
