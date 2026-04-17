import { motion as Motion } from 'framer-motion'
import { teamMembers } from '../data/content'
import SectionHeading from './SectionHeading'

function TeamSection() {
  return (
    <section id="team" className="px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          badge="Executive Body"
          title="Faculty guidance and a committed leadership team"
          description="An inspiring leadership structure supporting innovation, technical growth, and community building."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-2 text-sm text-cyan-200">{member.role}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
