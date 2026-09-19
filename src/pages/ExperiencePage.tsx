import { Link } from 'react-router-dom'
import { experiences } from '@/data/experience'
import { getProjectBySlug } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { FadeIn } from '@/components/ui/FadeIn'
import { Tag } from '@/components/ui/Tag'
import { Timeline } from '@/components/ui/Timeline'

export function ExperiencePage() {
  return (
    <div className="pb-20 md:pb-28">
      <section className="border-b border-border py-12 md:py-14">
        <div className="container-page">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            Engineering Experience
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Professional experience applying mechanical engineering, automation, analysis,
            and project execution in real production environments.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="container-page">
          <Timeline
            items={experiences.map((exp) => ({
              id: exp.id,
              title: exp.company,
              subtitle: exp.role,
              meta: exp.durationLabel,
              description: exp.summary,
              logoSrc: exp.logoSrc,
              logoAlt: exp.logoAlt,
              content: (
                <FadeIn>
                  <div id={exp.id} className="scroll-mt-28 space-y-5">
                    <div className="flex flex-wrap gap-2">
                      {exp.focusAreas.map((area) => (
                        <Tag key={area}>{area}</Tag>
                      ))}
                    </div>

                    {exp.requiresSanitization ? (
                      <p className="max-w-2xl pt-1 font-sans text-[11px] leading-relaxed text-text-subtle">
                        {siteConfig.confidentiality.notice}
                      </p>
                    ) : null}

                    <div>
                      <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-text-subtle">
                        Related case studies
                      </p>
                      <ul className="space-y-2">
                        {exp.relatedProjectSlugs.map((slug) => {
                          const project = getProjectBySlug(slug)
                          if (!project) return null
                          return (
                            <li key={slug}>
                              <Link
                                to={`/projects/${slug}`}
                                className="group inline-flex items-baseline gap-3 text-sm text-text-muted transition-colors hover:text-accent"
                              >
                                <span className="font-sans text-[11px] tracking-[0.12em] text-accent">
                                  {project.number}
                                </span>
                                <span className="group-hover:underline underline-offset-4">
                                  {project.title}
                                </span>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ),
            }))}
          />
        </div>
      </section>
    </div>
  )
}
