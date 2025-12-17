"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "./ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Working with CodeSwift was a game-changer for our business. Their team delivered exceptional results and were a pleasure to work with throughout the entire process.",
    avatar: "/avatar1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateX",
    content: "The quality of work and attention to detail was outstanding. They understood our vision and brought it to life better than we could have imagined.",
    avatar: "/avatar2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthLabs",
    content: "Professional, responsive, and incredibly talented team. Our new website has significantly increased our conversion rates and online presence.",
    avatar: "/avatar3.jpg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, StartupHub",
    content: "CodeSwift delivered our project on time and within budget. Their technical expertise and creative solutions were exactly what we needed.",
    avatar: "/avatar4.jpg"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear from businesses that have transformed their digital presence with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <Quote className="h-12 w-12 text-blue-100 absolute -top-6 left-8" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-400">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-blue-600">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute -bottom-6 right-8 flex space-x-2">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full bg-white shadow-md hover:bg-gray-50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full bg-white shadow-md hover:bg-gray-50"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Company logos */}
        <div className="mt-20">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center px-4">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5', 'Company 6'].map((company, index) => (
              <div key={index} className="h-12 w-full bg-gray-100 rounded-md flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <span className="text-gray-400 font-medium text-sm">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
