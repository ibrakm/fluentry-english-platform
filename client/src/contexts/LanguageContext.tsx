import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "fr" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// ─── Translation strings ────────────────────────────────────────────────────

const translations: Record<Language, Record<string, string>> = {
  en: {
    // ── Navbar ──
    "nav.home": "Home",
    "nav.about": "About",
    "nav.courses": "Courses",
    "nav.groupCoaching": "Group Coaching",
    "nav.pricing": "Pricing",
    "nav.freeTest": "Free Test",
    "nav.successStories": "Success Stories",
    "nav.freeResources": "Free Resources",
    "nav.bookLesson": "Book a Lesson",
    "nav.language": "English",

    // ── Footer ──
    "footer.tagline": "Your path to English fluency — personalised coaching for Moroccan professionals and students.",
    "footer.quickLinks": "Quick Links",
    "footer.programs": "Programs",
    "footer.getInTouch": "Get in Touch",
    "footer.ielts": "IELTS Preparation",
    "footer.business": "Business English",
    "footer.group": "Group Coaching",
    "footer.conversation": "Conversation Practice",
    "footer.general": "General English",
    "footer.freeResources": "Free Resources",
    "footer.pronunciationAudit": "Free Pronunciation Audit",
    "footer.rights": "All rights reserved. Based in Tangier, Morocco.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.bookCall": "Book a Free Strategy Call",

    // ── Home ──
    "home.hero.badge": "🇲🇦 #1 English Coach in Morocco",
    "home.hero.title": "Speak English with Confidence — Results Guaranteed",
    "home.hero.subtitle": "Personalised 1-on-1 English coaching for Moroccan professionals and students. IELTS, Business English, Conversation Fluency — real results in 8 weeks.",
    "home.hero.cta1": "Book Free Strategy Call",
    "home.hero.cta2": "Take Free Level Test",
    "home.hero.students": "100+ Students",
    "home.hero.rating": "4.9★ Rating",
    "home.hero.weeks": "Results in 8 Weeks",
    "home.hero.guarantee": "Results Guarantee",

    "home.why.title": "Why Fluentry Works",
    "home.why.subtitle": "Not another generic English course. Fluentry is built specifically for Moroccan learners.",
    "home.why.personalised.title": "100% Personalised",
    "home.why.personalised.desc": "Every session is tailored to your goals, level, and schedule. No wasted time on things you already know.",
    "home.why.moroccan.title": "Moroccan Context",
    "home.why.moroccan.desc": "Mr. Ibrahim understands the specific challenges Arabic and French speakers face when learning English.",
    "home.why.results.title": "Proven Results",
    "home.why.results.desc": "Students achieve IELTS 7+, land international jobs, and gain the confidence to lead meetings in English.",
    "home.why.flexible.title": "Fully Flexible",
    "home.why.flexible.desc": "Online sessions via Zoom or WhatsApp. Morning, evening, weekend — you choose the time that works for you.",

    "home.programs.title": "Choose Your Program",
    "home.programs.subtitle": "Whether you need IELTS, Business English, or everyday fluency — there's a program built for your exact goal.",

    "home.testimonials.title": "What Students Say",
    "home.testimonials.subtitle": "Real results from real Moroccan students.",

    "home.cta.title": "Ready to Start Speaking English with Confidence?",
    "home.cta.subtitle": "Book a free 10-minute strategy call. Mr. Ibrahim will assess your level, understand your goals, and recommend the best path forward.",
    "home.cta.button": "Book Free Strategy Call on WhatsApp",
    "home.cta.note": "Free 10-min call · No commitment · 100% in English or Darija",

    // ── About ──
    "about.hero.title": "Meet Your English Coach",
    "about.hero.subtitle": "Mr. Ibrahim — English coach, Moroccan, passionate about helping professionals and students unlock their potential through language.",
    "about.story.title": "The Story Behind Fluentry",
    "about.mission.title": "The Mission",
    "about.mission.text": "To make high-quality, personalised English coaching accessible to every Moroccan who needs it — whether for IELTS, career advancement, or the confidence to speak freely.",

    // ── Courses ──
    "courses.title": "Our English Programs",
    "courses.subtitle": "Personalised programs designed for Moroccan learners — from beginners to advanced professionals.",
    "courses.ielts.title": "IELTS & TOEFL Preparation",
    "courses.ielts.desc": "Achieve your target band score — guaranteed",
    "courses.business.title": "Business English Mastery",
    "courses.business.desc": "Lead meetings, write emails, present with authority",
    "courses.conversation.title": "Conversation & Fluency",
    "courses.conversation.desc": "Stop freezing — start speaking naturally",
    "courses.general.title": "General English",
    "courses.general.desc": "Build a strong foundation from scratch",
    "courses.forWho": "WHO IT'S FOR",
    "courses.achieve": "WHAT YOU'LL ACHIEVE",
    "courses.bookCall": "Book Free Strategy Call",
    "courses.startCoaching": "Start Coaching",

    // ── Pricing ──
    "pricing.title": "Choose Your Plan",
    "pricing.subtitle": "Transparent pricing. No hidden fees. Cancel anytime.",
    "pricing.perHour": "per hour",
    "pricing.perMonth": "per month",
    "pricing.mostPopular": "Most Popular",
    "pricing.bestValue": "Best Value",
    "pricing.getStarted": "Get Started",
    "pricing.bookCall": "Book Free Strategy Call",
    "pricing.freeConsult": "Free 10-min consultation · No commitment",
    "pricing.saveVsStandard": "Save vs Standard",
    "pricing.standard": "Standard",
    "pricing.intensive": "Intensive",
    "pricing.accelerator": "Accelerator",

    // ── Free Test ──
    "freeTest.title": "Free English Level Test",
    "freeTest.subtitle": "Find out your exact English level in 10 minutes. Get a personalised report with recommendations.",
    "freeTest.start": "Start Free Test",

    // ── Success Stories ──
    "success.title": "Student Success Stories",
    "success.subtitle": "Real results from real Moroccan students who transformed their English.",

    // ── Free Resources ──
    "resources.title": "Free English Resources",
    "resources.subtitle": "Exercises, guides, and tools to help you improve your English — completely free.",

    // ── Common ──
    "common.learnMore": "Learn More",
    "common.bookCall": "Book Free Strategy Call",
    "common.freeCall": "Free 10-min call · No commitment",
    "common.whatsapp": "WhatsApp",
    "common.readMore": "Read More",
    "common.viewAll": "View All",
    "common.download": "Download Free",
    "common.startNow": "Start Now",
    "common.perMonth": "/month",
    "common.perHour": "/hour",
    "common.save": "Save",
  },

  fr: {
    // ── Navbar ──
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.courses": "Cours",
    "nav.groupCoaching": "Coaching de groupe",
    "nav.pricing": "Tarifs",
    "nav.freeTest": "Test gratuit",
    "nav.successStories": "Témoignages",
    "nav.freeResources": "Ressources gratuites",
    "nav.bookLesson": "Réserver un cours",
    "nav.language": "Français",

    // ── Footer ──
    "footer.tagline": "Votre chemin vers la maîtrise de l'anglais — coaching personnalisé pour les professionnels et étudiants marocains.",
    "footer.quickLinks": "Liens rapides",
    "footer.programs": "Programmes",
    "footer.getInTouch": "Nous contacter",
    "footer.ielts": "Préparation IELTS",
    "footer.business": "Anglais des affaires",
    "footer.group": "Coaching de groupe",
    "footer.conversation": "Pratique de conversation",
    "footer.general": "Anglais général",
    "footer.freeResources": "Ressources gratuites",
    "footer.pronunciationAudit": "Audit de prononciation gratuit",
    "footer.rights": "Tous droits réservés. Basé à Tanger, Maroc.",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.bookCall": "Réserver un appel stratégique gratuit",

    // ── Home ──
    "home.hero.badge": "🇲🇦 Coach d'anglais n°1 au Maroc",
    "home.hero.title": "Parlez anglais avec confiance — Résultats garantis",
    "home.hero.subtitle": "Coaching anglais personnalisé en tête-à-tête pour les professionnels et étudiants marocains. IELTS, Anglais des affaires, Fluidité conversationnelle — de vrais résultats en 8 semaines.",
    "home.hero.cta1": "Appel stratégique gratuit",
    "home.hero.cta2": "Test de niveau gratuit",
    "home.hero.students": "100+ Étudiants",
    "home.hero.rating": "Note 4,9★",
    "home.hero.weeks": "Résultats en 8 semaines",
    "home.hero.guarantee": "Garantie résultats",

    "home.why.title": "Pourquoi Fluentry fonctionne",
    "home.why.subtitle": "Pas un autre cours d'anglais générique. Fluentry est conçu spécifiquement pour les apprenants marocains.",
    "home.why.personalised.title": "100% Personnalisé",
    "home.why.personalised.desc": "Chaque séance est adaptée à vos objectifs, votre niveau et votre emploi du temps. Aucun temps perdu sur ce que vous savez déjà.",
    "home.why.moroccan.title": "Contexte marocain",
    "home.why.moroccan.desc": "M. Ibrahim comprend les défis spécifiques auxquels font face les locuteurs arabes et français lors de l'apprentissage de l'anglais.",
    "home.why.results.title": "Résultats prouvés",
    "home.why.results.desc": "Les étudiants obtiennent IELTS 7+, décrochent des emplois internationaux et gagnent la confiance pour diriger des réunions en anglais.",
    "home.why.flexible.title": "Totalement flexible",
    "home.why.flexible.desc": "Séances en ligne via Zoom ou WhatsApp. Matin, soir, week-end — vous choisissez l'horaire qui vous convient.",

    "home.programs.title": "Choisissez votre programme",
    "home.programs.subtitle": "Que vous ayez besoin de l'IELTS, de l'anglais des affaires ou d'une fluidité quotidienne — il y a un programme adapté à votre objectif.",

    "home.testimonials.title": "Ce que disent les étudiants",
    "home.testimonials.subtitle": "De vrais résultats de vrais étudiants marocains.",

    "home.cta.title": "Prêt à parler anglais avec confiance ?",
    "home.cta.subtitle": "Réservez un appel stratégique gratuit de 10 minutes. M. Ibrahim évaluera votre niveau, comprendra vos objectifs et recommandera la meilleure voie.",
    "home.cta.button": "Appel stratégique gratuit sur WhatsApp",
    "home.cta.note": "Appel gratuit 10 min · Sans engagement · En anglais ou en darija",

    // ── About ──
    "about.hero.title": "Rencontrez votre coach d'anglais",
    "about.hero.subtitle": "M. Ibrahim — coach d'anglais, marocain, passionné par l'aide aux professionnels et étudiants pour libérer leur potentiel par le langage.",
    "about.story.title": "L'histoire derrière Fluentry",
    "about.mission.title": "La mission",
    "about.mission.text": "Rendre le coaching anglais personnalisé de haute qualité accessible à chaque Marocain qui en a besoin — que ce soit pour l'IELTS, l'avancement de carrière ou la confiance pour parler librement.",

    // ── Courses ──
    "courses.title": "Nos programmes d'anglais",
    "courses.subtitle": "Des programmes personnalisés conçus pour les apprenants marocains — des débutants aux professionnels avancés.",
    "courses.ielts.title": "Préparation IELTS & TOEFL",
    "courses.ielts.desc": "Atteignez votre score cible — garanti",
    "courses.business.title": "Maîtrise de l'anglais des affaires",
    "courses.business.desc": "Dirigez des réunions, rédigez des e-mails, présentez avec autorité",
    "courses.conversation.title": "Conversation & Fluidité",
    "courses.conversation.desc": "Arrêtez de bloquer — commencez à parler naturellement",
    "courses.general.title": "Anglais général",
    "courses.general.desc": "Construisez une base solide depuis le début",
    "courses.forWho": "POUR QUI",
    "courses.achieve": "CE QUE VOUS ACCOMPLIREZ",
    "courses.bookCall": "Appel stratégique gratuit",
    "courses.startCoaching": "Commencer le coaching",

    // ── Pricing ──
    "pricing.title": "Choisissez votre forfait",
    "pricing.subtitle": "Tarifs transparents. Aucun frais caché. Annulez à tout moment.",
    "pricing.perHour": "par heure",
    "pricing.perMonth": "par mois",
    "pricing.mostPopular": "Le plus populaire",
    "pricing.bestValue": "Meilleur rapport qualité-prix",
    "pricing.getStarted": "Commencer",
    "pricing.bookCall": "Appel stratégique gratuit",
    "pricing.freeConsult": "Consultation gratuite 10 min · Sans engagement",
    "pricing.saveVsStandard": "Économie vs Standard",
    "pricing.standard": "Standard",
    "pricing.intensive": "Intensif",
    "pricing.accelerator": "Accélérateur",

    // ── Free Test ──
    "freeTest.title": "Test de niveau d'anglais gratuit",
    "freeTest.subtitle": "Découvrez votre niveau d'anglais exact en 10 minutes. Obtenez un rapport personnalisé avec des recommandations.",
    "freeTest.start": "Commencer le test gratuit",

    // ── Success Stories ──
    "success.title": "Témoignages d'étudiants",
    "success.subtitle": "De vrais résultats de vrais étudiants marocains qui ont transformé leur anglais.",

    // ── Free Resources ──
    "resources.title": "Ressources anglais gratuites",
    "resources.subtitle": "Exercices, guides et outils pour améliorer votre anglais — totalement gratuits.",

    // ── Common ──
    "common.learnMore": "En savoir plus",
    "common.bookCall": "Appel stratégique gratuit",
    "common.freeCall": "Appel gratuit 10 min · Sans engagement",
    "common.whatsapp": "WhatsApp",
    "common.readMore": "Lire la suite",
    "common.viewAll": "Voir tout",
    "common.download": "Télécharger gratuitement",
    "common.startNow": "Commencer maintenant",
    "common.perMonth": "/mois",
    "common.perHour": "/heure",
    "common.save": "Économie",
  },

  ar: {
    // ── Navbar ──
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.courses": "الدورات",
    "nav.groupCoaching": "التدريب الجماعي",
    "nav.pricing": "الأسعار",
    "nav.freeTest": "اختبار مجاني",
    "nav.successStories": "قصص النجاح",
    "nav.freeResources": "موارد مجانية",
    "nav.bookLesson": "احجز درساً",
    "nav.language": "العربية",

    // ── Footer ──
    "footer.tagline": "طريقك نحو إتقان اللغة الإنجليزية — تدريب شخصي للمهنيين والطلاب المغاربة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.programs": "البرامج",
    "footer.getInTouch": "تواصل معنا",
    "footer.ielts": "تحضير IELTS",
    "footer.business": "الإنجليزية للأعمال",
    "footer.group": "التدريب الجماعي",
    "footer.conversation": "ممارسة المحادثة",
    "footer.general": "الإنجليزية العامة",
    "footer.freeResources": "موارد مجانية",
    "footer.pronunciationAudit": "تدقيق النطق المجاني",
    "footer.rights": "جميع الحقوق محفوظة. مقرنا في طنجة، المغرب.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.bookCall": "احجز مكالمة استراتيجية مجانية",

    // ── Home ──
    "home.hero.badge": "🇲🇦 المدرب الأول للغة الإنجليزية في المغرب",
    "home.hero.title": "تحدث الإنجليزية بثقة — النتائج مضمونة",
    "home.hero.subtitle": "تدريب شخصي فردي على اللغة الإنجليزية للمهنيين والطلاب المغاربة. IELTS، الإنجليزية للأعمال، الطلاقة في المحادثة — نتائج حقيقية في 8 أسابيع.",
    "home.hero.cta1": "احجز مكالمة استراتيجية مجانية",
    "home.hero.cta2": "اجري اختبار المستوى المجاني",
    "home.hero.students": "أكثر من 100 طالب",
    "home.hero.rating": "تقييم 4.9★",
    "home.hero.weeks": "نتائج في 8 أسابيع",
    "home.hero.guarantee": "ضمان النتائج",

    "home.why.title": "لماذا يُجدي Fluentry نفعاً",
    "home.why.subtitle": "ليس مجرد دورة إنجليزية عادية. Fluentry مصمم خصيصاً للمتعلمين المغاربة.",
    "home.why.personalised.title": "مخصص 100%",
    "home.why.personalised.desc": "كل جلسة مصممة وفق أهدافك ومستواك وجدولك الزمني. لا وقت ضائع على ما تعرفه بالفعل.",
    "home.why.moroccan.title": "السياق المغربي",
    "home.why.moroccan.desc": "يفهم الأستاذ إبراهيم التحديات الخاصة التي يواجهها الناطقون بالعربية والفرنسية عند تعلم الإنجليزية.",
    "home.why.results.title": "نتائج مُثبتة",
    "home.why.results.desc": "يحقق الطلاب IELTS 7+ ويحصلون على وظائف دولية ويكتسبون الثقة لقيادة الاجتماعات بالإنجليزية.",
    "home.why.flexible.title": "مرونة تامة",
    "home.why.flexible.desc": "جلسات أونلاين عبر Zoom أو WhatsApp. صباحاً أو مساءً أو عطلة نهاية الأسبوع — أنت تختار الوقت المناسب.",

    "home.programs.title": "اختر برنامجك",
    "home.programs.subtitle": "سواء كنت تحتاج IELTS أو الإنجليزية للأعمال أو الطلاقة اليومية — هناك برنامج مصمم لهدفك تحديداً.",

    "home.testimonials.title": "ماذا يقول الطلاب",
    "home.testimonials.subtitle": "نتائج حقيقية من طلاب مغاربة حقيقيين.",

    "home.cta.title": "هل أنت مستعد للتحدث بالإنجليزية بثقة؟",
    "home.cta.subtitle": "احجز مكالمة استراتيجية مجانية لمدة 10 دقائق. سيقيّم الأستاذ إبراهيم مستواك ويفهم أهدافك ويوصي بأفضل مسار.",
    "home.cta.button": "احجز مكالمة استراتيجية مجانية على WhatsApp",
    "home.cta.note": "مكالمة مجانية 10 دقائق · بدون التزام · بالإنجليزية أو الدارجة",

    // ── About ──
    "about.hero.title": "تعرف على مدربك في اللغة الإنجليزية",
    "about.hero.subtitle": "الأستاذ إبراهيم — مدرب لغة إنجليزية، مغربي، شغوف بمساعدة المهنيين والطلاب على إطلاق إمكاناتهم من خلال اللغة.",
    "about.story.title": "القصة وراء Fluentry",
    "about.mission.title": "الرسالة",
    "about.mission.text": "جعل التدريب الشخصي عالي الجودة على اللغة الإنجليزية متاحاً لكل مغربي يحتاجه — سواء لـ IELTS أو التقدم الوظيفي أو الثقة في التحدث بحرية.",

    // ── Courses ──
    "courses.title": "برامجنا في اللغة الإنجليزية",
    "courses.subtitle": "برامج مخصصة مصممة للمتعلمين المغاربة — من المبتدئين إلى المهنيين المتقدمين.",
    "courses.ielts.title": "تحضير IELTS و TOEFL",
    "courses.ielts.desc": "حقق درجتك المستهدفة — مضمون",
    "courses.business.title": "إتقان الإنجليزية للأعمال",
    "courses.business.desc": "قُد الاجتماعات، اكتب الرسائل، قدّم بثقة",
    "courses.conversation.title": "المحادثة والطلاقة",
    "courses.conversation.desc": "توقف عن التردد — ابدأ الحديث بشكل طبيعي",
    "courses.general.title": "الإنجليزية العامة",
    "courses.general.desc": "ابنِ أساساً قوياً من الصفر",
    "courses.forWho": "لمن هذا البرنامج",
    "courses.achieve": "ما ستحققه",
    "courses.bookCall": "احجز مكالمة استراتيجية مجانية",
    "courses.startCoaching": "ابدأ التدريب",

    // ── Pricing ──
    "pricing.title": "اختر خطتك",
    "pricing.subtitle": "أسعار شفافة. لا رسوم خفية. إلغاء في أي وقت.",
    "pricing.perHour": "في الساعة",
    "pricing.perMonth": "في الشهر",
    "pricing.mostPopular": "الأكثر شعبية",
    "pricing.bestValue": "أفضل قيمة",
    "pricing.getStarted": "ابدأ الآن",
    "pricing.bookCall": "احجز مكالمة استراتيجية مجانية",
    "pricing.freeConsult": "استشارة مجانية 10 دقائق · بدون التزام",
    "pricing.saveVsStandard": "وفر مقارنة بالخطة العادية",
    "pricing.standard": "عادي",
    "pricing.intensive": "مكثف",
    "pricing.accelerator": "مسرّع",

    // ── Free Test ──
    "freeTest.title": "اختبار مستوى الإنجليزية المجاني",
    "freeTest.subtitle": "اكتشف مستواك الدقيق في اللغة الإنجليزية في 10 دقائق. احصل على تقرير شخصي مع توصيات.",
    "freeTest.start": "ابدأ الاختبار المجاني",

    // ── Success Stories ──
    "success.title": "قصص نجاح الطلاب",
    "success.subtitle": "نتائج حقيقية من طلاب مغاربة حقيقيين حوّلوا لغتهم الإنجليزية.",

    // ── Free Resources ──
    "resources.title": "موارد الإنجليزية المجانية",
    "resources.subtitle": "تمارين وأدلة وأدوات لمساعدتك على تحسين إنجليزيتك — مجاناً تماماً.",

    // ── Common ──
    "common.learnMore": "اعرف المزيد",
    "common.bookCall": "احجز مكالمة استراتيجية مجانية",
    "common.freeCall": "مكالمة مجانية 10 دقائق · بدون التزام",
    "common.whatsapp": "واتساب",
    "common.readMore": "اقرأ المزيد",
    "common.viewAll": "عرض الكل",
    "common.download": "تحميل مجاني",
    "common.startNow": "ابدأ الآن",
    "common.perMonth": "/شهر",
    "common.perHour": "/ساعة",
    "common.save": "وفر",
  },
};

// ─── Provider ────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem("fluentry_lang");
    return (stored as Language) || "en";
  });

  const isRTL = lang === "ar";

  useEffect(() => {
    localStorage.setItem("fluentry_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    // Apply Arabic font for RTL mode
    if (isRTL) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [lang, isRTL]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] ?? translations["en"][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
