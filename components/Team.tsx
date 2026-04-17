"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "Prof. Bikash Bepari",
    role: "Dean",
    department: "Student Welfare Committee",
    initials: "BB",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Prof. Dr. Chanchal Kr. De",
    role: "HOD",
    department: "Department of ECE",
    initials: "CD",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Prof. Surajit Mukherjee",
    role: "Faculty Coordinator",
    department: "IETE HIT SF",
    initials: "SM",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Prof. Dibyendu Chowdhury",
    role: "Treasurer",
    department: "IETE HIT SF",
    initials: "DC",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
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
            Executive Body
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Leadership</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            An inspiring faculty and a dedicated team of members guiding IETE HIT Haldia towards excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 text-center hover:glow transition-all duration-300 hover:-translate-y-2">
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform`}
                  >
                    {member.initials}
                  </div>
                  {/* Glow ring on hover */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity`}
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {member.department}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
