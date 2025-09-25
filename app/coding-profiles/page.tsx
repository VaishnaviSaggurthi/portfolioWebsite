'use client'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import { ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

const profiles = [
  {
    id: 1,
    platform: 'LeetCode',
    username: 'your-username',
    url: 'https://leetcode.com/your-username',
    stats: {
      solved: '500+',
      rating: '1800',
      rank: 'Expert'
    },
    description: 'Algorithmic problem solving and data structures',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    id: 2,
    platform: 'GitHub',
    username: 'your-username',
    url: 'https://github.com/your-username',
    stats: {
      repos: '50+',
      stars: '200+',
      followers: '100+'
    },
    description: 'Open source contributions and personal projects',
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: 3,
    platform: 'CodeChef',
    username: 'your-username',
    url: 'https://codechef.com/users/your-username',
    stats: {
      rating: '1600',
      stars: '4★',
      rank: 'Specialist'
    },
    description: 'Competitive programming and contests',
    color: 'from-brown-500 to-orange-600'
  },
  {
    id: 4,
    platform: 'HackerRank',
    username: 'your-username',
    url: 'https://hackerrank.com/your-username',
    stats: {
      badges: '15+',
      rank: 'Gold',
      score: '2000+'
    },
    description: 'Programming challenges and skill assessments',
    color: 'from-green-500 to-emerald-600'
  },
]

export default function CodingProfiles() {
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
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Coding Profiles
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My coding journey across various platforms showcasing problem-solving skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/20 hover:border-blue-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${profile.color} rounded-full flex items-center justify-center mr-4`}>
                      <span className="text-white font-bold text-lg">
                        {profile.platform.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {profile.platform}
                      </h3>
                      <p className="text-gray-400">@{profile.username}</p>
                    </div>
                  </div>
                  <motion.a
                    href={profile.url}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Visit
                  </motion.a>
                </div>
                
                <p className="text-gray-300 mb-6">{profile.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(profile.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <motion.div 
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        {value}
                      </motion.div>
                      <div className="text-sm text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}