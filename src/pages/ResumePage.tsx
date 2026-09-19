import { ExternalLink, FileText } from 'lucide-react'
import { siteConfig } from '@/data/site'
import { ButtonLink } from '@/components/ui/Button'

export function ResumePage() {
  const resumePath = siteConfig.contact.resumePath
  const previewPath = siteConfig.contact.resumePreviewPath

  return (
    <div className="pb-20 md:pb-28">
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-page">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Resume
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text md:text-5xl">
            Curriculum vitae
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Preview below, or download / open the full PDF.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="border border-border bg-bg-elevated p-6 md:p-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border text-accent">
                  <FileText className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-text">
                    {siteConfig.fullName} — Resume
                  </h2>
                  <p className="mt-2 text-sm text-text-muted">
                    PDF available for download and full-size viewing.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink to={resumePath} variant="primary" download>
                  Download PDF
                </ButtonLink>
                <ButtonLink to={resumePath} variant="secondary" external>
                  <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                  Open PDF
                </ButtonLink>
              </div>
            </div>

            <figure className="mt-8 overflow-hidden border border-border bg-[#f5f5f5]">
              <img
                src={previewPath}
                alt={`${siteConfig.fullName} resume preview`}
                className="mx-auto block h-auto w-full max-w-4xl object-contain object-top"
                loading="eager"
              />
              <figcaption className="border-t border-border bg-bg-subtle px-4 py-3 text-center text-xs text-text-subtle">
                Preview image — use Download or Open PDF for the original file.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}
