import { motion } from 'framer-motion';

export function Clients() {
  const companies = [
    { name: 'Acme Corp', text: 'ACME CORP' },
    { name: 'Quantum', text: 'QUANTUM' },
    { name: 'Echo Valley', text: 'ECHO VALLEY' },
    { name: 'Celestial', text: 'CELESTIAL' },
    { name: 'PULSE', text: 'PULSE' },
    { name: 'APEX', text: 'APEX' },
  ];

  return (
    <section id="clients" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          className="text-center text-gray-400 mb-16 text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by the world's most innovative teams
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {companies.map((company, index) => (
            <motion.div 
              key={index} 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-12 flex items-center">
                <span className="text-white text-lg font-semibold opacity-70 hover:opacity-100 transition-all duration-300 hover:text-purple-300">
                  {company.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
