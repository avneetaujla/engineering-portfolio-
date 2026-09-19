import { homepageCapabilities } from '@/data/capabilities'
import { ButtonLink } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Tag } from '@/components/ui/Tag'

export function Capabilities() {
  return (
    <section className="border-b border-border py-20 md:py-28" id="skills">
      <div className="container-page">
        <SectionHeader
          eyebrow="Technical Capabilities"
          title="Where the work sits."
          description="Engineering domains spanning design, analysis, automation, systems, product development, and implementation."
          action={
            <ButtonLink to="/skills" variant="secondary" size="sm">
              Full skills
            </ButtonLink>
          }
        />

        <div className="border-y border-border">
          {homepageCapabilities.map((capability, index) => (
            <FadeIn key={capability.id} delayMs={index * 40}>
              <div className="group grid gap-3 border-b border-border py-6 last:border-b-0 md:grid-cols-[5rem_14rem_1fr_auto] md:items-baseline md:gap-8 md:py-7">
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                  {capability.index}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent md:text-2xl">
                  {capability.label}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-text-muted md:text-base">
                  {capability.description}
                </p>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {capability.tools.slice(0, 3).map((tool) => (
                    <Tag key={tool} tone="muted">
                      {tool}
                    </Tag>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
