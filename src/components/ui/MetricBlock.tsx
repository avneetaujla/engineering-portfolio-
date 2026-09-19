import { cn } from '@/lib/utils'

type MetricBlockProps = {
  label: string
  value: string
  note?: string
  isPlaceholder?: boolean
  className?: string
}

export function MetricBlock({
  label,
  value,
  note,
  isPlaceholder = false,
  className,
}: MetricBlockProps) {
  return (
    <div
      className={cn(
        'border border-border bg-bg-elevated px-5 py-4',
        className,
      )}
    >
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-text-subtle">
        {label}
      </p>
      <p
        className={cn(
          'mt-2 font-display text-2xl font-semibold tracking-tight',
          isPlaceholder ? 'text-text-muted' : 'text-text',
        )}
      >
        {value}
      </p>
      {note ? (
        <p className="mt-2 text-sm text-text-muted">{note}</p>
      ) : null}
      {isPlaceholder ? (
        <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-text-subtle">
          Metric pending verification
        </p>
      ) : null}
    </div>
  )
}
