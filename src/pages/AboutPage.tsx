import { siteConfig } from '@/data/site'
import { ButtonLink } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

export function AboutPage() {
  return (
    <div className="pb-20 md:pb-28">
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-page">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            {siteConfig.fullName}
          </h1>
          <p className="mt-3 font-sans text-sm uppercase tracking-[0.16em] text-text-muted">
            {siteConfig.positioning.discipline}
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-text-muted md:text-xl">
                Fourth-year Mechanical Engineering student at the University of Guelph
                with experience spanning mechanical design, automation, engineering
                analysis, systems integration, and physical implementation.
              </p>
              <p className="text-base leading-relaxed text-text-muted">
                Co-ops at Toyota Motor Manufacturing Canada and Cargill provided
                professional experience solving engineering problems in real operating
                environments — from machine vision and equipment reliability to
                mechanical design and project engineering.
              </p>
              <p className="text-base leading-relaxed text-text-muted">
                Interested in roles where mechanical systems are designed, analyzed,
                tested, developed, and improved — across product development, automotive,
                robotics/mechatronics, R&amp;D, validation, automation, and related
                mechanical engineering work. Manufacturing experience is a strong proof
                point, not the limit of interest.
              </p>
            </div>
          </FadeIn>

          <FadeIn delayMs={80}>
            <aside className="border border-border bg-bg-elevated p-6 md:p-7">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                Profile
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-text-subtle">Education</dt>
                  <dd className="mt-1 text-text">
                    {siteConfig.education.program}
                    <br />
                    {siteConfig.education.institution}
                  </dd>
                </div>
                <div>
                  <dt className="text-text-subtle">Status</dt>
                  <dd className="mt-1 text-text">
                    {siteConfig.education.status}
                  </dd>
                </div>
                <div>
                  <dt className="text-text-subtle">Focus</dt>
                  <dd className="mt-1 text-text">
                    {siteConfig.positioning.focus.join(' · ')}
                  </dd>
                </div>
              </dl>
            </aside>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-20" id="contact">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold text-text md:text-3xl">
            Contact
          </h2>
          <p className="mt-4 max-w-xl text-text-muted">
            Reach out by email or LinkedIn, or download the resume.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/resume" variant="primary">
              Resume
            </ButtonLink>
            <ButtonLink
              to={`mailto:${siteConfig.contact.email}`}
              variant="secondary"
            >
              Email
            </ButtonLink>
            <ButtonLink to={siteConfig.contact.linkedin} variant="secondary" external>
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  )
}
