import useReveal from '../hooks/useReveal'

const timelineEntries = [
  {
    season: '2023 – Present',
    title: 'B.Tech Computer Science Engineering (IoT & Cybersecurity)',
    organization: 'Cambridge Institute of Technology',
    status: 'ACTIVE',
    description:
      'Focused on cybersecurity, IoT systems, Linux, networking, distributed systems, backend engineering, Android development, and cloud-native technologies.',
    accent: '#DC052D',
  },
  {
    title: 'OpenEnv India 2026',
    status: 'TOP 800 / 31,000+',
    description: 'Ranked among the top 800 teams nationwide during OpenEnv India 2026.',
    accent: '#1E5BC6',
  },
  {
    title: 'INNOVEX 2.0',
    status: '2ND PRIZE WINNER',
    description: 'Recognized for technical innovation and practical engineering execution.',
    accent: '#F7D417',
  },
  {
    title: 'Copado Certified AI Professional',
    status: 'CERTIFIED',
    description: 'Professional certification covering AI-assisted automation and DevOps workflows.',
    accent: '#1E5BC6',
  },
  {
    title: 'IBM AI Literacy',
    status: 'CERTIFIED',
    description: 'Completed foundational AI and responsible AI learning program.',
    accent: '#DC052D',
  },
  {
    title: 'Meta OpenEnv Hackathon',
    status: 'PARTICIPANT',
    description: 'Built TaskMesh, a reinforcement-learning-based distributed task scheduling platform.',
    accent: '#1E5BC6',
  },
]

const telemetry = [
  { label: 'PROJECTS BUILT', value: '5+', accent: '#DC052D' },
  { label: 'TECH STACKS', value: '20+', accent: '#1E5BC6' },
  { label: 'YEARS CODING', value: '3+', accent: '#1E5BC6' },
  { label: 'CURRENT STATUS', value: 'BUILDING FAST', accent: '#F7D417' },
  { label: 'PRIMARY FOCUS', value: 'BACKEND + ANDROID', accent: '#DC052D' },
  { label: 'NEXT TARGET', value: 'GO + SYSTEM DESIGN', accent: '#1E5BC6' },
]

function Experience() {
  const [sectionRef, isVisible] = useReveal(0.1)

  return (
    <section
      ref={sectionRef}
      id="experience"
      aria-labelledby="experience-heading"
      className={`relative isolate scroll-mt-16 overflow-hidden bg-[#060B26] px-5 py-16 text-white transition-[opacity,transform] duration-1000 ease-out sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_30%,rgba(30,91,198,0.08),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-[#DC052D] via-[#1E5BC6]/45 to-transparent" />
        <p className="font-mono text-[10px] font-bold tracking-[0.28em] text-white/40 uppercase sm:text-xs">
          <span className="text-[#DC052D]">05</span> — CHAMPIONSHIP STANDINGS
        </p>
        <h2
          id="experience-heading"
          className="mt-5 max-w-3xl text-xl leading-relaxed font-medium text-white/65 sm:text-2xl"
        >
          Every season contributes to the driver&apos;s growth.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(19rem,0.65fr)] lg:gap-10 xl:gap-14">
          <div className="relative">
            {/* Timeline line */}
            <div
              aria-hidden="true"
              className="absolute top-3 bottom-3 left-[0.45rem] w-px sm:left-[5.7rem]"
              style={{
                background: 'linear-gradient(to bottom, #DC052D, #1E5BC6, rgba(255,255,255,0.06))',
              }}
            />

            <ol className={`stagger-children space-y-5 ${isVisible ? 'is-visible' : ''}`}>
              {timelineEntries.map(({ season, title, organization, status, description, accent }, index) => (
                <li key={title} className="relative grid gap-4 pl-8 sm:grid-cols-[4.6rem_minmax(0,1fr)] sm:gap-8 sm:pl-0">
                  <div className="pt-5 text-left sm:text-right">
                    <span className="font-mono text-[9px] font-bold leading-relaxed tracking-[0.12em] text-white/35 uppercase">
                      {season || String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Timeline diamond */}
                  <span
                    aria-hidden="true"
                    className="absolute top-6 left-1 h-3 w-3 rotate-45 border-2 bg-[#060B26] sm:left-[5.35rem]"
                    style={{
                      borderColor: accent,
                      boxShadow: `0 0 12px ${accent}66`,
                      animation: 'pulse-glow 3s ease-in-out infinite',
                      '--glow-color': `${accent}88`,
                    }}
                  />

                  <article
                    className="cursor-glow relative overflow-hidden border border-white/8 bg-[#091430] p-5 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/15 sm:p-6"
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, rgba(255,255,255,0.02), transparent 52%), repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(30,91,198,0.025) 0px, rgba(30,91,198,0.025) 1px, transparent 1px, transparent 6px)',
                    }}
                  >
                    <div className="absolute top-0 left-0 h-full w-0.5" style={{ backgroundColor: accent }} />
                    <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                      <h3 className="text-lg leading-snug font-black tracking-[-0.015em] uppercase sm:text-xl">{title}</h3>
                      <span
                        className="shrink-0 rounded-full border bg-[#060B26] px-3 py-1 font-mono text-[9px] font-bold tracking-[0.16em] uppercase"
                        style={{ borderColor: accent, color: accent }}
                      >
                        {status}
                      </span>
                    </div>
                    {organization && (
                      <p className="mt-2 font-mono text-[10px] font-bold tracking-[0.12em] text-[#1E5BC6] uppercase">
                        {organization}
                      </p>
                    )}
                    <p className="mt-4 text-sm leading-7 text-white/50">{description}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {/* Telemetry sidebar */}
          <aside aria-label="Driver telemetry summary" className="lg:sticky lg:top-8 lg:self-start">
            <div className="mb-3 flex items-center justify-between font-mono text-[9px] font-bold tracking-[0.2em] uppercase">
              <span className="text-[#DC052D]">Live telemetry</span>
              <span className="flex items-center gap-2 text-white/30">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                  style={{ animation: 'status-blink 2s ease-in-out infinite' }}
                />
                Data feed
              </span>
            </div>

            <div
              className="grid grid-cols-2 border border-white/8 bg-[#091430]"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(255,255,255,0.02), transparent 52%), repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(30,91,198,0.025) 0px, rgba(30,91,198,0.025) 1px, transparent 1px, transparent 6px)',
              }}
            >
              {telemetry.map(({ label, value, accent }, index) => (
                <div
                  key={label}
                  className={`relative min-h-32 overflow-hidden p-4 transition-colors duration-200 hover:bg-white/[0.02] sm:min-h-36 sm:p-5 ${
                    index % 2 ? 'border-l border-white/8' : ''
                  } ${index > 1 ? 'border-t border-white/8' : ''}`}
                >
                  <span className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: accent }} />
                  <p className="font-mono text-[8px] font-bold tracking-[0.18em] text-white/35 uppercase sm:text-[9px]">
                    {label}
                  </p>
                  <p
                    className="mt-4 text-xl leading-tight font-black italic tracking-tight uppercase sm:text-2xl"
                    style={{ color: accent, fontFamily: "'Arial Narrow', Impact, sans-serif" }}
                  >
                    {value}
                  </p>
                  <div className="absolute right-4 bottom-4 left-4 flex gap-1" aria-hidden="true">
                    {[0, 1, 2, 3].map((bar) => (
                      <span
                        key={bar}
                        className="h-0.5 flex-1 rounded-full"
                        style={{ backgroundColor: bar < 3 ? `${accent}77` : 'rgba(255,255,255,0.06)' }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Experience
