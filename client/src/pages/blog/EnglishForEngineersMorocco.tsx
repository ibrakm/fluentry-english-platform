import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Settings, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";

export default function EnglishForEngineersMorocco() {
  const { langPrefix } = useLanguage();
  const title = "English for Moroccan Engineers: Why Your Degree Is Not Enough Anymore";
  const description = "In Morocco's booming industrial, aerospace, and automotive sectors, a technical degree gets you an interview, but English gets you the job and the promotion. Here is why.";
  return (
    <>
      <SEO title={title} description={description} canonical="https://fluentry.online/en/blog/english-for-engineers-morocco"
        schema={{"@context":"https://schema.org","@type":"BlogPosting","headline":title,"description":description,"image":"https://fluentry.online/images/blog/english-for-engineers-morocco.jpg","author":{"@type":"Person","name":"Ibrahim K."},"publisher":{"@type":"Organization","name":"Fluentry"},"datePublished":"2026-03-10"}} />
      <div className="min-h-screen bg-gray-50">
        <header className="relative bg-cover bg-center text-white py-24 px-4 text-center" style={{ backgroundImage: "url('/images/blog/english-for-engineers-morocco.jpg')" }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Settings className="w-5 h-5" /><span>Career English - Engineering</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">English for Moroccan Engineers: Why Your Degree Is Not Enough Anymore</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">OCP, Boeing, Airbus, and Renault are all hiring in Morocco. Here is why English is the skill that separates the top engineers from the rest.</p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. - March 10, 2026 - 6 min read</p>
          </div>
        </header>
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-600 mb-8">Morocco is rapidly becoming a global hub for industry. Giants like <strong>OCP, Boeing, Airbus, and Renault</strong> have massive operations here, and they are all looking for world-class engineering talent. You have the degree, the technical skills, and the ambition. But in 2026, there is another critical skill that separates the top engineering candidates from the rest: <strong>English proficiency.</strong></p>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-indigo-600 pl-4">The Lingua Franca of Modern Engineering</h2>
              <p className="text-gray-600 mb-4">In today's interconnected world, engineering is a global language, and that language is English. Here is why your engineering degree is incomplete without it:</p>
              <div className="space-y-4">
                {[
                  { icon: <Settings className="w-6 h-6 text-indigo-600" />, title: "Technical Documentation", desc: "Manuals, specifications, research papers, and software documentation are almost always in English. The inability to read these documents fluently is a major handicap." },
                  { icon: <TrendingUp className="w-6 h-6 text-green-600" />, title: "International Collaboration", desc: "Moroccan engineers work on projects with teams from Germany, France, the US, and Japan. English is the only common language for effective collaboration in meetings, emails, and project management tools." },
                  { icon: <ArrowRight className="w-6 h-6 text-blue-600" />, title: "Career Progression", desc: "To move into a senior or management role, you must be able to communicate with international leadership, present at global conferences, and negotiate with foreign suppliers. Without English, your career will hit a ceiling." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div><h3 className="font-bold text-gray-900 mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-indigo-600 pl-4">The Salary Premium for English-Speaking Engineers</h2>
              <p className="text-gray-600 mb-4">The salary premium for engineers who speak fluent English can be as high as <strong>95%</strong>. Companies are willing to pay top dollar for engineers who can operate in a global environment.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 font-bold text-gray-700 text-sm">Engineering Role</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">Without English</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">With Fluent English</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[["Mechanical Engineer","9,000-14,000 MAD","18,000-30,000+ MAD"],["Electrical Engineer","10,000-15,000 MAD","20,000-32,000+ MAD"],["Civil Engineer","8,000-13,000 MAD","16,000-28,000+ MAD"],["Software Engineer","10,000-16,000 MAD","20,000-40,000+ MAD"]].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-medium text-gray-800 text-sm">{row[0]}</td>
                        <td className="p-4 text-gray-600 text-sm">{row[1]}</td>
                        <td className="p-4 text-green-600 font-bold text-sm">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-indigo-600 pl-4">The English Skills Every Engineer Needs</h2>
              <ul className="space-y-3">
                {["Reading and understanding complex technical documentation, standards, and specifications.","Writing clear technical reports, project proposals, and professional emails.","Presenting your engineering solutions to international clients and management.","Participating confidently in technical meetings and design reviews with global teams.","Negotiating with international suppliers and contractors."].map((point, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{point}</span></li>
                ))}
              </ul>
            </section>
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Speak the Language of Global Engineering</h3>
              <p className="text-indigo-100 mb-6 max-w-xl mx-auto">You are a talented engineer. Do not let language be the barrier that limits your potential. Fluentry's English for Engineers course is tailored to your specific needs - the technical vocabulary, presentation skills, and professional communication you use every day on the job.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}><Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 w-full sm:w-auto font-bold">Check Your English Level (Free)</Button></Link>
                <Link href={`${langPrefix}/book-lesson`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">Book a Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              </div>
            </div>
            <p className="text-gray-600 border-t pt-6">The next time you see a job posting from a top international company in Morocco, read the requirements carefully. English will be there. Be the candidate who is fully prepared to meet that requirement.</p>
          </div>
        </main>
      </div>
    </>
  );
}
