import { isConfiguredLink, siteConfig } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()
  const github = siteConfig.links.github
  const linkedin = siteConfig.links.linkedin
  const email = siteConfig.email

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          &copy; {year} {siteConfig.name}
        </p>
        <nav aria-label="Footer">
          <ul className="footer__links">
            {isConfiguredLink(github) && (
              <li>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            )}
            {isConfiguredLink(linkedin) && (
              <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            )}
            {isConfiguredLink(email) && (
              <li>
                <a href={`mailto:${email}`}>Email</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
