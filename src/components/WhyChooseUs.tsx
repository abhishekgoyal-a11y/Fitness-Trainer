import { whyUs } from '../data/siteContent'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { sectionScrollClass } from '../layout'

const icons = [
  <svg key="eq" className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 10h16M4 14h16M8 6v12M16 6v12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>,
  <svg key="cert" className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  <svg key="time" className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  <svg key="diet" className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 3v18M12 3v18M17 8v13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M5 21h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
] as const

export function WhyChooseUs() {
  return (
    <section id="why-us" className={`${sectionScrollClass} bg-surface-muted py-20 md:py-28`}>
      <Container>
        <SectionHeading
          eyebrow="Why IronCore"
          title="Why choose us"
          subtitle="We built this gym for people who want structure, energy, and coaching that respects your time."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {whyUs.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-2xl border border-white/10 bg-surface-card p-6 transition duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-accent/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                {icons[index]}
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
