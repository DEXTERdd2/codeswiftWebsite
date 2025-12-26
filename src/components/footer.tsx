"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Changelog", href: "#" },
    { name: "Support", href: "#" },
  ]

  const legalLinks = [
    { name: "Terms of Privacy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Security", href: "#" },
  ]

  const companyLinks = [
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "Dribbble", href: "#" },
    { name: "Behance", href: "#" },
    { name: "Discord", href: "#" },
  ]

  return (
    <footer className="w-full bg-black text-white border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-12">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-0">
            <Image
              src="/images/logo-symbol.png"
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
              <ul className="space-y-2 text-sm sm:text-xs text-neutral-400">
                {socialLinks.map((item) => (
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
          </div>
        </div>

        <div className="mt-8 sm:mt-10 text-xs sm:text-sm text-neutral-500 text-center lg:text-left">
          &copy; {currentYear} CodeSwift. All rights reserved.
        </div>
      </div>
    </footer>
  )
}