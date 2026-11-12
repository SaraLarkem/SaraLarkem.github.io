import { beyondCode } from '../data/portfolio'
import { Section } from './Section'

export function BeyondCode() {
  return (
    <Section
      id="beyond-code"
      numeral="VI"
      title="What I Bring Beyond Code"
      subtitle="Skills from previous work and college experience"
      backdropScene="moon"
    >
      <div className="beyond">
        {beyondCode.map((entry) => (
          <article key={entry.title} className="beyond__entry">
            <h3 className="skills-category__title">{entry.title}</h3>
            <p className="beyond__place">{entry.place}</p>
            <p className="beyond__text">{entry.text}</p>
            <ul className="interests__list" aria-label={`Skills from ${entry.title}`}>
              {entry.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
