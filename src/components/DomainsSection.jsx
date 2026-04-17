import { motion as Motion } from 'framer-motion'
import { domains } from '../data/content'
import SectionHeading from './SectionHeading'

function DomainsSection() {
  return (
    <section id="domains" className="px-4 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          badge="What We Do"
          title="Domains that power our community"
          description="Focused pathways to help members build practical skills through structured learning and projects."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {domains.map((domain, index) => (
            <Motion.article
              key={domain.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/55 p-5 shadow-xl backdrop-blur-md"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 transition duration-300 group-hover:opacity-100`} />
              <div className="relative z-10 space-y-4">
                <p className="text-xs font-semibold tracking-[0.25em] text-cyan-200">{domain.icon}</p>
                <h3 className="text-xl font-semibold text-white">{domain.title}</h3>
                <p className="text-sm text-slate-300">{domain.description}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-300 group-hover:ring-cyan-300/45" />
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DomainsSection
