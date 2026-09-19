import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { getPublicMedia } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { ButtonLink } from '@/components/ui/Button'
import { EngineeringFlowDiagram } from '@/components/ui/EngineeringFlowDiagram'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { MetricBlock } from '@/components/ui/MetricBlock'
import { ProjectVideo } from '@/components/ui/ProjectVideo'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

type CaseStudySection = {
  id: string
  title: string
  body: string
}

type CaseStudyLayoutProps = {
  project: Project
  className?: string
}

function isEmptyPending(text: string) {
  return text.toLowerCase().includes('content pending')
}

function firstSentences(text: string, count: number) {
  const parts = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
  return parts.slice(0, count).join(' ')
}

export function CaseStudyLayout({ project, className }: CaseStudyLayoutProps) {
  const publicMedia = getPublicMedia(project)
  const hero = publicMedia[0]
  const supportingMedia = publicMedia.slice(1)
  const videos = publicMedia.filter((m) => m.kind === 'video')
  const supportingImages = supportingMedia.filter((m) => m.kind !== 'video')
  const verifiedMetrics = project.metrics.filter((m) => !m.isPlaceholder)

  const problemBrief = firstSentences(project.problem, 2)
  const roleBrief = firstSentences(project.contribution, 3)

  const sections: CaseStudySection[] = [
    { id: 'problem', title: 'Problem', body: project.problem },
    {
      id: 'challenge',
      title: 'Engineering Challenge',
      body: project.engineeringChallenge,
    },
    { id: 'approach', title: 'Investigation / Approach', body: project.approach },
    { id: 'contribution', title: 'Contribution', body: project.contribution },
    { id: 'solution', title: 'Solution', body: project.solution },
    { id: 'results', title: 'Results', body: project.results },
    { id: 'lessons', title: 'Engineering Takeaways', body: project.lessons },
  ].filter((section) => {
    if (isEmptyPending(section.body)) return false
    // Avoid re-reading the same short copy already shown in the engineering summary.
    if (section.id === 'problem' && section.body.trim() === problemBrief.trim()) {
      return false
    }
    if (
      section.id === 'contribution' &&
      section.body.trim() === roleBrief.trim()
    ) {
      return false
    }
    return true
  })

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
                <p className="mt-2 max-w-2xl text-base text-text-muted md:text-lg">
                  {project.subtitle}
                </p>
              ) : null}
              {project.disciplineLabel ? (
                <p className="mt-3 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  {project.disciplineLabel}
                </p>
              ) : null}
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
                    Tools
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Tag key={tool} tone="muted">
                        {tool}
                      </Tag>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </header>

      <div className="container-page mt-10 md:mt-14">
        {/* Recruiter scan summary */}
        <section className="mb-10 border border-border bg-bg-elevated md:mb-14">
          <div className="border-b border-border px-5 py-3 md:px-6">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-text-subtle">
              Engineering summary
            </p>
          </div>
          <div className="grid gap-0 divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="space-y-6 p-5 md:p-6">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
                  {problemBrief}
                </p>
              </div>
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  My role
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
                  {roleBrief}
                </p>
              </div>
            </div>
            <div className="space-y-6 p-5 md:p-6">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {project.summaryMetricLabel ?? 'Impact / result'}
                </p>
                {verifiedMetrics.length > 0 ? (
                  <ul className="mt-3 space-y-3">
                    {verifiedMetrics.map((metric) => (
                      <li key={metric.label}>
                        <p className="font-display text-xl font-semibold text-text">
                          {metric.value}
                        </p>
                        <p className="mt-0.5 text-sm text-text-muted">
                          {metric.label}
                          {metric.note ? ` — ${metric.note}` : ''}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
                    {firstSentences(project.results, 2)}
                  </p>
                )}
              </div>
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Methods
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.engineeringMethods.map((method) => (
                    <Tag key={method}>{method}</Tag>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  Tools
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Tag key={tool} tone="muted">
                      {tool}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {hero ? (
          hero.kind === 'video' ? (
            <ProjectVideo
              src={hero.src!}
              title={hero.title}
              technicalLabel={hero.technicalLabel}
              aspectRatio={hero.aspectRatio ?? '16/9'}
              className="mb-10 md:mb-14"
            />
          ) : (
            <ImagePlaceholder
              title={hero.title}
              description={hero.description}
              technicalLabel={hero.technicalLabel}
              aspectRatio={hero.aspectRatio}
              src={hero.src}
              alt={hero.alt}
              fit={hero.kind === 'photograph' ? 'cover' : 'contain'}
              objectPosition={hero.objectPosition}
              className="mb-10 md:mb-14"
            />
          )
        ) : project.sanitizedFlow && project.sanitizedFlow.length > 0 ? (
          <EngineeringFlowDiagram
            title={project.flowTitle ?? 'Engineering flow'}
            steps={project.sanitizedFlow}
            className="mb-10 md:mb-14"
          />
        ) : null}

        <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <div className="space-y-12 md:space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="font-display text-2xl font-semibold text-text">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
                  {section.body}
                </p>
              </section>
            ))}

            {videos.length > 0 && hero?.kind !== 'video' ? (
              <section>
                <SectionHeader
                  eyebrow="Video"
                  title="Footage"
                  description="Competition or operating footage for this project."
                />
                <div className="space-y-8">
                  {videos.map((asset) => (
                    <div key={asset.id} className="space-y-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-text">
                          {asset.title}
                        </h3>
                        {asset.description ? (
                          <p className="mt-1 text-sm text-text-muted">
                            {asset.description}
                          </p>
                        ) : null}
                      </div>
                      <ProjectVideo
                        src={asset.src!}
                        title={asset.title}
                        technicalLabel={asset.technicalLabel}
                        aspectRatio={asset.aspectRatio ?? '16/9'}
                      />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {supportingImages.length > 0 ? (
              <section>
                <SectionHeader
                  eyebrow="Visuals"
                  title="Supporting Assets"
                  description="Approved diagrams, CAD, charts, and photographs."
                />
                <div
                  className={cn(
                    'grid gap-6',
                    supportingImages.length === 1
                      ? 'max-w-2xl'
                      : 'md:grid-cols-2',
                  )}
                >
                  {supportingImages.map((asset) => {
                    const isPhoto =
                      asset.kind === 'photograph' || asset.kind === 'video'
                    return (
                      <div key={asset.id} className="space-y-3">
                        <div>
                          <h3 className="font-display text-lg font-semibold text-text">
                            {asset.title}
                          </h3>
                          {asset.description ? (
                            <p className="mt-1 text-sm text-text-muted">
                              {asset.description}
                            </p>
                          ) : null}
                        </div>
                        <ImagePlaceholder
                          title={asset.title}
                          description={asset.description}
                          technicalLabel={asset.technicalLabel}
                          aspectRatio={asset.aspectRatio ?? '4/3'}
                          src={asset.src}
                          alt={asset.alt}
                          fit={isPhoto ? 'cover' : 'contain'}
                          objectPosition={asset.objectPosition}
                        />
                      </div>
                    )
                  })}
                </div>
              </section>
            ) : null}

            {project.requiresSanitization ? (
              <p className="max-w-3xl border-t border-border pt-6 font-sans text-[11px] leading-relaxed tracking-[0.04em] text-text-subtle">
                {siteConfig.confidentiality.notice}
              </p>
            ) : null}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            {verifiedMetrics.length > 0 ? (
              <>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                  Metrics
                </p>
                {verifiedMetrics.map((metric) => (
                  <MetricBlock
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    note={metric.note}
                  />
                ))}
              </>
            ) : null}

            {project.resources && project.resources.length > 0 ? (
              <div className="border border-border bg-bg-elevated p-5">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                  Resources
                </p>
                <ul className="mt-4 space-y-3">
                  {project.resources.map((resource) => (
                    <li key={resource.href}>
                      <ButtonLink
                        to={resource.href}
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        external
                      >
                        {resource.label}
                      </ButtonLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </article>
  )
}
