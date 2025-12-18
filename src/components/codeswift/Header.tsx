'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'why-us' },
    { name: 'Career', id: 'leadership' },
    { name: 'Clients', id: 'clients' },
  ];

  return (
    <header
      className={`fixed w-full z-50 px-5 sm:px-8 lg:px-10 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 border-b border-white/10 shadow-[0_6px_24px_rgba(0,0,0,0.35)] py-4'
          : 'bg-black/90 border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="block w-40 h-12 relative group"
          >
            <Image 
              src="/images/logo.png" 
              alt="CodeSwift" 
              fill 
              className="object-contain object-left group-hover:opacity-90 transition-opacity duration-300"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/80 hover:text-white text-base font-medium tracking-normal"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center px-7 py-2.5 text-base font-semibold rounded-full text-black bg-white hover:bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all"
          >
            Contact us
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-full left-0 right-0 px-4 pt-2 pb-6">
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-purple-400 transition-colors font-medium text-left py-2 px-4"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all mt-4"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
