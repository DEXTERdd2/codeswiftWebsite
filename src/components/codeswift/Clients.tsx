import { motion } from 'framer-motion';

export function Clients() {
  const companies = [
    { name: 'Acme Corp', src: '/images/acme1.png', width: 138 },
    { name: 'Quantum', src: '/images/quantum1.png', width: 126 },
    { name: 'Echo Valley', src: '/images/echo1.png', width: 142 },
    { name: 'Celestial', src: '/images/celestia1.png', width: 124 },
    { name: 'PULSE', src: '/images/pulse1.png', width: 112 },
    { name: 'APEX', src: '/images/apex1.png', width: 110 },
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
              key={company.name} 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <img
                src={company.src}
                alt={company.name}
                style={{ width: `${company.width}px`, height: 'auto' }}
                className="opacity-75 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
