import type { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

/** Faint grid and accent glow that fade out from the top of a page. */
export function Glow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] overflow-hidden"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent-600/25 blur-[120px]" />
      <div className="absolute -top-20 left-[60%] h-64 w-96 rounded-full bg-fuchsia-500/10 blur-[100px]" />
    </div>
  )
}
