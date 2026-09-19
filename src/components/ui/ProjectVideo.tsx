import { cn } from '@/lib/utils'

type AspectRatio = '16/9' | '4/3' | '1/1' | '3/2' | '3/4' | '9/16'

const aspectClass: Record<AspectRatio, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  '3/4': 'aspect-[3/4]',
  '9/16': 'aspect-[9/16]',
}

type ProjectVideoProps = {
  src: string
  title: string
  technicalLabel?: string
  aspectRatio?: AspectRatio
  className?: string
}

export function ProjectVideo({
  src,
  title,
  technicalLabel,
  aspectRatio = '16/9',
  className,
}: ProjectVideoProps) {
  const isPortrait = aspectRatio === '9/16' || aspectRatio === '3/4'
  // Force browsers to decode and show the opening frame before play.
  const mediaSrc = src.includes('#') ? src : `${src}#t=0.001`

  return (
    <div
      className={cn(
        'relative overflow-hidden border border-border bg-black',
        isPortrait ? 'mx-auto w-full max-w-sm' : 'w-full',
        className,
      )}
    >
      {technicalLabel ? (
        <div className="absolute left-3 top-3 z-10 border border-border bg-bg/80 px-2 py-1 backdrop-blur-[2px] md:left-4 md:top-4">
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-accent">
            {technicalLabel}
          </span>
        </div>
      ) : null}
      <video
        className={cn(
          'w-full bg-black object-contain',
          aspectClass[aspectRatio],
        )}
        controls
        playsInline
        preload="metadata"
        aria-label={title}
      >
        <source src={mediaSrc} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    </div>
  )
}
