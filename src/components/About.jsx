import useReveal from '../hooks/useReveal'

const stats = [
  { label: 'PROJECTS DEPLOYED', value: '5+', accent: '#DC052D' },
  { label: 'TECH STACK SIZE', value: '20+', accent: '#1E5BC6' },
  { label: 'LINES OF CODE', value: '10K+', accent: '#1E5BC6' },
  { label: 'CURRENT LAP', value: '2nd Year', accent: '#F7D417' },
]

function About() {
  const [sectionRef, isVisible] = useReveal()

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className={`relative isolate scroll-mt-16 overflow-hidden bg-[#060B26] px-5 py-16 text-white transition-[opacity,transform] duration-1000 ease-out sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_50%,rgba(30,91,198,0.1),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-[#DC052D] via-[#DC052D]/45 to-transparent" />
        <p className="mb-12 font-mono text-[10px] font-bold tracking-[0.28em] text-white/40 uppercase sm:text-xs">
          <span className="text-[#DC052D]">02</span> — DRIVER PROFILE
        </p>

        <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-0">
          <div className="lg:border-r lg:border-[#DC052D]/35 lg:pr-10 xl:pr-14">
            <article
              aria-label="Driver identification card"
              className="border-trace relative h-full min-h-[410px] overflow-hidden border border-white/8 bg-[#091430] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.4)] transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#1E5BC6]/40 sm:min-h-[430px] sm:p-8"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(30,91,198,0.14), transparent 48%), repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(30,91,198,0.035) 0px, rgba(30,91,198,0.035) 1px, transparent 1px, transparent 6px)',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)',
              }}
            >
              <div aria-hidden="true" className="absolute top-0 left-0 h-1 w-24 bg-[#DC052D] shadow-[0_0_10px_rgba(220,5,45,0.4)]" />
              <div
                aria-hidden="true"
                className="absolute -right-2 top-10 select-none text-[clamp(10rem,23vw,17rem)] leading-none font-black italic tracking-[-0.09em] text-white/[0.025]"
                style={{ fontFamily: "'Arial Narrow', Impact, sans-serif" }}
              >
                #19
              </div>

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#DC052D] uppercase sm:text-xs">
                    Driver Profile
                  </p>
                  <span className="border border-[#1E5BC6]/50 bg-[#1E5BC6]/10 px-2 py-1 font-mono text-[9px] tracking-[0.18em] text-[#5a9ae8] uppercase">
                    CIT / 19
                  </span>
                </div>

                <div className="mt-auto pt-28">
                  <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase">Driver</p>
                  <h2
                    id="about-heading"
                    className="max-w-md text-4xl leading-[0.9] font-black italic tracking-[-0.035em] uppercase sm:text-5xl"
                    style={{ fontFamily: "'Arial Narrow', 'Roboto Condensed', Impact, sans-serif" }}
                  >
                    ANUP KUMAR <span className="text-[#1E5BC6]">JENA</span>
                  </h2>

                  <dl className="mt-8 divide-y divide-white/8 border-y border-white/8 font-mono text-xs">
                    <div className="grid grid-cols-[7rem_1fr] gap-3 py-3">
                      <dt className="text-[9px] tracking-[0.2em] text-white/30 uppercase">Nationality</dt>
                      <dd className="font-bold tracking-[0.1em]">🇮🇳 INDIAN</dd>
                    </div>
                    <div className="grid grid-cols-[7rem_1fr] gap-3 py-3">
                      <dt className="text-[9px] tracking-[0.2em] text-white/30 uppercase">Team</dt>
                      <dd className="font-bold leading-relaxed text-white/80">Cambridge Institute of Technology</dd>
                    </div>
                    <div className="grid grid-cols-[7rem_1fr] items-center gap-3 py-3">
                      <dt className="text-[9px] tracking-[0.2em] text-white/30 uppercase">Status</dt>
                      <dd className="flex items-center gap-2 font-bold tracking-wide text-[#F7D417]">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                        ACTIVE — 2nd Year
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col justify-center lg:pl-10 xl:pl-14">
            <p className="font-mono text-[10px] font-bold tracking-[0.28em] text-[#DC052D] uppercase sm:text-xs">
              About the driver
            </p>
            <h3 className="mt-4 max-w-2xl text-3xl leading-tight font-black tracking-[-0.025em] uppercase sm:text-4xl">
              Engineering systems for the <span className="text-[#1E5BC6]">fast lane.</span>
            </h3>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Computer Science undergraduate specializing in Cybersecurity and IoT. I build full-stack web
              applications and backend systems using React, Node.js, FastAPI, and Docker. Passionate about
              high-throughput, low-latency systems and real-time data pipelines. Currently learning Go to push my
              backend capabilities further.
            </p>

            <div className={`stagger-children mt-10 grid grid-cols-2 border border-white/8 bg-[#091430]/80 ${isVisible ? 'is-visible' : ''}`}>
              {stats.map(({ label, value, accent }, index) => (
                <div
                  key={label}
                  className={`cursor-glow relative min-h-32 overflow-hidden p-4 transition-colors duration-200 hover:bg-white/[0.02] sm:min-h-36 sm:p-6 ${
                    index % 2 ? 'border-l border-white/8' : ''
                  } ${index > 1 ? 'border-t border-white/8' : ''}`}
                >
                  <span className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: accent }} />
                  <p className="font-mono text-[8px] font-bold tracking-[0.18em] text-white/35 uppercase sm:text-[10px] sm:tracking-[0.22em]">
                    {label}
                  </p>
                  <p
                    className="mt-4 text-3xl leading-none font-black italic tracking-tight sm:text-4xl"
                    style={{ color: accent, fontFamily: "'Arial Narrow', Impact, sans-serif" }}
                  >
                    {value}
                  </p>
                  <div className="mt-4 flex items-center gap-1" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <span
                        key={bar}
                        className="h-1 flex-1 rounded-full"
                        style={{ backgroundColor: bar < 4 ? `${accent}88` : 'rgba(255,255,255,0.06)' }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
