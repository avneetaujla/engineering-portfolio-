import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type GateBeforeAfterDrawingProps = {
  className?: string
}

/**
 * Sanitized conceptual before/after mechanical illustration.
 * Geometry informed by site photos (IMG 0084 before; IMG 5508/5509 after).
 * Not a fabrication drawing — no dimensions, loads, or material callouts.
 */
export function GateBeforeAfterDrawing({
  className,
}: GateBeforeAfterDrawingProps) {
  return (
    <figure
      className={cn('border border-border bg-bg-elevated', className)}
      aria-label="Gate restraining system conceptual before and after illustration"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 md:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
          <figcaption className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-text-subtle">
            Before / after mechanical concept
          </figcaption>
        </div>
        <p className="font-sans text-[10px] uppercase tracking-[0.14em] text-text-subtle">
          Conceptual illustration
        </p>
      </div>

      <div className="bg-[#f3f1eb]">
        <p className="border-b border-[#c9c4b8] px-4 py-2.5 text-center font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2a2a2e] md:text-[11px]">
          Gate restraining system — conceptual before / after
        </p>

        <div className="grid gap-0 md:grid-cols-2">
          <PanelFrame
            title="Before / original gate"
            className="border-b border-[#c9c4b8] md:border-b-0 md:border-r"
          >
            <BeforeGateSvg />
          </PanelFrame>
          <PanelFrame title="After / modified gate">
            <AfterGateSvg />
          </PanelFrame>
        </div>
      </div>

      <p className="border-t border-border px-4 py-3 font-sans text-[11px] leading-relaxed text-text-subtle md:px-5">
        Conceptual before/after illustration based on site condition and
        design-development photographs.
      </p>
    </figure>
  )
}

function PanelFrame({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('px-3 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4', className)}>
      <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3a3a40]">
        {title}
      </p>
      {children}
    </div>
  )
}

function HingePost() {
  return (
    <rect
      x="16"
      y="40"
      width="16"
      height="152"
      rx="2"
      fill="#4a4a50"
      stroke="#1f1f22"
      strokeWidth="2"
    />
  )
}

/** Existing tubular barn gate with raised top rail (IMG 0084). */
function BaseGate({ includeRaisedTopRail = true }: { includeRaisedTopRail?: boolean }) {
  return (
    <g>
      <rect
        x="40"
        y="56"
        width="210"
        height="124"
        rx="8"
        fill="#d9d5cd"
        stroke="#1f1f22"
        strokeWidth="3.5"
      />
      <line x1="40" y1="87" x2="250" y2="87" stroke="#1f1f22" strokeWidth="3" />
      <line x1="40" y1="118" x2="250" y2="118" stroke="#1f1f22" strokeWidth="3" />
      <line x1="40" y1="149" x2="250" y2="149" stroke="#1f1f22" strokeWidth="3" />
      {/* Staggered verticals */}
      <line x1="92" y1="56" x2="92" y2="87" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="145" y1="56" x2="145" y2="87" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="198" y1="56" x2="198" y2="87" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="66" y1="87" x2="66" y2="118" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="118" y1="87" x2="118" y2="118" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="171" y1="87" x2="171" y2="118" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="224" y1="87" x2="224" y2="118" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="92" y1="118" x2="92" y2="149" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="145" y1="118" x2="145" y2="149" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="198" y1="118" x2="198" y2="149" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="66" y1="149" x2="66" y2="180" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="118" y1="149" x2="118" y2="180" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="171" y1="149" x2="171" y2="180" stroke="#1f1f22" strokeWidth="2.5" />
      <line x1="224" y1="149" x2="224" y2="180" stroke="#1f1f22" strokeWidth="2.5" />

      {includeRaisedTopRail ? (
        <g>
          <line x1="40" y1="40" x2="250" y2="40" stroke="#1f1f22" strokeWidth="3.5" />
          <line x1="80" y1="40" x2="80" y2="56" stroke="#1f1f22" strokeWidth="2.5" />
          <line x1="145" y1="40" x2="145" y2="56" stroke="#1f1f22" strokeWidth="2.5" />
          <line x1="210" y1="40" x2="210" y2="56" stroke="#1f1f22" strokeWidth="2.5" />
        </g>
      ) : null}
    </g>
  )
}

function BeforeGateSvg() {
  return (
    <svg
      viewBox="0 0 320 230"
      className="mx-auto h-auto w-full max-w-lg"
      role="img"
      aria-label="Original gate configuration without rollout extension"
    >
      <HingePost />
      <BaseGate />
      <text
        x="145"
        y="214"
        textAnchor="middle"
        fill="#3a3a40"
        style={{
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.14em',
          fontWeight: 600,
        }}
      >
        ORIGINAL GATE
      </text>
    </svg>
  )
}

