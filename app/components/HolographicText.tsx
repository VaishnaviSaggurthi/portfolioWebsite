'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface HolographicTextProps {
  text: string
  className?: string
  delay?: number
}

export default function HolographicText({ text, className = '', delay = 0 }: HolographicTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50 + Math.random() * 50)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.span
        className="text-neon-green font-mono neon-text"
        whileHover={{ x: [-2, 2, -1, 1, 0] }}
        transition={{ duration: 0.2 }}
      >
        {displayText}
        <motion.span
          className="inline-block w-0.5 h-6 bg-neon-green ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.span>
    </motion.div>
  )
}