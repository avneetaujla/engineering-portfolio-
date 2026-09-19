import { cn } from '@/lib/utils'

type TimelineItem = {
  id: string
  title: string
  subtitle?: string
  meta?: string
  description?: string
  content?: React.ReactNode
  logoSrc?: string
  logoAlt?: string
}

type TimelineProps = {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn('relative space-y-0', className)}>
      {items.map((item, index) => (
        <li key={item.id} className="relative grid gap-4 border-t border-border py-8 md:grid-cols-[10rem_1fr] md:gap-10">
          <div className="md:pt-1">
            {item.meta ? (
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {item.meta}
              </p>
            ) : (
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-text-subtle">
                {String(index + 1).padStart(2, '0')}
              </p>
            )}
          </div>
          <div>
            <div className="flex items-start gap-4">
              {item.logoSrc ? (
                <img
                  src={item.logoSrc}
                  alt={item.logoAlt ?? ''}
                  className="h-14 w-auto shrink-0 object-contain md:h-16"
                />
              ) : null}
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold text-text md:text-2xl">
                  {item.title}
                </h3>
                {item.subtitle ? (
                  <p className="mt-1 text-sm text-text-muted">{item.subtitle}</p>
                ) : null}
              </div>
            </div>
            {item.description ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
                {item.description}
              </p>
            ) : null}
            {item.content ? <div className="mt-5">{item.content}</div> : null}
          </div>
        </li>
      ))}
      <div className="border-t border-border" aria-hidden="true" />
    </ol>
  )
}
