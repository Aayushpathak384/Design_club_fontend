import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

function GallerySection() {
  const galleryGroups = {
    '2020–2024': [
      { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80', alt: 'Workshop discussion with students' },
      { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80', alt: 'Team coding together on laptops' },
      { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', alt: 'Electronics and robotics setup' },
      { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80', alt: 'Presentation on a whiteboard' },
    ],
    '2021–2025': [
      { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80', alt: 'Hackathon team planning session' },
      { src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80', alt: 'Laptop and notes during build night' },
      { src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80', alt: 'Student collaboration in a workshop' },
      { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80', alt: 'Pair programming on a technical project' },
    ],
    '2022–2026': [
      { src: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1200&q=80', alt: 'Modern collaborative workspace' },
      { src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80', alt: 'Code review and planning board' },
      { src: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80', alt: 'Dark themed code display' },
      { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80', alt: 'Team brainstorming at a table' },
    ],
  }

  const galleryTabs = Object.keys(galleryGroups)
  const [activeTab, setActiveTab] = useState(galleryTabs[0])
  const [lightboxImage, setLightboxImage] = useState(null)

  const activeImages = galleryGroups[activeTab]

  return (
    <section id="gallery" className="px-4 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          badge="Gallery"
          title="Moments from our sessions and showcases"
          description="Explore organized highlights from different batches and event timelines. Tap any image to view it full size."
        />

        <div className="flex flex-wrap gap-3">
          {galleryTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
                activeTab === tab
                  ? 'border-cyan-300/60 bg-cyan-300/10 text-cyan-200 shadow-[0_0_18px_-8px_rgba(34,211,238,0.7)]'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <Motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 gap-4 lg:grid-cols-3"
          >
            {activeImages.map((item, index) => (
              <Motion.button
                key={item.src}
                type="button"
                onClick={() => setLightboxImage(item)}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover transition duration-500 group-hover:scale-110 ${
                    index % 3 === 0 ? 'h-56 lg:h-72' : 'h-48 lg:h-60'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent opacity-75 transition group-hover:opacity-95" />
                <figcaption className="absolute bottom-3 left-3 right-3 rounded-md bg-slate-950/55 px-3 py-2 text-xs text-slate-200 opacity-0 transition group-hover:opacity-100">
                  {item.alt}
                </figcaption>
              </Motion.button>
            ))}
          </Motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {lightboxImage ? (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 px-4 py-8 backdrop-blur-lg"
              onClick={() => setLightboxImage(null)}
            >
              <Motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-sm text-white transition hover:bg-slate-800"
                >
                  Close
                </button>
                <img src={lightboxImage.src} alt={lightboxImage.alt} className="max-h-[75vh] w-full object-cover" />
                <div className="border-t border-white/10 p-4 text-sm text-slate-200">
                  {lightboxImage.alt}
                </div>
              </Motion.div>
            </Motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default GallerySection
