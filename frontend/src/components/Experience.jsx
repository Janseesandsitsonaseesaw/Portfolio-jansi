import Reveal from './Reveal'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="border-b-4 border-ink px-4 md:px-10 py-12 md:py-16 bg-ink/[0.02]">
      <Reveal>
        <p className="font-mono-label text-xs text-graphite mb-2">Section B — On the Job</p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-8 max-w-2xl">
          Experiences
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
        {/* Timeline rail */}
        <Reveal delay={0.05}>
          <div className="border-t-2 border-ink md:border-t-0 md:border-r-2 pt-4 md:pt-0 md:pr-8 h-full">
            <p className="font-mono-label text-[11px] text-graphite">Timeline</p>
            <p className="font-display text-2xl font-bold mt-1">2026</p>
            <p className="font-mono-label text-[11px] text-graphite mt-1">May – July</p>
          </div>
        </Reveal>

        {/* Articles */}
        <div className="space-y-10">
          {experience.map((job, idx) => (
            <Reveal key={idx} delay={0.1 + idx * 0.08}>
              <article className="border-b border-rule pb-8 last:border-b-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-2xl md:text-3xl">{job.role}</h3>
                  <span className="font-mono-label text-[11px] text-graphite">{job.period}</span>
                </div>
                <p className="font-body italic text-sm text-graphite mb-4">
                  {job.company} — {job.location}
                </p>
                <p className="text-[15px] leading-relaxed">
                  Architected and deployed production AI inference pipelines (LLMs, FastAPI),
                  building scalable REST APIs that connect AI models to client-facing products.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
