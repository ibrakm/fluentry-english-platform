import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import {
  MessageCircle, CheckCircle, Clock, Users, Star,
  ArrowRight, Shield, Target, Zap
} from "lucide-react";

const steps = [
  {
    step: "1",
    icon: MessageCircle,
    title: "Send a WhatsApp Message",
    desc: "Click the button below to message Mr. Ibrahim directly. Tell him your name, your current English level, and your goal.",
  },
  {
    step: "2",
    icon: Clock,
    title: "Free 10-Minute Strategy Call",
    desc: "Mr. Ibrahim will schedule a quick free call to understand your goals and recommend the best plan for you.",
  },
  {
    step: "3",
    icon: Target,
    title: "Get Your Personalised Plan",
    desc: "You receive a clear week-by-week learning plan tailored to your level, your goals, and your schedule.",
  },
  {
    step: "4",
    icon: Zap,
    title: "Start Your First Session",
    desc: "Book your first lesson via Google Meet. Sessions are 1 hour, fully personalised, and start from 100 MAD.",
  },
];

const plans = [
  {
    name: "Single Lesson",
    price: "100 MAD",
    desc: "One 1-hour session. No commitment.",
    waText: "single%20lesson%20(100%20MAD)",
    color: "border-gray-300",
    btnCls: "bg-gray-700 hover:bg-gray-800 text-white",
  },
  {
    name: "Standard — 2 lessons/week",
    price: "800 MAD/month",
    desc: "8 sessions per month. Steady, consistent progress.",
    waText: "Standard%20plan%20(800%20MAD%2Fmonth%20%E2%80%94%202%20lessons%2Fweek)",
    color: "border-blue-600",
    btnCls: "bg-blue-600 hover:bg-blue-700 text-white",
    popular: true,
  },
  {
    name: "Intensive — 4 lessons/week",
    price: "1,600 MAD/month",
    desc: "16 sessions per month. Faster results.",
    waText: "Intensive%20plan%20(1%2C600%20MAD%2Fmonth%20%E2%80%94%204%20lessons%2Fweek)",
    color: "border-orange-500",
    btnCls: "bg-orange-500 hover:bg-orange-600 text-white",
  },
];

export default function BookLesson() {
  return (
    <>
      <SEO
        title="Book an English Lesson Online in Morocco | Fluentry"
        description="Book a 1-on-1 English lesson with TESOL-certified coach Mr. Ibrahim K. in Morocco. 100 MAD/hr. Free 10-min strategy call. Flexible scheduling via Google Meet. IELTS & Business English."
        path="/book-lesson"
        keywords="book English lesson Morocco, online English tutor booking Morocco, English lesson appointment Morocco, réserver cours anglais Maroc, حجز درس إنجليزي المغرب, schedule English lesson Morocco, English lesson WhatsApp Morocco, English tutor contact Morocco"
        breadcrumbs={[{ name: "Book a Lesson", item: "https://fluentry.online/book-lesson" }]}
        faqItems={[
          { question: "How do I book an English lesson with Fluentry in Morocco?", answer: "Booking is simple: click the WhatsApp button on this page, send a message to Mr. Ibrahim K., and he will schedule your free 10-minute strategy call within 24 hours. No forms, no waiting — just a direct conversation about your goals." },
          { question: "Is the first lesson free?", answer: "Fluentry offers a free 10-minute strategy call — not a full lesson, but a focused conversation to understand your goals, assess your current level, and recommend the right programme. There is no obligation to continue after the call." },
          { question: "What platform do you use for online English lessons?", answer: "All lessons are conducted via Google Meet or Zoom. You only need a smartphone or laptop with a stable internet connection. No special software installation is required." },
          { question: "How quickly can I start my English lessons?", answer: "Most students start within 48 hours of their first WhatsApp message. After the free strategy call, Mr. Ibrahim will send you a personalised lesson plan and you can choose your preferred session times." },
          { question: "What happens if I need to cancel or reschedule a lesson?", answer: "You can reschedule any lesson with at least 24 hours notice via WhatsApp. Fluentry offers flexible scheduling to accommodate work and study commitments across Morocco." }
        ]}
      />
      <div className="min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-14 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <Shield className="w-4 h-4 text-green-300" />
              Free 10-Minute Strategy Call — No Commitment
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your English Lesson</h1>
            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">
              Start with a free 10-minute call. Mr. Ibrahim will recommend the best plan for your goals and level.
            </p>
            <a
              href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20lesson%20and%20start%20with%20a%20free%20strategy%20call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-6 rounded-xl shadow-2xl shadow-orange-500/30">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book on WhatsApp Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <p className="text-blue-300 text-sm mt-4">
              +212 672 580 932 · Responds within a few hours
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <Card key={s.step} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {s.step}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-5 h-5 text-blue-600" />
                          <h3 className="font-bold text-gray-900">{s.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{s.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Choose a plan */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-center text-gray-500 mb-12">
              Not sure which plan? Start with the free call — Mr. Ibrahim will recommend the right one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.name} className={`p-6 border-2 ${plan.color} hover:shadow-xl transition-shadow relative flex flex-col`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-2xl font-extrabold text-gray-900 mb-1">{plan.price}</p>
                  <p className="text-gray-500 text-sm mb-5 flex-1">{plan.desc}</p>
                  <a
                    href={`https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20the%20${plan.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={`w-full ${plan.btnCls}`}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book This Plan
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/pricing">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  See Full Pricing Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">What Every Session Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "1-on-1 private session via Google Meet",
                "Personalised lesson plan for your goals",
                "Speaking practice on real-life topics",
                "Feedback on grammar, vocabulary, and pronunciation",
                "WhatsApp support between sessions",
                "Flexible rescheduling up to 24 hours in advance",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="container mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-gray-700 italic text-lg mb-4">
              "After 2 months with Mr. Ibrahim, I passed my IELTS with a 7.5. His lessons are focused and practical — no time wasted."
            </p>
            <p className="font-bold text-gray-900">Fatima Z.</p>
            <p className="text-gray-500 text-sm">IELTS Student, Casablanca</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-orange-100 mb-8 text-lg">
              Message Mr. Ibrahim on WhatsApp. He responds quickly and will schedule your free strategy call within 24 hours.
            </p>
            <a
              href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20lesson%20and%20start%20with%20a%20free%20strategy%20call"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-10 py-6 rounded-xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book on WhatsApp — +212 672 580 932
              </Button>
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
