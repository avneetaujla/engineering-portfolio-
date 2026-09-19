import { cn } from '@/lib/utils'

type AspectRatio = '16/9' | '4/3' | '1/1' | '3/2' | '3/4' | '9/16'

const aspectClass: Record<AspectRatio, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '3/4': 'aspect-[3/4]',
  '9/16': 'aspect-[9/16]',
}

type ImagePlaceholderProps = {
  title: string
  description?: string
  technicalLabel?: string
  aspectRatio?: AspectRatio
  className?: string
  src?: string | null
  alt?: string
  fit?: 'cover' | 'contain'
  objectPosition?: string
}

export function ImagePlaceholder({
  title,
  description = 'Technical visual',
  technicalLabel,
  aspectRatio = '16/9',
  className,
  src,
  alt,
  fit = 'cover',
  objectPosition = 'center',
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          'relative overflow-hidden border border-border',
          fit === 'contain' ? 'bg-[#f4f4f4]' : 'bg-bg-subtle',
          aspectClass[aspectRatio],
          className,
        )}
      >
        <img
          src={src}
          alt={alt ?? title}
          loading="lazy"
          className={cn(
            'h-full w-full',
            fit === 'contain' ? 'object-contain' : 'object-cover',
          )}
          style={{ objectPosition }}
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden border border-border bg-bg-subtle',
        aspectClass[aspectRatio],
        className,
      )}
      role="img"
      aria-label={alt ?? `${title} — ${description}`}
    >
      <div className="technical-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-bg-subtle)_70%)]"
        aria-hidden="true"
      />

      <div className="absolute left-3 top-3 flex items-center gap-2 md:left-4 md:top-4">
        <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-text-subtle">
          Diagram
        </span>
      </div>

      {technicalLabel ? (
        <div className="absolute right-3 top-3 border border-border bg-bg/70 px-2 py-1 backdrop-blur-[2px] md:right-4 md:top-4">
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
            {technicalLabel}
          </span>
        </div>
      ) : null}

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="font-display text-sm font-medium tracking-wide text-text md:text-base">
          {title}
        </p>
        <p className="mt-2 max-w-xs font-sans text-[11px] uppercase tracking-[0.16em] text-text-subtle">
          {description}
        </p>
      </div>

      <div className="absolute bottom-3 left-3 font-sans text-[10px] uppercase tracking-[0.14em] text-text-subtle md:bottom-4 md:left-4">
        Visual reference
      </div>
      <div
        className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-border-strong md:bottom-4 md:right-4"
        aria-hidden="true"
      />
    </div>
  )
}
