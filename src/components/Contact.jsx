import { useRef, useState } from 'react'
import { profile, links } from '../data/resumeData'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Paste your Formspree (or other form-backend) endpoint here, e.g.
// 'https://formspree.io/f/xxxxxxxx'. Leave empty to fall back to a
// mailto: link that opens the visitor's email client instead.
const FORM_ENDPOINT = 'https://formspree.io/f/mvgqvaoj'

export default function Contact() {
  const ref = useRef(null)
  useScrollReveal(ref)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.'
    if (!form.message.trim()) errs.message = 'Please add a short message.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    // No backend configured yet: fall back to opening an email draft.
    if (!FORM_ENDPOINT) {
      setStatus('sending')
      const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setTimeout(() => setStatus('sent'), 600)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio enquiry from ${form.name}`,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <p data-reveal className="section-eyebrow mb-4">Final Anchor</p>
      <h2 data-reveal className="display text-3xl md:text-5xl font-semibold mb-6">
        Let's build something <span className="text-gradient">amazing</span>
      </h2>
      <p data-reveal className="text-white/70 max-w-xl mb-12">
        Open to full-stack, UI/UX, and AI/ML opportunities. Reach out and I'll get back to you soon.
      </p>

      <div className="grid md:grid-cols-5 gap-8">
        <form data-reveal onSubmit={handleSubmit} noValidate className="md:col-span-3 glass-strong rounded-2xl p-6 md:p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs mono uppercase tracking-widest text-mist mb-2">
              Name
            </label>
            <input
              id="name"
              value={form.name}
              onChange={update('name')}
              className="focus-ring w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" className="text-amber text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs mono uppercase tracking-widest text-mist mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update('email')}
              className="focus-ring w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" className="text-amber text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs mono uppercase tracking-widest text-mist mb-2">
              Subject
            </label>
            <input
              id="subject"
              value={form.subject}
              onChange={update('subject')}
              className="focus-ring w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs mono uppercase tracking-widest text-mist mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={update('message')}
              className="focus-ring w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none resize-none"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <p id="message-error" className="text-amber text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="focus-ring w-full py-3 rounded-xl bg-gradient-to-r from-cyan to-violet text-void font-semibold text-sm hover:scale-[1.01] transition-transform disabled:opacity-60"
          >
            {status === 'sending'
              ? 'Sending…'
              : status === 'sent'
              ? 'Message sent ✓'
              : status === 'error'
              ? 'Something went wrong — try again'
              : 'Send Message'}
          </button>
          <p className="text-xs text-mist text-center">
            {FORM_ENDPOINT
              ? `Sends directly to ${profile.email}.`
              : `Submitting opens your email client addressed to ${profile.email}. Add a Formspree endpoint in Contact.jsx to send directly instead.`}
          </p>
        </form>

        <div data-reveal className="md:col-span-2 glass rounded-2xl p-6 md:p-8 space-y-5">
          <h3 className="display text-lg font-semibold mb-2">Quick Links</h3>
          {[
            { label: 'Email', value: profile.email, href: links.email },
            { label: 'Phone', value: profile.phone, href: links.phone },
            { label: 'Location', value: profile.location, href: null },
            { label: 'GitHub', value: 'github.com', href: links.github },
            { label: 'LinkedIn', value: 'linkedin.com', href: links.linkedin },
            { label: 'Resume', value: 'Download PDF', href: links.resume },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0">
              <span className="mono text-xs text-mist uppercase tracking-widest">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="focus-ring text-sm text-cyan hover:underline">
                  {item.value}
                </a>
              ) : (
                <span className="text-sm text-white/75">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
