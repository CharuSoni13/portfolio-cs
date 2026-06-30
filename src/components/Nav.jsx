import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ quality, setQuality }) {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-10 py-4 flex items-center justify-between glass-strong border-b border-white/5">
      <a href="#hero" className="display font-semibold text-lg tracking-tight focus-ring">
        Charu<span className="text-gradient">.</span>Soni
      </a>

      <ul className="hidden md:flex items-center gap-7 mono text-xs uppercase tracking-widest">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`focus-ring transition-colors ${
                active === s.id ? 'text-cyan' : 'text-mist hover:text-white'
              }`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setQuality(quality === 'high' ? 'eco' : 'high')}
          className="focus-ring hidden sm:inline-flex items-center gap-2 text-xs mono px-3 py-1.5 rounded-full border border-white/10 hover:border-cyan/50 transition-colors"
          aria-pressed={quality === 'eco'}
        >
          {quality === 'high' ? '⚡ High Quality' : '🍃 Eco Mode'}
        </button>
        <button
          className="md:hidden focus-ring text-mist"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <ul className="absolute top-full left-0 right-0 glass-strong md:hidden flex flex-col p-5 gap-4 mono text-sm uppercase tracking-widest">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="focus-ring block" onClick={() => setOpen(false)}>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setQuality(quality === 'high' ? 'eco' : 'high')}
              className="focus-ring text-xs px-3 py-1.5 rounded-full border border-white/10"
            >
              {quality === 'high' ? '⚡ High Quality' : '🍃 Eco Mode'}
            </button>
          </li>
        </ul>
      )}
    </nav>
  )
}
