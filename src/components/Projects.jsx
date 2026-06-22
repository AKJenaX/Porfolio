import useReveal from '../hooks/useReveal'

const projects = [
  {
    name: 'GRAND PRIX DE ECOFLOW',
    position: 'P1',
    accent: '#F7D417',
    status: 'DEPLOYED',
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MySQL',
      'WebSockets',
      'Docker',
      'Leaflet',
      'OpenAI API',
      'GitHub Actions',
    ],
    description:
      'Full-stack smart waste management platform with real-time telemetry streaming, interactive mapping, OpenAI-powered assistance, JWT authentication, and CI/CD deployment.',
    metrics: { uptime: '99.2%', latency: '<80ms', users: '150+' },
  },
  {
    name: 'GRAND PRIX DE HYDROSENSE',
    position: 'P2',
    accent: '#C0C0C0',
    status: 'DEPLOYED',
    tech: ['Node.js', 'Express.js', 'React', 'MongoDB Atlas', 'ESP32', 'Telegram Bot API', 'Razorpay', 'WebSockets'],
    description:
      'End-to-end IoT monitoring platform collecting ESP32 telemetry, processing sensor data, and providing real-time dashboard visibility with automated alerting.',
    metrics: { uptime: '98.5%', latency: '<120ms', sensors: '12' },
  },
  {
    name: 'GRAND PRIX DE BANKSHIELD',
    position: 'P3',
    accent: '#CD7F32',
    status: 'DEPLOYED',
    tech: ['Python', 'FastAPI', 'Docker', 'REST APIs', 'Anomaly Detection'],
    description:
      'Production-grade fraud detection backend with structured logging, alert retrieval APIs, anomaly classification, Docker deployment, and monitoring workflows.',
    metrics: { accuracy: '96.4%', latency: '<50ms', alerts: '1K+' },
  },
  {
    name: 'GRAND PRIX DE MALO',
    position: 'P4',
    accent: '#1E5BC6',
    status: 'LIVE',
    tech: ['Python', 'FastAPI', 'Streamlit', 'Ollama', 'Multi-Agent Systems', 'REST APIs'],
    description:
      'Multi-agent orchestration platform coordinating AI agents through FastAPI services, local LLM inference, stateful task management, and observability tooling.',
    metrics: { agents: '4', latency: '<200ms', tasks: '500+' },
  },
  {
    name: 'GRAND PRIX DE TASKMESH',
    position: 'P5',
    accent: '#FFFFFF',
    status: 'HACKATHON',
    tech: ['Python', 'FastAPI', 'Docker', 'Reinforcement Learning', 'Distributed Systems'],
    description:
      'Distributed task scheduling platform developed during a hackathon to optimize workload execution and reduce scheduling delays through intelligent routing.',
    metrics: { reduction: '40%', nodes: '8', tasks: '2K+' },
  },
]

const statusColors = {
  DEPLOYED: '#22c55e',
  LIVE: '#22c55e',
  HACKATHON: '#1E5BC6',
}

