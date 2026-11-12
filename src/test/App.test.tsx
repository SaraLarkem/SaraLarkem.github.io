import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from '../components/Contact'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { Projects } from '../components/Projects'
import { internshipProjects, projects, universityProjects } from '../data/portfolio'

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
    const project = projects.find((p) => p.id === 'causal-model-auditor')!
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
  it('lists Causalix internship projects before university projects', () => {
    const { container } = render(<Projects />)

    const groups = [...container.querySelectorAll('.projects-group__title')].map((h) => h.textContent)
    expect(groups).toEqual(['Causalix Internship', 'University Projects'])
    expect(internshipProjects[0].id).toBe('rag-pipeline')
    expect(internshipProjects.every((p) => p.access === 'private')).toBe(true)
    expect(universityProjects.map((p) => p.id)).toContain('landing-safety')
  })

  it('describes the RAG pipeline with FAISS and the decision-tree landing predictor', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { name: /RAG Pipeline/ })).toBeInTheDocument()
    expect(screen.getAllByText('FAISS').length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: 'Spacecraft Landing Safety Predictor' })).toBeInTheDocument()
    expect(screen.getByText('Decision tree classifier')).toBeInTheDocument()
    expect(screen.queryByText(/coming soon/i)).not.toBeInTheDocument()
  })
})

describe('Beyond Code', () => {
  it('shows care work and college experience over the CSS moon backdrop', async () => {
    const { BeyondCode } = await import('../components/BeyondCode')
    const { container } = render(<BeyondCode />)

    expect(screen.getByRole('heading', { level: 2, name: 'What I Bring Beyond Code' })).toBeInTheDocument()
    expect(screen.getByText(/Connected Health/, { selector: '.beyond__place' })).toBeInTheDocument()
    expect(screen.getByText('Handling challenges calmly')).toBeInTheDocument()
    expect(screen.getByText('Meeting project demands on time')).toBeInTheDocument()
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

describe('Career Goals', () => {
  it('states the opportunity, target roles and long-term goal', async () => {
    const { CareerGoals } = await import('../components/CareerGoals')
    render(<CareerGoals />)

    expect(screen.getByRole('heading', { level: 2, name: 'Career Goals' })).toBeInTheDocument()
    expect(screen.getByText(/software engineering opportunity/)).toBeInTheDocument()
    for (const role of ['Backend', 'Full-Stack', 'AI-related roles']) {
      expect(screen.getByText(role)).toBeInTheDocument()
    }
    expect(screen.getByText(/light and positivity/)).toBeInTheDocument()
  })
})

describe('Page order', () => {
  it('follows the video walkthrough', async () => {
    const { default: App } = await import('../App')
    const { container } = render(<App />)

    const ids = [...container.querySelectorAll('main > section')].map((s) => s.id)
    expect(ids).toEqual([
      'home',
      'about',
      'education',
      'skills',
      'experience',
      'projects',
      'beyond-code',
      'career-goals',
      'contact',
    ])
  })
})

describe('Education', () => {
  it('lists the degree, LOETB award and Leaving Certificate', async () => {
    const { Education } = await import('../components/Education')
    render(<Education />)

    expect(screen.getByRole('heading', { level: 2, name: 'Education' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'BSc (Hons) Software Design with AI and Cloud Computing' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Full Distinction Award')).toBeInTheDocument()
    expect(screen.getByText('Killina Secondary School')).toBeInTheDocument()
  })
})
