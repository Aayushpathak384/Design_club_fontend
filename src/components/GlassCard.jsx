import { motion as Motion } from 'framer-motion'

function GlassCard({ as: Tag = 'article', className = '', hoverY = -6, children, delay = 0 }) {
  const MotionTag = Motion[Tag] || Motion.article

  return (
    <MotionTag
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: hoverY }}
      className={`rounded-2xl border border-white/10 bg-slate-900/65 shadow-[0_20px_45px_-30px_rgba(99,102,241,0.8)] backdrop-blur-lg ${className}`}
    >
      {children}
    </MotionTag>
  )
}

export default GlassCard
