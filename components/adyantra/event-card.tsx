"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import type { EventItem } from "@/data/adyantra-events"

interface EventCardProps {
  event: EventItem
  categoryId: string
  index: number
}

export function EventCard({ event, categoryId, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/adyantra/events/${categoryId}/${event.id}`}
        className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {event.name}
          </h3>
          {event.slogan && (
            <p className="font-serif text-sm italic text-primary">
              {`"${event.slogan}"`}
            </p>
          )}
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {event.description}
          </p>
          <div className="mt-auto flex flex-col gap-2 pt-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{event.venue}</span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
            View Details
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
