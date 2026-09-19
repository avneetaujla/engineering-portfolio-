import { cn } from '@/lib/utils'

type TagProps = {
  children: React.ReactNode
  className?: string
  tone?: 'default' | 'accent' | 'muted'
}

export function Tag({ children, className, tone = 'default' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border px-2.5 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.12em]',
        tone === 'default' && 'border-border text-text-muted',
        tone === 'accent' && 'border-accent/40 text-accent bg-accent-soft',
        tone === 'muted' && 'border-border/60 text-text-subtle',
        className,
      )}
    >
      {children}
    </span>
  )
}
