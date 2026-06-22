import { useCallback } from 'react'
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

export default function App() {
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }, [])

  return (
    <div
      className="bg-[#060B26] min-h-screen text-white telemetry-bg"
      onMouseMove={handleMouseMove}
    >
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
