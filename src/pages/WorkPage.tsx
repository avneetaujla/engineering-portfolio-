import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { siteConfig } from '@/data/site'

export function WorkPage() {
  const industry = projects.filter((p) => p.category.startsWith('Industry'))
  const university = projects.filter((p) => p.category.startsWith('University'))

  return (
    <div className="pb-20 md:pb-28">
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-page">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Work
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            Engineering work across industry and design.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Industrial case studies from Toyota Motor Manufacturing Canada and Cargill are presented in sanitized form.
            {` ${siteConfig.confidentiality.notice}`}
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Industry"
            title="Manufacturing & plant projects"
            description="Press shop and plant project engineering."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {industry.map((project, index) => (
              <FadeIn key={project.id} delayMs={index * 50}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="University"
            title="Design coursework"
            description="Mechanical system and product design projects."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {university.map((project, index) => (
              <FadeIn key={project.id} delayMs={index * 50}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
