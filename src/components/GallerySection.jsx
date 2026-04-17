import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

function GallerySection() {
  const sourceGalleryImages = [
    'https://iete-frontend.onrender.com/gallery/2020-2024/1.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/2.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/3.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/4.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/5.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/6.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/7.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/8.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/9.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/10.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/12.jpg',
    'https://iete-frontend.onrender.com/gallery/2020-2024/13.jpg',
  ]

  const galleryGroups = {
    '2020–2024': [
      { src: sourceGalleryImages[0], alt: 'IETE gallery memory from 2020–2024' },
      { src: sourceGalleryImages[1], alt: 'IETE gallery memory from 2020–2024' },
      { src: sourceGalleryImages[2], alt: 'IETE gallery memory from 2020–2024' },
      { src: sourceGalleryImages[3], alt: 'IETE gallery memory from 2020–2024' },
    ],
    '2021–2025': [
      { src: sourceGalleryImages[4], alt: 'IETE gallery memory from 2021–2025' },
      { src: sourceGalleryImages[5], alt: 'IETE gallery memory from 2021–2025' },
      { src: sourceGalleryImages[6], alt: 'IETE gallery memory from 2021–2025' },
      { src: sourceGalleryImages[7], alt: 'IETE gallery memory from 2021–2025' },
    ],
    '2022–2026': [
      { src: sourceGalleryImages[8], alt: 'IETE gallery memory from 2022–2026' },
      { src: sourceGalleryImages[9], alt: 'IETE gallery memory from 2022–2026' },
      { src: sourceGalleryImages[10], alt: 'IETE gallery memory from 2022–2026' },
      { src: sourceGalleryImages[11], alt: 'IETE gallery memory from 2022–2026' },
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
