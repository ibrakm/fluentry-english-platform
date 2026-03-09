import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, BookOpen, Tag, ClipboardList, Layers, MessageCircle, Users, Star, Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const WA_URL =
  "https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20book%20a%20lesson%20and%20start%20with%20a%20free%20strategy%20call";

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇲🇦" },
];

export default function Header() {
  const { t, lang, setLang, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node) &&
          mobileLangRef.current && !mobileLangRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/about", label: t("nav.about"), icon: Info },
    { href: "/courses", label: t("nav.courses"), icon: BookOpen },
    { href: "/group-coaching", label: t("nav.groupCoaching"), icon: Users },
    { href: "/pricing", label: t("nav.pricing"), icon: Tag },
    { href: "/free-test", label: t("nav.freeTest"), icon: ClipboardList },
    { href: "/success-stories", label: t("nav.successStories"), icon: Star },
    { href: "/free-resources", label: t("nav.freeResources"), icon: Layers },
  ];

  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
          >
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-lg">
              Fluentry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher — Desktop */}
            <div className="relative" ref={langRef}>
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
            <a href={WA_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm">
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
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
                  className={`flex items-center gap-3 px-5 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-colors font-medium text-base w-full ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>{link.label}</span>
                </Link>
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
