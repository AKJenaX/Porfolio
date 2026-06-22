import { useEffect, useState } from 'react'

const SESSION_KEY = 'akj-telemetry-initialized'

const stages = [
  { label: 'CONNECTING TO PIT WALL', threshold: 0 },
  { label: 'LOADING DRIVER DATA', threshold: 25 },
  { label: 'SYNCING TELEMETRY', threshold: 55 },
  { label: 'GREEN FLAG', threshold: 82 },
]

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
      setProgress(Math.min(100, (elapsed / 2000) * 100))
      if (elapsed < 2000) frameId = window.requestAnimationFrame(update)
    }

    frameId = window.requestAnimationFrame(update)
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 1900)
    const dismissTimer = window.setTimeout(() => setIsVisible(false), 2200)

    return () => {
      document.body.style.overflow = previousOverflow
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(leaveTimer)
      window.clearTimeout(dismissTimer)
    }
  }, [isVisible])

  if (!isVisible) return null

  const currentStage = [...stages].reverse().find((s) => progress >= s.threshold) || stages[0]
  const isGreenFlag = progress >= 82

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[120] flex items-center justify-center bg-[#060B26] px-6 transition-opacity duration-300 ${
        isLeaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Scan line overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(30,91,198,0.04) 2px, rgba(30,91,198,0.04) 4px)',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(30,91,198,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative w-full max-w-lg">
        {/* Header */}
        <div className="flex items-end justify-between gap-5 font-mono uppercase">
          <div>
            <p className="text-[9px] font-bold tracking-[0.28em] text-[#DC052D]">
              Race control / System 44
            </p>
            <p
              className="mt-3 min-h-[1.5em] text-sm font-black tracking-[0.16em] text-white transition-opacity duration-300 sm:text-base"
              key={currentStage.label}
            >
              {currentStage.label}
              {!isGreenFlag && (
                <span className="inline-block animate-pulse">...</span>
              )}
            </p>
          </div>
          <span
            className="text-xl font-black tabular-nums transition-colors duration-200"
            style={{ color: isGreenFlag ? '#22c55e' : '#1E5BC6' }}
          >
            {Math.round(progress)}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/8">
          <div
            className="h-full rounded-full transition-[width] duration-75"
            style={{
              width: `${progress}%`,
              background: isGreenFlag
                ? 'linear-gradient(90deg, #22c55e, #4ade80)'
                : 'linear-gradient(90deg, #DC052D, #1E5BC6)',
              boxShadow: isGreenFlag
                ? '0 0 20px rgba(34,197,94,0.7)'
                : '0 0 16px rgba(220,5,45,0.6)',
            }}
          />
        </div>

        {/* Sector indicators */}
        <div className="mt-3 grid grid-cols-4 gap-1.5" aria-hidden="true">
          {stages.map((stage, index) => {
            const isActive = progress >= stage.threshold
            const colors = ['#DC052D', '#1E5BC6', '#F7D417', '#22c55e']
            return (
              <div key={stage.label} className="space-y-1.5">
                <div
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: isActive ? colors[index] : 'rgba(255,255,255,0.08)',
                    boxShadow: isActive ? `0 0 8px ${colors[index]}88` : 'none',
                  }}
                />
                <p
                  className="text-center font-mono text-[7px] font-bold tracking-[0.1em] uppercase transition-colors duration-300"
                  style={{ color: isActive ? colors[index] : 'rgba(255,255,255,0.2)' }}
                >
                  {index < 3 ? `S${index + 1}` : 'GO'}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
