import { Link } from 'react-router-dom'
import { navItems, siteConfig } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()
  const emailHref = `mailto:${siteConfig.contact.email}`
  const linkedinHref = siteConfig.contact.linkedin

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container-page py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-display text-base font-semibold tracking-[0.14em] text-text">
              AVNEET AUJLA
            </p>
            <p className="mt-3 text-sm text-text-muted">
              {siteConfig.education.program}
            </p>
            <p className="text-sm text-text-muted">
              {siteConfig.education.institution}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                Navigate
              </p>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-text-muted transition-colors hover:text-text"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                Connect
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={emailHref}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={linkedinHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <Link
                    to="/resume"
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-subtle">
            © {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-text-subtle">
            {siteConfig.confidentiality.notice}
          </p>
        </div>
      </div>
    </footer>
  )
}
