import Reveal from './Reveal'
import EngravedMockup from './EngravedMockup'

export default function Hero({ profile }) {
  return (
    <section className="border-b-4 border-ink px-4 md:px-10 py-10 md:py-16">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14">
        {/* Headline column */}
        <Reveal>
          <p className="font-mono-label text-xs text-graphite mb-4">Feature — Page One</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Hi, I'm Jansi.
          </h2>
          <div className="rule-double w-24 mb-6" />
          <p className="font-body text-base md:text-lg leading-relaxed text-ink/90 max-w-xl drop-cap">
            I'm a third-year B.Tech Information Technology student at Manipal Institute of
            Technology, currently working as an AI Engineering Intern at EMB Global. I like
            solving real-world problems and figuring out the parts that break when real people
            actually use what I build.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="font-mono-label text-xs border-2 border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
            >
              Read the Projects →
            </a>
          </div>
        </Reveal>

        {/* Engraved mockup column, "Catch of the Day" frame */}
        <Reveal delay={0.15}>
          <figure className="border-2 border-ink p-3 bg-paper">
            <div className="border border-dashed border-ink p-4">
              <EngravedMockup className="w-full h-auto" />
            </div>
            <figcaption className="font-mono-label text-[10px] text-graphite text-center mt-3 pt-3 border-t border-rule">
              FIG. 1 — PORTFOLIO INTERFACE, RENDERED
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}