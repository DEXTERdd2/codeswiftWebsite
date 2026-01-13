"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    iconSrc: "/images/design1.png",
    title: "Expertise & Innovation",
    description:
      "We combine years of experience with cutting-edge tech to deliver high-performance software.",
  },
  {
    iconSrc: "/images/design3.png",
    title: "Custom & Scalable Solutions",
    description:
      "Every project is tailored to your needs, ensuring flexibility and growth for your business.",
  },
  {
    iconSrc: "/images/design2.png",
    title: "User-Centric Design",
    description:
      "We prioritize intuitive, clean, and modern UI/UX to enhance usability and engagement.",
  },
  {
    iconSrc: "/images/design4.png",
    title: "End-To-End Support",
    description:
      "From planning to post-launch maintenance, we guide you at every step to ensure success.",
  },
];

const stats = [
  {
    number: "150+",
    label: "Completed Projects",
    description:
      "Delivering quality results with over 150 successful projects globally.",
  },
  {
    number: "500+",
    label: "Worldwide Partners",
    description:
      "Trusted by 500+ clients, delivering innovative solutions that exceed expectations.",
  },
  {
    number: "98+",
    label: "Positive Feedback",
    description:
      "Proven excellence with a 98% satisfaction rate, delivering top tech solutions that drive success.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-transparent py-10 text-white"
    >
      {/* background decoration removed to let page background show through */}

      <div className="mx-auto w-full max-w-screen-xl 2xl:max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-0 relative z-10">
        <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_1fr] mb-12">
          <motion.h2
            className="font-black text-center md:text-left text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[74px] leading-tight md:leading-[82.26px]"
            style={{
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">Why </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ba8cff] via-[#a56cff] to-[#7f5bff]">
              Hire Us?
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            At CodeSwift, we deliver tailored IT solutions that drive business growth. With expertise in software
            development, cloud services, and IT consulting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-7 xl:gap-10 2xl:gap-14 mb-14 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative flex h-[320px] xs:h-[350px] sm:h-[370px] md:h-[400px] lg:h-[420px] w-full flex-col justify-between overflow-hidden rounded-[15px] border border-white/20 bg-white/10 backdrop-blur-lg px-4 xs:px-5 sm:px-6 py-6 xs:py-7 sm:py-8 shadow-none transition-transform duration-200 hover:-translate-y-1.5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-start">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center">
                    <Image src={feature.iconSrc} alt={feature.title} width={96} height={96} className="h-20 w-20 sm:h-24 sm:w-24 object-contain" loading="lazy" />
                  </div>
                </div>
                <div className="mt-auto space-y-2 xs:space-y-3 pt-6 xs:pt-10">
                  <h3 className="text-lg xs:text-xl font-semibold leading-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm xs:text-base text-white/82 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-[15px] border border-white/20 bg-white/10 backdrop-blur-lg px-3 xs:px-4 sm:px-8 md:px-12 py-7 sm:py-9 shadow-none"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          <div className="flex flex-col md:grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/60 text-center">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="px-2 xs:px-4 py-6 md:py-4 flex-1">
                <div className="text-3xl xs:text-4xl sm:text-5xl font-black text-white leading-none mb-2 sm:mb-3">{stat.number}</div>
                <div className="text-lg xs:text-xl font-semibold text-white mb-1 sm:mb-2">{stat.label}</div>
                <p className="text-xs xs:text-sm sm:text-base text-white/75 leading-relaxed max-w-xs mx-auto">{stat.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}