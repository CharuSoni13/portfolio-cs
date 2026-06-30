import { useRef, useState } from 'react'
import { projects } from '../data/resumeData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Projects() {
  const ref = useRef(null)
  const [openId, setOpenId] = useState(null)
  useScrollReveal(ref)

  const active = projects.find((p) => p.id === openId)

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <p data-reveal className="section-eyebrow mb-4">Interactive Gallery</p>
      <h2 data-reveal className="display text-3xl md:text-5xl font-semibold mb-16">
        Project <span className="text-gradient">Showcase</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.id}
            data-reveal
            className="node-card glass rounded-2xl p-6 flex flex-col justify-between min-h-[260px]"
          >
            <div>
              <span className="mono text-xs text-amber">{p.tag}</span>
              <h3 className="display text-xl font-semibold mt-2 mb-3">{p.name}</h3>
              <p className="text-sm text-white/65 leading-relaxed line-clamp-4">{p.description}</p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {p.tech.slice(0, 3).map((t) => (
                  <span key={t} className="mono text-[10px] px-2 py-1 rounded-full border border-white/10 text-white/55">
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpenId(p.id)}
                className="focus-ring text-xs mono text-cyan hover:underline shrink-0 ml-2"
              >
                View Project →
              </button>
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} details`}
          onClick={() => setOpenId(null)}
        >
          <div
            className="glass-strong rounded-3xl max-w-2xl w-full p-8 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="focus-ring absolute top-5 right-5 text-mist hover:text-white"
              onClick={() => setOpenId(null)}
              aria-label="Close project details"
            >
              ✕
            </button>
            <span className="mono text-xs text-amber">{active.tag}</span>
            <h3 className="display text-3xl font-semibold mt-2 mb-4">{active.name}</h3>
            <p className="text-white/75 leading-relaxed mb-6">{active.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {active.tech.map((t) => (
                <span key={t} className="mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/70">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {active.links.live && (
                <a href={active.links.live} className="focus-ring px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan to-violet text-void text-sm font-semibold">
                  Live Site
                </a>
              )}
              {active.links.github && (
                <a href={active.links.github} className="focus-ring px-5 py-2.5 rounded-full border border-white/15 text-sm">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
