import { Button } from "@/components/ui/button";
import GrammarChallenge from "@/components/games/GrammarChallenge";
import IdiomMatcher from "@/components/games/IdiomMatcher";
import VocabularyQuiz from "@/components/games/VocabularyQuiz";
import IdiomGuide from "@/components/IdiomGuide";
import IdiomLibrary from "@/components/IdiomLibrary";
import IrregularVerbs from "@/components/IrregularVerbs";
import ListeningPractice from "@/components/ListeningPractice";
import PracticeExercises from "@/components/PracticeExercises";
import BACWritingTemplates from "@/components/BACWritingTemplates";
import FalseFriends from "@/components/FalseFriends";
import StopSayingVery from "@/components/StopSayingVery";
import FormalEmailGenerator from "@/components/FormalEmailGenerator";
import ProfessionalEnglish from "@/components/ProfessionalEnglish";
import {
  BookOpen,
  FileText,
  GamepadIcon,
  Headphones,
  PenTool,
  BookMarked,
  List,
  Briefcase,
  GraduationCap,
  Zap,
  Mail,
  AlertTriangle,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── Section definitions ─────────────────────────────────────────────────────
type SectionId =
  | "bac-exam"
  | "vocabulary-grammar"
  | "idioms"
  | "professional"
  | "games"
  | "listening-practice";

interface Section {
  id: SectionId;
  label: string;
  icon: React.ElementType;
  color: string;
  description: string;
  badge: string;
}

const sections: Section[] = [
  {
    id: "bac-exam",
    label: "BAC & Exam Prep",
    icon: GraduationCap,
    color: "blue",
    description: "Writing templates and strategies for the Moroccan BAC English exam",
    badge: "6 Templates",
  },
  {
    id: "vocabulary-grammar",
    label: "Vocabulary & Grammar",
    icon: BookOpen,
    color: "orange",
    description: "Irregular verbs, vocabulary upgrades, and French-English false friends",
    badge: "3 Tools",
  },
  {
    id: "idioms",
    label: "Idioms & Phrases",
    icon: BookMarked,
    color: "purple",
    description: "100+ idioms with meanings, examples, and an interactive guide",
    badge: "100+ Idioms",
  },
  {
    id: "professional",
    label: "Professional English",
    icon: Briefcase,
    color: "indigo",
    description: "Email generator, LinkedIn guide, meeting phrases, salary scripts, IT & medical vocabulary",
    badge: "7 Guides",
  },
  {
    id: "games",
    label: "Interactive Games",
    icon: GamepadIcon,
    color: "green",
    description: "Fun vocabulary, grammar, and idiom games with instant feedback",
    badge: "3 Games",
  },
  {
    id: "listening-practice",
    label: "Listening & Practice",
    icon: Headphones,
    color: "red",
    description: "Listening comprehension exercises (A1–B2) and grammar practice",
    badge: "8 Exercises",
  },
];

// ─── Sub-tab definitions per section ─────────────────────────────────────────
const vocabTabs = [
  { id: "irregular-verbs", label: "Irregular Verbs", icon: List },
  { id: "stop-very", label: "Stop Saying VERY", icon: Zap },
  { id: "false-friends", label: "False Friends (FR→EN)", icon: AlertTriangle },
];

const idiomTabs = [
  { id: "idiom-library", label: "Idiom Library", icon: BookMarked },
  { id: "idiom-guide", label: "Idiom Guide", icon: BookOpen },
];

const professionalTabs = [
  { id: "email-generator", label: "Email Generator", icon: Mail },
  { id: "professional-guides", label: "Professional Guides", icon: Briefcase },
];

const gameTabs = [
  { id: "vocabulary", label: "Vocabulary Quiz", icon: BookOpen },
  { id: "grammar", label: "Grammar Challenge", icon: PenTool },
  { id: "idioms-game", label: "Idiom Matcher", icon: BookMarked },
];

const practiceTabs = [
  { id: "listening", label: "Listening", icon: Headphones },
  { id: "exercises", label: "Practice Exercises", icon: PenTool },
  { id: "idiomguide-practice", label: "Idiom Guide", icon: BookMarked },
];

// ─── Color helpers ────────────────────────────────────────────────────────────
const colorMap: Record<string, { active: string; badge: string; icon: string; tab: string }> = {
  blue:   { active: "border-blue-500 bg-blue-50 text-blue-700",   badge: "bg-blue-100 text-blue-600",   icon: "text-blue-500",   tab: "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50" },
  orange: { active: "border-orange-500 bg-orange-50 text-orange-700", badge: "bg-orange-100 text-orange-600", icon: "text-orange-500", tab: "text-orange-600 border-b-2 border-orange-600 bg-orange-50/50" },
  purple: { active: "border-purple-500 bg-purple-50 text-purple-700", badge: "bg-purple-100 text-purple-600", icon: "text-purple-500", tab: "text-purple-600 border-b-2 border-purple-600 bg-purple-50/50" },
  indigo: { active: "border-indigo-500 bg-indigo-50 text-indigo-700", badge: "bg-indigo-100 text-indigo-600", icon: "text-indigo-500", tab: "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50" },
  green:  { active: "border-green-500 bg-green-50 text-green-700",  badge: "bg-green-100 text-green-600",  icon: "text-green-500",  tab: "text-green-600 border-b-2 border-green-600 bg-green-50/50" },
  red:    { active: "border-red-500 bg-red-50 text-red-700",       badge: "bg-red-100 text-red-600",       icon: "text-red-500",    tab: "text-red-600 border-b-2 border-red-600 bg-red-50/50" },
};

// ─── Reusable tab bar ─────────────────────────────────────────────────────────
function TabBar({
  tabs,
  active,
  onChange,
  color,
}: {
  tabs: { id: string; label: string; icon: React.ElementType }[];
  active: string;
  onChange: (id: string) => void;
  color: string;
}) {
  return (
    <div className="flex rounded-xl bg-gray-100 p-1 gap-1 mb-6 overflow-x-auto">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
              isActive
                ? `bg-white shadow-sm ${colorMap[color]?.tab || "text-blue-600"}`
                : "text-gray-500 hover:text-gray-700"
            }`}
            style={{ WebkitTapHighlightColor: "transparent", minHeight: "44px" }}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function FreeResources() {
  const { langPrefix } = useLanguage();
  const [activeSection, setActiveSection] = useState<SectionId>("bac-exam");
  const [activeVocabTab, setActiveVocabTab] = useState("irregular-verbs");
  const [activeIdiomTab, setActiveIdiomTab] = useState("idiom-library");
  const [activeProfTab, setActiveProfTab] = useState("email-generator");
  const [activeGameTab, setActiveGameTab] = useState("vocabulary");
  const [activePracticeTab, setActivePracticeTab] = useState("listening");

  const freeResourcesFAQ = [
    { question: "Are Fluentry's free English resources really free?", answer: "Yes. All resources on this page are 100% free with no registration required. They include BAC writing templates, irregular verbs, idiom library, false friends guide, vocabulary upgrade tools, formal email generator, professional English guides, interactive games, and listening exercises." },
    { question: "What free English resources does Fluentry offer for Moroccan students?", answer: "Fluentry offers: 6 BAC writing templates (formal letter, article, essay, report, speech, summary), 120+ irregular verbs, 100+ English idioms, French-English false friends list, Stop Saying VERY vocabulary upgrade tool, formal email generator, professional English guides (email etiquette, LinkedIn, meeting phrases, salary negotiation, IT vocabulary, medical English), 3 interactive games, and 8 listening exercises (A1–B2)." },
    { question: "Can I use these resources to prepare for the Moroccan BAC English exam?", answer: "Yes. The BAC Writing Templates section provides complete templates and real examples for every writing type in the Moroccan BAC exam: formal letter, article, for-and-against essay, report, speech, and summary. Each template includes structure overview, a fill-in-the-blanks template, a complete example, and examiner tips." },
    { question: "What are French-English false friends?", answer: "False friends are words that look similar in French and English but have completely different meanings. For example, 'actuellement' in French means 'currently', not 'actually'. 'Librairie' means 'bookshop', not 'library'. Fluentry's false friends guide covers 30+ of the most common traps for Moroccan learners, organized by category." },
    { question: "What is the complete list of irregular verbs in English?", answer: "Fluentry provides a searchable table of 120+ irregular English verbs with their base form, simple past, and past participle. You can filter by letter or search any verb form. Examples include: go/went/gone, write/wrote/written, take/took/taken." },
    { question: "How can I write a professional email in English?", answer: "Use Fluentry's free Formal Email Generator. Select your email type (request, complaint, inquiry, apology, follow-up, resignation, cover letter, or thank-you), fill in your details, and get a complete professional email in seconds. The tool also includes an email etiquette guide with phrases for every situation." },
    { question: "What are the most common English idioms?", answer: "Fluentry's interactive idiom library includes 100+ of the most commonly used English idioms, organized by category (Work & Business, Everyday Life, Feelings & Emotions, Communication, Time & Speed, and more). Each idiom includes its meaning and a real example sentence." },
    { question: "Is there a guide for Moroccan nurses and doctors working in the UK?", answer: "Yes. Fluentry's Medical English guide covers symptoms and conditions, medical procedures, patient communication phrases, and UK healthcare vocabulary (NHS, GP, ward, consultant, handover, etc.) — specifically designed for Moroccan healthcare workers planning to work in the UK." },
  ];

  const currentSection = sections.find((s) => s.id === activeSection)!;

  return (
    <>
      <SEO
        title="Free English Resources Morocco | BAC Templates, Irregular Verbs, Idioms, Professional English | Fluentry"
        description="Free English resources for Moroccan learners: BAC writing templates, 120+ irregular verbs, 100+ idioms, French-English false friends, formal email generator, professional English guides (LinkedIn, meetings, salary, IT, medical), interactive games and listening exercises. 100% free."
        path="/free-resources"
        keywords="free English resources Morocco, BAC English writing templates Morocco, irregular verbs list English, English idioms with meanings Morocco, French English false friends Moroccan learners, formal email generator English, professional English Morocco, business English Morocco, LinkedIn profile English Morocco, meeting phrases English, salary negotiation English Morocco, IT English vocabulary Morocco, medical English Morocco nurses UK, stop saying very vocabulary upgrade, liste verbes irréguliers anglais, ressources anglais gratuit Maroc, free IELTS practice Morocco, English learning games Morocco, موارد إنجليزية مجانية المغرب"

        titleFr="Ressources gratuites pour apprendre l'anglais | Fluentry Maroc"
        titleAr="موارد مجانية لتعلم الإنجليزية | Fluentry المغرب"
        descriptionFr="Accédez à des ressources gratuites pour améliorer votre anglais : exercices, vocabulaire, guides de prononciation."
        descriptionAr="احصل على موارد مجانية لتحسين إنجليزيتك: تمارين ومفردات وأدلة نطق."
        breadcrumbs={[{ name: "Free Resources", item: "https://fluentry.online/free-resources" }]}
        faqItems={freeResourcesFAQ}
      />

      <div className="min-h-screen flex flex-col bg-background">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                🎓 100% Free · No Registration Required
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Free English Learning Resources for Moroccan Learners
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-white/90">
                BAC templates, irregular verbs, idioms, professional English, interactive games, and more — all organized and completely free.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#resources">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                    Explore Resources
                  </Button>
                </a>
                <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20lesson%20and%20start%20with%20a%20free%20strategy%20call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 font-semibold px-8">
                    Book Free Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Resource Navigation + Content ── */}
        <section id="resources" className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              {/* Section selector grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  const c = colorMap[section.color];
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                        isActive ? `${c.active} shadow-sm` : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                      }`}
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <Icon className={`w-6 h-6 ${isActive ? "" : c.icon}`} />
                      <span className="text-xs font-bold leading-tight">{section.label}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${isActive ? "bg-white/60" : c.badge}`}>
                        {section.badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Section header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  {(() => {
                    const Icon = currentSection.icon;
                    return <Icon className={`w-6 h-6 ${colorMap[currentSection.color].icon}`} />;
                  })()}
                  <h2 className="text-2xl font-bold text-gray-900">{currentSection.label}</h2>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${colorMap[currentSection.color].badge}`}>
                    {currentSection.badge}
                  </span>
                </div>
                <p className="text-gray-500 text-sm ml-9">{currentSection.description}</p>
              </div>

              {/* ── BAC & Exam Prep ── */}
              {activeSection === "bac-exam" && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                  <BACWritingTemplates />
                </div>
              )}

              {/* ── Vocabulary & Grammar ── */}
              {activeSection === "vocabulary-grammar" && (
                <div>
                  <TabBar tabs={vocabTabs} active={activeVocabTab} onChange={setActiveVocabTab} color="orange" />
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                    {activeVocabTab === "irregular-verbs" && <IrregularVerbs />}
                    {activeVocabTab === "stop-very" && <StopSayingVery />}
                    {activeVocabTab === "false-friends" && <FalseFriends />}
                  </div>
                </div>
              )}

              {/* ── Idioms & Phrases ── */}
              {activeSection === "idioms" && (
                <div>
                  <TabBar tabs={idiomTabs} active={activeIdiomTab} onChange={setActiveIdiomTab} color="purple" />
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                    {activeIdiomTab === "idiom-library" && <IdiomLibrary />}
                    {activeIdiomTab === "idiom-guide" && <IdiomGuide />}
                  </div>
                </div>
              )}

              {/* ── Professional English ── */}
              {activeSection === "professional" && (
                <div>
                  <TabBar tabs={professionalTabs} active={activeProfTab} onChange={setActiveProfTab} color="indigo" />
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                    {activeProfTab === "email-generator" && <FormalEmailGenerator />}
                    {activeProfTab === "professional-guides" && <ProfessionalEnglish />}
                  </div>
                </div>
              )}

              {/* ── Interactive Games ── */}
              {activeSection === "games" && (
                <div>
                  <TabBar tabs={gameTabs} active={activeGameTab} onChange={setActiveGameTab} color="green" />
                  <div>
                    {activeGameTab === "vocabulary" && <VocabularyQuiz />}
                    {activeGameTab === "grammar" && <GrammarChallenge />}
                    {activeGameTab === "idioms-game" && <IdiomMatcher />}
                  </div>
                </div>
              )}

              {/* ── Listening & Practice ── */}
              {activeSection === "listening-practice" && (
                <div>
                  <TabBar tabs={practiceTabs} active={activePracticeTab} onChange={setActivePracticeTab} color="red" />
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
                    {activePracticeTab === "listening" && <ListeningPractice />}
                    {activePracticeTab === "exercises" && <PracticeExercises />}
                    {activePracticeTab === "idiomguide-practice" && <IdiomGuide />}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* ── Meet Your Coach ── */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    loading="lazy"
                    src="/ibrahim-photo.webp"
                    alt="Mr. Ibrahim K. — TESOL-Certified English Coach in Tangier Morocco"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3">Meet Your Coach</h2>
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">Mr. Ibrahim K.</h3>
                  <p className="text-gray-600 mb-3 text-sm sm:text-base">
                    TESOL-Certified English Language Coach based in Tangier, Morocco. With a Bachelor's degree in English Studies and extensive teaching experience, Mr. Ibrahim specializes in helping students and professionals build real fluency and confidence.
                  </p>
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 mb-5 text-sm sm:text-base">
                    "Fluency comes from confidence, not perfection."
                  </blockquote>
                  <Link href={`${langPrefix}/about`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                      Learn More About Mr. Ibrahim
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's Coming Soon ── */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">More Resources Coming Soon</h2>
              <p className="text-gray-500 text-sm">We're constantly adding new free tools and guides for Moroccan English learners.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { icon: "🎬", title: "Video Lessons", desc: "5-minute grammar and pronunciation tips by Mr. Ibrahim" },
                { icon: "📄", title: "PDF Downloads", desc: "Printable study guides, cheat sheets, and vocabulary lists" },
                { icon: "🎤", title: "Pronunciation Guide", desc: "Common sounds Moroccan speakers find difficult (P vs B, TH, etc.)" },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-dashed border-gray-300 rounded-xl p-5 text-center opacity-70">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-bold text-gray-700 text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                  <span className="inline-block mt-3 text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-semibold">Coming Soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Take Your English to the Next Level?
              </h2>
              <p className="text-base sm:text-lg mb-8 text-white/90">
                These free resources are just the beginning. Book a free 10-minute consultation with Mr. Ibrahim K. to create your personalized learning plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20lesson%20and%20start%20with%20a%20free%20strategy%20call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
                    Book Free Consultation
                  </Button>
                </a>
                <Link href={`${langPrefix}/free-test`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 font-semibold px-8">
                    Take Free Level Test
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
