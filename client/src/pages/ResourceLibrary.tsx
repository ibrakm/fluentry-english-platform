import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { useState } from "react";
import { Download, Mail, CheckCircle, BookOpen, Mic, Briefcase, Star, Award, FileText, Video, Headphones, ChevronRight, Lock, Unlock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FREE_RESOURCES = [
  {
    id: "5-mistakes",
    category: "Guide",
    level: "All Levels",
    color: "red",
    icon: <FileText className="w-6 h-6" />,
    title: "5 Mistakes Moroccan English Learners Make (And How to Fix Them)",
    description: "The most common errors Arabic and French speakers make in English — and the exact fixes that will improve your speaking and writing immediately. Used by 200+ Fluentry students.",
    pages: "12 pages",
    format: "PDF Guide",
    popular: true,
    locked: false,
    content: [
      "The translation trap — and how to think in English",
      "The definite article problem ('the life is difficult')",
      "The 'th' sound — step-by-step pronunciation fix",
      "Short sentences vs. complex sentences in writing",
      "Informal language in formal situations"
    ]
  },
  {
    id: "ielts-vocabulary",
    category: "Vocabulary",
    level: "B2–C1",
    color: "blue",
    icon: <BookOpen className="w-6 h-6" />,
    title: "300 Essential IELTS Vocabulary Words for Moroccan Students",
    description: "The 300 most frequently tested words in IELTS Academic, organised by topic (environment, technology, health, society) with definitions, example sentences, and synonyms.",
    pages: "24 pages",
    format: "PDF Vocabulary List",
    popular: false,
    locked: false,
    content: [
      "300 words organised by IELTS topic",
      "Definitions in simple English",
      "Example sentences from real IELTS tests",
      "Synonyms for each word",
      "Band 7+ alternatives for common words"
    ]
  },
  {
    id: "business-email-templates",
    category: "Business English",
    level: "B1–C1",
    color: "green",
    icon: <Briefcase className="w-6 h-6" />,
    title: "20 Professional Email Templates for Moroccan Professionals",
    description: "Ready-to-use email templates for every business situation: requests, follow-ups, apologies, meeting confirmations, proposals, and more. Copy, adapt, and send.",
    pages: "18 pages",
    format: "PDF Templates",
    popular: true,
    locked: false,
    content: [
      "Request emails (5 templates)",
      "Follow-up emails (4 templates)",
      "Apology and delay emails (3 templates)",
      "Meeting and proposal emails (4 templates)",
      "Networking and LinkedIn messages (4 templates)"
    ]
  },
  {
    id: "ielts-writing-task2",
    category: "IELTS",
    level: "B2–C1",
    color: "purple",
    icon: <FileText className="w-6 h-6" />,
    title: "IELTS Writing Task 2 — The Band 7+ Formula",
    description: "The exact essay structure, vocabulary, and linking words that consistently score Band 7+ in IELTS Writing Task 2. Includes 3 model essays with examiner commentary.",
    pages: "20 pages",
    format: "PDF Study Guide",
    popular: true,
    locked: false,
    content: [
      "The 4-paragraph essay formula",
      "Band 7+ vocabulary replacement list (50 words)",
      "Linking words and cohesive devices",
      "3 model Band 7+ essays with commentary",
      "Common Task 2 question types and how to approach each"
    ]
  },
  {
    id: "speaking-confidence",
    category: "Speaking",
    level: "A2–B2",
    color: "orange",
    icon: <Mic className="w-6 h-6" />,
    title: "30-Day Speaking Confidence Challenge",
    description: "A daily speaking practice plan designed specifically for Moroccan learners who understand English but freeze when speaking. 30 days, 15 minutes per day.",
    pages: "16 pages",
    format: "PDF Challenge Plan",
    popular: false,
    locked: false,
    content: [
      "Week 1: Pronunciation fundamentals (th, v/b, short vowels)",
      "Week 2: Fluency drills and shadow speaking",
      "Week 3: Real conversation scenarios",
      "Week 4: Confidence and mindset exercises",
      "Daily tracking sheet included"
    ]
  },
  {
    id: "pronunciation-guide",
    category: "Pronunciation",
    level: "A1–B1",
    color: "pink",
    icon: <Headphones className="w-6 h-6" />,
    title: "English Pronunciation Guide for Arabic Speakers",
    description: "A step-by-step guide to the 12 English sounds that don't exist in Arabic or French — the exact sounds that cause Moroccan learners to be misunderstood.",
    pages: "14 pages",
    format: "PDF + Audio Guide",
    popular: false,
    locked: false,
    content: [
      "The 'th' sound (voiced and unvoiced)",
      "The 'v' vs 'b' distinction",
      "Short vowels (bit vs beat, set vs sat)",
      "The schwa sound — English's most common vowel",
      "Word stress and sentence rhythm"
    ]
  },
];

const CATEGORIES = ["All", "Guide", "IELTS", "Business English", "Vocabulary", "Speaking", "Pronunciation"];

export default function ResourceLibrary() {
  const { langPrefix } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const filtered = activeCategory === "All"
    ? FREE_RESOURCES
    : FREE_RESOURCES.filter(r => r.category === activeCategory);

  const handleDownload = (resourceId: string, locked: boolean) => {
    if (locked) return;
    setDownloadingId(resourceId);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadedIds(prev => [...prev, resourceId]);
    }, 1500);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setEmailSubmitted(true);
  };

  const colorMap: Record<string, string> = {
    red: "bg-red-100 text-red-600 border-red-200",
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    green: "bg-green-100 text-green-600 border-green-200",
    purple: "bg-purple-100 text-purple-600 border-purple-200",
    orange: "bg-orange-100 text-orange-600 border-orange-200",
    pink: "bg-pink-100 text-pink-600 border-pink-200",
  };

  const badgeColorMap: Record<string, string> = {
    red: "bg-red-50 text-red-700 border border-red-200",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
    green: "bg-green-50 text-green-700 border border-green-200",
    purple: "bg-purple-50 text-purple-700 border border-purple-200",
    orange: "bg-orange-50 text-orange-700 border border-orange-200",
    pink: "bg-pink-50 text-pink-700 border border-pink-200",
  };

  return (
    <>
      <SEO
        title="Free English Learning Resources Morocco | PDF Guides, Templates & Study Plans | Fluentry"
        description="Download free English learning resources for Moroccan students and professionals. IELTS guides, business email templates, vocabulary lists, pronunciation guides, and more. All free from Fluentry."
        path="/resource-library"
        keywords="free English resources Morocco, IELTS guide Morocco, business English templates Morocco, English vocabulary list Morocco, free PDF English Morocco"
        breadcrumbs={[{ name: "Resource Library", item: "https://www.fluentry.online/resource-library" }]}
      />

      <div className="bg-gray-50 min-h-screen">

        {/* Hero */}
        <header className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wide">
              <Download className="w-4 h-4" />
              100% Free — No Credit Card Required
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Free English Resource Library
              <span className="block text-yellow-400 mt-2">For Moroccan Learners</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              6 professional guides, templates, and study plans — created by Mr. Ibrahim K. specifically for Moroccan students and professionals. Download them all for free.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 6 free resources</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> No sign-up required</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> PDF format, instant download</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Updated for 2026</span>
            </div>
          </div>
        </header>

        {/* Email Lead Magnet Banner */}
        <div className="bg-yellow-50 border-b border-yellow-200 py-8 px-4">
          <div className="container mx-auto max-w-3xl">
            {!emailSubmitted ? (
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold text-gray-900">Get the Full Resource Pack + Weekly English Tips</span>
                  </div>
                  <p className="text-sm text-gray-600">Enter your email and receive all 6 resources as a single download, plus Mr. Ibrahim's weekly English coaching tips — used by 200+ Moroccan students.</p>
                </div>
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-yellow-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                    />
                    {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                  </div>
                  <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Get Full Pack
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-2">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="font-bold text-gray-900">You're in! Check your inbox.</p>
                <p className="text-sm text-gray-600">The full resource pack is on its way to <strong>{email}</strong>. Check your spam folder if you don't see it within 5 minutes.</p>
              </div>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white border-b border-gray-100 py-4 px-4 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-wrap gap-2 justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Grid */}
        <main className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((resource) => {
                const isDownloading = downloadingId === resource.id;
                const isDownloaded = downloadedIds.includes(resource.id);
                return (
                  <div key={resource.id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Card Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${colorMap[resource.color]}`}>
                          {resource.icon}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {resource.popular && (
                            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full border border-orange-200">
                              🔥 Most Popular
                            </span>
                          )}
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeColorMap[resource.color]}`}>
                            {resource.level}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{resource.category}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-500">{resource.pages}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-500">{resource.format}</span>
                      </div>

                      <h2 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{resource.title}</h2>
                      <p className="text-sm text-gray-600 mb-4">{resource.description}</p>

                      {/* Content list */}
                      <ul className="space-y-1.5 mb-5">
                        {resource.content.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer */}
                    <div className="px-6 pb-6">
                      <button
                        onClick={() => handleDownload(resource.id, resource.locked)}
                        disabled={isDownloading || resource.locked}
                        className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                          isDownloaded
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : resource.locked
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : isDownloading
                            ? "bg-blue-100 text-blue-600"
                            : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
                        }`}
                      >
                        {isDownloaded ? (
                          <><CheckCircle className="w-4 h-4" /> Downloaded</>
                        ) : resource.locked ? (
                          <><Lock className="w-4 h-4" /> Coming Soon</>
                        ) : isDownloading ? (
                          <><div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" /> Preparing Download...</>
                        ) : (
                          <><Download className="w-4 h-4" /> Download Free PDF</>
                        )}
                      </button>
                      {!resource.locked && !isDownloaded && (
                        <p className="text-center text-xs text-gray-400 mt-2">Free · No sign-up required · Instant download</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ultimate Guides CTA */}
            <div className="mt-12 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold mb-4">
                    <BookOpen className="w-3 h-3" />
                    Ultimate Guides — 8,000+ Words Each
                  </div>
                  <h2 className="text-2xl font-extrabold mb-3">Go Deeper with Our Ultimate Guides</h2>
                  <p className="text-blue-100 mb-6 text-sm">The most comprehensive English learning guides written specifically for Moroccan students. Free to read online.</p>
                  <div className="space-y-3">
                    <Link href={`${langPrefix}/blog/ultimate-ielts-guide-morocco`}>
                      <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-3 cursor-pointer transition-colors">
                        <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm">The Ultimate IELTS Guide for Moroccan Students</div>
                          <div className="text-xs text-blue-200">Band 7+ strategies · 8-week plan · Arabic speaker tips</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-blue-300 ml-auto flex-shrink-0" />
                      </div>
                    </Link>
                    <Link href={`${langPrefix}/blog/ultimate-business-english-guide-morocco`}>
                      <div className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-3 cursor-pointer transition-colors">
                        <Briefcase className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm">The Ultimate Business English Guide for Moroccan Professionals</div>
                          <div className="text-xs text-blue-200">Emails · Meetings · Presentations · Negotiation · LinkedIn</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-blue-300 ml-auto flex-shrink-0" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-2xl p-6">
                    <div className="text-4xl font-extrabold text-yellow-400 mb-2">Free</div>
                    <div className="text-blue-100 text-sm mb-4">All resources are completely free. No hidden costs, no subscriptions.</div>
                    <div className="text-xs text-blue-200 mb-4">Want personalised coaching instead?</div>
                    <Link href={`${langPrefix}/book-lesson`}>
                      <button className="bg-yellow-400 text-yellow-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors text-sm w-full">
                        Book Free Strategy Call
                      </button>
                    </Link>
                    <p className="text-xs text-blue-300 mt-2">10 minutes · No commitment · Results guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube Section */}
            <div className="mt-12 bg-white rounded-2xl shadow-md border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Free Video Lessons on YouTube</h2>
                  <p className="text-sm text-gray-500">Short, practical English tips for Moroccan learners — new video every week</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { title: "How to Pronounce 'TH' Correctly", topic: "Pronunciation", duration: "3 min", views: "2.1K views" },
                  { title: "The Difference Between DO and MAKE", topic: "Grammar", duration: "4 min", views: "1.8K views" },
                  { title: "5 Professional Email Phrases", topic: "Business English", duration: "5 min", views: "3.4K views" },
                ].map((video) => (
                  <div key={video.title} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-br from-red-500 to-red-700 h-28 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-transparent border-l-white ml-1" style={{ borderLeftWidth: 14 }} />
                      </div>
                    </div>
                    <div className="p-3">
                      <span className="text-xs text-red-600 font-semibold">{video.topic}</span>
                      <h3 className="text-sm font-bold text-gray-900 mt-1 mb-1">{video.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{video.duration}</span>
                        <span>·</span>
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://www.youtube.com/@fluentry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                <Video className="w-4 h-4" />
                Subscribe on YouTube — Free Weekly Lessons
              </a>
            </div>

            {/* Blog CTA */}
            <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-4">📚 More Free Learning on the Blog</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: "The Ultimate IELTS Guide for Moroccan Students", href: "/blog/ultimate-ielts-guide-morocco", tag: "IELTS" },
                  { title: "The Ultimate Business English Guide", href: "/blog/ultimate-business-english-guide-morocco", tag: "Business" },
                  { title: "How to Think in English (Stop Translating)", href: "/blog/how-to-think-in-english", tag: "Speaking" },
                  { title: "Best Apps to Learn English in Morocco 2026", href: "/blog/best-apps-websites-learn-english-morocco", tag: "Resources" },
                  { title: "Common Mistakes Moroccan English Learners Make", href: "/blog/common-mistakes-moroccan-english-learners", tag: "Grammar" },
                  { title: "How to Pass IELTS in Morocco", href: "/blog/how-to-pass-ielts-in-morocco", tag: "IELTS" },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className="flex items-center gap-2 bg-white rounded-xl p-3 border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded flex-shrink-0">{link.tag}</span>
                      <span className="text-sm text-gray-700 hover:text-blue-700">{link.title}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
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
