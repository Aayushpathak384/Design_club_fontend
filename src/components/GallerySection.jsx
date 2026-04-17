import { motion as Motion } from 'framer-motion'
import { gallery } from '../data/content'
import SectionHeading from './SectionHeading'

function GallerySection() {
  return (
    <section id="gallery" className="px-4 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          badge="Gallery"
          title="Moments from our sessions and showcases"
          description="Snapshots from workshops, technical events, build nights, and collaborative team moments."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <Motion.figure
              key={item.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition duration-500 group-hover:scale-110 ${
                  index % 4 === 0 ? 'h-56 lg:h-64' : 'h-48 lg:h-52'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-70 transition group-hover:opacity-90" />
              <figcaption className="absolute bottom-3 left-3 right-3 rounded-md bg-slate-950/55 px-3 py-2 text-xs text-slate-200 opacity-0 transition group-hover:opacity-100">
                {item.alt}
              </figcaption>
            </Motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
