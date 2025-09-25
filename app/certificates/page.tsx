'use client'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import { Award, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

const certificates = [
  {
    id: 1,
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2023',
    description: 'Certified in developing and maintaining applications on AWS',
    credentialId: 'AWS-123456789'
  },
  {
    id: 2,
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    description: 'Advanced React development and best practices',
    credentialId: 'META-987654321'
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: '2022',
    description: 'Complete full-stack web development curriculum',
    credentialId: 'FCC-456789123'
  },
]

export default function Certificates() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-blue-500/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certificates
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional certifications validating my expertise
            </p>
          </div>
          
          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/20 hover:border-blue-500/30 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                    <p className="text-gray-300 mb-3">{cert.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.date}
                      </div>
                      <div>
                        ID: {cert.credentialId}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}