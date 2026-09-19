import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: Project
  className?: string
  layout?: 'featured' | 'grid'
}

export function ProjectCard({
  project,
  className,
  layout = 'grid',
}: ProjectCardProps) {
  const hero = project.media.find((m) => m.src && !m.confidential) ?? null
  const fit =
    hero?.kind === 'diagram' ||
    hero?.kind === 'illustration' ||
    hero?.kind === 'cad' ||
    hero?.kind === 'chart'
      ? 'contain'
      : 'cover'

  return (
    <article
      className={cn(
        'group border border-border bg-bg-elevated transition-colors duration-300 hover:border-border-strong',
        className,
      )}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
      >
        {hero?.src ? (
          <div className="overflow-hidden">
            <div className="transition-transform duration-500 ease-out group-hover:scale-[1.015]">
              <ImagePlaceholder
                title={project.title}
                technicalLabel={hero.technicalLabel}
                aspectRatio={layout === 'featured' ? '16/9' : '16/9'}
                src={hero.src}
                alt={hero.alt}
                fit={fit}
                objectPosition={hero.objectPosition}
              />
            </div>
          </div>
        ) : null}

        <div
          className={cn(
            'p-5 md:p-6',
            hero?.src ? 'border-t border-border' : undefined,
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                  {project.number}
                </span>
                <span className="text-text-subtle">/</span>
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-text-subtle">
                  {project.category}
                </span>
                {project.cardMetric ? (
                  <span className="font-sans text-[11px] font-medium tracking-[0.04em] text-accent">
                    {project.cardMetric.value}
                    <span className="ml-1.5 font-normal uppercase tracking-[0.12em] text-text-subtle">
                      {project.cardMetric.label}
                    </span>
                  </span>
                ) : null}
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-text md:text-2xl">
                {project.title}
              </h3>
              {project.disciplineLabel ? (
                <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  {project.disciplineLabel}
                </p>
              ) : null}
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
                {project.summary}
              </p>
            </div>
            <span
              className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-border text-text-muted transition-colors duration-300 group-hover:border-accent group-hover:text-accent"
              aria-hidden="true"
            >
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.slice(0, 4).map((tool) => (
              <Tag key={tool} tone="muted">
                {tool}
              </Tag>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}
