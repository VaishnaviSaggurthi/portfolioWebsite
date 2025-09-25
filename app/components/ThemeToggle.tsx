'use client'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-6 z-[9999] glass px-4 py-2 rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-white">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-gray-800">Dark</span>
        </>
      )}
    </button>
  )
}