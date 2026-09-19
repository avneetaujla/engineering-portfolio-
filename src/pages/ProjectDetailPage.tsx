import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug, projects } from '@/data/projects'
import { GateRestrainingCaseStudy } from '@/components/case-studies/GateRestrainingCaseStudy'
import { NachiValveCaseStudy } from '@/components/case-studies/NachiValveCaseStudy'
import { ScrapDetectionCaseStudy } from '@/components/case-studies/ScrapDetectionCaseStudy'
import { SplitDetectionCaseStudy } from '@/components/case-studies/SplitDetectionCaseStudy'
import { StencilVisionCaseStudy } from '@/components/case-studies/StencilVisionCaseStudy'
import { CaseStudyLayout } from '@/components/ui/CaseStudyLayout'
import { ButtonLink } from '@/components/ui/Button'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="container-page py-24">
        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-text">
          Project not found
        </h1>
        <p className="mt-4 text-text-muted">
          The requested case study does not exist.
        </p>
        <div className="mt-8">
          <ButtonLink to="/projects" variant="secondary">
            Back to projects
          </ButtonLink>
        </div>
      </div>
    )
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  const isNachiValve = project.slug === 'nachi-valve-failure-investigation'
  const isScrapDetection = project.slug === 'scrap-detection-vision-system'
  const isSplitDetection = project.slug === 'split-detection-camera'
  const isStencilVision = project.slug === 'blank-line-stencil-vision-system'
  const isGateRestraining = project.slug === 'gate-restraining-system'

  return (
    <>
      {isNachiValve ? (
        <NachiValveCaseStudy project={project} />
      ) : isScrapDetection ? (
        <ScrapDetectionCaseStudy project={project} />
      ) : isSplitDetection ? (
        <SplitDetectionCaseStudy project={project} />
      ) : isStencilVision ? (
        <StencilVisionCaseStudy project={project} />
      ) : isGateRestraining ? (
        <GateRestrainingCaseStudy project={project} />
      ) : (
        <CaseStudyLayout project={project} />
      )}
      <nav
        className="border-t border-border"
        aria-label="Adjacent projects"
      >
        <div className="container-page grid gap-0 md:grid-cols-2">
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="border-b border-border px-0 py-8 transition-colors hover:bg-bg-elevated md:border-b-0 md:border-r md:pr-8"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-text-subtle">
                Previous
              </p>
              <p className="mt-2 font-display text-lg text-text">{prev.title}</p>
            </Link>
          ) : (
            <div className="hidden md:block" />
          )}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="px-0 py-8 text-right transition-colors hover:bg-bg-elevated md:pl-8"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.14em] text-text-subtle">
                Next
              </p>
              <p className="mt-2 font-display text-lg text-text">{next.title}</p>
            </Link>
          ) : null}
        </div>
      </nav>
    </>
  )
}
