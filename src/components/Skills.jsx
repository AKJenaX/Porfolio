import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    name: 'ENGINE',
    title: 'Backend & APIs',
    icon: '⚙️',
    accent: '#E8002D',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Python',
      'Go (learning)',
      'REST API Design',
      'Microservices',
      'WebSockets',
    ],
  },
  {
    name: 'AERODYNAMICS',
    title: 'Frontend',
    icon: '🔵',
    accent: '#3671C6',
    skills: ['React.js', 'Next.js (learning)', 'Vite', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'ELECTRONICS',
    title: 'DevOps & Cloud',
    icon: '⚡',
    accent: '#FFD700',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Vercel', 'Azure', 'AWS/GCP', 'Linux', 'Bash'],
  },
  {
    name: 'FUEL SYSTEMS',
    title: 'Databases',
    icon: '🛢️',
    accent: '#CCCCCC',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'MongoDB Atlas', 'Redis', 'SQL Optimization'],
  },
]

function Skills() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px' },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-labelledby="skills-heading"
      className={`relative isolate overflow-hidden bg-[#0a0a1a] px-5 py-20 text-white transition-[opacity,transform] duration-1000 ease-out sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(54,113,198,0.1),transparent_32%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-[#FFD700] via-[#FFD700]/55 to-transparent" />
        <p className="font-mono text-[10px] font-bold tracking-[0.28em] text-white/45 uppercase sm:text-xs">
          <span className="text-[#FFD700]">03</span> — TECHNICAL SPECIFICATIONS
        </p>
        <h2 id="skills-heading" className="mt-5 max-w-3xl text-xl leading-relaxed font-medium text-white/70 sm:text-2xl">
          Every championship car is built on a precise set of components. Here&apos;s mine.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {skillGroups.map(({ name, title, icon, accent, skills }) => (
            <article
              key={name}
              className="group relative overflow-hidden border border-white/10 bg-[#0d1b2a] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-out hover:-translate-y-0.5 sm:p-7"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(255,255,255,0.025), transparent 55%), repeating-linear-gradient(45deg, rgba(255,255,255,0.024) 0px, rgba(255,255,255,0.024) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(54,113,198,0.035) 0px, rgba(54,113,198,0.035) 1px, transparent 1px, transparent 6px)',
              }}
            >
              <div aria-hidden="true" className="absolute top-0 left-0 h-16 w-0.5" style={{ backgroundColor: accent }} />

              <header className="pb-4" style={{ borderBottom: `2px solid ${accent}` }}>
                <div className="flex items-start gap-3">
                  <span className="text-xl leading-none" aria-hidden="true">{icon}</span>
                  <div>
                    <h3 className="font-mono text-sm font-black tracking-[0.2em] uppercase sm:text-base" style={{ color: accent }}>
                      {name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-white/50 uppercase sm:text-sm">{title}</p>
                  </div>
                </div>
              </header>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border bg-[#0a0a1a] px-3 py-1 text-xs font-bold tracking-wider uppercase transition-[box-shadow,background-color] duration-200 hover:bg-white/[0.025] hover:shadow-[0_0_8px_var(--skill-accent)]"
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
