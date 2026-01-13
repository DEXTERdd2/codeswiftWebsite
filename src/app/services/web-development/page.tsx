"use client";

import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from 'next/font/google';
import HeroWebDevelopment from "../../../components/services-web/HeroWebDevelopment";
import HowWeWork from "../../../components/services-web/HowWeWork";
import { Footer } from "@/components/footer";
import QuoteCTA from "@/components/QuoteCTA";
// import ClientContactForm from "@/app/components/ClientContactForm";
import CubeHelixImage from "@/components/CubeHelixImage";
import { FAQ } from "@/components/faq";
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400','500','700'], display: 'swap' });

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen text-white bg-[linear-gradient(180deg,_#000000_0%,_#6639AD_38%,_#010101_100%)]">
      <HeroWebDevelopment />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        {/* Intro / short blurb */}
        <section className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white/90">Web Development Service</h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            We specialize in creating modern, scalable, and responsive websites. Whether you're looking for a personal blog or a corporate
            platform, our web development services are designed to meet the unique needs of your business.
          </p>
        </section>

        {/* What we offer */}
        <section className="mb-20">
          <h3 className="text-3xl font-extrabold text-center mb-8">What <span className="text-[#8f6fff]">We Offer</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 */}
            <div className="webdev-card-outer">
              <div className="webdev-card-inner">
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'none' }} />
                <div className="absolute -top-8 -left-8 w-44 h-44 rounded-full bg-gradient-to-br from-[#7b3ff6]/10 to-[#3ac2e0]/8 blur-3xl opacity-50 pointer-events-none" />

                <div className="mt-4 flex flex-col items-center text-center px-4">
                  <div className="webdev-card-icon">
                    <Image src="/images/WebDevelopmnetIcon1.png" alt="Custom Web Design" width={140} height={140} className="object-contain" />
                  </div>
                  <h4 className={`webdev-card-title ${dmSans.className}`}>Custom Web Design</h4>
                  <p className={`webdev-card-desc ${dmSans.className}`}>Tailored, mobile-responsive design to ensure your site looks perfect on any device.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="webdev-card-outer">
              <div className="webdev-card-inner">
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'none' }} />
                <div className="absolute -top-8 -left-8 w-44 h-44 rounded-full bg-gradient-to-br from-[#7b3ff6]/10 to-[#3ac2e0]/8 blur-3xl opacity-50 pointer-events-none" />

                <div className="mt-4 flex flex-col items-center text-center px-4">
                  <div className="webdev-card-icon">
                    <Image src="/images/WebDevelopmnetIcon2.png" alt="Custom UI/UX" width={140} height={140} className="object-contain" />
                  </div>
                  <h4 className={`webdev-card-title ${dmSans.className}`}>Custom UI/UX</h4>
                  <p className={`webdev-card-desc ${dmSans.className}`}>Creative UX/UI design focused on intuitive, user-centered experiences.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="webdev-card-outer">
              <div className="webdev-card-inner">
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'none' }} />
                <div className="absolute -top-8 -left-8 w-44 h-44 rounded-full bg-gradient-to-br from-[#7b3ff6]/10 to-[#3ac2e0]/8 blur-3xl opacity-50 pointer-events-none" />

                <div className="mt-4 flex flex-col items-center text-center px-4">
                  <div className="webdev-card-icon">
                    <Image src="/images/WebDevelopmnetIcon3.png" alt="SEO-Optimized Websites" width={140} height={140} className="object-contain" />
                  </div>
                  <h4 className={`webdev-card-title ${dmSans.className}`}>SEO-Optimized Websites</h4>
                  <p className={`webdev-card-desc ${dmSans.className}`}>We build sites optimized for search engines to help you rank higher and attract more traffic.</p>
                </div>
              </div>
            </div>
          </div>
        </section> 

        {/* How we work */}
        <HowWeWork />

        {/* CTA + Contact form (custom design restored) */}
        {/* CTA: Reusable Quote CTA */}
        <section className="mt-16">
          <QuoteCTA />
          <CubeHelixImage />
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
}
