import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, Sun, Wind, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RenewableEnergyJobsEnglishMorocco() {
  const { langPrefix } = useLanguage();

  return (
    <>
      <SEO
        title="Green Jobs in Morocco: Why the Renewable Energy Sector Demands English"
        description="Morocco's renewable energy sector is booming, creating 25,000 jobs annually. Discover why English is the required language for these high-paying engineering and management roles."
        path="/blog/renewable-energy-jobs-english-morocco"
        type="article"
        publishedDate="2026-03-10"
        keywords="renewable energy jobs Morocco, green jobs Morocco, English for engineers Morocco, solar energy jobs Morocco"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/renewable-energy-morocco.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Sun className="w-5 h-5" />
              <span>Industry Focus</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Green Jobs in Morocco: Why the Renewable Energy Sector Demands English
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              With mega-projects like the Noor Solar Complex and new wind farms, Morocco is a global leader in green energy. But to land these jobs, your French isn't enough.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 6 min read</p>
          </div>
        </header>

        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <article className="prose prose-lg max-w-none text-gray-800">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                Morocco is undergoing a massive energy transition. The country aims to generate 52% of its electricity from renewable sources by 2030. According to the World Bank, this green transition is expected to create over 25,000 net jobs per year.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">A Global Industry in Our Backyard</h2>
              <p>
                When you look at the companies building and managing these massive solar and wind farms (like the Noor Ouarzazate Solar Complex), they are rarely local. They are multinational consortiums from Germany, Spain, the UK, China, and the US.
              </p>
              <p>
                The working language on these multi-billion-dollar projects is English. Whether you are dealing with technical manuals for a wind turbine, coordinating with international investors, or presenting data to a global board, English is the standard.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who is Getting Hired?</h2>
              <p>
                A quick search on LinkedIn for "Renewable Energy Jobs Morocco" reveals that almost all high-level positions explicitly require "Professional working proficiency in English."
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">The Most In-Demand English-Speaking Roles:</h3>
                <ul className="space-y-2 mb-0">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span><strong>Project Managers:</strong> Coordinating between local teams and international stakeholders.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span><strong>Mechanical/Electrical Engineers:</strong> Reading complex technical documentation and software interfaces.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span><strong>Data Analysts:</strong> Analyzing grid performance and reporting to foreign headquarters.</span></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Cost of Only Speaking French</h2>
              <p>
                Many highly skilled Moroccan engineers find their careers stalled because they only speak French and Arabic. They are passed over for promotions or rejected for management roles simply because they cannot lead a Zoom meeting with British or German partners.
              </p>
              <p>
                In the renewable sector, your engineering degree gets you the interview, but your English fluency gets you the job.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl mt-12 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-0">Power Up Your Career</h3>
                <p className="text-gray-600 mb-6">
                  Are you an engineer looking to break into the renewable energy sector? Fluentry offers specialized Business English coaching tailored for technical professionals.
                </p>
                <Link href={`${langPrefix}/pricing`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                    Start Your Coaching <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            
            {/* CTA — Book a Free Strategy Call */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl text-center my-12">
              <h3 className="text-2xl font-bold mb-3">Ready to Take Your English to the Next Level?</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Book a free 10-minute strategy call with Mr. Ibrahim. No commitment, no payment — just a conversation about your goals and how to reach them.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto font-bold">
                    Take the Free Level Test
                  </Button>
                </Link>
                <Link href={`${langPrefix}/book-lesson`}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Book a Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
