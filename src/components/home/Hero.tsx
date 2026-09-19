import { siteConfig } from '@/data/site'
import { ButtonLink } from '@/components/ui/Button'

const experiencePanel = [
  {
    value: '12 months',
    label: 'Professional engineering experience',
    detail: null as string | null,
    logoSrc: null as string | null,
    logoAlt: null as string | null,
  },
  {
    value: '8 months',
    label: 'Toyota Motor Manufacturing Canada',
    detail: 'Engineering Analyst — Press Shop',
    logoSrc: '/tmmc-logo.webp',
    logoAlt: 'Toyota Motor Manufacturing Canada logo',
  },
  {
    value: '4 months',
    label: 'Cargill',
    detail: 'Engineering Intern — Plant Projects',
    logoSrc: '/cargill-logo.webp',
    logoAlt: 'Cargill logo',
  },
] as const

export function Hero() {
  const { positioning, education } = siteConfig

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 technical-grid opacity-[0.35]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--color-accent)_8%,transparent),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative py-20 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-border px-3 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                {education.institution}
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-text-subtle">
                {education.status}
              </span>
            </div>

            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.28em] text-accent">
              {positioning.discipline}
            </p>

            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {siteConfig.fullName}
            </h1>

            <p
              className="mt-5 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted sm:text-[12px]"
              style={{ whiteSpace: 'nowrap' }}
            >
              {positioning.focus
                .map((item) => item.replace(/ /g, '\u00A0'))
                .join('\u00A0·\u00A0')}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text md:text-xl">
              {positioning.tagline}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted md:text-base">
              {positioning.support}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink to="/projects" variant="primary" size="lg">
                View Projects
              </ButtonLink>
              <ButtonLink to="/resume" variant="secondary" size="lg">
                Download Resume
              </ButtonLink>
            </div>
          </div>

          <aside className="relative border border-border bg-bg-elevated/80 p-5 backdrop-blur-[2px] md:p-6">
            <dl className="space-y-0 divide-y divide-border">
              {experiencePanel.map((row) => (
                <div key={row.value + row.label} className="py-4 first:pt-0 last:pb-0">
                  <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    {row.value}
                  </dt>
                  <dd className="mt-1.5">
                    <div className="flex items-start gap-3">
                      {row.logoSrc ? (
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
                          <img
                            src={row.logoSrc}
                            alt={row.logoAlt ?? ''}
                            className="max-h-8 max-w-8 object-contain"
                          />
                        </span>
                      ) : null}
                      <div className="min-w-0">
                        <p className="font-display text-sm font-medium text-text md:text-base">
                          {row.label}
                        </p>
                        {row.detail ? (
                          <p className="mt-1 text-sm text-text-muted">{row.detail}</p>
                        ) : null}
                      </div>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 border-t border-border pt-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-text-subtle">
                Throughline
              </p>
              <p className="mt-2 text-sm text-text-muted">
                Concept → design → analysis → integration → implementation
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
