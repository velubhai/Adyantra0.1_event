import Link from "next/link"
import { ArrowLeft, GraduationCap } from "lucide-react"

export default function ConferencePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
        <GraduationCap className="h-10 w-10 text-primary" />
      </div>
      <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        International Conference
      </h1>
      <p className="max-w-md text-lg text-muted-foreground">
        Conference details coming soon. Stay tuned for updates on speakers, schedule, and registration.
      </p>
      <Link
        href="/"
        className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Gateway
      </Link>
    </main>
  )
}
