
"use client";
import { Header } from "@/components/codeswift/Header";
import Image from "next/image";

const missionCards = [
  {
    icon: "/images/mission-icon1.png.png",
    title: "Innovative Solutions",
    desc: "We provide innovative solutions that tackle challenges, drive business growth, and help organizations stay ahead in a rapidly evolving digital world.",
  },
  {
    icon: "/images/mission-icon2.png",
    title: "Client Success",
    desc: "We are committed to ensuring our clients’ success by providing tailored solutions that drive measurable results and foster long-term growth.",
  },
  {
    icon: "/images/mission-icon3.png.png",
    title: "Ongoing Support",
    desc: "We provide continuous support to ensure seamless operations, address challenges, and help your business maintain sustained growth and success.",
  },
];

const visionStats = [
  {
    value: "150+",
    label: "Completed Projects",
    desc: "Delivering quality results with over 150 successful projects globally.",
  },
  {
    value: "500+",
    label: "Worldwide Partners",
    desc: "Trusted by 500+ clients, delivering innovative solutions that exceed expectations.",
  },
  {
    value: "98+",
    label: "Positive Feedback",
    desc: "Proven excellence with a 98% satisfaction rate, delivering top tech solutions that drive success.",
  },
];

const coreValues = [
  {
    icon: "/images/Core-Value-icon1.png",
    title: "Clear Is Kind",
    desc: "Honest, transparent communication keeps everyone aligned.",
  },
  {
    icon: "/images/Core-Value-icon2.png",
    title: "Overdeliver on the Promise",
    desc: "Exceeding expectations is our standard, going beyond what’s assured.",
  },
  {
    icon: "/images/Core-Value-icon3.png",
    title: "Trusted Pair of Hands",
    desc: "Dependable and steadfast, we’re here when it matters most.",
  },
];

const globalPresence = [
  {
    image: "/images/Global-press1.png",
    label: "Pakistan",
  },
  {
    image: "/images/Global-press2.png",
    label: "America",
  },
];


