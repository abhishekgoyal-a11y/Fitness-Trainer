import { ctaBand } from '../data/siteContent'
import { AnchorButton } from './Button'
import { Container } from './Container'
import { sectionScrollClass } from '../layout'

export function CtaBanner() {
  return (
    <section
      aria-label="Call to action"
      className={`${sectionScrollClass} relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-accent-muted via-surface to-surface py-20 md:py-24`}
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <Container className="relative text-center">
        <h2 className="font-display text-4xl uppercase tracking-wide text-white sm:text-5xl md:text-6xl">
          {ctaBand.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">{ctaBand.subtitle}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AnchorButton href={ctaBand.primary.href} className="min-w-[220px] px-8 py-3.5 text-base uppercase tracking-widest">
            {ctaBand.primary.label}
          </AnchorButton>
          <AnchorButton
            href={ctaBand.secondary.href}
            variant="secondary"
            className="min-w-[220px] px-8 py-3.5 text-base uppercase tracking-widest"
          >
            {ctaBand.secondary.label}
          </AnchorButton>
        </div>
      </Container>
    </section>
  )
}
