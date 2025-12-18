"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Azeem Khalid",
    role: "Chief Executive Officer",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
      { icon: <Twitter className="w-4 h-4" />, url: "#" },
      { icon: <Github className="w-4 h-4" />, url: "#" },
    ]
  },
  {
    name: "Faizan Shahid",
    role: "Chief Technology Officer",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
      { icon: <Twitter className="w-4 h-4" />, url: "#" },
      { icon: <Github className="w-4 h-4" />, url: "#" },
    ]
  },
  {
    name: "Nadir Khan",
    role: "Lead Developer",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
      { icon: <Twitter className="w-4 h-4" />, url: "#" },
      { icon: <Github className="w-4 h-4" />, url: "#" },
    ]
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h2
            className="font-black text-white leading-none text-5xl md:text-6xl flex flex-wrap gap-3"
            style={{ letterSpacing: "-0.04em" }}
          >
            <span>Our</span>
            <span className="text-[#A56CFF]">Leadership</span>
          </h2>
        </div>

        <div
          className="overflow-x-auto pb-3 -mx-4 sm:mx-0 [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ scrollbarColor: "transparent transparent" }}
        >
          <div className="flex gap-6 sm:gap-8 px-4 sm:px-0 snap-x snap-mandatory">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative flex h-[560px] min-w-[320px] sm:min-w-[360px] lg:min-w-[420px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0813] shadow-[0_20px_70px_rgba(0,0,0,0.5)] snap-center"
              >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,#5b2fa3_0%,#1c1230_45%,#05030a_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_32%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(135,82,250,0.12),transparent_55%)]" />
              <div className="relative flex flex-col h-full px-7 pb-8 pt-6">
                <div className="flex-1" />
                <div className="border-t border-white/25 pt-5 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-[26px] font-black text-white leading-tight tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-white/85 text-lg md:text-xl font-semibold leading-tight">
                      {member.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {member.social.map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#5b2fa3] hover:scale-105 transition-transform"
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
        </div>
      </div>
    </section>
  );
}
