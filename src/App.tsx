import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { BeyondCode } from './components/BeyondCode'
import { CareerGoals } from './components/CareerGoals'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <BeyondCode />
        <CareerGoals />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
