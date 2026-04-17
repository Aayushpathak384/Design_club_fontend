"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Users, Globe, Award, ArrowRight, Sparkles } from "lucide-react";

const membershipBenefits = [
  {
    title: "Benefits",
    icon: Award,
    color: "from-purple-500 to-pink-500",
    items: [
      "New resources, opportunities and many discounts",
      "Advance your career in the right direction",
      "Chance to participate in various IETE conferences across the globe",
    ],
  },
  {
    title: "Join a Society",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    items: [
      "Stay updated with latest trends in technology",
      "Network with colleagues locally and abroad",
      "Collaborate on research and projects with leading experts",
    ],
  },
  {
    title: "Join IETE",
    icon: Globe,
    color: "from-amber-500 to-orange-500",
    items: [
      "Be a part of the world's largest technology community",
      "Join professionals and experts to shape your career",
      "Acquire new skills and advance your professional development",
    ],
  },
];

export default function Membership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="membership" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-bg opacity-30" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-accent mb-4">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Membership
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Come, Be a Part of the <span className="gradient-text">Legacy</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            Join IETE and make technology better! Unlock exclusive benefits, resources, and opportunities for growth.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {membershipBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 hover:glow transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>

                {/* Items */}
                <ul className="relative space-y-3">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            Join IETE Today
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
