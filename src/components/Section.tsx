import type { ReactNode } from 'react'
import { SectionBackdrop } from './SectionBackdrop'

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  backgroundImage?: string
  backgroundPosition?: string
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  backgroundImage,
  backgroundPosition,
}: SectionProps) {
  const sectionClass = ['section', backgroundImage ? 'section--backdrop' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={sectionClass} aria-labelledby={`${id}-heading`}>
      {backgroundImage && (
        <SectionBackdrop image={backgroundImage} position={backgroundPosition} />
      )}
      <div className="section__inner">
        <header className="section__header">
          <h2 id={`${id}-heading`} className="section__title">
            {title}
          </h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
          <div className="section__divider" aria-hidden="true">
            <span className="section__divider-marker" />
          </div>
        </header>
        {children}
      </div>
    </section>
  )
}
