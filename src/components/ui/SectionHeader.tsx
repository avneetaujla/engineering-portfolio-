import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  action?: React.ReactNode
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-6',
          align === 'left' && 'md:flex-row md:items-end md:justify-between',
        )}
      >
        <div className={cn(align === 'center' && 'mx-auto max-w-2xl')}>
          {eyebrow ? (
            <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                'mt-4 max-w-2xl text-base leading-relaxed text-text-muted',
                align === 'center' && 'mx-auto',
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </div>
  )
}
