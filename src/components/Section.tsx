import type { ReactNode } from 'react'
import { SectionBackdrop, type BackdropScene } from './SectionBackdrop'

type SectionProps = {
  id: string
  title: string
  /** Decorative chapter marker shown above the title (e.g. "III"). */
  numeral?: string
  subtitle?: string
  children: ReactNode
  className?: string
  /** Optional CSS-drawn atmosphere behind the section. */
  backdropScene?: BackdropScene
}

function SectionFlourish() {
  return (
    <svg
      className="section__flourish"
      viewBox="0 0 224 16"
      width="224"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0 8H92M132 8H224" />
        <path d="M92 8c3.5-4.5 8-4.5 11 0c-3 4.5-7.5 4.5-11 0z" />
        <path d="M132 8c-3.5-4.5-8-4.5-11 0c3 4.5 7.5 4.5 11 0z" />
      </g>
      <path
        className="section__flourish-gem"
        d="M112 1.5L118.5 8L112 14.5L105.5 8Z"
        strokeWidth="1"
      />
      <circle className="section__flourish-core" cx="112" cy="8" r="1.6" />
    </svg>
  )
}

export function Section({
  id,
  title,
  numeral,
  subtitle,
  children,
  className = '',
  backdropScene,
}: SectionProps) {
  const sectionClass = ['section', backdropScene ? 'section--backdrop' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={sectionClass} aria-labelledby={`${id}-heading`}>
      {backdropScene && <SectionBackdrop scene={backdropScene} />}
      <div className="section__inner">
        <header className="section__header">
          {numeral && (
            <span className="section__numeral" aria-hidden="true">
              {numeral}
            </span>
          )}
          <h2 id={`${id}-heading`} className="section__title">
            {title}
          </h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
          <div className="section__divider" aria-hidden="true">
            <SectionFlourish />
          </div>
        </header>
        {children}
      </div>
    </section>
  )
}
