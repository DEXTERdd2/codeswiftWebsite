"use client";

import { motion } from "framer-motion";
import { X, Asterisk, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: <X className="w-8 h-8 text-white" />,
    title: "Expertise & Innovation",
    description: "We combine years of experience with cutting-edge tech to deliver high-performance software."
  },
  {
    icon: <Asterisk className="w-8 h-8 text-white" />,
    title: "Custom & Scalable Solutions",
    description: "Every project is tailored to your needs, ensuring flexibility and growth for your business."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "User-Centric Design",
    description: "We prioritize intuitive, clean, and modern UI/UX to enhance usability and engagement."
  },
  {
    icon: <X className="w-8 h-8 text-white" />,
    title: "End-To-End Support",
    description: "From planning to post-launch maintenance, we guide you at every step to ensure success."
  }
];

const stats = [
  { 
    number: "150+", 
    label: "Completed Projects", 
    description: "Delivering quality results with over 150 successful projects globally." 
  },
  { 
    number: "500+", 
    label: "Worldwide Partners", 
    description: "Trusted by 500+ clients, delivering innovative solutions that exceed expectations." 
  },
  { 
    number: "98%+", 
    label: "Positive Feedback", 
    description: "Proven excellence with a 98% satisfaction rate, delivering top tech solutions that drive success." 
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Why </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500">
              Hire Us?
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At CodeSwift, we deliver tailored IT solutions that drive business growth. With expertise in software development, cloud services, and IT consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-500/30 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}