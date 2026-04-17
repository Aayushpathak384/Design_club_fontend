import { useState } from 'react'
import { motion as Motion } from 'framer-motion'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: (index % 4) + 2,
  x: `${(index * 11) % 100}%`,
  y: `${(index * 13) % 100}%`,
  delay: index * 0.12,
}))

function FloatingCube({ delay, className }) {
  return (
    <Motion.div
      animate={{
        y: [0, -14, 0],
        rotateX: [0, 10, 0],
        rotateY: [0, 18, 0],
      }}
      transition={{
        duration: 5.8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute rounded-2xl border border-white/25 bg-gradient-to-br from-cyan-300/40 to-indigo-500/30 shadow-[0_0_45px_-12px_rgba(79,70,229,0.9)] backdrop-blur-md ${className}`}
    />
  )
}

function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18
    setTilt({ x, y })
  }

  const handlePointerLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 md:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.25),transparent_45%),linear-gradient(130deg,#060911_0%,#0b1330_40%,#04050b_100%)]" />

      <Motion.div
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(120deg, rgba(6,182,212,0.6), rgba(99,102,241,0.35), rgba(168,85,247,0.55))',
          backgroundSize: '180% 180%',
          filter: 'blur(70px)',
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((particle) => (
          <Motion.span
            key={particle.id}
            className="absolute rounded-full bg-cyan-200/70"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.x,
              top: particle.y,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 4 + particle.id * 0.08, repeat: Infinity, delay: particle.delay }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            Community of Builders
          </p>
          <h1 className="font-heading text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Build. Learn. Grow.
          </h1>
          <p className="max-w-2xl text-base text-slate-200/90 sm:text-lg">
            IETE Technical Society at HIT Haldia is where builders, designers, coders, and researchers collaborate on impactful projects, workshops, and innovation-driven events.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#join"
              className="group inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_-10px_rgba(34,211,238,0.9)] transition hover:translate-y-[-2px]"
            >
              Join Us
              <span className="ml-2 transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#events"
              className="inline-flex items-center rounded-xl border border-indigo-300/45 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >
              Explore Events
            </a>
          </div>

          <div className="grid gap-3 pt-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
              <p className="text-2xl font-bold text-white">40+</p>
              <p className="text-xs text-slate-300">Hands-on sessions</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
              <p className="text-2xl font-bold text-white">300+</p>
              <p className="text-xs text-slate-300">Student network</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
              <p className="text-2xl font-bold text-white">60+</p>
              <p className="text-xs text-slate-300">Project outcomes</p>
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto h-[320px] w-[280px] sm:h-[380px] sm:w-[340px]"
          style={{ perspective: '1200px' }}
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
        >
          <FloatingCube delay={0} className="left-0 top-0 h-24 w-24" />
          <FloatingCube delay={0.9} className="right-2 top-20 h-20 w-20" />
          <FloatingCube delay={0.5} className="bottom-8 left-8 h-28 w-28" />

          <Motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/45"
          />

          <Motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/30"
          />

          <Motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ rotateX: tilt.y, rotateY: tilt.x }}
            className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-[2rem] border border-white/20 bg-gradient-to-br from-white/20 to-indigo-400/20 text-center shadow-2xl backdrop-blur-xl"
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-100">IETE</p>
            <p className="mt-1 text-lg font-bold text-white">Future Tech</p>
          </Motion.div>

          <Motion.div
            animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ rotateX: tilt.y * 0.5, rotateY: tilt.x * 0.5 }}
            className="absolute bottom-0 right-0 w-[220px] rounded-2xl border border-cyan-300/30 bg-slate-900/70 p-4 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">This Month</p>
            <p className="mt-2 text-sm font-semibold text-white">HackSprint • AI Build Week • Frontend Forge</p>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  )
}

export default Hero
