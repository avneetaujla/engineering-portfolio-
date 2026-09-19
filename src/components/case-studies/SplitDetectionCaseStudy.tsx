import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { SplitSystemArchitecture } from '@/components/case-studies/SplitSystemArchitecture'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

type SplitDetectionCaseStudyProps = {
  project: Project
  className?: string
}

const methods = [
  'Systems integration',
  'Machine vision',
  'Controls',
  'Validation',
]

const tools = [
  'Cognex IS8912',
  'Cognex Edge Learning',
  'PLC / HMI',
  'Industrial Networking',
]

const constraints = [
  {
    title: 'Moving installation',
    body: 'Camera mounted to the moving press ram.',
  },
  {
    title: 'Environment',
    body: 'Vibration + low-light operating conditions.',
  },
  {
    title: 'Timing',
    body: 'Image capture had to synchronize with the machine sequence.',
  },
  {
    title: 'Production compatibility',
    body: 'The system could not interfere with normal press operation.',
  },
]

export function SplitDetectionCaseStudy({
  project,
  className,
}: SplitDetectionCaseStudyProps) {
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
              {project.subtitle ? (
                <p className="mt-2 text-base text-text-muted md:text-lg">
                  {project.subtitle}
                </p>
              ) : null}
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
                      'Systems Integration',
                      'Machine Vision',
                      'Controls',
                      'Validation',
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
                Two tear-off events left split panels in the die, causing{' '}
                <span className="text-text">35+ hours of die repair</span> and{' '}
                <span className="text-text">3 missed production runs</span>, with
                downstream weld-shop shortage risk.
              </p>
            </div>
            <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                My role
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Project lead from concept feasibility through production
                installation across mechanical, vision, networking, PLC, and HMI
                scopes — working closely with maintenance.
              </p>
            </div>
            <div className="p-5 md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                Objective
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Detect split / tear-off conditions at Draw Press 1 before the
                next stamping cycle.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container-page mt-10 md:mt-14">
        {/* Impact / validation snapshot */}
        <section className="mb-10 grid gap-0 border border-border md:mb-12 md:grid-cols-3">
          <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-text-subtle">
              Die repair
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-text">
              35+ hr
            </p>
            <p className="mt-1 text-sm text-text-muted">
              Repair work after tear-off events
            </p>
          </div>
          <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-text-subtle">
              Missed runs
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-text">
              3
            </p>
            <p className="mt-1 text-sm text-text-muted">
              Production runs missed after the events
            </p>
          </div>
          <div className="p-5 md:p-6">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-text-subtle">
              Validation test panels
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-text">
              25+
            </p>
            <p className="mt-1 text-sm text-text-muted">
              Panels used for validation testing
            </p>
          </div>
        </section>

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

        <SplitSystemArchitecture className="mb-12 md:mb-14" />

        <div className="mx-auto max-w-4xl space-y-11 md:space-y-12">
          <section id="constraints">
            <h2 className="font-display text-2xl font-semibold text-text">
              Engineering constraints
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The camera had to operate on a moving press ram in a high-vibration,
              low-light, large-die press environment — capturing a usable image
              at the correct point in the cycle without disrupting normal press
              operation.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {constraints.map((item) => (
                <li
                  key={item.title}
                  className="border border-border bg-bg-elevated px-4 py-3"
                >
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm text-text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section id="concept">
            <h2 className="font-display text-2xl font-semibold text-text">
              Concept &amp; feasibility
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              After the tear-off events, Avneet developed the concept of detecting
              split / tear-off conditions at Draw Press 1 with machine vision
              before the next stamping cycle continued. Initial feasibility
              trials confirmed usable images and that the split condition was
              classifiable.
            </p>
          </section>

          <section id="mechanical-vision">
            <h2 className="font-display text-2xl font-semibold text-text">
              Mechanical &amp; vision integration
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Camera position was evaluated for a Cognex IS8912 mounted on the
              moving press ram. Installation included mechanical mounting,
              dedicated industrial lighting, and cable management for moving
              equipment — coordinated with maintenance for permanent production
              installation.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                'Press-ram camera mounting',
                'Industrial lighting',
                'Cable management for motion',
                'Cognex IS8912 + Edge Learning',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border border-border bg-bg-elevated px-4 py-3 text-sm text-text-muted"
                >
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="controls-network">
            <h2 className="font-display text-2xl font-semibold text-text">
              Controls &amp; network integration
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Image capture was synchronized with the press sequence using
              angle-based triggering and press / robot PLC signals. HMI lighting
              controls and remote network access supported system operation and
              configuration.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                'Angle-based image triggering',
                'Press / robot PLC signals',
                'HMI lighting control',
                'Remote network access',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border border-border bg-bg-elevated px-4 py-3 text-sm text-text-muted"
                >
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="model">
            <h2 className="font-display text-2xl font-semibold text-text">
              Model development
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              A Cognex Edge Learning model was developed using defective and
              acceptable panel images to classify split versus no-split
              conditions, then tested as part of the inspection path.
            </p>
          </section>

          <section id="validation">
            <h2 className="font-display text-2xl font-semibold text-text">
              Validation results
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              During validation testing across 25+ test panels, the system
              detected all tested split conditions with no false positives in the
              validation set.
            </p>
            <ol className="mt-6 flex flex-col gap-0 md:flex-row md:items-stretch">
              {[
                {
                  phase: 'Validation set',
                  value: '25+',
                  detail: 'Test panels',
                },
                {
                  phase: 'Defect detection',
                  value: '100%',
                  detail: 'Tested split conditions detected',
                },
                {
                  phase: 'False positives',
                  value: '0',
                  detail: 'During validation set',
                },
              ].map((step, index, arr) => (
                <li
                  key={step.phase}
                  className="flex min-w-0 flex-1 flex-col md:flex-row md:items-stretch"
                >
                  <div className="flex flex-1 flex-col border border-accent/35 bg-bg-elevated px-4 py-4">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                      {step.phase}
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold text-text">
                      {step.value}
                    </p>
                    <p className="mt-1 text-sm text-text-muted">{step.detail}</p>
                  </div>
                  {index < arr.length - 1 ? (
                    <div
                      className="flex h-5 shrink-0 items-center justify-center text-accent md:h-auto md:w-6"
                      aria-hidden="true"
                    >
                      <span className="md:hidden">↓</span>
                      <span className="hidden md:inline">→</span>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>

          <section id="cycle-stop">
            <h2 className="font-display text-2xl font-semibold text-text">
              Cycle-stop integration status
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="border border-accent/35 bg-bg-elevated p-4 md:p-5">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                  Completed during term
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-text-muted">
                  <li>Press-ram camera installation and lighting</li>
                  <li>Cable management and remote network access</li>
                  <li>Angle-based triggering and HMI lighting control</li>
                  <li>Cognex Edge Learning model development</li>
                  <li>Validation testing across 25+ test panels</li>
                </ul>
              </div>
              <div className="border border-border bg-bg-elevated p-4 md:p-5">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-text-subtle">
                  In progress at term end
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  PLC cycle-stop integration to automatically prevent the next
                  cycle following a detected split.
                </p>
              </div>
            </div>
          </section>

          <section id="takeaway">
            <h2 className="font-display text-2xl font-semibold text-text">
              Engineering takeaway
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The biggest challenge was not simply getting the camera to
              recognize a split; it was making the entire inspection system work
              within the press sequence. Camera mounting, lighting, trigger
              timing, PLC signals, HMI controls, networking, and vision all had
              to work together for the detection system to be useful in
              production.
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
