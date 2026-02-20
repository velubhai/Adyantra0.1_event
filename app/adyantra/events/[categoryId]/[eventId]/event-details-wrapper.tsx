"use client"

import { EventDetails } from "@/components/adyantra/event-details"
import type { EventItem } from "@/data/adyantra-events"

interface EventDetailsWrapperProps {
  event: EventItem
  categoryId: string
  categoryTitle: string
}

export function EventDetailsWrapper({ event, categoryId, categoryTitle }: EventDetailsWrapperProps) {
  return (
    <EventDetails
      event={event}
      categoryId={categoryId}
      categoryTitle={categoryTitle}
    />
  )
}
