"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";


// Add your teamMembers array and scrollRef logic here
import { useRef } from "react";

const teamMembers = [
  {
    name: "Azeem Khalid",
    role: "Chief Executive Officer",
    image: "/images/Azeem.jpeg",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
    ]
  },
  {
    name: "Faizan Shahid",
    role: "Chief Technology Officer",
    image: "/images/Faizan.jpeg",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
    ]
  },
  {
    name: "Nadir Khan",
    role: "Lead Developer",
    image: "/images/Nadir.jpeg",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
    ]
  },
  {
    name: "Noman Ikram",
    role: "Chief operating officer",
    image: "/images/Noman.jpeg",
    social: [
      { icon: <Linkedin className="w-4 h-4" />, url: "#" },
    ]
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden py-0 pb-10 sm:pb-12">
      <div className="max-w-screen-xl 2xl:max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
          <div className="text-left mb-4 sm:mb-6">
          <h2
            className="font-black text-white leading-none text-3xl xs:text-4xl sm:text-5xl md:text-6xl flex flex-wrap gap-3"
            style={{ letterSpacing: "-0.04em" }}
          >
            <span>Our</span>
            <span className="text-[#A56CFF]">Leadership</span>
          </h2>
        </div>
        <div className="relative">
          {/* Responsive Grid for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-1 sm:gap-2 xl:gap-4 2xl:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-2xl xs:rounded-3xl md:rounded-[28px] border border-white/10 bg-transparent shadow-none"
              >
                {/* Full Card Background Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  style={{ objectPosition: 'top' }}
                  loading="lazy"
                  priority={false}
                />
                {/* Gradient Overlay for readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                {/* Card Content Overlay */}
                <div className="relative z-20 flex flex-col h-full justify-end px-4 xs:px-6 sm:px-7 pb-6 xs:pb-8 pt-4 xs:pt-6">
                  <div className="flex-1" />
                    <div className="border-t border-white/25 pt-3 flex flex-col items-start gap-2 w-full">
                      <h3 className="text-base xs:text-lg sm:text-xl md:text-lg font-bold text-white leading-tight tracking-tight">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2 xs:gap-3 w-full">
                        <p className="text-white/85 text-xs xs:text-sm sm:text-base md:text-sm font-medium leading-tight mr-2">
                          {member.role}
                        </p>
                        <div className="flex items-center gap-1 xs:gap-2 ml-auto">
                          {member.social.map((social, i) => (
                            <a
                              key={i}
                              href={social.url}
                              className="w-6 h-6 xs:w-7 xs:h-7 rounded-full bg-white flex items-center justify-center text-[#5b2fa3] hover:scale-105 transition-transform"
                              aria-label={`${member.name} social link`}
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
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
