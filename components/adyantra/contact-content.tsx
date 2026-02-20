"use client"

import { motion } from "framer-motion"
import { User, Phone, BookOpen } from "lucide-react"

interface Coordinator {
  name: string
  branch: string
  phone: string
}

const coordinators: Coordinator[] = [
  { name: "Name", branch: "Branch", phone: "Ph.no" },
  { name: "Name", branch: "Branch", phone: "Ph.no" },
  { name: "Name", branch: "Branch", phone: "Ph.no" },
  { name: "Name", branch: "Branch", phone: "Ph.no" },
  { name: "Name", branch: "Branch", phone: "Ph.no" },
]

export function ContactContent() {
  return (
    <div className="flex flex-col items-center px-4 py-24 md:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-lg text-muted-foreground">
          Get in touch with our student coordinators
        </p>
      </motion.div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mb-8 flex items-center gap-3"
      >
        <div className="h-1 w-8 rounded-full bg-accent" />
        <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-accent">
          Overall Student Co-ordinators
        </h2>
        <div className="h-1 w-8 rounded-full bg-accent" />
      </motion.div>

      {/* Coordinator Cards */}
      <div className="grid w-full max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {coordinators.map((coordinator, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            className="group flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Avatar */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20 transition-colors group-hover:bg-primary/20">
              <User className="h-8 w-8 text-primary" />
            </div>

            {/* Name */}
            <h3 className="font-heading text-lg font-bold text-foreground">
              {coordinator.name}
            </h3>

            {/* Details */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary/60" />
                <span>{coordinator.branch}</span>
              </div>
              <a
                href={`tel:${coordinator.phone}`}
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary/60" />
                <span>{coordinator.phone}</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
