import { Link } from "wouter";
import { Mail, MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20learn%20more%20about%20Fluentry";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <Link href="/">
              <h3 className="text-white text-lg font-bold mb-2">Fluentry</h3>
            </Link>
            <p className="text-sm text-gray-400 mb-3">
              1-on-1 English coaching for Moroccan learners. TESOL-certified. 100 MAD/hour.
            </p>
            <p className="text-xs text-gray-500">Based in Tangier, Morocco 🇲🇦</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Mr. Ibrahim</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link href="/free-test" className="hover:text-blue-400 transition-colors">Free Level Test</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/success-stories" className="hover:text-blue-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">IELTS Preparation</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Business English</Link></li>
              <li><Link href="/group-coaching" className="hover:text-blue-400 transition-colors">Group Coaching</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Conversation Practice</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">General English</Link></li>
              <li><Link href="/free-resources" className="hover:text-blue-400 transition-colors">Free Resources</Link></li>
              <li><Link href="/audio-audit" className="hover:text-blue-400 transition-colors">Free Pronunciation Audit</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
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
                  Book a Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p>&copy; {new Date().getFullYear()} Fluentry. All rights reserved. Based in Tangier, Morocco.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
