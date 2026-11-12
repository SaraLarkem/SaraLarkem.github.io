import { education } from '../data/portfolio'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" numeral="II" title="Education" subtitle="Qualifications to date">
      <div className="education-list">
        {education.map((entry) => (
          <article key={entry.qualification} className="experience-card manuscript-border">
            <h3 className="experience-card__role">{entry.qualification}</h3>
            <p className="experience-card__company">{entry.institution}</p>
            <p className="experience-card__dates">{entry.dates}</p>
            {entry.note && <p className="education-card__note">{entry.note}</p>}
            {entry.modules && (
              <div className="education-card__modules">
                <p className="label">Key modules</p>
                <div className="tag-list" aria-label="Key modules">
                  {entry.modules.map((module) => (
                    <span key={module} className="tag">
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
