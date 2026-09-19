import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { VisionDevelopmentPipeline } from '@/components/case-studies/VisionDevelopmentPipeline'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

type ScrapDetectionCaseStudyProps = {
  project: Project
  className?: string
}

const methods = [
  'Machine vision',
  'Machine learning',
  'Image-data development',
  'Testing / iteration',
  'System integration',
]

const tools = ['VIKS Camera', 'Raspberry Pi', 'Machine Learning']

export function ScrapDetectionCaseStudy({
  project,
  className,
}: ScrapDetectionCaseStudyProps) {
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
                      'Machine Vision',
                      'Automation',
                      'Machine Learning',
                      'Dataset Development',
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
                Identify abnormal scrap accumulation in the scrap-flow path early
                enough to intervene before die or part damage.
              </p>
            </div>
            <div className="border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                My role
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Developed the scrap build-up vision application — image
                collection strategy, machine-learning training, and testing under
                changing operating conditions.
              </p>
            </div>
            <div className="p-5 md:p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                Dataset scale
              </p>
              <p className="mt-2 font-display text-2xl font-semibold text-text">
                ~500
              </p>
              <p className="mt-1 text-sm text-text-muted">Training images</p>
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

        <VisionDevelopmentPipeline className="mb-12 md:mb-14" />

        <div className="mx-auto max-w-4xl space-y-11 md:space-y-12">
          <section id="engineering-challenge">
            <h2 className="font-display text-2xl font-semibold text-text">
              Engineering challenge
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              A fixed visual rule was insufficient: scrap-flow scenes were not
              visually identical from cycle to cycle, so the system had to
              classify the accumulation condition across real operating
              variation.
            </p>
          </section>

          <section id="system-development">
            <h2 className="font-display text-2xl font-semibold text-text">
              System development
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Approximately 500 production images were collected to provide
              representative examples of the scrap-flow conditions the system
              needed to classify. The VIKS camera and Raspberry Pi formed the
              core vision platform; Avneet developed the scrap build-up vision
              application — image collection strategy, machine-learning model
              development, and testing under changing operating conditions.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                'Camera / system setup',
                'Image collection & dataset development',
                'Machine-learning development',
                'System testing',
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

          <section id="testing-iteration">
            <h2 className="font-display text-2xl font-semibold text-text">
              Testing &amp; iteration
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              When classification was inconsistent, the work returned to imaging
              conditions and training coverage — not only model settings —
              because the model only sees what the image contains.
            </p>
            <ol className="mt-5 flex flex-col gap-0 border border-border md:flex-row md:divide-x md:divide-border">
              {[
                'Test system',
                'Observe inconsistency',
                'Review image coverage',
                'Improve training examples',
                'Retest',
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-2 border-b border-border px-3 py-3 last:border-b-0 md:flex-1 md:flex-col md:items-start md:border-b-0 md:px-4"
                >
                  <span className="font-sans text-[10px] tabular-nums tracking-[0.12em] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section id="implementation">
            <h2 className="font-display text-2xl font-semibold text-text">
              Implementation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              The completed system monitors the scrap-flow region, acquires
              visual data, and classifies the condition as acceptable or
              abnormal so intervention can occur before build-up becomes severe.
            </p>
          </section>

          <section id="takeaway">
            <h2 className="font-display text-2xl font-semibold text-text">
              Engineering takeaway
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              One of the biggest lessons from this project was that the
              machine-learning model was only as useful as the image data feeding
              it. Building reliable classification meant paying as much attention
              to the physical imaging conditions and training coverage as to the
              model itself.
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
