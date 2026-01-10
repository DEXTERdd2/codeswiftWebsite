"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

type GlowingOrbProps = {
  x: number
  y: number
  size: number
  color: string
  delay?: number
  opacity?: number
}

const GlowingOrb = ({ x, y, size, color, delay = 0, opacity = 0.1 }: GlowingOrbProps) => {
  const controls = useAnimation()
  
  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: [opacity * 0.5, opacity, opacity * 0.5],
        transition: {
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      })
    }
    animate()
  }, [controls, opacity])

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0,
        filter: 'blur(40px)'
      }}
      animate={controls}
    />
  )
}

export function Background() {
  // Main background gradient
  const gradients = [
    // Large purple glow in the center
    { x: 50, y: 30, size: 80, color: '#7C3AED', opacity: 0.15 },
    // Smaller accent glows
    { x: 20, y: 20, size: 40, color: '#9F7AEA', opacity: 0.1 },
    { x: 80, y: 60, size: 60, color: '#B48CDE', opacity: 0.1 },
    { x: 30, y: 70, size: 50, color: '#7C3AED', opacity: 0.08 },
  ]

  // Subtle grid pattern
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{size:number,left:number,top:number,delay:number}[]>([]);

  useEffect(() => {
    setMounted(true);
    const p = Array.from({ length: 8 }).map(() => ({
      size: Math.random() * 4 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setParticles(p);
  }, []);

  const GridPattern = () => (
    <div 
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
      }}
    />
  )

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
      
      {/* Grid pattern */}
      <GridPattern />
      
      {/* Glowing orbs */}
      {gradients.map((gradient, i) => (
        <GlowingOrb key={i} {...gradient} />
      ))}
      
      {/* Subtle animated particles (client-only) */}
      {mounted && particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            boxShadow: 'none'
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: p.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/80"></div>
    </div>
  )
}
