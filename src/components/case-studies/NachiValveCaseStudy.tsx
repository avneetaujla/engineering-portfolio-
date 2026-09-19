import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { RootCauseInvestigationDiagram } from '@/components/case-studies/RootCauseInvestigationDiagram'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

type NachiValveCaseStudyProps = {
  project: Project
  className?: string
}

const methods = [
  'Failure analysis',
  'Root-cause investigation',
  'System analysis',
  'Countermeasure development',
]

const displayTools = ['Pneumatic Systems', 'System Analysis']

const hypotheses = [
  {
    status: 'supported' as const,
    statusLabel: 'Contributing factor',
    hypothesis: 'Lubrication degradation could drive abnormal valve motion.',
    evidence: 'Factory lubrication was being washed out over time.',
    decision: 'Add a lubricator downstream of the valve.',
  },
  {
    status: 'supported' as const,
    statusLabel: 'Contributing factor',
    hypothesis: 'Contamination / debris could disrupt reliable actuation.',
    evidence: 'Fibre from upstream filtration was reaching the valve.',
    decision: 'Change out upstream filtration and protect the pilot circuit.',
  },
  {
    status: 'behavior' as const,
    statusLabel: 'System behavior',
    hypothesis: 'Pilot-spool sensitivity could amplify debris-related failure.',
    evidence:
      'The pilot spool controls multi-position actuations and is highly sensitive to debris.',
    decision: 'Add a filter on the pilot line feeding the pilot spool.',
  },
]

export function NachiValveCaseStudy({
  project,
  className,
}: NachiValveCaseStudyProps) {
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
                      'Failure Analysis',
                      'Reliability',
                      'Pneumatic Systems',
                      'Root-Cause Investigation',
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
                Recurring pneumatic valve failures created approximately{' '}
                <span className="text-text">1.5 hours of downtime per month</span>{' '}
                on one robot.
              </p>
            </div>
            <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                System scale
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                <span className="text-text">10 additional robots</span> used the
                same / similar valve arrangement — making the failure mechanism
                relevant beyond one machine.
              </p>
            </div>
            <div className="p-5 md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                Role
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Led early-term reliability investigation; defined the problem
                systemically and supported countermeasure development.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-page mt-10 md:mt-14">
        {/* Compact methods / tools only */}
        <section className="mb-10 border border-border md:mb-12">
          <div className="grid gap-0 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="px-5 py-4 md:px-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                Engineering methods
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
                {displayTools.map((tool) => (
                  <Tag key={tool} tone="muted">
                    {tool}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RootCauseInvestigationDiagram className="mb-12 md:mb-14" />

        <div className="mx-auto max-w-4xl space-y-12 md:space-y-14">
          <section id="system-understanding">
            <h2 className="font-display text-2xl font-semibold text-text">
              System understanding
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The valve was reviewed as part of the full transfer sequence rather
              than as an isolated failed part.
            </p>
            <ol className="mt-5 flex flex-wrap gap-2 border border-border bg-bg-elevated p-4 md:gap-0 md:p-0 md:divide-x md:divide-border">
              {[
                'Approach',
                'Vacuum',
                'Secure',
                'Transfer',
                'Blow-off',
                'Release',
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-2 font-sans text-sm text-text md:flex-1 md:justify-center md:px-3 md:py-3"
                >
                  <span className="tabular-nums text-[10px] tracking-[0.12em] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Replacing the component alone would treat the symptom without
              explaining why the failure kept returning.
            </p>
          </section>

          <section id="hypothesis-evidence-decision">
            <h2 className="font-display text-2xl font-semibold text-text">
              Hypothesis → evidence → decision
            </h2>
            <div className="mt-6 space-y-3">
              {hypotheses.map((block) => (
                <div
                  key={block.hypothesis}
                  className="border border-border bg-bg-elevated"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-2 md:px-5">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                      Investigation line
                    </p>
                    <span
                      className={cn(
                        'font-sans text-[10px] font-medium uppercase tracking-[0.14em]',
                        block.status === 'supported'
                          ? 'text-accent'
                          : 'text-text-subtle',
                      )}
                    >
                      {block.statusLabel}
                    </span>
                  </div>
                  <div className="grid gap-0 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
                    <div className="p-4 md:p-5">
                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                        Hypothesis
                      </p>
                      <p className="mt-2 text-sm leading-snug text-text-muted">
                        {block.hypothesis}
                      </p>
                    </div>
                    <div className="p-4 md:p-5">
                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                        Evidence
                      </p>
                      <p className="mt-2 text-sm leading-snug text-text-muted">
                        {block.evidence}
                      </p>
                    </div>
                    <div className="p-4 md:p-5">
                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                        Engineering decision
                      </p>
                      <p className="mt-2 text-sm leading-snug text-text-muted">
                        {block.decision}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="findings-countermeasures">
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <div>
                <h2 className="font-display text-2xl font-semibold text-text">
                  Root-cause findings
                </h2>
                <div className="mt-5 space-y-4">
                  <div className="border border-accent/35 bg-bg-elevated p-4">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                      Supported findings
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-muted">
                      <li>Factory lubrication was being washed out over time.</li>
                      <li>
                        Fibre from upstream filtration was reaching the valve.
                      </li>
                    </ul>
                  </div>
                  <div className="border border-border bg-bg-elevated p-4">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-text-subtle">
                      System behavior / context
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">
                      Pilot-spool sensitivity explained why debris disrupted
                      multi-position valve actuation.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold text-text">
                  Countermeasures
                </h2>
                <ul className="mt-5 space-y-3">
                  {[
                    {
                      what: 'Pilot-line filter added',
                      why: 'Protects the debris-sensitive pilot spool',
                    },
                    {
                      what: 'Upstream filtration changed out',
                      why: 'Interrupts the fibre path into the valve',
                    },
                    {
                      what: 'Lubricator added downstream',
                      why: 'Restores lubrication after washout',
                    },
                  ].map((item) => (
                    <li
                      key={item.what}
                      className="border border-border bg-bg-elevated px-4 py-3"
                    >
                      <p className="text-sm font-medium text-text">{item.what}</p>
                      <p className="mt-1 text-sm text-text-muted">{item.why}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="verification">
            <h2 className="font-display text-2xl font-semibold text-text">
              Countermeasure verification
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Verification focused on the conditions tied to the failure mode:
              pilot-circuit cleanliness, upstream filtration quality, and
              lubrication condition after countermeasure installation.
            </p>
          </section>

          <section
            id="why-this-mattered"
            className="border border-border bg-bg-elevated px-5 py-4 md:px-6"
          >
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
              Why this mattered
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
              The same valve arrangement existed on 10 additional robots, making
              the failure mechanism relevant beyond the original machine without
              assuming identical failure rates.
            </p>
          </section>

          <section id="takeaway">
            <h2 className="font-display text-2xl font-semibold text-text">
              Engineering takeaway
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The key lesson from this investigation was that repeatedly replacing
              a failed component does not solve a recurring failure. Understanding
              the valve&apos;s role in the full transfer sequence and testing
              multiple failure mechanisms made it possible to address the
              conditions driving the problem instead of only treating the symptom.
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
