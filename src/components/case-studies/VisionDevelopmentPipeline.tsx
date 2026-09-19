import { cn } from '@/lib/utils'

type VisionDevelopmentPipelineProps = {
  className?: string
}

function Connector({
  orientation,
}: {
  orientation: 'horizontal' | 'vertical'
}) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center text-accent',
        orientation === 'horizontal' ? 'w-4 self-center' : 'h-4',
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
  phase,
  label,
  accent,
}: {
  phase: string
  label: string
  accent?: boolean
}) {
  return (
    <div
      className={cn(
        'relative min-w-0 flex-1 border bg-bg-subtle px-3 py-2.5',
        accent ? 'border-accent/45' : 'border-border',
      )}
    >
      <span
        className="pointer-events-none absolute left-1.5 top-1.5 h-1.5 w-1.5 border-l border-t border-accent/45"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-1.5 right-1.5 h-1.5 w-1.5 border-b border-r border-accent/45"
        aria-hidden="true"
      />
      <p className="font-sans text-[9px] font-medium uppercase tracking-[0.14em] text-text-subtle">
        {phase}
      </p>
      <p className="mt-1 font-display text-sm font-medium leading-snug text-text">
        {label}
      </p>
    </div>
  )
}

const liveStages = [
  { phase: 'Process', label: 'Scrap-flow condition' },
  { phase: 'Sensor', label: 'VIKS Camera' },
  { phase: 'Compute', label: 'Raspberry Pi vision system' },
  { phase: 'Decision', label: 'Acceptable / abnormal' },
  { phase: 'Integration', label: 'System response' },
] as const

const modelStages = [
  { phase: 'Data', label: 'Production images' },
  { phase: 'Dataset', label: '~500 image dataset' },
  { phase: 'Model', label: 'Machine-learning development' },
] as const

function FlowRow({
  stages,
  orientation,
}: {
  stages: ReadonlyArray<{ phase: string; label: string }>
  orientation: 'horizontal' | 'vertical'
}) {
  if (orientation === 'vertical') {
    return (
      <div className="flex flex-col">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex flex-col">
            <Node
              phase={stage.phase}
              label={stage.label}
              accent={index === stages.length - 1 || index === 1}
            />
            {index < stages.length - 1 ? (
              <Connector orientation="vertical" />
            ) : null}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-stretch">
      {stages.map((stage, index) => (
        <div key={stage.label} className="flex min-w-0 flex-1 items-stretch">
          <Node
            phase={stage.phase}
            label={stage.label}
            accent={index === 1 || index === 2}
          />
          {index < stages.length - 1 ? (
            <Connector orientation="horizontal" />
          ) : null}
        </div>
      ))}
    </div>
  )
}

/** Scrap Detection system architecture — live vision path + model development. */
export function VisionDevelopmentPipeline({
  className,
}: VisionDevelopmentPipelineProps) {
  return (
    <figure
      className={cn('border border-border bg-bg-elevated', className)}
      aria-label="Machine vision system architecture"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
          <figcaption className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-text-subtle">
            Vision system architecture
          </figcaption>
        </div>
      </div>

      <div className="space-y-5 p-4 md:p-5">
        <div>
          <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
            Live vision system
          </p>
          <div className="md:hidden">
            <FlowRow stages={liveStages} orientation="vertical" />
          </div>
          <div className="hidden md:block">
            <FlowRow stages={liveStages} orientation="horizontal" />
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
            Model / data development
          </p>
          <div className="md:hidden">
            <FlowRow stages={modelStages} orientation="vertical" />
          </div>
          <div className="hidden md:block">
            <div className="max-w-2xl">
              <FlowRow stages={modelStages} orientation="horizontal" />
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}
