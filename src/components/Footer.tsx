import { SocialLinks } from "./icons"
import { site } from "@/site"

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-ink/60 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt="" className="size-9" />
          <div>
            <div className="font-display text-xl uppercase leading-none text-ink">
              {site.title}
            </div>
            <div>
              © {new Date().getFullYear()} {site.fullName}
            </div>
          </div>
        </div>
        <SocialLinks className="text-ink/50" />
      </div>
    </footer>
  )
}
