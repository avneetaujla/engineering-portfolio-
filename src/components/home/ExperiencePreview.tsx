import { experiences } from '@/data/experience'
import { ButtonLink } from '@/components/ui/Button'
import { ExperienceCard } from '@/components/ui/ExperienceCard'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function ExperiencePreview() {
  return (
    <section className="border-b border-border py-20 md:py-28" id="experience">
      <div className="container-page">
        <SectionHeader
          eyebrow="Experience"
          title="Engineering experience across automotive manufacturing and plant projects."
          description={
            'Professional engineering work at Toyota Motor Manufacturing Canada and Cargill.'
          }
          action={
            <ButtonLink to="/experience" variant="secondary" size="sm">
              Full experience
            </ButtonLink>
          }
        />

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {experiences.map((item, index) => (
            <FadeIn key={item.id} delayMs={index * 90}>
              <ExperienceCard experience={item} compact />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
