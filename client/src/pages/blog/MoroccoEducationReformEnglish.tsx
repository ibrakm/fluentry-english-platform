import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, BookOpen, GraduationCap, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MoroccoEducationReformEnglish() {
  const { langPrefix } = useLanguage();

  return (
    <>
      <SEO
        title="Morocco's 2025-2026 Education Reform: What It Means for English Learners"
        description="A complete guide to Morocco's new education reform expanding English in middle schools and the new Baccalaureate requirements for 2026."
        path="/blog/morocco-education-reform-english-2026"
        type="article"
        publishedDate="2026-03-10"
        keywords="Morocco education reform, English in Moroccan schools, Baccalaureate English Morocco, middle school English Morocco"
      
        titleFr="Réforme de l'éducation au Maroc : Place de l'anglais"
        titleAr="إصلاح التعليم في المغرب: مكانة الإنجليزية"
        descriptionFr="La réforme éducative au Maroc et le rôle croissant de l'anglais."
        descriptionAr="الإصلاح التعليمي في المغرب والدور المتزايد للإنجليزية."
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/education-reform-morocco.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <GraduationCap className="w-5 h-5" />
              <span>Education News</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Morocco's 2025-2026 Education Reform: What It Means for English Learners
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              How the expansion of English in middle schools and new university requirements are changing the future of Moroccan education.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 7 min read</p>
          </div>
        </header>

        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <article className="prose prose-lg max-w-none text-gray-800">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                The 2025-2026 academic year marks a historic turning point for Morocco's education system. The Ministry of National Education has officially accelerated its plan to make English a core language across all levels of schooling.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Expansion of English in Middle Schools</h2>
              <p>
                As part of the government's comprehensive schooling reform bill (Draft Law No. 59.21), the teaching of English is no longer reserved for high school students. Starting this academic year, the coverage rate of English instruction in middle schools has reached 100% for first-year students in many regions, up from just 10% in 2023.
              </p>
              <p>
                This shift is monumental. By introducing the language earlier, the Ministry aims to build a stronger foundation before students reach the critical Baccalaureate years.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">Key Changes for 2026:</h3>
                <ul className="space-y-2 mb-0">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span>Full integration of English in middle school curriculums.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span>New digitalized exams to assess language proficiency accurately.</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> <span>Intensive training programs for primary and middle school teachers to meet the new demand.</span></li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">University Admissions: The New Standard</h2>
              <p>
                The reform isn't just happening at the secondary level. Moroccan universities are rapidly adapting to the globalized job market. Institutions like Al Akhawayn University have long required English proficiency, but now, public universities are following suit.
              </p>
              <p>
                Several faculties have introduced majors taught entirely in English. To access these competitive programs, students are increasingly required to provide proof of proficiency, such as an IELTS score of 6.0 or higher, or a TOEIC equivalent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What This Means for Parents and Students</h2>
              <p>
                If you are a student or a parent of one, the message is clear: <strong>English is no longer optional; it is mandatory for academic success in Morocco.</strong>
              </p>
              <p>
                Relying solely on French will limit educational and professional opportunities. Students who begin mastering English now will have a significant advantage in the Baccalaureate exams and university admissions over the next three years.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl mt-12 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-0">Get Ahead of the Reform</h3>
                <p className="text-gray-600 mb-6">
                  Don't wait for the school curriculum to catch up. Fluentry's personalized coaching programs are designed to help Moroccan students build strong, confident English skills that guarantee academic success.
                </p>
                <Link href={`${langPrefix}/pricing`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                    View Our Learning Plans <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            
            {/* CTA — Book a Free Consultation Call */}
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
                    Book a Free Consultation Call <ArrowRight className="ml-2 w-4 h-4" />
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
