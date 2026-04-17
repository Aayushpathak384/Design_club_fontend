import { testimonials } from '../data/content'
import { motion as Motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import GlassCard from './GlassCard'

function TestimonialsSection() {
  const avatarColors = ['from-cyan-400 to-cyan-600', 'from-indigo-400 to-indigo-600', 'from-purple-400 to-purple-600']

  return (
    <section id="testimonials" className="px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          badge="Community Voices"
          title="What our members say"
          description="Real stories from students who built skills, launched projects, and found their community through IETE. Hear from members about their journey and impact."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <GlassCard
              key={item.name}
              as="blockquote"
              delay={index * 0.1}
              hoverY={-6}
              className="border-indigo-300/20 bg-gradient-to-b from-slate-900/85 to-slate-950/85 p-7 flex flex-col"
            >
              {/* Quote */}
              <div className="flex-1 mb-6">
                <p className="text-base leading-relaxed text-slate-100 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                {/* Avatar */}
                <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-lg font-bold text-white">
                    {item.name[0]}
                  </span>
                </div>

                {/* Name and Title */}
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">{item.name}</p>
                  <p className="text-xs text-indigo-300 font-medium">{item.title}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Engagement CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-slate-300 mb-4">
            Inspired? Join our community and build your own success story.
          </p>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 hover:-translate-y-0.5"
          >
            Join IETE HIT SF Today
          </a>
        </Motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
