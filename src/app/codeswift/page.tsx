"use client";

import { Header } from '@/components/codeswift/Header';
import { Hero } from '@/components/codeswift/Hero';
import { Clients } from '@/components/codeswift/Clients';
import { Services } from '@/components/codeswift/Services';
import { WhyChooseUs } from '@/components/why-choose-us';

export default function CodeSwiftPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-transparent text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Clients />
      </main>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: #000000;
          color: #ffffff;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 6s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
