"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "Empowering students with cutting-edge technical skills and real-world experience.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a vibrant community of learners, creators, and innovators.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Fostering creativity and innovation through hands-on projects and workshops.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Preparing members for successful careers in technology and beyond.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-accent mb-4">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Who <span className="gradient-text">We Are</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-balance">
            IETE Technical Society is a student-driven organization dedicated to fostering 
            technical excellence, innovation, and collaboration. We bridge the gap between 
            academic learning and industry requirements through workshops, hackathons, 
            coding competitions, and project-based learning.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 hover:glow transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Shaping the <span className="gradient-text">Future</span> of Tech
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since our inception, we have been at the forefront of technical education 
                and innovation. Our members have gone on to work at top tech companies, 
                launch successful startups, and make significant contributions to the 
                open-source community.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Web Development", "AI/ML", "Competitive Programming", "Design"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Years of Excellence" },
                { value: "100+", label: "Alumni Network" },
                { value: "30+", label: "Industry Partners" },
                { value: "50+", label: "Annual Events" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-background/50"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
