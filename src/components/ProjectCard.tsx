import type { ReactNode } from 'react'
import type { Project, ProjectIcon } from '../data/portfolio'
import { isConfiguredLink } from '../data/portfolio'

type ProjectCardProps = {
  project: Project
  variant?: 'featured' | 'additional'
}

/** Simple gold line icons (24px grid) for projects without a screenshot */
const iconPaths: Record<ProjectIcon, ReactNode> = {
  // Document with a magnifying glass
  search: (
    <>
      <path d="M13 21H6V3h8l4 4v4" />
      <path d="M14 3v4h4" />
      <path d="M9 9h5M9 12h4M9 15h2" />
      <circle cx="16.5" cy="16.5" r="3" />
      <path d="M18.6 18.6L21.5 21.5" />
    </>
  ),
  // Shield with a tick
  audit: (
    <>
      <path d="M12 2.5l7.5 3v5.5c0 4.6-3.2 8.4-7.5 10.5-4.3-2.1-7.5-5.9-7.5-10.5V5.5z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  // Stock box
  inventory: (
    <>
      <path d="M3 7.5l9-4.5 9 4.5-9 4.5z" />
      <path d="M3 7.5v9l9 4.5 9-4.5v-9" />
      <path d="M12 12v9" />
      <path d="M7.5 5.25l9 4.5" />
    </>
  ),
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
            alt={project.screenshotAlt ?? `Screenshot of ${project.name}`}
            loading="lazy"
          />
        </div>
      ) : project.iconTile ? (
        <div className="project-card__visual" role="img" aria-label={project.iconTile.alt}>
          <svg
            className="project-card__visual-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            {iconPaths[project.iconTile.icon]}
          </svg>
          <span className="project-card__visual-label">{project.iconTile.label}</span>
        </div>
      ) : null}

      <div className="project-card__body">
        {/* Item-style category line; duplicates the tags and badges, so hidden from screen readers */}
        <p className="project-card__record" aria-hidden="true">
          {itemLine}
        </p>
        <h3 id={`project-${project.id}-title`} className="project-card__title">
          {project.name}
        </h3>
        <p className="project-card__plain">{project.plain}</p>
        {project.role && (
          <p className="project-card__role">
            <span className="label">My role:</span> {project.role}
          </p>
        )}

        <div className="tag-list" aria-label={`Technologies used in ${project.name}`}>
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Native disclosure: keyboard (Tab, Enter/Space) and screen-reader support built in */}
        <details className="project-card__details" open={project.expanded}>
          <summary className="project-card__toggle">
            <span className="project-card__toggle-show">Show details</span>
            <span className="project-card__toggle-hide">Hide details</span>
          </summary>

          {project.summary && <p className="project-card__summary">{project.summary}</p>}

          <p className="project-card__problem">
            <span className="label">Problem / Goal:</span> {project.problem}
          </p>
          <p className="project-card__built">
            <span className="label">What I built:</span> {project.built}
          </p>

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

          <p className="project-card__learning">
            <span className="label">Key learning:</span> {project.learning}
          </p>
        </details>

        <div className="project-card__actions">
          {showGithub && (
            <a
              href={project.githubUrl}
              className="btn btn--secondary btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View code
            </a>
          )}
          {project.access === 'private' && !showGithub && (
            <span className="project-card__access-note">Company project — code is confidential</span>
          )}
        </div>
      </div>
    </article>
  )
}
