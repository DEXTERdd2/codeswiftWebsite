"use client"

import { useState } from "react"
import { Send } from "lucide-react"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
          {/* Left side - Text content */}
          <div className="text-white space-y-6">
            <h2
              className="font-black leading-tight text-4xl md:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Looking for a <span className="text-[#A56CFF]">trusted</span>
              <br /> tech partner? <span className="text-white">Let's</span>
              <br /> connect!
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              With expertise in software development, AI design, and cloud, we build systems that are secure,
              scalable, and future-ready. Wherever you are in the world, we're here to turn your vision into reality.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/18 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#6b3fd6_0%,#1a0f35_55%,#06030a_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.35),transparent_60%)]" />
            <div className="relative p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-[#0F0B18] border border-white/12 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-[#0F0B18] border border-white/12 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-[#0F0B18] border border-white/12 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-[#0F0B18] border border-white/12 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-[#0F0B18] border border-white/12 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-white mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-[#0F0B18] border border-white/12 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-white mb-2">
                      Region
                    </label>
                    <input
                      type="text"
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-[#0F0B18] border border-white/12 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Region"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-11 px-4 bg-[#0F0B18] border border-white/12 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-white mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-[#0F0B18] border border-white/12 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Project Details"
                    required
                  />
                </div>

                <div className="pt-1 flex justify-center">
                  <button
                    type="submit"
                    className="w-full max-w-sm flex justify-center items-center px-10 py-4 text-lg font-semibold text-white bg-[#161616] border border-white/12 rounded-xl shadow-[0_18px_60px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 transition-all duration-200"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
