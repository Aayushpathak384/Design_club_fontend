import { motion as Motion } from 'framer-motion'
import { testimonials } from '../data/content'
import SectionHeading from './SectionHeading'

function TestimonialsSection() {
  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          badge="Community Voices"
          title="What our members say"
          description="Stories from students who built skills, confidence, and impactful projects with the IETE community."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Motion.blockquote
              key={item.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_45px_-30px_rgba(99,102,241,0.8)] backdrop-blur-lg"
            >
              <p className="text-sm leading-relaxed text-slate-200">“{item.quote}”</p>
              <footer className="mt-5">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-cyan-200">{item.title}</p>
              </footer>
            </Motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
