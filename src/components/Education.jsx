import { useRef } from 'react'
import { education, certifications } from '../data/resumeData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Education() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="education" ref={ref} className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <p data-reveal className="section-eyebrow mb-4">The Constellation</p>
      <h2 data-reveal className="display text-3xl md:text-5xl font-semibold mb-16">
        Education & <span className="text-gradient">Certifications</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="mono text-xs uppercase tracking-widest text-cyan mb-6">Education</h3>
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.id} data-reveal className="glass rounded-2xl p-5 node-card">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h4 className="display font-semibold text-base md:text-lg">{e.degree}</h4>
                  <span className="mono text-xs text-amber shrink-0">{e.score}</span>
                </div>
                <p className="text-sm text-white/60">{e.school}</p>
                <p className="mono text-xs text-mist mt-1">{e.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mono text-xs uppercase tracking-widest text-violet mb-6">Certifications</h3>
          <div className="space-y-5">
            {certifications.map((c) => (
              <div key={c.id} data-reveal className="glass rounded-2xl p-5 node-card flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-violet shadow-[0_0_12px_3px_rgba(167,139,250,0.5)] shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm md:text-base">{c.name}</h4>
                  <p className="text-xs text-white/55 mt-1">{c.org}</p>
                  <p className="mono text-xs text-mist mt-1">{c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
