import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function AdyantraFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                Adyantra 1.0
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The premier tech and cultural festival by Aditya Institute of Management Science and Research. Innovation meets creativity.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:adyantra@aditya.ac.in" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4" />
                adyantra@aditya.ac.in
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
               https://maps.google.com/maps?q=11.9225125%2C79.7317496&z=17&hl=en
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Socials
            </h3>
            <div className="flex flex-col gap-2.5">
              <a href="https://www.instagram.com/theadityainstitute?igsh=MWpiOGNhbWVjN3IwMw==" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a href="https://www.facebook.com/share/1Fcr51orga/" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-4 w-4" />
                 Facebook
              </a>
              <a href="https://www.linkedin.com/company/aditya-institute-of-management-science-and-research/" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Developers */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Developers
            </h3>
            <div className="flex flex-col gap-2.5">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Github className="h-4 w-4" />
                Built with passion by the Adyantra Dev Team
              </span>
              <Link
                href="/"
                className="text-sm text-primary transition-colors hover:text-primary/80"
              >
                Back to Gateway
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {'Adyantra 1.0 | Aditya Institute of Management Science and Research. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
