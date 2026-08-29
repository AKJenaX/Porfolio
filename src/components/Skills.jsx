import { useState, lazy, Suspense } from 'react'
import useReveal from '../hooks/useReveal'

const PowerUnitScene = lazy(() => import('./skills3d/PowerUnitScene'))

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
  const [activeGroup, setActiveGroup] = useState('ENGINE')

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-labelledby="skills-heading"
      className={`relative isolate scroll-mt-16 overflow-hidden bg-[#060B26] px-5 py-16 text-white transition-[opacity,transform] duration-1000 ease-out sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
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
          Every championship car is built on a precise set of components. Explore the 3D telemetry core below.
        </h2>

        {/* 3D Interactive Power Unit Telemetry Viewport */}
        <div className="mt-10">
          <Suspense fallback={<div className="h-80 w-full animate-pulse rounded border border-white/8 bg-[#091430]/60 lg:h-96" />}>
            <PowerUnitScene activeGroup={activeGroup} />
          </Suspense>
        </div>

        <div className={`stagger-children mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6 ${isVisible ? 'is-visible' : ''}`}>
          {skillGroups.map(({ name, title, icon, accent, skills }) => {
            const isCardActive = activeGroup === name
            return (
              <article
                key={name}
                onMouseEnter={() => setActiveGroup(name)}
                onClick={() => setActiveGroup(name)}
                className={`cursor-glow skill-card group relative cursor-pointer overflow-hidden border bg-[#091430] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)] sm:p-7 ${
                  isCardActive ? 'border-white/30 scale-[1.01]' : 'border-white/8 hover:border-white/20'
                }`}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
