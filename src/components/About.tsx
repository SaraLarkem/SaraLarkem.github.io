import { aboutApproach, aboutFocusAreas, aboutLead } from '../data/portfolio'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About" subtitle="Background and engineering approach">
      <div className="about">
        <p className="about__lead">{aboutLead}</p>
        <p className="about__approach">{aboutApproach}</p>
        <ul className="about__focus" aria-label="Focus areas">
          {aboutFocusAreas.map((area) => (
            <li key={area} className="about__focus-item">
              {area}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
