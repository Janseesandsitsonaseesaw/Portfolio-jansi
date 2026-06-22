import Reveal from './Reveal'
import {
  POSIllustration,
  QueryIllustration,
  HotelIllustration,
  DesktopOSIllustration,
} from './ProjectIllustrations'

const ILLUSTRATIONS = {
  hisaab: POSIllustration,
  nova: QueryIllustration,
  'hotel-management': HotelIllustration,
  portfolio: DesktopOSIllustration,
}

function ProjectArticle({ project, layout, index }) {
  const Illustration = ILLUSTRATIONS[project.id] || POSIllustration
  const num = String(index + 1).padStart(2, '0')

  if (layout === 'wide') {
    return (
      <article className="border-2 border-ink p-5 md:p-7 grid md:grid-cols-[1fr_180px] gap-6">
        <div>
          <p className="font-mono-label text-[11px] text-graphite mb-1">No. {num} — Featured Build</p>
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-1">{project.name}</h3>
          <p className="font-mono-label text-[10px] text-graphite mb-4">{project.stack}</p>
          <p className="text-[15px] leading-relaxed mb-5 max-w-xl">{project.summary}</p>
          <ProjectLinks project={project} />
        </div>
        <div className="border border-dashed border-ink p-3 flex items-center justify-center bg-ink/[0.02]">
          <Illustration className="w-full h-auto max-w-[140px]" />
        </div>
      </article>
    )
  }

  return (
    <article className="border-2 border-ink p-5 md:p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <p className="font-mono-label text-[11px] text-graphite">No. {num}</p>
        <Illustration className="w-12 h-10" />
      </div>
      <h3 className="font-display font-bold text-xl md:text-2xl mb-1">{project.name}</h3>
      <p className="font-mono-label text-[10px] text-graphite mb-3">{project.stack}</p>
      <p className="text-sm leading-relaxed mb-5 flex-1">{project.summary}</p>
      <ProjectLinks project={project} />
    </article>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-label text-[10px] border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors"
        >
          GitHub ↗
        </a>
      ) : (
        <span
          className="font-mono-label text-[10px] border border-dashed border-rule text-graphite px-3 py-2 cursor-default"
          aria-disabled="true"
        >
          GitHub — coming soon
        </span>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono-label text-[10px] border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors"
        >
          Live Site ↗
        </a>
      )}
    </div>
  )
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="border-b-4 border-ink px-4 md:px-10 py-12 md:py-16">
      <Reveal>
        <p className="font-mono-label text-xs text-graphite mb-2">Section C — Dispatches</p>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-10 max-w-2xl">
          Selected Projects, In Print
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Reveal
            key={project.id}
            delay={idx * 0.07}
            className={idx === 0 ? 'md:col-span-2' : ''}
          >
            <ProjectArticle
              project={project}
              layout={idx === 0 ? 'wide' : 'normal'}
              index={idx}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
