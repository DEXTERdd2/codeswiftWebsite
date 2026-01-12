"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

type NavItem = {
  name: string;
  href: string;
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Career", href: "/career" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileGroupsOpen, setMobileGroupsOpen] = useState<Record<string, boolean>>({});
  const servicesRef = useRef<HTMLDivElement | null>(null); // nav trigger wrapper
  const panelRef = useRef<HTMLDivElement | null>(null); // services panel
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openServicesMenu = () => {
    clearCloseTimeout();
    setServicesOpen(true);
  };

  const scheduleCloseServices = (delay = 120) => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => setServicesOpen(false), delay);
  };

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

  // Close on outside click/touch (desktop hover still works via mouseenter/leave)
  useEffect(() => {
    if (!servicesOpen) return;
    const onDoc = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      // If target is inside the panel or trigger, do nothing
      if ((panelRef.current && panelRef.current.contains(target)) || (triggerRef.current && triggerRef.current.contains(target))) return;
      setServicesOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('touchstart', onDoc, { passive: true });
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('touchstart', onDoc);
      clearCloseTimeout();
    };
  }, [servicesOpen]);

  // Close with Escape and focus management
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setServicesOpen(false); };
    document.addEventListener('keydown', onKey);

    // Focus the panel for keyboard navigation WITHOUT scrolling
    const foc = setTimeout(() => {
      if (panelRef.current) {
        // Use preventScroll if supported to avoid moving the viewport
        try {
          (panelRef.current as HTMLElement).focus({ preventScroll: true } as FocusOptions);
        } catch (e) {
          // Fallback for browsers that don't support preventScroll
          (panelRef.current as HTMLElement).focus();
        }
      }
    }, 10);

    return () => {
      document.removeEventListener('keydown', onKey);
      clearTimeout(foc);
    };
  }, [servicesOpen]);

  const toggleMobileGroup = (group: string) => {
    setMobileGroupsOpen(prev => {
      const isOpen = !!prev[group];
      // If group already open, close it; otherwise open this group and close others
      return isOpen ? {} : { [group]: true };
    });
  };

  return (
    <header className="fixed w-full z-50 top-0 left-0 right-0 bg-transparent">
      <div className={`relative flex justify-center pt-6 pb-4 px-4 ${servicesOpen ? 'bg-black border-transparent' : ''}`}>
        <div className="relative w-full max-w-6xl border-0 outline-none ring-0" onMouseEnter={() => {}}>
          <div className={
            `relative flex flex-col gap-4 px-6 sm:px-8 pt-2 pb-2
            ${servicesOpen ? 'shadow-[0_30px_80px_rgba(0,0,0,0.35)]' : 'border border-white/30 bg-transparent backdrop-blur-md backdrop-saturate-150'}
            outline-none ring-0 rounded-[44px]`
          }>
            <div className="flex items-center gap-4">
              <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                <div className="relative h-10 w-40">
                  <Image src="/images/logo-symbol.png" alt="CodeSwift Logo" fill className="object-contain object-left" priority />
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-10 mx-auto" aria-label="Global">
                {navigation.map(item => (
                  item.name === 'Services' ? (
                    <div key={item.name} className="relative" ref={servicesRef} onMouseEnter={() => { if (!isTouch) openServicesMenu(); }} onMouseLeave={() => { if (!isTouch) scheduleCloseServices(140); }}>
                      <button
                        ref={triggerRef}
                        id="services-trigger"
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-controls="services-panel"
                        aria-haspopup="menu"
                        className={`text-white text-lg font-medium px-2 py-1 transition-colors focus:outline-none ${servicesOpen ? 'text-white' : 'hover:text-white/80'}`}
                        onClick={() => { if (isTouch) setServicesOpen(prev => !prev); else openServicesMenu(); }}
                        onFocus={() => { if (!isTouch) openServicesMenu(); }}
                        onBlur={() => { if (!isTouch) setTimeout(() => { if (servicesRef.current && !servicesRef.current.contains(document.activeElement)) scheduleCloseServices(80); }, 100); }}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setServicesOpen(prev => !prev); } }}
                      >
                        {item.name}
                      </button>
                    </div>
                  ) : (
                    <Link key={item.name} href={item.href} className="text-white text-lg font-medium hover:text-white/80 transition-colors">
                      {item.name}
                    </Link>
                  )
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex flex-shrink-0">
                <Link href="#contact" className={`inline-flex items-center justify-center rounded-2xl font-semibold px-6 py-2.5 text-base transition-colors ${servicesOpen ? 'bg-white text-black' : 'bg-white text-black hover:bg-gray-200'}`}>
                  Get Quote
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden ml-auto">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none" onClick={() => setMobileMenuOpen(prev => !prev)}>
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
              </div>
            </div>

            {/* Desktop mega menu inside header container */}
            {servicesOpen && (
              <div className="hidden md:block -mx-2" onMouseEnter={() => { if (!isTouch) setServicesOpen(true); }} onMouseLeave={() => { if (!isTouch) setServicesOpen(false); }}>
                <div
                  id="services-panel"
                  ref={panelRef}
                  role="region"
                  aria-label="Services"
                  aria-hidden={!servicesOpen}
                  tabIndex={-1}
                  className="rounded-2xl bg-black px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 border-0 outline-none ring-0"
                  onMouseEnter={() => { if (!isTouch) openServicesMenu(); }}
                  onMouseLeave={() => { if (!isTouch) scheduleCloseServices(120); }}
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-white font-semibold text-sm block mb-10 whitespace-nowrap">Software Delivery</span>
                      <span className="text-white font-semibold flex items-center mb-2 text-sm whitespace-nowrap"><span className="mr-2">→</span>Development</span>
                      <ul className="text-gray-400 space-y-2">
                        <li><Link href="/services/web-development" className="hover:text-white transition-colors text-[10px] whitespace-nowrap" onClick={() => setServicesOpen(false)}>Web Development</Link></li>
                        <li><Link href="/services/mobile-app-development" className="hover:text-white transition-colors text-[10px] whitespace-nowrap" onClick={() => setServicesOpen(false)}>Mobile App Development</Link></li>
                        <li><Link href="/services/custom-crm" className="hover:text-white transition-colors text-[10px] whitespace-nowrap" onClick={() => setServicesOpen(false)}>Custom CRM</Link></li>
                        <li><Link href="/services/enterprise-software" className="hover:text-white transition-colors text-[10px] whitespace-nowrap" onClick={() => setServicesOpen(false)}>Enterprise Software</Link></li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-white font-semibold flex items-center mb-2 text-sm whitespace-nowrap"><span className="mr-2">→</span>Design</span>
                      <ul className="text-gray-400 space-y-2">
                        <li><Link href="/services/digital-product-design" className="hover:text-white transition-colors text-[10px] whitespace-nowrap" onClick={() => setServicesOpen(false)}>Digital Product Design</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="mt-14">
                      <span className="text-white font-semibold flex items-center mb-2 text-sm whitespace-nowrap"><span className="mr-2">→</span>Game Development</span>
                      <ul className="text-gray-400 text-sm space-y-2">
                        <li><Link href="/services/mobile-game-development" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Mobile Game Development</Link></li>
                        <li><Link href="/services/virtual-reality" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Virtual Reality (VR)</Link></li>
                        <li><Link href="/services/augmented-reality" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Augmented Reality (AR)</Link></li>
                        <li><Link href="/services/game-design-prototyping" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Game Design & Prototyping</Link></li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-white font-semibold flex items-center mb-2 text-sm whitespace-nowrap"><span className="mr-2">→</span>Quality Assurance</span>
                      <ul className="text-gray-400 space-y-2">
                        <li><Link href="/services/manual-testing" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Manual Testing</Link></li>
                        <li><Link href="/services/automated-testing" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Automated Testing</Link></li>
                        <li><Link href="/services/performance-testing" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Performance Testing</Link></li>
                        <li><Link href="/services/security-testing" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Security Testing</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6 lg:border-l lg:border-white lg:pl-8">
                    <div>
                      <span className="text-white font-semibold text-sm block mb-10 whitespace-nowrap">Digital Transformation</span>
                      <span className="text-white font-semibold flex items-center mb-2 text-sm whitespace-nowrap"><span className="mr-2">→</span>Digital Marketing</span>
                      <ul className="text-gray-400 space-y-2">
                        <li><Link href="/services/seo" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Search Engine Optimization (SEO)</Link></li>
                        <li><Link href="/services/social-media-marketing" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Social Media Marketing</Link></li>
                        <li><Link href="/services/digital-analytics" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Digital Analytics & Reporting</Link></li>
                        <li><Link href="/services/motion-graphics" className="hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Motion Graphics</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6 lg:border-l lg:border-white lg:pl-8">
                    <div>
                      <span className="text-white font-semibold text-sm block mb-10 whitespace-nowrap">Artificial Intelligence</span>
                      <span className="text-white font-semibold flex items-center mb-2 text-sm whitespace-nowrap"><span className="mr-2">→</span>Products</span>
                      <ul className="text-gray-300 space-y-2">
                        <li><Link href="/services/ai-chatbots" className="text-gray-400 hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>AI-Powered Chatbots</Link></li>
                        <li><Link href="/services/machine-learning" className="text-gray-400 hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Machine Learning</Link></li>
                        <li><Link href="/services/nlp" className="text-gray-400 hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Natural Language Processing</Link></li>
                        <li><Link href="/services/ai-healthcare" className="text-gray-400 hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>AI in Healthcare</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6 lg:border-l lg:border-white lg:pl-8">
                    <div>
                      <span className="text-white font-semibold text-sm block mb-10 whitespace-nowrap">Devops</span>
                      <span className="text-white font-semibold flex items-center mb-2 text-sm whitespace-nowrap"><span className="mr-2">→</span>Solutions</span>
                      <ul className="text-gray-300 space-y-2">
                        <li><Link href="/services/ci-cd" className="text-gray-400 hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>CI/CD Pipeline Automation</Link></li>
                        <li><Link href="/services/cloud-infrastructure" className="text-gray-400 hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Cloud Infrastructure Management</Link></li>
                        <li><Link href="/services/disaster-recovery" className="text-gray-400 hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Disaster Recovery & Backup</Link></li>
                        <li><Link href="/services/devsecops" className="text-gray-400 hover:text-white transition-colors text-[10px] font-sans font-medium whitespace-nowrap" onClick={() => setServicesOpen(false)}>Security Integration (DevSecOps)</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
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

                    <div className={`pl-4 pb-4 bg-transparent overflow-y-auto transition-all duration-300 scrollbar-thin`} style={{ maxHeight: mobileServicesOpen ? '60vh' : '0px', WebkitOverflowScrolling: 'touch' }} aria-hidden={!mobileServicesOpen}>
                      <div className="space-y-4">
                        {/* Software Delivery (nested sub-sections) */}
                        <div className="rounded-md">
                          <button id="mobile-group-software-trigger" aria-expanded={!!mobileGroupsOpen['software']} aria-controls="mobile-group-software-panel" type="button" className="w-full flex items-center justify-between px-3 py-3 text-left text-white font-bold text-base" onClick={() => toggleMobileGroup('software')}>
                            <span>Software Delivery</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['software'] ? 'rotate-180' : ''}`} />
                          </button>
                          <div id="mobile-group-software-panel" role="region" aria-labelledby="mobile-group-software-trigger" className="pl-3 mt-2 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['software'] ? '900px' : '0px' }} aria-hidden={!mobileGroupsOpen['software']}>

                            <div className="text-sm font-semibold text-gray-200 mb-2">→ Development</div>
                            <Link href="/services/web-development" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Web Development</Link>
                            <Link href="/services/mobile-app-development" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Mobile App Development</Link>
                            <Link href="/services/custom-crm" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Custom CRM</Link>
                            <Link href="/services/enterprise-software" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Enterprise Software</Link>

                            <div className="text-sm font-semibold text-gray-200 mt-4 mb-2">→ Design</div>
                            <Link href="/services/digital-product-design" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Digital Product Design</Link>

                            <div className="text-sm font-semibold text-gray-200 mt-4 mb-2">→ Game Development</div>
                            <Link href="/services/mobile-game-development" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Mobile Game Development</Link>
                            <Link href="/services/virtual-reality" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Virtual Reality (VR)</Link>
                            <Link href="/services/augmented-reality" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Augmented Reality (AR)</Link>
                            <Link href="/services/game-design-prototyping" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Game Design & Prototyping</Link>

                            <div className="text-sm font-semibold text-gray-200 mt-4 mb-2">→ Quality Assurance</div>
                            <Link href="/services/manual-testing" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Manual Testing</Link>
                            <Link href="/services/automated-testing" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Automated Testing</Link>
                            <Link href="/services/performance-testing" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Performance Testing</Link>
                            <Link href="/services/security-testing" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Security Testing</Link>

                          </div>
                        </div>

                        {/* Digital Transformation */}
                        <div className="rounded-md">
                          <button id="mobile-group-digital-trigger" aria-expanded={!!mobileGroupsOpen['digital']} aria-controls="mobile-group-digital-panel" type="button" className="w-full flex items-center justify-between px-3 py-3 text-left text-white font-bold text-base" onClick={() => toggleMobileGroup('digital')}>
                            <span>Digital Transformation</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['digital'] ? 'rotate-180' : ''}`} />
                          </button>
                          <div id="mobile-group-digital-panel" role="region" aria-labelledby="mobile-group-digital-trigger" className="pl-3 mt-2 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['digital'] ? '600px' : '0px' }} aria-hidden={!mobileGroupsOpen['digital']}>
                            <div className="text-sm font-semibold text-gray-200 mb-2">→ Digital Marketing</div>
                            <Link href="/services/seo" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Search Engine Optimization (SEO)</Link>
                            <Link href="/services/social-media-marketing" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Social Media Marketing</Link>
                            <Link href="/services/digital-analytics" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Digital Analytics & Reporting</Link>
                            <Link href="/services/motion-graphics" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Motion Graphics</Link>
                          </div>
                        </div>

                        {/* Artificial Intelligence */}
                        <div className="rounded-md">
                          <button id="mobile-group-ai-trigger" aria-expanded={!!mobileGroupsOpen['ai']} aria-controls="mobile-group-ai-panel" type="button" className="w-full flex items-center justify-between px-3 py-3 text-left text-white font-bold text-base" onClick={() => toggleMobileGroup('ai')}>
                            <span>Artificial Intelligence</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['ai'] ? 'rotate-180' : ''}`} />
                          </button>
                          <div id="mobile-group-ai-panel" role="region" aria-labelledby="mobile-group-ai-trigger" className="pl-3 mt-2 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['ai'] ? '600px' : '0px' }} aria-hidden={!mobileGroupsOpen['ai']}>
                            <div className="text-sm font-semibold text-gray-200 mb-2">→ Products</div>
                            <Link href="/services/ai-chatbots" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>AI-Powered Chatbots</Link>
                            <Link href="/services/machine-learning" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Machine Learning</Link>
                            <Link href="/services/nlp" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Natural Language Processing</Link>
                            <Link href="/services/ai-healthcare" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>AI in Healthcare</Link>
                          </div>
                        </div>

                        {/* DevOps */}
                        <div className="rounded-md">
                          <button id="mobile-group-devops-trigger" aria-expanded={!!mobileGroupsOpen['devops']} aria-controls="mobile-group-devops-panel" type="button" className="w-full flex items-center justify-between px-3 py-3 text-left text-white font-bold text-base" onClick={() => toggleMobileGroup('devops')}>
                            <span>DevOps</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileGroupsOpen['devops'] ? 'rotate-180' : ''}`} />
                          </button>
                          <div id="mobile-group-devops-panel" role="region" aria-labelledby="mobile-group-devops-trigger" className="pl-3 mt-2 overflow-hidden transition-all duration-300" style={{ maxHeight: mobileGroupsOpen['devops'] ? '600px' : '0px' }} aria-hidden={!mobileGroupsOpen['devops']}>
                            <div className="text-sm font-semibold text-gray-200 mb-2">→ Solutions</div>
                            <Link href="/services/ci-cd" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>CI/CD Pipeline Automation</Link>
                            <Link href="/services/cloud-infrastructure" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Cloud Infrastructure Management</Link>
                            <Link href="/services/disaster-recovery" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Disaster Recovery & Backup</Link>
                            <Link href="/services/devsecops" className="block px-3 py-2 text-base text-gray-300 hover:text-white rounded-md" onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); setMobileGroupsOpen({}); }}>Security Integration (DevSecOps)</Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="block px-3 py-3 text-base font-medium text-white hover:text-[#8752FA] hover:bg-gray-800 rounded-md" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                )}
              </div>
            ))}
          </div>

          <div className="px-6 py-4 border-t border-gray-800">
            <Link href="#contact" className="block w-full text-center bg-white text-black font-semibold rounded-xl px-4 py-3 text-base border border-gray-300 hover:bg-gray-200 transition-colors" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}



