'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden ${className}`}
      whileTap={{ scale: 0.95 }}
      animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
      
      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg"
        animate={isHovered ? { scale: 1.2, opacity: 0.8 } : { scale: 1, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-lg blur-xl"
        animate={isHovered ? { opacity: 0.3, scale: 1.5 } : { opacity: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: -1 }}
      />
    </motion.button>
  )
}