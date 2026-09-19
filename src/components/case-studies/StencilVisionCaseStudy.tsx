import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { StencilControlLogicFlow } from '@/components/case-studies/StencilControlLogicFlow'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

type StencilVisionCaseStudyProps = {
  project: Project
  className?: string
}

const methods = [
  'Controls logic',
  'Machine vision',
  'Automation',
  'Error-proofing',
]

const tools = ['PLC Logic', 'Machine Vision', 'Industrial Cameras']

const verificationChecks = [
  'Part number mapped to the intended vision program',
  'Corresponding manufacturer-specific program activated',
  'Stencil inspection executed under the correct criteria',
  'Pass / scrap path remained functional after the PLC logic change',
]

export function StencilVisionCaseStudy({
  project,
  className,
}: StencilVisionCaseStudyProps) {
  return (
    <article className={cn('pb-20 md:pb-28', className)}>
      <header className="border-b border-border pb-10 md:pb-14">
        <div className="container-page">
          <p className="mb-6 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-text-subtle">
            <Link to="/projects" className="hover:text-accent">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span>{project.number}</span>
          </p>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
            <div>
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {project.category}
              </p>
              <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-text md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                {project.disciplineLabel}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
                {project.summary}
              </p>
            </div>

            <aside className="border border-border bg-bg-elevated p-5 md:p-6">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-sans text-[11px] uppercase tracking-[0.14em] text-text-subtle">
                    Organization
                  </dt>
                  <dd className="mt-1 text-text">{project.companyOrCourse}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[11px] uppercase tracking-[0.14em] text-text-subtle">
                    Timeline
                  </dt>
                  <dd className="mt-1 text-text">{project.date}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[11px] uppercase tracking-[0.14em] text-text-subtle">
                    Focus
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {[
                      'Controls',
                      'Machine Vision',
                      'Automation',
                      'Process Reliability',
                    ].map((item) => (
                      <Tag key={item} tone="muted">
                        {item}
                      </Tag>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="mt-10 grid gap-0 border border-border md:grid-cols-3">
            <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                Problem
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Different parts required manufacturer-specific stencil-inspection
                programs. A shared vision setup could miss stencil conditions,
                forcing line stops and manual removal — about{' '}
                <span className="text-text">five minutes of downtime per event</span>.
              </p>
            </div>
            <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                My role
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Owned the reliability improvement: problem analysis,
                part-number-driven vision-program selection logic, and PLC
                integration for automatic program switching.
              </p>
            </div>
            <div className="p-5 md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                Process impact
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-text">
                ~5 min / event
              </p>
              <p className="mt-1 text-sm text-text-muted">
                Downtime when a stencil was missed and required manual removal
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-page mt-10 md:mt-14">
        <section className="mb-10 border border-border md:mb-12">
          <div className="grid gap-0 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="px-5 py-4 md:px-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                Methods
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {methods.map((method) => (
                  <Tag key={method}>{method}</Tag>
                ))}
              </div>
            </div>
            <div className="px-5 py-4 md:px-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                Tools / systems
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Tag key={tool} tone="muted">
                    {tool}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        <StencilControlLogicFlow className="mb-12 md:mb-14" />

        <div className="mx-auto max-w-4xl space-y-11 md:space-y-12">
          <section id="before-after">
            <h2 className="font-display text-2xl font-semibold text-text">
              Before / after
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="border border-border bg-bg-elevated p-4 md:p-5">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-text-subtle">
                  Before
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  A shared / broad vision program covered parts where stencil
                  appearance varied by manufacturer. That setup could miss certain
                  stencil conditions and force line stops plus manual removal.
                </p>
              </div>
              <div className="border border-accent/35 bg-bg-elevated p-4 md:p-5">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                  After
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  The incoming part number is used by PLC logic to automatically
                  select the corresponding manufacturer-specific vision program
                  before stencil inspection.
                </p>
              </div>
            </div>
          </section>

          <section id="challenge">
            <h2 className="font-display text-2xl font-semibold text-text">
              Engineering challenge
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Different parts could require different stencil-inspection criteria
              because of manufacturer-specific stencil characteristics. The
              control system needed to use the available part number to select
              and activate the corresponding vision program before inspection,
              while keeping the normal pass / scrap sequence intact.
            </p>
          </section>

          <section id="program-selection">
            <h2 className="font-display text-2xl font-semibold text-text">
              Automatic program selection
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The reliability improvement came from connecting part-number
              information directly to automatic vision-program selection through
              PLC logic. The revised logic used the incoming part number to call
              the corresponding manufacturer-specific stencil-inspection program
              before inspection, replacing the shared-program approach so vision
              criteria matched the part being processed.
            </p>
          </section>

          <section id="verification">
            <h2 className="font-display text-2xl font-semibold text-text">
              Testing / verification
            </h2>
            <ul className="mt-5 space-y-0 border border-border">
              {verificationChecks.map((check, index) => (
                <li
                  key={check}
                  className="flex gap-3 border-b border-border px-4 py-3 last:border-b-0"
                >
                  <span className="shrink-0 font-sans text-[10px] tabular-nums tracking-[0.12em] text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-text-muted">
                    {check}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section id="takeaway">
            <h2 className="font-display text-2xl font-semibold text-text">
              Engineering takeaway
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The key improvement was using the part number already available to
              the control system to automatically select the correct
              stencil-inspection program. Connecting part information directly to
              PLC-based vision-program selection reduced dependence on a shared
              inspection setup and made the stencil check more robust.
            </p>
          </section>

          {project.requiresSanitization ? (
            <p className="border-t border-border pt-6 font-sans text-[11px] leading-relaxed tracking-[0.04em] text-text-subtle">
              {siteConfig.confidentiality.notice}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  )
}
