import Image from 'next/image';

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-black pt-28 pb-24 flex items-center justify-center min-h-[760px]"
    >
      {/* Layered gradients to mirror the Figma hero */}
      {/* Top background using provided Figma gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #000000 0%, #200D42 36.21%, #4F21A1 68.68%, #8752FA 86.54%)",
        }}
      />

      {/* Bottom arc / horizon (simple black ellipse over purple gradient) */}
      <div className="absolute inset-x-[-18%] bottom-[-12%] h-[520px] bg-[radial-gradient(ellipse_at_bottom,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.96)_32%,_rgba(0,0,0,0.75)_60%,_transparent_90%)]" />
      <div className="absolute inset-x-[-10%] bottom-[4%] h-[68px] bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.55)_0%,_transparent_80%)] opacity-70" />

      {/* Floating 3D assets */}
      <div className="absolute left-2 md:left-10 top-[60%] -translate-y-1/2 w-36 h-36 md:w-52 md:h-52">
        <Image
          src="/images/cursor.png"
          alt="Decorative arrow"
          fill
          className="object-contain drop-shadow-[0_26px_80px_rgba(130,104,255,0.5)] animate-float"
          priority
        />
      </div>
      <div className="absolute right-[-10px] md:right-4 top-[60%] -translate-y-1/2 w-44 h-44 md:w-64 md:h-64">
        <Image
          src="/images/message1.png"
          alt="Decorative bubble"
          fill
          className="object-contain drop-shadow-[0_30px_90px_rgba(130,104,255,0.55)] animate-float-delay"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[50px] sm:text-[68px] md:text-[82px] lg:text-[92px] leading-[1.02] font-black text-white drop-shadow-[0_20px_60px_rgba(0,0,0,0.85)] tracking-[-0.04em]">
          <span className="block text-white">
            Innovative {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F472FF] via-[#C084FC] to-[#8B5CF6]">
              Software
            </span>
          </span>
          <span className="block text-white">Solutions for the future</span>
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
