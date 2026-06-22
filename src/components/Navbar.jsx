import { useEffect, useState } from 'react'

const navigation = [
  { id: 'hero', label: 'HERO' },
  { id: 'about', label: 'DRIVER PROFILE' },
  { id: 'skills', label: 'TECHNICAL SPECS' },
  { id: 'projects', label: 'RACE ENTRIES' },
  { id: 'experience', label: 'CHAMPIONSHIP STANDINGS' },
  { id: 'contact', label: 'PIT WALL RADIO' },
]

function Navbar() {
  const [activeId, setActiveId] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    let frameId

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.34
      let currentId = navigation[0].id

      navigation.forEach(({ id }) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) currentId = id
      })

      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
      setActiveId(pageBottom ? navigation.at(-1).id : currentId)
    }

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const handleNavigation = (id) => {
    setActiveId(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-[80] border-b border-white/10 bg-[#0a0a1a]/95 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
      <a
        href="#hero"
        className="sr-only z-[100] bg-[#FFD700] px-4 py-2 font-mono text-xs font-black text-[#0a0a1a] focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Skip to content
      </a>

      <nav aria-label="Primary navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <a
          href="#hero"
          onClick={() => handleNavigation('hero')}
          className="group flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD700]"
          aria-label="Anup Kumar Jena — return to hero"
        >
          <span className="border-l-2 border-[#FFD700] pl-2 font-mono text-xl leading-none font-black italic tracking-[-0.08em] text-white">
            #44
          </span>
          <span className="hidden font-mono text-[9px] font-bold tracking-[0.2em] text-white/45 uppercase transition-colors group-hover:text-[#FFD700] sm:block">
            AKJ / Portfolio
          </span>
        </a>

        <div className="hidden items-stretch self-stretch lg:flex">
          {navigation.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleNavigation(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex items-center px-2.5 font-mono text-[9px] font-bold tracking-[0.12em] uppercase transition-colors duration-200 xl:px-3.5 ${
                  isActive ? 'text-[#FFD700]' : 'text-white/45 hover:text-white'
                }`}
              >
                {label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-2.5 bottom-0 h-0.5 bg-[#FFD700] transition-transform duration-300 xl:inset-x-3.5 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/15 bg-white/[0.03] transition-[border-color,background-color] hover:border-[#FFD700]/70 hover:bg-[#FFD700]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD700] lg:hidden"
        >
          <span className={`h-px w-5 bg-white transition-transform duration-200 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-5 bg-[#FFD700] transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-px w-5 bg-white transition-transform duration-200 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-white/10 bg-[#0d1b2a]/98 shadow-[0_24px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? 'max-h-[28rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-px bg-white/5 px-5 py-3 sm:grid-cols-2 sm:px-8">
          {navigation.map(({ id, label }, index) => {
            const isActive = activeId === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleNavigation(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex min-h-12 items-center justify-between bg-[#0d1b2a] px-4 font-mono text-[10px] font-bold tracking-[0.14em] uppercase transition-colors ${
                  isActive ? 'text-[#FFD700]' : 'text-white/55 hover:bg-white/[0.035] hover:text-white'
                }`}
              >
                <span>{label}</span>
                <span className="text-[9px] text-white/25">0{index + 1}</span>
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar
