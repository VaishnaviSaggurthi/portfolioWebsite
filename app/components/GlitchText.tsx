'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    let interval: NodeJS.Timeout

    const startGlitch = () => {
      let iterations = 0
      interval = setInterval(() => {
        setGlitchText(prev => 
          prev.split('').map((char, index) => {
            if (index < iterations) return text[index]
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          }).join('')
        )
        
        if (iterations >= text.length) {
          clearInterval(interval)
          setGlitchText(text)
        }
        iterations += 1/3
      }, 30)
    }

    const timer = setTimeout(startGlitch, Math.random() * 2000 + 1000)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [text])

  return (
    <motion.span
      className={`relative ${className}`}
      animate={{
        textShadow: [
          '0 0 0 transparent',
          '2px 0 0 #ff0080, -2px 0 0 #00ffff',
          '0 0 0 transparent'
        ]
      }}
      transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
    >
      {glitchText}
      <motion.span
        className="absolute inset-0 text-red-500 opacity-70"
        style={{ clipPath: 'inset(0 0 50% 0)' }}
        animate={{ x: [0, 2, 0] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2 }}
      >
        {glitchText}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-cyan-500 opacity-70"
        style={{ clipPath: 'inset(50% 0 0 0)' }}
        animate={{ x: [0, -2, 0] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2.5 }}
      >
        {glitchText}
      </motion.span>
    </motion.span>
  )
}