'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type NavItem = { name: string; id: string };

const navItems: NavItem[] = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: '/about' },
  { name: 'Services', id: 'services' },
  { name: 'Portfolio', id: 'portfolio' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 12;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-6 lg:px-10 pt-5 pointer-events-none">
      <div
        className={`w-full max-w-6xl transition-all duration-300 ${
          scrolled ? 'translate-y-0 scale-100' : 'translate-y-1 scale-[0.995]'
        }`}
      >
        <div className="bg-gradient-to-r from-white/18 via-white/8 to-white/18 p-[1.4px] rounded-full backdrop-blur pointer-events-auto">
          <div className="relative flex items-center justify-between rounded-full bg-[#0b0b0f]/85 border border-white/8 px-5 py-2.5 sm:px-7 md:px-9">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative h-10 w-44 sm:w-48 flex items-center"
              >
                <Image
                  src="/images/logo.png"
                  alt="CodeSwift"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                item.id.startsWith('/') ? (
                  <Link
                    key={item.id}
                    href={item.id}
                    className="text-white/85 hover:text-white text-base font-medium tracking-tight transition-colors px-2"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/85 hover:text-white text-base font-medium tracking-tight transition-colors px-2"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-base font-semibold text-black transition-transform hover:-translate-y-[1px]"
              >
                Get Quote
              </button>
            </nav>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white/90 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-[#0b0b0f]/92 border border-white/10 rounded-2xl backdrop-blur pointer-events-auto">
            <div className="flex flex-col space-y-2 px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left rounded-xl px-4 py-3 text-white/85 hover:text-white hover:bg-white/5 transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-black hover:-translate-y-[1px] transition-transform"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
