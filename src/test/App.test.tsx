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
    expect(screen.queryByRole('link', { name: 'Download CV' })).not.toBeInTheDocument()
  })
})

describe('Contact', () => {
  it('shows email and LinkedIn without the placeholder note', () => {
    render(<Contact />)

    expect(screen.getByRole('link', { name: 'Email me' })).toHaveAttribute(
      'href',
      'mailto:saralarkem7@gmail.com',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/slarkem/',
    )
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
    expect(container.querySelector('.atmosphere-backdrop img')).toHaveAttribute(
      'src',
      '/images/atmosphere/moonlit-realm.png',
    )
  })
})
