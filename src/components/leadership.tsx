"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";


// Add your teamMembers array and scrollRef logic here
import { useRef } from "react";

const teamMembers = [
  {
    name: "Azeem Khalid",
    role: "Chief Executive Officer",
    image: "/images/Azeem.jpeg",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
      { icon: <Twitter className="w-4 h-4" />, url: "#" },
      { icon: <Github className="w-4 h-4" />, url: "#" },
    ]
  },
  {
    name: "Faizan Shahid",
    role: "Chief Technology Officer",
    image: "/images/Faizan.jpeg",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
      { icon: <Twitter className="w-4 h-4" />, url: "#" },
      { icon: <Github className="w-4 h-4" />, url: "#" },
    ]
  },
  {
    name: "Nadir Khan",
    role: "Lead Developer",
    image: "/images/Nadir.jpeg",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
      { icon: <Twitter className="w-4 h-4" />, url: "#" },
      { icon: <Github className="w-4 h-4" />, url: "#" },
    ]
  },
  {
    name: "Noman Ikram",
    role: "Chief operating officer",
    image: "/images/Noman.jpeg",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
      { icon: <Twitter className="w-4 h-4" />, url: "#" },
      { icon: <Github className="w-4 h-4" />, url: "#" },
    ]
  }
];

export function Leadership() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.7;
    container.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="leadership" className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="max-w-[1400px] mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8 sm:mb-10">
          <h2
            className="font-black text-white leading-none text-3xl xs:text-4xl sm:text-5xl md:text-6xl flex flex-wrap gap-3"
            style={{ letterSpacing: "-0.04em" }}
          >
            <span>Our</span>
            <span className="text-[#A56CFF]">Leadership</span>
          </h2>
        </div>
        <div className="relative">
          {/* Scrollable Cards Row */}
          <div
            ref={scrollRef}
            className="overflow-x-auto flex-nowrap pb-3 -mx-2 xs:-mx-4 sm:mx-0 [scrollbar-width:none] [-ms-overflow-style:none] hide-scrollbar"
            style={{ scrollbarColor: "transparent transparent" }}
          >
            <div className="flex flex-nowrap gap-4 xs:gap-6 sm:gap-8 px-2 xs:px-4 sm:px-0 snap-x snap-mandatory w-max">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="relative flex h-[340px] xs:h-[420px] sm:h-[480px] md:h-[560px] min-w-[240px] xs:min-w-[300px] sm:min-w-[340px] md:min-w-[420px] flex-col justify-end overflow-hidden rounded-2xl xs:rounded-3xl md:rounded-[28px] border border-white/10 bg-transparent shadow-[0_10px_30px_rgba(0,0,0,0.18)] md:shadow-[0_20px_70px_rgba(0,0,0,0.35)] snap-center"
                >
                  {/* Full Card Background Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{ objectPosition: 'top' }}
                  />
                  {/* Gradient Overlay for readability */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  {/* Card Content Overlay */}
                  <div className="relative z-20 flex flex-col h-full justify-end px-4 xs:px-6 sm:px-7 pb-6 xs:pb-8 pt-4 xs:pt-6">
                    <div className="flex-1" />
                    <div className="border-t border-white/25 pt-4 xs:pt-5 flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-[26px] font-black text-white leading-tight tracking-tight">
                          {member.name}
                        </h3>
                        <p className="text-white/85 text-sm xs:text-base sm:text-lg md:text-xl font-semibold leading-tight">
                          {member.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 xs:gap-3">
                        {member.social.map((social, i) => (
                          <a
                            key={i}
                            href={social.url}
                            className="w-8 h-8 xs:w-9 xs:h-9 rounded-full bg-white flex items-center justify-center text-[#5b2fa3] hover:scale-105 transition-transform"
                            aria-label={`${member.name} social link`}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1c1230] border border-white/10 flex items-center justify-center text-white hover:bg-[#5b2fa3] transition-colors shadow-md z-20 ml-[-18px] sm:ml-[-28px]"
              aria-label="Scroll left"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            {/* Right Button */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1c1230] border border-white/10 flex items-center justify-center text-white hover:bg-[#5b2fa3] transition-colors shadow-md z-20 mr-[-18px] sm:mr-[-28px]"
              aria-label="Scroll right"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
