import useReveal from '../hooks/useReveal'

const contactItems = [
  {
    label: 'EMAIL',
    value: 'jenaanupkumar824@gmail.com',
    href: 'mailto:jenaanupkumar824@gmail.com',
    accent: '#FFD700',
  },
  {
    label: 'GITHUB',
    value: 'github.com/AKJenaX',
    href: 'https://github.com/AKJenaX',
    accent: '#3671C6',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/anup-kumar-jena',
    href: 'https://www.linkedin.com/in/anup-kumar-jena',
    accent: '#3671C6',
  },
  {
    label: 'LOCATION',
    value: 'Bengaluru, India',
    accent: '#FFD700',
  },
]

const telemetryItems = [
  { label: 'STATUS', value: 'AVAILABLE FOR OPPORTUNITIES', accent: '#22c55e' },
  { label: 'PRIMARY ROLE', value: 'BACKEND ENGINEER', accent: '#FFD700' },
  { label: 'SECONDARY ROLE', value: 'ANDROID DEVELOPER', accent: '#3671C6' },
  { label: 'CURRENT FOCUS', value: 'GO + SYSTEM DESIGN', accent: '#FFD700' },
  { label: 'RESPONSE TIME', value: '< 24 HOURS', accent: '#3671C6' },
  { label: 'OPEN SOURCE', value: 'ACTIVE', accent: '#22c55e' },
]

const carbonTexture =
  'linear-gradient(135deg, rgba(255,255,255,0.024), transparent 52%), repeating-linear-gradient(45deg, rgba(255,255,255,0.022) 0px, rgba(255,255,255,0.022) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(54,113,198,0.032) 0px, rgba(54,113,198,0.032) 1px, transparent 1px, transparent 6px)'

function ContactCard({ item }) {
  const { label, value, href, accent } = item
  const content = (
    <>
      <span className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: accent }} />
      <span className="flex items-center justify-between gap-3">
        <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-white/35 uppercase">{label}</span>
        <span className="h-1.5 w-8" style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}77` }} />
      </span>
      <span className="mt-3 block truncate text-sm font-bold text-white/75 transition-colors group-hover:text-[var(--contact-accent)]">
        {value}
      </span>
      {href && (
        <span aria-hidden="true" className="absolute right-4 bottom-3 text-xs text-white/20 transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-[var(--contact-accent)]">
          ↗
        </span>
      )}
    </>
  )
  const className =
    'group relative block min-w-0 overflow-hidden border border-white/10 bg-[#0d1b2a] p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[var(--contact-accent)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD700] sm:p-5'
  const style = { '--contact-accent': accent, backgroundImage: carbonTexture }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className={className}
        style={style}
        title={value}
      >
        {content}
      </a>
    )
  }

  return (
    <div className={className} style={style} title={value}>
      {content}
    </div>
  )
}

function Contact() {
  const [sectionRef, isVisible] = useReveal(0.1)

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="contact-heading"
      className={`relative isolate scroll-mt-16 overflow-hidden bg-[#0a0a1a] px-5 pt-16 text-white transition-[opacity,transform] duration-1000 ease-out sm:px-8 sm:pt-24 lg:px-12 lg:pt-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(54,113,198,0.13),transparent_34%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-[#FFD700] via-[#FFD700]/55 to-transparent" />
        <p className="font-mono text-[10px] font-bold tracking-[0.28em] text-white/45 uppercase sm:text-xs">
          <span className="text-[#FFD700]">06</span> — PIT WALL RADIO
        </p>
        <h2
          id="contact-heading"
          className="mt-5 max-w-3xl text-xl leading-relaxed font-medium text-white/70 sm:text-2xl"
        >
          Every race-winning partnership starts with communication.
        </h2>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-[0.26em] text-[#FFD700] uppercase sm:text-xs">
              Radio channel / 44
            </p>
            <h3
              className="mt-3 text-4xl leading-none font-black italic tracking-[-0.035em] uppercase sm:text-5xl"
              style={{ fontFamily: "'Arial Narrow', 'Roboto Condensed', Impact, sans-serif" }}
            >
              Get in <span className="text-[#3671C6]">touch</span>
            </h3>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/58 sm:text-base sm:leading-8">
              Interested in backend engineering, Android development, AI systems, hackathons, startups, open-source
              contributions, or collaboration opportunities? Let&apos;s connect.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => <ContactCard key={item.label} item={item} />)}
            </div>
          </div>

          <aside
            aria-label="Communication console"
            className="overflow-hidden border border-white/10 bg-[#0d1b2a] shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
            style={{ backgroundImage: carbonTexture }}
          >
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/20 px-5 py-4 font-mono text-[9px] font-bold tracking-[0.2em] uppercase sm:px-6">
              <span className="text-[#FFD700]">F1 communication console</span>
              <span className="flex items-center gap-2 text-white/35">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                Channel open
              </span>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {telemetryItems.map(({ label, value, accent }, index) => (
                <div
                  key={label}
                  className={`relative min-h-28 p-5 transition-colors duration-200 hover:bg-white/[0.025] sm:min-h-32 sm:p-6 ${index % 2 ? 'sm:border-l sm:border-white/10' : ''} ${
                    index ? 'border-t border-white/10' : ''
                  } ${index === 1 ? 'sm:border-t-0' : ''}`}
                >
                  <span className="absolute top-0 bottom-0 left-0 w-0.5" style={{ backgroundColor: accent }} />
                  <p className="font-mono text-[8px] font-bold tracking-[0.2em] text-white/35 uppercase sm:text-[9px]">
                    {label}
                  </p>
                  <p
                    className="mt-3 text-lg leading-tight font-black italic tracking-tight uppercase sm:text-xl"
                    style={{ color: accent, fontFamily: "'Arial Narrow', Impact, sans-serif" }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 bg-black/20 p-5 sm:p-6">
              <a
                href="mailto:jenaanupkumar824@gmail.com"
                className="group flex min-h-13 w-full items-center justify-between bg-[#3671C6] px-5 py-3 font-mono text-xs font-black tracking-[0.16em] text-white uppercase transition-[background-color,box-shadow] hover:bg-[#4784da] hover:shadow-[0_0_22px_rgba(54,113,198,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD700]"
                style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%)' }}
              >
                Open radio channel
                <span aria-hidden="true" className="text-lg text-[#FFD700] transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </aside>
        </div>

        <footer className="mt-20 border-t border-white/10 py-8 sm:mt-24 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <p className="font-mono text-xs font-bold tracking-[0.12em] text-white/70 uppercase">Built by Anup Kumar Jena.</p>
          <p className="mt-3 max-w-2xl text-xs leading-6 text-white/35 sm:mt-0 sm:text-right">
            Engineered with React, Vite, Tailwind CSS, and inspired by Formula 1 telemetry systems.
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
