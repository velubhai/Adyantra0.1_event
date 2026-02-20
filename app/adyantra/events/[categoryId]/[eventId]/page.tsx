import { notFound } from "next/navigation"
import { adyantraEvents, getEventById, getCategoryById } from "@/data/adyantra-events"
import { EventDetailsWrapper } from "./event-details-wrapper"

interface EventPageProps {
  params: Promise<{
    categoryId: string
    eventId: string
  }>
}

export async function generateStaticParams() {
  return adyantraEvents.flatMap((category) =>
    category.events.map((event) => ({
      categoryId: category.id,
      eventId: event.id,
    }))
  )
}

export async function generateMetadata({ params }: EventPageProps) {
  const { categoryId, eventId } = await params
  const event = getEventById(categoryId, eventId)

  if (!event) {
    return { title: "Event Not Found | Adyantra 1.0" }
  }

  return {
    title: `${event.name} | Adyantra 1.0`,
    description: event.description,
  }
}

export default async function EventDetailsPage({ params }: EventPageProps) {
  const { categoryId, eventId } = await params
  const event = getEventById(categoryId, eventId)
  const category = getCategoryById(categoryId)

  if (!event || !category) {
    notFound()
  }

  return (
    <EventDetailsWrapper
      event={event}
      categoryId={categoryId}
      categoryTitle={category.title}
    />
  )
}
