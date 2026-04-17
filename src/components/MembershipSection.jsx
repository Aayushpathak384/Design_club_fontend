import { motion as Motion } from 'framer-motion'
import { membershipPillars } from '../data/content'
import SectionHeading from './SectionHeading'

function MembershipSection() {
  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          badge="Membership"
          title="Be part of the legacy and shape better technology"
          description="Designed around growth, exposure, and meaningful collaboration opportunities for every member."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {membershipPillars.map((pillar, index) => (
            <Motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-indigo-300/20 bg-gradient-to-br from-slate-900/85 to-slate-950/85 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
              <ul className="mt-4 space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MembershipSection
