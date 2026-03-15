import { SEO } from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, CheckCircle, Award } from "lucide-react";

export default function IeltsVsToeicMorocco() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "IELTS vs. TOEIC in Morocco: Which English Test is Right for You?",
      description: "A clear comparison of IELTS and TOEIC in Morocco. Understand the differences in format, cost, and purpose to choose the right English exam for your academic or professional goals.",
      mainHeading: "IELTS or TOEIC? Choosing the Right English Test in Morocco.",
      intro: "If you need to prove your English level for university admission, a visa, or a job in Morocco, you will likely need to take either the IELTS or the TOEIC. They are very different tests for different purposes. This guide will help you decide.",
      comparisonTable: {
        heading: "IELTS vs. TOEIC: At a Glance",
        headers: ["Feature", "IELTS", "TOEIC"],
        rows: [
          { feature: "Primary Use", ielts: "University, Immigration (Canada, UK, AUS)", toeic: "Workplace, Professional Communication" },
          { feature: "Skills Tested", ielts: "Listening, Reading, Writing, Speaking", toeic: "Listening & Reading (most common)" },
          { feature: "Test Focus", ielts: "Academic & General English", toeic: "Business & Workplace English" },
          { feature: "Cost in Morocco", ielts: "~2850 MAD", toeic: "~1500 MAD" },
          { feature: "Best For", ielts: "Students wanting to study abroad", toeic: "Professionals, Engineers, Job Seekers" },
        ],
      },
      ieltsSection: {
        heading: "Choose IELTS if...",
        points: [
          "You are applying to a university in the UK, Canada, Australia, or New Zealand.",
          "You are applying for immigration or a work visa for these countries.",
          "You need to prove your ability in all four skills: listening, reading, writing, and speaking.",
        ],
      },
      toeicSection: {
        heading: "Choose TOEIC if...",
        points: [
          "Your employer or a company you are applying to in Morocco requires it (e.g., OCP, engineering firms).",
          "You need to prove your English proficiency for professional purposes.",
          "You are more comfortable with a multiple-choice test focused on workplace scenarios.",
        ],
      },
      conclusion: {
        heading: "Conclusion: It Depends on Your Goal",
        text: "The choice is simple: for **academic purposes and immigration**, choose **IELTS**. For **professional purposes in Morocco**, choose **TOEIC**. Make sure to check the specific requirements of the university or company you are applying to.",
      },
      fluentryCTA: {
        heading: "Ready to Prepare for Your Exam?",
        text: "At Fluentry, we offer specialized preparation courses for both IELTS and TOEIC, designed for Moroccan students. We know exactly what you need to get the score you want.",
        ctaButton: "See Our Exam Prep Courses",
      },
    },
    fr: {
      title: "IELTS vs. TOEIC au Maroc : Quel test d'anglais est fait pour vous ?",
      description: "Une comparaison claire de l'IELTS et du TOEIC au Maroc. Comprenez les différences de format, de coût et d'objectif pour choisir le bon examen d'anglais pour vos objectifs académiques ou professionnels.",
      mainHeading: "IELTS ou TOEIC ? Choisir le bon test d'anglais au Maroc.",
      intro: "Si vous devez prouver votre niveau d'anglais pour une admission universitaire, un visa ou un emploi au Maroc, vous devrez probablement passer soit l'IELTS, soit le TOEIC. Ce sont des tests très différents pour des objectifs différents. Ce guide vous aidera à décider.",
      comparisonTable: {
        heading: "IELTS vs. TOEIC : En un coup d'œil",
        headers: ["Caractéristique", "IELTS", "TOEIC"],
        rows: [
          { feature: "Usage principal", ielts: "Université, Immigration (Canada, UK, AUS)", toeic: "Milieu professionnel, Communication d'entreprise" },
          { feature: "Compétences testées", ielts: "Écoute, Lecture, Écriture, Expression orale", toeic: "Écoute et Lecture (le plus courant)" },
          { feature: "Objectif du test", ielts: "Anglais académique et général", toeic: "Anglais des affaires et du travail" },
          { feature: "Coût au Maroc", ielts: "~2850 MAD", toeic: "~1500 MAD" },
          { feature: "Idéal pour", ielts: "Étudiants souhaitant étudier à l'étranger", toeic: "Professionnels, Ingénieurs, Chercheurs d'emploi" },
        ],
      },
      ieltsSection: {
        heading: "Choisissez l'IELTS si...",
        points: [
          "Vous postulez à une université au Royaume-Uni, au Canada, en Australie ou en Nouvelle-Zélande.",
          "Vous demandez un visa d'immigration ou de travail pour ces pays.",
          "Vous devez prouver votre capacité dans les quatre compétences : écoute, lecture, écriture et expression orale.",
        ],
      },
      toeicSection: {
        heading: "Choisissez le TOEIC si...",
        points: [
          "Votre employeur ou une entreprise à laquelle vous postulez au Maroc l'exige (par ex., OCP, sociétés d'ingénierie).",
          "Vous devez prouver votre maîtrise de l'anglais à des fins professionnelles.",
          "Vous êtes plus à l'aise avec un test à choix multiples axé sur des scénarios de milieu de travail.",
        ],
      },
      conclusion: {
        heading: "Conclusion : Tout dépend de votre objectif",
        text: "Le choix est simple : pour des **raisons académiques et d'immigration**, choisissez **IELTS**. Pour des **raisons professionnelles au Maroc**, choisissez **TOEIC**. Assurez-vous de vérifier les exigences spécifiques de l'université ou de l'entreprise à laquelle vous postulez.",
      },
      fluentryCTA: {
        heading: "Prêt à préparer votre examen ?",
        text: "Chez Fluentry, nous proposons des cours de préparation spécialisés pour l'IELTS et le TOEIC, conçus pour les étudiants marocains. Nous savons exactement ce dont vous avez besoin pour obtenir le score que vous souhaitez.",
        ctaButton: "Voir nos cours de préparation aux examens",
      },
    },
  };

  const c = content[lang as keyof typeof content] ?? content.en;

  return (
    <>
      <SEO title={c.title} description={c.description} path="/blog/ielts-vs-toeic-morocco" 
        titleFr="IELTS vs TOEIC au Maroc : Quel examen choisir ?"
        titleAr="IELTS مقابل TOEIC في المغرب: أي امتحان تختار؟"
        descriptionFr="Comparaison entre IELTS et TOEIC pour les étudiants et professionnels marocains."
        descriptionAr="مقارنة بين IELTS و TOEIC للطلاب والمهنيين المغاربة."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header
          className="relative bg-cover bg-center text-white py-24 px-4 text-center"
          style={{ backgroundImage: "url('/images/blog/ielts-vs-toeic.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Award className="w-5 h-5" />
              <span>Exam Preparation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">{c.mainHeading}</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">{c.intro}</p>
            <p className="mt-4 text-sm text-gray-300">By Ibrahim K. · March 10, 2026 · 7 min read</p>
          </div>
        </header>
        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-4xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">{c.comparisonTable.heading}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {c.comparisonTable.headers.map((header, i) => (
                      <th key={i} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {c.comparisonTable.rows.map((row, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.ielts}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.toeic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><GraduationCap className="w-6 h-6 mr-3 text-blue-500" />{c.ieltsSection.heading}</h2>
              <ul className="space-y-2">
                {c.ieltsSection.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><Briefcase className="w-6 h-6 mr-3 text-green-500" />{c.toeicSection.heading}</h2>
              <ul className="space-y-2">
                {c.toeicSection.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="ml-2 text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gray-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">{c.conclusion.heading}</h2>
            <p className="text-center text-lg text-gray-600">{c.conclusion.text}</p>
          </div>

          <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{c.fluentryCTA.heading}</h2>
            <p className="text-lg opacity-90 mb-6">{c.fluentryCTA.text}</p>
            <Link href={`/${lang}/courses`}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg py-3 px-8">
                {c.fluentryCTA.ctaButton} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          </div>
        
            {/* CTA — Book a Free Consultation Call */}

              {/* Internal Link: IELTS Preparation */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Ready to Achieve IELTS Band 7.5+?</h3>
                <p className="text-blue-700 mb-4 text-sm">Join Fluentry's 8-Week IELTS Accelerator — the only IELTS preparation program in Morocco with a guaranteed band score improvement or your money back.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href={`/${lang}/ielts-preparation-morocco`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">View IELTS Program</Button>
                  </Link>
                  <Link href={`/${lang}/pricing`}>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">See Pricing</Button>
                  </Link>
                </div>
              </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl text-center my-12">
              <h3 className="text-2xl font-bold mb-3">Ready to Take Your English to the Next Level?</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                Book a free 10-minute strategy call with Mr. Ibrahim. No commitment, no payment — just a conversation about your goals and how to reach them.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`/${lang}/free-test`}>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto font-bold">
                    Take the Free Level Test
                  </Button>
                </Link>
                <Link href={`/${lang}/book-lesson`}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Book a Free Consultation Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </main>
      </div>
    </>
  );
}
