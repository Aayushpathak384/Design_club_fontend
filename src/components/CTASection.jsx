import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section id="join" className="px-4 pb-24 pt-16 md:px-8">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-500/15 via-indigo-500/20 to-cyan-500/15 px-6 py-12 text-center shadow-[0_0_65px_-28px_rgba(34,211,238,0.8)] backdrop-blur-xl md:py-16"
      >
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Become a member</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            Build together, grow together
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-200/90 leading-relaxed">
            Join 300+ engineers and innovators who are shaping the future. Get access to exclusive workshops, hackathons, collaborative projects, and a network of like-minded builders.
          </p>
        </div>

        {/* Membership Benefits */}
        <div className="grid gap-4 md:grid-cols-3 w-full max-w-2xl">
          <Motion.div
            whileHover={{ y: -4 }}
            className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 backdrop-blur"
          >
            <p className="text-2xl mb-1">🎓</p>
            <p className="text-xs font-semibold text-cyan-200">Workshops & Learning</p>
          </Motion.div>
          <Motion.div
            whileHover={{ y: -4 }}
            className="rounded-xl border border-indigo-300/20 bg-indigo-300/5 px-4 py-3 backdrop-blur"
          >
            <p className="text-2xl mb-1">⚡</p>
            <p className="text-xs font-semibold text-indigo-200">Hackathons & Competitions</p>
          </Motion.div>
          <Motion.div
            whileHover={{ y: -4 }}
            className="rounded-xl border border-purple-300/20 bg-purple-300/5 px-4 py-3 backdrop-blur"
          >
            <p className="text-2xl mb-1">🤝</p>
            <p className="text-xs font-semibold text-purple-200">Community & Networking</p>
          </Motion.div>
        </div>

        <div className="w-full max-w-md space-y-3 rounded-2xl border border-white/15 bg-slate-950/60 p-6">
          <h3 className="text-sm font-semibold text-slate-200">Get in touch with the team</h3>
          <div className="space-y-2">
            <p className="text-sm text-slate-300">
              📍 Ground Floor, ECE Department, HIT Haldia
            </p>
            <p className="text-sm text-slate-300">
              ✉️ <a href="mailto:ietehitsf@gmail.com" className="text-cyan-300 hover:text-cyan-200 transition">ietehitsf@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Motion.a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl bg-cyan-300 px-8 py-3.5 text-base font-semibold text-slate-950 transition hover:bg-cyan-200 shadow-lg hover:shadow-cyan-300/50"
          >
            Join the Community
          </Motion.a>
          <Link
            to="/contact"
            className="rounded-xl border border-cyan-300/60 bg-cyan-300/10 px-8 py-3.5 text-base font-semibold text-cyan-200 transition hover:bg-cyan-300/20 hover:border-cyan-300"
          >
            Contact Team
          </Link>
        </div>
      </Motion.div>
    </section>
  )
}

export default CTASection
