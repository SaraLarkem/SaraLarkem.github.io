import { interestsText } from '../data/portfolio'
import { Section } from './Section'

export function Interests() {
  return (
    <Section
      id="interests"
      numeral="V"
      title="Beyond Code"
      subtitle="Personality and curiosity outside software"
      className="section--interests"
      backdropScene="moon"
    >
      <p className="interests__text">{interestsText}</p>
    </Section>
  )
}
