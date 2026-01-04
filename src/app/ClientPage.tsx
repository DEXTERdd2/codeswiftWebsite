'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Hero } from "@/components/codeswift/Hero";
import { Services } from "@/components/codeswift/Services";
import { TrustedBy } from "@/components/codeswift/TrustedBy";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Leadership } from "@/components/leadership";
import { PortfolioNew } from "@/components/portfolio-new";
import { ContactForm } from "@/components/contact-form";
import QuoteCTA from "@/components/QuoteCTA";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function ClientPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    // Make cursor immediately visible
    cursor.style.opacity = '1';
    cursor.style.transition = 'opacity 0.3s ease, transform 0.15s ease-out';
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursor) return;
      
      // Update cursor position with minimal delay
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

      // Handle hover effects
      const target = e.target as HTMLElement;
      const isInteractive = target?.matches?.('a, button, [role="button"], .cursor-pointer, input, textarea, select, a *');
      
      if (isInteractive) {
        cursor.classList.add('hover');
      } else {
        cursor.classList.remove('hover');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    };
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#B48CDE] to-black">
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-[#B48CDE] border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden text-white relative bg-transparent" style={{
      background: 'transparent',
    }}>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/HomePageBackground.webp"
          alt="Home background"
          fill
          className="object-cover hero-bg"
          style={{ objectPosition: 'center 90px' }}
          loading="eager"
          priority={true}
          sizes="100vw"
        />
      </div>

      {/* Subtle overlay for contrast (above image, behind page content) */}
      <div className="absolute inset-0 z-[-9] pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Custom Cursor */}
      <div 
        id="custom-cursor" 
        className="fixed w-6 h-6 pointer-events-none z-[9999]"
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: 'rgba(159, 122, 234, 0.8)',
          border: '2px solid white',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          transition: 'transform 0.15s ease-out, width 0.2s, height 0.2s, background-color 0.2s',
          willChange: 'transform',
          opacity: 0,
          zIndex: 9999
        }}
      ></div>

      {/* Speech Bubble - Removed for now to simplify */}
      
      <main>
        <Hero />
        <div className="mt-36" />
        <TrustedBy />
        <Services />
        <WhyChooseUs />
        <PortfolioNew />
        <Leadership />
        <QuoteCTA />
        <FAQ />
      </main>
      <Footer />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        /* Default cursor restored */
        html, body {
          cursor: auto;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          background: transparent;
          color: #ffffff;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        /* Interactive Elements */
        a, button, .cursor-pointer {
          position: relative;
          transition: all 0.3s ease;
        }
        
        a:hover, button:hover, .cursor-pointer:hover {
          color: #B48CDE;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(180, 140, 222, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: #B48CDE;
          border-radius: 4px;
        }

        /* Background image object-position adjustments for different sizes (moved down) */
        .hero-bg {
          object-position: center 190px;
        }

        /* Laptop widths: move image down a bit */
        @media (min-width: 1025px) and (max-width: 1440px) {
          .hero-bg {
            object-position: center 180px;
          }
        }

        @media (max-width: 1024px) {
          .hero-bg {
            object-position: center 190px;
          }
        }

        @media (max-width: 640px) {
          .hero-bg {
            object-position: center 130px;
          }
        }
      `}</style>
    </div>
  );
}