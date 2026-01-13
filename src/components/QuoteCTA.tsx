"use client";

import Image from "next/image";

interface QuoteCTAProps {
  showHeading?: boolean;
}

export default function QuoteCTA({ showHeading = true }: QuoteCTAProps) {
  return (
    <section className="py-2">
      <div className="max-w-6xl mx-auto px-4">
        {showHeading && (
          <div className="text-center mb-2">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Get Instant <span className="text-[#8f6fff]">Quote From Us</span>
            </h2>
          </div>
        )}

        <div className="rounded-2xl bg-transparent py-4 md:py-8 md:px-12 flex flex-col-reverse sm:flex-row gap-8 md:gap-12 items-start sm:justify-start">
          {/* Form first for desktop left, mobile stacking */}
          <div className="w-full sm:w-7/12 lg:w-6/12 xl:w-5/12 max-w-md bg-transparent rounded-2xl p-3 sm:p-6 lg:p-8 border border-white/40 mt-6 sm:mt-0 mr-auto sm:ml-0 md:ml-0 lg:ml-2 xl:ml-4" style={{ boxShadow: 'none' }}>
            <div className="text-white text-2xl md:text-3xl font-semibold mb-6">Get Quote From Us</div>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
                <input type="text" placeholder="First Name" className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
                <input type="text" placeholder="Last Name" className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
                <input type="text" placeholder="Phone Number" className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
                <input type="text" placeholder="Country" className="rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
              </div>
              <textarea placeholder="Tell us about your project" rows={4} className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]" />
              <div>
                <div className="text-white/80 mb-2 font-medium">Project type</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2">
                  {['UI/UX Design','Software Development','AI Solutions','Digital Marketing','Devops Solutions','Quality Assurance'].map(opt => (
                    <button
                      type="button"
                      key={opt}
                      className="w-full rounded-md border border-white/10 px-1.5 py-2 text-[10px] text-white/80 bg-transparent transform transition-all duration-150 hover:scale-105 hover:bg-[#8f6fff]/10 hover:text-white hover:border-[#8f6fff] focus:outline-none focus:ring-2 focus:ring-[#8f6fff]/30 active:scale-100"
                    >{opt}</button>
                  ))}
                </div>
              </div>
              <button type="submit" className="w-full mt-2 rounded-lg bg-[#8f6fff] text-white font-semibold py-3 text-lg hover:bg-[#a084fa] transition-colors">Submit</button>
            </form>
          </div>

          {/* Content and image second for desktop right, mobile stacking */}
          <div className="flex-1 flex flex-col items-start text-left">
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">
                Looking for a <span className="text-[#8f6fff]">trusted tech partner?</span> <br />Let’s connect!
              </div>
              <div className="text-white/80 text-sm md:text-base mb-8 max-w-xl">
                With expertise in software development, AI design, and cloud, we build systems that are secure, scalable, and future-ready. Wherever you are in the world, we’re here to turn your vision into reality.
              </div>
            </div>
            <div className="mt-4 flex w-full justify-center md:justify-center lg:justify-center">
              <Image src="/images/cube-helix3.png" alt="Colorful cube" width={200} height={200} className="w-32 md:w-40 lg:w-56 h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
