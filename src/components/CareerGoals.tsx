import { careerGoals } from '../data/portfolio'
import { Section } from './Section'

export function CareerGoals() {
  return (
    <Section
      id="career-goals"
      numeral="VI"
      title="Career Goals"
      subtitle="What I am looking for next"
    >
      <p className="career__lead">{careerGoals.lead}</p>
      <p className="career__roles-label label">Target roles</p>
      <ul className="about__focus" aria-label="Target roles">
        {careerGoals.roles.map((role) => (
          <li key={role} className="about__focus-item">
            {role}
          </li>
        ))}
      </ul>
      <p className="career__text">{careerGoals.text}</p>
      <p className="career__goal">{careerGoals.goal}</p>
    </Section>
  )
}
