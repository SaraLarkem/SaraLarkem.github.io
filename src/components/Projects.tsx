import { additionalProjects, featuredProjects } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected engineering work from internship, university and personal development"
    >
      <div className="projects-group">
        <h3 className="projects-group__title" id="featured-projects-heading">
          Featured Projects
        </h3>
        <p className="projects-group__subtitle">
          Strongest examples of AI, backend and full-stack work
        </p>
        <div className="projects-grid projects-grid--featured" aria-labelledby="featured-projects-heading">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="featured" />
          ))}
        </div>
      </div>

      <div className="projects-group">
        <h3 className="projects-group__title" id="additional-projects-heading">
          Additional Projects
        </h3>
        <p className="projects-group__subtitle">
          Further internship case studies and university engineering work
        </p>
        <div
          className="projects-grid projects-grid--additional"
          aria-labelledby="additional-projects-heading"
        >
          {additionalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="additional" />
          ))}
        </div>
      </div>
    </Section>
  )
}
