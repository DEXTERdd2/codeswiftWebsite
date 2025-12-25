"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

type NavItem = {
  name: string;
  href: string;
  submenu?: {
    title: string;
    items: { name: string; href: string }[];
  };
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services"
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleSubmenu = (itemName: string) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };

  return (
    <header className="fixed w-full z-50 bg-transparent py-6">
      <div className="max-w-6xl mx-auto rounded-2xl border border-gray-400/30 bg-[#18122B]/80 backdrop-blur-md px-6 py-2 flex items-center justify-between shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <div className="relative h-10 w-40">
            <Image 
              src="/images/logo-symbol.png" 
              alt="CodeSwift Logo" 
              fill 
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        {/* Navigation + Get Quote Button (right) */}
        <div className="hidden md:flex items-center ml-auto space-x-8">
          <nav className="flex items-center space-x-8" aria-label="Global">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-white hover:text-[#8752FA] px-2 py-1 rounded-md text-lg font-medium transition-colors"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
          <Link
            href="#contact"
            className="bg-white text-black font-semibold rounded-xl px-7 py-2 text-lg shadow hover:bg-gray-200 transition-colors border border-gray-300"
          >
            Get Quote
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center ml-2">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-7 w-7" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18122B]/95 backdrop-blur-md rounded-2xl mx-2 mt-2 border border-gray-400/30">
          <div className="px-4 pt-4 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-800 last:border-b-0">
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-white hover:text-[#8752FA] hover:bg-gray-800 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="#contact"
                className="block w-full text-center bg-white text-black font-semibold rounded-xl px-4 py-3 text-base shadow border border-gray-300 hover:bg-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
