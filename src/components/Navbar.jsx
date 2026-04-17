import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/content'
import { handleRegistrationRedirect } from '../utils/registration'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState('#home')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    
    // Only detect sections on homepage
    if (location.pathname === '/') {
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
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      // If on homepage, scroll to section
      if (location.pathname === '/') {
        const section = document.querySelector(href)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
          setOpen(false)
        }
      } else {
        // If on another page, navigate home and scroll
        navigate('/')
        setTimeout(() => {
          const section = document.querySelector(href)
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }

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
        <Link
          to="/"
          className="group flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-white transition hover:text-cyan-300"
        >
          <span className="grid h-10 w-10 place-content-center rounded-xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300/20 via-slate-900/65 to-indigo-300/20 shadow-[0_0_22px_-10px_rgba(56,189,248,0.8)] backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_28px_-8px_rgba(103,232,249,0.9)]">
            <span className="font-heading text-xs font-bold tracking-[0.22em] text-cyan-100">IETE</span>
          </span>
          <span className="font-heading bg-gradient-to-r from-cyan-100 via-cyan-300 to-indigo-200 bg-clip-text text-transparent transition duration-300 group-hover:drop-shadow-[0_0_10px_rgba(103,232,249,0.7)]">
            IETE HIT SF
          </span>
        </Link>

        <ul className="hidden items-center gap-3 text-sm text-slate-200 md:flex">
          {navLinks.map((link) => {
            const isContact = link.href === '#contact'
            return (
              <li key={link.href}>
                {isContact ? (
                  <Link
                    to="/contact"
                    className="rounded-lg px-3 py-2 transition duration-300 hover:text-cyan-300 text-slate-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`rounded-lg px-3 py-2 transition duration-300 hover:text-cyan-300 ${
                      activeHash === link.href
                        ? 'bg-cyan-300/10 text-cyan-200'
                        : 'text-slate-200'
                    }`}
                  >
                    {link.label}
                  </button>
                )}
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => handleRegistrationRedirect(navigate)}
            className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 hover:-translate-y-0.5"
          >
            Register Now
          </button>
          <Link
            to="/admin"
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10 hover:border-indigo-300/60"
          >
            Admin Login
          </Link>
        </div>

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
              {navLinks.map((link) => {
                const isContact = link.href === '#contact'
                return (
                  <li key={link.href}>
                    {isContact ? (
                      <Link
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 transition text-slate-200 hover:bg-white/5 hover:text-cyan-300"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          handleNavClick(link.href)
                          setOpen(false)
                        }}
                        className={`block w-full text-left rounded-lg px-3 py-2 transition ${
                          activeHash === link.href
                            ? 'bg-cyan-300/10 text-cyan-200'
                            : 'text-slate-200 hover:bg-white/5 hover:text-cyan-300'
                        }`}
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                )
              })}
            </ul>
            <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-3">
              <button
                onClick={() => {
                  handleRegistrationRedirect(navigate)
                  setOpen(false)
                }}
                className="rounded-lg bg-cyan-300 px-4 py-2 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Register Now
              </button>
              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-slate-100 transition hover:bg-white/10"
              >
                Admin Login
              </Link>
            </div>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
