import {
  FaCode,
  FaLaptopCode,
  FaPalette,
  FaUsers,
  FaRobot,
} from 'react-icons/fa'
import { GiProcessor } from 'react-icons/gi'
import { domains } from '../data/content'
import SectionHeading from './SectionHeading'
import GlassCard from './GlassCard'

const iconMap = {
  code: FaCode,
  workshop: FaLaptopCode,
  events: GiProcessor,
  community: FaUsers,
  design: FaPalette,
  robotics: FaRobot,
}

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
          {domains.map((domain, index) => {
            const Icon = iconMap[domain.icon] || FaCode

            return (
            <GlassCard
              key={domain.title}
              delay={index * 0.08}
              className="group relative overflow-hidden p-5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 transition duration-300 group-hover:opacity-100`} />
              <div className="relative z-10 space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                  <Icon className="text-lg" />
                </div>
                <h3 className="text-xl font-semibold text-white">{domain.title}</h3>
                <p className="text-sm text-slate-300">{domain.description}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-300 group-hover:ring-cyan-300/45" />
            </GlassCard>
          )})}
        </div>
      </div>
    </section>
  )
}

export default DomainsSection
