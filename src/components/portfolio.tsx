"use client"

import { useState } from "react"
import { Code, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store with payment integration and inventory management.",
    tags: ["Web Development", "UI/UX", "E-commerce"],
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with team collaboration.",
    tags: ["Mobile App", "Productivity", "SaaS"],
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing creative work and professional skills.",
    tags: ["Web Design", "Portfolio", "Responsive"],
    image: "/project3.jpg"
  },
  {
    id: 4,
    title: "Restaurant Booking",
    description: "Online reservation system for restaurants with table management.",
    tags: ["Web App", "Booking", "Hospitality"],
    image: "/project4.jpg"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts, nutrition, and health metrics.",
    tags: ["Mobile App", "Health", "Fitness"],
    image: "/project5.jpg"
  },
  {
    id: 6,
    title: "Corporate Website",
    description: "Professional website for a corporate business with modern design.",
    tags: ["Web Design", "Corporate", "Branding"],
    image: "/project6.jpg"
  }
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3)
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Our Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Recent Projects
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore our latest work and see how we've helped businesses grow
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Web Design", "Mobile App", "UI/UX", "Branding"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 bg-gray-100 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Project
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <Code className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.tags[0]} • {project.tags[1]}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={loadMore}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
            >
              Load More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