function Projects() {
  const [sectionRef, isVisible] = useReveal(0.12)

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className={`relative isolate scroll-mt-16 overflow-hidden bg-[#060B26] px-5 py-16 text-white transition-[opacity,transform] duration-1000 ease-out sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_28%,rgba(30,91,198,0.1),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-[#DC052D] via-[#F7D417]/45 to-transparent" />
        <p className="font-mono text-[10px] font-bold tracking-[0.28em] text-white/40 uppercase sm:text-xs">
          <span className="text-[#DC052D]">04</span> — RACE ENTRIES
        </p>
        <h2
          id="projects-heading"
          className="mt-5 max-w-3xl text-xl leading-relaxed font-medium text-white/65 sm:text-2xl"
        >
          Every Grand Prix represents a real engineering challenge solved through software.
        </h2>

        <div className={`stagger-children mt-12 space-y-4 sm:space-y-5 ${isVisible ? 'is-visible' : ''}`}>
          {projects.map(({ name, position, accent, status, tech, description, metrics }) => (
            <article
              key={name}
              className="border-trace cursor-glow group relative overflow-hidden border border-l-4 border-white/8 bg-[#091430] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              style={{
                '--project-accent': accent,
                borderLeftColor: accent,
                backgroundImage:
                  'linear-gradient(110deg, rgba(255,255,255,0.02), transparent 48%), repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(30,91,198,0.025) 0px, rgba(30,91,198,0.025) 1px, transparent 1px, transparent 6px)',
                boxShadow: `-5px 0 18px ${accent}1a, 0 18px 45px rgba(0,0,0,0.2)`,
              }}
            >
              <div className="grid sm:grid-cols-[5.5rem_minmax(0,1fr)]">
                {/* Position badge */}
                <div className="flex items-center justify-between border-b border-white/8 bg-black/20 px-4 py-4 sm:flex-col sm:justify-start sm:border-r sm:border-b-0 sm:px-3 sm:py-6">
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-white/25 uppercase">Position</span>
                  <span
                    className="font-mono text-3xl leading-none font-black italic sm:mt-3 sm:text-4xl"
                    style={{
                      color: accent,
                      textShadow: `0 0 20px ${accent}44`,
                    }}
                  >
                    {position}
                  </span>
                </div>

                <div className="min-w-0 p-5 sm:p-6 lg:p-7">
                  {/* Header row */}
                  <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                    <h3
                      className="text-xl leading-tight font-black italic tracking-[-0.02em] uppercase sm:text-2xl lg:text-3xl"
                      style={{ fontFamily: "'Arial Narrow', 'Roboto Condensed', Impact, sans-serif" }}
                    >
                      {name}
                    </h3>
                    <span
                      className="flex shrink-0 items-center gap-2 rounded-full border bg-[#060B26] px-3 py-1 font-mono text-[9px] font-bold tracking-[0.18em] uppercase"
                      style={{ borderColor: accent, color: accent }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: statusColors[status] || accent,
                          boxShadow: `0 0 6px ${statusColors[status] || accent}88`,
                          animation: 'status-blink 2s ease-in-out infinite',
                        }}
                      />
                      {status}
                    </span>
                  </div>

                  <div className="mt-4 h-px w-full bg-gradient-to-r from-white/12 to-transparent" />
                  <p className="mt-4 max-w-5xl text-sm leading-7 text-white/52 sm:text-base sm:leading-8">{description}</p>

                  {/* Telemetry metrics — visible on hover */}
                  <div className="mt-4 grid max-h-0 grid-cols-3 gap-2 overflow-hidden opacity-0 transition-[max-height,opacity,margin] duration-400 ease-out group-hover:mt-5 group-hover:max-h-24 group-hover:opacity-100">
                    {Object.entries(metrics).map(([key, value]) => (
                      <div key={key} className="border border-white/8 bg-[#060B26]/60 p-2.5">
                        <p className="font-mono text-[7px] font-bold tracking-[0.2em] text-white/30 uppercase">{key}</p>
                        <p className="mt-1 font-mono text-sm font-black" style={{ color: accent }}>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border bg-[#060B26] px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-[box-shadow,background-color] duration-200 hover:bg-white/[0.02] hover:shadow-[0_0_10px_var(--project-accent)] sm:text-xs"
                        style={{ borderColor: accent, color: accent }}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/8 pt-5">
                    <a
                      href="https://github.com/AKJenaX?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-btn inline-flex min-h-10 items-center gap-2 bg-[#1E5BC6] px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#2a6ad4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.75 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex min-h-10 items-center gap-2 border border-white/15 px-4 py-2 font-mono text-[10px] font-black tracking-[0.14em] text-white/65 uppercase transition-[border-color,color] hover:border-[var(--project-accent)] hover:text-[var(--project-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                    >
                      Details <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
