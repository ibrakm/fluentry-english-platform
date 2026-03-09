import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, CheckCircle, ArrowRight } from "lucide-react";

export default function MoroccoCanadaImmigrationIELTS() {
  const { langPrefix } = useLanguage();
  const title = "How to Get Your Canadian Immigration with IELTS: A Guide for Moroccans";
  const description = "Canada is the number 1 destination for Moroccans seeking a new life, and the Express Entry system is your fastest path. But it all starts with one thing: your IELTS score.";
  return (
    <>
      <SEO title={title} description={description} canonical="https://fluentry.online/en/blog/morocco-canada-immigration-ielts-guide"
        schema={{"@context":"https://schema.org","@type":"BlogPosting","headline":title,"description":description,"image":"https://fluentry.online/images/blog/morocco-canada-immigration-ielts.jpg","author":{"@type":"Person","name":"Ibrahim K."},"publisher":{"@type":"Organization","name":"Fluentry"},"datePublished":"2026-03-10"}} />
      <div className="min-h-screen bg-gray-50">
        <header className="relative bg-cover bg-center text-white py-24 px-4 text-center" style={{ backgroundImage: "url('/images/blog/morocco-canada-immigration-ielts.jpg')" }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Globe className="w-5 h-5" /><span>IELTS and Exams - Immigration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">How to Get Your Canadian Immigration with IELTS</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Canada is the number 1 destination for Moroccans seeking a new life. Your IELTS score is the key that unlocks the door.</p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. - March 10, 2026 - 6 min read</p>
          </div>
        </header>
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-600 mb-8">For thousands of Moroccans, Canada represents a dream of a new life with better opportunities, high quality of life, and a welcoming multicultural society. The fastest and most popular pathway to make this dream a reality is the <strong>Express Entry</strong> system. But the entire system is built on a points-based ranking, and the single most important factor you can control is your language proficiency, proven by the <strong>IELTS exam</strong>.</p>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">IELTS: The Key to Unlocking Your CRS Score</h2>
              <p className="text-gray-600 mb-4">The Comprehensive Ranking System (CRS) determines your rank in the Express Entry pool. A high score in all four IELTS bands can award you a significant number of CRS points. A small improvement in your IELTS score can leapfrog you over thousands of other candidates.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 font-bold text-gray-700 text-sm">IELTS Band Score</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">CLB Level</th>
                      <th className="p-4 font-bold text-green-600 text-sm">CRS Points (Max)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[["8.0-9.0","CLB 9","136 pts"],["7.0","CLB 8","96 pts"],["6.0","CLB 7","68 pts"],["5.0","CLB 6","32 pts"]].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-medium text-gray-800 text-sm">{row[0]}</td>
                        <td className="p-4 text-gray-600 text-sm">{row[1]}</td>
                        <td className="p-4 text-green-600 font-bold text-sm">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">Note: CRS points are complex and depend on various factors. This is a simplified illustration.</p>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">The Express Entry Process: Step by Step</h2>
              <div className="space-y-4">
                {[
                  { step: "Step 1", title: "Take the IELTS Exam", desc: "Register with the British Council in Morocco (Casablanca, Rabat, Marrakech, etc.). Aim for a minimum of 7.0 in each band - higher is always better." },
                  { step: "Step 2", title: "Create Your Express Entry Profile", desc: "Enter your IELTS scores, education, work experience, and other details. Your CRS score is calculated automatically." },
                  { step: "Step 3", title: "Wait for an Invitation to Apply (ITA)", desc: "IRCC holds regular draws and invites the highest-ranking candidates. The higher your CRS score, the faster you will receive an ITA." },
                  { step: "Step 4", title: "Apply for Permanent Residency", desc: "Once you receive an ITA, you have 60 days to submit a complete application. Processing typically takes 6 months." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                    <div className="flex-shrink-0 bg-red-100 text-red-700 font-bold text-xs px-3 py-1 rounded-full h-fit mt-1">{item.step}</div>
                    <div><h3 className="font-bold text-gray-900 mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">Do Not Just Pass IELTS - Master It</h2>
              <ul className="space-y-3">
                {["Listening: Practice with authentic British and North American accents.","Reading: Build your speed and learn to skim for key information.","Writing: Master the Task 1 (data description) and Task 2 (essay) formats.","Speaking: Practice the 3-part interview format with a real coach who can give you feedback."].map((point, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{point}</span></li>
                ))}
              </ul>
            </section>
            <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Your Canadian Dream Depends on Your IELTS Score</h3>
              <p className="text-red-100 mb-6 max-w-xl mx-auto">Do not let a low IELTS score be the reason your Canadian dream is delayed or denied. At Fluentry, our IELTS Preparation Course has helped hundreds of Moroccan students achieve the scores they need.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}><Button size="lg" className="bg-white text-red-700 hover:bg-red-50 w-full sm:w-auto font-bold">Check Your Current Level (Free)</Button></Link>
                <Link href={`${langPrefix}/book-lesson`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">Start IELTS Prep <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              </div>
            </div>
            <p className="text-gray-600 border-t pt-6">The path to Canada from Morocco is clear, and it starts with a high IELTS score. Start your preparation today and take the first concrete step towards your new life.</p>
          </div>
        </main>
      </div>
    </>
  );
}
