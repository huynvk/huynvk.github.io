import { useCallback, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiBars3, HiXMark } from "react-icons/hi2"
import { useOnClickOutside } from "@/lib/useOnClickOutside"

const items = [
  { label: "Writing", href: "/blog" },
  { label: "About", href: "/" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const close = useCallback(() => setOpen(false), [])
  useOnClickOutside(ref, close)

  const link = (mobile: boolean) =>
    items.map((item) => (
      <NavLink
        key={item.href}
        to={item.href}
        end={item.href === "/"}
        onClick={close}
        className={({ isActive }) =>
          `rounded-lg px-3 py-1.5 text-sm transition-colors ${
            isActive ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
          } ${mobile ? "block py-2.5" : ""}`
        }
      >
        {item.label}
      </NavLink>
    ))

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
      <div
        ref={ref}
        className="relative mx-auto flex h-14 max-w-5xl items-center justify-between px-5"
      >
        <Link
          to="/"
          onClick={close}
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <img
            src="/avatar.jpg"
            alt=""
            className="size-7 rounded-full ring-1 ring-white/10"
          />
          Huy Ngo
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">{link(false)}</nav>

        <button
          type="button"
          className="-mr-2 rounded-lg p-2 text-zinc-400 hover:text-zinc-100 sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <HiXMark className="size-5" />
          ) : (
            <HiBars3 className="size-5" />
          )}
        </button>

        {open && (
          <nav className="absolute inset-x-0 top-14 border-b border-white/5 bg-zinc-950/95 px-2 pb-3 pt-1 backdrop-blur-xl sm:hidden">
            {link(true)}
          </nav>
        )}
      </div>
    </header>
  )
}
