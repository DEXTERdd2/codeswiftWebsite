import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl -z-10" />
      
      {/* Cursor Image - Left side */}
      <div className="absolute left-[-50px] top-1/3 -translate-y-1/2 -z-10 w-[200px] h-[200px]">
        <Image 
          src="/images/cursor.png" 
          alt="Cursor"
          fill
          className="object-contain opacity-80 animate-float"
          priority
        />
      </div>
      
      {/* Speech Bubble - Right side */}
      <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 -z-10 w-[250px] h-[250px]">
        <Image 
          src="/images/speech-bubble.png" 
          alt="Speech Bubble"
          fill
          className="object-contain opacity-80 animate-float-delay"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8">
            Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Software Solutions</span> for the future
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            At CodeSwift, we deliver tailored IT solutions that drive business growth. With expertise in software development, cloud services, and IT consulting.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-20">
            <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-lg">
              Get Quote
            </button>
            <button className="bg-transparent border-2 border-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-900/30 transition-all transform hover:-translate-y-1 text-lg">
              View All Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
