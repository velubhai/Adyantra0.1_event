"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  MapPin,
  User,
  Phone,
  ExternalLink,
} from "lucide-react"
import type { EventItem } from "@/data/adyantra-events"
import { RulesScroll } from "./rules-scroll"

interface EventDetailsProps {
  event: EventItem
  categoryId: string
  categoryTitle: string
}

export function EventDetails({ event, categoryId, categoryTitle }: EventDetailsProps) {
  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Hero Image */}
      <div className="relative h-64 w-full overflow-hidden md:h-96">
        <Image
          src={event.image}
          alt={event.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Back button */}
        <div className="absolute left-4 top-4 z-10 md:left-6 md:top-6">
          <Link
            href="/adyantra/home#events"
            className="flex items-center gap-2 rounded-lg border border-foreground/20 bg-background/50 px-3 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-background/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </div>

        {/* Event title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-6 md:px-8 md:pb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-2 text-sm font-medium uppercase tracking-wider text-primary"
          >
            {categoryTitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl font-bold text-foreground md:text-5xl"
          >
            {event.name}
          </motion.h1>
          {event.slogan && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2 font-serif text-lg italic text-primary/90"
            >
              {`"${event.slogan}"`}
            </motion.p>
          )}
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <h2 className="mb-4 font-heading text-xl font-bold text-foreground">
                About this Event
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </motion.div>

            {/* Rules Scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <RulesScroll rules={event.rules} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Event Info Card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
                Event Details
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Venue</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{event.venue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinator Card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-heading text-lg font-bold text-foreground">
                Coordinator
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{event.coordinator.name}</p>
                  </div>
                </div>
                <a
                  href={`tel:${event.coordinator.contact}`}
                  className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-foreground/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-primary">{event.coordinator.contact}</span>
                </a>
              </div>
            </div>

            {/* Register Button */}
            {event.googleFormLink ? (
              <a
                href={event.googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <ExternalLink className="h-4 w-4" />
                Register for this Event
              </a>
            ) : (
              <div className="flex items-center justify-center rounded-xl border border-border bg-muted px-6 py-3.5 text-sm font-medium text-muted-foreground">
                Registration link coming soon
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
