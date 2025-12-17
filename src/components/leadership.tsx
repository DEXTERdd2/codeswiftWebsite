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
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500">
              Leadership
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation and excellence at our company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-purple-900/30 to-black rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <div className="h-64 bg-gradient-to-br from-purple-900/50 to-black/50 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-500/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/50">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
                <div className="absolute bottom-8 right-6 flex space-x-2">
                  {member.social.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-purple-500/30 transition-colors duration-200"
                      aria-label={`${member.name}'s ${social.icon.type.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
