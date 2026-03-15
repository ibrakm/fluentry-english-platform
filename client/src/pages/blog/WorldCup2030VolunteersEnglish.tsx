import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import RelatedPosts from "@/components/RelatedPosts";
import { Trophy, Users, Globe, CheckCircle, ArrowRight, Heart, Star, Clock, MapPin } from "lucide-react";

export default function WorldCup2030VolunteersEnglish() {
  const { langPrefix } = useLanguage();

  return (
    <>
      <SEO
        title="English for World Cup 2030 Volunteers in Morocco | Complete Guide | Fluentry"
        description="Want to volunteer at the FIFA World Cup 2030 in Morocco? You'll need English. This guide covers the exact English level required, key phrases, how to apply, and how to prepare your language skills starting today."
        path="/blog/world-cup-2030-volunteers-english-morocco"
        type="article"
        publishedDate="2026-03-15"
        modifiedDate="2026-03-15"
        keywords="World Cup 2030 volunteer Morocco, FIFA volunteer English, volunteer World Cup Morocco English, World Cup 2030 Morocco volunteer application, English for FIFA volunteers, bénévole Coupe du Monde 2030 Maroc anglais, متطوع كأس العالم 2030 المغرب إنجليزية, volunteer English level FIFA, World Cup 2030 Morocco language requirements"

        titleFr="Anglais pour les bénévoles de la Coupe du Monde 2030 au Maroc | Guide complet"
        titleAr="الإنجليزية لمتطوعي كأس العالم 2030 في المغرب | دليل شامل"
        descriptionFr="Vous voulez être bénévole à la Coupe du Monde FIFA 2030 au Maroc ? Vous aurez besoin d'anglais. Ce guide couvre le niveau requis, les phrases clés et comment se préparer."
        descriptionAr="هل تريد التطوع في كأس العالم 2030 في المغرب؟ ستحتاج إلى الإنجليزية. يغطي هذا الدليل المستوى المطلوب والعبارات الأساسية وكيفية التحضير."
        breadcrumbs={[
          { name: "Blog", item: "https://fluentry.online/blog" },
          { name: "World Cup 2030 Volunteers English", item: "https://fluentry.online/blog/world-cup-2030-volunteers-english-morocco" },
        ]}
        faqItems={[
          { question: "What English level do I need to volunteer at the World Cup 2030 in Morocco?", answer: "FIFA typically requires volunteers to have at least a B1 (Intermediate) level of English. However, for roles involving direct interaction with international visitors, media, or VIPs, a B2 (Upper-Intermediate) level is strongly recommended. You should be able to hold conversations, give directions, and handle unexpected situations in English." },
          { question: "How do I apply to be a FIFA World Cup 2030 volunteer in Morocco?", answer: "FIFA will open its official volunteer portal approximately 18-24 months before the tournament. You'll need to fill out an online application, pass a language assessment (English and/or French), and attend training sessions. Follow FIFA.com and the Morocco 2030 organizing committee's official channels for announcements." },
          { question: "Is volunteering at the World Cup 2030 paid?", answer: "No, FIFA World Cup volunteers are not paid a salary. However, FIFA provides uniforms, meals during shifts, transportation to venues, and a certificate of participation. The experience, networking opportunities, and CV boost are considered the main rewards." },
          { question: "Can I improve my English from A2 to B2 before the World Cup 2030?", answer: "Absolutely. With consistent practice (3-4 sessions per week), most learners can progress from A2 to B2 within 12-18 months. Starting now gives you more than enough time. Fluentry offers personalized 1-on-1 coaching designed to get you to B2 level efficiently." },
        ]}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header className="relative bg-gradient-to-br from-[#8B1538] via-[#C1272D] to-[#006233] text-white py-24 px-4 text-center">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Trophy className="w-5 h-5" />
              <span>World Cup 2030 · Volunteering</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              English for World Cup 2030 Volunteers in Morocco
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Morocco will welcome the world in 2030. If you want to be part of it as a volunteer, English is your ticket. Here's exactly how to prepare.
            </p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 15, 2026 · 8 min read</p>
          </div>
        </header>

        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">

            <p className="text-lg text-gray-600 mb-8">
              The FIFA World Cup 2030 will be co-hosted by Morocco, Spain, and Portugal — and for Morocco, this is a once-in-a-generation moment. The country will need <strong>over 20,000 volunteers</strong> to help run the tournament across cities like Casablanca, Rabat, Tangier, Marrakech, Fes, and Agadir. These volunteers will be the face of Morocco to millions of international visitors. And the one skill that will separate those who get selected from those who don't? <strong>English.</strong>
            </p>

            {/* Section 1: Why English is Essential */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">Why English is Essential for World Cup Volunteers</h2>
              <p className="text-gray-600 mb-4">
                FIFA's official working language is English. Every aspect of the World Cup — from signage and announcements to media briefings and fan communication — operates primarily in English. As a volunteer, you'll be interacting with people from over 200 countries. While some may speak French or Arabic, <strong>English is the universal bridge language</strong> that connects everyone.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  { icon: <Globe className="w-6 h-6 text-blue-600" />, title: "Fan Assistance", desc: "Helping international fans navigate stadiums, find their seats, locate facilities, and answer questions — all in English." },
                  { icon: <MapPin className="w-6 h-6 text-green-600" />, title: "City Navigation", desc: "Directing visitors to hotels, restaurants, transport hubs, and tourist attractions in English." },
                  { icon: <Users className="w-6 h-6 text-purple-600" />, title: "Media & VIP Support", desc: "Assisting journalists, broadcasters, and VIP guests who communicate exclusively in English." },
                  { icon: <Heart className="w-6 h-6 text-red-600" />, title: "Emergency Situations", desc: "Handling medical emergencies, lost items, or security issues where clear English communication is critical." },
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

            {/* Section 2: English Level Required */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">What English Level Do You Need?</h2>
              <p className="text-gray-600 mb-6">
                Based on previous FIFA World Cups (Russia 2018, Qatar 2022), volunteer language requirements follow a clear pattern. Here's what to expect for Morocco 2030:
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 font-bold text-gray-700 text-sm">Volunteer Role</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">Minimum English Level</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">Recommended Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { role: "Stadium Operations", min: "A2", rec: "B1" },
                      { role: "Fan Zone Assistant", min: "B1", rec: "B2" },
                      { role: "Media & Press Support", min: "B2", rec: "C1" },
                      { role: "VIP & Protocol", min: "B2", rec: "C1" },
                      { role: "Transport & Logistics", min: "A2", rec: "B1" },
                      { role: "Medical & First Aid", min: "B1", rec: "B2" },
                      { role: "City Guide / Tourism", min: "B1", rec: "B2" },
                      { role: "Translation & Interpretation", min: "C1", rec: "C2" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-medium text-gray-800 text-sm">{row.role}</td>
                        <td className="p-4 text-gray-600 text-sm">{row.min}</td>
                        <td className="p-4 text-green-600 font-semibold text-sm">{row.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">Based on FIFA volunteer requirements from Qatar 2022 and Russia 2018.</p>
            </section>

            {/* Mid-article CTA */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 my-8">
              <h3 className="text-xl font-bold text-red-900 mb-2">Don't Know Your Current English Level?</h3>
              <p className="text-red-700 mb-4 text-sm">Take Fluentry's free CEFR placement test in 5 minutes. You'll know exactly where you stand and what you need to work on.</p>
              <Link href={`${langPrefix}/free-test`}>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold">Take the Free Level Test</Button>
              </Link>
            </div>

            {/* Section 3: Key English Phrases */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">Essential English Phrases for Volunteers</h2>
              <p className="text-gray-600 mb-4">
                Here are the types of English you'll need to master. These aren't just textbook phrases — they're the real-world expressions you'll use hundreds of times during the tournament:
              </p>
              <div className="space-y-4">
                {[
                  { category: "Greeting & Welcoming", phrases: ["Welcome to Morocco! How can I help you?", "Are you looking for your seat? Let me check your ticket.", "The fan zone is straight ahead, about a 5-minute walk."] },
                  { category: "Giving Directions", phrases: ["The nearest restroom is on your left, past the food court.", "To get to Gate B, follow the signs down this corridor.", "The taxi stand is just outside the main entrance."] },
                  { category: "Handling Problems", phrases: ["I'm sorry to hear that. Let me find someone who can help.", "Don't worry, we'll sort this out. Can you describe what happened?", "I'll radio the medical team right away. Please stay calm."] },
                  { category: "Cultural Exchange", phrases: ["This is Moroccan mint tea — it's a traditional welcome drink!", "The medina is the old city center. I'd recommend visiting it tomorrow.", "Would you like me to recommend a local restaurant?"] },
                ].map((group, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" /> {group.category}
                    </h3>
                    <ul className="space-y-2">
                      {group.phrases.map((phrase, j) => (
                        <li key={j} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-blue-500 mt-1">→</span>
                          <span className="italic">"{phrase}"</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Your Preparation Timeline */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">Your Volunteer Preparation Timeline</h2>
              <p className="text-gray-600 mb-6">
                The World Cup is approximately 4 years away. That's more than enough time to go from beginner to confident English speaker. Here's a realistic timeline:
              </p>
              <div className="space-y-4">
                {[
                  { phase: "2026", title: "Build Your Foundation (Now)", desc: "Start learning English seriously. Focus on everyday vocabulary, basic grammar, and listening comprehension. Aim to reach A2-B1 by the end of the year. This is the most important step — start today.", icon: <Clock className="w-5 h-5 text-blue-600" /> },
                  { phase: "2027", title: "Develop Conversational Fluency", desc: "Practice speaking regularly. Join conversation groups, watch English content without subtitles, and start thinking in English. Target B1-B2 by mid-2027.", icon: <Users className="w-5 h-5 text-green-600" /> },
                  { phase: "2028", title: "Specialize & Practice", desc: "Focus on the specific English you'll need: hospitality vocabulary, giving directions, handling complaints. Practice role-play scenarios. Consider getting an IELTS or TOEIC certificate to strengthen your application.", icon: <Star className="w-5 h-5 text-yellow-600" /> },
                  { phase: "2029", title: "Apply & Train", desc: "FIFA will open volunteer applications. Your strong English will make your application stand out. Attend training sessions and practice with international friends or online partners.", icon: <Trophy className="w-5 h-5 text-red-600" /> },
                  { phase: "2030", title: "Represent Morocco to the World", desc: "You're ready. You'll welcome fans from every corner of the globe, represent your country with pride, and create memories that last a lifetime.", icon: <Heart className="w-5 h-5 text-purple-600" /> },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="bg-red-100 text-red-700 font-bold text-sm px-3 py-1 rounded-full">{item.phase}</div>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Benefits Beyond the World Cup */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">Benefits Beyond the World Cup</h2>
              <p className="text-gray-600 mb-4">
                Learning English for the World Cup isn't just about 2030. The skills you build will transform your entire career and life:
              </p>
              <ul className="space-y-3">
                {[
                  "A FIFA volunteer certificate on your CV opens doors at international companies.",
                  "The networking opportunities during the tournament can lead to job offers.",
                  "Your English skills will qualify you for higher-paying jobs in tourism, hospitality, and business.",
                  "You'll gain confidence that transfers to every area of your professional life.",
                  "Post-World Cup, Morocco's tourism and international business will continue to grow — and you'll be ready.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Internal Link: Courses */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 my-8">
              <h3 className="text-xl font-bold text-green-900 mb-2">Explore Fluentry's English Courses</h3>
              <p className="text-green-700 mb-4 text-sm">Whether you're starting from scratch or polishing your speaking skills, Fluentry has a programme designed for your goals. All courses are 1-on-1, online, and tailored to Moroccan learners.</p>
              <div className="flex flex-wrap gap-3">
                <Link href={`${langPrefix}/courses`}>
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">View All Courses</Button>
                </Link>
                <Link href={`${langPrefix}/pricing`}>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">See Pricing</Button>
                </Link>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-[#C1272D] to-[#006233] text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">The World Cup is Coming. Will You Be Ready?</h3>
              <p className="text-red-100 mb-6 max-w-xl mx-auto">
                You have 4 years. That's more than enough time to go from zero to fluent. Start today with a free level test, and let's build your English together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}>
                  <Button size="lg" className="bg-white text-red-700 hover:bg-red-50 w-full sm:w-auto font-bold">
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

            <RelatedPosts currentPath="/blog/world-cup-2030-volunteers-english-morocco" category="Career" />

            <p className="text-sm text-gray-400 border-t pt-6 mt-8">
              <strong>Sources:</strong> FIFA.com — "Volunteer Programme Overview" (2024). Morocco World News — "Morocco's 2030 World Cup to Create Over 100,000 Jobs Annually" (2025). Qatar 2022 Volunteer Programme — Post-Event Report (2023).
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
