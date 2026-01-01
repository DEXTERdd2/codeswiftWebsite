import { Code, Brain, Layout, Cloud, Smartphone, Server } from "lucide-react"
import Image from "next/image";

export function Services() {
  const services = [
    {
      title: "Web & Mobile App Development",
      description: "Expert in providing scalable, tailored solutions for your business.",
      icon: <Code className="h-8 w-8 text-white" />
    },
    {
      title: "AI & Machine Learning Solutions",
      description: "Innovative solutions, optimizing processes, enhancing decisions.",
      icon: <Brain className="h-8 w-8 text-white" />
    },
    {
      title: "UX/UI Design",
      description: "Creative UX/UI design focused on intuitive, user-centered experiences.",
      icon: <Layout className="h-8 w-8 text-white" />
    },
    {
      title: "Cloud & DevOps Services",
      description: "Seamless cloud integration and efficient DevOps practices.",
      icon: <Cloud className="h-8 w-8 text-white" />
    },
    {
      title: "Mobile-First Development",
      description: "Responsive designs that work perfectly across all devices.",
      icon: <Smartphone className="h-8 w-8 text-white" />
    },
    {
      title: "Backend Development",
      description: "Robust backend systems that power your applications.",
      icon: <Server className="h-8 w-8 text-white" />
    }
  ]

  return (
    <section id="services" className="py-20 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            At CodeSwift, we offer a comprehensive suite of services designed to meet the unique needs of every business. We provide solutions that drive efficiency, foster innovation, and streamline operations across various industries.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index} 
                className="bg-transparent p-8 rounded-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(3, 6).map((service, index) => (
              <div 
                key={index} 
                className="bg-transparent p-8 rounded-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
