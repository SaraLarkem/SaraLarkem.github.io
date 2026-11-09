import { isConfiguredLink, sectionBackgrounds, siteConfig } from '../data/portfolio'
import { Section } from './Section'

export function Contact() {
  const email = siteConfig.email
  const linkedin = siteConfig.links.linkedin
  const cv = siteConfig.links.cv

  return (
    <Section
      id="contact"
      numeral="VI"
      title="Contact"
      subtitle="Open to graduate roles in software engineering, full-stack, backend, AI and cloud"
      backgroundImage={sectionBackgrounds.contact}
      backgroundPosition="center 35%"
    >
      <div className="contact">
        <p className="contact__text">
          I am interested in graduate software engineering, full-stack, backend, AI engineering
          and cloud-related opportunities. The best way to reach me is through the links below.
        </p>
        <div className="contact__actions">
          {isConfiguredLink(email) && (
            <a href={`mailto:${email}`} className="btn btn--primary">
              Email me
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
          {isConfiguredLink(siteConfig.links.github) && (
            <a
              href={siteConfig.links.github}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
        {!isConfiguredLink(email) &&
          !isConfiguredLink(linkedin) &&
          !isConfiguredLink(cv) &&
          isConfiguredLink(siteConfig.links.github) && (
            <p className="contact__note">
              You can also reach me via GitHub while email, LinkedIn and CV links are being finalised.
            </p>
          )}
      </div>
    </Section>
  )
}
