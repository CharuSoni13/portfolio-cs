import { useEffect, useRef, useState } from 'react'

const LINES = [
  "Hello, I'm Charu's AI Assistant.",
  'Full Stack Developer',
  'UI/UX Designer',
  'AIML Engineer',
  "Let's build something amazing.",
]

export default function AIAssistant() {
  const dotRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return // skip cursor-follow on touch devices
    setVisible(true)

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let x = mx
    let y = my

    const move = (e) => {
      mx = e.clientX
      my = e.clientY
    }
    window.addEventListener('mousemove', move)

    let raf
    const loop = () => {
      x += (mx - x) * 0.12
      y += (my - y) * 0.12
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Purely decorative cursor-follow glow — never intercepts clicks */}
      {visible && (
        <div
          ref={dotRef}
          aria-hidden="true"
          className="fixed top-0 left-0 z-40 w-4 h-4 -ml-2 -mt-2 rounded-full bg-cyan shadow-[0_0_18px_6px_rgba(94,234,212,0.45)] hidden md:block"
          style={{ pointerEvents: 'none' }}
        />
      )}

      {/* Real clickable trigger, fixed in a corner so it never sits over other content */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="focus-ring fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-violet shadow-lg flex items-center justify-center text-void font-bold"
        aria-label="Open AI assistant"
      >
        AI
      </button>
      {open && <AssistantPopup onClose={() => setOpen(false)} />}
    </>
  )
}

function AssistantPopup({ onClose }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-[min(90vw,360px)] glass-strong rounded-2xl p-5" role="dialog" aria-label="AI assistant terminal">
      <div className="flex items-center justify-between mb-3">
        <span className="mono text-xs text-cyan">assistant@charu-soni:~$</span>
        <button onClick={onClose} className="focus-ring text-mist hover:text-white" aria-label="Close assistant">✕</button>
      </div>
      <div className="mono text-xs space-y-2 text-white/80">
        {LINES.map((l) => (
          <p key={l}>
            <span className="text-violet">{'> '}</span>
            {l}
          </p>
        ))}
      </div>
    </div>
  )
}
