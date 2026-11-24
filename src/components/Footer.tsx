import { SocialLinks } from "./icons"
import { site } from "@/site"

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.fullName}
        </p>
        <SocialLinks className="-mr-2" />
      </div>
    </footer>
  )
}
