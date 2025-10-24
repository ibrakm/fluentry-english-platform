import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-lg">
                Fluentry
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
            </Link>
            <Link href="/courses">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Courses
              </a>
            </Link>
            <Link href="/free-test">
              <a className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Free Test
              </a>
            </Link>
            <Link href="/book-lesson">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Book a Lesson
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="/">
              <a
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </Link>
            <Link href="/courses">
              <a
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </a>
            </Link>
            <Link href="/free-test">
              <a
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Free Test
              </a>
            </Link>
            <Link href="/book-lesson">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => setIsOpen(false)}
              >
                Book a Lesson
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

