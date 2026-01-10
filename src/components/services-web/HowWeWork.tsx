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
        {/* Background image removed so page background shows through */}

        <div className="relative p-6 sm:p-10">
          {/* Mobile stacked steps (visible on small screens and tablets) */}
          <div className="lg:hidden space-y-8">
            {steps.map((step) => (
              <div key={step.title + '-mobile'} className="flex flex-col items-center text-center px-4">
                <div className="text-white font-bold text-lg lg:text-xl mb-2 font-dm-sans">{step.title}</div>
                <div className="text-white/80 text-sm lg:text-base mb-3 font-dm-sans leading-relaxed">{step.desc}</div>
                <img src="/images/HowWebWorkSymbol.png" alt={`${step.title} symbol`} className="w-20 h-auto object-contain mb-3" />
                <span className="inline-block bg-white text-[#2d225a] font-semibold px-4 py-1.5 rounded-lg font-dm-sans text-sm text-center border border-[#ede9fe] whitespace-nowrap" style={{ letterSpacing: 0.1 }}>{step.chip}</span>
              </div>
            ))}
          </div>

          {/* Desktop layout: Titles row (large screens) */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
            {steps.map((step) => (
              <div key={step.title + '-desktop'} className="text-center px-4">
                <div className="text-white font-bold text-lg lg:text-xl mb-2 font-dm-sans">{step.title}</div>
                <div className="text-white/80 text-sm lg:text-base mb-2 font-dm-sans leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Desktop symbols row (large screens) */}
          <div className="mt-6 hidden lg:grid lg:grid-cols-5 lg:gap-6 items-end">
            {steps.map((step) => (
              <div key={step.title + '-symbol'} className="flex justify-center">
                <img src="/images/HowWebWorkSymbol.png" alt={`${step.title} symbol`} className="w-20 lg:w-28 h-auto object-contain" style={{ objectFit: 'contain' }} />
              </div>
            ))}
          </div>

          {/* Desktop chips row (large screens) */}
          <div className="mt-4 hidden lg:grid lg:grid-cols-5 lg:gap-6">
            {steps.map((step) => (
              <div key={step.title + '-chip'} className="flex justify-center">
                <span className="inline-block bg-white text-[#2d225a] font-semibold px-4 sm:px-5 py-1.5 rounded-lg font-dm-sans text-sm text-center border border-[#ede9fe] whitespace-nowrap overflow-hidden text-ellipsis" style={{ letterSpacing: 0.1 }}>{step.chip}</span>
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
