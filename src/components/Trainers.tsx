import { trainers } from '../data/siteContent'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { sectionScrollClass } from '../layout'

export function Trainers() {
  return (
    <section id="trainers" className={`${sectionScrollClass} py-20 md:py-28`}>
      <Container>
        <SectionHeading
          eyebrow="Coaches"
          title="Trainers who lift the standard"
          subtitle="Every coach on the floor carries a full client roster for a reason—they deliver clarity, intensity, and care in the same session."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <article
              key={trainer.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-surface-card transition duration-300 motion-safe:hover:border-accent/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-full w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                  width={800}
                  height={1000}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/20 to-transparent" />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-display text-2xl uppercase tracking-wide text-white">{trainer.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{trainer.role}</p>
                <p className="text-sm text-zinc-400">{trainer.years} experience</p>
                <p className="text-sm leading-relaxed text-zinc-300">{trainer.bio}</p>
                <p className="pt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Specialties: {trainer.specialties.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
