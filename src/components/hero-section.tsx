"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-transparent min-h-screen flex flex-col">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave shape at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10">
          <svg 
            className="absolute bottom-0 w-full h-full text-purple-900" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor" 
              d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,149.3C672,149,768,203,864,202.7C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        {/* Decorative cursor image */}
        <div className="absolute left-[5%] top-1/3 w-32 h-32 opacity-70">
          <Image 
            src="/images/cursor.png" 
            alt="Cursor" 
            width={128} 
            height={128}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Decorative speech bubble */}
        <div className="absolute right-[5%] top-1/4 w-40 h-40 opacity-70">
          <Image 
            src="/images/speech-bubble.png" 
            alt="Speech Bubble" 
            width={160} 
            height={160}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Decorative ellipse */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl opacity-20">
          <Image 
            src="/images/Ellipse.png" 
            alt="" 
            width={1200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-28 pb-14 md:pt-40 md:pb-32 relative z-10 w-full flex-grow flex flex-col">
        <div className="flex-grow flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 px-2 sm:px-4">
              <span className="text-white">Innovative</span>{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">Software Solutions</span>{' '}
              <span className="text-white">for the future</span>
            </h1>
            <p className="text-base xs:text-lg md:text-xl text-gray-300 mb-8 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-4">
              At CodeSwift, we deliver tailored IT solutions that drive business growth. With expertise in software development, cloud services, and IT consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base font-medium rounded-lg text-purple-700 bg-white hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                Contact Us
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-white/20 text-base font-medium rounded-lg text-white bg-purple-600/30 hover:bg-purple-700/40 transition-colors w-full sm:w-auto"
              >
                View All Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Trusted by section */}
        <div className="mt-auto pt-16">
          <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider">Trusted by the world's most innovative teams</p>
          <div className="relative w-full max-w-4xl mx-auto hover:pause-animation">
            <div className="overflow-hidden">
              <div className="flex items-center space-x-16 animate-marquee whitespace-nowrap hover:pause-animation">
                {['Acme Corp', 'Quantum', 'Echo Valley', 'Celestial', 'PULSE', 'APEX'].map((company, index) => (
                  <div key={index} className="text-white text-lg font-medium flex-shrink-0">
                    {company}
                  </div>
                ))}
                {/* Duplicate for seamless looping */}
                {['Acme Corp', 'Quantum', 'Echo Valley', 'Celestial', 'PULSE', 'APEX'].map((company, index) => (
                  <div key={`duplicate-${index}`} className="text-white text-lg font-medium flex-shrink-0">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
