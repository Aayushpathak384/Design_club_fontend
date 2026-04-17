import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import GlassCard from './GlassCard'

function TeamSection() {
  const [activeFilter, setActiveFilter] = useState('Leads')

  const membersByGroup = {
    Core: [
      { name: 'Aayush Pathak', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Priya Sharma', role: 'Design Lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rohit Kumar', role: 'Technical Lead', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80' },
      { name: 'Akshara Verma', role: 'Community Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80' },
    ],
    Leads: [
      { name: 'Arjun Singh', role: 'Frontend Lead', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Maya Patel', role: 'AI/ML Lead', image: 'https://images.unsplash.com/photo-1507599912169-403928601894?auto=format&fit=crop&w=800&q=80' },
      { name: 'Sneha Das', role: 'Events Coordinator', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80' },
      { name: 'Tushar Ghosh', role: 'Robotics Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80' },
    ],
    Members: [
      { name: 'Nikhil Roy', role: 'Web Team Member', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Sanjana Roy', role: 'AI/ML Member', image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ritvik Ghosh', role: 'CP Member', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80' },
      { name: 'Anushka Sen', role: 'Frontend Member', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80' },
    ],
  }

  const filterOptions = ['All', 'Core', 'Leads', 'Members']

  const visibleMembers =
    activeFilter === 'All'
      ? [...membersByGroup.Core, ...membersByGroup.Leads, ...membersByGroup.Members].map((member) => ({
        ...member,
        group: membersByGroup.Core.includes(member)
          ? 'Core'
          : membersByGroup.Leads.includes(member)
            ? 'Leads'
            : 'Members',
      }))
      : membersByGroup[activeFilter].map((member) => ({ ...member, group: activeFilter }))

  return (
    <section id="team" className="px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          badge="Our Team"
          title="Our Team – Meet the builders behind IETE HIT SF"
          description="A large, active team organized across core leadership, domain leads, and members working together to build a real community experience."
        />

        <div className="flex flex-wrap gap-3">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
                activeFilter === option
                  ? 'border-cyan-300/60 bg-cyan-300/10 text-cyan-200 shadow-[0_0_18px_-8px_rgba(34,211,238,0.7)]'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <Motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visibleMembers.map((member, index) => (
              <GlassCard
                key={`${activeFilter}-${member.name}`}
                delay={index * 0.06}
                hoverY={-10}
                className="group overflow-hidden border-indigo-300/20 bg-gradient-to-b from-slate-900/85 to-slate-950/85"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent transition group-hover:from-slate-950/85" />
                </div>
                <div className="p-6">
                  <div className="mb-3 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {member.group}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-indigo-300">{member.role}</p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-300/40 via-indigo-300/20 to-transparent" />
                </div>
              </GlassCard>
            ))}
          </Motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TeamSection