function AfterGateSvg() {
  const labelStyle = {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontSize: '8px',
    letterSpacing: '0.06em',
    fontWeight: 600,
  } as const

  // Extension on latch end (right) — opposite hinge post, matching site photos
  const extX = 188
  const extW = 58
  const railY = 50
  const bracketY = 46

  return (
    <svg
      viewBox="0 0 320 250"
      className="mx-auto h-auto w-full max-w-lg"
      role="img"
      aria-label="Modified gate with sliding roll-out extension on the latch end, horizontal guide rail, and aligned roller guides"
    >
      <HingePost />
      <BaseGate />

      {/* Thin horizontal guide rail across upper gate */}
      <rect
        x="44"
        y={railY}
        width="208"
        height="5"
        rx="0.5"
        fill="#4a4a50"
        stroke="#1f1f22"
        strokeWidth="1.25"
        aria-label="Horizontal guide rail"
      />

      {/* 3 aligned guide/roller brackets on one line */}
      <g aria-label="Roller guide assemblies">
        <GuideBracket x={100} y={bracketY} />
        <GuideBracket x={152} y={bracketY} />
        <GuideBracket x={204} y={bracketY} />
      </g>

      {/* Subtle ghost — extended further right, conceptual only */}
      <rect
        x={extX + 36}
        y="60"
        width={extW}
        height="112"
        rx="2"
        fill="none"
        stroke="#9a958a"
        strokeWidth="1.25"
        strokeDasharray="3 3"
        opacity="0.45"
        aria-hidden="true"
      />

      {/* Sliding extension frame — latch end */}
      <g aria-label="Sliding extension frame">
        <rect
          x={extX}
          y="60"
          width={extW}
          height="112"
          rx="2"
          fill="#3a3a40"
          stroke="#1f1f22"
          strokeWidth="2.25"
        />
        <rect
          x={extX + 5}
          y="66"
          width={extW - 10}
          height="26"
          fill="#2a2a2e"
          stroke="#1f1f22"
          strokeWidth="1.1"
        />
        <rect
          x={extX + 5}
          y="128"
          width={extW - 10}
          height="38"
          fill="#2a2a2e"
          stroke="#1f1f22"
          strokeWidth="1.1"
        />
      </g>

      {/* Motion arrow aligned under extension travel */}
      <g aria-label="Retracted extended motion">
        <line
          x1={extX}
          y1="192"
          x2={extX + 72}
          y2="192"
          stroke="#1f1f22"
          strokeWidth="1.2"
        />
        <polyline
          points={`${extX + 5},188 ${extX},192 ${extX + 5},196`}
          fill="none"
          stroke="#1f1f22"
          strokeWidth="1.2"
        />
        <polyline
          points={`${extX + 67},188 ${extX + 72},192 ${extX + 67},196`}
          fill="none"
          stroke="#1f1f22"
          strokeWidth="1.2"
        />
        <text x={extX} y="206" fill="#3a3a40" style={labelStyle}>
          RETRACTED
        </text>
        <text x={extX + 48} y="206" fill="#3a3a40" style={labelStyle}>
          EXTENDED
        </text>
      </g>

      {/* Sparse, non-overlapping callouts */}
      <g stroke="#1f1f22" strokeWidth="1" fill="none">
        <path d={`M${extX + 10} 90 L${extX + 10} 28 L40 28`} />
        <circle cx={extX + 10} cy="90" r="2" fill="#1f1f22" />
      </g>
      <text x="8" y="24" fill="#1f1f22" style={labelStyle}>
        SLIDING EXTENSION
      </text>

      <g stroke="#1f1f22" strokeWidth="1" fill="none">
        <path d="M152 48 L152 14 L210 14" />
        <circle cx="152" cy="48" r="2" fill="#1f1f22" />
      </g>
      <text x="156" y="12" fill="#1f1f22" style={labelStyle}>
        GUIDE / ROLLER
      </text>

      <g stroke="#1f1f22" strokeWidth="1" fill="none">
        <path d="M230 52 L270 36 L310 36" />
        <circle cx="230" cy="52" r="2" fill="#1f1f22" />
      </g>
      <text x="234" y="32" fill="#1f1f22" style={labelStyle}>
        GUIDE RAIL
      </text>

      <g stroke="#1f1f22" strokeWidth="1" fill="none">
        <path d="M110 130 L70 130 L70 160" />
        <circle cx="110" cy="130" r="2" fill="#1f1f22" />
      </g>
      <text x="8" y="172" fill="#1f1f22" style={labelStyle}>
        EXISTING GATE
      </text>

      <text
        x="160"
        y="236"
        textAnchor="middle"
        fill="#3a3a40"
        style={{
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.1em',
          fontWeight: 600,
        }}
      >
        MODIFIED GATE · SLIDING EXTENSION
      </text>
    </svg>
  )
}

/** Compact guide / roller bracket — aligned on the guide rail. */
function GuideBracket({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="0"
        y="0"
        width="12"
        height="13"
        rx="1"
        fill="#6a6a70"
        stroke="#1f1f22"
        strokeWidth="1.1"
      />
      <circle cx="6" cy="5.5" r="2.5" fill="#d0ccc4" stroke="#1f1f22" strokeWidth="0.9" />
    </g>
  )
}
