import type { Project } from '../data/portfolio'
import { internshipProjects, universityProjects } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

type ProjectGroupProps = {
  id: string
  title: string
  subtitle: string
  projects: readonly Project[]
}

/** One group of projects: large cards for the featured work, compact cards for the rest. */
function ProjectGroup({ id, title, subtitle, projects }: ProjectGroupProps) {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)
  const headingId = `${id}-heading`

  return (
    <div className="projects-group" id={id}>
      <h3 className="projects-group__title" id={headingId}>
        {title}
      </h3>
      <p className="projects-group__subtitle">{subtitle}</p>
      {featured.length > 0 && (
        <div className="projects-grid projects-grid--featured" aria-labelledby={headingId}>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} variant="featured" />
          ))}
        </div>
      )}
      {others.length > 0 && (
        <div className="projects-grid projects-grid--additional" aria-labelledby={headingId}>
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} variant="additional" />
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      numeral="IV"
      title="Projects"
      subtitle="Internship work at Causalix first, followed by university projects"
    >
      <ProjectGroup
        id="internship-projects"
        title="Causalix Internship"
        subtitle="Built during my software development internship"
        projects={internshipProjects}
      />
      <ProjectGroup
        id="university-projects"
        title="University Projects"
        subtitle="Built during my BSc in Software Design with AI and Cloud Computing"
        projects={universityProjects}
      />
    </Section>
  )
}
