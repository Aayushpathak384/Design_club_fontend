import { upcomingEvent, pastEvents } from '../data/content'
import SectionHeading from './SectionHeading'
import GlassCard from './GlassCard'
import { motion as Motion } from 'framer-motion'

function EventsSection() {
  return (
    <section id="events" className="px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-14">
        <SectionHeading
          badge="Events"
          title="Experience innovation in action"
          description="From coding competitions to hands-on workshops, join us for events designed to inspire, challenge, and connect."
        />

        {/* Upcoming Event - Featured */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">Upcoming Event</h3>
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="group rounded-3xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/15 via-slate-900/50 to-indigo-500/10 p-8 md:p-10 shadow-[0_0_65px_-28px_rgba(34,211,238,0.6)] backdrop-blur-xl hover:border-cyan-300/50 transition"
          >
            <div className="space-y-6">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <span className="inline-block rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-300 mb-4">
                    {upcomingEvent.tag}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white">{upcomingEvent.name}</h2>
                </div>
                <div className="text-sm font-medium text-slate-300">
                  <p className="text-white font-semibold">{upcomingEvent.date}</p>
                </div>
              </div>

              <p className="text-lg text-slate-200 leading-relaxed max-w-2xl">
                {upcomingEvent.details}
              </p>

              <div className="grid gap-3 md:grid-cols-2 w-fit">
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-slate-400 mb-1">Venue</p>
                  <p className="text-sm font-medium text-white">{upcomingEvent.venue}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs text-slate-400 mb-1">Mode</p>
                  <p className="text-sm font-medium text-white">{upcomingEvent.mode}</p>
                </div>
              </div>

              <button className="mt-4 rounded-xl bg-cyan-300 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-200 hover:-translate-y-0.5 hover:shadow-lg">
                Register Now
              </button>
            </div>
          </Motion.div>
        </div>

        {/* Past Events - Grid */}
        <div className="space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-300">Past Events</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <GlassCard
                key={event.name}
                delay={index * 0.1}
                hoverY={-6}
                className="border-indigo-300/20 bg-gradient-to-b from-slate-900/85 to-slate-950/85"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-full border border-indigo-300/40 bg-indigo-300/10 px-3 py-1 text-xs font-medium text-indigo-200 whitespace-nowrap">
                      {event.tag}
                    </span>
                    <span className="text-xs text-slate-400 text-right">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white leading-tight">{event.name}</h3>
                  <p className="text-sm text-slate-300">{event.details}</p>
                  <div className="flex flex-col gap-2 text-xs text-slate-400 border-t border-white/10 pt-3">
                    <p>📍 {event.venue}</p>
                    <p>🌐 {event.mode}</p>
                  </div>
                  <button className="mt-2 w-full rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-slate-100 transition group-hover:border-indigo-300/60 group-hover:text-indigo-300">
                    Learn More
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
