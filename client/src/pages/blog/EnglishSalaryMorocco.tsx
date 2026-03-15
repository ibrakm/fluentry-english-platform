import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp, Briefcase, CheckCircle, ArrowRight } from "lucide-react";

export default function EnglishSalaryMorocco() {
  const { langPrefix } = useLanguage();
  const title = "Why Moroccans Who Speak English Earn 2x More (The Real Numbers)";
  const description = "It's the unspoken rule of the Moroccan job market: a diploma gets you in the door, but English gets you the promotion and the high salary. We break down the real numbers.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/blog/english-speaker-salary-morocco"
      />
      <div className="min-h-screen bg-gray-50">
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/english-salary-morocco.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <TrendingUp className="w-5 h-5" />
              <span>Career English · Salary</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Why Moroccans Who Speak English Earn 2x More
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              A diploma gets you in the door. English gets you the promotion and the high salary. Here are the real numbers.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 5 min read</p>
          </div>
        </header>

        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">

            <p className="text-lg text-gray-600 mb-8">
              In the Moroccan job market, there are two types of candidates: those who speak English, and those who don't. While both may have the same degree and the same technical skills, their career trajectories and earning potential are vastly different. It's a simple, powerful truth: <strong>in Morocco, English proficiency is a direct multiplier on your salary.</strong>
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-500 pl-4">The Salary Gap: By the Numbers</h2>
              <p className="text-gray-600 mb-6">Data from job boards and salary surveys tells a consistent story. Let's look at some common professions:</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 font-bold text-gray-700 text-sm">Profession</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">Without English</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">With Fluent English</th>
                      <th className="p-4 font-bold text-green-600 text-sm">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { job: "Software Developer", low: "8,000–12,000 MAD", high: "15,000–25,000+ MAD", pct: "+87%" },
                      { job: "Marketing Manager", low: "10,000–15,000 MAD", high: "20,000–35,000+ MAD", pct: "+100%" },
                      { job: "Mechanical Engineer", low: "9,000–14,000 MAD", high: "18,000–30,000+ MAD", pct: "+95%" },
                      { job: "Customer Success", low: "5,000–8,000 MAD", high: "10,000–18,000+ MAD", pct: "+90%" },
                      { job: "Project Manager", low: "12,000–18,000 MAD", high: "22,000–40,000+ MAD", pct: "+85%" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-medium text-gray-800 text-sm">{row.job}</td>
                        <td className="p-4 text-gray-600 text-sm">{row.low}</td>
                        <td className="p-4 text-gray-600 text-sm">{row.high}</td>
                        <td className="p-4 text-green-600 font-bold text-sm">{row.pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">Source: Glassdoor, LinkedIn, and ReKrute postings in Morocco (March 2026).</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-500 pl-4">Why the Huge Difference?</h2>
              <p className="text-gray-600 mb-4">
                The reason is simple: <strong>access to international opportunities.</strong> Companies that pay the highest salaries are almost always multinational corporations or Moroccan companies that compete on a global scale.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "They work with international clients, partners, and suppliers — all in English.",
                  "Their internal communication, documentation, and training are often in English.",
                  "They need employees who can represent the company at international conferences and meetings.",
                  "They pay a premium for employees who reduce communication friction with global teams.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600">
                Without English, you are limited to the local market. With English, you become a global candidate — even while living in Morocco.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-500 pl-4">The Career Ceiling Effect</h2>
              <p className="text-gray-600 mb-4">
                Many Moroccan professionals hit an invisible ceiling in their careers. They are technically excellent, hardworking, and dedicated — but they can't move into senior management or international roles because of their English.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: <Briefcase className="w-6 h-6 text-red-500" />, title: "Without English", color: "red", points: ["Stuck in junior/mid roles", "Limited to local companies", "Passed over for promotions", "Cannot attend international meetings"] },
                  { icon: <TrendingUp className="w-6 h-6 text-green-500" />, title: "With Fluent English", color: "green", points: ["Access to senior & director roles", "Eligible for multinational companies", "First in line for promotions", "Can lead international projects"] },
                ].map((card, i) => (
                  <div key={i} className={`p-5 rounded-xl border-2 ${i === 0 ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}>
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">{card.icon} {card.title}</h3>
                    <ul className="space-y-2">
                      {card.points.map((p, j) => (
                        <li key={j} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 0 ? "bg-red-400" : "bg-green-500"}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>


              {/* Internal Link: Business English */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-green-900 mb-2">Master Business English in 12 Weeks</h3>
                <p className="text-green-700 mb-4 text-sm">Fluentry's Business English Mastery programme is designed for Moroccan professionals who need to communicate confidently in meetings, emails, and presentations.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href={`${langPrefix}/courses`}>
                    <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">View Business English Course</Button>
                  </Link>
                  <Link href={`${langPrefix}/pricing`}>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">See Pricing</Button>
                  </Link>
                </div>
              </div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Are You Leaving Money on the Table?</h3>
              <p className="text-yellow-50 mb-6 max-w-xl mx-auto">
                Every day you delay improving your English is another day you are potentially earning less than your full potential. It's the single best investment you can make in your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}>
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 w-full sm:w-auto font-bold">
                    Find Your English Level (Free)
                  </Button>
                </Link>
                <Link href={`${langPrefix}/book-lesson`}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Book a Free Consultation Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <p className="text-gray-600 border-t pt-6">
              Your degree and technical skills are valuable, but in today's globalized world, they are not enough. Combine your expertise with fluent English, and you will become unstoppable.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
