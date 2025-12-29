"use client"

import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { DecorativeShapes } from "./ui/decorative-shapes"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}></div>
        
        <motion.div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <DecorativeShapes />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Innovative </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500">
                Software Solutions
              </span>
              <span className="text-white"> for the future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              At CodeSwift, we deliver tailored IT solutions that drive business growth. With expertise in software development, cloud services, and IT consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <Button 
                className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-3 text-lg rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 font-medium px-8 py-3 text-lg rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                View All Solutions
              </Button>
            </div>

            <div className="relative my-16">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 bg-gradient-to-b from-purple-900/80 to-black/80 text-gray-400 text-sm font-medium backdrop-blur-sm rounded-full py-2 border border-white/5">
                  Trusted by the world's most innovative teams
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto px-4">
              {['Acme Corp', 'Quantum', 'Echo Valley', 'Celestial', 'PULSE', 'APEX'].map((company, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="text-gray-400 font-medium text-center text-sm hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute top-1/4 left-10 w-48 h-48 opacity-10"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-transparent rounded-2xl transform rotate-45"></div>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-10 w-64 h-64 opacity-10"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-tl from-blue-500 to-transparent rounded-full"></div>
      </motion.div>
      
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,0.5))]"></div>
    </section>
  )
}