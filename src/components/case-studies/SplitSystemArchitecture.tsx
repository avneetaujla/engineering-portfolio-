import { cn } from '@/lib/utils'

type SplitSystemArchitectureProps = {
  className?: string
}

const mainFlow = [
  { n: '01', phase: 'Process', label: 'Panel / draw operation' },
  { n: '02', phase: 'Sequence', label: 'Press angle / sequence' },
  { n: '03', phase: 'Controls', label: 'PLC trigger logic' },
  { n: '04', phase: 'Vision', label: 'Cognex IS8912 camera' },
  { n: '05', phase: 'Inspect', label: 'Edge-learning inspection' },
  { n: '06', phase: 'Decision', label: 'Pass / split detected' },
  { n: '07', phase: 'Output', label: 'Detection output' },
] as const

const layers = [
  {
    id: 'mechanical',
    title: 'Mechanical',
    items: ['Camera mount', 'Lighting', 'Cable management'],
  },
  {
    id: 'vision',
    title: 'Vision',
    items: ['Cognex IS8912', 'Edge Learning', 'Split classification'],
  },
  {
    id: 'controls',
    title: 'Controls',
    items: ['PLC signals', 'Angle-based trigger', 'HMI controls'],
  },
  {
    id: 'networking',
    title: 'Networking',
    items: ['Remote IP access', 'Configuration / monitoring'],
  },
] as const

function Connector({ orientation }: { orientation: 'horizontal' | 'vertical' }) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center text-accent',
        orientation === 'horizontal' ? 'w-5 self-center' : 'h-5',
      )}
      aria-hidden="true"
    >
      <span className="font-sans text-xs leading-none">
        {orientation === 'horizontal' ? '→' : '↓'}
      </span>
    </div>
  )
}

function FlowNode({
  n,
  phase,
  label,
}: {
  n: string
  phase: string
  label: string
}) {
  return (
    <div className="relative min-w-0 flex-1 border border-border bg-bg-subtle px-2.5 py-2.5">
      <span
        className="pointer-events-none absolute left-1 top-1 h-1.5 w-1.5 border-l border-t border-accent/45"
        aria-hidden="true"
      />
      <p className="font-sans text-[9px] font-medium uppercase tracking-[0.12em] text-accent">
        {n} · {phase}
      </p>
      <p className="mt-1 font-display text-[13px] font-medium leading-snug text-text">
        {label}
      </p>
    </div>
  )
}

function FlowRow({
  steps,
}: {
  steps: ReadonlyArray<(typeof mainFlow)[number]>
}) {
  return (
    <div className="flex items-stretch">
      {steps.map((step, index) => (
        <div key={step.n} className="flex min-w-0 flex-1 items-stretch">
          <FlowNode n={step.n} phase={step.phase} label={step.label} />
          {index < steps.length - 1 ? (
            <Connector orientation="horizontal" />
          ) : null}
        </div>
      ))}
    </div>
  )
}

/** Conceptual systems-integration architecture for Split Detection. */
export function SplitSystemArchitecture({
  className,
}: SplitSystemArchitectureProps) {
  const rowOne = mainFlow.slice(0, 4)
  const rowTwo = mainFlow.slice(4)

  return (
    <figure
      className={cn('border border-border bg-bg-elevated', className)}
      aria-label="Split detection system architecture"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
          <figcaption className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-text-subtle">
            System architecture
          </figcaption>
        </div>
      </div>

      <div className="space-y-6 p-4 md:p-5">
        <div>
          <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
            Inspection sequence
          </p>

          {/* Mobile: continuous vertical 01→07 */}
          <div className="flex flex-col md:hidden">
            {mainFlow.map((step, index) => (
              <div key={step.n} className="flex flex-col">
                <FlowNode n={step.n} phase={step.phase} label={step.label} />
                {index < mainFlow.length - 1 ? (
                  <Connector orientation="vertical" />
                ) : null}
              </div>
            ))}
          </div>

          {/* Desktop: 01→02→03→04, wrap from Cognex (04) into 05→06→07 */}
          <div className="hidden md:block">
            <FlowRow steps={rowOne} />
            <div className="flex justify-end py-2" aria-hidden="true">
              <div className="flex w-[calc((100%-4.5rem)/4)] flex-col items-center text-accent">
                <span className="font-sans text-[9px] uppercase tracking-[0.12em] text-text-subtle">
                  Continues 04 → 05
                </span>
                <span className="font-sans text-xs leading-none">↓</span>
              </div>
            </div>
            <FlowRow steps={rowTwo} />
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
            Integrated engineering layers
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {layers.map((layer) => (
              <div
                key={layer.id}
                className="border border-border bg-bg-subtle px-3 py-3"
              >
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
                  {layer.title}
                </p>
                <ul className="mt-2.5 space-y-1.5">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs leading-snug text-text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  )
}
