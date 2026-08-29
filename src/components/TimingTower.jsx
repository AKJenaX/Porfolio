import { useState, useEffect, useRef, useCallback } from 'react'

const SECTORS = [
  { id: 'hero', code: 'S0', name: 'GRID', full: 'Starting Grid // Hero' },
  { id: 'about', code: 'S1', name: 'PROFILE', full: 'Driver Profile // About' },
  { id: 'skills', code: 'S2', name: 'SPECS', full: 'Technical Specs // Skills' },
  { id: 'projects', code: 'S3', name: 'ENTRIES', full: 'Race Entries // Projects' },
  { id: 'experience', code: 'S4', name: 'CAREER', full: 'Career & Lap Times' },
  { id: 'contact', code: 'S5', name: 'PIT WALL', full: 'Pit Wall Radio // Contact' },
]

export default function TimingTower() {
  const [activeSectorIndex, setActiveSectorIndex] = useState(0)
  const [velocity, setVelocity] = useState(0)
  const [isDrsActive, setIsDrsActive] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(0)
  const velocityTimeout = useRef(null)

  // Track active section and compute live scroll velocity
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const currentTime = Date.now()
    const timeDelta = lastScrollTime.current > 0 ? Math.max(currentTime - lastScrollTime.current, 16) : 16
    const scrollDelta = Math.abs(currentScrollY - lastScrollY.current)

    // Calculate simulated speed in KM/H (0 to 350 km/h)
    const rawSpeed = (scrollDelta / timeDelta) * 320
    const smoothedSpeed = Math.min(Math.round(rawSpeed), 352)

    setVelocity(smoothedSpeed)
    setIsDrsActive(smoothedSpeed > 180)

    lastScrollY.current = currentScrollY
    lastScrollTime.current = currentTime

    // Reset velocity back to 0 after scrolling pauses
    if (velocityTimeout.current) clearTimeout(velocityTimeout.current)
    velocityTimeout.current = setTimeout(() => {
      setVelocity(0)
      setIsDrsActive(false)
    }, 150)

    // Determine current active section
    const scrollPosition = currentScrollY + window.innerHeight * 0.35
    let currentIdx = 0

    SECTORS.forEach((sec, idx) => {
      const el = document.getElementById(sec.id)
      if (el) {
        const top = el.offsetTop
        if (scrollPosition >= top) {
          currentIdx = idx
        }
      }
    })

    setActiveSectorIndex(currentIdx)
  }, [])

  useEffect(() => {
    lastScrollTime.current = Date.now()
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (velocityTimeout.current) clearTimeout(velocityTimeout.current)
    }
  }, [handleScroll])

  const scrollToSector = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsMobileOpen(false)
    }
  }

  const currentSector = SECTORS[activeSectorIndex]

  return (
    <>
      {/* ============================================================ */}
      {/* 1. DESKTOP TIMING TOWER (Fixed Right Margin)                 */}
      {/* ============================================================ */}
      <aside
        aria-label="F1 Race Timing Tower"
        className={`fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-300 md:block ${
          isCollapsed ? 'translate-x-[calc(100%-28px)]' : 'translate-x-0'
        }`}
      >
        <div className="relative flex items-center">
          {/* Collapse / Expand Tab Toggle */}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex h-20 w-7 items-center justify-center border border-r-0 border-white/10 bg-[#091430]/95 text-white/60 backdrop-blur-md transition-colors hover:bg-[#1E5BC6]/20 hover:text-white"
            title={isCollapsed ? 'Expand F1 Timing Tower' : 'Collapse F1 Timing Tower'}
            aria-expanded={!isCollapsed}
          >
            <span className="font-mono text-[9px] font-bold tracking-[0.2em] [writing-mode:vertical-lr] uppercase">
              {isCollapsed ? '◄ TIMING' : '► HUD'}
            </span>
          </button>

          {/* Main Timing Tower Console */}
          <div
            className="w-56 border border-white/10 bg-[#060B26]/95 p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(30,91,198,0.12), transparent 60%), repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 6px)',
            }}
          >
            {/* Tower Header */}
            <header className="border-b border-white/10 pb-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] font-black tracking-[0.25em] text-[#DC052D] uppercase">
                  FIA // TIMING
                </span>
                <span className="rounded bg-[#DC052D] px-1.5 py-0.5 font-mono text-[8px] font-black text-white shadow-[0_0_8px_rgba(220,5,45,0.4)]">
                  #22 JENA
                </span>
              </div>

              {/* Lap & Speed Status Bar */}
              <div className="mt-2.5 flex items-center justify-between font-mono text-[9px]">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#A855F7] shadow-[0_0_6px_#A855F7]" />
                  <span className="font-bold text-white/90">LAP 0{activeSectorIndex + 1}/06</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className={`font-black ${isDrsActive ? 'text-[#22C55E]' : 'text-white/70'}`}>
                    {velocity}
                  </span>
                  <span className="text-[7px] text-white/40">KM/H</span>
                </div>
              </div>

              {/* DRS Active Flag */}
              <div className="mt-1.5 flex items-center justify-between font-mono text-[7px] tracking-[0.14em] uppercase">
                <span className="text-white/40">SPEED TRAP</span>
                <span
                  className={`px-1 py-0.5 font-bold transition-all ${
                    isDrsActive
                      ? 'rounded bg-[#22C55E] text-black shadow-[0_0_10px_rgba(34,197,94,0.6)]'
                      : 'text-white/30'
                  }`}
                >
                  {isDrsActive ? '⚡ DRS OPEN' : 'DRS AVAIL'}
                </span>
              </div>
            </header>

            {/* Sector Split Rows */}
            <div className="mt-3 space-y-1.5 font-mono text-[9px]">
              {SECTORS.map((sector, idx) => {
                const isCurrent = activeSectorIndex === idx
                const isCompleted = activeSectorIndex > idx

                // F1 color convention: Current = Purple (Fastest sector), Completed = Green, Next = Dim
                const statusColor = isCurrent
                  ? '#A855F7'
                  : isCompleted
                  ? '#22C55E'
                  : 'rgba(255,255,255,0.25)'

                const statusBg = isCurrent
                  ? 'bg-[#A855F7]/15 border-[#A855F7]/40 shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                  : isCompleted
                  ? 'bg-[#22C55E]/5 border-[#22C55E]/20'
                  : 'bg-transparent border-white/5 opacity-60 hover:opacity-100 hover:border-white/20'

                return (
                  <button
                    key={sector.id}
                    type="button"
                    onClick={() => scrollToSector(sector.id)}
                    className={`flex w-full cursor-pointer items-center justify-between border px-2.5 py-1.5 text-left transition-all duration-200 ${statusBg}`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="font-bold tracking-wider"
                        style={{ color: statusColor }}
                      >
                        {sector.code}
                      </span>
                      <span className={`text-[8.5px] font-bold tracking-wider ${isCurrent ? 'text-white' : 'text-white/60'}`}>
                        {sector.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isCurrent ? (
                        <span className="rounded bg-[#A855F7] px-1 py-0.2 text-[7px] font-black text-black shadow-[0_0_6px_#A855F7]">
                          FASTEST
                        </span>
                      ) : isCompleted ? (
                        <span className="text-[8px] font-bold text-[#22C55E]">
                          -0.{idx + 1}28s
                        </span>
                      ) : (
                        <span className="text-[8px] text-white/20">INTERVAL</span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Bottom Telemetry Footer */}
            <footer className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[7px] tracking-[0.16em] text-white/35 uppercase">
              <span>RACE CONTROL</span>
              <span className="text-[#22C55E]">TRACK CLEAR</span>
            </footer>
          </div>
        </div>
      </aside>

      {/* ============================================================ */}
      {/* 2. MOBILE COMPACT SECTOR HUD (Bottom Pill)                   */}
      {/* ============================================================ */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        {/* Expanded Mobile Overlay Menu */}
        {isMobileOpen && (
          <div
            className="mb-2 w-64 border border-white/10 bg-[#060B26]/95 p-3 shadow-2xl backdrop-blur-xl"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(30,91,198,0.15), transparent 60%)',
            }}
          >
            <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-1.5 font-mono text-[8px] uppercase">
              <span className="font-bold text-[#DC052D]">F1 TIMING TOWER</span>
              <span className="text-white/60">LAP 0{activeSectorIndex + 1}/06</span>
            </div>

            <div className="space-y-1 font-mono text-[8px]">
              {SECTORS.map((sector, idx) => {
                const isCurrent = activeSectorIndex === idx
                return (
                  <button
                    key={sector.id}
                    type="button"
                    onClick={() => scrollToSector(sector.id)}
                    className={`flex w-full items-center justify-between p-1.5 text-left transition-colors ${
                      isCurrent
                        ? 'bg-[#A855F7]/20 font-bold text-[#A855F7]'
                        : 'text-white/60 hover:bg-white/5'
                    }`}
                  >
                    <span>{sector.code} {sector.name}</span>
                    <span>{isCurrent ? 'ACTIVE' : ''}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Floating Mini Pill */}
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center gap-2 border border-white/15 bg-[#091430]/90 px-3 py-2 font-mono text-[9px] font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md active:scale-95"
          style={{
            boxShadow: '0 0 15px rgba(168,85,247,0.25)',
          }}
          aria-label="Toggle F1 Timing Tower"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#A855F7] shadow-[0_0_8px_#A855F7]" />
          <span className="text-white/70">{currentSector.code}</span>
          <span className="text-[#A855F7]">{currentSector.name}</span>
          <span className="border-l border-white/15 pl-1.5 text-[8px] text-white/40">
            {velocity} KM/H
          </span>
        </button>
      </div>
    </>
  )
}
