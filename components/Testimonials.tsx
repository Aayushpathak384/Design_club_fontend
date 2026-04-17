"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "IETE gave me the platform to explore my passion for AI. The workshops and mentorship helped me land my dream internship at Google.",
    name: "Priya Sharma",
    role: "ML Engineer @ Google",
    avatar: "PS",
  },
  {
    quote:
      "The hackathons organized by IETE were game-changers. I met my co-founders here and we are now building our startup.",
    name: "Rahul Verma",
    role: "Founder, TechStart",
    avatar: "RV",
  },
  {
    quote:
      "From a complete beginner to a full-stack developer - IETE's community and resources made this transformation possible.",
    name: "Ananya Gupta",
    role: "SDE @ Microsoft",
    avatar: "AG",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-accent mb-4">
            Community
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Members Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            Hear from our alumni and current members about their journey with IETE.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 hover:glow transition-all duration-300 hover:-translate-y-1 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Quote Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 pt-8">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
