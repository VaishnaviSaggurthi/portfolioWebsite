'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const commands = [
  { cmd: 'home', path: '#home', desc: 'Navigate to home page' },
  { cmd: 'about', path: '#about', desc: 'Learn more about me' },
  { cmd: 'skills', path: '#skills', desc: 'View my skills' },
  { cmd: 'experience', path: '#experience', desc: 'View my experience' },
  { cmd: 'projects', path: '#projects', desc: 'View my projects' },
  { cmd: 'education', path: '#education', desc: 'View my education' },
  { cmd: 'certifications', path: '#certifications', desc: 'View my certifications' },
  { cmd: 'coding-profiles', path: '#coding-profiles', desc: 'View coding profiles' },
  { cmd: 'contact', path: '#contact', desc: 'Get in touch' },
  { cmd: 'help', path: '', desc: 'Show available commands' },
  { cmd: 'clear', path: '', desc: 'Clear terminal' },
]

export default function CommandNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState<typeof commands>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (input) {
      const filtered = commands.filter(cmd => 
        cmd.cmd.toLowerCase().includes(input.toLowerCase()) ||
        cmd.desc.toLowerCase().includes(input.toLowerCase())
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }, [input])

  const executeCommand = (cmd: string) => {
    const command = commands.find(c => c.cmd === cmd.toLowerCase())
    
    if (command) {
      setHistory(prev => [...prev, `$ ${cmd}`])
      
      switch (command.cmd) {
        case 'help':
          setHistory(prev => [...prev, 
            'Available commands:',
            ...commands.map(c => `  ${c.cmd.padEnd(10)} - ${c.desc}`)
          ])
          break
        case 'clear':
          setHistory([])
          break
        default:
          if (command.path) {
            setHistory(prev => [...prev, `Navigating to ${command.path}...`])
            setTimeout(() => {
              router.push(command.path)
              setIsOpen(false)
            }, 500)
          }
      }
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`, `Command not found: ${cmd}. Type 'help' for available commands.`])
    }
    
    setInput('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      executeCommand(input.trim())
    }
  }

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-[9999] glass px-4 py-2 rounded-lg text-primary hover:bg-primary hover:text-black transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-mono">⌘ Command</span>
      </motion.button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="terminal w-full max-w-2xl max-h-96 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="terminal-header">
                <span>Quick Navigator</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="float-right text-black hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              
              <div className="terminal-body">
                {/* History */}
                <div className="mb-4 max-h-32 overflow-y-auto">
                  {history.map((line, index) => (
                    <div key={index} className="text-sm mb-1">
                      {line}
                    </div>
                  ))}
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="flex items-center">
                  <span className="text-accent mr-2">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-accent"
                    placeholder="Type a command..."
                  />
                </form>

                {/* Suggestions */}
                {suggestions.length > 0 && (
                  <div className="mt-4 space-y-1">
                    {suggestions.map((suggestion, index) => (
                      <motion.div
                        key={suggestion.cmd}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between text-sm cursor-pointer hover:bg-accent hover:bg-opacity-10 p-2 rounded"
                        onClick={() => executeCommand(suggestion.cmd)}
                      >
                        <span className="text-accent font-mono">{suggestion.cmd}</span>
                        <span className="text-gray-400">{suggestion.desc}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}