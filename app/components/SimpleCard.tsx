'use client'
import { motion } from 'framer-motion'

interface SimpleCardProps {
  children: React.ReactNode
  className?: string
}

export default function SimpleCard({ children, className = '' }: SimpleCardProps) {
  return (
    <motion.div
      className={`glass-effect p-6 rounded-lg border border-gray-medium hover:border-primary transition-all duration-300 ${className}`}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}