import { useRef } from 'react'
import { profile, skills } from '../data/resumeData'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SHARDS = [
  { title: 'Frontend', list: skills.frontend, accent: 'text-cyan' },
  { title: 'Backend', list: skills.backend, accent: 'text-violet' },
  { title: 'Core Concepts', list: skills.core, accent: 'text-amber' },
  { title: 'Tools & Workflow', list: skills.tools, accent: 'text-cyan' },
]

export default function About() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <p data-reveal className="section-eyebrow mb-4">The Core Node</p>
      <h2 data-reveal className="display text-3xl md:text-5xl font-semibold mb-8 max-w-3xl">
        About <span className="text-gradient">Charu</span>
      </h2>
      <p data-reveal className="text-white/75 max-w-2xl leading-relaxed mb-16 text-base md:text-lg">
        {profile.summary}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SHARDS.map((shard) => (
          <div
            key={shard.title}
            data-reveal
            className="node-card glass rounded-2xl p-6 group"
            tabIndex={0}
          >
            <h3 className={`display text-lg font-semibold mb-4 ${shard.accent}`}>{shard.title}</h3>
            <ul className="space-y-2 text-sm text-white/70 mono">
              {shard.list.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div data-reveal className="mt-10 glass rounded-2xl p-6">
        <h3 className="display text-lg font-semibold mb-4 text-white">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.soft.map((s) => (
            <span key={s} className="mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/70">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
