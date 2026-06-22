import { useState } from 'react'
import Reveal from './Reveal'
import { SealOrnament } from './Ornaments'
import { API_BASE } from '../hooks/useProfile'

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="px-4 md:px-10 py-12 md:py-16">
      <Reveal>
        <p className="font-mono-label text-xs text-graphite mb-2 text-center">Classified — Advertisement</p>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-center mb-6">Get In Touch</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="max-w-2xl mx-auto border-t-2 border-b-2 border-ink py-4 mb-10 text-center">
          <p className="font-display font-bold text-base md:text-lg">
            Open to internships, learning opportunities, and good conversations —
            I'd love to hear from you.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="border-2 border-ink max-w-4xl mx-auto p-6 md:p-10 grid md:grid-cols-[1fr_1px_1fr] gap-6 md:gap-10 relative">
          {/* Left: details */}
          <div>
            <SealOrnament className="w-16 h-16 mb-4" />
            <h3 className="font-display font-bold text-2xl mb-1">{profile.name}</h3>
            <p className="font-mono-label text-[11px] text-graphite mb-6">{profile.title}</p>

            <dl className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-dotted border-rule pb-2">
                <dt className="font-mono-label text-[10px] text-graphite">Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="hover:underline">
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between border-b border-dotted border-rule pb-2">
                <dt className="font-mono-label text-[10px] text-graphite">GitHub</dt>
                <dd>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {profile.github.replace('https://', '')}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between border-b border-dotted border-rule pb-2">
                <dt className="font-mono-label text-[10px] text-graphite">LinkedIn</dt>
                <dd>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {profile.linkedin.replace('https://', '')}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="hidden md:block border-l-2 border-ink h-full" />
          <div className="md:hidden border-t-2 border-ink" />

          {/* Right: contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="font-mono-label text-[11px] text-graphite mb-1">Send a Note</p>
            <div>
              <label htmlFor="name" className="font-mono-label text-[10px] block mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-ink bg-paper px-3 py-2 text-sm focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono-label text-[10px] block mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-ink bg-paper px-3 py-2 text-sm focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono-label text-[10px] block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-ink bg-paper px-3 py-2 text-sm focus:outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="font-mono-label text-xs border-2 border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-graphite" role="status">
                Thanks — message sent.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-graphite" role="status">
                Couldn't send right now — try emailing directly.
              </p>
            )}
          </form>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="font-mono-label text-[10px] text-graphite text-center mt-10">
          © {new Date().getFullYear()} {profile.name.toUpperCase()} — ALL RIGHTS RESERVED — PRINTED ON THE WEB
        </p>
      </Reveal>
    </section>
  )
}