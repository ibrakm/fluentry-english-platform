import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Monitor, CheckCircle, ArrowRight } from "lucide-react";

export default function TechJobsMoroccoEnglish() {
  const { langPrefix } = useLanguage();
  const title = "English for Oracle, HCLTech & Big Tech Jobs in Morocco (What Level Do You Need?)";
  const description = "Oracle, HCLTech, Capgemini, and dozens of global tech companies are hiring in Morocco. Here is exactly what English level they require and how to get there.";
  return (
    <>
      <SEO title={title} description={description}
        path="/blog/tech-jobs-morocco-english-level"
 />
      <div className="min-h-screen bg-gray-50">
        <header className="relative bg-cover bg-center text-white py-24 px-4 text-center" style={{ backgroundImage: "url('/images/blog/tech-jobs-morocco-english.webp')" }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Monitor className="w-5 h-5" /><span>Career English - Tech Jobs</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">English for Oracle, HCLTech and Big Tech Jobs in Morocco</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Global tech giants are hiring in Morocco. Here is exactly what English level they require and how to get there.</p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. - March 10, 2026 - 6 min read</p>
          </div>
        </header>
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-600 mb-8">Morocco has quietly become one of the most attractive tech talent destinations in Africa. Companies like <strong>Oracle, HCLTech, Capgemini, Atos, and IBM</strong> have established major operations in Morocco, and they are actively hiring. The technical skills of Moroccan engineers and developers are well-recognized globally. But there is a barrier that stops many talented candidates from getting these dream jobs: <strong>English proficiency.</strong></p>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Who is Hiring in Morocco Right Now?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {["Oracle", "HCLTech", "Capgemini", "Atos", "IBM", "Accenture", "CGI", "Sopra Steria", "Teleperformance"].map((company, i) => (
                  <div key={i} className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center font-semibold text-blue-800 text-sm">{company}</div>
                ))}
              </div>
              <p className="text-gray-600">All of these companies have one thing in common: their working language is <strong>English</strong>. Internal meetings, project documentation, client communication, and performance reviews are all conducted in English.</p>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">What English Level Do These Companies Require?</h2>
              <div className="space-y-4">
                {[
                  { role: "Junior Developer / Analyst", level: "B1-B2", desc: "You need to read technical documentation, participate in team meetings, and write clear emails. B1 is the minimum, but B2 will make you stand out." },
                  { role: "Senior Developer / Tech Lead", level: "B2-C1", desc: "You will be leading technical discussions, writing detailed specifications, and communicating directly with international clients. B2 is required, C1 is preferred." },
                  { role: "Project Manager / Consultant", level: "C1-C2", desc: "You are the face of the project for the client. You need to present, negotiate, and build relationships in English. Near-native fluency is expected." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-700 font-bold text-sm px-3 py-1 rounded-full h-fit mt-1">{item.level}</div>
                    <div><h3 className="font-bold text-gray-900 mb-1">{item.role}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">The Skills That Will Get You Hired</h2>
              <ul className="space-y-3">
                {["Speaking confidently in technical meetings and stand-ups without hesitation.","Writing clear, professional emails and project updates in English.","Understanding and writing technical documentation, user stories, and specifications.","Presenting your work and ideas to international stakeholders.","Participating in job interviews conducted entirely in English."].map((point, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{point}</span></li>
                ))}
              </ul>
            </section>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Your Dream Tech Job is One Language Away</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">You have the technical skills. Now get the English to match. At Fluentry, we specialize in Professional and Business English for tech professionals.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}><Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto font-bold">Check Your English Level (Free)</Button></Link>
                <Link href={`${langPrefix}/book-lesson`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">Book a Free Consultation Call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              </div>
            </div>
            <p className="text-gray-600 border-t pt-6">The opportunity to work for a global tech leader from right here in Morocco is real. But the door is only open to those who have invested in their English skills.</p>
          </div>
        </main>
      </div>
    </>
  );
}
