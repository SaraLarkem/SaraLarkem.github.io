import { useEffect, useState } from 'react'
import { navItems, siteConfig } from '../data/portfolio'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#home" className="header__logo" onClick={closeMenu}>
          {siteConfig.name}
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="header__nav-link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="header__menu-icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`header__mobile-nav ${menuOpen ? 'header__mobile-nav--open' : ''}`}
        aria-label="Mobile primary"
        aria-hidden={!menuOpen}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="header__mobile-link" onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
