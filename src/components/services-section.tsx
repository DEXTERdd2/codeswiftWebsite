"use client";

import { motion } from "framer-motion";
import { Code, Brain, Layout, Infinity, Target, Shield } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: "Web & Mobile App Development",
    description: "Expert in providing scalable, tailored solutions for your business."
  },
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: "AI & Machine Learning Solutions",
    description: "Innovative solutions, optimizing processes, enhancing decisions."
  },
  {
    icon: <Layout className="w-8 h-8 text-white" />,
    title: "UX/UI Design",
    description: "Creative UX/UI design focused on intuitive, user-centered experiences."
  },
  {
    icon: <Infinity className="w-8 h-8 text-white" />,
    title: "DevOps Operations",
    description: "Efficient DevOps for collaboration, automation, and faster software delivery."
  },
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "Game Development",
    description: "Innovative gaming with immersive experiences and engaging gameplay."
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Quality Assurance",
    description: "Quality assurance services ensuring flawless performance and satisfaction."
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
        <motion.div 
          className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-600/5 to-blue-600/5 blur-3xl"
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500">
              Services
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We offer a wide range of services to help your business grow and succeed in the digital world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(139, 92, 246, 0.5)"
              }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
