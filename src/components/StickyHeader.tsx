import { useEffect, useState } from 'react'
import { navLinks, brand } from '../data/siteContent'
import { AnchorButton, Button } from './Button'
import { Container } from './Container'

export function StickyHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-white/10 bg-surface/95 shadow-lg shadow-black/40 backdrop-blur-md' : 'border-transparent bg-surface/80 backdrop-blur-sm'
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#top" className="group flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-accent/20 text-lg font-black text-accent ring-1 ring-accent/40">
            IC
          </span>
          <span className="font-display text-2xl uppercase tracking-wide text-white transition-colors group-hover:text-accent sm:text-3xl">
            {brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <AnchorButton href="#contact" variant="secondary" className="!py-2 !text-xs uppercase tracking-wider">
            Book Trial
          </AnchorButton>
          <AnchorButton href="#membership" className="!py-2 !text-xs uppercase tracking-wider">
            Join Now
          </AnchorButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <AnchorButton href="#membership" className="!px-3 !py-2 !text-xs uppercase">
            Join
          </AnchorButton>
          <Button
            type="button"
            variant="ghost"
            className="!px-3 !py-2"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </Button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} fixed inset-0 top-16 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-200`}
        aria-hidden={!open}
      >
        <div
          className={`ml-auto flex h-[calc(100dvh-4rem)] w-full max-w-sm flex-col border-l border-white/10 bg-surface p-6 shadow-2xl transition-transform duration-200 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <AnchorButton href="#contact" variant="secondary" onClick={() => setOpen(false)}>
              Book Free Trial
            </AnchorButton>
            <AnchorButton href="#membership" onClick={() => setOpen(false)}>
              Join Now
            </AnchorButton>
          </div>
        </div>
      </div>
    </header>
  )
}
