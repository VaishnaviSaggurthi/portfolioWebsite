'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import MatrixBackground from '../components/MatrixBackground'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              <span className="text-neon-green glow-text">Get In</span>
              <span className="text-white"> Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's create something amazing together!
            </p>
            <div className="w-24 h-1 bg-neon-green mx-auto mt-6 animate-glow"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="glass-effect p-8 rounded-lg neon-border"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-neon-green mb-6">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-white mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:border-neon-green focus:outline-none transition-colors duration-300"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-white mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:border-neon-green focus:outline-none transition-colors duration-300"
                      required
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-white mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:border-neon-green focus:outline-none transition-colors duration-300"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-white mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:border-neon-green focus:outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-neon-green text-black font-semibold rounded-lg hover:bg-transparent hover:text-neon-green border-2 border-neon-green transition-all duration-300 disabled:opacity-50"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  { icon: '📧', title: 'Email', value: 'hello@yourname.com', link: 'mailto:hello@yourname.com' },
                  { icon: '📱', title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
                  { icon: '📍', title: 'Location', value: 'San Francisco, CA', link: '#' },
                  { icon: '💼', title: 'LinkedIn', value: '/in/yourname', link: 'https://linkedin.com/in/yourname' },
                ].map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.link}
                    className="block glass-effect p-6 rounded-lg neon-border hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(0, 255, 136, 0.3)' }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{contact.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-neon-green transition-colors">
                          {contact.title}
                        </h3>
                        <p className="text-gray-300">{contact.value}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="glass-effect p-6 rounded-lg neon-border"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h3 className="text-xl font-bold text-neon-green mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', icon: '🐙', link: 'https://github.com' },
                    { name: 'Twitter', icon: '🐦', link: 'https://twitter.com' },
                    { name: 'Instagram', icon: '📷', link: 'https://instagram.com' },
                    { name: 'YouTube', icon: '📺', link: 'https://youtube.com' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      className="w-12 h-12 bg-transparent border-2 border-neon-green rounded-full flex items-center justify-center text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                className="glass-effect p-6 rounded-lg neon-border text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-neon-green font-semibold">Available for Projects</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Currently accepting new freelance opportunities and collaborations
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}