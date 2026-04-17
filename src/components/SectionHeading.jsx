import { motion as Motion } from 'framer-motion'

function SectionHeading({ badge, title, description, align = 'left' }) {
  const center = align === 'center'

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={center ? 'mx-auto max-w-3xl space-y-3 text-center' : 'max-w-3xl space-y-3'}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{badge}</p>
      <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {description ? <p className="text-slate-300">{description}</p> : null}
    </Motion.div>
  )
}

export default SectionHeading
