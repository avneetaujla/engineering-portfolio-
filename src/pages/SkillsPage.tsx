import { skillCategories } from '@/data/skills'
import { FadeIn } from '@/components/ui/FadeIn'
import { Tag } from '@/components/ui/Tag'

export function SkillsPage() {
  return (
    <div className="pb-20 md:pb-28">
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-page">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Skills
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            Technical skills by domain.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Tools used across mechanical design, analysis, automation, industrial systems,
            and software-based engineering work.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page space-y-6 md:space-y-8">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.id} delayMs={index * 60}>
              <article className="border border-border bg-bg-elevated p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-10">
                  <div>
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-semibold text-text">
                      {category.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2">
                    {category.skills.map((skill) => (
                      <Tag key={skill} className="px-3 py-1.5 text-[12px]">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}
