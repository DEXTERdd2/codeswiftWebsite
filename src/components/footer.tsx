"use client"

import Image from "next/image"

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
    <footer className="bg-black text-white border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="CodeSwift Logo"
              width={180}
              height={40}
              className="h-8 w-auto lg:h-9"
            />
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-10 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
                Product
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-400">
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
              <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-400">
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
              <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-400">
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
              <h3 className="text-sm font-semibold tracking-wide text-white mb-4">
                Social
              </h3>
              <ul className="space-y-2.5 text-sm text-neutral-400">
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

        <div className="mt-12 text-xs text-neutral-500">
          &copy; {currentYear} CodeSwift. All rights reserved.
        </div>
      </div>
    </footer>
  )
}