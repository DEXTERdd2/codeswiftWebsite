"use client";

import { motion } from "framer-motion";

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
      className="relative overflow-hidden bg-gradient-to-b from-[#2b1955] via-[#1f1242] to-[#140a2d] py-20 text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.18),transparent_40%),radial-gradient(circle_at_85%_12%,rgba(96,165,250,0.18),transparent_42%),radial-gradient(circle_at_50%_75%,rgba(129,140,248,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 relative z-10">
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

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 mb-14 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative flex h-[320px] xs:h-[350px] sm:h-[370px] md:h-[400px] lg:h-[420px] w-full max-w-[340px] xs:max-w-[260px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[235px] flex-col justify-between overflow-hidden rounded-[15px] border border-transparent [background:linear-gradient(#2b0f65,#1a0d43)_padding-box,linear-gradient(180deg,#8752fa,rgba(255,255,255,0))_border-box] px-4 xs:px-5 sm:px-6 py-6 xs:py-7 sm:py-8 shadow-[2px_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[100px] transition-transform duration-200 hover:-translate-y-1.5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="absolute inset-0 bg-[url('/images/Rectangle.png')] bg-cover bg-center opacity-[0.2]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.05),transparent_38%),radial-gradient(circle_at_80%_14%,rgba(255,255,255,0.04),transparent_36%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.03),transparent_42%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent),linear-gradient(0deg,rgba(255,255,255,0.035),transparent_35%)]" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-start">
                  <div className="h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 flex items-center justify-center">
                    <img src={feature.iconSrc} alt={feature.title} className="h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 object-contain" />
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
          className="rounded-3xl border border-white/16 bg-white/6 px-3 xs:px-4 sm:px-8 md:px-12 py-7 sm:py-9 shadow-[0_28px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl"
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