import { motion as Motion } from 'framer-motion'

function CTASection() {
  return (
    <section id="contact" className="px-4 pb-24 pt-16 md:px-8">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 rounded-3xl border border-indigo-300/30 bg-gradient-to-r from-cyan-500/15 via-indigo-500/20 to-fuchsia-500/15 px-6 py-12 text-center shadow-[0_0_65px_-28px_rgba(34,211,238,0.8)] backdrop-blur-xl md:py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Ready to start?</p>
        <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">Join a community that builds together</h2>
        <p className="max-w-2xl text-slate-200/90">
          Whether you are a beginner or an experienced developer, there is a place for you to collaborate, lead, and create impact.
        </p>
        <div className="rounded-xl border border-white/20 bg-slate-950/45 px-4 py-3 text-sm text-slate-200">
          Ground Floor, ECE Department, HIT Haldia • ietehitsf@gmail.com
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
            Join the Community
          </button>
          <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10">
            Contact Team
          </button>
        </div>
      </Motion.div>
    </section>
  )
}

export default CTASection
