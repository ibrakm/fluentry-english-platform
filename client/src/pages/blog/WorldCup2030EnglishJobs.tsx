import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Trophy, Briefcase, Globe, CheckCircle, ArrowRight } from "lucide-react";

export default function WorldCup2030EnglishJobs() {
  const { langPrefix } = useLanguage();
  const title = "How to Get a Job in Morocco's World Cup 2030 Projects (English is the Key)";
  const description = "The FIFA World Cup 2030 is coming to Morocco, bringing over 100,000 jobs. But most of them require English. Here's exactly how to prepare and get hired.";

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical="https://fluentry.online/en/blog/world-cup-2030-english-jobs-morocco"
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": description,
          "image": "https://fluentry.online/images/blog/world-cup-2030-english-jobs.jpg",
          "author": { "@type": "Person", "name": "Ibrahim K." },
          "publisher": { "@type": "Organization", "name": "Fluentry" },
          "datePublished": "2026-03-10",
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/world-cup-2030-english-jobs.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Trophy className="w-5 h-5" />
              <span>Career English · World Cup 2030</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              How to Get a Job in Morocco's World Cup 2030 Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Over 100,000 jobs are coming. Most of them require English. Here's how to make sure you're ready.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 6 min read</p>
          </div>
        </header>

        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">

            <p className="text-lg text-gray-600 mb-8">
              The year 2030 will be a historic one for Morocco. Co-hosting the FIFA World Cup is not just a matter of national pride — it's a massive economic catalyst projected to create over <strong>100,000 jobs annually</strong> and inject billions into the economy. From building state-of-the-art stadiums to welcoming millions of international fans, the opportunities will be unprecedented. But there's one skill that will unlock the door to the best of these jobs: <strong>English</strong>.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Why English is Your Golden Ticket for 2030</h2>
              <p className="text-gray-600 mb-4">
                The World Cup is a global event. The official language of FIFA is English. The fans, the media, the sponsors, and the technical teams will all be communicating primarily in English. Moroccan professionals who can bridge the language gap will be in extremely high demand.
              </p>
              <p className="text-gray-600 mb-6">Think about the key sectors that will explode with growth:</p>
              <div className="space-y-4">
                {[
                  { icon: <Globe className="w-6 h-6 text-blue-600" />, title: "Hospitality & Tourism", desc: "Hotels, restaurants, and tour operators will need staff who can provide world-class service to international visitors. Fluent English will be non-negotiable for front-desk managers and tour guides." },
                  { icon: <Briefcase className="w-6 h-6 text-green-600" />, title: "Construction & Engineering", desc: "The massive infrastructure projects — stadiums, transport networks, hotels — involve international firms. Moroccan engineers and project managers who can collaborate in English will lead these projects." },
                  { icon: <Trophy className="w-6 h-6 text-orange-600" />, title: "Logistics & Event Management", desc: "Coordinating an event of this scale requires flawless communication. From airport logistics to event security, English is the common language that will ensure everything runs smoothly." },
                  { icon: <Globe className="w-6 h-6 text-purple-600" />, title: "Marketing & Media", desc: "Moroccan agencies and media outlets will be working with global brands and press. Strong English skills will be essential for creating campaigns, managing social media, and conducting interviews." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">What English Level Do You Need?</h2>
              <p className="text-gray-600 mb-4">
                For most professional roles, you'll need to aim for a <strong>B2 (Upper-Intermediate)</strong> level or higher on the CEFR scale. This means you can:
              </p>
              <ul className="space-y-3">
                {[
                  "Understand the main ideas of complex text on both concrete and abstract topics.",
                  "Interact with a degree of fluency that makes regular interaction with native speakers quite possible.",
                  "Produce clear, detailed text on a wide range of subjects and explain a viewpoint on a topical issue.",
                  "Handle professional emails, meetings, and presentations with confidence.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Your 2030 Preparation Timeline</h2>
              <div className="space-y-4">
                {[
                  { phase: "Now → 2027", title: "Build Your Foundation", desc: "Get your English to B1-B2. Focus on professional vocabulary, speaking confidence, and writing skills. This is the most important phase — don't skip it." },
                  { phase: "2027 → 2028", title: "Specialize & Certify", desc: "Get an IELTS or TOEIC certification. Apply for entry-level roles in your target sector. Build your professional network." },
                  { phase: "2028 → 2030", title: "Position Yourself", desc: "With 2+ years of experience and strong English, you'll be a top candidate for the highest-paying World Cup roles." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-700 font-bold text-xs px-3 py-1 rounded-full h-fit mt-1">{item.phase}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">The World Cup is 4 Years Away. Start Now.</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                That's the perfect amount of time to take your English from intermediate to fluent and confident. At Fluentry, we prepare you for the real world — not just grammar exercises.
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

            <p className="text-sm text-gray-400 border-t pt-6">
              <strong>Sources:</strong> Morocco World News — "Morocco's 2030 World Cup to Create Over 100,000 Jobs Annually" (2025). Express Global Employment — "Morocco World Cup 2030: Strategic Workforce Planning" (2026).
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
