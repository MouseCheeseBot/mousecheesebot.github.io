"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MouseIcon } from "@/components/mouse-icon"

const navLinks = ["Home", "About", "Status", "Custom Branding"]

export function SiteNavbar() {
  const [active, setActive] = useState("Home")

  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2.5">
          <MouseIcon size={28} className="h-7 w-7" />
          <span className="text-lg font-semibold text-foreground">Mouse&amp;Cheese</span>
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {navLinks.map((label) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => setActive(label)}
                className={
                  active === label
                    ? "border-b-2 border-primary pb-1 text-sm font-semibold text-foreground"
                    : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <Button className="rounded-full bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">
          Open dashboard
        </Button>
      </nav>
    </header>
  )
}
