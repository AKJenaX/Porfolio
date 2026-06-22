import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frameId

    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, nextProgress)))
    }

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] bg-black/30">
      <div
        className="h-full origin-left will-change-transform"
        style={{
          transform: `scaleX(${progress / 100})`,
          background: 'linear-gradient(90deg, #DC052D, #1E5BC6)',
          boxShadow: '0 0 14px rgba(220,5,45,0.7), 0 0 6px rgba(30,91,198,0.5)',
        }}
      />
    </div>
  )
}

export default ScrollProgress
