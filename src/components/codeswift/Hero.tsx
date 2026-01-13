
import Image from 'next/image';
import { useHeaderMenu } from "@/context/HeaderMenuContext";

export function Hero({ onContactClick }: { onContactClick?: () => void }) {
    const { setServicesOpen } = useHeaderMenu();
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-transparent pt-32 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-36 md:pb-48 lg:pb-56 flex items-center justify-center min-h-[420px] sm:min-h-[520px] overflow-hidden"
    >

      {/* Floating 3D assets */}
      <div className="absolute left-4 bottom-16 z-10 w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-64 lg:h-64">
        <Image
          src="/images/cursor.png"
          alt="Decorative arrow"
          fill
          className="object-contain animate-float"
          priority
        />
      </div>
      <div className="absolute right-4 bottom-16 z-10 w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-64 lg:h-64">
        <Image
          src="/images/message1.png"
          alt="Decorative bubble"
          fill
          className="object-contain animate-float-delay"
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-screen-xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] font-black tracking-[-0.04em]">
          <span className="block">
            <span className="text-white">Innovative </span>
            <span className="text-[#8B5CF6]">Software</span>
          </span>
          <span className="block">
            <span className="text-[#8B5CF6]">Solutions</span>
            <span className="text-white"> for the future</span>
          </span>
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          At CodeSwift, we deliver tailored IT solutions that drive business growth. With expertise in software development, cloud services, and IT consulting.
        </p>

        <div className="mt-20 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 w-full items-center z-20 relative">
          <button
            className="w-32 sm:w-36 md:w-44 lg:w-56 px-0 py-3.5 bg-white text-black text-xs sm:text-sm md:text-base lg:text-lg font-semibold rounded-full hover:-translate-y-[2px] transition-all duration-200 mb-2 sm:mb-0"
            onClick={onContactClick}
          >
            Contact Us
          </button>
          <button
            className="w-32 sm:w-36 md:w-44 lg:w-56 px-0 py-3.5 relative rounded-full text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold bg-white/0 hover:bg-white/6 transition-all duration-200 border border-white/18 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border after:border-white/12 after:pointer-events-none mb-2 sm:mb-0"
            onClick={() => setServicesOpen(true)}
          >
            View All Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
