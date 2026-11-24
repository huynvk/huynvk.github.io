import type { ReactNode } from "react"
import { Header, type NavItem } from "./Header"
import { Footer } from "./Footer"

interface LayoutProps {
  children: ReactNode
  navItems?: NavItem[]
  cta?: NavItem
  className?: string
}

export function Layout({
  children,
  navItems,
  cta,
  className = "",
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header items={navItems} cta={cta} />
      <main className={`flex-1 pt-16 ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}
