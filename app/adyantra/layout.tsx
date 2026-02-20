import { IntroProvider } from "@/context/intro-context"
import { AdyantraHeader } from "@/components/adyantra/header"
import { AdyantraFooter } from "@/components/adyantra/footer"
import { RegistrationFab } from "@/components/adyantra/registration-fab"
import { ScrollToTop } from "@/components/adyantra/scroll-to-top"

export default function AdyantraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <IntroProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <AdyantraHeader />
        <main className="flex-1 pt-16">{children}</main>
        <AdyantraFooter />
        <ScrollToTop />
        <RegistrationFab />
      </div>
    </IntroProvider>
  )
}
