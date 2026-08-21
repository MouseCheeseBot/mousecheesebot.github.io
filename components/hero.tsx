import { Button } from "@/components/ui/button"
import { MouseIcon } from "@/components/mouse-icon"

// Floating mouse mascots scattered on the right side, echoing the reference layout
const floaters = [
  { top: "14%", left: "68%", size: 96, glow: "oklch(1 0 0 / 0.55)" },
  { top: "24%", left: "50%", size: 44, glow: "oklch(1 0 0 / 0.55)" },
  { top: "40%", left: "60%", size: 70, glow: "oklch(1 0 0 / 0.55)" },
  { top: "36%", left: "77%", size: 58, glow: "oklch(1 0 0 / 0.55)" },
  { top: "50%", left: "49%", size: 40, glow: "oklch(1 0 0 / 0.5)" },
  { top: "56%", left: "69%", size: 64, glow: "oklch(1 0 0 / 0.55)" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden">
      {/* Floating mascots */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {floaters.map((f, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: f.top,
              left: f.left,
              filter: `drop-shadow(0 0 28px ${f.glow})`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            <MouseIcon size={f.size} />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-40 pt-20 lg:pt-28">
        <div className="max-w-xl">
        <div className="flex items-center gap-5">
          <MouseIcon size={80} className="h-16 w-16 sm:h-20 sm:w-20" />
          <h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
            Mouse&amp;Cheese
          </h1>
        </div>

        <div className="mt-10 space-y-1 text-2xl font-semibold text-muted-foreground sm:text-3xl">
          <p>Fun mini game bot</p>
          <p>Collect cheese, dodge bombs</p>
          <p>Play solo or with friends in multiplayer</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button className="rounded-xl bg-primary px-6 py-6 text-base font-bold text-primary-foreground hover:bg-primary/90">
            Add to Discord
          </Button>
          <Button
            variant="secondary"
            className="rounded-xl bg-secondary px-6 py-6 text-base font-bold text-secondary-foreground hover:bg-secondary/80"
          >
            Explore features
          </Button>
        </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true">
        <svg viewBox="0 0 1440 220" className="h-auto w-full" preserveAspectRatio="none">
          <path
            fill="oklch(0.23 0.02 255)"
            d="M0,120 C240,40 480,40 720,110 C960,180 1200,180 1440,110 L1440,220 L0,220 Z"
          />
        </svg>
      </div>
    </section>
  )
}
