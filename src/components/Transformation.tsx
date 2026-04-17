import { transformations, footer } from '../data/siteContent'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { sectionScrollClass } from '../layout'

export function Transformation() {
  return (
    <section id="transformations" className={`${sectionScrollClass} py-20 md:py-28`}>
      <Container>
        <SectionHeading
          eyebrow="Real results"
          title="Transformations"
          subtitle="Progress is personal—these members put in the work with our coaches and community behind them."
        />
        <p className="mx-auto mb-12 max-w-3xl text-center text-sm text-zinc-500">{footer.disclaimer}</p>
        <div className="grid gap-10 lg:grid-cols-3">
          {transformations.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-white/10 bg-surface-card p-5 shadow-lg transition duration-300 motion-safe:hover:border-accent/30"
            >
              <div className="grid grid-cols-2 gap-3">
                <figure className="overflow-hidden rounded-lg">
                  <img
                    src={t.before}
                    alt={`${t.name} before`}
                    className="aspect-[3/4] w-full object-cover"
                    width={600}
                    height={800}
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Before
                  </figcaption>
                </figure>
                <figure className="overflow-hidden rounded-lg">
                  <img
                    src={t.after}
                    alt={`${t.name} after`}
                    className="aspect-[3/4] w-full object-cover"
                    width={600}
                    height={800}
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-wider text-accent">
                    After
                  </figcaption>
                </figure>
              </div>
              <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-white">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t.story}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
