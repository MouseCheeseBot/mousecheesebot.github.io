import { SiteNavbar } from "@/components/site-navbar"
import { Hero } from "@/components/hero"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />
      <Hero />
    </main>
  )
}
