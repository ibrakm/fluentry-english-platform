import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Phone, DollarSign, Briefcase, CheckCircle, Headphones } from "lucide-react";

export default function EnglishForCallCentersMorocco() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "English for Call Centers in Morocco: The Ultimate Guide",
      description: "Your complete guide to mastering the English skills needed for a high-paying call center job in Morocco. Learn about required levels, key vocabulary, and interview tips.",
      mainHeading: "Want a Call Center Job? Your English is the Key.",
      intro: "The call center industry in Morocco is booming, offering some of the best salaries for young graduates. But to get in and succeed, a specific type of English is required. This guide will show you exactly what you need to focus on.",
      requiredLevel: {
        heading: "1. What English Level Do You Really Need?",
        text: "Most call centers in Morocco require a **B2 (Upper-Intermediate)** level. This means you can communicate fluently and spontaneously, understand different accents, and handle complex customer service situations. A B1 level might be enough for some entry-level positions, but B2 is the goal.",
      },
      keySkills: {
        heading: "2. The 3 Key English Skills for Call Centers",
        skills: [
          { name: "Clear Pronunciation & Accent Reduction", description: "You need to be easily understood by native English speakers. This means working on problematic sounds and mastering English intonation." },
          { name: "Customer Service Vocabulary", description: "Learn phrases for greeting customers, showing empathy, handling complaints, and solving problems (e.g., \"I understand your frustration,\" \"Let me look into that for you\")." },
          { name: "Formal & Professional Tone", description: "Call center communication is different from chatting with friends. You need to learn how to use polite and professional language at all times." },
        ],
      },
      interviewTips: {
        heading: "3. How to Pass the Call Center Interview",
        text: "The interview will almost always include a role-play scenario. They will test your ability to handle a difficult customer in English. Stay calm, be polite, and use the customer service phrases you have learned.",
        tip: "**Pro Tip:** Record yourself practicing common scenarios. Listen to your tone and clarity. This is the best way to improve."
      },
      fluentryCTA: {
        heading: "Ready to Get Your Dream Call Center Job?",
        text: "Our \"English for Call Centers\" program is designed to get you from B1 to B2 and give you the specific skills you need to get hired. We focus on accent reduction, customer service role-plays, and interview preparation.",
        ctaButton: "Learn About Our Call Center Program",
      },
    },
    fr: {
      title: "L'Anglais pour les Centres d'Appels au Maroc : Le Guide Ultime",
      description: "Votre guide complet pour maîtriser les compétences en anglais nécessaires pour un emploi bien rémunéré dans un centre d'appels au Maroc. Découvrez les niveaux requis, le vocabulaire clé et les conseils pour l'entretien.",
      mainHeading: "Vous voulez un emploi en centre d'appels ? Votre anglais est la clé.",
      intro: "Le secteur des centres d'appels au Maroc est en plein essor, offrant certains des meilleurs salaires pour les jeunes diplômés. Mais pour y entrer et réussir, un type d'anglais spécifique est requis. Ce guide vous montrera exactement sur quoi vous devez vous concentrer.",
      requiredLevel: {
        heading: "1. Quel niveau d'anglais faut-il vraiment ?",
        text: "La plupart des centres d'appels au Maroc exigent un niveau **B2 (Intermédiaire-Supérieur)**. Cela signifie que vous pouvez communiquer avec aisance et spontanéité, comprendre différents accents et gérer des situations de service client complexes. Un niveau B1 peut être suffisant pour certains postes de débutant, mais B2 est l'objectif.",
      },
      keySkills: {
        heading: "2. Les 3 compétences clés en anglais pour les centres d'appels",
        skills: [
          { name: "Prononciation claire et réduction de l'accent", description: "Vous devez être facilement compris par les anglophones natifs. Cela signifie travailler sur les sons problématiques et maîtriser l'intonation anglaise." },
          { name: "Vocabulaire du service client", description: "Apprenez des phrases pour saluer les clients, faire preuve d'empathie, gérer les réclamations et résoudre les problèmes (par exemple, \"Je comprends votre frustration\", \"Laissez-moi examiner cela pour vous\")." },
          { name: "Ton formel et professionnel", description: "La communication en centre d'appels est différente de la conversation avec des amis. Vous devez apprendre à utiliser un langage poli et professionnel en tout temps." },
        ],
      },
      interviewTips: {
        heading: "3. Comment réussir l'entretien pour un centre d'appels",
        text: "L'entretien comprendra presque toujours un scénario de jeu de rôle. Ils testeront votre capacité à gérer un client difficile en anglais. Restez calme, soyez poli et utilisez les phrases de service client que vous avez apprises.",
        tip: "**Conseil de pro :** Enregistrez-vous en train de pratiquer des scénarios courants. Écoutez votre ton et votre clarté. C'est la meilleure façon de s'améliorer."
      },
      fluentryCTA: {
        heading: "Prêt à décrocher l'emploi de vos rêves en centre d'appels ?",
        text: "Notre programme \"Anglais pour les centres d'appels\" est conçu pour vous faire passer de B1 à B2 et vous donner les compétences spécifiques dont vous avez besoin pour être embauché. Nous nous concentrons sur la réduction de l'accent, les jeux de rôle de service client et la préparation aux entretiens.",
        ctaButton: "Découvrir notre programme pour centres d'appels",
      },
    },
  };

  const c = content[lang as keyof typeof content] ?? content.en;

  return (
    <>
      <SEO title={c.title} description={c.description} path="/blog/english-for-call-centers-morocco" />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/call-center-job-morocco.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Headphones className="w-5 h-5" />
              <span>Career English</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">{c.mainHeading}</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">{c.intro}</p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 6 min read</p>
          </div>
        </header>
        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
          <div className="space-y-10">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Briefcase className="w-6 h-6 mr-3 text-blue-500" />{c.requiredLevel.heading}</h2>
              <p className="text-gray-600">{c.requiredLevel.text}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Phone className="w-6 h-6 mr-3 text-green-500" />{c.keySkills.heading}</h2>
              <ul className="space-y-4">
                {c.keySkills.skills.map((skill, i) => (
                  <li key={i} className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-lg">{skill.name}</h3>
                      <p className="text-gray-600">{skill.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><DollarSign className="w-6 h-6 mr-3 text-yellow-500" />{c.interviewTips.heading}</h2>
              <p className="text-gray-600 mb-4">{c.interviewTips.text}</p>
              <p className="text-sm text-yellow-700 bg-yellow-50 p-4 rounded-lg">{c.interviewTips.tip}</p>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{c.fluentryCTA.heading}</h2>
              <p className="text-lg opacity-90 mb-6">{c.fluentryCTA.text}</p>
              <Link href={`/${lang}/courses`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg py-3 px-8">
                  {c.fluentryCTA.ctaButton} <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          </div>
        </main>
      </div>
    </>
  );
}
