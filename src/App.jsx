import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

export default function App() {
  return (
    <div className="bg-[#0a0a1a] min-h-screen text-white">
      <Hero />
      <About />
      <Skills />
    </div>
  )
}
