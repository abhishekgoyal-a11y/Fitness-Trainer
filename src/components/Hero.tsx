import { hero } from '../data/siteContent'
import { AnchorButton } from './Button'
import { Container } from './Container'

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16 md:pt-20"
    >
      <div className="absolute inset-0">
        <img
          src={hero.posterImage}
          alt=""
          className="h-full w-full object-cover"
          width={2000}
          height={1125}
          fetchPriority="high"
        />
        <video
          className="absolute inset-0 hidden h-full w-full object-cover opacity-40 motion-safe:block"
          autoPlay
          muted
          loop
          playsInline
          poster={hero.posterImage}
          aria-hidden="true"
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/60" />
      </div>

      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-3xl text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Austin&apos;s performance gym
          </p>
          <h1 className="font-display text-5xl uppercase leading-none tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <AnchorButton href={hero.primaryCta.href} className="min-w-[180px] px-8 py-3.5 text-base uppercase tracking-widest">
              {hero.primaryCta.label}
            </AnchorButton>
            <AnchorButton
              href={hero.secondaryCta.href}
              variant="secondary"
              className="min-w-[180px] px-8 py-3.5 text-base uppercase tracking-widest"
            >
              {hero.secondaryCta.label}
            </AnchorButton>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8 text-left sm:gap-10">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Members</dt>
              <dd className="font-display text-3xl text-white md:text-4xl">1.2k+</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Sq ft floor</dt>
              <dd className="font-display text-3xl text-white md:text-4xl">18k</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Google</dt>
              <dd className="font-display text-3xl text-white md:text-4xl">4.9★</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  )
}
