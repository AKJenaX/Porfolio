import { useEffect, useState } from 'react'

const SESSION_KEY = 'akj-telemetry-initialized'

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) !== 'true'
    } catch {
      return true
    }
  })
  const [isLeaving, setIsLeaving] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isVisible) return undefined

    try {
      sessionStorage.setItem(SESSION_KEY, 'true')
    } catch {
      // The loading sequence still works when storage is unavailable.
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const startedAt = performance.now()
    let frameId

    const update = (time) => {
      const elapsed = time - startedAt
      setProgress(Math.min(100, (elapsed / 1350) * 100))
      if (elapsed < 1350) frameId = window.requestAnimationFrame(update)
    }

    frameId = window.requestAnimationFrame(update)
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 1250)
    const dismissTimer = window.setTimeout(() => setIsVisible(false), 1500)

    return () => {
      document.body.style.overflow = previousOverflow
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(leaveTimer)
      window.clearTimeout(dismissTimer)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-[#0a0a1a] px-6 transition-opacity duration-250 ${
        isLeaving ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(54,113,198,0.035) 0px, rgba(54,113,198,0.035) 1px, transparent 1px, transparent 6px)',
      }}
    >
      <div className="w-full max-w-lg">
        <div className="flex items-end justify-between gap-5 font-mono uppercase">
          <div>
            <p className="text-[9px] font-bold tracking-[0.28em] text-[#FFD700]">Race control / System 44</p>
            <p className="mt-3 text-sm font-black tracking-[0.16em] text-white sm:text-base">INITIALIZING TELEMETRY...</p>
          </div>
          <span className="text-xl font-black tabular-nums text-[#3671C6]">{Math.round(progress)}%</span>
        </div>
        <div className="mt-5 h-1 overflow-hidden bg-white/10">
          <div
            className="h-full bg-[#FFD700] shadow-[0_0_16px_rgba(255,215,0,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 grid grid-cols-12 gap-1" aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => (
            <span
              key={index}
              className={`h-0.5 transition-colors ${progress >= ((index + 1) / 12) * 100 ? 'bg-[#3671C6]' : 'bg-white/10'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
