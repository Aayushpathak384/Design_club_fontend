import { motion as Motion } from 'framer-motion'
import { facultyMembers } from '../data/content'
import SectionHeading from './SectionHeading'
import GlassCard from './GlassCard'

function FacultySection() {
  return (
    <section id="faculty" className="px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          badge="Faculty Leadership"
          title="Experienced educators guiding innovation"
          description="Our faculty coordinators bring decades of expertise, nurturing the next generation of engineers and tech leaders."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facultyMembers.map((member, index) => (
            <GlassCard
              key={member.name}
              delay={index * 0.08}
              hoverY={-8}
              className="border-cyan-300/20 bg-gradient-to-b from-slate-900/85 to-slate-950/85 overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-2xl group">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-3 text-sm text-cyan-200 font-medium">{member.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FacultySection
