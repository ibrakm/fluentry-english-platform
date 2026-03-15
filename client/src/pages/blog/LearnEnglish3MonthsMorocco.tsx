import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, CheckCircle, ArrowRight, Clock } from "lucide-react";

export default function LearnEnglish3MonthsMorocco() {
  const { langPrefix } = useLanguage();
  const title = "I Learned English in 3 Months in Morocco - Here is Exactly How";
  const description = "From feeling stuck and frustrated to landing a dream job, this is the true story of how one Moroccan student transformed their career by mastering English in just 3 months.";
  return (
    <>
      <SEO title={title} description={description}
        path="/blog/learn-english-3-months-morocco-story"
 
        titleFr="Apprendre l'anglais en 3 mois au Maroc | Témoignage"
        titleAr="تعلم الإنجليزية في 3 أشهر في المغرب | قصة نجاح"
        descriptionFr="Comment un étudiant marocain a appris l'anglais en seulement 3 mois avec Fluentry."
        descriptionAr="كيف تعلم طالب مغربي الإنجليزية في 3 أشهر فقط مع Fluentry."
      />
      <div className="min-h-screen bg-gray-50">
        <header className="relative bg-cover bg-center text-white py-24 px-4 text-center" style={{ backgroundImage: "url('/images/blog/learn-english-3-months-morocco.webp')" }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Award className="w-5 h-5" /><span>Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">I Learned English in 3 Months in Morocco - Here is Exactly How</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">From feeling stuck and frustrated to landing a dream job. This is the true story of one Moroccan student's transformation.</p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. - March 10, 2026 - 5 min read</p>
          </div>
        </header>
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-600 mb-8">Three months ago, Fatima was feeling stuck. A talented marketing graduate from Casablanca, she had the skills and the ambition, but she kept getting rejected for the best jobs. The reason? Her English was holding her back. She could understand it, but she could not speak it confidently. Today, Fatima is a Marketing Coordinator for an international company in Rabat, and her life has completely changed. This is her story.</p>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-600 pl-4">The Moment Everything Changed</h2>
              <blockquote className="border-l-4 border-emerald-400 pl-6 py-3 bg-emerald-50 rounded-r-lg italic text-gray-700 my-6">
                "I felt like I was trapped. I knew I was capable of more, but every good job required fluent English. I would freeze in interviews. It was so frustrating."
                <cite className="mt-2 block not-italic font-semibold text-gray-800">- Fatima Z., Marketing Coordinator, Rabat</cite>
              </blockquote>
              <p className="text-gray-600">Fatima decided to take control. She did not just want to learn English; she wanted to master it, and she wanted to do it fast. She enrolled in Fluentry's Intensive Career Program and committed to a rigorous 3-month plan.</p>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-600 pl-4">The 3-Month Transformation Plan</h2>
              <div className="space-y-4">
                {[
                  { month: "Month 1", title: "Building the Foundation (4 lessons/week)", desc: "The first month was all about grammar, vocabulary, and pronunciation. With personalized lessons from Mr. Ibrahim, Fatima fixed the common mistakes she was making and built a strong foundation. She also started a daily habit of listening to English podcasts and reading articles." },
                  { month: "Month 2", title: "Active Skills and Confidence (3 lessons/week)", desc: "The focus shifted to speaking and writing. Fatima practiced job interview simulations, wrote professional emails, and participated in debates. The goal was to move from passive knowledge to active, confident use of the language." },
                  { month: "Month 3", title: "Real-World Application (2 lessons/week)", desc: "In the final month, Fatima worked on her CV and LinkedIn profile in English. She did multiple mock interviews based on real job descriptions and developed a presentation about her marketing strategy. She was no longer a student; she was a professional preparing for her next career move." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                    <div className="flex-shrink-0 bg-emerald-100 text-emerald-700 font-bold text-xs px-3 py-1 rounded-full h-fit mt-1 flex items-center gap-1"><Clock className="w-3 h-3" />{item.month}</div>
                    <div><h3 className="font-bold text-gray-900 mb-1">{item.title}</h3><p className="text-gray-600 text-sm">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-600 pl-4">The Result: A New Career and a New Life</h2>
              <p className="text-gray-600 mb-4">At the end of the three months, Fatima applied for a job she would have never dared to apply for before. She aced the interview, and she got the offer. Her starting salary was nearly double what she was earning before.</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { label: "Before", value: "5,000 MAD/month", color: "gray" },
                  { label: "After 3 Months", value: "9,500 MAD/month", color: "emerald" },
                  { label: "Salary Increase", value: "+90%", color: "green" },
                ].map((stat, i) => (
                  <div key={i} className={`p-5 rounded-xl text-center border-2 ${i === 2 ? "border-green-300 bg-green-50" : i === 1 ? "border-emerald-300 bg-emerald-50" : "border-gray-200 bg-gray-50"}`}>
                    <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                    <p className={`text-2xl font-extrabold ${i === 2 ? "text-green-600" : i === 1 ? "text-emerald-600" : "text-gray-600"}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-emerald-600 pl-4">The Key Lessons from Fatima's Journey</h2>
              <ul className="space-y-3">
                {["Consistency beats intensity. 45 minutes every day is more effective than 5 hours once a week.","Personalized coaching accelerates progress. A teacher who knows your specific weaknesses can fix them 10x faster than self-study.","Real-world practice is essential. Practicing for actual job interviews, not just grammar exercises, is what creates results.","Confidence comes from preparation. The more you practice, the less you freeze."].map((point, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{point}</span></li>
                ))}
              </ul>
            </section>
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Your Transformation Story Starts Today</h3>
              <p className="text-emerald-100 mb-6 max-w-xl mx-auto">Fatima's story is not unique. It is a story of what is possible when you combine ambition with the right guidance and a proven system. You do not need years to transform your English and your career - you need a clear plan and the right teacher.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}><Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 w-full sm:w-auto font-bold">Take the Free Level Test</Button></Link>
                <Link href={`${langPrefix}/book-lesson`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">Start Your Journey <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              </div>
            </div>
            <p className="text-gray-600 border-t pt-6">Your dream job is waiting for you. Do not let English be the thing that stands in your way.</p>
          </div>
        </main>
      </div>
    </>
  );
}
