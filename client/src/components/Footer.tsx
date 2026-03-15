import { Link } from "wouter";
import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WA_URL =
  "https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20learn%20more%20about%20Fluentry";

export default function Footer() {
  const { t, langPrefix, isRTL } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <Link href={langPrefix}>
              <h3 className="text-white text-lg font-bold mb-2">Fluentry</h3>
            </Link>
            <p className="text-sm text-gray-400 mb-3">
              {t("footer.tagline")}
            </p>
            <p className="text-xs text-gray-500">{t("footer.rights")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={langPrefix} className="hover:text-blue-400 transition-colors">{t("footer.home")}</Link></li>
              <li><Link href={`${langPrefix}/about`} className="hover:text-blue-400 transition-colors">{t("footer.about")}</Link></li>
              <li><Link href={`${langPrefix}/courses`} className="hover:text-blue-400 transition-colors">{t("footer.courses")}</Link></li>
              <li><Link href={`${langPrefix}/pricing`} className="hover:text-blue-400 transition-colors">{t("footer.pricing")}</Link></li>
              <li><Link href={`${langPrefix}/free-test`} className="hover:text-blue-400 transition-colors">{t("footer.freeTest")}</Link></li>
              <li><Link href={`${langPrefix}/blog`} className="hover:text-blue-400 transition-colors">{t("footer.blog")}</Link></li>
              <li><Link href={`${langPrefix}/success-stories`} className="hover:text-blue-400 transition-colors">{t("footer.successStories")}</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.programs")}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`${langPrefix}/courses`} className="hover:text-blue-400 transition-colors">{t("footer.ielts")}</Link></li>
              <li><Link href={`${langPrefix}/courses`} className="hover:text-blue-400 transition-colors">{t("footer.business")}</Link></li>
              <li><Link href={`${langPrefix}/group-coaching`} className="hover:text-blue-400 transition-colors">{t("footer.group")}</Link></li>
              <li><Link href={`${langPrefix}/courses`} className="hover:text-blue-400 transition-colors">{t("footer.conversation")}</Link></li>
              <li><Link href={`${langPrefix}/courses`} className="hover:text-blue-400 transition-colors">{t("footer.general")}</Link></li>
              <li><Link href={`${langPrefix}/free-resources`} className="hover:text-blue-400 transition-colors">{t("footer.freeResources")}</Link></li>
              <li><Link href={`${langPrefix}/audio-audit`} className="hover:text-blue-400 transition-colors">{t("footer.pronunciationAudit")}</Link></li>
            </ul>
          </div>

          {/* City Pages - Local SEO */}
          <div>
            <h4 className="text-white font-semibold mb-4">English Coaching by City</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={`${langPrefix}/english-coach-casablanca`} className="hover:text-blue-400 transition-colors">English Coach Casablanca</Link></li>
              <li><Link href={`${langPrefix}/english-coach-rabat`} className="hover:text-blue-400 transition-colors">English Coach Rabat</Link></li>
              <li><Link href={`${langPrefix}/english-coach-tangier`} className="hover:text-blue-400 transition-colors">English Coach Tangier</Link></li>
              <li><Link href={`${langPrefix}/english-coach-marrakech`} className="hover:text-blue-400 transition-colors">English Coach Marrakech</Link></li>
              <li><Link href={`${langPrefix}/english-coach-fes`} className="hover:text-blue-400 transition-colors">English Coach Fes</Link></li>
              <li><Link href={`${langPrefix}/english-coach-agadir`} className="hover:text-blue-400 transition-colors">English Coach Agadir</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.getInTouch")}</h4>
            <div className="space-y-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
              >
                <MessageCircle size={16} className="text-green-400 flex-shrink-0" />
                WhatsApp: +212 672 580 932
              </a>
              <a
                href="mailto:ibrahimkabaikm@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
              >
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                ibrahimkabaikm@gmail.com
              </a>
              <div className="mt-4">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle size={14} />
                  {t("footer.bookCall")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p>&copy; {new Date().getFullYear()} Fluentry. {t("footer.rights")}</p>
            <div className="flex gap-6">
              <Link href={`${langPrefix}/privacy-policy`} className="hover:text-blue-400 transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href={`${langPrefix}/terms-of-service`} className="hover:text-blue-400 transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
