import { skillCategories } from '@/data/skills'
import { ButtonLink } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'

export function SkillsPreview() {
  return (
    <section className="border-b border-border py-20 md:py-28" id="skills">
      <div className="container-page">
        <SectionHeader
          eyebrow="Skills"
          title="Technical toolkit."
          description="Tools used across mechanical design, analysis, automation, industrial systems, and software-based engineering work."
          action={
            <ButtonLink to="/skills" variant="secondary" size="sm">
              Complete skills
            </ButtonLink>
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.id} delayMs={index * 60}>
              <div className="h-full border border-border bg-bg-elevated p-5 md:p-6">
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-text">
                  {category.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.slice(0, 5).map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                  {category.skills.length > 5 ? (
                    <Tag tone="muted">+{category.skills.length - 5}</Tag>
                  ) : null}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
