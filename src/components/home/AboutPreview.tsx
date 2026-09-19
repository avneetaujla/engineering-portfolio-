import { siteConfig } from '@/data/site'
import { ButtonLink } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function AboutPreview() {
  return (
    <section className="border-b border-border py-20 md:py-28" id="about">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeader
            eyebrow="About"
            title={`${siteConfig.fullName}`}
            className="mb-0"
          />

          <FadeIn>
            <div className="space-y-6 border border-border bg-bg-elevated p-6 md:p-8">
              <p className="text-base leading-relaxed text-text-muted md:text-lg">
                Fourth-year Mechanical Engineering student at the University of Guelph
                whose work spans mechanical design, analysis, automation, systems
                integration, and implementation — with professional experience at Toyota
                Motor Manufacturing Canada and Cargill.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink to="/about" variant="secondary" size="sm">
                  About page
                </ButtonLink>
                <ButtonLink to="/experience" variant="ghost" size="sm">
                  Experience detail
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
