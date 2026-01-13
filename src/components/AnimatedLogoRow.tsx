import React from "react";

const logos = [
  { src: "/images/acme1.png", alt: "Acme Corp" },
  { src: "/images/quantum1.png", alt: "Quantum" },
  { src: "/images/echo1.png", alt: "Echo Valley" },
  { src: "/images/celestia1.png", alt: "Celestial" },
  { src: "/images/pulse1.png", alt: "PULSE" },
  { src: "/images/apex1.png", alt: "APEX" },
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
            className="mx-8 h-9 opacity-60 flex-shrink-0"
            draggable={false}
            onError={e => {
              // fallback for missing SVG/PNG
              (e.target as HTMLImageElement).src = '/images/placeholder.png';
            }}
          />
        ))}
      </div>
    </div>
  );
}
