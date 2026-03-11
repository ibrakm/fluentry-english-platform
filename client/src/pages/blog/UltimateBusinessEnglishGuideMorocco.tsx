import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { CheckCircle, Briefcase, Mail, Mic, Users, TrendingUp, Award, ChevronRight, Star, Target, Clock, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function UltimateBusinessEnglishGuideMorocco() {
  const { langPrefix } = useLanguage();
  const title = "The Ultimate Business English Guide for Moroccan Professionals (2026)";
  const description = "Master Business English in Morocco. Emails, meetings, presentations, negotiations, LinkedIn — the complete guide for Moroccan professionals who want to advance their careers internationally.";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": { "@type": "Person", "name": "Mr. Ibrahim K.", "url": "https://www.fluentry.online/about" },
    "publisher": { "@type": "Organization", "name": "Fluentry", "url": "https://www.fluentry.online" },
    "datePublished": "2026-03-09",
    "dateModified": "2026-03-09",
    "mainEntityOfPage": "https://www.fluentry.online/blog/ultimate-business-english-guide-morocco"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How long does it take to become fluent in Business English?", "acceptedAnswer": { "@type": "Answer", "text": "Most Moroccan professionals at B1 level can reach professional Business English fluency (B2–C1) in 3–6 months of focused, coached practice. The key is practising real business scenarios, not just grammar exercises." } },
      { "@type": "Question", "name": "What is the most important Business English skill for Moroccan professionals?", "acceptedAnswer": { "@type": "Answer", "text": "Email writing is the highest-impact skill because it is used daily and leaves a permanent record. Mastering professional email structure and tone immediately improves your professional image with international colleagues and clients." } },
      { "@type": "Question", "name": "Do I need to have a perfect accent to succeed in Business English?", "acceptedAnswer": { "@type": "Answer", "text": "No. A clear, confident accent is far more important than a perfect accent. International business English is spoken by people from 190+ countries, all with different accents. What matters is clarity, confidence, and the ability to communicate your ideas effectively." } }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fluentry.online" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.fluentry.online/blog" },
      { "@type": "ListItem", "position": 3, "name": "Ultimate Business English Guide Morocco", "item": "https://www.fluentry.online/blog/ultimate-business-english-guide-morocco" }
    ]
  };

  return (
    <>
      <SEO title={title} description={description} path="/blog/ultimate-business-english-guide-morocco" />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed">

        {/* Hero */}
        <header className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-green-400 text-green-900 px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wide">
              <Award className="w-4 h-4" />
              Ultimate Guide 2026 — Career Edition
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              The Ultimate Business English Guide
              <span className="block text-green-400 mt-2">for Moroccan Professionals</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Emails, meetings, presentations, negotiations, LinkedIn — everything a Moroccan professional needs to communicate with authority and confidence in international business. Written by a TESOL-certified coach with 5+ years of Business English coaching experience.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200 mb-8">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 30 min read</span>
              <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> By Mr. Ibrahim K.</span>
              <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Updated March 2026</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { num: "B1→C1", label: "Typical Progress" },
                { num: "12 weeks", label: "Full Programme" },
                { num: "5 skills", label: "Covered in Full" },
                { num: "100%", label: "Career-Focused" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-extrabold text-green-400">{s.num}</div>
                  <div className="text-xs text-blue-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-green-50 border-b border-green-100 py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-lg font-bold text-green-900 mb-4">📋 Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              {[
                ["1", "Why Business English is Different", "#why"],
                ["2", "The 5 Core Business English Skills", "#skills"],
                ["3", "Professional Email Mastery", "#email"],
                ["4", "Meetings & Conference Calls", "#meetings"],
                ["5", "Presentations That Command Respect", "#presentations"],
                ["6", "Negotiation Language", "#negotiation"],
                ["7", "LinkedIn & Professional Writing", "#linkedin"],
                ["8", "Your 12-Week Business English Plan", "#plan"],
                ["9", "FAQ", "#faq"],
              ].map(([num, title, href]) => (
                <a key={href} href={href} className="flex items-center gap-2 text-green-700 hover:text-green-900 hover:underline py-1">
                  <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">{num}</span>
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
                Morocco is increasingly integrated into the global economy. Casablanca is home to major international banks, tech companies, and logistics firms. Rabat hosts embassies, NGOs, and government agencies with international mandates. Tangier's port is one of Africa's busiest. In every one of these environments, Business English is not a nice-to-have — it is the difference between a career that stagnates and one that accelerates.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Yet most Moroccan professionals who speak "good English" still struggle in real business situations. They hesitate in meetings. They write emails that sound too formal or too casual. They freeze during negotiations. They avoid giving presentations in English. This guide addresses all of these challenges directly.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
                <p className="font-semibold text-green-800">Who this guide is for:</p>
                <p className="text-green-700 text-sm mt-1">Moroccan professionals at B1–B2 level who use English at work but want to communicate with the authority and fluency of a C1 speaker. This guide focuses on real business scenarios — not grammar textbooks.</p>
              </div>
            </div>

            {/* Section 1: Why Business English is Different */}
            <section id="why" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">1</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Why Business English is Different</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-6">General English and Business English are not the same language. A student who scored Band 7 in IELTS may still struggle in a board meeting. Here is why:</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {[
                    { title: "General English", color: "gray", items: ["Focuses on grammar rules", "Uses everyday vocabulary", "Practises social conversations", "Measures language accuracy", "Tolerates informal language"] },
                    { title: "Business English", color: "green", items: ["Focuses on communication goals", "Uses industry-specific vocabulary", "Practises professional scenarios", "Measures impact and persuasion", "Requires precise, formal register"] },
                  ].map((col) => (
                    <div key={col.title} className={`bg-${col.color}-50 rounded-xl p-5 border border-${col.color}-100`}>
                      <h3 className={`font-bold text-${col.color === "gray" ? "gray" : "green"}-800 mb-3`}>{col.title}</h3>
                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                            <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <p className="text-gray-700 text-sm"><strong>The key insight:</strong> In business, you are not being tested on your English. You are being judged on your ideas, your professionalism, and your ability to influence others. Business English is the tool that lets your intelligence and expertise come through clearly — in any language, in any meeting room, on any continent.</p>
                </div>
              </div>
            </section>

            {/* Section 2: The 5 Core Skills */}
            <section id="skills" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">2</div>
                <h2 className="text-3xl font-extrabold text-gray-900">The 5 Core Business English Skills</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-5 gap-4 text-center">
                  {[
                    { icon: <Mail className="w-6 h-6" />, skill: "Email Writing", level: "Daily Use", color: "blue" },
                    { icon: <Users className="w-6 h-6" />, skill: "Meetings", level: "Weekly Use", color: "green" },
                    { icon: <Mic className="w-6 h-6" />, skill: "Presentations", level: "Monthly Use", color: "purple" },
                    { icon: <Briefcase className="w-6 h-6" />, skill: "Negotiation", level: "High Impact", color: "orange" },
                    { icon: <TrendingUp className="w-6 h-6" />, skill: "LinkedIn", level: "Career Growth", color: "indigo" },
                  ].map((s) => (
                    <div key={s.skill} className={`bg-${s.color}-50 rounded-xl p-4 border border-${s.color}-100`}>
                      <div className={`text-${s.color}-600 flex justify-center mb-2`}>{s.icon}</div>
                      <div className="font-bold text-gray-900 text-sm">{s.skill}</div>
                      <div className={`text-xs text-${s.color}-600 mt-1`}>{s.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Email Mastery */}
            <section id="email" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">3</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Professional Email Mastery</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-6">Email is the most important Business English skill because it is used every day and leaves a permanent record of your professionalism. A poorly written email can undermine months of relationship-building in seconds.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">The 5-Part Professional Email Structure</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { part: "1. Subject Line", tip: "Be specific and action-oriented. Bad: 'Meeting'. Good: 'Request to Reschedule Thursday's Project Review — 14 March'", example: "Action Required: Q1 Budget Approval — Deadline 15 March" },
                    { part: "2. Greeting", tip: "Match formality to your relationship. First contact or senior person: 'Dear Mr./Ms. [Last Name]'. Established colleague: 'Hi [First Name]'. Never: 'Dear Sir/Madam' (impersonal) or 'Hey' (too casual).", example: "Dear Ms. Johnson, / Hi Sarah," },
                    { part: "3. Opening Line", tip: "Never start with 'I hope this email finds you well' — it is overused and meaningless. Start with your purpose immediately, or with a brief, genuine reference.", example: "I'm writing to follow up on our discussion from Tuesday's call regarding the Q2 expansion plan." },
                    { part: "4. Body", tip: "One idea per paragraph. Use bullet points for lists of 3+ items. Keep sentences short (15–20 words maximum). Use active voice: 'I will send the report' not 'The report will be sent by me'.", example: "Please find attached the revised proposal. I have made the following changes based on your feedback:\n• Reduced the budget by 15%\n• Added a risk mitigation section\n• Updated the timeline to reflect the new deadline" },
                    { part: "5. Closing", tip: "State the next action clearly. Who does what by when? Then use a professional sign-off.", example: "Could you please confirm your availability for a 30-minute call this week? I am free Thursday 10–12am or Friday 2–4pm.\n\nBest regards, / Kind regards, / Warm regards," },
                  ].map((p) => (
                    <div key={p.part} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2">{p.part}</h4>
                      <p className="text-gray-700 text-sm mb-3">{p.tip}</p>
                      <div className="bg-white rounded-lg p-3 border border-blue-200">
                        <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Example:</p>
                        <p className="text-sm text-gray-700 font-mono whitespace-pre-line">{p.example}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Email Phrases — The Professional Toolkit</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { category: "Making Requests", phrases: ["Could you please...?", "I would appreciate it if you could...", "Would it be possible to...?", "I am writing to request..."] },
                    { category: "Giving Information", phrases: ["Please find attached...", "I am writing to inform you that...", "Further to our conversation...", "As discussed, I am sending..."] },
                    { category: "Apologising", phrases: ["I apologise for any inconvenience caused.", "Please accept my sincere apologies for...", "I regret to inform you that...", "Unfortunately, due to [reason]..."] },
                    { category: "Following Up", phrases: ["I am writing to follow up on...", "I wanted to check in regarding...", "Could you provide an update on...?", "As a reminder, the deadline for... is..."] },
                  ].map((cat) => (
                    <div key={cat.category} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <h4 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">{cat.category}</h4>
                      <ul className="space-y-2">
                        {cat.phrases.map((phrase) => (
                          <li key={phrase} className="text-sm text-gray-700 bg-white rounded-lg px-3 py-2 border border-gray-100 font-mono">{phrase}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4: Meetings */}
            <section id="meetings" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">4</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Meetings & Conference Calls</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-6">Meetings are where careers are made or stalled. The professional who speaks clearly, contributes confidently, and manages the conversation effectively is the one who gets noticed — regardless of their job title.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Meeting Language — By Situation</h3>
                <div className="space-y-6">
                  {[
                    {
                      situation: "Starting the Meeting",
                      phrases: [
                        "Shall we get started?",
                        "Let's begin. The purpose of today's meeting is to...",
                        "As you can see from the agenda, we have three items to cover today.",
                        "We have about 45 minutes, so let's make sure we stay on track."
                      ]
                    },
                    {
                      situation: "Contributing Your Ideas",
                      phrases: [
                        "I'd like to add something here, if I may.",
                        "Building on what [Name] said, I think we should also consider...",
                        "From my experience, the most effective approach is...",
                        "The data suggests that..."
                      ]
                    },
                    {
                      situation: "Interrupting Politely",
                      phrases: [
                        "Sorry to interrupt, but I think this is important...",
                        "If I could just come in here...",
                        "Can I just add something quickly?",
                        "Before we move on, I'd like to raise a point about..."
                      ]
                    },
                    {
                      situation: "Asking for Clarification",
                      phrases: [
                        "Could you clarify what you mean by...?",
                        "I'm not sure I follow. Could you elaborate on that?",
                        "Just to confirm, are you saying that...?",
                        "Could you give us an example of what that would look like in practice?"
                      ]
                    },
                    {
                      situation: "Disagreeing Professionally",
                      phrases: [
                        "I see your point, but I think we also need to consider...",
                        "That's an interesting perspective. However, the data shows...",
                        "I respectfully disagree. In my view...",
                        "While I understand the rationale, I'm concerned that..."
                      ]
                    },
                    {
                      situation: "Closing & Action Points",
                      phrases: [
                        "Let me summarise what we've agreed today.",
                        "So the next steps are: [Name] will [action] by [date].",
                        "Can we confirm that everyone is aligned on this?",
                        "I'll send a follow-up email with the action points within the hour."
                      ]
                    },
                  ].map((s) => (
                    <div key={s.situation} className="border border-gray-100 rounded-xl overflow-hidden">
                      <div className="bg-green-600 text-white px-5 py-3 font-bold text-sm">{s.situation}</div>
                      <div className="p-4 grid md:grid-cols-2 gap-2">
                        {s.phrases.map((phrase) => (
                          <div key={phrase} className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 font-mono border border-gray-100">"{phrase}"</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5: Presentations */}
            <section id="presentations" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">5</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Presentations That Command Respect</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-6">A great presentation in English is not about speaking perfectly — it is about structure, confidence, and connecting with your audience. The most respected presenters in international business are not native English speakers. They are clear, structured, and confident.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">The PREP Formula — For Any Presentation Point</h3>
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {[
                    { letter: "P", word: "Point", desc: "State your main point clearly in one sentence.", color: "purple" },
                    { letter: "R", word: "Reason", desc: "Explain why this point is important or true.", color: "blue" },
                    { letter: "E", word: "Example", desc: "Give a specific, concrete example or data point.", color: "green" },
                    { letter: "P", word: "Point", desc: "Restate the point to reinforce it in the audience's mind.", color: "orange" },
                  ].map((p, i) => (
                    <div key={i} className={`bg-${p.color}-50 rounded-xl p-4 text-center border border-${p.color}-100`}>
                      <div className={`text-4xl font-extrabold text-${p.color}-600 mb-1`}>{p.letter}</div>
                      <div className="font-bold text-gray-900 mb-2">{p.word}</div>
                      <p className="text-xs text-gray-600">{p.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Signpost Language — Guide Your Audience</h3>
                <p className="text-gray-700 mb-4 text-sm">Signpost language tells your audience where you are in the presentation and what is coming next. It is the difference between a presentation that feels organised and one that feels confusing.</p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-purple-600 text-white">
                        <th className="p-3 text-left">Purpose</th>
                        <th className="p-3 text-left">Phrases to Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Opening", "Good morning/afternoon everyone. Today I'd like to present... / I'm going to take you through..."],
                        ["Structuring", "I've divided my presentation into three parts... / First... Second... Finally..."],
                        ["Moving On", "That brings me to my next point... / Moving on to... / Let's now look at..."],
                        ["Emphasising", "I'd like to draw your attention to... / The key point here is... / What's particularly important is..."],
                        ["Referring to Data", "As you can see from this graph... / The figures show that... / According to our research..."],
                        ["Inviting Questions", "I'd be happy to take any questions now. / Does anyone have any questions? / Please feel free to interrupt me if anything is unclear."],
                      ].map(([purpose, phrases], i) => (
                        <tr key={purpose} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-3 font-semibold text-purple-700">{purpose}</td>
                          <td className="p-3 text-gray-700 font-mono text-xs">{phrases}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 6: Negotiation */}
            <section id="negotiation" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">6</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Negotiation Language</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-6">Negotiation in English is not about being aggressive — it is about being clear, firm, and professional. The most effective negotiators use precise language that leaves no room for misunderstanding while maintaining a positive relationship.</p>
                <div className="space-y-4">
                  {[
                    { phase: "Making an Offer", phrases: ["We'd be prepared to offer...", "Our proposal is...", "What we can commit to is...", "We're in a position to..."] },
                    { phase: "Making a Counter-Offer", phrases: ["We appreciate your offer, however...", "That's not quite what we had in mind. Could you consider...?", "We'd be willing to accept X if you could...", "What if we were to...?"] },
                    { phase: "Buying Time", phrases: ["I'd like to take some time to consider this.", "Could we come back to this point?", "I'll need to discuss this with my team.", "Can we revisit this tomorrow?"] },
                    { phase: "Reaching Agreement", phrases: ["I think we're in agreement on...", "So to summarise what we've agreed...", "I'm satisfied with these terms.", "Let's put this in writing."] },
                    { phase: "Rejecting Firmly but Politely", phrases: ["I'm afraid that's not something we can agree to.", "Unfortunately, that falls outside our parameters.", "That's not workable for us at this stage.", "We'd need to see significant movement on that point before we could consider it."] },
                  ].map((s) => (
                    <div key={s.phase} className="border border-orange-100 rounded-xl overflow-hidden">
                      <div className="bg-orange-500 text-white px-5 py-3 font-bold text-sm">{s.phase}</div>
                      <div className="p-4 grid md:grid-cols-2 gap-2">
                        {s.phrases.map((phrase) => (
                          <div key={phrase} className="bg-orange-50 rounded-lg px-3 py-2 text-sm text-gray-700 font-mono border border-orange-100">"{phrase}"</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7: LinkedIn */}
            <section id="linkedin" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">7</div>
                <h2 className="text-3xl font-extrabold text-gray-900">LinkedIn & Professional Writing</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-6">LinkedIn is the most powerful career tool for Moroccan professionals who want to connect with international opportunities. A strong LinkedIn profile in English opens doors that a CV alone cannot. Here is how to write one that gets noticed.</p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">The 5 Elements of a Powerful LinkedIn Profile</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { element: "Headline", bad: "Marketing Manager at XYZ Company", good: "Marketing Manager | Driving Brand Growth Across MENA | Specialist in Digital & B2B Marketing", why: "Your headline appears in search results. Pack it with keywords and your value proposition." },
                    { element: "About Section", bad: "I am a motivated professional with 5 years of experience in marketing.", good: "I help international brands expand their presence across the MENA region. Over the past 5 years, I have led campaigns that generated $2M+ in revenue, managed cross-cultural teams of 15+, and built partnerships with 30+ regional distributors.", why: "Lead with what you do for others, not what you are. Use numbers. Write in first person." },
                    { element: "Experience Bullets", bad: "Responsible for managing social media accounts.", good: "Grew Instagram following from 5K to 45K in 8 months through a data-driven content strategy, resulting in a 35% increase in website traffic.", why: "Use the formula: [Action verb] + [What you did] + [Result with numbers]." },
                    { element: "Skills Section", bad: "Microsoft Office, Teamwork, Communication", good: "Digital Marketing, Google Analytics, SEO, Content Strategy, B2B Sales, CRM (Salesforce), Arabic, French, English", why: "LinkedIn's algorithm uses skills for search. Add all relevant technical and language skills." },
                    { element: "Recommendations", bad: "No recommendations", good: "3–5 recommendations from managers, clients, or colleagues who describe specific results you delivered", why: "Recommendations are the LinkedIn equivalent of video testimonials — they are the most trusted form of social proof." },
                  ].map((e) => (
                    <div key={e.element} className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                      <h4 className="font-bold text-indigo-800 mb-3">{e.element}</h4>
                      <div className="grid md:grid-cols-2 gap-3 mb-3">
                        <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                          <p className="text-xs font-bold text-red-600 uppercase mb-1">❌ Weak</p>
                          <p className="text-sm text-gray-700 italic">"{e.bad}"</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                          <p className="text-xs font-bold text-green-600 uppercase mb-1">✅ Strong</p>
                          <p className="text-sm text-gray-700 italic">"{e.good}"</p>
                        </div>
                      </div>
                      <p className="text-xs text-indigo-700 bg-indigo-100 rounded-lg px-3 py-2"><strong>Why it matters:</strong> {e.why}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8: 12-Week Plan */}
            <section id="plan" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">8</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Your 12-Week Business English Plan</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-gray-700 mb-8">This is the exact programme structure Mr. Ibrahim uses with his Business English students at Fluentry. It takes a professional from B1 to professional C1 fluency in 12 weeks of focused, coached practice.</p>
                <div className="space-y-4">
                  {[
                    { weeks: "Weeks 1–3", title: "Foundation & Email Mastery", color: "blue", tasks: ["Diagnostic session: identify your specific business English gaps", "Master the 5-part professional email structure", "Practice writing 3 emails per week (request, follow-up, apology)", "Build your core business vocabulary: 50 essential business phrases", "Daily: Read one article from Harvard Business Review or The Economist"] },
                    { weeks: "Weeks 4–6", title: "Meetings & Conference Calls", color: "green", tasks: ["Learn and practice all 6 meeting language categories", "Record yourself in a simulated meeting — review with coach", "Practice interrupting, contributing, and summarising", "Master the language of disagreement and consensus-building", "Weekly: Participate in one English-language online meeting or webinar"] },
                    { weeks: "Weeks 7–9", title: "Presentations & Public Speaking", color: "purple", tasks: ["Learn the PREP formula and signpost language", "Prepare and deliver a 5-minute presentation on your area of expertise", "Practice handling Q&A sessions in English", "Work on vocal confidence: pace, pause, and emphasis", "Record and review 3 presentations with detailed coach feedback"] },
                    { weeks: "Weeks 10–11", title: "Negotiation & Advanced Communication", color: "orange", tasks: ["Master all 5 phases of negotiation language", "Practice real negotiation scenarios relevant to your industry", "Learn advanced hedging and diplomatic language", "Work on LinkedIn profile optimisation in English", "Practice cold outreach messages and professional networking language"] },
                    { weeks: "Week 12", title: "Integration & Fluency Test", color: "gray", tasks: ["Full Business English simulation: email + meeting + presentation", "LinkedIn profile review and final optimisation", "Personalised vocabulary list for your specific industry", "Ongoing practice plan and resource list", "Certificate of completion and professional fluency milestone"] },
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

              {/* Internal Link: Business English */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-green-900 mb-2">Master Business English in 12 Weeks</h3>
                <p className="text-green-700 mb-4 text-sm">Fluentry's Business English Mastery programme is designed for Moroccan professionals who need to communicate confidently in meetings, emails, and presentations.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href={`${langPrefix}/courses`}>
                    <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">View Business English Course</Button>
                  </Link>
                  <Link href={`${langPrefix}/pricing`}>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">See Pricing</Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-extrabold mb-4">Ready to Advance Your Career with Business English?</h2>
                <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">Mr. Ibrahim's 12-Week Business English Mastery programme is designed specifically for Moroccan professionals. Book a free strategy call and get a personalised plan built around your industry and career goals.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={`${langPrefix}/book-lesson`}>
                    <button className="bg-green-400 text-green-900 font-bold px-8 py-4 rounded-xl hover:bg-green-300 transition-colors text-lg">
                      Book Free Strategy Call
                    </button>
                  </Link>
                  <Link href={`${langPrefix}/pricing`}>
                    <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg">
                      View Business English Programme
                    </button>
                  </Link>
                </div>
                <p className="text-blue-200 text-sm mt-4">Guaranteed professional fluency milestone — or Mr. Ibrahim coaches you for free until you reach it.</p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">9</div>
                <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                {[
                  { q: "How long does it take to become fluent in Business English?", a: "Most Moroccan professionals at B1 level can reach professional Business English fluency (B2–C1) in 3–6 months of focused, coached practice. The key is practising real business scenarios — emails, meetings, presentations — not grammar textbooks. With Mr. Ibrahim's 12-week intensive programme, most students reach their professional fluency milestone within the programme duration." },
                  { q: "What is the most important Business English skill for Moroccan professionals?", a: "Email writing is the highest-impact skill because it is used every day and leaves a permanent record of your professionalism. A poorly written email can undermine months of relationship-building. Mastering professional email structure and tone immediately improves your professional image with international colleagues and clients." },
                  { q: "Do I need to have a perfect accent to succeed in Business English?", a: "No. A clear, confident accent is far more important than a perfect accent. International business English is spoken by people from 190+ countries, all with different accents. What matters is clarity, confidence, and the ability to communicate your ideas effectively. Mr. Ibrahim's programme focuses on clear communication, not accent elimination." },
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
                  { title: "Business English Email Writing Guide", href: "/blog/business-english-email-writing-guide" },
                  { title: "How to Get a Call Centre Job in Morocco", href: "/blog/how-to-get-a-call-center-job-in-morocco" },
                  { title: "Best Techniques to Improve English Speaking", href: "/blog/best-techniques-improve-english-speaking" },
                  { title: "English Coach Casablanca — Mr. Ibrahim K.", href: "/english-coach-casablanca" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className="flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors cursor-pointer">
                      <ChevronRight className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 hover:text-green-700">{link.title}</span>
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
