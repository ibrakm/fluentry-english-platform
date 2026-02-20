import { Link } from "wouter";
import { Mail, MessageCircle, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/">
              <h3 className="text-white text-lg font-bold mb-4">Fluentry</h3>
            </Link>
            <p className="text-sm text-gray-400">
              Empowering confident English communicators from Morocco to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link href="/free-test" className="hover:text-blue-400 transition-colors">Free Level Test</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/book-lesson" className="hover:text-blue-400 transition-colors">Book a Lesson</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">General English</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Conversation Practice</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Business English</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">IELTS / TOEFL Prep</Link></li>
              <li><Link href="/free-resources" className="hover:text-blue-400 transition-colors">Free Resources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/212672580932?text=Hi%20Ibrahim%2C%20I%27d%20like%20to%20learn%20more%20about%20Fluentry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp: +212 672 580 932
              </a>
              <a
                href="mailto:ibrahimkabaikm@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
              >
                <Mail size={16} />
                ibrahimkabaikm@gmail.com
              </a>
              <a
                href="https://web.facebook.com/SweetLollipope/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
              >
                <Facebook size={16} />
                Facebook
              </a>
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
