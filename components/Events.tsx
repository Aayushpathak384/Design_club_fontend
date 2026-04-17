"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const events = [
  {
    title: "HackFest 2026",
    date: "May 15-16, 2026",
    location: "Main Auditorium",
    attendees: "200+",
    description:
      "48-hour hackathon bringing together the brightest minds to build innovative solutions.",
    type: "Hackathon",
    featured: true,
  },
  {
    title: "Web Dev Bootcamp",
    date: "April 25, 2026",
    location: "Lab 301",
    attendees: "50+",
    description:
      "Intensive workshop covering React, Next.js, and modern web development practices.",
    type: "Workshop",
    featured: false,
  },
  {
    title: "AI/ML Workshop Series",
    date: "May 5, 2026",
    location: "Virtual",
    attendees: "100+",
    description:
      "Learn machine learning fundamentals and build your first neural network from scratch.",
    type: "Workshop",
    featured: false,
  },
  {
    title: "Code Sprint Championship",
    date: "May 20, 2026",
    location: "Computer Center",
    attendees: "150+",
    description:
      "Competitive programming contest with prizes worth $5000 and internship opportunities.",
    type: "Competition",
    featured: true,
  },
];

const typeColors: Record<string, string> = {
  Hackathon: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Workshop: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Competition: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-sm text-accent mb-4">
            Upcoming Events
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Join Our <span className="gradient-text">Events</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-balance">
            From hackathons to workshops, we host events that inspire learning, 
            foster collaboration, and push technical boundaries.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`h-full glass rounded-2xl p-6 hover:glow transition-all duration-300 hover:-translate-y-1 ${
                  event.featured ? "ring-1 ring-primary/30" : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                        typeColors[event.type]
                      }`}
                    >
                      {event.type}
                    </span>
                    {event.featured && (
                      <span className="ml-2 inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary to-accent text-white">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{event.attendees} expected</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 rounded-full glass text-foreground font-semibold hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-2 group">
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
