import { Button } from "@/components/ui/button";
import {
  CheckCircle, Star, Shield, MessageCircle, ArrowRight,
  Trophy, Clock, Target, BookOpen, Mic, PenLine, Headphones, ChevronDown, ChevronUp,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const faqs = [
  {
    q: "How long does it take to prepare for IELTS in Morocco?",
    a: "Most students need 6 to 12 weeks of focused preparation. With 2 private sessions per week and consistent daily practice, students typically improve by 0.5 to 1.5 band scores in 8 weeks. Students starting below B2 may need 12 weeks.",
  },
  {
    q: "What IELTS band score can I achieve with Fluentry coaching?",
    a: "Most Fluentry students targeting IELTS achieve their goal band score within 8 weeks. Common targets are 6.0 for university admission, 6.5 for UK visas, and 7.0+ for professional purposes. Mr. Ibrahim guarantees improvement — if you don't improve, you continue coaching for free.",
  },
  {
    q: "How much does IELTS preparation cost in Morocco?",
    a: "The Fluentry 8-Week IELTS Program costs 1,200 MAD total (75 MAD/hr, 16 sessions). This is significantly less than language schools in Casablanca and Rabat which charge 150–300 MAD per hour. All sessions are private and 1-on-1.",
  },
  {
    q: "Is online IELTS preparation as effective as in-person classes?",
    a: "Yes — and often more so. Online 1-on-1 coaching via Google Meet allows Mr. Ibrahim to focus entirely on your specific weaknesses. You also save travel time and can schedule sessions around your work or studies.",
  },
  {
    q: "Do you cover all four IELTS sections?",
    a: "Yes. The program covers all four sections: Listening, Reading, Writing (Task 1 and Task 2), and Speaking. Each session is focused on your weakest areas, and we use real IELTS practice materials throughout.",
  },
  {
    q: "Can I prepare for IELTS Academic and IELTS General Training?",
    a: "Yes. Mr. Ibrahim coaches both IELTS Academic (for university admission) and IELTS General Training (for immigration and work visas). Tell him your target when you book your free strategy call.",
  },
  {
    q: "Where can I take the IELTS exam in Morocco?",
    a: "IELTS tests are available at British Council centres in Casablanca, Rabat, Marrakech, Tangier, and Fes. The exam fee is approximately 2,000–2,500 MAD. Fluentry coaching helps you pass on the first attempt and avoid re-sitting fees.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors">
        <h3 className="font-semibold text-gray-900 text-sm pr-4">{q}</h3>
        {open
          ? <ChevronUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </div>
      {open && (
        <div className="px-5 pb-5 bg-white">
          <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function IELTSPreparationMorocco() {
  const { langPrefix } = useLanguage();
  return (
    <>
      <SEO
        title="IELTS Preparation Morocco | Band 7.5+ Guaranteed | Fluentry Tangier"
        description="Morocco's best IELTS preparation coaching online. TESOL-certified Mr. Ibrahim K. guarantees band 7.5+ in 8 weeks — or coaching is free. All 4 sections: Listening, Reading, Writing & Speaking. 1-on-1 sessions from Tangier. Serving Casablanca, Rabat, Marrakech & all Morocco."
        path="/ielts-preparation-morocco"
        keywords="IELTS preparation Morocco, IELTS coaching Morocco, IELTS online Morocco, IELTS Casablanca, IELTS Rabat, IELTS Tangier, IELTS preparation Maroc, تحضير IELTS المغرب, IELTS band score Morocco, IELTS 7.5 Morocco, IELTS Academic Morocco, IELTS General Training Morocco, online IELTS coaching Morocco 2026, best IELTS tutor Morocco, IELTS preparation course Morocco"
        breadcrumbs={[
          { name: "Courses", item: "https://fluentry.online/courses" },
          { name: "IELTS Preparation Morocco", item: "https://fluentry.online/ielts-preparation-morocco" },
        ]}
        faqItems={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        courseData={{
          name: "8-Week IELTS Preparation Program — Morocco",
          description: "Private 1-on-1 IELTS preparation coaching for Moroccan students and professionals. All four sections covered: Listening, Reading, Writing, and Speaking. Guaranteed band score improvement.",
          provider: "Fluentry",
          price: "1200",
          priceCurrency: "MAD",
        }}
      />

      <div className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1d4ed8] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-10 w-96 h-48 bg-indigo-400 rounded-full blur-3xl" />
          </div>
          <div className="relative container mx-auto max-w-5xl px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 px-4 py-2 rounded-full text-sm font-medium mb-5 text-yellow-200">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  Results Guaranteed — or free coaching until you pass
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
                  IELTS Preparation<br />
                  <span className="text-yellow-400">in Morocco</span><br />
                  — Online, 1-on-1
                </h1>
                <p className="text-blue-100 text-lg mb-6">
                  Private IELTS coaching with TESOL-certified Mr. Ibrahim. All four sections covered.
                  Students in Casablanca, Rabat, Tangier, and across Morocco achieve their target band score in 8 weeks.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20IELTS%20preparation%20coaching%20in%20Morocco"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold w-full sm:w-auto">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Book Free Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <Link href={`${langPrefix}/free-test`}>
                    <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 w-full sm:w-auto">
                      Take Free Level Test
                    </Button>
                  </Link>
                </div>
                <p className="text-blue-200 text-sm mt-3">No commitment · Free 10-min consultation</p>
              </div>

              {/* Stats card */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-7 backdrop-blur-sm">
                <h2 className="text-white font-bold text-lg mb-5">8-Week IELTS Program</h2>
                <div className="space-y-4">
                  {[
                    { label: "Total cost", value: "1,200 MAD", sub: "75 MAD/hr · 16 sessions" },
                    { label: "Sessions per week", value: "2 sessions", sub: "1 hour each, via Google Meet" },
                    { label: "Sections covered", value: "All 4", sub: "Listening · Reading · Writing · Speaking" },
                    { label: "Typical result", value: "+0.5 to +1.5", sub: "Band score improvement in 8 weeks" },
                    { label: "Guarantee", value: "100%", sub: "Free coaching if you don't improve" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start justify-between border-b border-white/10 pb-3">
                      <div>
                        <p className="text-blue-200 text-xs">{item.label}</p>
                        <p className="text-xs text-blue-300">{item.sub}</p>
                      </div>
                      <p className="text-white font-bold text-lg">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF BAR ── */}
        <section className="bg-blue-600 py-4 px-4">
          <div className="container mx-auto max-w-4xl flex flex-wrap justify-center gap-8 text-white text-sm">
            {[
              "✅ 100+ students coached",
              "⭐ 4.9/5 average rating",
              "🎯 Guaranteed band improvement",
              "📍 Students across Morocco",
            ].map((item) => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>
        </section>

        {/* ── WHAT'S COVERED ── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Full Coverage</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                All Four IELTS Sections — Covered
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Every session is focused on your weakest areas. We use real IELTS practice materials and
                exam-style tasks from the first session.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Headphones,
                  section: "Listening",
                  color: "blue",
                  desc: "Train with real IELTS audio recordings. Learn to identify key information, follow conversations, and avoid common traps in multiple-choice and completion tasks.",
                  skills: ["Note-taking strategies", "Identifying paraphrasing", "Section 3 & 4 academic listening", "Time management during the test"],
                },
                {
                  icon: BookOpen,
                  section: "Reading",
                  color: "green",
                  desc: "Master skimming, scanning, and close reading for True/False/Not Given, matching headings, and sentence completion tasks — the most time-pressured section.",
                  skills: ["Skimming & scanning techniques", "True/False/Not Given strategy", "Matching headings & features", "Managing 60 minutes across 3 passages"],
                },
                {
                  icon: PenLine,
                  section: "Writing",
                  color: "purple",
                  desc: "Task 1 (graphs, charts, maps, processes) and Task 2 (essays). Mr. Ibrahim marks your writing and gives detailed feedback on Task Achievement, Coherence, Lexical Resource, and Grammar.",
                  skills: ["Task 1: describing data & trends", "Task 2: argument & discussion essays", "Band 7+ vocabulary & grammar", "Coherence and cohesion techniques"],
                },
                {
                  icon: Mic,
                  section: "Speaking",
                  color: "orange",
                  desc: "The section most Moroccan students fear. We practise all three parts — introduction, cue card, and discussion — with real examiner-style questions and instant feedback on fluency and pronunciation.",
                  skills: ["Part 1: personal questions", "Part 2: cue card & 2-minute talk", "Part 3: abstract discussion", "Pronunciation & fluency coaching"],
                },
              ].map(({ icon: Icon, section, color, desc, skills }) => {
                const colorMap: Record<string, string> = {
                  blue: "bg-blue-50 border-blue-200 text-blue-600",
                  green: "bg-green-50 border-green-200 text-green-600",
                  purple: "bg-purple-50 border-purple-200 text-purple-600",
                  orange: "bg-orange-50 border-orange-200 text-orange-600",
                };
                const iconBg: Record<string, string> = {
                  blue: "bg-blue-100 text-blue-600",
                  green: "bg-green-100 text-green-600",
                  purple: "bg-purple-100 text-purple-600",
                  orange: "bg-orange-100 text-orange-600",
                };
                return (
                  <div key={section} className={`bg-white rounded-2xl border-2 ${colorMap[color].split(" ")[1]} p-7`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg[color]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">IELTS</p>
                        <h3 className="font-bold text-gray-900 text-lg">{section}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{desc}</p>
                    <ul className="space-y-2">
                      {skills.map((s) => (
                        <li key={s} className="flex gap-2 text-xs text-gray-700">
                          <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${colorMap[color].split(" ")[2]}`} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROGRAM TIMELINE ── */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">8-Week Roadmap</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                What Happens Each Week
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Every week has a clear focus. You always know what you're working on and why.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { weeks: "Week 1–2", focus: "Diagnostic & Foundation", desc: "Full diagnostic test to identify your exact band score and weakest sections. Build vocabulary, grammar, and exam strategy foundations." },
                { weeks: "Week 3–4", focus: "Listening & Reading Mastery", desc: "Intensive practice on Listening sections 1–4 and Reading passages. Learn skimming, scanning, and trap-avoidance strategies." },
                { weeks: "Week 5–6", focus: "Writing Task 1 & Task 2", desc: "Structured essay and report writing with detailed feedback. Focus on Task Achievement, Coherence, Lexical Resource, and Grammar Range." },
                { weeks: "Week 7", focus: "Speaking & Pronunciation", desc: "All three Speaking parts practised under exam conditions. Pronunciation coaching and fluency drills for Parts 2 and 3." },
                { weeks: "Week 8", focus: "Full Mock Exam & Final Review", desc: "Complete timed mock exam under real conditions. Detailed band-score feedback on every section. Final strategy session before your test." },
              ].map((item, i) => (
                <div key={item.weeks} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 flex-1 border border-gray-100">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{item.weeks}</span>
                      <span className="font-bold text-gray-900">{item.focus}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Who Is This Program For?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "🎓", title: "University Applicants", desc: "Students applying to universities in the UK, Canada, Australia, or Europe who need a 6.0, 6.5, or 7.0 band score." },
                { icon: "✈️", title: "Immigration & Visa", desc: "Professionals applying for UK Skilled Worker visas, Canadian PR, or Australian immigration who need IELTS General Training." },
                { icon: "💼", title: "Career Advancement", desc: "Moroccan professionals who need an IELTS certificate for a promotion, job application, or international transfer." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-blue-100 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
              IELTS Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  text: "After 2 months with Mr. Ibrahim, I passed my IELTS with a 7.5. His lessons are focused and practical — no time wasted. The Writing feedback was especially helpful.",
                  name: "Fatima Z.", role: "IELTS Academic 7.5 — Casablanca", target: "Target: 7.0 for UK university",
                },
                {
                  text: "I needed 6.5 for my visa application. Mr. Ibrahim helped me go from 5.5 to 6.5 in 8 weeks. The Speaking practice sessions made the biggest difference.",
                  name: "Youssef B.", role: "IELTS General 6.5 — Rabat", target: "Target: 6.5 for UK visa",
                },
              ].map((t) => (
                <div key={t.name} className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-blue-600 font-semibold">{t.role}</p>
                    <p className="text-xs text-gray-400">{t.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING CTA ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
              <Trophy className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3">8-Week IELTS Program</h2>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-5xl font-extrabold">1,200</span>
                <span className="text-blue-200 mb-2">MAD total</span>
              </div>
              <p className="text-blue-200 mb-1">75 MAD/hr · 16 private sessions · All 4 sections</p>
              <p className="text-xs text-blue-300 mb-6">Language schools in Morocco charge 150–300 MAD/hr for group classes</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27m%20interested%20in%20the%208-Week%20IELTS%20Program%20(1%2C200%20MAD)"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold px-8 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Free Strategy Call
                  </Button>
                </a>
                <Link href={`${langPrefix}/pricing`}>
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 w-full sm:w-auto">
                    View All Plans
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm text-blue-200">
                <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> Results guaranteed</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Free 10-min call first</span>
                <span className="flex items-center gap-1"><Target className="w-3.5 h-3.5" /> No commitment</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              IELTS Preparation Morocco — FAQ
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section className="py-10 px-4 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto max-w-4xl">
            <p className="text-gray-500 text-sm text-center mb-5">Related Resources</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "How to Pass IELTS in Morocco", href: "/blog/how-to-pass-ielts-in-morocco" },
                { label: "IELTS Speaking Test Guide", href: "/blog/ielts-speaking-test-success-guide" },
                { label: "All English Programs", href: "/courses" },
                { label: "Free Level Test", href: "/free-test" },
                { label: "Pricing", href: "/pricing" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="inline-block bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
