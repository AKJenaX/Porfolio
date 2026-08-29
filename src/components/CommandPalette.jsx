import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { createPortal } from 'react-dom'

const COMMANDS = [
  // --- Navigation Commands ---
  {
    id: 'nav-about',
    category: 'SECTORS // NAVIGATION',
    title: 'Driver Profile & Bio',
    shortcut: '01',
    icon: '🏎️',
    action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'nav-skills',
    category: 'SECTORS // NAVIGATION',
    title: 'Technical Specifications (Skills)',
    shortcut: '02',
    icon: '⚙️',
    action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'nav-projects',
    category: 'SECTORS // NAVIGATION',
    title: 'Race Entries (Featured Projects)',
    shortcut: '03',
    icon: '🏁',
    action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'nav-experience',
    category: 'SECTORS // NAVIGATION',
    title: 'Championship Standings (Experience)',
    shortcut: '04',
    icon: '🏆',
    action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'nav-contact',
    category: 'SECTORS // NAVIGATION',
    title: 'Pit Wall Radio (Contact Console)',
    shortcut: '05',
    icon: '📻',
    action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
  },

  // --- Project Fast-Track ---
  {
    id: 'proj-dcoy',
    category: 'RACE ENTRIES // PROJECTS',
    title: 'DcoY — Active Defense & Cyber Deception',
    shortcut: 'P1',
    icon: '🛡️',
    action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'proj-taskmesh',
    category: 'RACE ENTRIES // PROJECTS',
    title: 'TaskMesh — RL Adaptive Job Scheduler',
    shortcut: 'P2',
    icon: '🧠',
    action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'proj-ecoflow',
    category: 'RACE ENTRIES // PROJECTS',
    title: 'EcoFlow — Dynamic Logistics & Routing',
    shortcut: 'P3',
    icon: '🚛',
    action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
  },
  {
    id: 'proj-hydrosense',
    category: 'RACE ENTRIES // PROJECTS',
    title: 'HydroSense — IoT Water Telemetry',
    shortcut: 'P4',
    icon: '💧',
    action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
  },

  // --- Direct Recruiter Actions ---
  {
    id: 'act-resume',
    category: 'RECRUITER ACTIONS',
    title: 'View & Download Driver Resume (PDF)',
    shortcut: 'PDF',
    icon: '📄',
    action: () => window.open('/resume.pdf', '_blank', 'noopener,noreferrer'),
  },
  {
    id: 'act-email',
    category: 'RECRUITER ACTIONS',
    title: 'Copy Email Address (jenaanupkumar824@gmail.com)',
    shortcut: 'COPY',
    icon: '📧',
    action: (setFeedback) => {
      navigator.clipboard.writeText('jenaanupkumar824@gmail.com')
      setFeedback('Copied email to clipboard!')
    },
  },
  {
    id: 'act-phone',
    category: 'RECRUITER ACTIONS',
    title: 'Copy Phone Number (+91 8260779661)',
    shortcut: 'COPY',
    icon: '📞',
    action: (setFeedback) => {
      navigator.clipboard.writeText('+91 8260779661')
      setFeedback('Copied phone number to clipboard!')
    },
  },
  {
    id: 'act-github',
    category: 'EXTERNAL TELEMETRY',
    title: 'Open GitHub Profile (AKJenaX)',
    shortcut: 'EXT',
    icon: '🐙',
    action: () => window.open('https://github.com/AKJenaX', '_blank', 'noopener,noreferrer'),
  },
  {
    id: 'act-linkedin',
    category: 'EXTERNAL TELEMETRY',
    title: 'Open LinkedIn Profile',
    shortcut: 'EXT',
    icon: '💼',
    action: () => window.open('https://linkedin.com/in/anup-kumar-jena', '_blank', 'noopener,noreferrer'),
  },
]

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [feedback, setFeedback] = useState('')
  const inputRef = useRef(null)

  // Filter commands by search query
  const filteredCommands = useMemo(() => {
    if (!query.trim()) return COMMANDS
    const q = query.toLowerCase()
    return COMMANDS.filter(
      (cmd) =>
        cmd.title.toLowerCase().includes(q) ||
        cmd.category.toLowerCase().includes(q) ||
        cmd.shortcut.toLowerCase().includes(q)
    )
  }, [query])

  const handleClose = useCallback(() => {
    setQuery('')
    setSelectedIndex(0)
    setFeedback('')
    onClose()
  }, [onClose])

  // Focus search input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isOpen])

  // Execute selected command
  const executeCommand = useCallback((cmd) => {
    if (!cmd) return
    cmd.action((msg) => {
      setFeedback(msg)
      setTimeout(() => handleClose(), 1200)
    })
    if (!cmd.id.startsWith('act-email') && !cmd.id.startsWith('act-phone')) {
      handleClose()
    }
  }, [handleClose])

  // Keyboard navigation within the command palette
  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % Math.max(filteredCommands.length, 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(filteredCommands.length, 1))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          executeCommand(filteredCommands[selectedIndex])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredCommands, selectedIndex, handleClose, executeCommand])

  if (!isOpen) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
      onClick={handleClose}
      className="animate-fade-in fixed inset-0 z-[120] flex items-start justify-center bg-[#060B26]/85 p-4 pt-[15vh] backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-scale-in relative flex w-full max-w-2xl flex-col border border-white/15 bg-[#091430] shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden"
        style={{
          borderTopColor: '#DC052D',
          borderTopWidth: '4px',
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%)',
        }}
      >
        {/* Terminal Header */}
        <header className="flex items-center justify-between border-b border-white/8 bg-black/30 px-5 py-3 font-mono text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC052D] shadow-[0_0_8px_#DC052D]" style={{ animation: 'status-blink 1.5s infinite' }} />
            <span id="command-palette-title" className="text-white/90">RACE CONTROL // COMMAND PALETTE</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleClose}
              className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[8px] text-white/60 hover:text-white hover:border-white/25 transition-colors"
            >
              ESC TO EXIT
            </button>
          </div>
        </header>

        {/* Search Input */}
        <div className="relative border-b border-white/8 bg-[#060B26]/60 p-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[#1E5BC6] font-bold">►</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setSelectedIndex(0)
              }}
              placeholder="Type a command, sector, project, or recruiter action..."
              className="w-full bg-transparent font-mono text-xs sm:text-sm text-white placeholder-white/30 outline-none"
              aria-label="Search race control commands"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="font-mono text-xs text-white/40 hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Feedback Alert banner if action copied */}
        {feedback && (
          <div className="bg-[#22C55E]/15 border-b border-[#22C55E]/30 px-5 py-2 font-mono text-[10px] font-bold text-[#22C55E] tracking-wider uppercase">
            ✓ {feedback}
          </div>
        )}

        {/* Commands List */}
        <div className="max-h-[50vh] overflow-y-auto p-2 scrollbar-thin">
          {filteredCommands.length === 0 ? (
            <div className="py-10 text-center font-mono text-xs text-white/40">
              No matching race commands found for &quot;{query}&quot;
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = selectedIndex === idx
              return (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={() => executeCommand(cmd)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex w-full cursor-pointer items-center justify-between px-3.5 py-2.5 text-left transition-all ${
                    isSelected
                      ? 'bg-[#1E5BC6]/20 border-l-2 border-[#1E5BC6] text-white shadow-[inset_0_0_15px_rgba(30,91,198,0.2)]'
                      : 'border-l-2 border-transparent text-white/65 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm" aria-hidden="true">{cmd.icon}</span>
                    <div>
                      <p className={`font-mono text-xs font-bold tracking-wide ${isSelected ? 'text-white' : 'text-white/80'}`}>
                        {cmd.title}
                      </p>
                      <p className="font-mono text-[8px] tracking-widest text-white/30 uppercase">
                        {cmd.category}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-widest uppercase ${
                      isSelected
                        ? 'bg-[#DC052D] text-white shadow-[0_0_8px_rgba(220,5,45,0.5)]'
                        : 'border border-white/10 bg-black/20 text-white/40'
                    }`}
                  >
                    {cmd.shortcut}
                  </span>
                </button>
              )
            })
          )}
        </div>

        {/* Footer Quick Keys */}
        <footer className="flex flex-wrap items-center justify-between border-t border-white/8 bg-black/40 px-5 py-2.5 font-mono text-[8px] tracking-[0.16em] text-white/35 uppercase">
          <div className="flex items-center gap-3">
            <span>↑↓ NAVIGATE</span>
            <span>ENTER EXECUTE</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#1E5BC6]">
            <span>SYSTEM 22 // TELEMETRY READY</span>
          </div>
        </footer>
      </div>
    </div>,
    document.body
  )
}
