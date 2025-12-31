import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-transparent pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-24 sm:pb-36 md:pb-44 lg:pb-56 flex items-center justify-center min-h-[760px]"
    >

      {/* Floating 3D assets */}
      <div className="absolute left-2 md:left-10 top-[85%] -translate-y-1/2 w-44 h-44 md:w-64 md:h-64 z-10">
        <Image
          src="/images/cursor.png"
          alt="Decorative arrow"
          fill
          className="object-contain drop-shadow-[0_30px_90px_rgba(130,104,255,0.55)] animate-float"
          priority
        />
      </div>
      <div className="absolute right-[-10px] md:right-4 top-[85%] -translate-y-1/2 w-44 h-44 md:w-64 md:h-64 z-10">
        <Image
          src="/images/message1.png"
          alt="Decorative bubble"
          fill
          className="object-contain drop-shadow-[0_30px_90px_rgba(130,104,255,0.55)] animate-float-delay"
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[50px] sm:text-[68px] md:text-[82px] lg:text-[92px] leading-[1.02] font-black drop-shadow-[0_20px_60px_rgba(0,0,0,0.85)] tracking-[-0.04em]">
          <span className="block">
            <span className="text-white">Innovative </span>
            <span className="text-[#8B5CF6]">Software</span>
          </span>
          <span className="block">
            <span className="text-[#8B5CF6]">Solutions</span>
            <span className="text-white"> for the future</span>
          </span>
        </h1>
        <p className="mt-7 text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          At CodeSwift, we deliver tailored IT solutions that drive business growth. With expertise in software development, cloud services, and IT consulting.
        </p>

        <div className="mt-11 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button className="px-11 py-3.5 bg-white text-black text-lg font-semibold rounded-full shadow-[0_22px_44px_rgba(0,0,0,0.28)] hover:-translate-y-[2px] transition-all duration-200">
            Contact Us
          </button>
          <button className="relative px-11 py-3.5 rounded-full text-white text-lg font-semibold bg-white/0 hover:bg-white/6 transition-all duration-200 border border-white/18 shadow-[inset_0_0_0_1px_rgba(127,99,255,0.28)] after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-white/12 after:pointer-events-none">
            View All Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
