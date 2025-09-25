'use client'
import { motion } from 'framer-motion'

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        >
          <div
            className={`w-${4 + Math.floor(Math.random() * 8)} h-${4 + Math.floor(Math.random() * 8)} 
            ${Math.random() > 0.5 ? 'rounded-full' : 'rounded-lg'} 
            bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10`}
          />
        </motion.div>
      ))}
      
      {/* Floating Icons */}
      {['⚡', '🚀', '💎', '🌟', '🔥', '✨'].map((icon, i) => (
        <motion.div
          key={icon}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  )
}