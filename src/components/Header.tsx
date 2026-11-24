import { useCallback, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiBars3, HiXMark } from "react-icons/hi2"
import { useOnClickOutside } from "@/lib/useOnClickOutside"

export interface NavItem {
  label: string
  href: string
}

interface HeaderProps {
  /** In-page anchors (landing page); falls back to site nav. */
  items?: NavItem[]
  cta?: NavItem
}

const defaultItems: NavItem[] = [
  { label: "About", href: "/" },
  { label: "Blog", href: "/blog" },
]

export function Header({ items = defaultItems, cta }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const close = useCallback(() => setOpen(false), [])
  useOnClickOutside(ref, close)

  const linkClass =
    "font-medium text-ink/70 transition-colors hover:text-brand-600"
  const renderItem = (item: NavItem, mobile = false) =>
    item.href.startsWith("#") ? (
      <a
        key={item.href}
        href={item.href}
        onClick={close}
        className={`${linkClass} ${mobile ? "block py-2" : ""}`}
      >
        {item.label}
      </a>
    ) : (
      <NavLink
        key={item.href}
        to={item.href}
        end
        onClick={close}
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "text-brand-700" : ""} ${mobile ? "block py-2" : ""}`
        }
      >
        {item.label}
      </NavLink>
    )

  const ctaEl = cta && (
    <Link
      to={cta.href}
      onClick={close}
      className="rounded-full bg-accent-500 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
    >
      {cta.label}
    </Link>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-white/80 backdrop-blur-md">
      <div
        ref={ref}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <Link to="/" className="flex items-center gap-2" onClick={close}>
          <img src="/icon.png" alt="" className="size-8" />
          <span className="font-display text-2xl font-semibold uppercase leading-none tracking-wide text-brand-800">
            Huy Ngo
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {items.map((i) => renderItem(i))}
          {ctaEl}
        </nav>

        <button
          type="button"
          className="-mr-2 rounded p-2 text-ink/70 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <HiXMark className="size-6" />
          ) : (
            <HiBars3 className="size-6" />
          )}
        </button>

        {open && (
          <nav className="absolute inset-x-0 top-16 border-b border-ink/5 bg-white px-5 pb-5 pt-2 shadow-lg md:hidden">
            {items.map((i) => renderItem(i, true))}
            {ctaEl && <div className="pt-3">{ctaEl}</div>}
          </nav>
        )}
      </div>
    </header>
  )
}
