"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "HackFest 2025",
    category: "Hackathon",
    placeholder: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
  },
  {
    id: 2,
    title: "Tech Talk Series",
    category: "Workshop",
    placeholder: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
  },
  {
    id: 3,
    title: "Annual Fest",
    category: "Event",
    placeholder: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  },
  {
    id: 4,
    title: "Code Sprint",
    category: "Competition",
    placeholder: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
  },
  {
    id: 5,
    title: "Team Building",
    category: "Social",
    placeholder: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  },
  {
    id: 6,
    title: "Workshop Day",
    category: "Workshop",
    placeholder: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-accent mb-4">
            Memories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            Capturing moments of learning, collaboration, and celebration from our events and activities.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
            >
              <div
                className={`w-full ${
                  index === 0 || index === 3 ? "h-full min-h-[300px] lg:min-h-[400px]" : "h-48 lg:h-56"
                }`}
                style={{ background: image.placeholder }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>

              {/* Hover Scale Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 rounded-full glass text-foreground font-semibold hover:bg-primary/10 transition-all duration-300">
            View Full Gallery
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-primary/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 p-2 rounded-full glass hover:bg-primary/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <motion.div
            key={selectedImage}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full h-[60vh] rounded-2xl"
              style={{ background: galleryImages[selectedImage].placeholder }}
            />
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary mb-2">
                {galleryImages[selectedImage].category}
              </span>
              <h3 className="text-2xl font-bold text-foreground">
                {galleryImages[selectedImage].title}
              </h3>
            </div>
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 p-2 rounded-full glass hover:bg-primary/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </section>
  );
}
