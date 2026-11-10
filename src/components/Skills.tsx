import { skillCategories } from '../data/portfolio'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" numeral="II" title="Skills" subtitle="Organised by focus area for quick scanning">
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
    </Section>
  )
}
