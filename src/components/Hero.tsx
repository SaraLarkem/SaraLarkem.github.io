import { isConfiguredLink, siteConfig } from '../data/portfolio'
import { Embers } from './Embers'
import { SectionBackdrop } from './SectionBackdrop'

export function Hero() {
  const github = siteConfig.links.github
  const linkedin = siteConfig.links.linkedin
  const cv = siteConfig.links.cv

  return (
    <section id="home" className="hero section--backdrop" aria-labelledby="hero-heading">
      <SectionBackdrop scene="castle" />
      <Embers />

      <div className="hero__inner">
        <p className="hero__eyebrow">Portfolio</p>
        <h1 id="hero-heading" className="hero__title">
          {siteConfig.name}
        </h1>
        <span className="hero__rule" aria-hidden="true" />
        <p className="hero__role">{siteConfig.title}</p>
        <p className="hero__location">Final-year student · {siteConfig.location}</p>
        <p className="hero__intro">{siteConfig.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary btn--cta">
            View Projects
          </a>
          {isConfiguredLink(github) && (
            <a
              href={github}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {isConfiguredLink(linkedin) && (
            <a
              href={linkedin}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}
          {isConfiguredLink(cv) && (
            <a href={cv} className="btn btn--secondary" download>
              Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
