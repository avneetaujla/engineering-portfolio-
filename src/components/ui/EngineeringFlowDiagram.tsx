import { cn } from '@/lib/utils'

export type FlowStep = {
  label: string
  detail?: string
  phase?: string
}

type EngineeringFlowDiagramProps = {
  title?: string
  technicalLabel?: string
  steps: Array<string | FlowStep>
  className?: string
}

function normalizeSteps(steps: Array<string | FlowStep>): FlowStep[] {
  return steps.map((step) =>
    typeof step === 'string' ? { label: step } : step,
  )
}

/** Sanitized engineering flow — horizontal on md+, stacked on mobile. */
export function EngineeringFlowDiagram({
  title = 'Engineering Flow',
  technicalLabel,
  steps,
  className,
}: EngineeringFlowDiagramProps) {
  const normalized = normalizeSteps(steps)
  if (normalized.length === 0) return null

  return (
    <figure
      className={cn('border border-border bg-bg-elevated', className)}
      aria-label={title}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
          <figcaption className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-text-subtle">
            {title}
          </figcaption>
        </div>
        {technicalLabel ? (
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
            {technicalLabel}
          </p>
        ) : null}
      </div>

      <ol className="flex flex-col gap-0 p-4 md:flex-row md:flex-wrap md:items-stretch md:gap-0 md:p-5">
        {normalized.map((step, index) => (
          <li
            key={`${index}-${step.label}`}
            className="flex min-w-0 flex-col md:flex-1 md:flex-row md:items-stretch"
          >
            <div className="flex min-h-[4.75rem] min-w-0 flex-1 flex-col border border-border bg-bg-subtle px-3 py-3 md:min-h-[5.5rem] md:px-4">
              <span className="font-sans text-[10px] font-medium tabular-nums tracking-[0.14em] text-accent">
                {String(index + 1).padStart(2, '0')}
                {step.phase ? (
                  <span className="ml-2 text-text-subtle">/ {step.phase}</span>
                ) : null}
              </span>
              <span className="mt-2 font-display text-sm font-medium tracking-wide text-text">
                {step.label}
              </span>
              {step.detail ? (
                <span className="mt-1 text-xs leading-relaxed text-text-muted">
                  {step.detail}
                </span>
              ) : null}
            </div>

            {index < normalized.length - 1 ? (
              <div
                className="flex h-6 shrink-0 items-center justify-center text-accent md:h-auto md:w-7 md:self-center"
                aria-hidden="true"
              >
                <span className="font-sans text-sm md:hidden">↓</span>
                <span className="hidden font-sans text-sm md:inline">→</span>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  )
}
