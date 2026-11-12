import { hobbies, skillCategories, skillSources, strengths } from '../data/portfolio'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      numeral="III"
      title="Skills & Interests"
      subtitle="Technical skills, where I gained them, strengths and interests"
    >
      <div className="skills-sources">
        {skillSources.map((source) => (
          <div key={source.title} className="skills-source">
            <h3 className="skills-category__title">{source.title}</h3>
            <p className="skills-source__text">{source.text}</p>
          </div>
        ))}
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.name} className="skills-category">
            <h3 className="skills-category__title">{category.name}</h3>
            <ul className="skills-category__list">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="skills-personal">
        <div>
          <h3 className="skills-category__title">Strengths</h3>
          <ul className="interests__list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="skills-category__title">Interests</h3>
          <ul className="interests__list">
            {hobbies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
