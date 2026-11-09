import { interestsText, sectionBackgrounds } from '../data/portfolio'
import { Section } from './Section'

export function Interests() {
  return (
    <Section
      id="interests"
      title="Beyond Code"
      subtitle="Personality and curiosity outside software"
      className="section--interests"
      backgroundImage={sectionBackgrounds.interests}
      backgroundPosition="center 40%"
    >
      <p className="interests__text">{interestsText}</p>
    </Section>
  )
}
