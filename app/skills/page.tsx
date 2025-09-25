'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import MatrixBackground from '../components/MatrixBackground'

const skillCategories = {
  frontend: {
    title: 'Frontend Development',
    icon: '🎨',
    color: '#61DAFB',
    skills: [
      { name: 'React/Next.js', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'Tailwind CSS', level: 88, icon: '🎨' },
      { name: 'Framer Motion', level: 85, icon: '🎭' },
      { name: 'Three.js', level: 80, icon: '🎮' },
      { name: 'Vue.js', level: 75, icon: '💚' },
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: '⚙️',
    color: '#339933',
    skills: [
      { name: 'Node.js', level: 92, icon: '🟢' },
      { name: 'Python', level: 88, icon: '🐍' },
      { name: 'Express.js', level: 90, icon: '🚀' },
      { name: 'PostgreSQL', level: 85, icon: '🐘' },
      { name: 'MongoDB', level: 82, icon: '🍃' },
      { name: 'GraphQL', level: 78, icon: '📊' },
    ]
  },
  devops: {
    title: 'DevOps & Cloud',
    icon: '☁️',
    color: '#FF9900',
    skills: [
      { name: 'AWS', level: 85, icon: '☁️' },
      { name: 'Docker', level: 88, icon: '🐳' },
      { name: 'Kubernetes', level: 75, icon: '⚓' },
      { name: 'CI/CD', level: 82, icon: '🔄' },
      { name: 'Terraform', level: 70, icon: '🏗️' },
      { name: 'Linux', level: 80, icon: '🐧' },
    ]
  },
  tools: {
    title: 'Tools & Others',
    icon: '🛠️',
    color: '#8A2BE2',
    skills: [
      { name: 'Git', level: 95, icon: '📝' },
      { name: 'VS Code', level: 98, icon: '💻' },
      { name: 'Figma', level: 80, icon: '🎨' },
      { name: 'Jest', level: 85, icon: '🧪' },
      { name: 'Webpack', level: 78, icon: '📦' },
      { name: 'Prisma', level: 82, icon: '🔺' },
    ]
  }
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  return (
    <div className="min-h-screen bg-dark-bg relative">
      <MatrixBackground />
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-neon-green glow-text">My</span>
              <span className="text-white"> Skills</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
            <div className="w-24 h-1 bg-neon-green mx-auto mt-6 animate-glow"></div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {Object.entries(skillCategories).map(([key, category]) => (
              <motion.button
                key={key}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-neon-green text-black neon-border'
                    : 'glass-effect text-white hover:text-neon-green border border-gray-600'
                }`}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-effect p-6 rounded-lg neon-border hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)',
                  y: -5
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-neon-green font-bold">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-neon-green to-neon-blue"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <motion.div
                    className="absolute top-0 left-0 h-3 rounded-full bg-white opacity-30"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    style={{ width: '20%' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-neon-green glow-text">Certifications</span>
              <span className="text-white"> & Achievements</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023', icon: '☁️' },
                { title: 'React Developer Certification', issuer: 'Meta', year: '2022', icon: '⚛️' },
                { title: 'Full Stack Web Development', issuer: 'freeCodeCamp', year: '2021', icon: '🎓' },
                { title: 'JavaScript Algorithms', issuer: 'HackerRank', year: '2023', icon: '🏆' },
                { title: 'Docker Certified Associate', issuer: 'Docker Inc.', year: '2022', icon: '🐳' },
                { title: 'Kubernetes Administrator', issuer: 'CNCF', year: '2023', icon: '⚓' },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass-effect p-6 rounded-lg neon-border text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-neon-green mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Path */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              <span className="text-neon-green glow-text">Currently</span>
              <span className="text-white"> Learning</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Rust', 'WebAssembly', 'Machine Learning', 'Blockchain', 'AR/VR'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-6 py-3 glass-effect rounded-full border border-neon-green text-neon-green"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)' }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}