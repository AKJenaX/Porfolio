import useReveal from '../hooks/useReveal'

const LED_LIGHTS = [
  // 1-5: Low RPM Green
  { id: 1, color: '#22C55E', shadow: 'rgba(34,197,94,0.9)' },
  { id: 2, color: '#22C55E', shadow: 'rgba(34,197,94,0.9)' },
  { id: 3, color: '#22C55E', shadow: 'rgba(34,197,94,0.9)' },
  { id: 4, color: '#22C55E', shadow: 'rgba(34,197,94,0.9)' },
  { id: 5, color: '#22C55E', shadow: 'rgba(34,197,94,0.9)' },
  // 6-10: Mid RPM Red
  { id: 6, color: '#DC052D', shadow: 'rgba(220,5,45,0.9)' },
  { id: 7, color: '#DC052D', shadow: 'rgba(220,5,45,0.9)' },
  { id: 8, color: '#DC052D', shadow: 'rgba(220,5,45,0.9)' },
  { id: 9, color: '#DC052D', shadow: 'rgba(220,5,45,0.9)' },
  { id: 10, color: '#DC052D', shadow: 'rgba(220,5,45,0.9)' },
  // 11-15: Optimal Shift Point Purple/Blue
  { id: 11, color: '#A855F7', shadow: 'rgba(168,85,247,0.9)' },
  { id: 12, color: '#A855F7', shadow: 'rgba(168,85,247,0.9)' },
  { id: 13, color: '#A855F7', shadow: 'rgba(168,85,247,0.9)' },
  { id: 14, color: '#A855F7', shadow: 'rgba(168,85,247,0.9)' },
  { id: 15, color: '#A855F7', shadow: 'rgba(168,85,247,0.9)' },
]

const skillGroups = [
  {
    name: 'ENGINE',
    title: 'Backend & APIs',
    icon: '⚙️',
    accent: '#DC052D',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST API Design',
      'Pydantic',
      'Streamlit',
      'WebSockets',
      'Microservices',
      'Go (learning)',
    ],
  },
  {
    name: 'POWER UNIT',
    title: 'ML, AI & Reinforcement Learning',
    icon: '🧠',
    accent: '#F7D417',
    skills: [
      'PyTorch',
      'Scikit-learn',
      'Reinforcement Learning (OpenEnv)',
      'Policy Gradients',
      'OpenAI API',
      'Groq LLM API',
    ],
  },
  {
    name: 'AERODYNAMICS',
    title: 'Frontend & Mobile',
    icon: '🔵',
    accent: '#1E5BC6',
    skills: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'TypeScript',
      'JavaScript',
      'Three.js',
      'Framer Motion',
      'Kotlin',
      'Jetpack Compose (MVVM)',
      'Firebase',
    ],
  },
  {
    name: 'FUEL SYSTEMS',
    title: 'Databases & ORM',
    icon: '🛢️',
    accent: '#CCCCCC',
    skills: [
      'MySQL',
      'MongoDB Atlas (Motor async)',
      'SQLite',
      'SQLAlchemy & Alembic',
      'SQL Query Optimization',
    ],
  },
  {
    name: 'ELECTRONICS',
    title: 'DevOps & Cloud',
    icon: '⚡',
    accent: '#1E5BC6',
    skills: [
      'Docker',
      'GitHub Actions',
      'CI/CD Pipelines',
      'Containerization',
      'Vercel',
      'Linux/Unix',
      'Bash Scripting',
      'Git',
    ],
  },
  {
    name: 'TELEMETRY',
    title: 'Languages & IoT Hardware',
    icon: '🏎️',
    accent: '#DC052D',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Kotlin',
      'Java',
      'C',
      'IoT Systems (ESP32)',
      'Structured Logging',
    ],
  },
]

