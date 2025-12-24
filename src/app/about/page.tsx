"use client";
import Image from "next/image";
import { Leadership } from "@/components/leadership";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { main } from "framer-motion/client";
 
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
     
      <main className="min-h-screen bg-gradient-to-b from-[#0c0c12] via-[#150c2d] to-[#3c1f74] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-8 text-white mt-20 md:mt-24">About Us</h2>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-20 leading-tight">
              Innovative Solutions for the <span className="text-[#8f6fff]">Future</span>
            </h1>
            <div className="text-xs sm:text-sm text-white/60 mb-2 sm:mb-6">Trusted by the world’s most innovative teams</div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-28">
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
        <section className="max-w-6xl mx-auto px-2 sm:px-4 mt-8 sm:mt-10">
          <h2 className="font-bold text-center mb-4 sm:mb-6 text-lg sm:text-2xl md:text-4xl" style={{fontFamily: 'DM Sans, sans-serif', color: '#fff'}}>
            Our <span style={{ color: '#8f6fff' }}>Mission</span>
          </h2>
          <p className="text-center text-sm sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-10 max-w-2xl mx-auto">
            We build, automate, and amplify, helping businesses move faster
            <span className="block mt-2">and communicate more effectively.</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 md:gap-20 mb-8 sm:mb-14 mt-8 sm:mt-24">
            {missionCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/30 bg-white/5 px-4 sm:px-8 md:px-10 py-6 sm:py-10 md:py-12 text-center flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-[95vw] sm:max-w-[480px] md:max-w-[400px] mx-auto h-auto min-h-[260px] sm:min-h-[320px] md:min-h-[420px]">
                <Image src={card.icon} alt={card.title} width={120} height={120} className="mb-3 sm:mb-4 h-16 sm:h-24 md:h-40 w-16 sm:w-24 md:w-40 object-contain drop-shadow-lg" />
                <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-1 sm:mb-2 md:mb-4 text-white">{card.title}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-xs mx-auto">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="max-w-6xl mx-auto px-2 sm:px-4 mt-12 sm:mt-24">
          <h2 className="font-bold text-center mb-4 sm:mb-6 text-lg sm:text-2xl md:text-4xl" style={{fontFamily: 'DM Sans, sans-serif', color: '#fff'}}>
            Our <span style={{ color: '#8f6fff' }}>Vision</span>
          </h2>
          <p className="text-center text-sm sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-12 max-w-3xl mx-auto">
            To empower businesses worldwide through smart, adaptive digital<br />
            and AI solutions, as a trusted global partner
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-12 md:gap-20 mb-8 sm:mb-14 rounded-2xl border border-white/30 bg-white/10 overflow-hidden px-4 sm:px-8 py-4 sm:py-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {visionStats.map((stat, idx) => (
              <div key={stat.label} className="flex flex-row items-stretch w-full">
                <div className="flex-1 flex flex-col items-center justify-center px-2 sm:px-6 md:px-10 py-4 sm:py-8 md:py-14 text-center">
                  <div className="text-xl sm:text-3xl md:text-6xl font-extrabold text-white mb-2 sm:mb-4 tracking-tight" style={{ fontFamily: 'inherit' }}>{stat.value}</div>
                  <div className="text-base sm:text-lg md:text-2xl font-light text-white/80 mb-2 sm:mb-4 tracking-tight" style={{ fontFamily: 'inherit' }}>{stat.label}</div>
                  <div className="text-xs sm:text-base font-light text-white/60 max-w-xs mx-auto tracking-tight" style={{ fontFamily: 'inherit' }}>{stat.desc}</div>
                </div>
                {idx < visionStats.length - 1 && (
                  <div className="hidden md:flex items-center" key={stat.label + '-divider'}>
                    <div className="h-10 sm:h-20 md:h-40 w-px bg-white mx-2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-6xl mx-auto px-2 sm:px-4 mt-8 sm:mt-10">
          <h2 className="text-lg sm:text-2xl md:text-5xl font-extrabold text-center mb-2 sm:mb-4">
            Our <span className="text-[#8f6fff]">Core Values</span>
          </h2>
          <p className="text-center text-sm sm:text-lg md:text-lg text-white/90 mb-2 sm:mb-8">
            We are committed to delivering excellence, fostering innovation, and building long-term partnerships that empower businesses to succeed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 md:gap-20 mb-8 sm:mb-14">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-2xl border border-white/20 bg-white/5 p-4 sm:p-8 text-center flex flex-col items-center shadow-lg w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[400px] mx-auto h-auto min-h-[180px] sm:min-h-[320px] md:min-h-[369px]">
                <Image src={value.icon} alt={value.title} width={80} height={80} className="mb-2 sm:mb-6 h-12 sm:h-24 md:h-24 w-12 sm:w-24 md:w-24 object-contain" />
                <h3 className="text-base sm:text-lg md:text-3xl font-extrabold mb-1 sm:mb-2">{value.title}</h3>
                <p className="text-white/80 text-xs sm:text-base md:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Presence */}
        <section className="max-w-6xl mx-auto px-2 sm:px-4 mt-8 sm:mt-28">
          <h2 className="text-lg sm:text-3xl md:text-5xl font-bold text-center mb-2 sm:mb-4">
            Our <span className="text-[#8f6fff]">Global Presence</span>
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-white/90 mb-2 sm:mb-8">
            We are committed to delivering excellence, fostering innovation, and building long-term partnerships that empower businesses to succeed.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-14 md:gap-28 mb-8 sm:mb-14">
            {globalPresence.map((loc, idx) => (
              <div key={loc.label} className="rounded-2xl overflow-hidden relative shadow-lg w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[750px] min-h-[180px] sm:min-h-[320px] md:min-h-[450px] aspect-[5/6] mx-auto">
                <Image 
                  src={loc.image} 
                  alt={loc.label} 
                  fill
                  className="object-cover absolute inset-0 w-full h-full" 
                  style={{ zIndex: 0 }}
                />
                {/* Overlay Shade */}
                <div className="absolute inset-0 bg-purple-900 opacity-40 z-10" />
                {/* Country Name */}
                <div className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6 bg-[#8f6fff]/30 backdrop-blur-sm rounded-lg px-2 sm:px-6 py-1 sm:py-2 z-20">
                  <span className="text-white text-base sm:text-2xl md:text-3xl font-bold tracking-tight" style={{fontFamily:'DM Sans, sans-serif'}}>{loc.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Leadership />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  );
}