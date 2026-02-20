"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Handshake } from "lucide-react"
import { sponsorTiers, type SponsorTier } from "@/data/sponsors"

function TierSection({ tier, index }: { tier: SponsorTier; index: number }) {
  const hasSponsors = tier.sponsors.length > 0

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Tier heading */}
      <div className="flex items-center gap-3">
        <div className="h-1 w-8 rounded-full bg-primary" />
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
          {tier.title}
        </h2>
      </div>

      {hasSponsors ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {tier.sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="flex h-28 w-40 items-center justify-center rounded-xl border border-border bg-card p-4 transition-colors group-hover:border-primary/30 group-hover:bg-card/80 md:h-32 md:w-48">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={100}
                  className="max-h-20 w-auto object-contain md:max-h-24"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="mt-8 flex items-center justify-center rounded-xl border border-dashed border-border bg-card/40 p-12">
          <p className="text-sm text-muted-foreground">Coming soon</p>
        </div>
      )}
    </motion.section>
  )
}

export function SponsorsContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center gap-4 overflow-hidden px-4 pb-12 pt-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative z-10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
            <Handshake className="h-8 w-8 text-primary" />
          </div>
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative z-10 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl"
        >
          <span className="text-balance">Our Partners</span>
        </motion.h1>
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="relative z-10 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          We are grateful to all our sponsors and partners who make Adyantra 1.0 possible.
        </motion.p>
      </section>

      {/* Sponsor tiers */}
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-12 md:px-6">
        {sponsorTiers.map((tier, i) => (
          <TierSection key={tier.id} tier={tier} index={i} />
        ))}
      </section>
    </div>
  )
}
