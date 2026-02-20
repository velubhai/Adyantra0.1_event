"use client"

import { useState, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useIntro } from "@/context/intro-context"
import { GraduationCap, Sparkles } from "lucide-react"
import Image from "next/image";
import Logo from "./datas/adtylogo.png"

type GatewayState = "choosing" | "playing-video" | "showing-logo"

export function Gateway() {
  const [state, setState] = useState<GatewayState>("choosing")
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()
  const { hasPlayed, setHasPlayed } = useIntro()

  const handleConferenceClick = () => {
    // Navigate to conference page (placeholder)
    router.push("/conference")
  }

  const handleAdyantraClick = useCallback(() => {
    if (hasPlayed) {
      router.push("/adyantra/home")
      return
    }
    setState("playing-video")
  }, [hasPlayed, router])

  const handleVideoEnd = () => {
    setState("showing-logo")
    setHasPlayed(true)
    setTimeout(() => {
      router.push("/adyantra/home")
    }, 2000)
  }

  const handleSkipVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setState("showing-logo")
    setHasPlayed(true)
    setTimeout(() => {
      router.push("/adyantra/home")
    }, 1500)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        {state === "choosing" && (
          <motion.div
            key="gateway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-screen flex-col md:flex-row"
          >
            {/* Conference Side */}
            <button
              onClick={handleConferenceClick}
              className="group relative flex flex-1 cursor-pointer flex-col items-center justify-center gap-6 border-b border-border p-8 transition-all duration-500 hover:bg-secondary md:border-b-0 md:border-r"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-primary/20">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative z-10 text-center"
              >
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  International Conference
                </h2>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Explore cutting-edge research and academic presentations
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="relative z-10 mt-4 rounded-lg border border-primary/20 bg-primary/10 px-6 py-2 text-sm font-medium text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
              >
                Enter Conference
              </motion.div>
            </button>

            {/* Divider */}
            <div className="relative hidden items-center md:flex">
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  or
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center py-2 md:hidden">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                or
              </span>
            </div>

            {/* Adyantra Side */}
            <button
              onClick={handleAdyantraClick}
              className="group relative flex flex-1 cursor-pointer flex-col items-center justify-center gap-6 p-8 transition-all duration-500 hover:bg-secondary"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-accent/30 bg-accent/10 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/20">
                <Image  src={Logo}  alt="Adyantra Logo" width={100} height={100}  className="object-contain p-1"  />
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative z-10 text-center"
              >
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Adyantra 1.0
                </h2>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Dive into the ultimate tech and cultural fest experience
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="relative z-10 mt-4 rounded-lg border border-accent/20 bg-accent/10 px-6 py-2 text-sm font-medium text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground"
              >
                Enter Adyantra
              </motion.div>
            </button>
          </motion.div>
        )}

        {state === "playing-video" && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <video
              ref={videoRef}
              src="/assets/intro.mp4"
              autoPlay
              playsInline
              onEnded={handleVideoEnd}
              onError={handleSkipVideo}
              className="h-full w-full object-cover"
            />
            <button
              onClick={handleSkipVideo}
              className="absolute bottom-8 right-8 z-10 rounded-lg border border-foreground/20 bg-background/50 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/10"
            >
              Skip Intro
            </button>
          </motion.div>
        )}

        {state === "showing-logo" && (
          <motion.div
            key="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-background"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image  src={Logo}  alt="Adyantra Logo" width={100} height={100}  className="object-contain p-1"  />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-heading text-5xl font-bold tracking-tight text-foreground"
            >
              Adyantra 1.0
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
