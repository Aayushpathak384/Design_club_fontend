import { motion as Motion } from 'framer-motion'
import { events } from '../data/content'
import SectionHeading from './SectionHeading'

function EventsSection() {
  return (
    <section id="events" className="px-4 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <SectionHeading
            badge="Upcoming Events"
            title="Join the next big build experience"
            description="From coding competitions to deep-dive workshops, our calendar is designed for growth and execution."
          />
          <a href="#contact" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
            Become a participant
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {events.map((event, index) => (
            <Motion.article
              key={event.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-indigo-300/20 bg-gradient-to-b from-slate-900/85 to-slate-950/85 p-6 shadow-[0_20px_45px_-25px_rgba(76,29,149,0.85)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  {event.tag}
                </span>
                <span className="text-xs text-slate-400">{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{event.name}</h3>
              <p className="mt-3 text-sm text-slate-300">{event.details}</p>
              <p className="mt-3 text-xs text-slate-400">Mode: Hybrid • Venue: ECE Seminar Hall</p>
              <button className="mt-6 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition group-hover:border-cyan-300/60 group-hover:text-cyan-200">
                Reserve Spot
              </button>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection
