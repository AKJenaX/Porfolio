import useReveal from '../hooks/useReveal'

const contactItems = [
  {
    label: 'EMAIL',
    value: 'jenaanupkumar824@gmail.com',
    href: 'mailto:jenaanupkumar824@gmail.com',
    accent: '#DC052D',
  },
  {
    label: 'GITHUB',
    value: 'github.com/AKJenaX',
    href: 'https://github.com/AKJenaX',
    accent: '#1E5BC6',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/anup-kumar-jena',
    href: 'https://www.linkedin.com/in/anup-kumar-jena',
    accent: '#1E5BC6',
  },
  {
    label: 'LOCATION',
    value: 'Bengaluru, India',
    accent: '#F7D417',
  },
  {
    label: 'RESUME',
    value: 'View Resume',
    href: '/resume.pdf',
    accent: '#F7D417',
  },
]

const telemetryItems = [
  { label: 'STATUS', value: 'AVAILABLE FOR OPPORTUNITIES', accent: '#22c55e' },
  { label: 'PRIMARY ROLE', value: 'BACKEND ENGINEER', accent: '#DC052D' },
  { label: 'SECONDARY ROLE', value: 'FULL STACK DEVELOPER', accent: '#1E5BC6' },
  { label: 'CURRENT FOCUS', value: 'PYTHON • AI • CLOUD', accent: '#F7D417' },
  { label: 'RESPONSE TIME', value: '< 24 HOURS', accent: '#1E5BC6' },
  { label: 'OPEN SOURCE', value: 'ACTIVE', accent: '#22c55e' },
]

function ContactCard({ item }) {
  const { label, value, href, accent } = item
  const isResume = label === 'RESUME'
  const content = (
    <>
      <span className="absolute inset-x-0 top-0 h-px" style={{ backgroundColor: accent }} />
      <span className="flex items-center justify-between gap-3">
        <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase">{label}</span>
        <span className="h-1.5 w-8 rounded-full" style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}55` }} />
      </span>
      <span className="mt-3 block truncate text-sm font-bold text-white/70 transition-colors group-hover:text-[var(--contact-accent)]">
        {value}
      </span>
      {href && (
        <span aria-hidden="true" className="absolute right-4 bottom-3 text-xs text-white/15 transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-[var(--contact-accent)]">
          ↗
        </span>
      )}
    </>
  )
  const className =
    `cursor-glow contact-card group relative block min-w-0 overflow-hidden border border-white/8 bg-[#091430] p-4 transition-[transform,border-color,box-shadow] duration-300 hover:border-[var(--contact-accent)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417] sm:p-5 ${isResume ? 'sm:col-span-2' : ''}`
  const style = {
    '--contact-accent': accent,
    backgroundImage:
      'linear-gradient(135deg, rgba(255,255,255,0.02), transparent 52%), repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(30,91,198,0.025) 0px, rgba(30,91,198,0.025) 1px, transparent 1px, transparent 6px)',
  }

  if (href) {
    const isExternalOrResume = href.startsWith('http') || isResume
    return (
      <a
        href={href}
        target={isExternalOrResume ? '_blank' : undefined}
        rel={isExternalOrResume ? 'noopener noreferrer' : undefined}
        className={className}
        style={style}
        title={value}
        aria-label={isResume ? 'View Resume' : undefined}
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
      className={`relative isolate scroll-mt-16 overflow-hidden bg-[#060B26] px-5 pt-16 text-white transition-[opacity,transform] duration-1000 ease-out sm:px-8 sm:pt-24 lg:px-12 lg:pt-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {/* Section sweep calibration line */}
      {isVisible && (
        <div className="section-sweep-line" style={{ '--sweep-color': '#DC052D' }} />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_38%,rgba(30,91,198,0.1),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-4 h-px w-full bg-gradient-to-r from-[#DC052D] via-[#DC052D]/45 to-transparent" />
        <p className="font-mono text-[10px] font-bold tracking-[0.28em] text-white/40 uppercase sm:text-xs">
          <span className="text-[#DC052D]">06</span> — PIT WALL RADIO
        </p>
        <h2
          id="contact-heading"
          className="mt-5 max-w-3xl text-xl leading-relaxed font-medium text-white/65 sm:text-2xl"
        >
          Every race-winning partnership starts with communication.
        </h2>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-[0.26em] text-[#DC052D] uppercase sm:text-xs">
              Radio channel / 19
            </p>
            <h3
              className="mt-3 text-4xl leading-none font-black italic tracking-[-0.035em] uppercase sm:text-5xl"
              style={{ fontFamily: "'Arial Narrow', 'Roboto Condensed', Impact, sans-serif" }}
            >
              Get in <span className="text-[#1E5BC6]">touch</span>
            </h3>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/52 sm:text-base sm:leading-8">
              Interested in backend engineering, Python, AI/ML, cloud systems, or full stack opportunities? Let&apos;s connect.
            </p>

            <div className={`stagger-children mt-9 grid gap-3 sm:grid-cols-2 ${isVisible ? 'is-visible' : ''}`}>
              {contactItems.map((item) => <ContactCard key={item.label} item={item} />)}
            </div>
          </div>

          <aside
            aria-label="Communication console"
            className="overflow-hidden border border-white/8 bg-[#091430] shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(255,255,255,0.02), transparent 52%), repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(-45deg, rgba(30,91,198,0.025) 0px, rgba(30,91,198,0.025) 1px, transparent 1px, transparent 6px)',
            }}
          >
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 bg-black/20 px-5 py-4 font-mono text-[9px] font-bold tracking-[0.2em] uppercase sm:px-6">
              <span className="text-[#DC052D]">F1 communication console</span>
              <span className="flex items-center gap-2 text-white/30">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                  style={{ animation: 'status-blink 2s ease-in-out infinite' }}
                />
                Channel open
              </span>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {telemetryItems.map(({ label, value, accent }, index) => (
                <div
                  key={label}
                  className={`relative min-h-28 p-5 transition-colors duration-200 hover:bg-white/[0.02] sm:min-h-32 sm:p-6 ${index % 2 ? 'sm:border-l sm:border-white/8' : ''} ${
                    index ? 'border-t border-white/8' : ''
                  } ${index === 1 ? 'sm:border-t-0' : ''}`}
                >
                  <span className="absolute top-0 bottom-0 left-0 w-0.5" style={{ backgroundColor: accent }} />
                  <p className="font-mono text-[8px] font-bold tracking-[0.2em] text-white/30 uppercase sm:text-[9px]">
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

            <div className="border-t border-white/8 bg-black/20 p-5 sm:p-6">
              <a
                href="mailto:jenaanupkumar824@gmail.com"
                className="magnetic-btn group flex min-h-13 w-full items-center justify-between bg-[#DC052D] px-5 py-3 font-mono text-xs font-black tracking-[0.16em] text-white uppercase transition-[background-color,box-shadow] hover:bg-[#e8163d] hover:shadow-[0_0_25px_rgba(220,5,45,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7D417]"
                style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%)' }}
              >
                Open radio channel
                <span aria-hidden="true" className="text-lg text-[#F7D417] transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </aside>
        </div>

        <footer className="mt-20 border-t border-white/8 py-8 sm:mt-24 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <p className="font-mono text-xs font-bold tracking-[0.12em] text-white/65 uppercase">Built by Anup Kumar Jena.</p>
          <p className="mt-3 max-w-2xl text-xs leading-6 text-white/30 sm:mt-0 sm:text-right">
            Engineered with React, Vite, Tailwind CSS, and inspired by Formula 1 telemetry systems.
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
