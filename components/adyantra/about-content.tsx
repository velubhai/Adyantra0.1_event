"use client"

import { motion } from "framer-motion"
import { GraduationCap, Sparkles, MapPin, Users, Calendar, Trophy } from "lucide-react"

export function AboutContent() {
  return (
    <div className="flex flex-col items-center px-4 py-24 md:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
          About Us
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-lg text-muted-foreground">
          Learn more about our institution and the fest
        </p>
      </motion.div>

      <div className="flex w-full max-w-5xl flex-col gap-10">
        {/* About the College */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="absolute left-0 top-0 h-full w-1.5 bg-primary" />
          <div className="p-8 md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                About the College
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Aditya University, located in Surampalem, Andhra Pradesh, is one of the premier educational
              institutions in South India. Established with a vision to provide world-class education, the
              university offers a wide range of undergraduate, postgraduate, and doctoral programs across
              engineering, management, sciences, and humanities. With state-of-the-art infrastructure,
              experienced faculty, and a vibrant campus life, Aditya University has consistently produced
              graduates who excel in their respective fields. The university is committed to fostering innovation,
              research, and holistic development of students.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Surampalem, AP, India
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-3 py-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                10,000+ Students
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Adyantra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="absolute left-0 top-0 h-full w-1.5 bg-accent" />
          <div className="p-8 md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                <Sparkles className="h-7 w-7 text-accent" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                About Adyantra
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Adyantra 1.0 is the flagship technical and cultural festival organized by Aditya University.
              It is a platform that brings together the brightest minds and the most creative souls from
              across the country. From intense coding challenges and paper presentations to electrifying
              cultural performances and thrilling sports competitions, Adyantra has something for everyone.
              The fest aims to ignite innovation, celebrate talent, and build a community of passionate
              individuals who dare to think beyond boundaries. With exciting prizes, renowned judges, and
              a vibrant atmosphere, Adyantra 1.0 promises to be an experience of a lifetime.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-accent/5 px-3 py-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-accent" />
                Season 1
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-accent/5 px-3 py-2 text-sm text-muted-foreground">
                <Trophy className="h-4 w-4 text-accent" />
                20+ Events
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-accent/5 px-3 py-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-accent" />
                6 Categories
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
