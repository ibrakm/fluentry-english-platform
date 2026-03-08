import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import {
  Users, Star, CheckCircle, MessageCircle, Clock, Calendar,
  TrendingUp, Award, Zap, BookOpen, Mic, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";

const programmes = [
  {
    id: "ielts-group",
    badge: "Most Popular",
    badgeColor: "bg-blue-600",
    title: "IELTS Preparation Group",
    subtitle: "Target: IELTS 6.5–7.5",
    level: "B1–B2",
    sessions: "8 sessions/month",
    duration: "2 sessions/week",
    groupSize: "4–5 students",
    schedule: "Saturdays & Sundays",
    price: "40",
    priceNote: "per student / per session",
    totalPrice: "320 MAD / month",
    color: "border-blue-500",
    headerBg: "bg-gradient-to-br from-blue-700 to-blue-900",
    features: [
      "IELTS Speaking Part 1, 2 & 3 full practice",
      "Writing Task 1 & 2 with individual feedback",
      "Reading & Listening strategies",
      "Mock exam every 2 weeks with band score",
      "WhatsApp group for daily practice",
      "Personalised vocabulary lists per student",
    ],
    results: "Average improvement: +1.5 band score",
    cta: "Join IELTS Group",
    waText: "Hi Ibrahim, I'm interested in the IELTS Group Coaching programme. Can you tell me about the next intake?",
  },
  {
    id: "business-group",
    badge: "New",
    badgeColor: "bg-green-600",
    title: "Business English Group",
    subtitle: "For professionals & job seekers",
    level: "B1–C1",
    sessions: "8 sessions/month",
    duration: "2 sessions/week",
    groupSize: "4–6 students",
    schedule: "Saturdays & Sundays",
    price: "50",
    priceNote: "per student / per session",
    totalPrice: "360 MAD / month",
    color: "border-green-500",
    headerBg: "bg-gradient-to-br from-green-700 to-green-900",
    features: [
      "Emails, reports & professional writing",
      "Meetings, presentations & negotiations",
      "Job interview preparation in English",
      "LinkedIn profile review in English",
      "Business vocabulary & idioms",
      "Real case studies from Moroccan companies",
    ],
    results: "Average outcome: Passed job interview in English",
    cta: "Join Business Group",
    waText: "Hi Ibrahim, I'm interested in the Business English Group Coaching programme. Can you tell me more?",
  },
  {
    id: "speaking-group",
    badge: "Best Value",
    badgeColor: "bg-orange-500",
    title: "Speaking Confidence Group",
    subtitle: "From hesitant to fluent",
    level: "A2–B2",
    sessions: "8 sessions/month",
    duration: "2 sessions/week",
    groupSize: "4–6 students",
    schedule: "Saturdays & Sundays",
    price: "35",
    priceNote: "per student / per session",
    totalPrice: "280 MAD / month",
    color: "border-orange-500",
    headerBg: "bg-gradient-to-br from-orange-600 to-orange-800",
    features: [
      "Pronunciation drills (P/B, TH, V sounds)",
      "Fluency drilling — no pausing, no freezing",
      "Shadow speaking with native audio",
      "Role plays: phone calls, meetings, travel",
      "Thinking in English — eliminating translation",
      "Weekly recorded speaking test with feedback",
    ],
    results: "Average improvement: A2→B1 or B1→B2 in 4 weeks",
    cta: "Join Speaking Group",
    waText: "Hi Ibrahim, I'm interested in the Speaking Confidence Group Coaching programme. Can you tell me more?",
  },
];

const faqs = [
  {
    q: "How is group coaching different from 1-on-1 lessons?",
    a: "Group coaching is more affordable (35–50 MAD per session vs 100 MAD for 1-on-1) and gives you the added benefit of practising with peers at a similar level. You hear other students' mistakes and corrections, which reinforces your own learning. The trade-off is less individual attention per session. Most students do a group programme first, then upgrade to 1-on-1 for targeted work on their specific weaknesses.",
  },
  {
    q: "What level do I need to join?",
    a: "Each programme has a recommended level (shown above). If you're unsure of your level, take our free CEFR test at fluentry.online/free-test — it takes 15 minutes and gives you an accurate A1–C2 result. You can also message Mr. Ibrahim on WhatsApp and he will assess your level in a 5-minute voice message exchange.",
  },
  {
    q: "How many students are in each group?",
    a: "Groups are capped at 4–6 students. This is intentional — it keeps the sessions interactive and ensures every student speaks in every session. Mr. Ibrahim does not run groups larger than 6 because the quality of feedback drops significantly above that number.",
  },
  {
    q: "Are the sessions online or in person?",
    a: "All sessions are 100% online via Zoom or Google Meet. This means you can join from anywhere in Morocco — or anywhere in the world. Sessions are recorded and shared with the group within 24 hours so you can review them.",
  },
  {
    q: "What if I miss a session?",
    a: "All sessions are recorded. If you miss one, you will receive the recording within 24 hours and a written summary of the key points covered. However, participation is strongly encouraged — speaking practice cannot be replicated by watching a recording.",
  },
  {
    q: "When does the next group start?",
    a: "Groups start when they are full (4 students minimum). Message Mr. Ibrahim on WhatsApp to join the waiting list for the next intake. Most groups fill within 2–3 weeks of opening.",
  },
];

const comparison = [
  { feature: "Price per session", group: "200–250 MAD", oneOnOne: "400–600 MAD" },
  { feature: "Individual feedback", group: "Shared", oneOnOne: "100% personalised" },
  { feature: "Speaking practice", group: "With peers", oneOnOne: "Direct with coach" },
  { feature: "Peer learning", group: "Yes", oneOnOne: "No" },
  { feature: "Flexible scheduling", group: "Fixed schedule", oneOnOne: "Flexible" },
  { feature: "Progress speed", group: "Good", oneOnOne: "Fastest" },
  { feature: "Best for", group: "Budget-conscious learners", oneOnOne: "Specific goals & fast results" },
];

export default function GroupCoaching() {
  return (
    <>
      <SEO
        title="Group English Coaching in Morocco | IELTS, Business & Speaking Groups — Fluentry"
        description="Join a small-group English coaching programme in Morocco. IELTS preparation, Business English, and Speaking Confidence groups. 200–250 MAD per session. 4–6 students. Online via Zoom."
        keywords="group English coaching Morocco, IELTS group class Morocco, Business English group Morocco, online English group lessons Morocco, affordable English classes Morocco, cours anglais groupe Maroc"
        path="/group-coaching"
        breadcrumbs={[
          { name: "Home", item: "https://fluentry.online/" },
          { name: "Group Coaching", item: "https://fluentry.online/group-coaching" },
        ]}
        type="website"
      />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Users className="w-4 h-4 text-yellow-400" />
            Small groups. Big results. Affordable price.
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Group English Coaching<br />
            <span className="text-yellow-400">Designed for Moroccan Learners</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Learn English in a small group of 4–6 students at your level. Get expert coaching,
            peer practice, and real results — at a price that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%20Group%20Coaching%20programme.%20Can%20you%20tell%20me%20about%20the%20next%20intake%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 text-lg rounded-full shadow-xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                Join the Waiting List
              </Button>
            </a>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full">
                Compare with 1-on-1
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: "4–6", label: "students per group" },
            { icon: Clock, value: "90 min", label: "per session" },
            { icon: TrendingUp, value: "35 MAD", label: "starting price / session" },
            { icon: Award, value: "100%", label: "online via Zoom" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon className="w-7 h-7 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Programme Cards ── */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Programme</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three focused programmes, each designed for a specific goal. Every group is capped at
              6 students to ensure you speak in every session and receive meaningful feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programmes.map((prog) => (
              <div
                key={prog.id}
                className={`bg-white rounded-2xl shadow-sm border-2 ${prog.color} overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Card Header */}
                <div className={`${prog.headerBg} text-white px-6 py-6`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${prog.badgeColor} text-white`}>
                      {prog.badge}
                    </span>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                      {prog.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{prog.title}</h3>
                  <p className="text-white/80 text-sm">{prog.subtitle}</p>

                  {/* Price */}
                  <div className="mt-4 bg-white/10 rounded-xl p-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-yellow-300">{prog.price}</span>
                      <span className="text-sm text-white/70">MAD</span>
                    </div>
                    <div className="text-xs text-white/70">{prog.priceNote}</div>
                    <div className="text-xs text-yellow-300 font-medium mt-1">{prog.totalPrice}</div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-6 py-5 flex-1">
                  {/* Meta info */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: Calendar, label: prog.sessions },
                      { icon: Clock, label: prog.duration },
                      { icon: Users, label: prog.groupSize },
                      { icon: Zap, label: prog.schedule },
                    ].map((meta, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                        <meta.icon className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                        <span>{meta.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-5">
                    {prog.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Result badge */}
                  <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2 mb-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-xs font-semibold text-green-700">{prog.results}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <a
                    href={`https://wa.me/212672580932?text=${encodeURIComponent(prog.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {prog.cta}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Group vs 1-on-1 Comparison ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Group Coaching vs 1-on-1 Lessons</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Both options are taught by Mr. Ibrahim. The right choice depends on your budget,
              timeline, and how specific your goals are.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-gray-50 text-gray-600 font-medium text-sm border border-gray-200">Feature</th>
                  <th className="text-center py-3 px-4 bg-blue-600 text-white font-bold text-sm border border-blue-600">Group Coaching</th>
                  <th className="text-center py-3 px-4 bg-gray-800 text-white font-bold text-sm border border-gray-800">1-on-1 Lessons</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium border border-gray-200">{row.feature}</td>
                    <td className="py-3 px-4 text-sm text-center text-blue-700 font-medium border border-gray-200">{row.group}</td>
                    <td className="py-3 px-4 text-sm text-center text-gray-700 border border-gray-200">{row.oneOnOne}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Many students start with group coaching and upgrade to 1-on-1 once they have a specific goal (IELTS exam, job interview, etc.).
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Group?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Groups fill quickly — typically within 2–3 weeks of opening. Send a WhatsApp message
            now to reserve your spot in the next intake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20joining%20a%20group%20coaching%20programme.%20Can%20you%20tell%20me%20about%20the%20next%20intake%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 text-lg rounded-full shadow-xl w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Reserve My Spot on WhatsApp
              </Button>
            </a>
            <Link href="/success-stories">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full w-full sm:w-auto">
                <Star className="w-4 h-4 mr-2" />
                Read Student Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
