import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ExperienceItem } from '@/data/experience'
import { Tag } from '@/components/ui/Tag'
import { cn } from '@/lib/utils'

type ExperienceCardProps = {
  experience: ExperienceItem
  className?: string
  compact?: boolean
}

export function ExperienceCard({
  experience,
  className,
  compact = false,
}: ExperienceCardProps) {
  return (
    <article
      className={cn(
        'border border-border bg-bg-elevated transition-colors duration-300 hover:border-border-strong',
        className,
      )}
    >
      <Link
        to={`/experience#${experience.id}`}
        className="block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent md:p-7"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3 sm:gap-4">
            {experience.logoSrc ? (
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center md:h-11 md:w-11">
                <img
                  src={experience.logoSrc}
                  alt={experience.logoAlt ?? ''}
                  className="max-h-10 max-w-10 object-contain md:max-h-11 md:max-w-11"
                />
              </span>
            ) : null}
            <div className="min-w-0">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {experience.durationLabel}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-text md:text-2xl">
                {experience.company}
              </h3>
              <p className="mt-1 whitespace-nowrap text-sm text-text-muted md:text-base">
                {experience.role}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-text-subtle">
            Case studies
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        </div>

        {!compact ? (
          <>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base">
              {experience.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.focusAreas.map((area) => (
                <Tag key={area}>{area}</Tag>
              ))}
            </div>
          </>
        ) : null}
      </Link>
    </article>
  )
}
