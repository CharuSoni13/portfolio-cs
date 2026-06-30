import { useRef } from 'react'
import { experience } from '../data/resumeData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Experience() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <p data-reveal className="section-eyebrow mb-4">The Pathway</p>
      <h2 data-reveal className="display text-3xl md:text-5xl font-semibold mb-16">
        Work <span className="text-gradient">Experience</span>
      </h2>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan via-violet to-transparent" />
        <div className="space-y-14">
          {experience.map((job) => (
            <div key={job.id} data-reveal className="relative">
              <span className="absolute -left-[34px] md:-left-[50px] top-1.5 w-3 h-3 rounded-full bg-cyan shadow-[0_0_16px_4px_rgba(94,234,212,0.5)]" />
              <div className="glass-strong rounded-2xl p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="display text-xl md:text-2xl font-semibold">{job.title}</h3>
                  <span className="mono text-xs text-cyan">{job.duration}</span>
                </div>
                <p className="text-white/60 mono text-sm mb-5">
                  {job.org} · {job.place}
                </p>
                <ul className="space-y-2.5">
                  {job.points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm md:text-base text-white/75 leading-relaxed">
                      <span className="text-violet mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
