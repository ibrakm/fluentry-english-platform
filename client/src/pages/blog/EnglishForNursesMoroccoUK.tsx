import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import RelatedPosts from "@/components/RelatedPosts";
import { Heart, Stethoscope, GraduationCap, CheckCircle, ArrowRight, Globe, Clock, Award, BookOpen, TrendingUp } from "lucide-react";

export default function EnglishForNursesMoroccoUK() {
  const { langPrefix } = useLanguage();

  return (
    <>
      <SEO
        title="English for Moroccan Nurses Working in the UK | IELTS & OET Guide | Fluentry"
        description="Complete guide for Moroccan nurses who want to work in the UK. Learn about IELTS/OET requirements, NMC registration, English level needed, salary expectations, and how to prepare your language skills for NHS jobs."
        path="/blog/english-for-nurses-morocco-uk"
        type="article"
        publishedDate="2026-03-15"
        modifiedDate="2026-03-15"
        keywords="English for nurses Morocco UK, Moroccan nurses UK NHS, IELTS for nurses Morocco, OET for nurses Morocco, NMC registration Morocco, nursing English UK, infirmier marocain Angleterre, ممرض مغربي بريطانيا إنجليزية, nurse migration Morocco UK, NHS recruitment Morocco, English level nurses UK, IELTS 7 nurses Morocco"

        titleFr="Anglais pour les infirmiers marocains voulant travailler au Royaume-Uni | Guide complet"
        titleAr="الإنجليزية للممرضين المغاربة للعمل في بريطانيا | دليل شامل"
        descriptionFr="Guide complet pour les infirmiers marocains souhaitant travailler au Royaume-Uni : exigences IELTS, OET, processus NMC et comment préparer votre anglais."
        descriptionAr="دليل شامل للممرضين المغاربة الراغبين في العمل في بريطانيا: متطلبات IELTS و OET وعملية NMC وكيفية تحضير لغتك الإنجليزية."
        breadcrumbs={[
          { name: "Blog", item: "https://fluentry.online/blog" },
          { name: "English for Nurses Morocco UK", item: "https://fluentry.online/blog/english-for-nurses-morocco-uk" },
        ]}
        faqItems={[
          { question: "What IELTS score do Moroccan nurses need to work in the UK?", answer: "The Nursing and Midwifery Council (NMC) requires an overall IELTS score of 7.0, with a minimum of 7.0 in each of the four components (Listening, Reading, Writing, Speaking). Alternatively, you can take the OET (Occupational English Test) and achieve at least a B grade in each component." },
          { question: "How much do nurses earn in the UK compared to Morocco?", answer: "A newly qualified nurse in the UK (Band 5) earns approximately £29,970-£36,483 per year (around 370,000-450,000 MAD). In Morocco, the average nurse salary is approximately 6,000-10,000 MAD per month (72,000-120,000 MAD per year). That's roughly a 3-5x salary increase." },
          { question: "Is OET easier than IELTS for nurses?", answer: "Many nurses find OET more relevant because it uses healthcare-specific scenarios. Instead of writing an essay about technology or education (IELTS), you write a referral letter (OET). The speaking test simulates a patient consultation. However, the required level (OET B ≈ IELTS 7.0) is the same." },
          { question: "How long does it take to prepare for IELTS 7.0 as a Moroccan nurse?", answer: "It depends on your starting level. From B1 (Intermediate), expect 6-12 months of focused preparation. From B2 (Upper-Intermediate), 3-6 months is realistic. Fluentry offers 1-on-1 IELTS coaching specifically designed for healthcare professionals." },
        ]}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <header className="relative bg-gradient-to-br from-[#003087] via-[#005EB8] to-[#0072CE] text-white py-24 px-4 text-center">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-semibold">
              <Stethoscope className="w-5 h-5" />
              <span>Healthcare English · UK Migration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
              Moroccan Nurses: Your Complete Guide to Working in the UK
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              The UK is actively recruiting nurses from Morocco. But you need IELTS 7.0 or OET B. Here's exactly how to get there.
            </p>
            <p className="mt-4 text-sm text-blue-200">By Ibrahim K. · March 15, 2026 · 10 min read</p>
          </div>
        </header>

        {/* Content */}
        <main className="py-16 px-4">
          <div className="container mx-auto max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-xl">

            <p className="text-lg text-gray-600 mb-8">
              The United Kingdom is facing a severe nursing shortage. The NHS (National Health Service) has been actively recruiting internationally, and <strong>Morocco is one of the key target countries</strong>. For Moroccan nurses, this represents an extraordinary opportunity: higher salaries, world-class training, career progression, and the chance to live and work in one of the world's most advanced healthcare systems. But there's one barrier that stops most Moroccan nurses from making this move: <strong>English.</strong>
            </p>

            {/* Section 1: The Opportunity */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">The Opportunity: Why the UK Needs Moroccan Nurses</h2>
              <p className="text-gray-600 mb-4">
                The NHS currently has over <strong>40,000 nursing vacancies</strong>. The UK government has committed to recruiting internationally to fill this gap. Moroccan nurses are particularly valued because of their strong clinical training and multilingual abilities (Arabic, French, and increasingly English).
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  { icon: <TrendingUp className="w-8 h-8 text-green-600" />, stat: "£29,970–£36,483", label: "Starting salary (Band 5)" },
                  { icon: <Heart className="w-8 h-8 text-red-600" />, stat: "40,000+", label: "Nursing vacancies in the UK" },
                  { icon: <Globe className="w-8 h-8 text-blue-600" />, stat: "3–5x", label: "Salary increase vs. Morocco" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-5 bg-gray-50 rounded-xl">
                    <div className="flex justify-center mb-2">{item.icon}</div>
                    <p className="text-2xl font-bold text-gray-900">{item.stat}</p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Language Requirements */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">English Requirements: IELTS vs. OET</h2>
              <p className="text-gray-600 mb-6">
                The NMC (Nursing and Midwifery Council) accepts two English tests. Here's how they compare:
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 font-bold text-gray-700 text-sm">Feature</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">IELTS Academic</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">OET (Nursing)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Required Score", ielts: "7.0 in ALL 4 sections", oet: "B grade in ALL 4 sections" },
                      { feature: "Test Content", ielts: "General academic topics", oet: "Healthcare-specific scenarios" },
                      { feature: "Writing Task", ielts: "Essay on general topic", oet: "Referral/discharge letter" },
                      { feature: "Speaking Test", ielts: "General conversation", oet: "Patient consultation role-play" },
                      { feature: "Cost in Morocco", ielts: "~2,850 MAD", oet: "~4,500 MAD" },
                      { feature: "Test Frequency", ielts: "Multiple dates/month", oet: "Monthly" },
                      { feature: "Validity", ielts: "2 years", oet: "2 years" },
                      { feature: "Best For", ielts: "General English learners", oet: "Nurses with B2+ English" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-medium text-gray-800 text-sm">{row.feature}</td>
                        <td className="p-4 text-gray-600 text-sm">{row.ielts}</td>
                        <td className="p-4 text-gray-600 text-sm">{row.oet}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
                <p className="text-blue-800 text-sm"><strong>Pro Tip:</strong> If your English is already at B2 level and you have nursing experience, OET may be the better choice. The healthcare-specific content means you're already familiar with the vocabulary. If you're building English from scratch, start with IELTS preparation.</p>
              </div>
            </section>

            {/* Mid-article CTA */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 my-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Need IELTS 7.0? Fluentry Can Help.</h3>
              <p className="text-blue-700 mb-4 text-sm">Our IELTS Accelerator programme is designed to get you to band 7.0+ in 8 weeks. 1-on-1 coaching with Mr. Ibrahim, covering all 4 sections. We've helped nurses achieve their target scores.</p>
              <div className="flex flex-wrap gap-3">
                <Link href={`${langPrefix}/ielts-preparation-morocco`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">IELTS Preparation Programme</Button>
                </Link>
                <Link href={`${langPrefix}/pricing`}>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">See Pricing</Button>
                </Link>
              </div>
            </div>

            {/* Section 3: The NMC Registration Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">The NMC Registration Process: Step by Step</h2>
              <div className="space-y-4">
                {[
                  { step: "Step 1", title: "Pass IELTS 7.0 or OET B", desc: "This is the first and most critical step. Without the language requirement, you cannot proceed with NMC registration. Start preparing now.", time: "3-12 months" },
                  { step: "Step 2", title: "Apply to the NMC", desc: "Submit your nursing qualifications, work experience, and English test results to the NMC for review. They will assess if your training meets UK standards.", time: "2-4 months" },
                  { step: "Step 3", title: "Complete the CBT (Computer-Based Test)", desc: "A nursing knowledge test covering UK healthcare practices, ethics, and clinical decision-making. Available at Pearson VUE test centres.", time: "1-2 months prep" },
                  { step: "Step 4", title: "Complete the OSCE (Clinical Skills Test)", desc: "A practical assessment where you demonstrate clinical skills in simulated scenarios. Conducted in English at approved UK test centres.", time: "1-3 months prep" },
                  { step: "Step 5", title: "Receive Your NMC PIN", desc: "Once all steps are complete, you receive your NMC registration number (PIN) and can legally work as a nurse in the UK.", time: "2-4 weeks" },
                  { step: "Step 6", title: "Get Hired & Relocate", desc: "Apply to NHS trusts or private healthcare providers. Many offer relocation packages including flights, accommodation, and settling-in support.", time: "1-3 months" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 border border-gray-200 rounded-xl">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 text-blue-700 font-bold text-xs px-3 py-1 rounded-full">{item.step}</div>
                      <p className="text-xs text-gray-400 mt-1 text-center">{item.time}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Essential Medical English */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Essential Medical English You Must Know</h2>
              <p className="text-gray-600 mb-4">
                Beyond the test, you'll need to communicate confidently with patients, doctors, and colleagues. Here are the key areas:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Patient Assessment", phrases: ["What brings you in today?", "Can you describe the pain on a scale of 1 to 10?", "When did the symptoms first appear?", "Are you currently taking any medications?"] },
                  { title: "Handover & Reporting", phrases: ["Patient in bed 4 is post-op, stable vitals.", "She's been nil by mouth since midnight.", "I've administered 500mg paracetamol at 14:00.", "There's a pending blood test — results expected by 16:00."] },
                  { title: "Patient Education", phrases: ["You'll need to take this medication twice daily with food.", "Please keep the wound dry for 48 hours.", "If you experience any of these symptoms, call 111.", "Your follow-up appointment is in two weeks."] },
                  { title: "Emergency Communication", phrases: ["I need assistance in bay 3 immediately.", "Patient is showing signs of anaphylaxis.", "Crash team to Ward 7, please.", "Can you prepare the defibrillator?"] },
                ].map((group, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-600" /> {group.title}
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

            {/* Section 5: Salary Comparison */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Salary Comparison: Morocco vs. UK</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-4 font-bold text-gray-700 text-sm">Career Stage</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">Morocco (MAD/year)</th>
                      <th className="p-4 font-bold text-gray-700 text-sm">UK (GBP/year)</th>
                      <th className="p-4 font-bold text-green-600 text-sm">UK in MAD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { stage: "Newly Qualified", morocco: "72,000–96,000", uk: "£29,970", ukMad: "~370,000" },
                      { stage: "5 Years Experience", morocco: "96,000–120,000", uk: "£33,706–£36,483", ukMad: "~415,000–450,000" },
                      { stage: "Senior Nurse (Band 6)", morocco: "120,000–144,000", uk: "£37,338–£44,962", ukMad: "~460,000–555,000" },
                      { stage: "Specialist/Manager (Band 7)", morocco: "N/A", uk: "£46,148–£52,809", ukMad: "~570,000–650,000" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 font-medium text-gray-800 text-sm">{row.stage}</td>
                        <td className="p-4 text-gray-600 text-sm">{row.morocco}</td>
                        <td className="p-4 text-gray-600 text-sm">{row.uk}</td>
                        <td className="p-4 text-green-600 font-bold text-sm">{row.ukMad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">Source: NHS Agenda for Change pay scales 2025/26. Exchange rate: 1 GBP ≈ 12.3 MAD.</p>
            </section>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-[#003087] to-[#0072CE] text-white p-8 rounded-2xl text-center mb-12">
              <h3 className="text-2xl font-bold mb-3">Your UK Nursing Career Starts with English</h3>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                IELTS 7.0 is the first step. With Fluentry's 1-on-1 coaching, we'll get you there. We've helped healthcare professionals across Morocco achieve their target scores.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href={`${langPrefix}/free-test`}>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto font-bold">
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

            <RelatedPosts currentPath="/blog/english-for-nurses-morocco-uk" category="IELTS" />

            <p className="text-sm text-gray-400 border-t pt-6 mt-8">
              <strong>Sources:</strong> NMC — "Registration Requirements for International Nurses" (2025). NHS Employers — "International Recruitment" (2026). NHS Agenda for Change Pay Scales 2025/26.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
