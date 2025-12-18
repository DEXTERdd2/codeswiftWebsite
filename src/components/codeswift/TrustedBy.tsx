const brands = [
  { name: "Acme Corp", src: "/images/acme1.png", width: 138 },
  { name: "Quantum", src: "/images/quantum1.png", width: 126 },
  { name: "Echo Valley", src: "/images/echo1.png", width: 142 },
  { name: "Celestial", src: "/images/celestia1.png", width: 124 },
  { name: "PULSE", src: "/images/pulse1.png", width: 112 },
  { name: "APEX", src: "/images/apex1.png", width: 110 },
];

export function TrustedBy() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.7)_0%,_transparent_70%)]" />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.32em] text-white/60">
          Trusted by the world's most innovative teams
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center">
              <img
                src={brand.src}
                alt={brand.name}
                style={{ width: `${brand.width}px`, height: "auto" }}
                className="opacity-70 hover:opacity-90 transition-opacity drop-shadow-[0_6px_18px_rgba(0,0,0,0.26)]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
