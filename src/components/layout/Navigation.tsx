import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems, siteConfig } from '@/data/site'
import { ButtonLink } from '@/components/ui/Button'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { cn } from '@/lib/utils'

export function Navigation() {
  const scrolled = useScrollPosition(20)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const contactHref = siteConfig.contact.email
    ? `mailto:${siteConfig.contact.email}`
    : '/about#contact'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled || open
          ? 'border-b border-border bg-bg/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between md:h-[4.25rem]"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="font-display text-sm font-semibold tracking-[0.14em] text-text transition-colors hover:text-accent sm:text-base"
        >
          AVNEET AUJLA
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'font-sans text-[12px] font-medium uppercase tracking-[0.16em] transition-colors',
                    isActive
                      ? 'text-text'
                      : 'text-text-muted hover:text-text',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink to={contactHref} variant="secondary" size="sm">
            Contact
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-border text-text lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-border bg-bg lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'block border-b border-border py-4 font-sans text-sm font-medium uppercase tracking-[0.16em]',
                    isActive ? 'text-text' : 'text-text-muted',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-4">
            <ButtonLink to={contactHref} variant="primary" size="md" className="w-full">
              Contact
            </ButtonLink>
          </li>
        </ul>
      </div>
    </header>
  )
}
