'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState('')
  
  const loadingTexts = [
    'Initializing quantum processors...',
    'Loading neural networks...',
    'Establishing secure connections...',
    'Calibrating holographic displays...',
    'Synchronizing data streams...',
    'Welcome to the future...'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 1000)
          return 100
        }
        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * loadingTexts.length)
    if (textIndex < loadingTexts.length) {
      setCurrentText(loadingTexts[textIndex])
    }
  }, [progress])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-green rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="text-center z-10">
          {/* Logo/Brand */}
          <motion.div
            className="text-6xl font-bold mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <span className="text-neon-green neon-text">&lt;</span>
            <span className="text-white">PORTFOLIO</span>
            <span className="text-neon-green neon-text">/&gt;</span>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-80 mx-auto mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Loading...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-cyber-gray rounded-full h-3 overflow-hidden border border-neon-green/30">
              <motion.div
                className="h-full bg-gradient-to-r from-matrix-green via-electric-blue via-plasma-purple via-laser-red to-neon-orange rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{
                  boxShadow: '0 0 20px rgba(0, 255, 65, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-yellow to-neon-pink opacity-50 rounded-full"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/40 rounded-full"
                  animate={{ 
                    scaleX: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>

          {/* Loading Text */}
          <motion.p
            className="bg-gradient-to-r from-matrix-green via-electric-blue to-neon-cyan bg-clip-text text-transparent text-sm font-mono font-bold"
            key={currentText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              filter: 'drop-shadow(0 0 10px rgba(0, 255, 65, 0.8))'
            }}
          >
            {currentText}
          </motion.p>

          {/* Scanning Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent"
              animate={{ y: ['0vh', '100vh'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-neon-blue to-transparent"
              animate={{ x: ['0vw', '100vw'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}