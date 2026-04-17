import { brand, footer, navLinks } from '../data/siteContent'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface py-12">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-3xl uppercase tracking-wide text-white">{brand.name}</p>
          <p className="mt-2 max-w-sm text-sm text-zinc-500">{brand.tagline}</p>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-zinc-600">{footer.disclaimer}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Jump to</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-400">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a className="hover:text-white" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
        © {footer.copyrightYear} {brand.name}. All rights reserved. This is a demo website for portfolio use.
      </Container>
    </footer>
  )
}
