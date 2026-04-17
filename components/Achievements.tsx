"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Calendar, Users, Code, Award, Star } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: 50,
    suffix: "+",
    label: "Events Conducted",
    description: "Workshops, hackathons, and competitions",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Active Members",
    description: "Growing community of tech enthusiasts",
  },
  {
    icon: Code,
    value: 25,
    suffix: "+",
    label: "Projects Built",
    description: "Open source and industry projects",
  },
  {
    icon: Award,
    value: 30,
    suffix: "+",
    label: "Awards Won",
    description: "National and international recognition",
  },
];

const achievements = [
  {
    title: "Smart India Hackathon Winners",
    year: "2025",
    description: "Our team secured 1st place in the national-level hackathon.",
  },
  {
    title: "ICPC Regional Qualifiers",
    year: "2025",
    description: "Multiple teams qualified for ACM ICPC Asia Regional.",
  },
  {
    title: "Google Summer of Code",
    year: "2025",
    description: "5 members selected for GSoC contributing to major open source projects.",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-bg opacity-50" />
      <div className="absolute inset-0 grid-pattern" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-accent mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Highlights</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            Celebrating our milestones and the incredible accomplishments of our community members.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 text-center hover:glow transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-sm font-medium text-foreground mt-2">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Recent Achievements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative pl-6 border-l-2 border-primary/30"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                <span className="text-xs font-medium text-accent">{achievement.year}</span>
                <h4 className="text-lg font-semibold text-foreground mt-1">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
