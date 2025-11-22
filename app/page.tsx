'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import CommandNavigation from './components/CommandNavigation'
import ScrollToTop from './components/ScrollToTop'
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react'

export default function Home() {
  const [typedText, setTypedText] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fullText = "I'm a Full Stack Developer"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xankjznk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('Message sent successfully! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      alert('Failed to send message. Please email me directly at vaishnavisaggurthi@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const skills = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Data Structures & Algorithms', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-original.svg' },
    { name: 'OOP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Computer Vision', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Artificial Intelligence', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png' },
    { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ]

  const projects = [
    {
      title: 'HUIDSN (Hands of User In Digital System Networks)',
      description: 'A gesture-based human-computer interaction system for touchless control of digital environments using computer vision and real-time hand tracking.',
      tech: ['Computer Vision', 'OpenCV', 'Python', 'Hand Tracking'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      title: 'Smart Study Hub',
      description: 'A centralized educational platform providing students streamlined access to curated academic websites, online libraries, and research databases for enhanced learning outcomes. Eliminates the hassle of managing multiple URLs while discovering relevant educational resources efficiently.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/VaishnaviSaggurthi/SmartStudyHub',
      live: 'https://demo.com'
    },
    {
      title: 'MemorEase',
      description: 'A memory-aid platform using AI and spaced repetition techniques to improve learning, retention, and recall through mnemonics, summaries, and flashcards. Features smart summaries, AI-generated mnemonics, and personalized learning strategies.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Hugging Face', 'LangChain'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/VaishnaviSaggurthi/memorease',
      live: 'https://demo.com'
    },
  ]

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      <CommandNavigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="gradient-text block sm:inline">Vaishnavi Saggurthi</span>
            </motion.h1>
            
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-8 sm:h-10 md:h-12">
              <span className="typing-animation">{typedText}</span>
            </div>
            
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Passionate about creating amazing digital experiences with modern technologies
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <button 
                className="btn-primary"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/resume_vaishnavi.pdf'
                  link.download = 'Vaishnavi_Resume.pdf'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="w-5 h-5 mr-2 inline" />
                Download CV
              </button>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-4 sm:space-x-6 relative z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {[
                { icon: Github, href: 'https://github.com/VaishnaviSaggurthi' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/vaishnavisaggurthi/' },
                { icon: Mail, href: 'mailto:vaishnavisaggurthi@gmail.com' }
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a passionate software developer with expertise in Java, Python, AI/ML, and modern web technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a dedicated software developer with a passion for creating innovative 
                  digital solutions. My journey started with programming fundamentals and 
                  has evolved into expertise across Java, Python, AI/ML, and web technologies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in building scalable applications, working with cloud technologies like AWS, 
                  and developing AI-powered solutions. Currently pursuing my Computer Science degree 
                  while gaining hands-on experience through internships.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Code, title: 'Programming', desc: 'Java, Python, C' },
                  { icon: Database, title: 'Backend', desc: 'Spring Boot, REST APIs' },
                  { icon: Globe, title: 'Cloud & AI', desc: 'AWS, Machine Learning' },
                  { icon: Smartphone, title: 'Web Tech', desc: 'React, JavaScript' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass p-6 rounded-xl text-center hover-lift"
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-gray-400">
              Academic journey and qualifications
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 -top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="space-y-12">
            {[
              {
                degree: 'Bachelor of Computer Science',
                institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
                duration: '2023 - 2027',
                description: 'Currently pursuing Computer Science with focus on Software Development and Engineering.',
                gpa: 'In Progress'
              },
              {
                degree: 'Intermediate Education',
                institution: 'Sri Chaitanya Junior Kalasala',
                duration: '2021 - 2023',
                description: 'Science stream with focus on Mathematics, Physics, and Chemistry.',
                gpa: 'Completed'
              },
              {
                degree: 'Secondary School Education',
                institution: 'Dr. KKR Gowtham Concept School',
                duration: '2017 - 2021',
                description: 'Completed secondary education with excellent academic performance.',
                gpa: 'Completed'
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-dark z-10"></div>
                
                {/* Content Card */}
                <div className="ml-16 glass p-6 rounded-xl flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">{edu.duration}</p>
                      <p className="text-primary font-bold text-sm">{edu.gpa}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-400">
              Technologies I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass p-6 rounded-xl hover-lift text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-2">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-400">
              Professional journey and work experience
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                role: 'Software Development Engineering Intern',
                company: 'Amazon',
                duration: 'Jun 2025 - Aug 2025',
                description: 'Working on scalable cloud solutions and distributed systems using AWS services and Java technologies.',
                technologies: ['Java', 'AWS', 'Amazon S3', 'Amazon Redshift', 'Amazon DynamoDB', 'Amazon SNS', 'Amazon SQS', 'SDLC', 'JUnit', 'Unit Testing', 'Amazon EC2']
              },
              {
                role: 'Data Science & Machine Learning Intern',
                company: 'IBM SkillsBuild with CSRBOX',
                duration: 'Oct 2024 - Nov 2024',
                description: 'Successfully completed IBM SkillsBuild Mastering Data with Machine Learning Internship, gaining hands-on experience in data analysis and machine learning techniques.',
                technologies: ['Machine Learning', 'Data Analysis', 'Python', 'Data Science']
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                className="glass p-8 rounded-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-gray-400">{exp.duration}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {(exp.company === 'Amazon' || exp.company === 'IBM SkillsBuild with CSRBOX') && (
                  <div className="flex gap-4">
                    <a 
                      href={exp.company === 'Amazon' ? "/certificates/Internship_Letter_Amazon.pdf" : "/certificates/Completion Certificate -  IBM SkillsBuild AI ML Internship (1).pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-sm px-4 py-2 flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-400">
              Some of my recent work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  {index === 0 ? (
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center" 
                      alt="Hand gesture recognition"
                      className="w-full h-full object-cover"
                    />
                  ) : index === 1 ? (
                    <img 
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&crop=center" 
                      alt="Study and education platform"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=250&fit=crop&crop=center" 
                      alt="AI learning and memory platform"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {index === 2 && (
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                  </div>
                )}
                {index === 1 && (
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-gray-400">
              Professional certifications and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Introducing Generative AI with AWS',
                issuer: 'Amazon Web Services (AWS)',
                date: 'Jul 2025',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                url: 'https://drive.google.com/file/d/1ZolmjsGiE9iM7BpJMHC79067ahe5MJ0Y/view'
              },
              {
                title: 'AWS Educate Machine Learning Foundations',
                issuer: 'Amazon Web Services (AWS)',
                date: 'Jun 2025',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                url: 'https://www.credly.com/badges/6a87da8f-ec8d-4c66-8e77-84e8cfc5bdf4'
              },
              {
                title: 'Explore Generative AI with Gemini API in Vertex AI',
                issuer: 'Google',
                date: 'Apr 2025',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
                url: 'https://www.credly.com/badges/0b87e1fe-1780-46c0-8ee1-bd5c19eee50a'
              },
              {
                title: 'Inspect Rich Documents with Gemini Multimodality',
                issuer: 'Google',
                date: 'Apr 2025',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
                url: 'https://www.credly.com/badges/e5e7cc14-8e0d-40d6-b711-ee260ce04643'
              },
              {
                title: 'Develop GenAI Apps with Gemini and Streamlit',
                issuer: 'Google',
                date: 'Nov 2024',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
                url: 'https://www.credly.com/badges/c9f6eb69-152b-4189-849a-afb796182b90/public_url'
              },
              {
                title: 'Prompt Design in Vertex AI Skill Badge',
                issuer: 'Google',
                date: 'Nov 2024',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
                url: 'https://www.credly.com/badges/c9f6eb69-152b-4189-849a-afb796182b90/public_url'
              },
              {
                title: 'AWS Academy Cloud Foundations',
                issuer: 'Amazon Web Services (AWS)',
                date: 'Dec 2023',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                url: 'https://www.credly.com/badges/99d00795-be11-46be-9994-bc4d12f49dc2/print'
              },
              {
                title: 'Introduction to Cybersecurity',
                issuer: 'Cisco',
                date: 'Nov 2023',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg',
                url: 'https://drive.google.com/file/d/1iEHp3kbljsi7MIhYpgXU3Xc64ldgQ__8/view'
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl hover-lift text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-2">
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-primary font-semibold mb-4">{cert.issuer}</p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs px-3 py-1 mt-2"
                  >
                    View Certificate
                  </a>
                )}

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding-profiles" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Coding <span className="gradient-text">Profiles</span>
            </h2>
            <p className="text-xl text-gray-400">
              My coding journey across various platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                platform: 'LeetCode',
                username: 'vaishnavi_saggurthi',
                url: 'https://leetcode.com/vaishnavi_saggurthi',
                stats: { solved: '500+', rating: '1800' },
                color: 'from-orange-500 to-yellow-500',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png'
              },
              {
                platform: 'Codeforces',
                username: 'vaishnavisaggurthi',
                url: 'https://codeforces.com/profile/vaishnavisaggurthi',
                stats: {},
                color: 'from-red-600 to-pink-600',
                logo: 'https://cdn.iconscout.com/icon/free/png-256/codeforces-3521352-2944796.png'
              },
              {
                platform: 'CodeChef',
                username: 'vaishnavisagg1',
                url: 'https://codechef.com/users/vaishnavisagg1', 
                stats: { rating: '1600', stars: '4★' },
                color: 'from-brown-500 to-orange-600',
                logo: 'https://cdn.codechef.com/images/cc-logo.svg'
              },
              {
                platform: 'HackerRank',
                username: 'vaishnavisaggur1',
                url: 'https://hackerrank.com/vaishnavisaggur1',
                stats: { badges: '15+', rank: 'Gold' },
                color: 'from-green-500 to-emerald-600',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png'
              }
            ].map((profile, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl hover-lift text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-2">
                  <img 
                    src={profile.logo} 
                    alt={profile.platform}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{profile.platform}</h3>
                <p className="text-gray-400 mb-6">@{profile.username}</p>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm px-4 py-2"
                >
                  Visit Profile
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life
            </p>
            
            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="glass p-6 rounded-xl text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-400">vaishnavisaggurthi@gmail.com</p>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <Github className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-white">GitHub</h3>
                <p className="text-gray-400">@VaishnaviSaggurthi</p>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-white">LinkedIn</h3>
                <p className="text-gray-400">@vaishnavisaggurthi</p>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                />
                <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Vaishnavi Saggurthi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}