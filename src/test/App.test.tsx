import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from '../components/Contact'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { Projects } from '../components/Projects'
import { featuredProjects, projects } from '../data/portfolio'

describe('Hero', () => {
  it('renders name, title, and primary project CTA', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: 'Sara Larkem' })).toBeInTheDocument()
    expect(
      screen.getByText('Software Developer | AI & Cloud Computing Student'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Projects' })).toHaveAttribute(
      'href',
      '#projects',
    )
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/SaraLarkem',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/slarkem/',
    )
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute(
      'href',
      '/cv/sara-larkem-cv.pdf',
    )
  })

  it('keeps decorative embers hidden from assistive technology', () => {
    const { container } = render(<Hero />)
    const embers = container.querySelector('.embers')

    expect(embers).toHaveAttribute('aria-hidden', 'true')
    expect(embers?.children.length).toBeGreaterThan(0)
  })
})

describe('Contact', () => {
  it('shows email, LinkedIn and CV without the placeholder note', () => {
    render(<Contact />)

    expect(screen.getByRole('link', { name: 'Email me' })).toHaveAttribute(
      'href',
      'mailto:saralarkem7@gmail.com',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/slarkem/',
    )
    expect(screen.getByRole('link', { name: 'Download CV' })).toHaveAttribute('download')
    expect(screen.queryByText(/being finalised/)).not.toBeInTheDocument()
  })
})

describe('ProjectCard', () => {
  it('renders project details and evidence', () => {
    const project = projects[0]
    render(<ProjectCard project={project} />)

    expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument()
    expect(screen.getByText(/Problem \/ Goal:/)).toBeInTheDocument()
    expect(screen.getByText('Evidence / Validation')).toBeInTheDocument()
    expect(screen.getByText(/13 automated tests passed/)).toBeInTheDocument()
    expect(screen.getByText('Private internship work')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'View on GitHub' })).not.toBeInTheDocument()
  })

  it('shows in progress badge for ongoing work', () => {
    const inProgress = projects.find((p) => p.status === 'in progress')!
    render(<ProjectCard project={inProgress} />)

    expect(screen.getByText('In progress')).toBeInTheDocument()
  })

  it('shows GitHub for public repositories', () => {
    const publicProject = projects.find((p) => p.id === 'java-manga')!
    render(<ProjectCard project={publicProject} />)

    expect(screen.getByRole('link', { name: 'View on GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/SaraLarkem/java-manga-web-app',
    )
  })
})

describe('Projects', () => {
  it('groups featured and additional projects', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Additional Projects' })).toBeInTheDocument()
    expect(featuredProjects).toHaveLength(4)
  })
})

describe('Interests', () => {
  it('renders beyond code section with interests text and backdrop', async () => {
    const { Interests } = await import('../components/Interests')
    const { container } = render(<Interests />)

    expect(screen.getByRole('heading', { name: 'Beyond Code' })).toBeInTheDocument()
    expect(screen.getByText(/Souls games/i)).toBeInTheDocument()
    expect(container.querySelector('.atmosphere-backdrop--moon')).toBeInTheDocument()
    // Backdrops are CSS-drawn: no images are loaded
    expect(container.querySelector('.atmosphere-backdrop img')).toBeNull()
  })
})

describe('Section', () => {
  it('shows a decorative numeral without changing the heading name', async () => {
    const { About } = await import('../components/About')
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument()
    const numeral = container.querySelector('.section__numeral')
    expect(numeral).toHaveTextContent('I')
    expect(numeral).toHaveAttribute('aria-hidden', 'true')
  })
})

describe('ProjectCard item line', () => {
  it('summarises primary technology and repository access', () => {
    const project = projects.find((p) => p.access === 'private')!
    const { container } = render(<ProjectCard project={project} />)

    expect(container.querySelector('.project-card__record')).toHaveTextContent(
      `${project.technologies[0]} · Private repository`,
    )
  })
})

describe('Skills & Interests', () => {
  it('shows where skills were gained, strengths and hobbies', async () => {
    const { Skills } = await import('../components/Skills')
    render(<Skills />)

    expect(screen.getByRole('heading', { level: 2, name: 'Skills & Interests' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Through my Causalix internship' })).toBeInTheDocument()
    for (const skill of ['Python', 'Java', 'JavaScript', 'SQL', 'Git', 'Docker', 'Machine learning', 'Automated testing']) {
      expect(screen.getByText(skill)).toBeInTheDocument()
    }
    expect(screen.getByText('Highly adaptable')).toBeInTheDocument()
    expect(screen.getByText('Going to the gym')).toBeInTheDocument()
  })
})
