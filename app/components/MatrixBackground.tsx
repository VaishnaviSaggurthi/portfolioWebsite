'use client'
import { useEffect } from 'react'

export default function MatrixBackground() {
  useEffect(() => {
    const matrixBg = document.getElementById('matrix-bg')
    if (!matrixBg) return

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    
    const createMatrixChar = () => {
      const char = document.createElement('div')
      char.className = 'matrix-char'
      char.textContent = chars[Math.floor(Math.random() * chars.length)]
      char.style.left = Math.random() * 100 + '%'
      char.style.animationDelay = Math.random() * 20 + 's'
      char.style.animationDuration = (Math.random() * 10 + 10) + 's'
      matrixBg.appendChild(char)

      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char)
        }
      }, 20000)
    }

    const interval = setInterval(createMatrixChar, 200)
    
    return () => {
      clearInterval(interval)
      matrixBg.innerHTML = ''
    }
  }, [])

  return null
}