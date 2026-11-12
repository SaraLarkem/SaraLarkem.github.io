import {
  coreSkills,
  hobbies,
  internshipSkills,
  skillCategories,
  skillSources,
  strengths,
} from '../data/portfolio'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      numeral="III"
      title="Skills & Interests"
      subtitle="Technical skills, where I gained them, strengths and interests"
    >
      <div className="skills-highlight">
        <h3 className="skills-category__title">Core skills</h3>
        <ul className="skills-highlight__list" aria-label="Core skills">
          {coreSkills.map((skill) => (
            <li key={skill} className="tag tag--core">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="skills-highlight">
        <h3 className="skills-category__title">Gained during my internship</h3>
        <ul className="skills-highlight__list" aria-label="Skills gained during my internship">
          {internshipSkills.map((skill) => (
            <li key={skill} className="tag tag--core">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="skills-sources">
        {skillSources.map((source) => (
          <div key={source.title} className="skills-source">
            <h3 className="skills-category__title">{source.title}</h3>
            <p className="skills-source__text">{source.text}</p>
          </div>
        ))}
      </div>

      {/* Full list stays available but secondary, so the core skills stand out */}
      <details className="skills-all">
        <summary className="project-card__toggle">
          <span className="project-card__toggle-show">See all technical skills</span>
          <span className="project-card__toggle-hide">Hide technical skills</span>
        </summary>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skills-category">
              <h4 className="skills-category__title">{category.name}</h4>
              <ul className="skills-category__list">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>

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
