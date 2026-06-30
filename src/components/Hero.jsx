import { profile } from '../data/resumeData'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <p data-reveal className="section-eyebrow mb-5">Weaving Intelligence Into Interfaces</p>
      <h1 data-reveal className="display text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[0.95]">
        {profile.name}
      </h1>
      <p data-reveal className="mt-6 text-lg md:text-2xl text-mist mono">{profile.role}</p>
      <p data-reveal className="mt-6 max-w-xl text-base md:text-lg text-white/80">{profile.tagline}</p>

      <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="focus-ring px-6 py-3 rounded-full bg-gradient-to-r from-cyan to-violet text-void font-semibold text-sm hover:scale-105 transition-transform"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="focus-ring px-6 py-3 rounded-full border border-white/15 text-sm hover:border-cyan/60 transition-colors"
        >
          Get in Touch
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist text-xs mono">
        <span>Scroll to explore</span>
        <span className="block w-px h-10 bg-gradient-to-b from-cyan to-transparent animate-pulse" />
      </div>
    </section>
  )
}
