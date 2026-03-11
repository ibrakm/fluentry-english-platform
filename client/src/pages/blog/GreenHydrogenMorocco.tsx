import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, CheckCircle, Zap, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GreenHydrogenMorocco() {
  const { lang, langPrefix } = useLanguage();

  return (
    <>
      <SEO
        title="English for Green Energy: Getting Hired in Morocco's Hydrogen Boom | Fluentry"
        description="Explore the emerging career opportunities in Morocco's green hydrogen sector. Learn why technical English is essential for engineers and project managers in 2026."
        path="/blog/green-hydrogen-morocco"
        type="article"
        publishedDate="2026-03-11"
        keywords="Green hydrogen Morocco, renewable energy jobs Morocco, technical English Morocco, engineering English coaching, Morocco green energy 2026, learn English Morocco, ملعت برغملا ةيزيلجنإلا"
      />
      <div className="min-h-screen bg-gray-50">
        {/* ── HERO SECTION ── */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/green-hydrogen-morocco.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Zap className="w-5 h-5" />
              <span>Renewable Energy & Career</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              English for Green Energy: Getting Hired in Morocco's Hydrogen Boom
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Morocco is becoming a global leader in green hydrogen. But to work in this international sector, your English must be as strong as your engineering skills.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 11, 2026 · 7 min read</p>
          </div>
        </header>

        {/* ── CONTENT SECTION ── */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <article className="prose prose-lg max-w-none text-gray-800">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                In February 2026, the Moroccan government officially selected a group of international investors for the "Morocco Offer" for green hydrogen. This massive initiative is set to transform the Kingdom into a global energy hub, but it also creates a new demand for a specific type of English: <strong>Technical English for Renewable Energy.</strong>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why English is the Language of Green Hydrogen</h2>
              <p>
                The companies leading these projects are from Germany, the EU, and the Middle East. They operate in English. Whether you are an engineer, a project manager, or a technician, your daily communication — from reading technical specifications to attending international meetings — will be in English.
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-green-900 mb-2 mt-0">Top English Skills Needed:</h3>
                <ul className="space-y-2 mb-0">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Technical Vocabulary:</strong> Electrolysis, desalination, grid integration, and carbon neutrality.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Report Writing:</strong> Ability to write clear, concise technical reports for international stakeholders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span><strong>Presentation Skills:</strong> Pitching projects and explaining complex technical data in English.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Salary Gap for English Speakers</h2>
              <p>
                In Morocco's emerging green energy sector, there is a clear salary gap. Engineers who are fluent in English can earn <strong>30-50% more</strong> than those who only speak French and Arabic. This is because English-speaking professionals can lead international teams and coordinate with global partners.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Prepare Your Career for 2026</h2>
              <p>
                Don't wait until the projects are fully operational. Start mastering the technical English required for the renewable energy sector now. Focus on industry-specific vocabulary and professional communication skills.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl mt-12 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-0">Ready for the Energy Boom?</h3>
                <p className="text-gray-600 mb-6">
                  Join our <strong>Technical English for Engineers</strong> program and get the language skills you need to lead Morocco's green revolution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`${langPrefix}/business-english`}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full sm:w-auto">
                      View Business English <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href={`${langPrefix}/book-lesson`}>
                    <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                      Book a Free Strategy Call
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
