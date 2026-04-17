import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <section className="relative min-h-[calc(100vh-170px)] overflow-hidden px-4 py-24 md:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Motion.div
          animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-70px] top-16 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"
        />
        <Motion.div
          animate={{ y: [0, 22, 0], x: [0, -16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-[-60px] h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl"
        />
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-3xl rounded-3xl border border-cyan-300/25 bg-slate-900/55 p-7 text-center shadow-[0_0_70px_-28px_rgba(34,211,238,0.65)] backdrop-blur-xl md:p-10"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Coming Soon</p>
        <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">Registrations Opening Soon 🚀</h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-200/90">
          We&apos;re preparing something exciting for you. The registration form is not available yet, but stay connected with us!
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-lg flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/45 p-5">
          <div className="flex items-center justify-between text-sm text-slate-300">
            <span>Launch Window</span>
            <span className="font-semibold text-cyan-200">TBA</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <Motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
            />
          </div>
          <p className="text-xs text-slate-400">Placeholder status bar for upcoming registrations</p>
        </div>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:text-cyan-200"
          >
            Go Back Home
          </Link>
          <Link
            to="/contact"
            className="rounded-xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_24px_-10px_rgba(34,211,238,0.95)]"
          >
            Contact Team
          </Link>
        </div>
      </Motion.div>
    </section>
  )
}

export default Register
