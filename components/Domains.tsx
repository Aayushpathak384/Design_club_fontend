"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Brain,
  Trophy,
  Palette,
  Smartphone,
  Database,
  Shield,
  Cloud,
} from "lucide-react";

const domains = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Build modern, responsive websites and web applications using React, Next.js, and cutting-edge technologies.",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    glowColor: "hover:shadow-blue-500/20",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Explore artificial intelligence, deep learning, and build intelligent systems that solve real-world problems.",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    glowColor: "hover:shadow-purple-500/20",
  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description:
      "Sharpen problem-solving skills, master algorithms, and compete in national and international coding contests.",
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/30",
    glowColor: "hover:shadow-amber-500/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create stunning user interfaces and seamless user experiences using Figma, Adobe XD, and design principles.",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/30",
    glowColor: "hover:shadow-pink-500/20",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Build cross-platform mobile applications using React Native, Flutter, and native development tools.",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
    glowColor: "hover:shadow-green-500/20",
  },
  {
    icon: Database,
    title: "Data Science",
    description:
      "Analyze large datasets, build predictive models, and extract meaningful insights using Python and R.",
    color: "from-indigo-500 to-violet-500",
    borderColor: "border-indigo-500/30",
    glowColor: "hover:shadow-indigo-500/20",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Learn ethical hacking, network security, and protect systems from cyber threats and vulnerabilities.",
    color: "from-red-500 to-orange-500",
    borderColor: "border-red-500/30",
    glowColor: "hover:shadow-red-500/20",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Master cloud platforms like AWS and Azure, and implement CI/CD pipelines for seamless deployment.",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/30",
    glowColor: "hover:shadow-cyan-500/20",
  },
];

export default function Domains() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="domains" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-accent mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Explore Our <span className="gradient-text">Domains</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            Dive into various technical domains and find your passion. Our specialized 
            teams guide you through hands-on learning experiences.
          </p>
        </motion.div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`h-full glass rounded-2xl p-6 border ${domain.borderColor} hover:shadow-2xl ${domain.glowColor} transition-all duration-500 hover:-translate-y-2 relative overflow-hidden`}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <domain.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-semibold text-foreground mb-2 group-hover:text-white transition-colors">
                  {domain.title}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                  {domain.description}
                </p>

                {/* Arrow indicator */}
                <div className="relative mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
