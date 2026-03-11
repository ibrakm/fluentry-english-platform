import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Menu, X, Home, Info, BookOpen, Tag, ClipboardList, Layers,
  MessageCircle, Users, Star, Globe, ChevronDown, Newspaper,
  GraduationCap, Briefcase, FileText, Lightbulb, TrendingUp,
  Award, BookMarked, Headphones, PenTool, BarChart2
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const WA_URL =
  "https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20lesson%20and%20start%20with%20a%20free%20strategy%20call";

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇲🇦" },
];

interface DropdownItem {
  href: string;
  label: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
}

interface NavItem {
  href?: string;
  label: string;
  icon?: React.ElementType;
  dropdown?: DropdownItem[];
}

export default function Header() {
  const { t, lang, setLang, isRTL, langPrefix } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        langRef.current && !langRef.current.contains(e.target as Node) &&
        mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const navItems: NavItem[] = [
    { href: `${langPrefix}`, label: t("nav.home"), icon: Home },
    { href: `${langPrefix}/about`, label: t("nav.about"), icon: Info },
    {
      label: "Learn",
      dropdown: [
        {
          href: `${langPrefix}/courses`,
          label: t("nav.courses"),
          description: "1-on-1 personalised coaching sessions",
          icon: BookOpen,
        },
        {
          href: `${langPrefix}/group-coaching`,
          label: t("nav.groupCoaching"),
          description: "Small groups · affordable · interactive",
          icon: Users,
        },
        {
          href: `${langPrefix}/pricing`,
          label: t("nav.pricing"),
          description: "Transparent plans from 100 MAD/hr",
          icon: Tag,
        },
        {
          href: `${langPrefix}/success-stories`,
          label: t("nav.successStories"),
          description: "Real results from real Moroccan students",
          icon: Star,
        },
      ],
    },
    {
      label: "Exams & Tests",
      dropdown: [
        {
          href: `${langPrefix}/ielts-preparation-morocco`,
          label: "IELTS Preparation",
          description: "Guaranteed 7.5+ band score strategy",
          icon: Award,
          badge: "Popular",
        },
        {
          href: `${langPrefix}/free-test`,
          label: t("nav.freeTest"),
          description: "Know your level in 10 minutes — free",
          icon: ClipboardList,
        },
        {
          href: `${langPrefix}/blog/ielts-vs-toeic-morocco`,
          label: "IELTS vs TOEIC Guide",
          description: "Which exam is right for you?",
          icon: BarChart2,
        },
        {
          href: `${langPrefix}/blog/how-to-pass-ielts-in-morocco`,
          label: "How to Pass IELTS",
          description: "Complete 2026 Morocco guide",
          icon: GraduationCap,
        },
      ],
    },
    {
      label: "Resources",
      dropdown: [
        {
          href: `${langPrefix}/free-resources`,
          label: t("nav.freeResources"),
          description: "Practice exercises, vocabulary & tools",
          icon: Layers,
        },
        {
          href: `${langPrefix}/blog/best-apps-websites-learn-english-morocco`,
          label: "Best Apps & Websites",
          description: "Top 15 tools for Moroccan learners",
          icon: Lightbulb,
        },
        {
          href: `${langPrefix}/blog/a2-to-b1-english-6-month-plan-morocco`,
          label: "A2 → B1 Study Plan",
          description: "6-month step-by-step roadmap",
          icon: TrendingUp,
        },
        {
          href: `${langPrefix}/blog/english-for-call-centers-morocco`,
          label: "English for Call Centers",
          description: "Career English for Morocco's top sector",
          icon: Briefcase,
        },
      ],
    },
    {
      label: "Blog",
      dropdown: [
        {
          href: `${langPrefix}/blog`,
          label: "All Articles",
          description: "Browse all 15+ expert blog posts",
          icon: Newspaper,
          badge: "15+ posts",
        },
        {
          href: `${langPrefix}/blog/morocco-moodys-upgrade-economy-english-2026`,
          label: "Morocco's Moody's Upgrade",
          description: "What Ba1 means for your career",
          icon: TrendingUp,
          badge: "New",
        },
        {
          href: `${langPrefix}/blog/casablanca-finance-city-jobs-english-salary-2026`,
          label: "CFC Jobs & English",
          description: "Dollar-paying finance jobs in Morocco",
          icon: Briefcase,
          badge: "New",
        },
        {
          href: `${langPrefix}/blog/online-english-classes-morocco-2026-guide`,
          label: "Online Classes Guide 2026",
          description: "The complete guide for Moroccans",
          icon: BookMarked,
        },
        {
          href: `${langPrefix}/blog/challenges-moroccan-english-learners-face`,
          label: "5 Challenges Moroccans Face",
          description: "And how to overcome every one",
          icon: Headphones,
        },
        {
          href: `${langPrefix}/blog/morocco-successful-professionals-english-turning-point`,
          label: "What Successful Pros Did at 25",
          description: "The turning point that changed everything",
          icon: Star,
          badge: "New",
        },
      ],
    },
  ];

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>

          {/* Logo */}
          <Link
            href={langPrefix}
            className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0"
            style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-lg">
              Fluentry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            ref={navRef}
            className={`hidden md:flex items-center gap-1 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            {navItems.map((item) => {
              const key = item.label;

              /* Plain link */
              if (item.href && !item.dropdown) {
                return (
                  <Link
                    key={key}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50"
                  >
                    {item.label}
                  </Link>
                );
              }

              /* Dropdown */
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50 ${
                      activeDropdown === key ? "text-blue-600 bg-blue-50" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === key ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Panel */}
                  {activeDropdown === key && item.dropdown && (
                    <div
                      className={`absolute top-full mt-1 bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 z-50 ${
                        key === "Blog" ? "w-80" : "w-72"
                      } ${isRTL ? "right-0" : "left-0"}`}
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Dropdown header */}
                      <div className="px-4 py-2 border-b border-gray-50 mb-1">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {key}
                        </span>
                      </div>

                      {item.dropdown.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors group"
                          >
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors mt-0.5">
                              <SubIcon className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate">
                                  {sub.label}
                                </span>
                                {sub.badge && (
                                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                                    sub.badge === "New"
                                      ? "bg-green-100 text-green-700"
                                      : sub.badge === "Popular"
                                      ? "bg-orange-100 text-orange-700"
                                      : "bg-blue-100 text-blue-700"
                                  }`}>
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                                {sub.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Language Switcher — Desktop */}
            <div className="relative ml-1" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm px-2.5 py-1.5 rounded-lg hover:bg-gray-50 border border-gray-200 ${isRTL ? "flex-row-reverse" : ""}`}
                aria-label="Change language"
              >
                <Globe className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{currentLang.flag} {currentLang.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform flex-shrink-0 ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className={`absolute top-full mt-1.5 bg-white border border-gray-200 rounded-xl shadow-xl py-1 min-w-[150px] z-50 ${isRTL ? "left-0" : "right-0"}`}>
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors ${
                        lang === l.code ? "text-blue-600 font-semibold bg-blue-50/70" : "text-gray-700"
                      } ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                      {lang === l.code && <span className="ml-auto text-blue-500">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book a Lesson CTA */}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="ml-1">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                <MessageCircle className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {t("nav.bookLesson")}
              </Button>
            </a>
          </nav>

          {/* Mobile: Language + Menu Toggle */}
          <div className={`md:hidden flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            {/* Mobile Language Switcher */}
            <div className="relative" ref={mobileLangRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors px-2 py-1.5 rounded-lg hover:bg-gray-50 border border-gray-200"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4 text-blue-500" />
                <span className="text-sm">{currentLang.flag}</span>
              </button>

              {langOpen && (
                <div className={`absolute top-full mt-1.5 bg-white border border-gray-200 rounded-xl shadow-xl py-1 min-w-[150px] z-50 ${isRTL ? "left-0" : "right-0"}`}>
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-blue-50 transition-colors ${
                        lang === l.code ? "text-blue-600 font-semibold bg-blue-50/70" : "text-gray-700"
                      } ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                      {lang === l.code && <span className="ml-auto text-blue-500">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger */}
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col py-2">
            {navItems.map((item) => {
              const key = item.label;

              /* Plain link */
              if (item.href && !item.dropdown) {
                const Icon = item.icon;
                return (
                  <Link
                    key={key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
                    className={`flex items-center gap-3 px-5 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-colors font-medium text-base w-full ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    {Icon && <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                    <span>{item.label}</span>
                  </Link>
                );
              }

              /* Dropdown group */
              return (
                <div key={key}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                    className={`flex items-center justify-between gap-3 px-5 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium text-base w-full ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileExpanded === key ? "rotate-180 text-blue-600" : "text-gray-400"}`}
                    />
                  </button>

                  {mobileExpanded === key && item.dropdown && (
                    <div className="bg-gray-50 border-t border-b border-gray-100">
                      {item.dropdown.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                            className={`flex items-center gap-3 px-7 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors text-sm w-full ${isRTL ? "flex-row-reverse" : ""}`}
                          >
                            <SubIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="flex-1">{sub.label}</span>
                            {sub.badge && (
                              <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                                sub.badge === "New"
                                  ? "bg-green-100 text-green-700"
                                  : sub.badge === "Popular"
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}>
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Book a Lesson CTA */}
            <div className="px-5 py-3 border-t border-gray-100 mt-1">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-base rounded-xl"
                  style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent", minHeight: "52px" }}
                >
                  <MessageCircle className={`w-5 h-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t("nav.bookLesson")}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
