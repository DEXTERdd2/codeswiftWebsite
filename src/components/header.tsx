"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-1 xs:px-2 sm:px-3 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 xs:h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-0">
            <div className="flex items-center min-w-0">
              <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 mr-2 relative flex-shrink-0">
                <Image 
                  src="/images/logo-symbol.png" 
                  alt="CodeSwift Logo" 
                  width={40} 
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="truncate text-base xs:text-lg sm:text-xl md:text-3xl font-bold text-white">
                CODESWIFT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-8 lg:gap-10 overflow-x-auto">
            <Link href="/" className="text-white hover:text-purple-300 transition-colors text-xs xs:text-sm sm:text-base lg:text-lg px-0.5 xs:px-1 py-1">
              Home
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base lg:text-lg px-0.5 xs:px-1 py-1">
              Services
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base lg:text-lg px-0.5 xs:px-1 py-1">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base lg:text-lg px-0.5 xs:px-1 py-1">
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="px-1 xs:px-2 py-1.5 text-xs xs:text-sm md:text-base font-medium text-purple-700 bg-white hover:bg-gray-100 rounded-lg transition-colors"
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
              ) : (
                <Menu className="h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-white/10 w-full">
          <div className="px-2 xs:px-3 pt-2 pb-4 space-y-1 xs:space-y-2">
            <Link 
              href="/" 
              className="block px-3 xs:px-4 py-3 text-white hover:bg-gray-800 rounded-lg transition-colors text-sm xs:text-base sm:text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block px-3 xs:px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors text-sm xs:text-base sm:text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="block px-3 xs:px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors text-sm xs:text-base sm:text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/portfolio" 
              className="block px-3 xs:px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors text-sm xs:text-base sm:text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 xs:px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors text-sm xs:text-base sm:text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button 
              className="w-full mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg transition-colors text-sm xs:text-base sm:text-lg"
              onClick={() => {
                setIsMenuOpen(false);
                // Add your get started action here
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}