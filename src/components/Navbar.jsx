import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { navLinks } from '../data/content'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const detectSection = () => {
      const position = window.scrollY + 160
      for (const section of sections) {
        if (
          section.offsetTop <= position &&
          section.offsetTop + section.offsetHeight > position
        ) {
          setActiveHash(`#${section.id}`)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('scroll', detectSection)
    detectSection()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', detectSection)
    }
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 md:px-8">
      <Motion.nav
        initial={false}
        animate={{
          backdropFilter: scrolled ? 'blur(18px)' : 'blur(10px)',
          borderColor: scrolled ? 'rgba(103, 232, 249, 0.28)' : 'rgba(135, 150, 255, 0.12)',
          y: scrolled ? 0 : 4,
        }}
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border bg-slate-950/55 px-4 py-3 shadow-[0_0_50px_-18px_rgba(56,189,248,0.65)]"
      >
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/25 bg-gradient-to-br from-cyan-300 to-indigo-500 text-xs font-bold text-slate-950">
            IETE
          </span>
          IETE HIT SF
        </a>

        <ul className="hidden items-center gap-3 text-sm text-slate-200 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 transition duration-300 hover:text-cyan-300 ${
                  activeHash === link.href
                    ? 'bg-cyan-300/10 text-cyan-200'
                    : 'text-slate-200'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-content-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </Motion.nav>

      <AnimatePresence>
        {open ? (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-indigo-400/25 bg-slate-950/95 p-4 shadow-2xl md:hidden"
          >
            <ul className="grid gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 transition ${
                      activeHash === link.href
                        ? 'bg-cyan-300/10 text-cyan-200'
                        : 'text-slate-200 hover:bg-white/5 hover:text-cyan-300'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
