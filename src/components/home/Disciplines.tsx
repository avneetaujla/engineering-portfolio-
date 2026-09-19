import { disciplines } from '@/data/disciplines'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Disciplines() {
  return (
    <section className="border-b border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Engineering Disciplines"
          title="Where the work sits."
          description="A concise map of the technical domains that define this portfolio."
        />

        <div className="border-y border-border">
          {disciplines.map((discipline, index) => (
            <FadeIn key={discipline.id} delayMs={index * 40}>
              <div className="group grid gap-3 border-b border-border py-6 last:border-b-0 md:grid-cols-[5rem_16rem_1fr] md:items-baseline md:gap-8 md:py-7">
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                  {discipline.index}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-text transition-colors group-hover:text-accent md:text-2xl">
                  {discipline.label}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-text-muted md:text-base">
                  {discipline.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
