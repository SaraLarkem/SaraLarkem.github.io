import { isConfiguredLink, siteConfig } from '../data/portfolio'
import { Section } from './Section'

export function Contact() {
  const email = siteConfig.email
  const linkedin = siteConfig.links.linkedin
  const cv = siteConfig.links.cv

  return (
    <Section
      id="contact"
      numeral="VIII"
      title="Contact"
      subtitle="Open to graduate roles in software engineering, full-stack, backend, AI and cloud"
      backdropScene="gold"
    >
      <div className="contact">
        <p className="contact__text">
          I am interested in graduate software engineering, full-stack, backend, AI engineering
          and cloud-related opportunities. The best way to reach me is through the links below.
        </p>
        <dl className="contact__details">
          {isConfiguredLink(email) && (
            <div className="contact__detail">
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </div>
          )}
          <div className="contact__detail">
            <dt>Location</dt>
            <dd>{siteConfig.location}</dd>
          </div>
          {isConfiguredLink(linkedin) && (
            <div className="contact__detail">
              <dt>LinkedIn</dt>
              <dd>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  {linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                </a>
              </dd>
            </div>
          )}
          <div className="contact__detail">
            <dt>Languages</dt>
            <dd>{siteConfig.languages}</dd>
          </div>
        </dl>
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
