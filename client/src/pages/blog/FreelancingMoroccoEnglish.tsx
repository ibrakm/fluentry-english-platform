import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { DollarSign, Laptop, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

export default function FreelancingMoroccoEnglish() {
  const { langPrefix } = useLanguage();
  const title = "How to Earn $1,000/Month Freelancing from Morocco (The English Advantage)";
  const description = "Thousands of Moroccans are freelancing on Upwork and Fiverr. The ones earning $1,000+/month all have one thing in common: strong English. Here's how to join them.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        path="/blog/freelancing-morocco-english-advantage"
      />
      <div className="min-h-screen bg-gray-50">
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/freelancing-morocco-english.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <DollarSign className="w-5 h-5" />
              <span>Career English · Freelancing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              How to Earn $1,000/Month Freelancing from Morocco
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              The top Moroccan freelancers all have one thing in common: strong English. Here's how to join them.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 7 min read</p>
          </div>
        </header>

        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">

            <p className="text-lg text-gray-600 mb-8">
              The dream of working from home, setting your own hours, and earning in dollars or euros is no longer just a dream — it's a reality for thousands of Moroccans. Platforms like <strong>Upwork</strong> and <strong>Fiverr</strong> have opened up a global marketplace. But while many earn a decent side income, a select few are building serious careers earning far above the local market average. Their secret? <strong>A strong command of English.</strong>
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-4">The Data Doesn't Lie: English = Higher Earnings</h2>
              <p className="text-gray-600 mb-4">
                Analysis of job postings in Morocco shows that roles requiring English proficiency pay, on average, <strong>40–60% more</strong> than their non-English counterparts. This gap is even wider in the freelance world.
              </p>
              <p className="text-gray-600 mb-6">
                Why? Because when you speak English, you're not competing with other Moroccans for local contracts. You're competing in a global talent pool for clients in the US, UK, Canada, and Australia who are willing to pay international rates for quality work.
              </p>
              <blockquote className="border-l-4 border-green-400 pl-6 py-2 bg-green-50 rounded-r-lg italic text-gray-700 my-6">
                "I was stuck earning 5,000 MAD a month at a local agency. I spent six months seriously improving my English, and now I'm earning over $1,500/month on Upwork working with American clients. It completely changed my life."
                <cite className="mt-2 block not-italic font-semibold text-gray-800">— Youssef, Web Developer from Casablanca</cite>
              </blockquote>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-4">The $1,000/Month Roadmap</h2>
              <p className="text-gray-600 mb-6">How do you go from earning a few hundred dollars to breaking the $1,000/month barrier?</p>
              <div className="space-y-5">
                {[
                  { num: "01", icon: <TrendingUp className="w-5 h-5 text-green-600" />, title: "Get Your English to B2 Level (Minimum)", desc: "This is non-negotiable. You need to communicate clearly and professionally in writing (proposals, emails) and speaking (client calls). Your profile is your storefront — errors will cost you clients." },
                  { num: "02", icon: <Laptop className="w-5 h-5 text-blue-600" />, title: "Specialize in a High-Demand Skill", desc: "Don't be a generalist. Become an expert in a specific niche: React development, SEO content writing, social media marketing for SaaS, video editing for YouTubers, etc." },
                  { num: "03", icon: <DollarSign className="w-5 h-5 text-orange-600" />, title: "Build a Killer Profile", desc: "Your Upwork or Fiverr profile needs a professional photo, a clear headline, and a detailed description of the value you provide. Use your English skills to sell yourself effectively." },
                  { num: "04", icon: <CheckCircle className="w-5 h-5 text-purple-600" />, title: "Write Winning Proposals", desc: "Don't use generic templates. Read the client's project description carefully and write a personalized proposal that shows you understand their problem. This is where your English shines." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-xl hover:border-green-300 transition-colors">
                    <div className="flex-shrink-0 bg-green-100 text-green-700 font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">{item.num}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">{item.icon} {item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-4">The Skills That Pay the Most on Upwork (Morocco)</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { skill: "Web Development (React, Node.js)", rate: "$25–80/hr" },
                  { skill: "UI/UX Design (Figma)", rate: "$20–60/hr" },
                  { skill: "Digital Marketing & SEO", rate: "$15–50/hr" },
                  { skill: "Video Editing & Motion", rate: "$20–55/hr" },
                  { skill: "Copywriting & Content", rate: "$15–45/hr" },
                  { skill: "Data Analysis (Python, Excel)", rate: "$20–70/hr" },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-800 text-sm">{item.skill}</p>
                    <p className="text-green-600 font-bold text-sm mt-1">{item.rate}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3">*Rates are for English-speaking freelancers. Non-English speakers typically earn 40–60% less for the same skills.</p>
            </section>

            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Stop Letting Your English Hold You Back</h3>
              <p className="text-green-100 mb-6 max-w-xl mx-auto">
                How many high-paying jobs have you scrolled past because the description was in English? At Fluentry, our Professional Communication course is designed specifically for ambitious freelancers like you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}>
                  <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 w-full sm:w-auto font-bold">
                    Check Your English Level (Free)
                  </Button>
                </Link>
                <Link href={`${langPrefix}/book-lesson`}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Book a Free Consultation Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <p className="text-sm text-gray-400 border-t pt-6">
              <strong>Note:</strong> Freelance rate data is based on Upwork market analysis for Morocco-based freelancers (2025–2026). Individual results vary based on skill level, niche, and experience.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
