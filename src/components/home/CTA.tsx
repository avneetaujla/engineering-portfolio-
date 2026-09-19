import { siteConfig } from '@/data/site'
import { ButtonLink } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

export function CTA() {
  const emailHref = `mailto:${siteConfig.contact.email}`
  const linkedinHref = siteConfig.contact.linkedin

  return (
    <section className="py-20 md:py-28" id="contact">
      <div className="container-page">
        <FadeIn>
          <div className="relative overflow-hidden border border-border bg-bg-elevated px-6 py-12 md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute inset-0 technical-grid opacity-20"
              aria-hidden="true"
            />
            <div className="relative max-w-2xl">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                Next
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text md:text-5xl">
                Available for engineering conversations.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
                Open to roles across mechanical design, product development, automation,
                systems, analysis, and implementation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink to="/resume" variant="primary" size="lg">
                  View Resume
                </ButtonLink>
                <ButtonLink to={emailHref} variant="secondary" size="lg">
                  Email
                </ButtonLink>
                <ButtonLink to={linkedinHref} variant="secondary" size="lg" external>
                  LinkedIn
                </ButtonLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
