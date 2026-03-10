import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, Train, Briefcase, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MoroccoSpainTunnelEnglishJobs() {
  const { langPrefix } = useLanguage();

  return (
    <>
      <SEO
        title="The Morocco-Spain Tunnel Project: A Goldmine for English Speakers"
        description="The massive Gibraltar Strait Tunnel project is moving forward. Learn why English, not just Spanish or French, will be the critical language for securing a job on this historic infrastructure project."
        path="/blog/morocco-spain-tunnel-english-jobs"
        type="article"
        publishedDate="2026-03-10"
        keywords="Morocco Spain tunnel jobs, Gibraltar strait tunnel jobs, English for engineers Morocco, infrastructure jobs Morocco"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/morocco-spain-tunnel.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Train className="w-5 h-5" />
              <span>Mega Projects</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              The Morocco-Spain Tunnel Project: A Goldmine for English Speakers
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              The historic Gibraltar Strait Tunnel is finally becoming a reality. Here is why English is the secret weapon to landing a job on the project of the century.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 6 min read</p>
          </div>
        </header>

        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <article className="prose prose-lg max-w-none text-gray-800">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                After decades of speculation, the underwater railway tunnel connecting Morocco and Spain across the Strait of Gibraltar has been declared viable and is officially moving forward. While it won't be completed in time for the 2030 World Cup, the planning, engineering, and logistics phases are ramping up massively in 2026.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why English, Not Spanish?</h2>
              <p>
                You might assume that because the tunnel connects Morocco and Spain, the working languages would be Arabic, French, and Spanish. You would be wrong.
              </p>
              <p>
                A project of this magnitude requires the world's top tunnel boring specialists, geological surveyors, and international financiers. Recently, German tunnel specialist Herrenknecht and various UK engineering firms have secured key roles in the feasibility and design studies. 
              </p>
              <p>
                When a German engineering firm, a British logistics company, a Spanish contractor, and the Moroccan government sit down at a table, the meeting is conducted in English.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">Who Will They Hire?</h3>
                <p className="mb-2">The project will require thousands of highly skilled professionals over the next decade, including:</p>
                <ul className="space-y-2 mb-0">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span><strong>Civil & Structural Engineers:</strong> To work alongside international experts.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span><strong>Supply Chain Managers:</strong> To coordinate materials arriving from across Europe and Asia.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span><strong>Environmental Consultants:</strong> To ensure compliance with global maritime standards.</span></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Position Yourself</h2>
              <p>
                If you are a Moroccan professional looking to get involved in this historic project, your technical degree from EMI or EHTP is excellent, but it is only the baseline.
              </p>
              <p>
                The recruiters filtering candidates for these international consortiums are searching LinkedIn for profiles that explicitly demonstrate professional English proficiency. They need local talent who can seamlessly integrate into a multinational team.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl mt-12 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-0">Don't Miss the Opportunity of a Lifetime</h3>
                <p className="text-gray-600 mb-6">
                  Fluentry's Business English programs are designed to help Moroccan professionals master the vocabulary, presentation skills, and confidence needed to work on international mega-projects.
                </p>
                <Link href={`${langPrefix}/pricing`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                    Upgrade Your English Today <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
