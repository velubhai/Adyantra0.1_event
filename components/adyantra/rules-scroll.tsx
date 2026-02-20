"use client"

import { motion } from "framer-motion"

interface RulesScrollProps {
  rules: string[]
  title?: string
}

export function RulesScroll({ rules, title = "Royal Decree (Rules)" }: RulesScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ rotate: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto w-full max-w-2xl"
    >
      {/* Scroll top edge decoration */}
      <div className="relative z-10 mx-4 h-4 rounded-t-lg bg-[#c9a96e] shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#b8943f]/40" />
      </div>

      {/* Main parchment body */}
      <div className="relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Parchment background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/parchment-texture.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay for consistent color */}
        <div className="absolute inset-0 z-0 bg-[#f4e4bc]/60" />

        {/* Burnt/aged edges effect */}
        <div className="absolute inset-0 z-0 shadow-[inset_0_0_60px_rgba(139,90,43,0.3)]" />

        {/* Content */}
        <div className="relative z-10 px-8 py-10 md:px-12 md:py-14">
          {/* Title with ornamental border */}
          <div className="mb-8 border-b-2 border-[#8B5A2B]/30 pb-4 text-center">
            <p className="mb-2 font-serif text-xs uppercase tracking-[0.3em] text-[#8B5A2B]/60">
              Hereby Proclaimed
            </p>
            <h3 className="font-serif text-2xl font-bold text-[#3d2b1f] md:text-3xl">
              {title}
            </h3>
            {/* Decorative flourish */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-[#8B5A2B]/30" />
              <div className="h-2 w-2 rotate-45 border border-[#8B5A2B]/40 bg-[#8B5A2B]/20" />
              <div className="h-px w-12 bg-[#8B5A2B]/30" />
            </div>
          </div>

          {/* Rules list */}
          <ol className="flex flex-col gap-4">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="flex items-start gap-3 font-serif text-base leading-relaxed text-[#3d2b1f] md:text-lg"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8B5A2B]/30 bg-[#8B5A2B]/10 font-serif text-sm font-bold text-[#5c3d2e]">
                  {index + 1}
                </span>
                <span className="font-medium">{rule}</span>
              </li>
            ))}
          </ol>

          {/* Royal seal */}
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#8B0000] bg-[#B22222] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
              <span className="font-serif text-[10px] font-bold uppercase tracking-wider text-[#ffd700]">
                SEAL
              </span>
            </div>
            <p className="font-serif text-xs italic text-[#8B5A2B]/60">
              By Royal Authority of the Organizing Committee
            </p>
          </div>
        </div>
      </div>

      {/* Scroll bottom edge decoration */}
      <div className="relative z-10 mx-4 h-4 rounded-b-lg bg-[#c9a96e] shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#b8943f]/40" />
      </div>
    </motion.div>
  )
}
