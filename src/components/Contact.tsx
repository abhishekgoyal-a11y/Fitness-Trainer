import { useMemo, useState, type FormEvent } from 'react'
import { contact } from '../data/siteContent'
import { Button } from './Button'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { sectionScrollClass } from '../layout'

type FormState = {
  name: string
  email: string
  phone: string
  goal: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  goal: 'fat-loss',
  message: '',
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('IronCore Fitness — Enquiry')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nGoal: ${form.goal}\n\n${form.message}`,
    )
    return `mailto:${contact.email}?subject=${subject}&body=${body}`
  }, [form])

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!isValidEmail(form.email)) next.email = 'Enter a valid email address.'
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.'
    if (!form.message.trim()) next.message = 'Tell us a little about what you are looking for.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    window.open(mailtoHref, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className={`${sectionScrollClass} bg-surface-muted py-20 md:py-28`}>
      <Container>
        <SectionHeading
          eyebrow="Visit us"
          title="Contact & location"
          subtitle="Tour the facility, meet a coach, and leave with a plan—even if you are not ready to join on day one."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6 rounded-2xl border border-white/10 bg-surface-card p-6 md:p-8">
            <div>
              <h3 className="font-display text-3xl uppercase tracking-wide text-white">IronCore HQ</h3>
              <address className="mt-3 not-italic text-sm leading-relaxed text-zinc-400">
                {contact.addressLine1}
                <br />
                {contact.addressLine2}
              </address>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a className="font-semibold text-white hover:text-accent" href={contact.phoneHref}>
                {contact.phoneDisplay}
              </a>
              <a className="text-zinc-400 hover:text-accent" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <p className="text-zinc-500">{contact.hours}</p>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="IronCore Fitness on Google Maps"
                src={contact.mapEmbedUrl}
                className="aspect-video w-full grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface-card p-6 md:p-8">
            <h3 className="font-display text-3xl uppercase tracking-wide text-white">Enquiry form</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Send a note—we respond within one business day. Submitting opens your email client with details prefilled.
            </p>
            {submitted ? (
              <div
                className="mt-8 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm text-zinc-200"
                role="status"
              >
                <p className="font-semibold text-white">Thanks for reaching out.</p>
                <p className="mt-2">
                  If your mail app did not open, email us directly at{' '}
                  <a className="text-accent hover:underline" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                  .
                </p>
                <Button
                  type="button"
                  variant="secondary"
                  className="mt-4"
                  onClick={() => {
                    setSubmitted(false)
                    setForm(initial)
                    setErrors({})
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500" htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="mt-2 w-full rounded-md border border-white/10 bg-surface px-3 py-2.5 text-sm text-white outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
                  />
                  {errors.name ? <p className="mt-1 text-xs text-accent">{errors.name}</p> : null}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="mt-2 w-full rounded-md border border-white/10 bg-surface px-3 py-2.5 text-sm text-white outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
                    />
                    {errors.email ? <p className="mt-1 text-xs text-accent">{errors.email}</p> : null}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="mt-2 w-full rounded-md border border-white/10 bg-surface px-3 py-2.5 text-sm text-white outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
                    />
                    {errors.phone ? <p className="mt-1 text-xs text-accent">{errors.phone}</p> : null}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500" htmlFor="goal">
                    Primary goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={form.goal}
                    onChange={(e) => setForm((f) => ({ ...f, goal: e.target.value }))}
                    className="mt-2 w-full rounded-md border border-white/10 bg-surface px-3 py-2.5 text-sm text-white outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
                  >
                    <option value="fat-loss">Fat loss</option>
                    <option value="muscle">Muscle building</option>
                    <option value="strength">Strength / powerlifting</option>
                    <option value="conditioning">Conditioning / cardio</option>
                    <option value="rehab">Return from injury</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="mt-2 w-full resize-y rounded-md border border-white/10 bg-surface px-3 py-2.5 text-sm text-white outline-none ring-accent/40 transition focus:border-accent focus:ring-2"
                  />
                  {errors.message ? <p className="mt-1 text-xs text-accent">{errors.message}</p> : null}
                </div>
                <Button type="submit" className="w-full justify-center uppercase tracking-widest">
                  Submit enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
