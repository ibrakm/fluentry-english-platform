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
import { X, Zap, ArrowRight } from "lucide-react";
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
      // Only trigger when mouse exits from the top of the page
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
        // Trigger after 3 consecutive scroll-up events and user has scrolled down first
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

          {/* Header — gradient */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 relative text-center">
            <button
              onClick={close}
              className="absolute top-4 right-4 text-blue-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-4xl mb-3">⚠️</div>
            <h2 className="text-xl font-extrabold mb-1">
              انتظر! — Attends !
            </h2>
            <p className="text-yellow-300 font-semibold text-lg">
              قبل ما تمشي...
            </p>
            <p className="text-blue-200 text-sm mt-1 italic">
              Avant de partir...
            </p>
          </div>

          {/* Body */}
          <div className="p-6 text-center">
            <p className="text-gray-800 font-bold text-lg mb-1">
              خد التيست المجاني — 5 دقايق بس!
            </p>
            <p className="text-gray-500 text-sm italic mb-4">
              Fais le test gratuit — seulement 5 minutes !
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-5 text-left">
              <p className="text-sm font-semibold text-orange-800 mb-2">🎯 شنو غادي تعرف:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  مستواك الحقيقي في الإنجليزية (A1 → C2)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  نقاط ضعفك بالضبط
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  الباقة المناسبة ليك
                </li>
              </ul>
              <p className="text-xs text-gray-400 mt-2 italic">
                Découvre ton niveau exact, tes points faibles, et le programme adapté.
              </p>
            </div>

            <Link href="/free-test" onClick={close}>
              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base py-5 rounded-xl shadow-lg shadow-orange-500/30 mb-3"
              >
                <Zap className="w-5 h-5 mr-2" />
                ابدأ التيست المجاني الآن
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <a
              href="https://wa.me/212672580932?text=السلام%20عليكم%20أستاذ%20إبراهيم%2C%20بغيت%20نعرف%20أكثر%20على%20الدروس"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full border-green-500 text-green-700 hover:bg-green-50 font-semibold text-sm py-4 rounded-xl mb-3"
              >
                💬 راسلني على واتساب — Contacte-moi sur WhatsApp
              </Button>
            </a>

            <button
              onClick={close}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors underline"
            >
              لا شكراً، سأغادر الآن · Non merci, je pars
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
