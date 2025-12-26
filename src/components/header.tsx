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
  const [servicesHover, setServicesHover] = useState(false);
  const [servicesHoverTimeout, setServicesHoverTimeout] = useState<NodeJS.Timeout | null>(null);

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


  return (
    <header className="fixed w-full z-50 bg-transparent py-6">
      <div className="max-w-6xl mx-auto rounded-[32px] border border-white/20 bg-[#101014] px-6 py-2 flex items-center justify-between shadow-lg relative" style={{boxShadow: '0 0 0 2px rgba(255,255,255,0.08)'}}>
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
        {/* Navigation + Get Quote Button (right) and Mobile Menu Button */}
        <div className="flex items-center ml-auto w-auto">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8" aria-label="Global">
              {navigation.map((item) => (
              item.name === "Services" ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => {
                    if (servicesHoverTimeout) clearTimeout(servicesHoverTimeout);
                    setServicesHover(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setServicesHover(false), 180);
                    setServicesHoverTimeout(timeout);
                  }}
                >
                  <button
                    type="button"
                    className="text-white cursor-default px-2 py-1 rounded-md text-lg font-medium transition-colors focus:outline-none"
                    tabIndex={-1}
                    style={{ pointerEvents: 'none' }}
                  >
                    {item.name}
                  </button>
                  {/* Mega Menu Dropdown */}
                  {servicesHover && (
                    <div
                      className="fixed left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] bg-black border border-gray-700 rounded-3xl shadow-2xl px-8 py-8 flex z-50 justify-between"
                      style={{
                        top: 'calc(48px + 3.5rem)', // Move further down from header
                        boxShadow: '0 8px 40px 8px rgba(0,0,0,0.7)',
                        minHeight: '420px',
                      }}
                      onMouseEnter={() => {
                        if (servicesHoverTimeout) clearTimeout(servicesHoverTimeout);
                        setServicesHover(true);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setServicesHover(false), 180);
                        setServicesHoverTimeout(timeout);
                      }}
                    >
                      {/* Software Delivery */}
                      <div className="flex flex-col min-w-[200px] px-4">
                        <span className="text-white font-bold text-sm mb-8">Software Delivery</span>
                        <div className="mb-8">
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Development</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link href="/services/mobile-app-development" className="hover:text-white transition-colors">Mobile App Development</Link></li>
                            <li><Link href="/services/custom-crm" className="hover:text-white transition-colors">Custom CRM</Link></li>
                            <li><Link href="/services/enterprise-software" className="hover:text-white transition-colors">Enterprise Software</Link></li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Design</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/digital-product-design" className="hover:text-white transition-colors">Digital Product Design</Link></li>
                          </ul>
                        </div>
                      </div>
                      {/* Game Development & QA */}
                      <div className="flex flex-col min-w-[200px] px-4 border-r border-gray-700">
                        <div className="mb-8">
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Game Development</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/mobile-game-development" className="hover:text-white transition-colors">Mobile Game Development</Link></li>
                            <li><Link href="/services/virtual-reality" className="hover:text-white transition-colors">Virtual Reality (VR)</Link></li>
                            <li><Link href="/services/augmented-reality" className="hover:text-white transition-colors">Augmented Reality (AR)</Link></li>
                            <li><Link href="/services/game-design-prototyping" className="hover:text-white transition-colors">Game Design & Prototyping</Link></li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Quality Assurance</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/manual-testing" className="hover:text-white transition-colors">Manual Testing</Link></li>
                            <li><Link href="/services/automated-testing" className="hover:text-white transition-colors">Automated Testing</Link></li>
                            <li><Link href="/services/performance-testing" className="hover:text-white transition-colors">Performance Testing</Link></li>
                            <li><Link href="/services/security-testing" className="hover:text-white transition-colors">Security Testing</Link></li>
                          </ul>
                        </div>
                      </div>
                      {/* Digital Transformation */}
                      <div className="flex flex-col min-w-[200px] px-4 border-r border-gray-700">
                        <span className="text-white font-bold text-sm mb-8">Digital Transformation</span>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Digital Marketing</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/seo" className="hover:text-white transition-colors">Search Engine Optimization (SEO)</Link></li>
                            <li><Link href="/services/social-media-marketing" className="hover:text-white transition-colors">Social Media Marketing</Link></li>
                            <li><Link href="/services/digital-analytics" className="hover:text-white transition-colors">Digital Analytics & Reporting</Link></li>
                            <li><Link href="/services/motion-graphics" className="hover:text-white transition-colors">Motion Graphics</Link></li>
                          </ul>
                        </div>
                      </div>
                      {/* Artificial Intelligence */}
                      <div className="flex flex-col min-w-[200px] px-4 border-r border-gray-700">
                        <span className="text-white font-bold text-sm mb-8">Artificial Intelligence</span>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Products</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/ai-chatbots" className="hover:text-white transition-colors">AI–Powered Chatbots</Link></li>
                            <li><Link href="/services/machine-learning" className="hover:text-white transition-colors">Machine Learning</Link></li>
                            <li><Link href="/services/nlp" className="hover:text-white transition-colors">Natural Language Processing</Link></li>
                            <li><Link href="/services/ai-healthcare" className="hover:text-white transition-colors">AI In Healthcare</Link></li>
                          </ul>
                        </div>
                      </div>
                      {/* Devops */}
                      <div className="flex flex-col min-w-[200px] px-4">
                        <span className="text-white font-bold text-sm mb-8">Devops</span>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Solutions</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/ci-cd" className="hover:text-white transition-colors">CI/CD Pipeline Automation</Link></li>
                            <li><Link href="/services/cloud-infrastructure" className="hover:text-white transition-colors">Cloud Infrastructure Management</Link></li>
                            <li><Link href="/services/disaster-recovery" className="hover:text-white transition-colors">Disaster Recovery & Backup</Link></li>
                            <li><Link href="/services/devsecops" className="hover:text-white transition-colors">Security Integration (DevSecOps)</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-white hover:text-[#8752FA] px-2 py-1 rounded-md text-lg font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              )
            ))}
          </nav>
            <Link
              href="#contact"
              className="bg-white text-black font-semibold rounded-xl px-7 py-2 text-lg shadow hover:bg-gray-200 transition-colors border border-gray-300"
            >
              Get Quote
            </Link>
          </div>
          {/* Mobile menu button (hamburger) */}
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
      </div>
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
