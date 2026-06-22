import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function todayLabel() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase()
}

export default function Masthead({ name = 'Jansi Doshi' }) {
  const [open, setOpen] = useState(false)
  const [date] = useState(todayLabel())

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  return (
    <header className="relative z-10 border-b-4 border-ink bg-paper">
      {/* Top strip: date / edition */}
      <div className="font-mono-label text-[10px] md:text-xs text-graphite flex items-center justify-between px-4 md:px-10 py-2 border-b border-rule">
        <span>{date}</span>
        <span className="hidden sm:inline">VOL. I — NO. 1</span>
        <span>PORTFOLIO</span>
      </div>

      {/* Masthead title block */}
      <div className="px-4 md:px-10 py-6 md:py-9 text-center">
        <p className="font-mono-label text-[10px] md:text-xs text-graphite mb-2">
          Student
        </p>
        <h1 className="font-display font-black tracking-tight text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl leading-none">
          {name.toUpperCase()}
        </h1>
      </div>

      {/* Nav rule */}
      <nav aria-label="Primary" className="border-t-2 border-b-2 border-ink">
        <div className="hidden md:flex justify-center divide-x divide-ink">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono-label text-xs px-6 py-3 hover:bg-ink hover:text-paper transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <span className="font-mono-label text-[11px]">INDEX</span>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="font-mono-label text-xs border border-ink px-3 py-1"
          >
            {open ? 'CLOSE ✕' : 'MENU ☰'}
          </button>
        </div>
        {open && (
          <div id="mobile-nav" className="md:hidden border-t border-ink">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-mono-label text-xs block px-4 py-3 border-b border-rule"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
