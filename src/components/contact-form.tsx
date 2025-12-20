"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import Image from "next/image"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    region: "",
    subject: "",
    projectDetails: ""
  })

  const projectOptions = [
    "UI/UX Design",
    "Software Development",
    "AI Solutions",
    "Digital Marketing",
    "Devops Solutions",
    "Quality Assurance",
  ]

  const [selectedProjects, setSelectedProjects] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const toggleProject = (label: string) => {
    setSelectedProjects(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { ...formData, projectTypes: selectedProjects })
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c12] via-[#150c2d] to-[#3c1f74]" />
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(119,72,255,0.08),transparent_35%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 items-start">
          {/* Form card */}
          <div className="relative rounded-[26px] p-[1.5px] bg-gradient-to-br from-white/20 via-white/12 to-white/6 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <div className="relative rounded-[24px] bg-[linear-gradient(180deg,rgba(24,22,36,0.9)_0%,rgba(39,25,77,0.9)_55%,rgba(20,12,33,0.92)_100%)] border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(255,255,255,0.06),transparent_32%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_40%_82%,rgba(0,0,0,0.35),transparent_60%)]" />
              <div className="relative p-8 md:p-10 space-y-6">
                <div className="text-white text-2xl md:text-3xl font-semibold">Get Quote Form Us</div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="h-12 w-full rounded-lg bg-transparent border border-white/20 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="h-12 w-full rounded-lg bg-transparent border border-white/20 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="h-12 w-full rounded-lg bg-transparent border border-white/20 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]"
                    />
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
                      className="h-12 w-full rounded-lg bg-transparent border border-white/20 px-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]"
                    />
                  </div>

                  <div>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project"
                      className="w-full rounded-lg bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#8f6fff]"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="text-white font-medium">Project type</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {projectOptions.map(option => {
                        const active = selectedProjects.includes(option)
                        return (
                          <button
                            type="button"
                            key={option}
                            onClick={() => toggleProject(option)}
                            className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                              active
                                ? "border-white/70 bg-white/15 text-white"
                                : "border-white/25 text-white/80 hover:border-white/50 hover:text-white"
                            }`}
                          >
                            {option}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-start">
                    <button
                      type="submit"
                      className="min-w-[140px] rounded-lg bg-[#6e46ff] px-6 py-3 text-base font-semibold text-white shadow-[0_18px_60px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-[1px]"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Submit
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="relative flex flex-col h-full text-white">
            <div className="space-y-6">
              <h2
                className="font-black leading-tight text-4xl md:text-5xl lg:text-6xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                Looking for a <span className="text-[#8f6fff]">trusted</span> tech partner? <br /> Let&apos;s connect!
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                With expertise in software development, AI design, and cloud, we build systems that are secure,
                scalable, and future-ready. Wherever you are in the world, we&apos;re here to turn your vision into reality.
              </p>
            </div>

            <div className="relative mt-10 lg:mt-auto flex justify-end lg:justify-start xl:justify-end">
              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[300px] lg:h-[300px]">
                <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.12),transparent_55%)] blur-2xl" />
                <Image
                  src="/images/cube-helix3.png"
                  alt="Colorful cube"
                  fill
                  sizes="(min-width: 1024px) 300px, 45vw"
                  className="object-contain drop-shadow-[0_25px_55px_rgba(0,0,0,0.45)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
