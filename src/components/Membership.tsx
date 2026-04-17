import { membershipPlans } from '../data/siteContent'
import { AnchorButton } from './Button'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { sectionScrollClass } from '../layout'

export function Membership() {
  return (
    <section id="membership" className={`${sectionScrollClass} bg-surface-muted py-20 md:py-28`}>
      <Container>
        <SectionHeading
          eyebrow="Membership"
          title="Plans that reward commitment"
          subtitle="Transparent pricing, no hidden fees. Cancel or change tiers with the timelines printed on your agreement—we hate surprises too."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {membershipPlans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-xl transition duration-300 motion-safe:hover:-translate-y-1 ${
                plan.popular
                  ? 'border-accent bg-gradient-to-b from-accent/20 to-surface-card ring-2 ring-accent/60'
                  : 'border-white/10 bg-surface-card motion-safe:hover:border-white/20'
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                  Most popular
                </span>
              ) : null}
              <h3 className="font-display text-4xl uppercase text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{plan.blurb}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl text-white">{plan.price}</span>
                <span className="text-sm text-zinc-500">{plan.cadence}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-zinc-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-0.5 text-accent" aria-hidden="true">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <AnchorButton href="#contact" className="mt-10 w-full justify-center uppercase tracking-widest">
                Get started
              </AnchorButton>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
