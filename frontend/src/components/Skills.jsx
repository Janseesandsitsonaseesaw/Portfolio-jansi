import Reveal from './Reveal'

export default function Skills({ skills }) {
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="border-b-4 border-ink px-4 md:px-10 py-12 md:py-16 bg-ink/[0.02]">
      <Reveal>
        <p className="font-mono-label text-xs text-graphite mb-2">Section D — Classified</p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-10 max-w-2xl">
          A Working Inventory of Tools
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
        {categories.map(([category, items], idx) => (
          <Reveal key={category} delay={idx * 0.05}>
            <div className="border-t-2 border-ink pt-3">
              <h3 className="font-display font-bold text-lg mb-3">{category}</h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed border-b border-dotted border-rule pb-1.5 flex justify-between gap-2"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
