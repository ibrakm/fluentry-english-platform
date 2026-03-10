import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { ArrowRight, Tv, Headphones, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LearnEnglishNetflixMorocco() {
  const { langPrefix } = useLanguage();

  return (
    <>
      <SEO
        title="How to Actually Learn English Using Netflix in 2026"
        description="Stop just watching with Arabic subtitles. Discover the proven 3-step method to use Netflix to drastically improve your English listening and vocabulary."
        path="/blog/learn-english-netflix-morocco"
        type="article"
        publishedDate="2026-03-10"
        keywords="learn English Netflix, practice listening English, English movies Morocco, improve English vocabulary"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/netflix-english-morocco.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Tv className="w-5 h-5" />
              <span>Learning Tips</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              How to Actually Learn English Using Netflix in 2026
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              If you are watching with Arabic or French subtitles, you aren't learning. Here is the exact method to turn your binge-watching into fluency.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 5 min read</p>
          </div>
        </header>

        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <article className="prose prose-lg max-w-none text-gray-800">
              <p className="lead text-xl text-gray-600 font-medium mb-8">
                Ask any young Moroccan who speaks fluent English how they learned it, and 90% of them will give you the same answer: "Movies, video games, and the internet." 
              </p>

              <p>
                Netflix is an incredible tool for language immersion, but simply turning on a show and reading Arabic subtitles will not improve your English. Your brain is lazy; it will just read the language it already knows and tune out the English audio.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The 3-Step "Active Watching" Method</h2>
              <p>
                To actually learn, you must switch from passive entertainment to active listening.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">Step 1: English Audio + English Subtitles</h3>
                <p className="mb-0">
                  This is the most crucial step. By reading the English text while hearing the English audio, you connect the pronunciation of words to their spelling. This trains your ear to understand fast, connected speech.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">Step 2: The 10-Second Rewind Rule</h3>
                <p className="mb-0">
                  When you hear a phrase you don't understand, don't just ignore it. Hit the 10-second rewind button. Listen to it again. Look at the subtitle. If you still don't know it, pause and translate the specific word on your phone.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2 mt-0">Step 3: Shadowing (Repeat Out Loud)</h3>
                <p className="mb-0">
                  When a character says a cool phrase or idiom, pause the show and repeat it out loud, trying to copy their exact intonation and accent. This is called "shadowing," and it is the fastest way to improve your pronunciation and rhythm.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Best Shows to Start With</h2>
              <p>
                Don't start with complex historical dramas or heavy sci-fi. Start with sitcoms. The language is conversational, modern, and clearly spoken.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Friends / The Office:</strong> The gold standard for learning everyday American English.</li>
                <li><strong>Brooklyn Nine-Nine:</strong> Great for learning office and workplace vocabulary.</li>
                <li><strong>The Crown:</strong> Excellent if you want to practice formal British English.</li>
              </ul>

              <div className="bg-gray-50 p-8 rounded-xl mt-12 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-0">Take Your Speaking to the Next Level</h3>
                <p className="text-gray-600 mb-6">
                  Netflix helps you listen, but you still need to speak. Fluentry provides 1-on-1 speaking practice with expert coaches to activate the vocabulary you've learned.
                </p>
                <Link href={`${langPrefix}/pricing`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                    Start Speaking Practice <ArrowRight className="w-5 h-5" />
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
