import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  action?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  action,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const subAlign = align === 'center' ? 'mx-auto' : ''

  return (
    <div
      className={`mb-10 flex max-w-3xl flex-col gap-3 md:mb-14 ${alignClass} ${
        action ? 'md:flex-row md:items-end md:justify-between md:max-w-none md:gap-8' : ''
      }`}
    >
      <div className={action ? 'md:max-w-2xl' : ''}>
        {eyebrow ? (
          <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-4xl uppercase tracking-wide text-white sm:text-5xl md:text-6xl">
          {title}
        </h2>
        {subtitle ? (
          <p
            className={`mt-3 max-w-2xl font-sans text-base leading-relaxed text-zinc-400 md:text-lg ${subAlign}`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      {action ? <div className="mt-4 shrink-0 md:mt-0">{action}</div> : null}
    </div>
  )
}
