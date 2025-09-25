'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CommandNavigation from '../components/CommandNavigation'
import { Download, MapPin, Calendar, Award, Code, Zap, Globe, Database, Cloud, Smartphone } from 'lucide-react'

const skills = [
  { name: 'Frontend Development', level: 95, icon: <Code className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend Development', level: 90, icon: <Database className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
  { name: 'Cloud & DevOps', level: 85, icon: <Cloud className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
  { name: 'Mobile Development', level: 80, icon: <Smartphone className="w-6 h-6" />, color: 'from-orange-500 to-red-500' },
  { name: 'UI/UX Design', level: 75, icon: <Zap className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
  { name: 'Full Stack Architecture', level: 88, icon: <Globe className="w-6 h-6" />, color: 'from-indigo-500 to-purple-500' },
]

const timeline = [
  {
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Corp',
    description: 'Leading development of scalable web applications and mentoring junior developers.',
    type: 'work'
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd',
    description: 'Built and maintained multiple client projects using modern web technologies.',
    type: 'work'
  },
  {
    year: '2021',
    title: 'Bachelor of Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in software engineering and web development.',
    type: 'education'
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    description: 'Developed responsive web applications and improved user experience.',
    type: 'work'
  }
]

export default function About() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <CommandNavigation />
      
      {/* Header */}
      <section ref={headerRef} className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with a love for creating innovative digital experiences. 
              My journey in tech spans several years, during which I've honed my skills in modern web technologies 
              and developed a keen eye for user-centered design.
            </p>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-xl mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>Based in San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span>5+ years of experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <span>50+ projects completed</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">What I Love</h3>
                <p className="text-gray-400 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                  or enjoying the great outdoors. I believe in continuous learning and staying up-to-date with the 
                  latest industry trends.
                </p>
                <motion.button
                  className="mt-6 flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Skills */}
      <section ref={skillsRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Interactive skill chart - hover over each skill to see my proficiency level
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover-lift cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{skill.name}</h3>
                    <span className="text-accent font-bold">{skill.level}%</span>
                  </div>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 pointer-events-none`}
                  animate={{ opacity: activeSkill === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section ref={timelineRef} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A timeline of my professional and educational milestones
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-transparent" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    className="glass p-6 rounded-xl hover-lift"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-accent font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <div className="text-gray-400 mb-2">{item.company}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-3 ${
                      item.type === 'work' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.type === 'work' ? 'Work' : 'Education'}
                    </div>
                  </motion.div>
                </div>
                
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="w-6 h-6 bg-accent rounded-full border-4 border-dark-300 relative z-10"
                    whileHover={{ scale: 1.2 }}
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 rgba(0, 255, 136, 0.4)',
                        '0 0 0 10px rgba(0, 255, 136, 0)',
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5 
                    }}
                  />
                </div>
                
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}