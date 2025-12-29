"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Layout, BarChart2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code className="h-8 w-8 text-purple-400" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    href: "#web-development"
  },
  {
    icon: <Smartphone className="h-8 w-8 text-blue-400" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
    href: "#mobile-app"
  },
  {
    icon: <Layout className="h-8 w-8 text-green-400" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront to drive engagement and conversions.",
    href: "#ui-ux"
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-yellow-400" />,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence and reach your target audience effectively.",
    href: "#digital-marketing"
  }
];

export function ServicesNew() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-transparent backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-500/20 flex items-center justify-center mb-6 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link 
                href={service.href}
                className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/20"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
