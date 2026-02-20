"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export function RegistrationFab() {
  return (
    <motion.a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:scale-105 active:scale-95"
      aria-label="General Registration"
    >
      <ExternalLink className="h-4 w-4" />
      <span className="hidden sm:inline">General Registration</span>
      <span className="sm:hidden">Register</span>
    </motion.a>
  )
}
