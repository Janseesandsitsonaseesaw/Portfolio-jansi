import Reveal from './Reveal'
import { LaurelDivider } from './Ornaments'

export default function About() {
  return (
    <section id="about" className="border-b-4 border-ink px-4 md:px-10 py-12 md:py-16">
      <Reveal>
        <p className="font-mono-label text-xs text-graphite mb-2 text-center">Section A — Profile</p>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-center mb-4">
          About Me
        </h2>
        <div className="flex justify-center mb-8">
          <LaurelDivider className="w-40" />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="text-[15px] leading-relaxed text-ink/90 max-w-2xl mx-auto text-center">
          <p>
            I'm a third-year B.Tech Information Technology student at Manipal Institute of
            Technology, looking for opportunities to gain real-world experience in
            the coding world. Outside of class, I'm usually still coding, or playing the ukulele
            and painting.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
