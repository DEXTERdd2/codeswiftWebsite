"use client";

import Image from "next/image";


export default function QuoteCTA() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Get Instant <span className="text-[#8f6fff]">Quote From Us</span>
          </h2>
        </div>

        <div className="rounded-2xl bg-transparent py-12 md:py-20 md:px-12 flex flex-col-reverse lg:flex-row gap-10 md:gap-16 items-center lg:items-start">
          {/* Left: Form card (uses existing ContactForm for logic/UI) */}
          <div className="w-full max-w-md bg-transparent rounded-2xl p-6 md:p-8 border border-white/20 mt-8 lg:mt-0" style={{ boxShadow: '0 2px 32px 0 rgba(140, 92, 246, 0.10)' }}>
            <div className="text-white text-2xl md:text-3xl font-semibold mb-6">Get Quote Form Us</div>
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
              <Image src="/images/cube-helix3.png" alt="Colorful cube" width={320} height={320} className="w-48 md:w-64 lg:w-80 h-auto object-contain drop-shadow-[0_25px_55px_rgba(0,0,0,0.45)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
