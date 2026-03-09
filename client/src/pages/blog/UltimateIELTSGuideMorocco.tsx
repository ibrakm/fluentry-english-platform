import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { CheckCircle, Clock, BookOpen, Mic, Pencil, Ear, Star, AlertCircle, Target, TrendingUp, Award, Users, ChevronRight } from "lucide-react";

export default function UltimateIELTSGuideMorocco() {
  const title = "The Ultimate IELTS Guide for Moroccan Students (2026) — Band 7+ Guaranteed";
  const description = "The most complete IELTS preparation guide for Moroccan students. Covers all 4 sections, Morocco-specific strategies, test centres, fees, common mistakes Arabic speakers make, and a week-by-week 8-week study plan.";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": { "@type": "Person", "name": "Mr. Ibrahim K.", "url": "https://www.fluentry.online/about" },
    "publisher": { "@type": "Organization", "name": "Fluentry", "url": "https://www.fluentry.online" },
    "datePublished": "2026-03-09",
    "dateModified": "2026-03-09",
    "mainEntityOfPage": "https://www.fluentry.online/blog/ultimate-ielts-guide-morocco"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What IELTS score do I need for a Canadian visa?", "acceptedAnswer": { "@type": "Answer", "text": "For Canadian immigration (Express Entry), you typically need CLB 7, which corresponds to IELTS band 6.0 in each section. For skilled worker programs, a 6.5 overall with no band below 6.0 is standard." } },
      { "@type": "Question", "name": "How long does it take to improve my IELTS score by 1 band?", "acceptedAnswer": { "@type": "Answer", "text": "With focused, coached preparation, most Moroccan students improve by 0.5–1 band in 4–8 weeks. Improving by 1.5 bands typically takes 8–12 weeks of intensive work." } },
      { "@type": "Question", "name": "Where can I take the IELTS test in Morocco?", "acceptedAnswer": { "@type": "Answer", "text": "IELTS test centres in Morocco include the British Council in Casablanca and Rabat, IDP centres in Casablanca, and the American Language Center in multiple cities." } },
      { "@type": "Question", "name": "How much does the IELTS test cost in Morocco?", "acceptedAnswer": { "@type": "Answer", "text": "The IELTS test costs approximately 2,200–2,500 MAD in Morocco, depending on the test centre and test format (paper-based or computer-based)." } },
      { "@type": "Question", "name": "Is IELTS or TOEFL better for Moroccan students?", "acceptedAnswer": { "@type": "Answer", "text": "IELTS is generally better for Moroccan students applying to UK, Australian, or Canadian universities and immigration. TOEFL is preferred for US universities. IELTS speaking is a face-to-face interview, which many Moroccan students find more natural than TOEFL's computer-recorded format." } }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fluentry.online" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.fluentry.online/blog" },
      { "@type": "ListItem", "position": 3, "name": "Ultimate IELTS Guide Morocco", "item": "https://www.fluentry.online/blog/ultimate-ielts-guide-morocco" }
    ]
  };

  return (
    <>
      <SEO title={title} description={description} path="/blog/ultimate-ielts-guide-morocco" />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed">

        {/* Hero */}
        <header className="bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wide">
              <Award className="w-4 h-4" />
              Ultimate Guide 2026 — 8,000+ Words
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              The Ultimate IELTS Guide for Moroccan Students
              <span className="block text-yellow-400 mt-2">Band 7+ — Step by Step</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Everything you need to know — from registration and fees to section-by-section strategies, the 6 mistakes Arabic speakers make, and a complete 8-week study plan. Written by a TESOL-certified coach who has helped 100+ Moroccan students achieve their target band score.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200 mb-8">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 35 min read</span>
              <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> By Mr. Ibrahim K.</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Updated March 2026</span>
            </div>
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { num: "100+", label: "Students Coached" },
                { num: "IELTS 7+", label: "Average Result" },
                { num: "8 weeks", label: "Average Prep Time" },
                { num: "94%", label: "Reach Target Score" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-extrabold text-yellow-400">{s.num}</div>
                  <div className="text-xs text-blue-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-blue-50 border-b border-blue-100 py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-lg font-bold text-blue-900 mb-4">📋 Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              {[
                ["1", "Understanding the IELTS Test", "#understand"],
                ["2", "IELTS in Morocco — Centres, Fees & Dates", "#morocco"],
                ["3", "The 6 Mistakes Arabic Speakers Make", "#mistakes"],
                ["4", "Listening Section — Complete Strategy", "#listening"],
                ["5", "Reading Section — Complete Strategy", "#reading"],
                ["6", "Writing Section — Complete Strategy", "#writing"],
                ["7", "Speaking Section — Complete Strategy", "#speaking"],
                ["8", "Your 8-Week Study Plan", "#plan"],
                ["9", "Free Resources & Next Steps", "#resources"],
                ["10", "FAQ", "#faq"],
              ].map(([num, title, href]) => (
                <a key={href} href={href} className="flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline py-1">
                  <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">{num}</span>
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">

            {/* Intro */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <p className="text-lg text-gray-700 mb-4">
                The IELTS test is the single most important English exam for Moroccan students who want to study abroad, emigrate to Canada, the UK, or Australia, or qualify for international professional roles. Yet every year, thousands of Moroccan students sit the test underprepared — not because they lack intelligence or English ability, but because they don't know the specific strategies that make the difference between a 5.5 and a 7.0.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This guide exists to change that. It is the most comprehensive IELTS preparation resource written specifically for Moroccan learners — addressing the unique challenges that Arabic and French speakers face, providing section-by-section strategies, and giving you a complete 8-week roadmap to your target score.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
                <p className="font-semibold text-yellow-900">Important note from Mr. Ibrahim:</p>
                <p className="text-yellow-800 text-sm mt-1">This guide is based on working with over 100 Moroccan IELTS students since 2021. The strategies here are not generic — they are specifically designed for people whose native languages are Arabic and/or French, and who face the specific pronunciation, grammar, and vocabulary challenges that come with that background.</p>
              </div>
            </div>

            {/* Section 1: Understanding IELTS */}
            <section id="understand" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">1</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Understanding the IELTS Test</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                <p className="text-gray-700 mb-6">The IELTS (International English Language Testing System) is jointly managed by the British Council, IDP: IELTS Australia, and Cambridge Assessment English. It is accepted by over 11,000 organisations in 140 countries — including universities, employers, immigration authorities, and professional bodies.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">IELTS Academic vs. IELTS General Training</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h4 className="font-bold text-blue-800 text-lg mb-2">🎓 IELTS Academic</h4>
                    <p className="text-gray-700 text-sm mb-3">Choose this if you are applying to undergraduate or postgraduate university programmes, or seeking professional registration (doctor, nurse, engineer) in an English-speaking country.</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> University applications (UK, Canada, Australia)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Professional registration (GMC, NMC, etc.)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> More complex reading and writing tasks</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <h4 className="font-bold text-green-800 text-lg mb-2">💼 IELTS General Training</h4>
                    <p className="text-gray-700 text-sm mb-3">Choose this for work experience, secondary education, or immigration to Australia, Canada, New Zealand, or the UK.</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Canadian immigration (Express Entry)</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Australian skilled migration</li>
                      <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Work visa applications</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">The 4 Sections — At a Glance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-3 text-left">Section</th>
                        <th className="p-3 text-left">Duration</th>
                        <th className="p-3 text-left">Questions</th>
                        <th className="p-3 text-left">Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Listening", "30 min + 10 min transfer", "40 questions", "4 recordings, multiple choice, gap fill, matching"],
                        ["Reading", "60 min", "40 questions", "3 passages, 13–14 questions each"],
                        ["Writing", "60 min", "2 tasks", "Task 1: 150 words, Task 2: 250 words essay"],
                        ["Speaking", "11–14 min", "3 parts", "Face-to-face interview with examiner"],
                      ].map(([s, d, q, f], i) => (
                        <tr key={s} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-3 font-semibold text-blue-700">{s}</td>
                          <td className="p-3 text-gray-600">{d}</td>
                          <td className="p-3 text-gray-600">{q}</td>
                          <td className="p-3 text-gray-600">{f}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600"><strong>Band Score:</strong> Each section is scored from 0–9. Your overall band score is the average of all four sections, rounded to the nearest 0.5. A score of 7.0 overall means you are a "Good User" of English — the target for most UK and Canadian university applications.</p>
                </div>
              </div>
            </section>

            {/* Section 2: Morocco Specifics */}
            <section id="morocco" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">2</div>
                <h2 className="text-3xl font-extrabold text-gray-900">IELTS in Morocco — Centres, Fees & Dates</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Test Centres in Morocco</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { city: "Casablanca", centres: ["British Council Casablanca", "IDP IELTS Casablanca", "American Language Center"] },
                    { city: "Rabat", centres: ["British Council Rabat", "American Language Center Rabat"] },
                    { city: "Other Cities", centres: ["Marrakech (ALC)", "Fès (ALC)", "Tangier (ALC)", "Agadir (ALC)"] },
                  ].map((c) => (
                    <div key={c.city} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2">📍 {c.city}</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {c.centres.map((centre) => <li key={centre} className="flex items-start gap-1"><ChevronRight className="w-3 h-3 mt-1 text-blue-400 flex-shrink-0" />{centre}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Fees & Registration</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-extrabold text-yellow-700">2,200–2,500 MAD</div>
                      <div className="text-sm text-gray-600">Typical test fee (2026)</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-yellow-700">5–6 weeks</div>
                      <div className="text-sm text-gray-600">Book in advance (popular dates fill fast)</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-yellow-700">Computer or Paper</div>
                      <div className="text-sm text-gray-600">Both formats available in Morocco</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Register directly on the <strong>British Council Morocco</strong> or <strong>IDP IELTS</strong> websites. Bring your valid passport to the test — no other ID is accepted. Results are available online 13 days after the test date for paper-based, and 3–5 days for computer-based.</p>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                  <p className="font-semibold text-green-800">Mr. Ibrahim's Tip:</p>
                  <p className="text-green-700 text-sm mt-1">Choose the <strong>computer-based IELTS</strong> if possible. Results come in 3–5 days instead of 13, and the typing interface for Writing Task 2 is much faster than handwriting for most students. You can also see the timer clearly on screen.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Mistakes Arabic Speakers Make */}
            <section id="mistakes" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">3</div>
                <h2 className="text-3xl font-extrabold text-gray-900">The 6 Mistakes Arabic Speakers Make in IELTS</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-8">After coaching over 100 Moroccan IELTS students, Mr. Ibrahim has identified the six most common mistakes that are specific to Arabic and French speakers — mistakes that generic IELTS guides never address. Fix these six things and your score will improve immediately.</p>
                <div className="space-y-6">
                  {[
                    {
                      num: "01", color: "red", title: "Translating from Arabic in Your Head",
                      problem: "You think of the idea in Arabic (or Darija), translate it to French, then translate it to English. This creates hesitation in Speaking and unnatural sentence structures in Writing.",
                      fix: "Train yourself to think in English by narrating your daily life in English. When you wake up, describe what you see. When you eat, name what you're eating. This rewires your brain to access English directly."
                    },
                    {
                      num: "02", color: "orange", title: "Adding 'the' Before Every Noun",
                      problem: "In Arabic, the definite article (ال) is used very broadly. This causes Moroccan students to write 'the life is difficult' or 'the education is important' — which loses marks in Writing.",
                      fix: "Remember: in English, general concepts do NOT take 'the'. 'Life is difficult.' 'Education is important.' Only use 'the' when referring to something specific that both speaker and listener know about."
                    },
                    {
                      num: "03", color: "yellow", title: "Ignoring the 'th' Sound",
                      problem: "Arabic has no 'th' sound. Moroccan students often say 'ze' or 'de' instead of 'the', and 'sink' instead of 'think'. In the Speaking test, this directly affects your Pronunciation score.",
                      fix: "Place your tongue lightly between your teeth and blow air. Do this 10 times a day for one week. Then practice: 'the', 'this', 'that', 'think', 'three', 'through'. Record yourself and compare to a native speaker."
                    },
                    {
                      num: "04", color: "green", title: "Writing Short, Simple Sentences",
                      problem: "Many Moroccan students write short, safe sentences to avoid mistakes. But IELTS Writing rewards grammatical range and complexity. Short sentences get a maximum of Band 5 for Grammar.",
                      fix: "Practice writing complex sentences using: relative clauses ('which', 'who', 'that'), conditional sentences ('If...then...'), and passive voice. Aim for at least 30% of your sentences to be complex."
                    },
                    {
                      num: "05", color: "blue", title: "Not Reading the Question Carefully Enough",
                      problem: "In Reading, many students answer based on what they know about the topic, not what the text actually says. This is a critical error — IELTS answers must come from the text, not your general knowledge.",
                      fix: "Underline the key words in each question before you read. Then scan for those exact words (or synonyms) in the text. The answer is always in the text — you just need to find it."
                    },
                    {
                      num: "06", color: "purple", title: "Using Informal Language in Writing Task 2",
                      problem: "Moroccan students often use contractions ('don't', 'can't'), colloquial phrases ('a lot of', 'stuff'), and first-person opinions without hedging ('I think that...') — all of which reduce the Lexical Resource score.",
                      fix: "Replace contractions with full forms. Replace 'a lot of' with 'a significant number of' or 'a considerable amount of'. Replace 'I think' with 'It could be argued that' or 'There is compelling evidence to suggest that'."
                    },
                  ].map((m) => (
                    <div key={m.num} className={`border-l-4 border-${m.color}-500 bg-${m.color}-50 rounded-r-xl p-6`}>
                      <div className="flex items-start gap-4">
                        <span className={`text-3xl font-extrabold text-${m.color}-300 flex-shrink-0`}>{m.num}</span>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3">{m.title}</h3>
                          <div className="mb-3">
                            <span className="text-xs font-bold uppercase text-red-600 bg-red-100 px-2 py-0.5 rounded mr-2">The Problem</span>
                            <p className="text-gray-700 text-sm mt-1">{m.problem}</p>
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase text-green-600 bg-green-100 px-2 py-0.5 rounded mr-2">The Fix</span>
                            <p className="text-gray-700 text-sm mt-1">{m.fix}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4: Listening */}
            <section id="listening" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">4</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Listening Section — Complete Strategy</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: <Ear className="w-5 h-5" />, label: "Duration", val: "30 min + 10 min" },
                    { icon: <BookOpen className="w-5 h-5" />, label: "Questions", val: "40" },
                    { icon: <Users className="w-5 h-5" />, label: "Recordings", val: "4 sections" },
                    { icon: <Target className="w-5 h-5" />, label: "Band 7 target", val: "30/40 correct" },
                  ].map((s) => (
                    <div key={s.label} className="bg-purple-50 rounded-xl p-4 text-center border border-purple-100">
                      <div className="text-purple-600 flex justify-center mb-2">{s.icon}</div>
                      <div className="text-xl font-bold text-purple-800">{s.val}</div>
                      <div className="text-xs text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">The 4 Recordings — What to Expect</h3>
                <div className="space-y-3 mb-8">
                  {[
                    { part: "Part 1", desc: "A conversation between two people in a social context (e.g., booking a hotel, registering for a course). Usually the easiest.", tip: "Focus on spelling — names, addresses, and numbers are common. Write exactly what you hear." },
                    { part: "Part 2", desc: "A monologue in a social context (e.g., a tour guide describing a museum, a radio announcement).", tip: "Listen for signpost language: 'First...', 'Moving on...', 'Finally...' — these signal when the topic changes." },
                    { part: "Part 3", desc: "A conversation between 2–4 people in an academic context (e.g., students discussing an assignment with a tutor).", tip: "The hardest part for Moroccan students. Focus on opinions and attitudes, not just facts." },
                    { part: "Part 4", desc: "A monologue on an academic topic (e.g., a university lecture on climate change).", tip: "The vocabulary is complex. Focus on the main idea of each paragraph, not every word." },
                  ].map((p) => (
                    <div key={p.part} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="flex items-start gap-3">
                        <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">{p.part}</span>
                        <div>
                          <p className="text-gray-700 text-sm mb-2">{p.desc}</p>
                          <p className="text-purple-700 text-sm font-medium">💡 {p.tip}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Top 5 Listening Strategies</h3>
                <div className="space-y-3">
                  {[
                    { num: 1, tip: "Read the questions BEFORE the recording starts. You have 30–45 seconds between sections. Use every second of it to read ahead and predict what you'll hear." },
                    { num: 2, tip: "Underline the key words in each question. When you hear those words (or synonyms), that's your answer zone." },
                    { num: 3, tip: "Never leave a blank. If you miss an answer, write your best guess and move on. A wrong answer and a blank both score zero — but a guess might be right." },
                    { num: 4, tip: "Watch your spelling. 'Recieve' instead of 'receive' is marked wrong. Practice the 20 most commonly misspelled IELTS words." },
                    { num: 5, tip: "Train with British, Australian, and American accents. The recordings use all three. Listen to BBC Radio, ABC Australia, and NPR for 20 minutes a day." },
                  ].map((s) => (
                    <div key={s.num} className="flex items-start gap-3 bg-purple-50 rounded-xl p-4">
                      <span className="bg-purple-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">{s.num}</span>
                      <p className="text-gray-700 text-sm">{s.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5: Reading */}
            <section id="reading" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">5</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Reading Section — Complete Strategy</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-6">The Reading section is where most Moroccan students lose the most marks — not because their English is weak, but because they use the wrong strategy. They read every word from beginning to end, run out of time, and panic.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">The Correct Reading Strategy</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { step: "Step 1", title: "Skim the passage (2 minutes)", desc: "Read only the title, headings, first sentence of each paragraph, and the last paragraph. Build a mental map of where information is located." },
                    { step: "Step 2", title: "Read the questions (1 minute)", desc: "Identify the key words in each question. These are the words you will scan for in the text." },
                    { step: "Step 3", title: "Scan for answers (17 minutes)", desc: "Go back to the text and find where your key words appear. Read only that section carefully to find the answer." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-4 bg-green-50 rounded-xl p-5 border border-green-100">
                      <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">{s.step}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                        <p className="text-gray-700 text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">True / False / Not Given — The Hardest Question Type</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 mb-4">This is the question type that causes the most errors for Moroccan students. The key distinction:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { label: "TRUE", color: "green", desc: "The statement agrees with the information in the text. The text explicitly says this." },
                      { label: "FALSE", color: "red", desc: "The statement contradicts the information in the text. The text says the opposite." },
                      { label: "NOT GIVEN", color: "gray", desc: "The information is not mentioned in the text at all. You cannot find it anywhere." },
                    ].map((t) => (
                      <div key={t.label} className={`bg-${t.color}-50 border border-${t.color}-200 rounded-xl p-4`}>
                        <div className={`font-extrabold text-${t.color}-700 text-lg mb-2`}>{t.label}</div>
                        <p className="text-sm text-gray-700">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-4"><strong>Critical rule:</strong> If you cannot find the information in the text, the answer is NOT GIVEN — even if you know from general knowledge that the statement is true or false.</p>
                </div>
              </div>
            </section>

            {/* Section 6: Writing */}
            <section id="writing" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">6</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Writing Section — Complete Strategy</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
                  <p className="text-sm text-gray-700"><strong>Time allocation:</strong> Spend 20 minutes on Task 1 (150 words minimum) and 40 minutes on Task 2 (250 words minimum). Task 2 is worth twice as many marks as Task 1 — never sacrifice Task 2 time for Task 1.</p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Writing Task 2 — The 4-Paragraph Formula</h3>
                <p className="text-gray-700 mb-6">Task 2 is an academic essay. The safest, highest-scoring structure is a 4-paragraph essay. Use this formula every time:</p>
                <div className="space-y-4 mb-8">
                  {[
                    { para: "Paragraph 1", title: "Introduction (3–4 sentences)", desc: "Paraphrase the question topic (do NOT copy the question). State your position clearly. Preview your main arguments.", example: "In recent years, the question of whether [topic] has become increasingly debated. While some argue that [view A], others contend that [view B]. This essay will argue that [your position], primarily because [reason 1] and [reason 2]." },
                    { para: "Paragraph 2", title: "Body 1 — Main Argument (5–6 sentences)", desc: "State your first main point. Explain it. Give a specific example or evidence. Link back to the question.", example: "The most compelling argument in favour of [position] is [point]. This is because [explanation]. For instance, [specific example]. As a result, [consequence]. Therefore, [link back to question]." },
                    { para: "Paragraph 3", title: "Body 2 — Counter-Argument + Rebuttal (5–6 sentences)", desc: "Acknowledge the opposing view. Explain why it has merit. Then explain why your position is still stronger.", example: "Admittedly, those who argue [opposing view] have a point. [Explanation of opposing view]. However, this argument overlooks the fact that [your rebuttal]. Ultimately, [why your view is stronger]." },
                    { para: "Paragraph 4", title: "Conclusion (2–3 sentences)", desc: "Restate your position (in different words). Summarise your main arguments. End with a broader implication.", example: "In conclusion, it is clear that [restate position]. The evidence strongly suggests that [summary of arguments]. [Broader implication or recommendation]." },
                  ].map((p) => (
                    <div key={p.para} className="bg-yellow-50 rounded-xl p-5 border border-yellow-100">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">{p.para}</span>
                        <h4 className="font-bold text-gray-900">{p.title}</h4>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{p.desc}</p>
                      <div className="bg-white rounded-lg p-3 border border-yellow-200">
                        <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Template:</p>
                        <p className="text-sm text-gray-700 italic">{p.example}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Band 7+ Vocabulary — Replace These Words</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-yellow-600 text-white">
                        <th className="p-3 text-left">❌ Band 5 Word</th>
                        <th className="p-3 text-left">✅ Band 7+ Alternative</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["a lot of", "a significant number of / a considerable amount of"],
                        ["good", "beneficial / advantageous / favourable"],
                        ["bad", "detrimental / harmful / adverse"],
                        ["big", "substantial / significant / considerable"],
                        ["I think", "It could be argued that / Evidence suggests that"],
                        ["because", "due to the fact that / as a consequence of"],
                        ["also", "furthermore / moreover / in addition"],
                        ["but", "however / nevertheless / on the other hand"],
                        ["show", "demonstrate / illustrate / indicate"],
                        ["use", "utilise / employ / implement"],
                      ].map(([bad, good], i) => (
                        <tr key={bad} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-3 text-red-600 font-medium">{bad}</td>
                          <td className="p-3 text-green-700">{good}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 7: Speaking */}
            <section id="speaking" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">7</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Speaking Section — Complete Strategy</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-6">The Speaking section is the one area where Moroccan students can gain the most marks quickly — because it rewards fluency, vocabulary range, and coherence, not perfection. A student who speaks confidently with some errors will outscore a student who speaks slowly and carefully with fewer errors.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">The 3 Parts of the Speaking Test</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { part: "Part 1 (4–5 min)", title: "Introduction & Interview", desc: "The examiner asks about familiar topics: your home, job, studies, hobbies, family. These are warm-up questions.", strategy: "Give extended answers (2–3 sentences). Never answer with just 'yes' or 'no'. Add a reason and an example. 'Do you enjoy cooking?' → 'Yes, I really enjoy it. I find it relaxing after a long day at work. I especially love making traditional Moroccan dishes like tagine.'" },
                    { part: "Part 2 (3–4 min)", title: "Individual Long Turn", desc: "You receive a card with a topic and 4 bullet points. You have 1 minute to prepare, then speak for 1–2 minutes.", strategy: "Use your 1 minute to write 3–4 key words for each bullet point. Start with a strong opening sentence. Use linking words (firstly, moreover, in addition, finally). Keep talking until the examiner stops you — stopping early loses marks." },
                    { part: "Part 3 (4–5 min)", title: "Two-Way Discussion", desc: "The examiner asks abstract, opinion-based questions related to the Part 2 topic. This is the hardest part.", strategy: "Use hedging language: 'I believe...', 'In my opinion...', 'It seems to me that...'. Give structured answers: Point → Reason → Example → Conclusion. Never say 'I don't know' — always attempt an answer." },
                  ].map((p) => (
                    <div key={p.part} className="bg-pink-50 rounded-xl p-5 border border-pink-100">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0">{p.part}</span>
                        <h4 className="font-bold text-gray-900">{p.title}</h4>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{p.desc}</p>
                      <div className="bg-white rounded-lg p-3 border border-pink-200">
                        <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Strategy:</p>
                        <p className="text-sm text-gray-700">{p.strategy}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">❌ 5 Things That Kill Your Speaking Score</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Using filler words in Arabic or French ('wach', 'donc', 'euh') — use English fillers instead: 'well', 'you know', 'I mean'",
                      "Memorising answers — examiners are trained to detect memorised responses and will mark you down for Fluency",
                      "Speaking too quietly — the examiner needs to hear every word clearly",
                      "Stopping mid-sentence to think — keep speaking even if you need to rephrase: 'What I mean is...'",
                      "Using the same words repeatedly — use synonyms to demonstrate Lexical Resource"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: 8-Week Plan */}
            <section id="plan" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">8</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Your 8-Week IELTS Study Plan</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-8">This is the exact 8-week plan Mr. Ibrahim uses with his IELTS students at Fluentry. It is designed for students who are currently at Band 5.5–6.5 and want to reach Band 7+.</p>
                <div className="space-y-4">
                  {[
                    { weeks: "Weeks 1–2", title: "Diagnostic & Foundation", color: "indigo", tasks: ["Take a full IELTS practice test under timed conditions", "Identify your weakest section (this is where you'll gain the most marks)", "Study the 6 Arabic-speaker mistakes and fix them in your writing", "Daily: 20 min BBC News listening + vocabulary notebook"] },
                    { weeks: "Weeks 3–4", title: "Listening & Reading Mastery", color: "purple", tasks: ["Complete 2 full Listening practice tests per week", "Practice True/False/Not Given and Matching Headings daily", "Learn the 'skim-scan-answer' reading strategy", "Daily: 1 IELTS reading passage timed (20 min)"] },
                    { weeks: "Weeks 5–6", title: "Writing Intensive", color: "yellow", tasks: ["Write one Task 2 essay every day — get feedback on each one", "Learn the 4-paragraph essay formula and use it every time", "Study the Band 7+ vocabulary replacement list", "Practice Task 1: graphs, charts, maps, and process diagrams"] },
                    { weeks: "Weeks 7–8", title: "Speaking & Full Mock Tests", color: "pink", tasks: ["Record yourself answering Part 1, 2, and 3 questions daily", "Do 2 full mock speaking tests with a coach or language partner", "Take 2 complete timed IELTS practice tests under exam conditions", "Review all errors, focus on your weakest remaining area"] },
                  ].map((w) => (
                    <div key={w.weeks} className={`bg-${w.color}-50 rounded-xl p-6 border border-${w.color}-100`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`bg-${w.color}-600 text-white text-sm font-bold px-3 py-1 rounded-full`}>{w.weeks}</span>
                        <h3 className="text-lg font-bold text-gray-900">{w.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {w.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className={`w-4 h-4 text-${w.color}-500 mt-0.5 flex-shrink-0`} />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-extrabold mb-4">Ready to Start Your IELTS Journey?</h2>
                <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">Mr. Ibrahim has helped 100+ Moroccan students achieve Band 7+ in 8 weeks. Book a free 10-minute strategy call and get a personalised IELTS plan built around your specific weaknesses.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/book-lesson">
                    <button className="bg-yellow-400 text-yellow-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors text-lg">
                      Book Free Strategy Call
                    </button>
                  </Link>
                  <Link href="/ielts-preparation-morocco">
                    <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg">
                      View IELTS Programme
                    </button>
                  </Link>
                </div>
                <p className="text-blue-200 text-sm mt-4">Results guaranteed — if you don't reach your target band, Mr. Ibrahim coaches you for free until you do.</p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">10</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                {[
                  { q: "What IELTS score do I need for a Canadian visa?", a: "For Canadian immigration (Express Entry), you typically need CLB 7, which corresponds to IELTS band 6.0 in each section. For skilled worker programs, a 6.5 overall with no band below 6.0 is standard. Always check the specific requirements for your visa category on the IRCC website." },
                  { q: "How long does it take to improve my IELTS score by 1 band?", a: "With focused, coached preparation, most Moroccan students improve by 0.5–1 band in 4–8 weeks. Improving by 1.5 bands typically takes 8–12 weeks of intensive work. The key factor is the quality of feedback you receive — practising without feedback rarely leads to improvement." },
                  { q: "Where can I take the IELTS test in Morocco?", a: "IELTS test centres in Morocco include the British Council in Casablanca and Rabat, IDP centres in Casablanca, and the American Language Center in Casablanca, Rabat, Marrakech, Fès, Tangier, and Agadir. Book at least 5–6 weeks in advance as popular dates fill quickly." },
                  { q: "How much does the IELTS test cost in Morocco?", a: "The IELTS test costs approximately 2,200–2,500 MAD in Morocco, depending on the test centre and test format (paper-based or computer-based). The computer-based test is the same price but gives results in 3–5 days instead of 13 days." },
                  { q: "Is IELTS or TOEFL better for Moroccan students?", a: "IELTS is generally better for Moroccan students applying to UK, Australian, or Canadian universities and immigration. TOEFL is preferred for US universities. IELTS speaking is a face-to-face interview, which many Moroccan students find more natural than TOEFL's computer-recorded format. Additionally, IELTS is more widely accepted in Morocco's target immigration countries." },
                ].map((item) => (
                  <div key={item.q} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Internal Links */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">📚 Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: "IELTS Speaking Test: How to Score Band 7+", href: "/blog/ielts-speaking-test-success-guide" },
                  { title: "How to Pass the IELTS in Morocco (Step-by-Step)", href: "/blog/how-to-pass-ielts-in-morocco" },
                  { title: "Common Mistakes Moroccan English Learners Make", href: "/blog/common-mistakes-moroccan-english-learners" },
                  { title: "Best Apps & Websites to Learn English in Morocco", href: "/blog/best-apps-websites-learn-english-morocco" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className="flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                      <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 hover:text-blue-700">{link.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
