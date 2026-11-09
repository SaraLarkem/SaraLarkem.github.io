import { experience } from '../data/portfolio'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      numeral="II"
      title="Experience"
      subtitle="Internship contribution within an existing software platform"
    >
      <article className="experience-card manuscript-border">
        <header className="experience-card__header">
          <div>
            <h3 className="experience-card__role">{experience.role}</h3>
            <p className="experience-card__company">{experience.company}</p>
          </div>
        </header>
        <p className="experience-card__summary">{experience.summary}</p>
        <h4 className="experience-card__highlights-title">Key contributions</h4>
        <ul className="experience-card__highlights">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </article>
    </Section>
  )
}
