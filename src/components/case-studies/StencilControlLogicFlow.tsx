import { cn } from '@/lib/utils'

type StencilControlLogicFlowProps = {
  className?: string
}

const steps = [
  {
    n: '01',
    phase: 'Input',
    label: 'Part number available',
  },
  {
    n: '02',
    phase: 'Control',
    label: 'PLC program-selection logic',
  },
  {
    n: '03',
    phase: 'Decision',
    label: 'Manufacturer-specific vision program selected',
  },
  {
    n: '04',
    phase: 'Inspect',
    label: 'Stencil inspection',
  },
  {
    n: '05',
    phase: 'Output',
    label: 'Pass / scrap decision',
  },
] as const

function Connector({ orientation }: { orientation: 'horizontal' | 'vertical' }) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center text-accent',
        orientation === 'horizontal' ? 'w-3 self-center sm:w-4 md:w-3 lg:w-4' : 'h-5',
      )}
      aria-hidden="true"
    >
      <span className="font-sans text-xs leading-none">
        {orientation === 'horizontal' ? '→' : '↓'}
      </span>
    </div>
  )
}

function Node({
  n,
  phase,
  label,
}: {
  n: string
  phase: string
  label: string
}) {
  return (
    <div className="relative min-w-0 flex-1 border border-border bg-bg-subtle px-2 py-2.5 md:px-2 lg:px-3">
      <span
        className="pointer-events-none absolute left-1.5 top-1.5 h-1.5 w-1.5 border-l border-t border-accent/45"
        aria-hidden="true"
      />
      <p className="font-sans text-[9px] font-medium uppercase tracking-[0.12em] text-accent">
        {n} · {phase}
      </p>
      <p className="mt-1 font-display text-[12px] font-medium leading-snug text-text md:text-[13px] lg:text-sm">
        {label}
      </p>
    </div>
  )
}

/** Part-number → PLC → manufacturer-specific vision program selection flow. */
export function StencilControlLogicFlow({
  className,
}: StencilControlLogicFlowProps) {
  return (
    <figure
      className={cn('border border-border bg-bg-elevated', className)}
      aria-label="Stencil vision control logic flow"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
          <figcaption className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-text-subtle">
            Control logic flow
          </figcaption>
        </div>
      </div>

      <div className="p-4 md:p-5">
        {/* Mobile: vertical 01→05 */}
        <div className="flex flex-col md:hidden">
          {steps.map((step, index) => (
            <div key={step.n} className="flex flex-col">
              <Node n={step.n} phase={step.phase} label={step.label} />
              {index < steps.length - 1 ? (
                <Connector orientation="vertical" />
              ) : null}
            </div>
          ))}
        </div>

        {/* md+: single continuous horizontal flow — no wrap bypass */}
        <div className="hidden md:flex md:items-stretch">
          {steps.map((step, index) => (
            <div key={step.n} className="flex min-w-0 flex-1 items-stretch">
              <Node n={step.n} phase={step.phase} label={step.label} />
              {index < steps.length - 1 ? (
                <Connector orientation="horizontal" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </figure>
  )
}
