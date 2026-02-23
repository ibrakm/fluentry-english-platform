import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, BookOpen, Tag, ClipboardList, Layers, Calendar } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/pricing", label: "Pricing", icon: Tag },
  { href: "/free-test", label: "Free Test", icon: ClipboardList },
  { href: "/free-resources", label: "Free Resources", icon: Layers },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
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
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/book-lesson">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Book a Lesson
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
                  className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-colors font-medium text-base w-full"
                >
                  <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* Book a Lesson CTA */}
            <div className="px-5 py-3 border-t border-gray-100 mt-1">
              <Link href="/book-lesson" onClick={() => setIsOpen(false)}>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-base rounded-xl"
                  style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent", minHeight: "52px" }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Lesson
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
