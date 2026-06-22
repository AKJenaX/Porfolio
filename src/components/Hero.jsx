import { useEffect, useState } from 'react'

const formatLapTime = (elapsed) => {
  const minutes = Math.floor(elapsed / 60000)
  const seconds = Math.floor((elapsed % 60000) / 1000)
  const milliseconds = elapsed % 1000

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`
}

function Hero() {
  const [lapTime, setLapTime] = useState('00:00.000')

  useEffect(() => {
    const startedAt = performance.now()
    const timer = window.setInterval(() => {
      setLapTime(formatLapTime(Math.floor(performance.now() - startedAt)))
    }, 10)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-4rem)] w-full scroll-mt-16 overflow-hidden bg-[#0a0a1a] text-white"
      style={{
        fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @keyframes hero-speed-pass {
          0% { transform: translateX(-115%) skewX(-28deg); opacity: 0; }
          12% { opacity: .55; }
          75% { opacity: .12; }
          100% { transform: translateX(115vw) skewX(-28deg); opacity: 0; }
        }
        @keyframes hero-status-pulse {
          0%, 100% { opacity: .45; box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          50% { opacity: 1; box-shadow: 0 0 12px 2px rgba(34, 197, 94, .35); }
        }
        .hero-speed-line { animation: hero-speed-pass 7s linear infinite; }
        .hero-status-pulse { animation: hero-status-pulse 1.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-speed-line, .hero-status-pulse { animation: none; }
        }
      `}</style>

      <div className="absolute inset-x-0 top-0 z-30 h-1 bg-[#FFD700] shadow-[0_0_18px_rgba(255,215,0,0.65)]" />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.045) 0px, rgba(255,255,255,0.045) 1px, transparent 1px, transparent 5px), repeating-linear-gradient(-45deg, rgba(54,113,198,0.055) 0px, rgba(54,113,198,0.055) 1px, transparent 1px, transparent 5px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(54,113,198,0.24),transparent_34%),linear-gradient(90deg,#0a0a1a_0%,rgba(10,10,26,0.9)_48%,rgba(10,10,26,0.45)_100%)]"
      />

      <div aria-hidden="true" className="absolute inset-0 overflow-hidden opacity-60">
        <span className="hero-speed-line absolute top-[23%] left-0 h-px w-2/3 bg-gradient-to-r from-transparent via-[#3671C6] to-transparent" />
        <span className="hero-speed-line absolute top-[37%] left-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent [animation-delay:-2.4s] [animation-duration:8.5s]" />
        <span className="hero-speed-line absolute top-[54%] left-0 h-px w-3/4 bg-gradient-to-r from-transparent via-white/50 to-transparent [animation-delay:-5.2s] [animation-duration:9.5s]" />
        <span className="hero-speed-line absolute top-[68%] left-0 h-px w-2/5 bg-gradient-to-r from-transparent via-[#3671C6] to-transparent [animation-delay:-3.7s] [animation-duration:6.5s]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[2vw] top-1/2 -translate-y-1/2 select-none text-[clamp(18rem,44vw,48rem)] leading-none font-black italic tracking-[-0.1em] text-[#3671C6]/[0.075]"
        style={{ fontFamily: "'Arial Narrow', Impact, sans-serif" }}
      >
        #44
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pt-16 pb-5 sm:px-8 lg:px-12 lg:pt-20">
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-5 font-mono text-[10px] tracking-[0.2em] text-white/55 uppercase sm:text-xs">
          <div className="flex items-center gap-3">
            <span className="hero-status-pulse h-2 w-2 rounded-full bg-green-500" />
            <span>Driver telemetry / Live</span>
          </div>

          <div className="flex items-stretch overflow-hidden border border-white/15 bg-black/25 backdrop-blur-sm">
            <span className="flex items-center border-r border-white/15 px-3 text-[#FFD700]">Lap 01</span>
            <div className="px-4 py-2 text-right">
              <span className="block text-[8px] leading-none tracking-[0.28em] text-white/35">Lap time</span>
              <time className="mt-1 block min-w-[9ch] text-sm font-bold tracking-wider text-white sm:text-base">
                {lapTime}
              </time>
            </div>
          </div>
        </header>

        <div className="flex flex-1 items-center py-12 sm:py-16 lg:py-20">
          <div className="w-full max-w-5xl">
            <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold tracking-[0.14em] uppercase sm:text-xs sm:tracking-[0.24em]">
              <span className="bg-[#3671C6] px-3 py-1.5 text-white">#44</span>
              <span className="text-[#FFD700]">Full-Stack Engineer &amp; Backend Specialist</span>
            </div>

            <h1
              id="hero-title"
              className="max-w-5xl text-[clamp(2.65rem,9vw,8.5rem)] leading-[0.82] font-black italic tracking-[-0.055em] uppercase [text-shadow:0_4px_30px_rgba(0,0,0,0.45)]"
              style={{ fontFamily: "'Arial Narrow', 'Roboto Condensed', Impact, sans-serif" }}
            >
              <span className="block text-white">ANUP KUMAR</span>
              <span className="block text-[#3671C6]">JENA</span>
            </h1>

            <div className="mt-7 h-px w-full max-w-3xl bg-gradient-to-r from-[#FFD700] via-[#3671C6] to-transparent" />

            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-medium text-white/72 sm:text-xl">
              &quot;Building high-throughput systems at the speed of thought&quot;
            </p>

            <dl className="mt-8 grid max-w-3xl grid-cols-1 border-y border-white/10 bg-black/15 font-mono text-xs sm:grid-cols-[1.6fr_1fr]">
              <div className="border-white/10 px-4 py-3 sm:border-r">
                <dt className="mb-1 text-[9px] tracking-[0.25em] text-white/35 uppercase">Team</dt>
                <dd className="font-bold tracking-wide text-white/85">Cambridge Institute of Technology</dd>
              </div>
              <div className="border-t border-white/10 px-4 py-3 sm:border-t-0">
                <dt className="mb-1 text-[9px] tracking-[0.25em] text-white/35 uppercase">Season</dt>
                <dd className="font-bold tracking-wide text-[#FFD700]">2023 — 2027</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 bg-[#3671C6] px-6 py-3 font-mono text-xs font-black tracking-[0.15em] text-white uppercase transition hover:bg-[#4784da] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD700]"
                style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 13px) 100%, 0 100%)' }}
              >
                View race entries
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#FFD700]/75 bg-[#FFD700]/5 px-6 py-3 font-mono text-xs font-black tracking-[0.15em] text-[#FFD700] uppercase transition hover:bg-[#FFD700] hover:text-[#0a0a1a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD700]"
                style={{ clipPath: 'polygon(13px 0, 100% 0, 100% 100%, 0 100%, 13px 0)' }}
              >
                <span aria-hidden="true">◉</span>
                Pit wall radio
              </a>
            </div>

            <nav aria-label="Social links" className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase">
              <a className="flex items-center gap-2 text-white/55 transition hover:text-white" href="https://github.com/AKJenaX" target="_blank" rel="noreferrer">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>
                GitHub
              </a>
              <a className="flex items-center gap-2 text-white/55 transition hover:text-[#FFD700]" href="mailto:jenaanupkumar824@gmail.com">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8"><rect x="2.5" y="4.5" width="19" height="15" rx="1" /><path d="m3 6 9 7 9-7" /></svg>
                Email
              </a>
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-3 border border-white/10 bg-black/30 backdrop-blur-sm" aria-label="Sector status">
          {[
            { sector: 'S1', status: 'Personal best', color: '#22c55e' },
            { sector: 'S2', status: 'In progress', color: '#FFD700' },
            { sector: 'S3', status: 'Session best', color: '#a855f7' },
          ].map(({ sector, status, color }, index) => (
            <div key={sector} className={`flex items-center justify-between gap-3 px-3 py-3 sm:px-5 ${index ? 'border-l border-white/10' : ''}`}>
              <div>
                <span className="block font-mono text-sm font-black tracking-wider sm:text-base" style={{ color }}>{sector}</span>
                <span className="hidden text-[8px] tracking-[0.18em] text-white/35 uppercase sm:block">{status}</span>
              </div>
              <span className="h-1.5 w-7 sm:w-12" style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}88` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
