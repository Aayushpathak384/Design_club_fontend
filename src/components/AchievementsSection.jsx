import { useEffect, useMemo, useState } from 'react'
import { achievements } from '../data/content'
import SectionHeading from './SectionHeading'
import GlassCard from './GlassCard'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1200
    const stepTime = Math.max(20, Math.floor(duration / target))

    const timer = setInterval(() => {
      start += Math.ceil(target / 40)
      if (start >= target) {
        start = target
        clearInterval(timer)
      }
      setCount(start)
    }, stepTime)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="font-heading text-4xl font-bold text-white md:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

function AchievementsSection() {
  const items = useMemo(() => achievements, [])

  return (
    <section id="highlights" className="px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          badge="Highlights"
          title="Our impact in numbers"
          description="A snapshot of our growing technical community and the outcomes we build together."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <GlassCard
              key={item.label}
              delay={index * 0.08}
              className="group border-cyan-300/20 p-5 shadow-[0_20px_45px_-28px_rgba(34,211,238,0.8)]"
            >
              <Counter target={item.value} suffix={item.suffix} />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.label}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-cyan-300/50 via-indigo-300/20 to-transparent" />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
