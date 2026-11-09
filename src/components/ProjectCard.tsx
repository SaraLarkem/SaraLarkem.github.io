import type { Project } from '../data/portfolio'
import { isConfiguredLink } from '../data/portfolio'

type ProjectCardProps = {
  project: Project
  variant?: 'featured' | 'additional'
}

const visualKindLabel: Record<NonNullable<Project['visualPlaceholder']>['kind'], string> = {
  architecture: 'Architecture',
  api: 'API',
  evidence: 'Evidence',
  database: 'Data model',
  code: 'Implementation',
}

const accessLabel: Record<NonNullable<Project['access']> | 'none', string> = {
  private: 'Private repository',
  public: 'Public repository',
  none: '',
}

export function ProjectCard({ project, variant = 'additional' }: ProjectCardProps) {
  const showGithub = isConfiguredLink(project.githubUrl)
  const isFeatured = variant === 'featured' || project.featured
  const itemLine = [project.technologies[0], accessLabel[project.access ?? 'none']]
    .filter(Boolean)
    .join(' · ')

  return (
    <article
      className={`project-card manuscript-border ${isFeatured ? 'project-card--featured' : 'project-card--additional'}`}
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="project-card__badges">
        {project.status === 'in progress' && (
          <span className="project-card__badge">In progress</span>
        )}
        {isFeatured && (
          <span className="project-card__badge project-card__badge--featured">Featured</span>
        )}
        {project.access === 'private' && (
          <span className="project-card__badge project-card__badge--private">
            Private internship work
          </span>
        )}
      </div>

      {project.screenshot ? (
        <div className="project-card__screenshot">
          <img
            src={project.screenshot}
            alt={`Screenshot of ${project.name}`}
            loading="lazy"
          />
        </div>
      ) : project.visualPlaceholder ? (
        <div
          className={`project-card__visual project-card__visual--${project.visualPlaceholder.kind}`}
          role="img"
          aria-label={`${visualKindLabel[project.visualPlaceholder.kind]} placeholder for ${project.name}`}
        >
          <span className="project-card__visual-kind">
            {visualKindLabel[project.visualPlaceholder.kind]}
          </span>
          <span className="project-card__visual-label">{project.visualPlaceholder.label}</span>
        </div>
      ) : (
        <div className="project-card__screenshot project-card__screenshot--placeholder" aria-hidden="true">
          <span>Visual coming soon</span>
        </div>
      )}

      <div className="project-card__body">
        {/* Item-style category line; duplicates the tags and badges, so hidden from screen readers */}
        <p className="project-card__record" aria-hidden="true">
          {itemLine}
        </p>
        <h3 id={`project-${project.id}-title`} className="project-card__title">
          {project.name}
        </h3>
        {project.summary && <p className="project-card__summary">{project.summary}</p>}

        <p className="project-card__problem">
          <span className="label">Problem / Goal:</span> {project.problem}
        </p>
        <p className="project-card__built">
          <span className="label">What I built:</span> {project.built}
        </p>
        {project.role && (
          <p className="project-card__role">
            <span className="label">My role:</span> {project.role}
          </p>
        )}

        {project.highlights.length > 0 && (
          <>
            <p className="project-card__list-label label">Key features:</p>
            <ul className="project-card__highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </>
        )}

        {project.evidence && project.evidence.length > 0 && (
          <div className="project-card__evidence-panel">
            <p className="project-card__evidence-label label">Evidence / Validation</p>
            <ul className="project-card__evidence">
              {project.evidence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="tag-list" aria-label={`Technologies used in ${project.name}`}>
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <p className="project-card__learning">
          <span className="label">Key learning:</span> {project.learning}
        </p>

        <div className="project-card__actions">
          {showGithub && (
            <a
              href={project.githubUrl}
              className="btn btn--secondary btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
          {project.access === 'private' && !showGithub && (
            <span className="project-card__access-note">Source not publicly linked</span>
          )}
        </div>
      </div>
    </article>
  )
}
