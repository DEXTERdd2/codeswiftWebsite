"use client";

import Image from "next/image";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400','500','700'], display: 'swap' });

export function HeroWebDevelopment() {
  return (
    <header className="relative pt-44 pb-12 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className={`${dmSans.className} text-[36px] font-medium text-white/70 uppercase tracking-wider mb-12 sm:mb-2`} style={{ letterSpacing: '-0.075em' }}>Services</p>

          <h3 className={`${dmSans.className} text-[64px] sm:text-[64px] md:text-[64px] font-medium mb-6 leading-[1.02]`} style={{ letterSpacing: '-0.075em' }}>
            Web Development
          </h3>

          <div className="flex justify-center gap-4 mb-12">
            <button className="rounded-full bg-white text-black px-8 py-3">Get Quote</button>
            <button className="rounded-full bg-[#0b0b0d] border border-white/10 text-white px-6 py-3">View All Solutions</button>
          </div>

          <div className="mx-auto max-w-6xl">
            <Image src="/images/WebDevelopmnetImage.png" alt="Web development art" width={1280} height={720} className="w-full h-auto block" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroWebDevelopment;
