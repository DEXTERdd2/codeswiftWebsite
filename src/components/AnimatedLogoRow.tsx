import React from "react";

const logos = [
  { src: "/CompanyLogos/pngegg1.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg2.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg3.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg4.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg5.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg6.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg7.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg8.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg9.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg10.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg11.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg12.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg13.svg", alt: "company logo" },
    { src: "/CompanyLogos/pngegg14.svg", alt: "company logo" },
     

];

export default function AnimatedLogoRow() {
  return (
    <div className="overflow-hidden w-full bg-transparent py-4">
      <div className="flex marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="mx-10 h-12 opacity-60 flex-shrink-0"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
