import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web & Mobile App Development',
    description: 'Expert in providing scalable, tailored solutions for your business.',
    icon: '/images/layers.png',
  },
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Innovative solutions, optimizing processes, enhancing decisions.',
    icon: '/images/Vector.png',
  },
  {
    title: 'UX/UI Design',
    description: 'Creative UX/UI design focused on intuitive, user-centered experiences.',
    icon: '/images/magic-stick-31.png',
  },
  {
    title: 'DevOps Operations',
    description: 'Efficient DevOps for collaboration, automation, and faster software delivery.',
    icon: '/images/Vector2.png',
  },
  {
    title: 'Game Development',
    description: 'Innovative gaming with immersive experiences and engaging gameplay.',
    icon: '/images/games.png',
  },
  {
    title: 'Quality Assurance',
    description: 'Quality assurance services ensuring flawless performance and satisfaction.',
    icon: '/images/Vector1.png',
  }
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-transparent py-20 text-white">
      {/* Decorations removed so page background shows through */}

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
            At CodeSwift, we offer a comprehensive suite of services designed to meet the unique needs of every business. We provide solutions that drive efficiency, foster innovation, and streamline operations across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group rounded-2xl border border-[#29292F] bg-transparent px-8 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-2"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_16px_42px_rgba(0,0,0,0.35)]">
                <img src={service.icon} alt={service.title} className="h-12 w-12" />
              </div>
              <h3 className="text-center text-[18px] font-semibold leading-snug text-white mb-4">{service.title}</h3>
              <p className="text-center text-sm md:text-base text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
