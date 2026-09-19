import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { GateBeforeAfterDrawing } from '@/components/case-studies/GateBeforeAfterDrawing'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

type GateRestrainingCaseStudyProps = {
  project: Project
  className?: string
}

const methods = [
  'Iterative mechanical design',
  'Concept redesign',
  'Cost–usability trade-offs',
  'Operator feedback',
]

const tools = ['AutoCAD', 'Technical Documentation']

const tradeoffs = [
  {
    title: 'Restraint effectiveness vs operator usability',
    body: 'The design had to hold the gate securely for cattle loading and unloading while remaining practical for employees to operate day to day.',
  },
  {
    title: 'Durability vs simplicity',
    body: 'Fewer parts and a simpler mechanism improved cost and fabrication practicality, without dropping below the durability needed for plant use.',
  },
  {
    title: 'Functionality vs cost / practicality',
    body: 'Supplier quoting showed the initial concept was too costly for a base-capital project, forcing a redesign that preserved the holding function at a justifiable cost.',
  },
  {
    title: 'Design robustness vs fabrication complexity',
    body: 'Iteration reduced part count and mechanical complexity so the concept remained workable for approval packages and contractor bidding references.',
  },
]

export function GateRestrainingCaseStudy({
  project,
  className,
}: GateRestrainingCaseStudyProps) {
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
                    {['Mechanical Design', 'Project Engineering', 'CAD'].map(
                      (item) => (
                        <Tag key={item} tone="muted">
                          {item}
                        </Tag>
                      ),
                    )}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="mt-10 grid gap-0 border border-border md:grid-cols-3">
            <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                Operational need
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Small barn gates needed a more reliable way to hold open so
                employees could work more safely and easily during cattle loading
                and unloading.
              </p>
            </div>
            <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                My role
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Owned mechanical concept development and iterative redesign,
                producing equipment layouts and part designs used for internal
                approval and contractor bidding references.
              </p>
            </div>
            <div className="p-5 md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                Project type
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-text">
                Base capital
              </p>
              <p className="mt-1 text-sm text-text-muted">
                Plant improvement constrained by cost, durability, and usability
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
                Tools
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

        <GateBeforeAfterDrawing className="mb-12 md:mb-14" />

        <div className="mx-auto max-w-4xl space-y-11 md:space-y-12">
          <section id="requirements">
            <h2 className="font-display text-2xl font-semibold text-text">
              Engineering requirements
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The restraining mechanism had to hold barn gates open securely
              during cattle loading and unloading, remain usable for operators,
              and fit base-capital budget limits plus existing plant constraints.
              Durability mattered as much as the holding function — the design
              had to survive real livestock-area use, not only look workable on
              paper.
            </p>
          </section>

          <section id="existing-condition">
            <h2 className="font-display text-2xl font-semibold text-text">
              Initial concept / existing condition
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The existing tubular barn gate provided a basic swing barrier, but
              did not include a dedicated rollout extension or restraining
              arrangement for holding the gate open more reliably during loading
              and unloading. That existing condition defined the mechanical
              starting point: improve how the gate is restrained without
              replacing the entire gate system.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Early design work began as a basic AutoCAD concept for a holding
              mechanism that could secure the gate and deploy an extension when
              needed. That first concept established the functional direction
              before cost and plant feedback forced iteration.
            </p>
          </section>

          <section id="design-feedback">
            <h2 className="font-display text-2xl font-semibold text-text">
              Design feedback
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Supplier quoting showed the initial concept was too costly to
              justify as a base-capital improvement. Cost and practicality
              feedback, along with operator and supervisor input, pushed the
              design away from a heavier first concept toward a simpler mechanism
              with lower part count — without dropping the core holding and
              sliding-extension usability goals.
            </p>
          </section>

          <section id="revised-design">
            <h2 className="font-display text-2xl font-semibold text-text">
              Revised design
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The revised design used a sliding roll-out extension mounted to the
              existing gate. A horizontal guide/roller arrangement allowed the
              extension to move laterally while keeping the base gate intact, so
              the gate could be held open more securely and operated more easily
              during cattle loading and unloading. The modified configuration
              used fewer parts, a simpler sliding mechanism, and a cost position
              appropriate for a base-capital plant project.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              AutoCAD layouts and part designs supported internal approval and
              contractor bidding references. The tool work served the mechanical
              redesign; the story remained the physical concept change from the
              original gate condition to the modified sliding-extension
              arrangement.
            </p>
          </section>

          <section id="tradeoffs">
            <h2 className="font-display text-2xl font-semibold text-text">
              Design tradeoffs
            </h2>
            <ul className="mt-5 space-y-0 border border-border">
              {tradeoffs.map((item, index) => (
                <li
                  key={item.title}
                  className="border-b border-border px-4 py-4 last:border-b-0 md:px-5"
                >
                  <div className="flex gap-3">
                    <span className="shrink-0 font-sans text-[10px] tabular-nums tracking-[0.12em] text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-text">{item.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="status">
            <h2 className="font-display text-2xl font-semibold text-text">
              Project status / progression
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Iteration produced a simplified, lower-part-count restraining
              design intended to hold gates open securely, allow operators to
              slide the extension into position when needed, and meet durability
              and usability standards at a cost appropriate for base capital
              work. Equipment layouts and part designs were prepared for internal
              approval and contractor bidding references.
            </p>
          </section>

          <section id="takeaway">
            <h2 className="font-display text-2xl font-semibold text-text">
              Engineering takeaway
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {project.lessons}
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
