import { motion as Motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-[0_0_60px_-25px_rgba(56,189,248,0.6)] backdrop-blur-xl md:grid-cols-2 md:p-10">
        <Motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <SectionHeading
            badge="About Us"
            title="A launchpad for student innovators"
            description=""
          />
          <p className="text-slate-300">
            We are a technical society driven by curiosity and collaboration. From beginner-friendly learning circles to advanced build sprints, we create an ecosystem where everyone can level up.
          </p>
          <p className="text-slate-400">
            Our members work on real-world projects, host coding events, and mentor each other in a culture focused on growth and community.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Workshops</p>
              <p className="mt-2 text-sm text-slate-300">Manual robotics, autonomous systems, AI tools, and web stack sessions.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Interactive Sessions</p>
              <p className="mt-2 text-sm text-slate-300">Peer-led hands-on sessions on frontend, CP, and open-source contribution flows.</p>
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-indigo-200/20 bg-gradient-to-br from-indigo-500/25 via-blue-500/10 to-cyan-500/20 p-1"
        >
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
            alt="Members working on laptops in a technical session"
            loading="lazy"
            className="h-[270px] w-full rounded-[1.35rem] object-cover md:h-[340px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
        </Motion.div>
      </div>
    </section>
  )
}

export default AboutSection
