import { motion as Motion } from 'framer-motion'
import { teamMembers } from '../data/content'
import SectionHeading from './SectionHeading'
import GlassCard from './GlassCard'

function TeamSection() {
  return (
    <section id="team" className="px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          badge="Our Team"
          title="Meet the builders behind IETE HIT SF"
          description="A diverse group of developers, designers, and leaders working together to create an amazing community experience."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <GlassCard
              key={member.name}
              delay={index * 0.08}
              hoverY={-8}
              className="border-indigo-300/20 bg-gradient-to-b from-slate-900/85 to-slate-950/85 overflow-hidden group"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-indigo-300">{member.role}</p>
                <p className="mt-2 text-xs text-slate-400">ECE • {member.department}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
