"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FeaturedImage = {
  image: string;
  overlay?: string;
  tint?: string;
};

const featured: FeaturedImage[] = [
  {
    image: "/images/Group1686559702.png",
    overlay: "from-[#7b3ff6]/18 via-[#c084fc]/14 to-[#f3a1e2]/10",
    tint: "from-black/18 via-black/8 to-black/20",
  },
  {
    image: "/images/Group1686559704.png",
    overlay: "from-[#3ac2e0]/14 via-[#5c9bff]/14 to-[#0b102d]/18",
    tint: "from-black/18 via-black/8 to-black/20",
  },
  {
    image: "/images/Group1686559703@4x.png",
    overlay: "from-[#9b68ff]/14 via-[#7c3aed]/14 to-[#140629]/18",
    tint: "from-black/18 via-black/8 to-black/20",
  },
];

export function PortfolioNew() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-transparent py-12"
    >
      {/* Background glow removed so page background shows through */}

      <div className="max-w-screen-xl 2xl:max-w-7xl mx-auto px-6 xl:px-12 2xl:px-0 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:[grid-template-columns:0.9fr_1.7fr_0.9fr] gap-6 sm:gap-8 xl:gap-12 2xl:gap-16 items-end">
          {featured.map((project, index) => {
            return (
              <motion.article
                key={project.image}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={`
                  group relative overflow-hidden
                  h-[340px] xs:h-[420px] sm:h-[480px] md:h-[560px] md:h-[580px]
                  rounded-2xl xs:rounded-3xl md:rounded-[36px]
                  border border-white/10
                  shadow-none
                  isolate
                  transition-transform duration-300
                  hover:-translate-y-2
                `}
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt="Featured project"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={false}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
