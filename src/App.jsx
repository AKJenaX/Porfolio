import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  return (
    <div className="bg-[#0a0a1a] min-h-screen text-white">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
