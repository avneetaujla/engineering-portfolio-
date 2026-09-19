import { useMemo, useState } from 'react'
import { projects, type ProjectCategory } from '@/data/projects'
import { FadeIn } from '@/components/ui/FadeIn'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { cn } from '@/lib/utils'

const filters: Array<{ label: string; value: 'all' | ProjectCategory }> = [
  { label: 'All', value: 'all' },
  {
    label: 'TMMC',
    value: 'Industry — Toyota Motor Manufacturing Canada',
  },
  { label: 'Cargill', value: 'Industry — Cargill' },
  { label: 'University', value: 'University — Design' },
]

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]['value']>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <div className="pb-20 md:pb-28">
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-page">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Projects
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            All projects.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Automotive manufacturing, plant engineering, and university design coursework.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                role="tab"
                aria-selected={filter === item.value}
                onClick={() => setFilter(item.value)}
                className={cn(
                  'border px-3 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.14em] transition-colors',
                  filter === item.value
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border text-text-muted hover:border-border-strong hover:text-text',
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((project, index) => (
              <FadeIn key={project.id} delayMs={index * 40}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