export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#0c0c12] via-[#150c2d] to-[#3c1f74] text-white py-60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">About Us</h2>
            <h1 className="text-4xl md:text-5xl font-black mb-20 leading-tight">
              Innovative Solutions for the <span className="text-[#8f6fff]">Future</span>
            </h1>
            <div className="text-sm text-white/60 mb-6">Trusted by the world’s most innovative teams</div>
            <div className="flex flex-wrap justify-center gap-8 mb-28">
              <Image src="/images/acme1.png" alt="Acme Corp" width={100} height={32} className="h-8 w-auto object-contain opacity-80" />
              <Image src="/images/quantum1.png" alt="Quantum" width={100} height={32} className="h-8 w-auto object-contain opacity-80" />
              <Image src="/images/echo1.png" alt="Echo Valley" width={100} height={32} className="h-8 w-auto object-contain opacity-80" />
              <Image src="/images/celestia1.png" alt="Celestial" width={100} height={32} className="h-8 w-auto object-contain opacity-80" />
              <Image src="/images/pulse1.png" alt="Pulse" width={100} height={32} className="h-8 w-auto object-contain opacity-80" />
              <Image src="/images/apex1.png" alt="Apex" width={100} height={32} className="h-8 w-auto object-contain opacity-80" />
            </div>
          </div>
        </div>

        {/* Mission */}
        <section className="max-w-5xl mx-auto px-4 mt-10">
          <h2
            className="font-bold text-center mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '1.1',
              letterSpacing: '-0.075em',
              width: '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
              color: '#fff',
            }}
          >
            Our <span style={{ color: '#8f6fff' }}>Mission</span>
          </h2>
          <p className="text-center text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We build, automate, and amplify, helping businesses move faster
            <span className="block mt-2">and communicate more effectively.</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-10 mt-20">
            {missionCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/30 bg-white/5 px-5 py-8 text-center flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl w-[320px] h-[420px] mx-auto"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={170}
                  height={170}
                  className="mb-4 h-40 w-40 object-contain drop-shadow-lg"
                />
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  {card.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm max-w-xs mx-auto">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="max-w-6xl mx-auto px-4 mt-24">
          <h2
            className="font-bold text-center mb-6"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: '48px',
              lineHeight: '1.1',
              letterSpacing: '-0.075em',
              width: '320px',
              marginLeft: 'auto',
              marginRight: 'auto',
              color: '#fff',
            }}
          >
            Our <span style={{ color: '#8f6fff' }}>Vision</span>
          </h2>
          <p className="text-center text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            To empower businesses worldwide through smart, adaptive digital<br />
            and AI solutions, as a trusted global partner
          </p>
          <div
            className="flex flex-col md:flex-row justify-center items-stretch gap-0 mb-20 rounded-2xl border border-white/30 bg-white/10 overflow-hidden px-2 py-2"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {visionStats.map((stat, idx) => (
              <>
                <div
                  key={stat.label}
                  className="flex-1 flex flex-col items-center justify-center px-10 py-14 text-center"
                >
                  <div className="text-6xl font-extrabold text-white mb-4 tracking-tight" style={{ fontFamily: 'inherit' }}>{stat.value}</div>
                  <div className="text-2xl font-light text-white/80 mb-4 tracking-tight" style={{ fontFamily: 'inherit' }}>{stat.label}</div>
                  <div className="text-base font-light text-white/60 max-w-xs mx-auto tracking-tight" style={{ fontFamily: 'inherit' }}>{stat.desc}</div>
                </div>
                {idx < visionStats.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <div className="h-40 w-px bg-white mx-2" style={{ minHeight: '180px' }} />
                  </div>
                )}
              </>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-5xl mx-auto px-4 mt-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
            Our <span className="text-[#8f6fff]">Core Values</span>
          </h2>
          <p className="text-center text-lg text-white/90 mb-8">
            We are committed to delivering excellence, fostering innovation, and building long-term partnerships that empower businesses to succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {coreValues.map((value) => (
                <div
                  key={value.title}
                  className={
                    "rounded-2xl border border-white/20 bg-white/5 p-8 text-center flex flex-col items-center shadow-lg" +
                    (value.title === "Clear Is Kind" ? " -ml-8 md:-ml-16" : value.title === "Trusted Pair of Hands" ? " ml-8 md:ml-16" : "")
                  }
                  style={{ width: '350px', height: '369px', opacity: 1 }}
                >
                <Image src={value.icon} alt={value.title} width={100} height={100} className="mb-6 h-24 w-24 object-contain" />
                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">{value.title}</h3>
                <p className="text-white/80 text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Presence */}
        <section className="max-w-5xl mx-auto px-4 mt-10">
          <h2 className="text-5xl md:text-4xl font-bold text-center mb-2">
              Our <span className="text-[#8f6fff]">Global Presence</span>
          </h2>
          <p className="text-center text-lg text-white/90 mb-8">
            We are committed to delivering excellence, fostering innovation, and building long-term partnerships that empower businesses to succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {globalPresence.map((loc) => (
              <div key={loc.label} className="rounded-2xl overflow-hidden relative shadow-lg">
                <Image src={loc.image} alt={loc.label} width={400} height={300} className="w-full h-72 object-cover" />
                <div className="absolute bottom-4 left-4 bg-black/40 px-4 py-2 rounded-lg text-lg font-semibold text-white backdrop-blur">
                  {loc.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-4 mt-10">
        <h2 className="text-6xl md:text-6xl font-bold text-center mb-8">
          Our <span className="text-[#8f6fff]">Mission</span>
        </h2>
        <p className="text-center text-2xl md:text-4xl text-white/90 mb-8 max-w-3xl md:max-w-4xl mx-auto">
          We build, automate, and amplify, helping businesses move faster
          <span className="block mt-2">and communicate more effectively.</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {missionCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center flex flex-col items-center shadow-lg">
              <Image src={card.icon} alt={card.title} width={64} height={64} className="mb-4 h-16 w-16 object-contain" />
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-white/80 text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-5xl mx-auto px-4 mt-10">
        <h1 className="  font-bold text-center mb-2">
          Our <span className="text-[#8f6fff]">Vision</span>
        </h1>
        <p className="text-center text-lg text-white/90 mb-8">
          To empower businesses worldwide through smart, adaptive digital and AI solutions, as a trusted global partner
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visionStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center flex flex-col items-center shadow-lg">
              <div className="text-4xl font-black text-[#8f6fff] mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-white/80 text-base">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-5xl mx-auto px-4 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Our <span className="text-[#8f6fff]">Core Values</span>
        </h2>
        <p className="text-center text-lg text-white/90 mb-8">
          We are committed to delivering excellence, fostering innovation, and building long-term partnerships that empower businesses to succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {coreValues.map((value) => (
            <div key={value.title} className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center flex flex-col items-center shadow-lg">
              <Image src={value.icon} alt={value.title} width={64} height={64} className="mb-4 h-16 w-16 object-contain" />
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-white/80 text-base">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="max-w-5xl mx-auto px-4 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Our <span className="text-[#8f6fff]">Global Presence</span>
        </h2>
        <p className="text-center text-lg text-white/90 mb-8">
          We are committed to delivering excellence, fostering innovation, and building long-term partnerships that empower businesses to succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {globalPresence.map((loc) => (
            <div key={loc.label} className="rounded-2xl overflow-hidden relative shadow-lg">
              <Image src={loc.image} alt={loc.label} width={400} height={300} className="w-full h-72 object-cover" />
              <div className="absolute bottom-4 left-4 bg-black/40 px-4 py-2 rounded-lg text-lg font-semibold text-white backdrop-blur">
                {loc.label}
              </div>
            </div>
          ))}
        </div>
      </section>
}
