"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import Logo from "../datas/adtylogo.png"
import {
  Calendar,
  Users,
  Trophy,
  CheckCircle2,
  Star,
  Gift,
  Award,
  BadgeIndianRupee,
} from "lucide-react"
import { adyantraEvents, homeContent } from "@/data/adyantra-events"
import { EventCard } from "./event-card"

const stats = [
  { icon: Calendar, label: "Events", value: "20+" },
  { icon: Users, label: "Participants", value: "500+" },
  { icon: Trophy, label: "Prizes Worth", value: "30K+" },
]

const highlightIcons = [BadgeIndianRupee, Gift, Award]

export function HomeContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center gap-6 overflow-hidden px-4 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative z-10"
        >
          <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                <Image 
            src={Logo} 
            alt="Adyantra Logo" 
            width={250} 
            height={100} 
            className="object-contain"
            priority // Ensures the logo loads immediately
          />
          </div>
        </motion.div>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 font-heading text-5xl font-bold tracking-tight text-foreground md:text-7xl"
        >
          <span className="text-balance">Adyantra 1.0</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative z-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Where technology meets creativity. Join us for an unforgettable fest of innovation, art, and competition.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-heading text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Highlight Points
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            What makes Adyantra 1.0 unmissable
          </p>
        </motion.div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {homeContent.highlights.map((highlight, i) => {
            const Icon = highlightIcons[i] || Star
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center gap-4 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/20">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <p className="font-heading text-lg font-bold text-foreground">{highlight}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* General Instructions */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            General Instructions
          </h2>
          <ul className="mt-6 flex flex-col gap-4">
            {homeContent.instructions.map((instruction, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{instruction}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            About Adyantra
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Adyantra 1.0 is the flagship technical and cultural festival organized by Aditya University.
            Bringing together the brightest minds and most creative souls, Adyantra features a wide range
            of events spanning paper presentations, management challenges, cultural performances, tech competitions,
            media events, and sports. Whether you are a tech enthusiast or a creative spirit, there is something for everyone.
          </p>
        </motion.div>
      </section>

      {/* Events */}
      <section id="events" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Events
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Explore our exciting lineup across 6 categories
          </p>
        </motion.div>

        {adyantraEvents.map((category) => (
          <div key={category.id} className="mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-1 w-8 rounded-full bg-primary" />
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.events.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  categoryId={category.id}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
