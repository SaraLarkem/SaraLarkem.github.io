import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { BeyondCode } from './components/BeyondCode'
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
        <Skills />
        <Experience />
        <Projects />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
