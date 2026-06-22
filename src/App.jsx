import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'

export default function App() {
  return (
    <div className="bg-[#0a0a1a] min-h-screen text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  )
}
