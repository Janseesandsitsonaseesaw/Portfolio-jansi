import Masthead from './components/Masthead'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { useProfile } from './hooks/useProfile'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  const { profile } = useProfile()

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Masthead name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About />
        <Experience experience={profile.experience} />
        <Projects projects={profile.projects} />
        <Skills skills={profile.skills} />
        <Education education={profile.education} />
        <Contact profile={profile} />
      </main>
      <Analytics />
    </div>
  )
}
