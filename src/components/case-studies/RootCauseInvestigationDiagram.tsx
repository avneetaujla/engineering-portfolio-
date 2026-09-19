import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CauseStatus = 'investigated' | 'supported' | 'behavior'

type InvestigatedCause = {
  label: string
  status: CauseStatus
}

type RootCauseInvestigationDiagramProps = {
  className?: string
}

const investigatedCauses: InvestigatedCause[] = [
  { label: 'Contamination', status: 'supported' },
  { label: 'Lubrication degradation', status: 'supported' },
  { label: 'Filtration fibre', status: 'supported' },
  { label: 'Pilot-spool behavior', status: 'behavior' },
]

function StatusChip({ status }: { status: CauseStatus }) {
  const label =
    status === 'supported'
      ? 'Supported by evidence'
      : status === 'behavior'
        ? 'System behavior'
        : 'Investigated'

  return (
    <span
      className={cn(
        'font-sans text-[9px] font-medium uppercase tracking-[0.14em]',
        status === 'supported' ? 'text-accent' : 'text-text-subtle',
      )}
    >
      {label}
    </span>
  )
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex h-5 items-center justify-center text-accent', className)}
      aria-hidden="true"
    >
      <span className="font-sans text-xs leading-none">↓</span>
    </div>
  )
}

function Node({
  phase,
  title,
  accent,
  children,
}: {
  phase: string
  title: string
  accent?: boolean
  children?: ReactNode
}) {
  return (
    <div
      className={cn(
        'w-full border bg-bg-subtle px-4 py-3',
        accent ? 'border-accent/40' : 'border-border',
      )}
    >
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
        {phase}
      </p>
      <p className="mt-1.5 font-display text-sm font-medium text-text">{title}</p>
      {children}
    </div>
  )
}

/** Concise root-cause workflow — branched on md+, stacked on mobile. */
export function RootCauseInvestigationDiagram({
  className,
}: RootCauseInvestigationDiagramProps) {
  return (
    <figure
      className={cn('border border-border bg-bg-elevated', className)}
      aria-label="Root-cause investigation workflow"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
          <figcaption className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-text-subtle">
            Root-cause investigation
          </figcaption>
        </div>
      </div>

      <div className="p-4 md:p-6">
        {/* Mobile */}
        <div className="flex flex-col items-stretch md:hidden">
          <Node
            phase="Observed failure"
            title="Recurring pneumatic valve malfunction"
            accent
          />
          <FlowArrow />
          <Node
            phase="System review"
            title="Transfer sequence + valve operation mapped"
          />
          <FlowArrow />
          <div className="border border-border bg-bg px-4 py-3">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
              Potential causes
            </p>
            <ul className="mt-3 space-y-2">
              {investigatedCauses.map((cause) => (
                <li
                  key={cause.label}
                  className="flex items-center justify-between gap-3 border border-border bg-bg-subtle px-3 py-2"
                >
                  <p className="font-display text-sm font-medium text-text">
                    {cause.label}
                  </p>
                  <StatusChip status={cause.status} />
                </li>
              ))}
            </ul>
          </div>
          <FlowArrow />
          <Node
            phase="Findings"
            title="Lubrication washout + filtration fibre as contributing factors"
            accent
          />
          <FlowArrow />
          <Node
            phase="Countermeasures"
            title="Pilot-line filter · upstream filtration change-out · lubricator"
          />
          <FlowArrow />
          <Node
            phase="Verification"
            title="Pilot-circuit cleanliness + lubrication condition checked"
          />
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <div className="mx-auto max-w-3xl">
            <Node
              phase="Observed failure"
              title="Recurring pneumatic valve malfunction"
              accent
            />
            <FlowArrow />
            <Node
              phase="System review"
              title="Transfer sequence + valve operation mapped"
            />
            <FlowArrow />

            <div className="border border-border bg-bg px-4 py-4">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                Potential causes
              </p>
              <div className="relative mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                <div
                  className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-border lg:block"
                  aria-hidden="true"
                />
                {investigatedCauses.map((cause) => (
                  <div key={cause.label} className="relative">
                    <div
                      className="absolute left-1/2 top-0 hidden h-3 w-px -translate-x-1/2 bg-border lg:block"
                      aria-hidden="true"
                    />
                    <div
                      className={cn(
                        'mt-0 border bg-bg-subtle px-3 py-3 lg:mt-3',
                        cause.status === 'supported'
                          ? 'border-accent/35'
                          : 'border-border',
                      )}
                    >
                      <StatusChip status={cause.status} />
                      <p className="mt-2 font-display text-sm font-medium leading-snug text-text">
                        {cause.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <FlowArrow />
            <Node
              phase="Findings"
              title="Lubrication washout + filtration fibre as contributing factors"
              accent
            />
            <FlowArrow />
            <Node
              phase="Countermeasures"
              title="Pilot-line filter · upstream filtration change-out · lubricator"
            />
            <FlowArrow />
            <Node
              phase="Verification"
              title="Pilot-circuit cleanliness + lubrication condition checked"
            />
          </div>
        </div>
      </div>
    </figure>
  )
}
