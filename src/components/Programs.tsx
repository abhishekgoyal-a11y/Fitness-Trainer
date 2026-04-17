import { programs } from '../data/siteContent'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { sectionScrollClass } from '../layout'

export function Programs() {
  return (
    <section id="programs" className={`${sectionScrollClass} bg-surface-muted py-20 md:py-28`}>
      <Container>
        <SectionHeading
          eyebrow="Programs"
          title="Built for every goal"
          subtitle="From foundational strength to high-output conditioning—pick your path, and we will build the plan around your life."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card shadow-xl transition duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-accent/40 motion-safe:hover:shadow-accent/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                  width={900}
                  height={600}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />
              </div>
              <div className="relative space-y-3 p-6">
                <h3 className="font-display text-3xl uppercase tracking-wide text-white">{program.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{program.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-accent transition hover:text-accent-hover"
                >
                  Book a consult
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
