import { IntroProvider } from "@/context/intro-context"
import { Gateway } from "@/components/gateway"

export default function GatewayPage() {
  return (
    <IntroProvider>
      <Gateway />
    </IntroProvider>
  )
}
