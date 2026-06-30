import { useState } from 'react'
import Scene3D from './components/Scene3D'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import AIAssistant from './components/AIAssistant'
import { profile, links } from './data/resumeData'

export default function App() {
  const [quality, setQuality] = useState('high')

  return (
    <>
      <a href="#main" className="skip-link focus-ring">Skip to content</a>
      <Scene3D quality={quality} sectionCount={6} />
      <Nav quality={quality} setQuality={setQuality} />
      <AIAssistant />

      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="relative z-10 px-6 md:px-12 py-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mist mono">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <div className="flex gap-5">
          <a href={links.github} className="focus-ring hover:text-cyan">GitHub</a>
          <a href={links.linkedin} className="focus-ring hover:text-cyan">LinkedIn</a>
          <a href={links.email} className="focus-ring hover:text-cyan">Email</a>
        </div>
      </footer>
    </>
  )
}
