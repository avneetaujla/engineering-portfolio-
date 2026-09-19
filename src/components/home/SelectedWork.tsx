import { getFeaturedProjects } from '@/data/projects'
import { ButtonLink } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function SelectedWork() {
  const featured = getFeaturedProjects()

  return (
    <section className="border-b border-border py-20 md:py-28" id="work">
      <div className="container-page">
        <SectionHeader
          eyebrow="Selected Work"
          title="Engineering projects across analysis, automation, design, and product development."
          description="Professional and academic work spanning failure investigation, machine vision, mechatronics, and product design."
          action={
            <ButtonLink to="/projects" variant="secondary" size="sm">
              All projects
            </ButtonLink>
          }
        />

        <div className="grid gap-5 md:gap-6">
          {featured.map((project, index) => (
            <FadeIn key={project.id} delayMs={index * 80}>
              <ProjectCard project={project} layout="featured" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
