import { useCallback, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'
import SectionDivider from './components/SectionDivider'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isMobile || reducedMotion) return undefined

    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)

    const glowElement = e.target.closest('.cursor-glow')
    if (glowElement) {
      const glowRect = glowElement.getBoundingClientRect()
      const localX = e.clientX - glowRect.left
      const localY = e.clientY - glowRect.top
      glowElement.style.setProperty('--mouse-x', `${localX}px`)
      glowElement.style.setProperty('--mouse-y', `${localY}px`)

      if (glowElement.matches('.project-card, .driver-card, .skill-card, .experience-card, .contact-card, .stat-card')) {
        const normX = (localX / glowRect.width) - 0.5
        const normY = (localY / glowRect.height) - 0.5
        const rotX = -normY * 4.5 // Max 4.5 degrees pitch
        const rotY = normX * 4.5  // Max 4.5 degrees yaw
        glowElement.style.setProperty('--rotate-x', `${rotX}deg`)
        glowElement.style.setProperty('--rotate-y', `${rotY}deg`)
      }
    }

    const magneticBtn = e.target.closest('.magnetic-btn')
    if (magneticBtn) {
      const btnRect = magneticBtn.getBoundingClientRect()
      const localX = e.clientX - btnRect.left
      const localY = e.clientY - btnRect.top
      const centerX = btnRect.width / 2
      const centerY = btnRect.height / 2
      const tx = (localX - centerX) * 0.30
      const ty = (localY - centerY) * 0.30
      magneticBtn.style.setProperty('--tx', `${tx}px`)
      magneticBtn.style.setProperty('--ty', `${ty}px`)
    }
  }, [])

  const handleMouseOut = useCallback((e) => {
    const glowElement = e.target.closest('.cursor-glow')
    if (glowElement && !glowElement.contains(e.relatedTarget)) {
      glowElement.style.removeProperty('--rotate-x')
      glowElement.style.removeProperty('--rotate-y')
    }

    const magneticBtn = e.target.closest('.magnetic-btn')
    if (magneticBtn && !magneticBtn.contains(e.relatedTarget)) {
      magneticBtn.style.removeProperty('--tx')
      magneticBtn.style.removeProperty('--ty')
    }
  }, [])

  return (
    <div
      className="bg-[#060B26] min-h-screen text-white telemetry-bg"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <Analytics />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant="red" />
        <About />
        <SectionDivider variant="blue" />
        <Skills />
        <SectionDivider variant="default" />
        <Projects />
        <SectionDivider variant="red" />
        <Experience />
        <SectionDivider variant="blue" />
        <Contact />
      </main>
    </div>
  )
}
