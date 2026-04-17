import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: Variant
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-hover focus-visible:outline-accent',
  secondary:
    'border border-white/20 bg-white/5 text-white hover:border-accent/60 hover:bg-white/10 focus-visible:outline-white',
  ghost: 'text-white hover:bg-white/10 focus-visible:outline-white',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

type AnchorButtonProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'children'
> & {
  children: ReactNode
  variant?: Variant
  href: string
}

export function AnchorButton({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}: AnchorButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
