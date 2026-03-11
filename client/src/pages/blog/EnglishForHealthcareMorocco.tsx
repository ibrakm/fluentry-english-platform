import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, HeartPulse, Stethoscope, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EnglishForHealthcareMorocco() {
  const { langPrefix } = useLanguage();

  return (
    <>
      <SEO
        title="Why Moroccan Nurses and Doctors Need English in 2026"
        description="The healthcare sector is globalizing. Learn why English proficiency is now essential for Moroccan nurses, doctors, and medical students."
        path="/blog/english-for-healthcare-morocco-nurses-doctors"
        type="article"
        publishedDate="2026-03-10"
        keywords="English for nurses Morocco, medical English Morocco, doctors English Morocco, healthcare jobs English"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/healthcare-english-morocco.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <HeartPulse className="w-5 h-5" />
              <span>Career English</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Why Moroccan Nurses and Doctors Need English in 2026
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              From international research to high-paying jobs abroad, English is the new stethoscope for Moroccan medical professionals.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 6 min read</p>
          </div>
        </header>

        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <article className="prose prose-lg max-w-none text-gray-800">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                Traditionally, the medical field in Morocco has been strictly Francophone. However, in 2026, a massive shift is occurring. Whether you are a nursing student in Casablanca or a practicing surgeon in Rabat, English is rapidly becoming a non-negotiable requirement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Global Medical Community Speaks English</h2>
              <p>
                Over 80% of the world's medical journals, research papers, and clinical trials are published in English. If a Moroccan doctor or medical student relies solely on translated French texts, they are often reading information that is months or years out of date. 
              </p>
              <p>
                To stay at the cutting edge of medicine, attend international conferences, or publish research globally, Medical English is essential.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Opportunities Abroad (UK, US, and Gulf)</h2>
              <p>
                There is currently a massive global shortage of healthcare workers. Countries like the United Kingdom (NHS), Canada, and the UAE are actively recruiting Moroccan nurses and doctors.
              </p>
              <p>
                The salaries in these countries are life-changing, often 5x to 10x higher than local Moroccan salaries. However, the absolute first barrier to entry is passing an English proficiency test like the <strong>OET (Occupational English Test)</strong> or the <strong>IELTS</strong>.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">What is Medical English?</h3>
                <p className="mb-2">It's not just about knowing grammar; it's about:</p>
                <ul className="space-y-2 mb-0">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span><strong>Patient Communication:</strong> Taking a medical history with empathy and clarity.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span><strong>Clinical Terminology:</strong> Understanding international anatomical and pharmacological terms.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span><strong>Documentation:</strong> Writing accurate patient charts and referral letters.</span></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The U.S. Mission and Local NGOs</h2>
              <p>
                Even if you plan to stay in Morocco, international organizations, embassies (like the recent U.S. Mission hiring in Morocco), and high-end private clinics dealing with expats require their nursing staff to speak fluent English.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl mt-12 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-0">Prepare for Your OET or IELTS</h3>
                <p className="text-gray-600 mb-6">
                  Are you a healthcare professional looking to work abroad? Fluentry provides targeted IELTS and professional English coaching designed specifically for the medical sector.
                </p>
                <Link href={`${langPrefix}/pricing`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                    View Coaching Plans <ArrowRight className="w-5 h-5" />
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
