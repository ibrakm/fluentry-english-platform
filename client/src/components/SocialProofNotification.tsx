/**
 * SocialProofNotification.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Shows rotating "live" social proof notifications in the bottom-right corner.
 * e.g. "Ahmed from Casablanca just booked a lesson — 2 minutes ago"
 *
 * This is one of the highest-converting features used by Preply, iTalki,
 * and Cambly. It creates FOMO and validates that real people are booking.
 *
 * Notifications rotate every 8 seconds with a smooth slide-in animation.
 * Disappears after 5 seconds, reappears after 8 seconds.
 */

import { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

interface Notification {
  name: string;
  city: string;
  action: string;
  time: string;
  flag: string;
}

const NOTIFICATIONS: Notification[] = [
  { name: "Ahmed", city: "Casablanca", action: "just booked a trial lesson", time: "2 min ago", flag: "🇲🇦" },
  { name: "Fatima", city: "Rabat", action: "just completed the IELTS prep course", time: "5 min ago", flag: "🇲🇦" },
  { name: "Youssef", city: "Marrakech", action: "just started the Business English package", time: "8 min ago", flag: "🇲🇦" },
  { name: "Nadia", city: "Tangier", action: "just scored B2 on the free test", time: "12 min ago", flag: "🇲🇦" },
  { name: "Karim", city: "Fes", action: "just booked a lesson", time: "15 min ago", flag: "🇲🇦" },
  { name: "Salma", city: "Agadir", action: "just joined the Fluency Boost programme", time: "18 min ago", flag: "🇲🇦" },
  { name: "Omar", city: "Meknes", action: "just completed the pronunciation audit", time: "22 min ago", flag: "🇲🇦" },
  { name: "Zineb", city: "Oujda", action: "just booked their 5th lesson", time: "25 min ago", flag: "🇲🇦" },
  { name: "Hamid", city: "Casablanca", action: "just achieved C1 level", time: "30 min ago", flag: "🇲🇦" },
  { name: "Layla", city: "Rabat", action: "just started IELTS preparation", time: "35 min ago", flag: "🇲🇦" },
  { name: "Tariq", city: "Tetouan", action: "just booked a Business English session", time: "40 min ago", flag: "🇲🇦" },
  { name: "Amira", city: "Kenitra", action: "just completed the free level test", time: "45 min ago", flag: "🇲🇦" },
];

// Shuffle array to randomise order each session
function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function SocialProofNotification() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notifications] = useState(() => shuffleArray(NOTIFICATIONS));

  useEffect(() => {
    if (dismissed) return;

    // First notification after 8 seconds
    const initialDelay = setTimeout(() => {
      setVisible(true);
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;

    // Hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);

      // Show next notification after 10 seconds
      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 10000);

      return () => clearTimeout(nextTimer);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [visible, currentIndex, dismissed, notifications.length]);

  if (dismissed || !visible) return null;

  const notif = notifications[currentIndex];

  return (
    <div
      className="fixed bottom-20 right-4 z-40 max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-3 flex items-start gap-3 animate-slide-in-right"
      style={{
        animation: "slideInRight 0.4s ease-out",
      }}
    >
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>

      {/* Avatar */}
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
        {notif.name[0]}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-800 dark:text-gray-100 leading-snug">
          <span className="font-semibold">{notif.flag} {notif.name}</span>{" "}
          <span className="text-gray-500 dark:text-gray-400">from {notif.city}</span>{" "}
          {notif.action}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
          <p className="text-xs text-gray-400">{notif.time}</p>
        </div>
      </div>

      {/* Dismiss */}
      <button
        onClick={() => setDismissed(true)}
        className="text-gray-300 hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400 transition-colors flex-shrink-0 mt-0.5"
        aria-label="Dismiss notification"
      >
        <X size={14} />
      </button>
    </div>
  );
}
