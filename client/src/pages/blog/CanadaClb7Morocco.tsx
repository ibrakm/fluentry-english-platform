import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, CheckCircle, GraduationCap, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CanadaClb7Morocco() {
  const { lang, langPrefix } = useLanguage();

  return (
    <>
      <SEO
        title="Canada's New CLB 7 Standards: Your Roadmap to Express Entry Success in 2026 | Fluentry"
        description="Learn about Canada's stricter language requirements for 2026. Discover how to achieve CLB 7 in IELTS or CELPIP for your Express Entry application from Morocco."
        path="/blog/canada-clb7-morocco"
        type="article"
        publishedDate="2026-03-11"
        keywords="Canada immigration Morocco, CLB 7 IELTS, Express Entry 2026, learn English Morocco, IELTS coaching Tangier, Canadian PR for Moroccans, ملعت برغملا ةيزيلجنإلا"
      />
      <div className="min-h-screen bg-gray-50">
        {/* ── HERO SECTION ── */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/canada-clb7-morocco.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <GraduationCap className="w-5 h-5" />
              <span>Immigration & Exams</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Canada's New CLB 7 Standards: Your Roadmap to Express Entry Success in 2026
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Stricter language rules are here. Learn exactly what you need to score to secure your Canadian PR from Morocco.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 11, 2026 · 8 min read</p>
          </div>
        </header>

        {/* ── CONTENT SECTION ── */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <article className="prose prose-lg max-w-none text-gray-800">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                The landscape of Canadian immigration is shifting. As we enter 2026, Immigration, Refugees and Citizenship Canada (IRCC) has introduced more strategic, category-based selections, making language proficiency more critical than ever for Moroccan applicants.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is CLB 7 and Why Does It Matter?</h2>
              <p>
                The Canadian Language Benchmark (CLB) is the national standard used in Canada for describing, measuring, and recognizing the English language proficiency of adult immigrants. For 2026, **CLB 7 has become the "golden ticket"** for most Express Entry streams, especially for university graduates.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">The 2026 Score Breakdown:</h3>
                <ul className="space-y-2 mb-0">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>**University Graduates:** Must hit CLB 7 (IELTS 6.0 in all bands).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>**College Graduates:** Generally require at least CLB 5.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>**Category-Based Draws:** French speakers and Healthcare professionals still get priority, but English is the multiplier.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">IELTS vs. CELPIP: Which Should You Take in Morocco?</h2>
              <p>
                In Morocco, the most common path is the **IELTS General Training**. While CELPIP is also accepted, IELTS test centers are more widely available in cities like Casablanca, Rabat, and Marrakech. To achieve CLB 7, you need a minimum score of **6.0 in Reading, Writing, Listening, and Speaking**.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Challenges for Moroccan Applicants</h2>
              <p>
                Many Moroccan candidates struggle with the **Writing and Speaking** components of the IELTS. Often, they have a strong technical grasp of English but lack the natural fluency or specific essay-writing structures required to hit that 6.0+ mark.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl mt-12 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-0">Ready to Achieve CLB 7?</h3>
                <p className="text-gray-600 mb-6">
                  Don't leave your Canadian dream to chance. Our **8-Week IELTS Accelerator** is specifically designed for Moroccan professionals who need to hit CLB 7 or higher on their first attempt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`${langPrefix}/ielts-preparation`}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full sm:w-auto">
                      View IELTS Program <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href={`${langPrefix}/book-lesson`}>
                    <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                      Book a Strategy Call
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
