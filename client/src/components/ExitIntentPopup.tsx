/**
 * ExitIntentPopup — Bilingual exit-intent pop-up for Moroccan visitors
 *
 * Triggers when:
 * 1. Mouse moves toward the top of the browser (desktop — about to close tab)
 * 2. User has been on the page for at least 10 seconds
 * 3. Has not been shown in this session (sessionStorage flag)
 *
 * Shows once per session only.
 */

import { useEffect, useState, useCallback } from "react";
import { X, Star, ArrowRight, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const SESSION_KEY = "fluentry_exit_popup_shown";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [hasBeenOnPageLong, setHasBeenOnPageLong] = useState(false);

  // Mark as ready after 10 seconds on page
  useEffect(() => {
    const timer = setTimeout(() => setHasBeenOnPageLong(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const showPopup = useCallback(() => {
    // Only show once per session
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "true");
    setVisible(true);
  }, []);

  // Desktop: detect mouse moving toward top of viewport (exit intent)
  useEffect(() => {
    if (!hasBeenOnPageLong) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        showPopup();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasBeenOnPageLong, showPopup]);

  // Mobile: detect scroll-up gesture (user going back to top = about to leave)
  useEffect(() => {
    if (!hasBeenOnPageLong) return;

    let lastScrollY = window.scrollY;
    let scrollUpCount = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        scrollUpCount++;
        if (scrollUpCount >= 3 && lastScrollY > 300) {
          showPopup();
        }
      } else {
        scrollUpCount = 0;
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBeenOnPageLong, showPopup]);

  const close = () => setVisible(false);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] animate-in fade-in duration-200"
        onClick={close}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full pointer-events-auto animate-in zoom-in-95 duration-300 overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-500 text-white p-6 relative text-center">
            <button
              onClick={close}
              className="absolute top-4 right-4 text-blue-300 hover:text-white transition-colors p-1"
              aria-label="Close"
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Trophy icon */}
            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Trophy className="w-7 h-7 text-white" />
            </div>

            <h2 className="text-xl font-extrabold mb-1 leading-tight">
              🎯 اكتشف مستواك الحقيقي مجاناً
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Découvre ton vrai niveau en anglais — gratuitement
            </p>
          </div>

          {/* Body */}
          <div className="p-6">

            {/* Value proposition */}
            <p className="text-gray-800 font-bold text-base mb-1 text-center">
              في 5 دقايق فقط، غادي تعرف:
            </p>
            <p className="text-gray-400 text-xs text-center italic mb-4">
              En 5 minutes seulement, tu vas savoir :
            </p>

            {/* Benefits list */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-3">
                <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star className="w-3.5 h-3.5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">وين أنت بالضبط — من A1 لـ C2</p>
                  <p className="text-xs text-gray-400 italic">Exactement où tu en es — de A1 à C2</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-orange-50 rounded-xl p-3">
                <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">شنو اللي خاصك تتحسن فيه أكثر</p>
                  <p className="text-xs text-gray-400 italic">Ce sur quoi tu dois travailler en priorité</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-green-50 rounded-xl p-3">
                <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">الخطة المثالية باش توصل لهدفك بسرعة</p>
                  <p className="text-xs text-gray-400 italic">Le plan idéal pour atteindre ton objectif rapidement</p>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <div className="flex -space-x-2">
                {["🧑‍💼", "👩‍🎓", "👨‍💻"].map((emoji, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-sm">{emoji}</div>
                ))}
              </div>
              <p className="text-xs text-gray-500">
                <span className="font-bold text-gray-700">+200 طالب</span> خدو هاد التيست هاد الشهر
              </p>
            </div>

            {/* CTA */}
            <Link href="/free-test" onClick={close}>
              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base py-5 rounded-xl shadow-lg shadow-orange-500/30 mb-3"
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent", minHeight: "52px" }}
              >
                <Trophy className="w-5 h-5 mr-2" />
                اكتشف مستواك الآن — مجاناً
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <a
              href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20بغيت%20نعرف%20أكثر%20على%20الدروس"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="block"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full border-green-500 text-green-700 hover:bg-green-50 font-semibold text-sm py-4 rounded-xl mb-3"
                style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent", minHeight: "48px" }}
              >
                💬 تواصل معي مباشرة على واتساب
              </Button>
            </a>

            <button
              onClick={close}
              className="w-full text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
            >
              ربما في وقت آخر · Peut-être une autre fois
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
