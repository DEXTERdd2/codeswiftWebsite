"use client";

import React from "react";

const steps = [
  { title: "Discovery", desc: "Understanding your business, users, and goals to define a clear problem and success criteria.", chip: "Business Goals" },
  { title: "Planning", desc: "Designing the technical roadmap, selecting the right stack, and defining a scalable solution.", chip: "Solution Blueprint" },
  { title: "Design", desc: "Creating user-focused designs, wireframes, and prototypes to validate ideas early.", chip: "User Experience" },
  { title: "Development", desc: "Building with agile execution, clean code, and continuous iteration for speed and quality.", chip: "Validated Prototype" },
  { title: "Deployment", desc: "Launching, optimizing, and supporting the solution to ensure long-term success.", chip: "Go Live" },
];

export function HowWeWork() {
  return (
    <section className="py-12">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-white">How </span>
          <span className="text-[#8f6fff]">We Work</span>
        </h2>
      </div>
      <div className="relative rounded-3xl overflow-hidden border border-white/10 py-10 md:py-14">
        {/* Background image - exact as design */}
        <div className="absolute inset-0">
          <img src="/images/HowToWorkBgImage.png" alt="Workflow Background" className="w-full h-full object-cover" />
        </div>
        {/* Overlay to darken and tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a0c2e]/70 to-[#36113e]/70 mix-blend-multiply" />

        <div className="relative p-6 sm:p-10">
          {/* Headings and descriptions row */}
          <div className="flex flex-row justify-between items-stretch gap-2 md:gap-4 xl:gap-8">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center w-1/5 min-w-[180px]">
                <div className="text-white font-bold text-lg md:text-xl text-center mb-2 font-dm-sans">{step.title}</div>
                <div className="text-white/80 text-sm md:text-base text-center mb-6 font-dm-sans leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Symbol images row */}
          <div className="flex flex-row justify-evenly items-end mt-2">
            {steps.map((step, idx) => (
              <div key={step.title + '-symbol'} className="flex flex-col items-center flex-1 min-w-[180px] max-w-[220px]">
                <img
                  src="/images/HowWebWorkSymbol.png"
                  alt="How We Work Symbol"
                  className="w-full max-w-[120px] mb-2"
                  style={{ objectFit: 'contain' }}
                />
                <div className="mt-2">
                  <span
                    className="inline-block bg-white text-[#2d225a] font-semibold px-5 py-1.5 rounded-lg shadow font-dm-sans text-sm md:text-sm text-center border border-[#ede9fe] whitespace-nowrap"
                    style={{ minWidth: 'unset', letterSpacing: 0.1, boxShadow: '0 2px 8px rgba(44, 34, 90, 0.06)' }}
                  >
                    {step.chip}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ...existing code... */}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
