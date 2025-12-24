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
  {
    name: "Services",
    href: "#services",
    submenu: {
      title: "Our Services",
      items: [
        { name: "Web Development", href: "#web-development" },
        { name: "Mobile App Development", href: "#mobile-app" },
        { name: "UI/UX Design", href: "#ui-ux" },
        { name: "Digital Marketing", href: "#digital-marketing" },
      ],
    },
  },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function HeaderNew() {
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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-12 xs:h-14 sm:h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-8 w-24 xs:h-9 xs:w-28 sm:h-10 sm:w-32 md:h-10 md:w-40">
                <Image 
                  src="/images/logo-symbol.png" 
                  alt="CodeSwift Logo" 
                  fill 
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 overflow-x-auto">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="text-gray-300 hover:text-white px-2 xs:px-3 py-1 xs:py-2 rounded-md text-xs xs:text-sm font-medium flex items-center"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openSubmenu === item.name ? 'transform rotate-180' : ''}`} />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="absolute left-0 mt-2 w-56 rounded-lg shadow-lg bg-gray-800 ring-1 ring-white/10">
                        <div className="p-4">
                          <h3 className="text-sm font-medium text-white mb-2">{item.submenu.title}</h3>
                          <div className="space-y-2">
                            {item.submenu.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/50 rounded-md"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white px-2 xs:px-3 py-1 xs:py-2 rounded-md text-xs xs:text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="#contact"
              className="ml-2 xs:ml-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 xs:px-4 py-1 xs:py-2 rounded-md text-xs xs:text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-800">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                    >
                      {item.name}
                      <ChevronDown className={`h-5 w-5 ${openSubmenu === item.name ? 'transform rotate-180' : ''}`} />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="px-4 py-2 bg-gray-800/50 rounded-md ml-4 my-2">
                        <h4 className="text-sm font-medium text-white mb-2">{item.submenu.title}</h4>
                        <div className="space-y-2">
                          {item.submenu.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700/50 rounded-md"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-md text-base font-medium hover:from-purple-700 hover:to-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
