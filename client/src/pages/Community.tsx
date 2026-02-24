/**
 * Community.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Referral programme + WhatsApp community page.
 * Drives viral growth by incentivising students to refer friends.
 *
 * Features:
 * - WhatsApp community join CTA
 * - Referral programme explanation (refer a friend = 1 free lesson)
 * - Study group / accountability partner matching
 * - Community stats (social proof)
 */

import { Users, Gift, MessageCircle, Star, ArrowRight, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";

export default function Community() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://fluentry.com/?ref=friend";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEO
        path="/community"
        title="Fluentry Community — Join 500+ Moroccan English Learners"
        description="Join the Fluentry WhatsApp community for Moroccan English learners. Get free resources, study partners, and refer friends to earn free lessons."
        keywords={'english community morocco, english learners whatsapp group morocco, learn english with friends morocco, fluentry community'}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
        {/* Hero */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users size={16} />
              500+ Active Members
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Join the Fluentry{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                Community
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Connect with 500+ Moroccan English learners. Get daily tips, study partners, and exclusive resources — all free.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212672580932?text=Salam%20Ibrahim%2C%20bghi%20njoini%20community%20dial%20Fluentry%20%F0%9F%99%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <MessageCircle size={24} />
              Join the WhatsApp Community
              <ArrowRight size={20} />
            </a>
            <p className="text-sm text-gray-400 mt-3">Free to join • No spam • Daily English tips</p>
          </div>
        </section>

        {/* Community stats */}
        <section className="py-12 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { number: "500+", label: "Active Members" },
              { number: "12", label: "Moroccan Cities" },
              { number: "4.9★", label: "Average Rating" },
              { number: "Daily", label: "English Tips" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{stat.number}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Referral Programme */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Gift size={16} />
                Referral Programme
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Refer a Friend, Get a Free Lesson
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                For every friend you refer who books their first lesson, you both get a free 30-minute lesson with Mr. Ibrahim.
              </p>
            </div>

            {/* How it works */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { step: "1", icon: "🔗", title: "Share Your Link", desc: "Copy your unique referral link and share it with friends on WhatsApp" },
                { step: "2", icon: "📚", title: "Friend Books a Lesson", desc: "Your friend clicks your link and books their first lesson with Mr. Ibrahim" },
                { step: "3", icon: "🎁", title: "Both Get a Free Lesson", desc: "You and your friend each receive a free 30-minute lesson — automatically" },
              ].map((item) => (
                <div key={item.step} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm text-center">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-amber-600 font-bold">{item.step}</span>
                  </div>
                  <p className="text-2xl mb-2">{item.icon}</p>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Referral link box */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-6">
              <p className="font-semibold text-gray-800 dark:text-white mb-3">Your Referral Link</p>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-3 text-sm text-gray-600 dark:text-gray-300 outline-none"
                />
                <button
                  onClick={copyLink}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-amber-500 hover:bg-amber-600 text-white"
                  }`}
                >
                  {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Or simply send this message on WhatsApp: "Check out Fluentry — the best English coaching in Morocco! fluentry.com"
              </p>
            </div>
          </div>
        </section>

        {/* Community benefits */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              What You Get in the Community
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "📝", title: "Daily English Tips", desc: "Vocabulary, grammar, and pronunciation tips sent every morning" },
                { icon: "🎯", title: "Weekly Challenges", desc: "Fun English challenges to practise with other members" },
                { icon: "👥", title: "Study Partners", desc: "Get matched with a study partner at your level for conversation practice" },
                { icon: "📚", title: "Free Resources", desc: "Exclusive worksheets, vocabulary lists, and IELTS guides" },
                { icon: "🎤", title: "Speaking Practice Sessions", desc: "Free group speaking sessions hosted by Mr. Ibrahim monthly" },
                { icon: "⭐", title: "Member Spotlights", desc: "Celebrate your progress — members share their English wins" },
              ].map((b) => (
                <div key={b.title} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <span className="text-3xl flex-shrink-0">{b.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">{b.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-4xl mb-4">🇲🇦</p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Morocco's Fastest-Growing English Community
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Join hundreds of Moroccan students from Casablanca, Rabat, Marrakech, Tangier, Fes, and beyond who are improving their English together.
            </p>
            <a
              href="https://wa.me/212672580932?text=Salam%20Ibrahim%2C%20bghi%20njoini%20community%20dial%20Fluentry%20%F0%9F%99%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all hover:shadow-xl"
            >
              <MessageCircle size={24} />
              Join Free on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
