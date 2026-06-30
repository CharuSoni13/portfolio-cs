import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Applies a consistent fade/rise reveal to every [data-reveal] element
// within the given container ref once it scrolls into view.
export function useScrollReveal(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef.current) return
    const els = containerRef.current.querySelectorAll('[data-reveal]')
    const triggers = []
    els.forEach((el, i) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: (i % 6) * 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
      triggers.push(tween.scrollTrigger)
    })
    return () => triggers.forEach((t) => t && t.kill())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export { gsap, ScrollTrigger }
