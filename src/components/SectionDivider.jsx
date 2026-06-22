import useReveal from '../hooks/useReveal'

function SectionDivider({ variant = 'default' }) {
  const [ref, isVisible] = useReveal(0.5)

  const colors = {
    default: ['#DC052D', '#1E5BC6', '#F7D417'],
    red: ['#DC052D', '#DC052D', '#1E5BC6'],
    blue: ['#1E5BC6', '#1E5BC6', '#F7D417'],
  }

  const [c1, c2, c3] = colors[variant] || colors.default

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative mx-auto flex max-w-7xl items-center gap-3 px-5 py-2 sm:px-8 lg:px-12"
    >
      <div className="relative h-px flex-1 overflow-hidden">
        <div
          className="h-full origin-left transition-transform duration-1000 ease-out"
          style={{
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            background: `linear-gradient(90deg, ${c1}, ${c2}, transparent)`,
          }}
        />
      </div>

      {[c1, c2, c3].map((color, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full transition-all duration-500"
          style={{
            backgroundColor: color,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transitionDelay: `${300 + i * 150}ms`,
            boxShadow: isVisible ? `0 0 8px ${color}88` : 'none',
          }}
        />
      ))}

      <div className="relative h-px flex-1 overflow-hidden">
        <div
          className="h-full origin-right transition-transform duration-1000 ease-out"
          style={{
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            background: `linear-gradient(270deg, ${c3}, ${c2}, transparent)`,
          }}
        />
      </div>
    </div>
  )
}

export default SectionDivider
