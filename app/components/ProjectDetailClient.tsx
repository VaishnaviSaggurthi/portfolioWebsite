'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  video?: string
  liveUrl: string
  githubUrl: string
  technologies: string[]
  tags: string[]
  featured: boolean
  completedAt: string
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/projects">
              <motion.button
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-8"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </motion.button>
            </Link>

            <h1 className="text-4xl md:text-6xl font-black mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>Completed: {new Date(project.completedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Tag className="w-5 h-5" />
                <span>{project.tags.join(', ')}</span>
              </div>
            </div>

            <div className="flex gap-4 mb-12">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </motion.button>
              </a>
              
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-xl overflow-hidden mb-12"
          >
            {project.video ? (
              <video className="w-full h-auto" controls poster={project.image}>
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            )}
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-6">About This Project</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass p-6 rounded-xl h-fit"
            >
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="space-y-2">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="px-3 py-2 bg-gray-200 text-gray-800 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}