"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
     
    { name: "Pricing", href: "#" },
    
    { name: "Support", href: "#" },
  ]

  const legalLinks = [
    { name: "Terms of Privacy", href: "#" },
    { name: "Privacy Policy", href: "#" },
     
  ]

  const companyLinks = [
    { name: "About Us", href: "/about" },
     
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/codeswiftorg",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/codeswiftorg/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/CodeSwiftorg",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M17.53 2.47a.75.75 0 0 1 1.06 1.06l-5.47 5.47 5.47 5.47a.75.75 0 0 1-1.06 1.06l-5.47-5.47-5.47 5.47a.75.75 0 0 1-1.06-1.06l5.47-5.47-5.47-5.47a.75.75 0 0 1 1.06-1.06l5.47 5.47 5.47-5.47z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61585563306270",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.729 0 1.321-.592 1.321-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-transparent text-white border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-12">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-0">
            <Image
              src="/images/500w.svg"
              alt="CodeSwift Logo"
              width={180}
              height={40}
              className="h-8 w-auto lg:h-9"
            />
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 w-full">
            <div>
              <h3 className="text-base sm:text-sm font-semibold tracking-wide text-white mb-3 sm:mb-4">
                Product
              </h3>
              <ul className="space-y-2 text-sm sm:text-xs text-neutral-400">
                {productLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-sm font-semibold tracking-wide text-white mb-3 sm:mb-4">
                Legal
              </h3>
              <ul className="space-y-2 text-sm sm:text-xs text-neutral-400">
                {legalLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-sm font-semibold tracking-wide text-white mb-3 sm:mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-sm sm:text-xs text-neutral-400">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-sm font-semibold tracking-wide text-white mb-3 sm:mb-4">
                Social
              </h3>
              <div className="flex flex-row gap-4 mt-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className="inline-flex items-center justify-center text-[#EDE6FF] transition-transform duration-150 transform hover:scale-105 hover:text-[#CDB8FF] focus:outline-none focus:ring-2 focus:ring-[#EDE6FF]/30"
                  >
                    <span className="w-6 h-6 sm:w-7 sm:h-7">
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 text-xs sm:text-sm text-neutral-500 text-center lg:text-left">
          &copy; {currentYear} CodeSwift. All rights reserved.
        </div>
      </div>
    </footer>
  )
}