function Skills() {
  const [sectionRef, isVisible] = useReveal()

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-labelledby="skills-heading"
      className={`relative isolate scroll-mt-16 overflow-hidden bg-[#060B26] px-5 py-16 text-white transition-[opacity,transform] duration-1000 ease-out sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {/* Dynamic CSS styles for progressive F1 rev-limiter LED sequence */}
      <style>{`
        .shift-led {
          transition: background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          opacity: 0.2;
          background-color: #334155;
        }
        .skill-card:hover .shift-led {
          opacity: 1;
        }
        .skill-card:hover .shift-led-1 { transition-delay: 30ms; background-color: #22C55E; box-shadow: 0 0 6px #22C55E; }
        .skill-card:hover .shift-led-2 { transition-delay: 60ms; background-color: #22C55E; box-shadow: 0 0 6px #22C55E; }
        .skill-card:hover .shift-led-3 { transition-delay: 90ms; background-color: #22C55E; box-shadow: 0 0 6px #22C55E; }
        .skill-card:hover .shift-led-4 { transition-delay: 120ms; background-color: #22C55E; box-shadow: 0 0 6px #22C55E; }
        .skill-card:hover .shift-led-5 { transition-delay: 150ms; background-color: #22C55E; box-shadow: 0 0 6px #22C55E; }
        .skill-card:hover .shift-led-6 { transition-delay: 180ms; background-color: #DC052D; box-shadow: 0 0 6px #DC052D; }
        .skill-card:hover .shift-led-7 { transition-delay: 210ms; background-color: #DC052D; box-shadow: 0 0 6px #DC052D; }
        .skill-card:hover .shift-led-8 { transition-delay: 240ms; background-color: #DC052D; box-shadow: 0 0 6px #DC052D; }
        .skill-card:hover .shift-led-9 { transition-delay: 270ms; background-color: #DC052D; box-shadow: 0 0 6px #DC052D; }
        .skill-card:hover .shift-led-10 { transition-delay: 300ms; background-color: #DC052D; box-shadow: 0 0 6px #DC052D; }
        .skill-card:hover .shift-led-11 { transition-delay: 330ms; background-color: #A855F7; box-shadow: 0 0 8px #A855F7; }
        .skill-card:hover .shift-led-12 { transition-delay: 360ms; background-color: #A855F7; box-shadow: 0 0 8px #A855F7; }
        .skill-card:hover .shift-led-13 { transition-delay: 390ms; background-color: #A855F7; box-shadow: 0 0 8px #A855F7; }
        .skill-card:hover .shift-led-14 { transition-delay: 420ms; background-color: #A855F7; box-shadow: 0 0 8px #A855F7; }
        .skill-card:hover .shift-led-15 { transition-delay: 450ms; background-color: #A855F7; box-shadow: 0 0 8px #A855F7; }
      `}</style>

      {/* Section sweep calibration line */}
      {isVisible && (
        <div className="section-sweep-line" style={{ '--sweep-color': '#1E5BC6' }} />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_45%,rgba(30,91,198,0.08),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-[#DC052D] via-[#1E5BC6]/45 to-transparent" />
        <p className="font-mono text-[10px] font-bold tracking-[0.28em] text-white/40 uppercase sm:text-xs">
          <span className="text-[#DC052D]">03</span> — TECHNICAL SPECIFICATIONS
        </p>
        <h2 id="skills-heading" className="mt-5 max-w-3xl text-xl leading-relaxed font-medium text-white/65 sm:text-2xl">
          Every championship car is built on a precise set of components. Here&apos;s mine.
        </h2>

        <div className={`stagger-children mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6 ${isVisible ? 'is-visible' : ''}`}>
          {skillGroups.map(({ name, title, icon, accent, skills }) => (
            <article
              key={name}
              className="cursor-glow skill-card group relative overflow-hidden border border-white/8 bg-[#091430] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-white/15 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)] sm:p-7"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(255,255,255,0.02), transparent 55%), repeating-linear-gradient(45deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(30,91,198,0.025) 0px, rgba(30,91,198,0.025) 1px, transparent 1px, transparent 6px)',
              }}
            >
              {/* Left accent bar — grows on hover */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-0.5 transition-all duration-500 ease-out group-hover:h-full"
                style={{
                  backgroundColor: accent,
                  height: '4rem',
                  boxShadow: `0 0 8px ${accent}44`,
                }}
              />

              <header className="pb-4" style={{ borderBottom: `2px solid ${accent}` }}>
                {/* 15-LED Formula 1 Rev-Limiter / Shift Light Bar */}
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                  {/* Shift Lights Array */}
                  <div className="flex items-center gap-1">
                    {LED_LIGHTS.map((led) => (
                      <span
                        key={led.id}
                        className={`shift-led shift-led-${led.id} h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Telemetry RPM Status badge */}
                  <div className="font-mono text-[8px] tracking-wider uppercase text-white/40 group-hover:text-[#F7D417] transition-colors">
                    <span className="group-hover:hidden">RPM // IDLE 4,200</span>
                    <span className="hidden group-hover:inline font-bold text-[#A855F7] animate-pulse">
                      15,000 RPM // SHIFT POINT
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-xl leading-none" aria-hidden="true">{icon}</span>
                  <div>
                    <h3 className="font-mono text-sm font-black tracking-[0.2em] uppercase sm:text-base" style={{ color: accent }}>
                      {name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-white/45 uppercase sm:text-sm">{title}</p>
                  </div>
                </div>
              </header>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border bg-[#060B26] px-3 py-1 text-xs font-bold tracking-wider uppercase transition-[box-shadow,background-color] duration-200 hover:bg-white/[0.025] hover:shadow-[0_0_10px_var(--skill-accent)]"
                    style={{
                      '--skill-accent': accent,
                      borderColor: accent,
                      color: accent,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
