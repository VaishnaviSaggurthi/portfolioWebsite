'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CommandNavigation from '../components/CommandNavigation'
import Link from 'next/link'
import { ExternalLink, Github, Filter, Play } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  image: string
  video?: string
  liveUrl: string
  githubUrl: string
  technologies: string[]
  tags: string[]
  featured: boolean
  completedAt: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [selectedTag, setSelectedTag] = useState<string>('All')
  const [isLoading, setIsLoading] = useState(true)
  
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    // Simulate API call
    const loadProjects = async () => {
      try {
        const response = await fetch('/data/projects.json')
        const data = await response.json()
        setProjects(data)
        setFilteredProjects(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to load projects:', error)
        setIsLoading(false)
      }
    }

    loadProjects()
  }, [])

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))]

  const filterProjects = (tag: string) => {
    setSelectedTag(tag)
    if (tag === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(p => p.tags.includes(tag)))
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-300 flex items-center justify-center">
        <div className="loading w-8 h-8 border-2 border-accent border-t-transparent rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <CommandNavigation />
      
      {/* Header */}
      <section ref={headerRef} className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of innovative solutions built with modern technologies
            </p>
          </motion.div>

          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Filter className="w-5 h-5 text-accent mr-2" />
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => filterProjects(tag)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-accent text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover-lift group"
              >
                {/* Project Image/Video */}
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
                  {project.video ? (
                    <div className="relative w-full h-full">
                      <video
                        className="w-full h-full object-cover"
                        poster={project.image}
                        muted
                        loop
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                      <span className="text-4xl">🚀</span>
                    </div>
                  )}
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Individual Project Pages CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Want to see detailed case studies? Each project has its own dedicated page.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {filteredProjects.slice(0, 3).map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <motion.button
                    className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.title} Details
                  </motion.button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}