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
    <header className="sticky top-0 z-[80] border-b border-white/8 bg-[#060B26]/95 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <style>{`
        .mobile-nav-transition {
          transition: max-height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.12), opacity 0.35s ease;
        }
      `}</style>
      <a
        href="#hero"
        className="sr-only z-[100] bg-[#F7D417] px-4 py-2 font-mono text-xs font-black text-[#060B26] focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Skip to content
      </a>

      <nav aria-label="Primary navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <a
          href="#hero"
          onClick={() => handleNavigation('hero')}
          className="group flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
          aria-label="Anup Kumar Jena — return to hero"
        >
          <span className="border-l-2 border-[#DC052D] pl-2 font-mono text-xl leading-none font-black italic tracking-[-0.08em] text-white transition-[text-shadow] group-hover:[text-shadow:0_0_12px_rgba(220,5,45,0.4)]">
            #19
          </span>
          <span className="hidden font-mono text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase transition-colors group-hover:text-[#DC052D] sm:block">
            AKJ / Portfolio
          </span>
        </a>

        <div className="hidden items-stretch self-stretch lg:flex">
          {navigation.map(({ id, label }, index) => {
            const isActive = activeId === id
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleNavigation(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex items-center gap-2 px-2.5 font-mono text-[9px] font-bold tracking-[0.12em] uppercase transition-colors duration-200 xl:px-3.5 ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {/* Sector marker dot */}
                <span
                  className="h-1 w-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? '#DC052D' : 'transparent',
                    boxShadow: isActive ? '0 0 6px rgba(220,5,45,0.6)' : 'none',
                  }}
                />
                <span className={`transition-colors duration-200 ${isActive ? '' : ''}`}>
                  {label}
                </span>
                {/* Sector number */}
                <span
                  className="text-[7px] tabular-nums transition-colors duration-200"
                  style={{ color: isActive ? '#DC052D' : 'rgba(255,255,255,0.15)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                {/* Active underline */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-2.5 bottom-0 h-0.5 transition-all duration-300 xl:inset-x-3.5"
                  style={{
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    background: isActive ? 'linear-gradient(90deg, #DC052D, #1E5BC6)' : '#DC052D',
                    boxShadow: isActive ? '0 2px 8px rgba(220,5,45,0.5)' : 'none',
                  }}
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
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/12 bg-white/[0.03] transition-[border-color,background-color] hover:border-[#DC052D]/70 hover:bg-[#DC052D]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417] lg:hidden"
        >
          <span className={`h-px w-5 bg-white transition-transform duration-200 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-px w-5 bg-[#DC052D] transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-px w-5 bg-white transition-transform duration-200 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-white/8 bg-[#091430]/98 shadow-[0_24px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl mobile-nav-transition lg:hidden ${
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
                className={`flex min-h-12 items-center justify-between bg-[#091430] px-4 font-mono text-[10px] font-bold tracking-[0.14em] uppercase transition-colors ${
                  isActive ? 'text-[#DC052D]' : 'text-white/50 hover:bg-white/[0.03] hover:text-white'
                }`}
                style={{
                  animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                <span className="flex items-center gap-2">
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#DC052D] shadow-[0_0_6px_rgba(220,5,45,0.6)]" />
                  )}
                  {label}
                </span>
                <span className="text-[9px] text-white/20">0{index + 1}</span>
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar
