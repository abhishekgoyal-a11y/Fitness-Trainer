import { testimonials } from '../data/siteContent'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { sectionScrollClass } from '../layout'

export function Testimonials() {
  return (
    <section id="reviews" className={`${sectionScrollClass} py-20 md:py-28`}>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loud praise from members"
          subtitle="Five stories from the floor—consistency, coaching, and culture show up in every review."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card p-6 shadow-lg transition duration-300 motion-safe:hover:border-accent/30"
            >
              <span className="font-display text-6xl leading-none text-accent/40" aria-hidden="true">
                “
              </span>
              <blockquote className="-mt-4 text-base leading-relaxed text-zinc-200">
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
