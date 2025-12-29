"use client";

import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from 'next/font/google';
import HeroWebDevelopment from "../../../components/services-web/HeroWebDevelopment";
import HowWeWork from "../../../components/services-web/HowWeWork";
import { Footer } from "@/components/footer";
// import ClientContactForm from "@/app/components/ClientContactForm";

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400','500','700'], display: 'swap' });

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#0c0712] via-[#160a2a] to-[#3b1e67]">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative rounded-2xl overflow-hidden p-8 bg-[linear-gradient(180deg,rgba(17,8,22,0.6),rgba(11,6,17,0.6))] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[340px] flex flex-col items-center justify-between">
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)' }} />
              <div className="absolute -top-8 -left-8 w-44 h-44 rounded-full bg-gradient-to-br from-[#7b3ff6]/10 to-[#3ac2e0]/8 blur-3xl opacity-50 pointer-events-none" />

              <div className="mt-4 flex flex-col items-center text-center px-4">
                <div className="mb-6 w-36 h-36 flex items-center justify-center">
                  <Image src="/images/WebDevelopmnetIcon1.png" alt="Custom Web Design" width={140} height={140} className="object-contain" />
                </div>
                <h4 className={`${dmSans.className} text-[28px] sm:text-[32px] md:text-[36px] font-medium text-white mb-4`} style={{ letterSpacing: '-0.075em' }}>Custom Web Design</h4>
                <p className={`${dmSans.className} text-[14px] sm:text-[16px] leading-relaxed text-white/70 max-w-[360px]`}>Tailored, mobile-responsive design to ensure your site looks perfect on any device.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl overflow-hidden p-8 bg-[linear-gradient(180deg,rgba(17,8,22,0.6),rgba(11,6,17,0.6))] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[340px] flex flex-col items-center justify-between">
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)' }} />
              <div className="absolute -top-8 -left-8 w-44 h-44 rounded-full bg-gradient-to-br from-[#7b3ff6]/10 to-[#3ac2e0]/8 blur-3xl opacity-50 pointer-events-none" />

              <div className="mt-4 flex flex-col items-center text-center px-4">
                <div className="mb-6 w-36 h-36 flex items-center justify-center">
                  <Image src="/images/WebDevelopmnetIcon2.png" alt="Custom UI/UX" width={140} height={140} className="object-contain" />
                </div>
                <h4 className={`${dmSans.className} text-[28px] sm:text-[32px] md:text-[36px] font-medium text-white mb-4`} style={{ letterSpacing: '-0.075em' }}>Custom UI/UX</h4>
                <p className={`${dmSans.className} text-[14px] sm:text-[16px] leading-relaxed text-white/70 max-w-[360px]`}>Creative UX/UI design focused on intuitive, user-centered experiences.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl overflow-hidden p-8 bg-[linear-gradient(180deg,rgba(17,8,22,0.6),rgba(11,6,17,0.6))] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[340px] flex flex-col items-center justify-between">
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)' }} />
              <div className="absolute -top-8 -left-8 w-44 h-44 rounded-full bg-gradient-to-br from-[#7b3ff6]/10 to-[#3ac2e0]/8 blur-3xl opacity-50 pointer-events-none" />

              <div className="mt-4 flex flex-col items-center text-center px-4">
                <div className="mb-6 w-36 h-36 flex items-center justify-center">
                  <Image src="/images/WebDevelopmnetIcon3.png" alt="SEO-Optimized Websites" width={140} height={140} className="object-contain" />
                </div>
                <h4 className={`${dmSans.className} text-[28px] sm:text-[32px] md:text-[36px] font-medium text-white mb-4`} style={{ letterSpacing: '-0.075em' }}>SEO-Optimized Websites</h4>
                <p className={`${dmSans.className} text-[14px] sm:text-[16px] leading-relaxed text-white/70 max-w-[360px]`}>We build sites optimized for search engines to help you rank higher and attract more traffic.</p>
              </div>
            </div>
          </div>
        </section> 

        {/* How we work */}
        <HowWeWork />

        {/* CTA + Contact form (custom design restored) */}
        <section className="mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Get Instant <span className="text-[#8f6fff]">Quote From Us</span>
              </h2>
            </div>
            <div className="rounded-2xl bg-transparent py-12 md:py-20 md:px-12 flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
              {/* Left: Form */}
              <div className="w-full max-w-md bg-transparent rounded-2xl p-6 md:p-8 border border-white/20" style={{boxShadow:'0 2px 32px 0 rgba(140, 92, 246, 0.10)'}}>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
                    <input type="text" placeholder="Last Name" className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
                    <input type="text" placeholder="Phone Number" className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
                    <input type="text" placeholder="Country" className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
                  </div>
                  <textarea placeholder="Tell us about your project" rows={4} className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
                  <div>
                    <div className="text-white/80 mb-2 font-medium">Project type</div>
                    <div className="flex flex-wrap gap-2">
                      {['UI/UX Design','Software Development','AI Solutions','Digital Marketing','Devops Solutions','Quality Assurance'].map(opt => (
                        <button type="button" key={opt} className="rounded-lg border border-white/20 px-4 py-2 text-white/80 hover:bg-[#8f6fff]/10 transition-colors">{opt}</button>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="w-full mt-2 rounded-lg bg-[#8f6fff] text-white font-semibold py-3 text-lg shadow hover:bg-[#a084fa] transition-colors">Submit</button>
                </form>
              </div>
              {/* Right: Marketing text and image */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div>
                  <div className="text-4xl md:text-5xl font-extrabold mb-4">
                    Looking for a <span className="text-[#8f6fff]">trusted tech partner?</span> <br />Let’s connect!
                  </div>
                  <div className="text-white/80 text-base md:text-lg mb-8 max-w-xl">
                    With expertise in software development, AI design, and cloud, we build systems that are secure, scalable, and future-ready. Wherever you are in the world, we’re here to turn your vision into reality.
                  </div>
                </div>
                <div className="mt-4 flex justify-center lg:justify-start">
                  <img src="/images/cube-helix3.png" alt="Colorful cube" className="w-48 md:w-64 lg:w-80 h-auto object-contain drop-shadow-[0_25px_55px_rgba(0,0,0,0.45)]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
