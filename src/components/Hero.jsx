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
      className="relative isolate flex min-h-[calc(100svh-4rem)] w-full scroll-mt-16 overflow-hidden bg-[#060B26] text-white scan-line-overlay"
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
          0%, 100% { opacity: .45; box-shadow: 0 0 0 0 rgba(220, 5, 45, 0); }
          50% { opacity: 1; box-shadow: 0 0 14px 3px rgba(220, 5, 45, .4); }
        }
        @keyframes hero-title-glow {
          0%, 100% { text-shadow: 0 0 40px rgba(30,91,198,0.15), 0 4px 30px rgba(0,0,0,0.45); }
          50% { text-shadow: 0 0 60px rgba(30,91,198,0.3), 0 4px 30px rgba(0,0,0,0.45); }
        }
        @keyframes hero-grid-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .hero-speed-line { animation: hero-speed-pass 7s linear infinite; }
        .hero-status-pulse { animation: hero-status-pulse 1.8s ease-in-out infinite; }
        .hero-title-glow { animation: hero-title-glow 4s ease-in-out infinite; }
        .hero-grid-pulse { animation: hero-grid-pulse 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-speed-line, .hero-status-pulse, .hero-title-glow, .hero-grid-pulse { animation: none; }
        }
      `}</style>

      {/* Top accent line — RB Red */}
      <div className="absolute inset-x-0 top-0 z-30 h-1 bg-[#DC052D] shadow-[0_0_18px_rgba(220,5,45,0.65)]" />

      {/* Telemetry grid background */}
      <div
        aria-hidden="true"
        className="hero-grid-pulse absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,91,198,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,91,198,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Carbon fiber texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 5px), repeating-linear-gradient(-45deg, rgba(30,91,198,0.05) 0px, rgba(30,91,198,0.05) 1px, transparent 1px, transparent 5px)',
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_35%,rgba(30,91,198,0.2),transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(220,5,45,0.08),transparent_50%),linear-gradient(90deg,#060B26_0%,rgba(6,11,38,0.9)_48%,rgba(6,11,38,0.45)_100%)]"
      />

      {/* Speed lines */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden opacity-60">
        <span className="hero-speed-line absolute top-[18%] left-0 h-px w-2/3 bg-gradient-to-r from-transparent via-[#1E5BC6] to-transparent" />
        <span className="hero-speed-line absolute top-[32%] left-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#DC052D] to-transparent [animation-delay:-2.4s] [animation-duration:8.5s]" />
        <span className="hero-speed-line absolute top-[47%] left-0 h-px w-3/4 bg-gradient-to-r from-transparent via-white/50 to-transparent [animation-delay:-5.2s] [animation-duration:9.5s]" />
        <span className="hero-speed-line absolute top-[62%] left-0 h-px w-2/5 bg-gradient-to-r from-transparent via-[#1E5BC6] to-transparent [animation-delay:-3.7s] [animation-duration:6.5s]" />
        <span className="hero-speed-line absolute top-[78%] left-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-[#DC052D]/70 to-transparent [animation-delay:-1.2s] [animation-duration:10s]" />
      </div>

      {/* Large background number */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[2vw] top-1/2 -translate-y-1/2 select-none text-[clamp(18rem,44vw,48rem)] leading-none font-black italic tracking-[-0.1em] text-[#1E5BC6]/[0.06]"
        style={{ fontFamily: "'Arial Narrow', Impact, sans-serif" }}
      >
        #44
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pt-16 pb-5 sm:px-8 lg:px-12 lg:pt-20">
        {/* Telemetry header bar */}
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-white/8 pb-5 font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase sm:text-xs">
          <div className="flex items-center gap-3">
            <span className="hero-status-pulse h-2.5 w-2.5 rounded-full bg-[#DC052D]" />
            <span>Driver telemetry / Live</span>
          </div>

          <div className="flex items-stretch overflow-hidden border border-white/12 bg-[#091430]/80 backdrop-blur-sm">
            <span className="flex items-center border-r border-white/12 px-3 text-[#DC052D] font-bold">Lap 01</span>
            <div className="px-4 py-2 text-right">
              <span className="block text-[8px] leading-none tracking-[0.28em] text-white/30">Lap time</span>
              <time className="mt-1 block min-w-[9ch] text-sm font-bold tracking-wider text-white sm:text-base" style={{ textShadow: '0 0 10px rgba(220,5,45,0.3)' }}>
                {lapTime}
              </time>
            </div>
          </div>
        </header>

        {/* Hero body */}
        <div className="flex flex-1 items-center py-12 sm:py-16 lg:py-20">
          <div className="w-full max-w-5xl">
            {/* Badge */}
            <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold tracking-[0.14em] uppercase sm:text-xs sm:tracking-[0.24em]">
              <span className="bg-[#DC052D] px-3 py-1.5 text-white shadow-[0_0_12px_rgba(220,5,45,0.4)]">#44</span>
              <span className="text-[#F7D417]">Full-Stack Engineer &amp; Backend Specialist</span>
            </div>

            {/* Title */}
            <h1
              id="hero-title"
              className="hero-title-glow max-w-5xl text-[clamp(2.65rem,9vw,8.5rem)] leading-[0.82] font-black italic tracking-[-0.055em] uppercase"
              style={{ fontFamily: "'Arial Narrow', 'Roboto Condensed', Impact, sans-serif" }}
            >
              <span className="block text-white">ANUP KUMAR</span>
              <span className="block text-[#1E5BC6]">JENA</span>
            </h1>

            {/* Divider line */}
            <div className="mt-7 h-px w-full max-w-3xl bg-gradient-to-r from-[#DC052D] via-[#1E5BC6] to-transparent" />

            {/* Tagline */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-medium text-white/68 sm:text-xl">
              &quot;Building high-throughput systems at the speed of thought&quot;
            </p>

            {/* Driver card — Team/Season */}
            <dl className="border-trace mt-8 grid max-w-3xl grid-cols-1 border-y border-white/8 bg-[#091430]/60 font-mono text-xs sm:grid-cols-[1.6fr_1fr]">
              <div className="border-white/8 px-4 py-3 sm:border-r">
                <dt className="mb-1 text-[9px] tracking-[0.25em] text-white/30 uppercase">Team</dt>
                <dd className="font-bold tracking-wide text-white/85">Cambridge Institute of Technology</dd>
              </div>
              <div className="border-t border-white/8 px-4 py-3 sm:border-t-0">
                <dt className="mb-1 text-[9px] tracking-[0.25em] text-white/30 uppercase">Season</dt>
                <dd className="font-bold tracking-wide text-[#F7D417]">2023 — 2027</dd>
              </div>
            </dl>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="magnetic-btn group inline-flex min-h-12 items-center justify-center gap-3 bg-[#1E5BC6] px-6 py-3 font-mono text-xs font-black tracking-[0.15em] text-white uppercase transition hover:bg-[#2a6ad4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 13px) 100%, 0 100%)' }}
              >
                View race entries
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="magnetic-btn inline-flex min-h-12 items-center justify-center gap-3 border border-[#DC052D]/75 bg-[#DC052D]/5 px-6 py-3 font-mono text-xs font-black tracking-[0.15em] text-[#DC052D] uppercase transition hover:bg-[#DC052D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                style={{ clipPath: 'polygon(13px 0, 100% 0, 100% 100%, 0 100%, 13px 0)' }}
              >
                <span aria-hidden="true">◉</span>
                Pit wall radio
              </a>
            </div>

            {/* Social links */}
            <nav aria-label="Social links" className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase">
              <a className="flex items-center gap-2 text-white/50 transition hover:text-[#DC052D]" href="https://github.com/AKJenaX" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>
                GitHub
              </a>
              <a className="flex items-center gap-2 text-white/50 transition hover:text-[#F7D417]" href="mailto:jenaanupkumar824@gmail.com">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8"><rect x="2.5" y="4.5" width="19" height="15" rx="1" /><path d="m3 6 9 7 9-7" /></svg>
                Email
              </a>
            </nav>
          </div>
        </div>

        {/* Sector status bar */}
        <div className="grid grid-cols-3 border border-white/8 bg-[#091430]/60 backdrop-blur-sm" aria-label="Sector status">
          {[
            { sector: 'S1', status: 'Personal best', color: '#DC052D' },
            { sector: 'S2', status: 'In progress', color: '#1E5BC6' },
            { sector: 'S3', status: 'Session best', color: '#F7D417' },
          ].map(({ sector, status, color }, index) => (
            <div key={sector} className={`flex items-center justify-between gap-3 px-3 py-3 sm:px-5 ${index ? 'border-l border-white/8' : ''}`}>
              <div>
                <span className="block font-mono text-sm font-black tracking-wider sm:text-base" style={{ color }}>{sector}</span>
                <span className="hidden text-[8px] tracking-[0.18em] text-white/30 uppercase sm:block">{status}</span>
              </div>
              <span className="h-1.5 w-7 rounded-full sm:w-12" style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}66` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
