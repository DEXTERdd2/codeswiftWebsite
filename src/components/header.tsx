"use client";

import { useState, useEffect, useRef } from "react";
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileGroupsOpen, setMobileGroupsOpen] = useState<Record<string, boolean>>({});
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch / no-hover devices (tablets, phones) so we can enable tap-to-open
  useEffect(() => {
    const mq = window.matchMedia('(hover: none)');
    const update = () => setIsTouch(!!mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    window.addEventListener('resize', update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // Close services mega-menu when tapping outside on touch devices
  useEffect(() => {
    if (!isTouch) return;
    const handleOutside = (e: Event) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesHover(false);
      }
    };
    document.addEventListener('touchstart', handleOutside, { passive: true });
    document.addEventListener('click', handleOutside);
    return () => {
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('click', handleOutside);
    };
  }, [isTouch, servicesHover]);

  useEffect(() => {
    // ensure mobile services submenu and its groups are closed when main mobile menu closes
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileGroupsOpen({});
    }
  }, [mobileMenuOpen]);

  const toggleMobileGroup = (group: string) => {
    setMobileGroupsOpen(prev => ({ ...prev, [group]: !prev[group] }));
  };

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
                  ref={servicesRef}
                  onClick={() => {
                    if (isTouch) {
                      if (servicesHoverTimeout) clearTimeout(servicesHoverTimeout);
                      setServicesHover(prev => !prev);
                    }
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
                  <button
                    type="button"
                    aria-expanded={servicesHover}
                    className="text-white cursor-default px-2 py-1 rounded-md text-lg font-medium transition-colors focus:outline-none"
                    tabIndex={isTouch ? 0 : -1}
                    style={isTouch ? undefined : { pointerEvents: 'none' }}
                  >
                    {item.name}
                  </button>
                  {/* Mega Menu Dropdown */}
                  {servicesHover && (
                    <div
                      className="fixed left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] bg-black border border-gray-700 rounded-3xl shadow-2xl px-8 py-8 grid sm:grid-cols-2 lg:flex lg:justify-between gap-6 overflow-y-auto pr-4 z-50 scrollbar-thin"
                      style={{
                        top: 'calc(48px + 3.5rem)', // Move further down from header
                        boxShadow: '0 8px 40px 8px rgba(0,0,0,0.7)',
                        minHeight: '420px',
                        maxHeight: '70vh',
                        WebkitOverflowScrolling: 'touch'
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
                      <div className="flex flex-col min-w-0 px-4 w-full">
                        <span className="text-white font-bold text-sm mb-8">Software Delivery</span>
                        <div className="mb-8">
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Development</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/web-development" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Web Development</Link></li>
                            <li><Link href="/services/mobile-app-development" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Mobile App Development</Link></li>
                            <li><Link href="/services/custom-crm" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Custom CRM</Link></li>
                            <li><Link href="/services/enterprise-software" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Enterprise Software</Link></li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Design</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/digital-product-design" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Digital Product Design</Link></li>
                          </ul>
                        </div>
                      </div>
                      {/* Game Development & QA */}
                      <div className="flex flex-col min-w-0 px-4 w-full border-r border-gray-700">
                        <div className="mb-8">
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Game Development</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/mobile-game-development" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Mobile Game Development</Link></li>
                            <li><Link href="/services/virtual-reality" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Virtual Reality (VR)</Link></li>
                            <li><Link href="/services/augmented-reality" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Augmented Reality (AR)</Link></li>
                            <li><Link href="/services/game-design-prototyping" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Game Design & Prototyping</Link></li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Quality Assurance</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/manual-testing" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Manual Testing</Link></li>
                            <li><Link href="/services/automated-testing" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Automated Testing</Link></li>
                            <li><Link href="/services/performance-testing" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Performance Testing</Link></li>
                            <li><Link href="/services/security-testing" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Security Testing</Link></li>
                          </ul>
                        </div>
                      </div>
                      {/* Digital Transformation */}
                      <div className="flex flex-col min-w-0 px-4 w-full border-r border-gray-700">
                        <span className="text-white font-bold text-sm mb-8">Digital Transformation</span>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Digital Marketing</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/seo" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Search Engine Optimization (SEO)</Link></li>
                            <li><Link href="/services/social-media-marketing" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Social Media Marketing</Link></li>
                            <li><Link href="/services/digital-analytics" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Digital Analytics & Reporting</Link></li>
                            <li><Link href="/services/motion-graphics" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Motion Graphics</Link></li>
                          </ul>
                        </div>
                      </div>
                      {/* Artificial Intelligence */}
                      <div className="flex flex-col min-w-0 px-4 w-full border-r border-gray-700">
                        <span className="text-white font-bold text-sm mb-8">Artificial Intelligence</span>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Products</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/ai-chatbots" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>AI–Powered Chatbots</Link></li>
                            <li><Link href="/services/machine-learning" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Machine Learning</Link></li>
                            <li><Link href="/services/nlp" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Natural Language Processing</Link></li>
                            <li><Link href="/services/ai-healthcare" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>AI In Healthcare</Link></li>
                          </ul>
                        </div>
                      </div>
                      {/* Devops */}
                      <div className="flex flex-col min-w-0 px-4 w-full">
                        <span className="text-white font-bold text-sm mb-8">Devops</span>
                        <div>
                          <span className="text-white font-semibold flex items-center mb-2 text-xs"><span className="mr-2">→</span>Solutions</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-2">
                            <li><Link href="/services/ci-cd" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>CI/CD Pipeline Automation</Link></li>
                            <li><Link href="/services/cloud-infrastructure" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Cloud Infrastructure Management</Link></li>
                            <li><Link href="/services/disaster-recovery" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Disaster Recovery & Backup</Link></li>
                            <li><Link href="/services/devsecops" className="hover:text-white transition-colors break-words whitespace-normal" onClick={() => setServicesHover(false)}>Security Integration (DevSecOps)</Link></li>
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
              <div key={item.name} className={`${item.name === "Services" && mobileServicesOpen ? 'border-b-0 last:border-b-0' : 'border-b border-gray-800 last:border-b-0'}`}>
                {item.name === "Services" ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-white hover:text-[#8752FA] hover:bg-gray-800 rounded-md"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Animated services container */}
                    <div className={`pl-4 pb-4 bg-transparent overflow-y-auto transition-all duration-300 scrollbar-thin`} style={{ maxHeight: mobileServicesOpen ? '60vh' : '0px', WebkitOverflowScrolling: 'touch' }} aria-hidden={!mobileServicesOpen}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Software Delivery */}
                          <div className="rounded-md">
                            <button type="button" aria-expanded={!!mobileGroupsOpen['software']} className="w-full flex items-center justify-between text-left text-white font-bold text-sm py-2" onClick={() => toggleMobileGroup('software')}>
                              <span>Software Delivery</span>
                              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['software'] ? 'rotate-180' : ''}`} />
                            </button>
                            <div className="pl-3 mt-1 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['software'] ? '800px' : '0px' }}>
                                <Link href="/services/web-development" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Web Development</Link>
                                <Link href="/services/mobile-app-development" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Mobile App Development</Link>
                                <Link href="/services/custom-crm" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Custom CRM</Link>
                                <Link href="/services/enterprise-software" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Enterprise Software</Link>
                                <Link href="/services/digital-product-design" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Digital Product Design</Link>
                              </div>
                          </div>

                          {/* Game Development */}
                          <div className="rounded-md">
                            <button type="button" aria-expanded={!!mobileGroupsOpen['game']} className="w-full flex items-center justify-between text-left text-white font-semibold text-sm py-2" onClick={() => toggleMobileGroup('game')}>
                              <span>Game Development</span>
                              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['game'] ? 'rotate-180' : ''}`} />
                            </button>
                            <div className="pl-3 mt-1 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['game'] ? '600px' : '0px' }}>
                                <Link href="/services/mobile-game-development" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Mobile Game Development</Link>
                                <Link href="/services/virtual-reality" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Virtual Reality (VR)</Link>
                                <Link href="/services/augmented-reality" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Augmented Reality (AR)</Link>
                                <Link href="/services/game-design-prototyping" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Game Design & Prototyping</Link>
                              </div>

                            <div className="border-t border-gray-800 pt-3 mt-3">
                              <button type="button" aria-expanded={!!mobileGroupsOpen['qa']} className="w-full flex items-center justify-between text-left text-white font-semibold text-sm py-2" onClick={() => toggleMobileGroup('qa')}>
                                <span>Quality Assurance</span>
                                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['qa'] ? 'rotate-180' : ''}`} />
                              </button>
                              <div className="pl-3 mt-1 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['qa'] ? '600px' : '0px' }}>
                                  <Link href="/services/manual-testing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Manual Testing</Link>
                                  <Link href="/services/automated-testing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Automated Testing</Link>
                                  <Link href="/services/performance-testing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Performance Testing</Link>
                                  <Link href="/services/security-testing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Security Testing</Link>
                                </div>
                            </div>
                          </div>

                          {/* Digital Transformation */}
                          <div className="rounded-md">
                            <button type="button" aria-expanded={!!mobileGroupsOpen['digital']} className="w-full flex items-center justify-between text-left text-white font-bold text-sm py-2" onClick={() => toggleMobileGroup('digital')}>
                              <span>Digital Transformation</span>
                              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['digital'] ? 'rotate-180' : ''}`} />
                            </button>
                            <div className="pl-3 mt-1 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['digital'] ? '600px' : '0px' }}>
                                <Link href="/services/seo" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Search Engine Optimization (SEO)</Link>
                                <Link href="/services/social-media-marketing" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Social Media Marketing</Link>
                                <Link href="/services/digital-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Digital Analytics & Reporting</Link>
                                <Link href="/services/motion-graphics" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Motion Graphics</Link>
                              </div>
                          </div>

                          {/* Artificial Intelligence */}
                          <div className="rounded-md">
                            <button type="button" aria-expanded={!!mobileGroupsOpen['ai']} className="w-full flex items-center justify-between text-left text-white font-bold text-sm py-2" onClick={() => toggleMobileGroup('ai')}>
                              <span>Artificial Intelligence</span>
                              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['ai'] ? 'rotate-180' : ''}`} />
                            </button>
                            <div className="pl-3 mt-1 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['ai'] ? '600px' : '0px' }}>
                                <Link href="/services/ai-chatbots" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>AI–Powered Chatbots</Link>
                                <Link href="/services/machine-learning" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Machine Learning</Link>
                                <Link href="/services/nlp" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Natural Language Processing</Link>
                                <Link href="/services/ai-healthcare" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>AI In Healthcare</Link>
                              </div>
                          </div>

                          {/* Devops */}
                          <div className="rounded-md">
                            <button type="button" aria-expanded={!!mobileGroupsOpen['devops']} className="w-full flex items-center justify-between text-left text-white font-bold text-sm py-2" onClick={() => toggleMobileGroup('devops')}>
                              <span>Devops</span>
                              <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['devops'] ? 'rotate-180' : ''}`} />
                            </button>
                            <div className="pl-3 mt-1 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['devops'] ? '600px' : '0px' }}>
                                <Link href="/services/ci-cd" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>CI/CD Pipeline Automation</Link>
                                <Link href="/services/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Cloud Infrastructure Management</Link>
                                <Link href="/services/disaster-recovery" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Disaster Recovery & Backup</Link>
                                <Link href="/services/devsecops" className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Security Integration (DevSecOps)</Link>
                              </div>
                          </div>
                        </div>
                      </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-base font-medium text-white hover:text-[#8752FA] hover:bg-gray-800 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
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
