import Reveal from './Reveal'

export default function Education({ education }) {
  return (
    <section className="border-b-4 border-ink px-4 md:px-10 py-12 md:py-16">
      <Reveal>
        <p className="font-mono-label text-xs text-graphite mb-2">Section E — Academic Record</p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-8">Education</h2>
      </Reveal>

      <div className="space-y-7">
        {education.map((ed, idx) => (
          <Reveal key={idx} delay={idx * 0.07}>
            <div className="border-b border-rule pb-6 last:border-b-0 grid grid-cols-[1fr_auto] items-baseline gap-4">
              <div className="max-w-3xl">
                <h3 className="font-display font-bold text-xl md:text-2xl">{ed.institution}</h3>
                <p className="font-body italic text-sm text-graphite mt-1">{ed.location}</p>
                <p className="text-[15px] mt-2">{ed.degree}</p>
              </div>
              <span className="font-mono-label text-[11px] text-graphite whitespace-nowrap">{ed.years}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
