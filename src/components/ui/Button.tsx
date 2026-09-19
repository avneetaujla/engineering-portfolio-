import { cva, type VariantProps } from 'class-variance-authority'
import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-bg hover:bg-accent-muted border border-transparent',
        secondary:
          'bg-transparent text-text border border-border-strong hover:border-accent hover:text-accent',
        ghost:
          'bg-transparent text-text-muted hover:text-text border border-transparent',
        link: 'bg-transparent text-accent hover:text-text underline-offset-4 hover:underline px-0 py-0 h-auto',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-5',
        lg: 'h-12 px-6 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode
  }

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  )
}

type ButtonLinkProps = VariantProps<typeof buttonVariants> & {
  to: string
  children: ReactNode
  className?: string
  external?: boolean
  download?: boolean
}

export function ButtonLink({
  to,
  children,
  className,
  variant,
  size,
  external,
  download,
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className)

  const isPdf = to.endsWith('.pdf')
  const openExternal = Boolean(external || (isPdf && !download))

  if (
    external ||
    download ||
    to.startsWith('mailto:') ||
    to.startsWith('http') ||
    isPdf
  ) {
    return (
      <a
        href={to}
        className={classes}
        download={download || undefined}
        target={openExternal ? '_blank' : undefined}
        rel={openExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}

export { buttonVariants }
