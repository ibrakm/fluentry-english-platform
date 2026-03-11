import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mic, CheckCircle, ArrowRight, Star } from "lucide-react";

export default function EnglishJobInterviewMorocco() {
  const { langPrefix } = useLanguage();
  const title = "How to Pass a Job Interview in English in Morocco (Step-by-Step Guide)";
  const description = "Preparing for a job interview in English in Morocco? This step-by-step guide covers everything from common questions to pronunciation tips to help you land the job.";
  return (
    <>
      <SEO title={title} description={description}
        path="/blog/english-job-interview-morocco-guide"
 />
      <div className="min-h-screen bg-gray-50">
        <header className="relative bg-cover bg-center text-white py-24 px-4 text-center" style={{ backgroundImage: "url('/images/blog/english-job-interview-morocco.webp')" }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Mic className="w-5 h-5" /><span>Career English - Job Interviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">How to Pass a Job Interview in English in Morocco</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">A complete step-by-step guide to help you walk into your next English interview with confidence and walk out with a job offer.</p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. - March 10, 2026 - 7 min read</p>
          </div>
        </header>
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-600 mb-8">You have the skills, the experience, and the qualifications. But when you sit down for a job interview in English, everything goes blank. Your heart races, your vocabulary disappears, and you struggle to express yourself clearly. This is one of the most common challenges for Moroccan professionals - and it is completely fixable. Here is your complete guide to passing a job interview in English.</p>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-teal-600 pl-4">Step 1: Prepare Your Core Answers</h2>
              <p className="text-gray-600 mb-4">Most job interviews in English follow a predictable structure. Prepare strong, clear answers for these essential questions before you walk in:</p>
              <div className="space-y-3">
                {[
                  { q: "Tell me about yourself.", tip: "Prepare a 90-second professional summary: your background, key achievements, and why you are interested in this role." },
                  { q: "What are your greatest strengths?", tip: "Choose 2-3 strengths that are directly relevant to the job. Always give a specific example for each one." },
                  { q: "Why do you want to work here?", tip: "Research the company. Mention something specific about their mission, culture, or recent projects that genuinely interests you." },
                  { q: "Where do you see yourself in 5 years?", tip: "Show ambition but also alignment with the company. Mention growth within the organization." },
                  { q: "Tell me about a challenge you overcame.", tip: "Use the STAR method: Situation, Task, Action, Result. Practice this until it flows naturally." },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <p className="font-bold text-teal-800 text-sm mb-1">Q: {item.q}</p>
                    <p className="text-gray-600 text-sm"><strong>Tip:</strong> {item.tip}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-teal-600 pl-4">Step 2: Master Your Body Language and Delivery</h2>
              <p className="text-gray-600 mb-4">In an English interview, how you say something is almost as important as what you say. Here are the key delivery skills to practice:</p>
              <ul className="space-y-3">
                {["Speak slowly and clearly. Moroccan Arabic and French are spoken fast. English interviewers appreciate a measured, deliberate pace.","Make eye contact. This signals confidence and honesty in Western business culture.","Use professional vocabulary. Replace casual phrases with formal alternatives (e.g., 'I am responsible for' instead of 'I do').","Avoid filler words. Minimize 'um', 'uh', and 'like'. A brief pause is better than a filler word.","End your answers clearly. Finish with a strong statement, not a trailing off."].map((point, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{point}</span></li>
                ))}
              </ul>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-teal-600 pl-4">Step 3: Research the Company in English</h2>
              <p className="text-gray-600 mb-4">Before your interview, spend 30 minutes researching the company in English. Read their website, their LinkedIn page, and any recent news articles about them. This will help you:</p>
              <ul className="space-y-3">
                {["Answer 'Why do you want to work here?' with specific, impressive details.","Ask intelligent questions at the end of the interview.","Use the company's own language and values in your answers.","Demonstrate that you are serious, prepared, and professional."].map((point, i) => (
                  <li key={i} className="flex items-start gap-3"><Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{point}</span></li>
                ))}
              </ul>
            </section>
            <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Practice Makes Perfect - Practice with a Real Coach</h3>
              <p className="text-teal-100 mb-6 max-w-xl mx-auto">The best way to prepare for an English interview is to practice with someone who can give you real, honest feedback. At Fluentry, we offer dedicated Interview Preparation sessions where we simulate real interviews, correct your mistakes, and build your confidence.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}><Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 w-full sm:w-auto font-bold">Check Your English Level (Free)</Button></Link>
                <Link href={`${langPrefix}/book-lesson`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">Book an Interview Prep Session <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              </div>
            </div>
            <p className="text-gray-600 border-t pt-6">The job you want is within reach. With the right preparation and practice, you can walk into any English interview with confidence and walk out with an offer.</p>
          </div>
        </main>
      </div>
    </>
  );
}
