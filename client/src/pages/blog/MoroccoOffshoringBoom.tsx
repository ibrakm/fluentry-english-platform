import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";

export default function MoroccoOffshoringBoom() {
  const { langPrefix } = useLanguage();
  const title = "Morocco's Offshoring Boom: 130,000 New Jobs by 2026 - Are You Ready?";
  const description = "Morocco just unveiled a new national offshoring strategy targeting 130,000 new jobs. These jobs ALL require strong English. Here is how to position yourself to get one.";
  return (
    <>
      <SEO title={title} description={description}
        path="/blog/morocco-offshoring-boom-2026"
 />
      <div className="min-h-screen bg-gray-50">
        <header className="relative bg-cover bg-center text-white py-24 px-4 text-center" style={{ backgroundImage: "url('/images/blog/morocco-offshoring-boom.webp')" }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Building className="w-5 h-5" /><span>Career English - Offshoring</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">Morocco's Offshoring Boom: 130,000 New Jobs by 2026</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">A massive wave of high-quality jobs is coming to Morocco. All of them require English. Are you ready?</p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. - March 10, 2026 - 5 min read</p>
          </div>
        </header>
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-600 mb-8">Morocco has just unveiled an ambitious new national offshoring strategy with a target of creating <strong>130,000 new jobs</strong> in the sector by 2026. This is not a distant promise - it is already happening. Companies from Europe, North America, and the Middle East are actively setting up operations in Morocco to take advantage of the country's strategic location, talented workforce, and competitive costs. But there is one skill that every single one of these companies requires: <strong>English.</strong></p>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-violet-600 pl-4">What is Offshoring and Why Does it Matter for You?</h2>
              <p className="text-gray-600 mb-4">Offshoring means that a company in another country (like France, the UK, or the US) moves some of its operations to Morocco to benefit from lower costs and a skilled workforce. These are not low-quality jobs. They include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "IT and Software Development", desc: "Developing and maintaining software for European and American clients. Salaries: 15,000-40,000 MAD/month." },
                  { title: "Business Process Outsourcing (BPO)", desc: "Customer service, finance, HR, and accounting for international companies. Salaries: 8,000-20,000 MAD/month." },
                  { title: "Digital Marketing and Content", desc: "Managing social media, SEO, and content creation for global brands. Salaries: 10,000-25,000 MAD/month." },
                  { title: "Data Analysis and AI", desc: "Analyzing data and building AI models for international clients. Salaries: 20,000-50,000 MAD/month." },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-violet-50 border border-violet-200 rounded-xl">
                    <h3 className="font-bold text-violet-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-violet-600 pl-4">Why English is Non-Negotiable in Offshoring</h2>
              <p className="text-gray-600 mb-4">In the offshoring world, you are working directly for a foreign company. Your clients, your managers, and your colleagues are often in another country. The entire operation runs in English. Here is what you need to be able to do:</p>
              <ul className="space-y-3">
                {["Communicate clearly with foreign clients and managers via email, chat, and video calls.","Write professional reports, documentation, and project updates in English.","Understand and follow instructions given in English.","Participate in daily stand-ups and weekly meetings conducted in English.","Handle customer service interactions in English (for BPO roles)."].map((point, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{point}</span></li>
                ))}
              </ul>
            </section>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-violet-600 pl-4">The Companies Already Hiring in Morocco</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Teleperformance","Concentrix","Webhelp","Capgemini","Atos","IBM","Accenture","HCLTech","Sopra Steria"].map((company, i) => (
                  <div key={i} className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-center font-semibold text-gray-700 text-sm">{company}</div>
                ))}
              </div>
            </section>
            <div className="bg-gradient-to-r from-violet-600 to-purple-700 text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Get Ready for the Offshoring Wave</h3>
              <p className="text-violet-100 mb-6 max-w-xl mx-auto">This is a rare moment in Morocco's economic history. A massive number of high-quality jobs are being created right now. Those who prepare themselves by investing in their English skills will be the ones who benefit the most.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}><Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50 w-full sm:w-auto font-bold">Check Your English Level (Free)</Button></Link>
                <Link href={`${langPrefix}/book-lesson`}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">Book a Free Strategy Call <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              </div>
            </div>
            <p className="text-sm text-gray-400 border-t pt-6"><strong>Source:</strong> Morocco World News - "Morocco Unveils New Offshoring Incentive Framework to Boost Digital Economy" (November 2025).</p>
          </div>
        </main>
      </div>
    </>
  );
}
