import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { site } from "@/site"

export const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: site.social.github, Icon: FaGithub },
  { label: "X", href: site.social.twitter, Icon: FaXTwitter },
  { label: "Email", href: `mailto:${site.social.email}`, Icon: FaEnvelope },
]

export function SocialLinks({ className = "", iconClassName = "size-[18px]" }) {
  return (
    <ul className={`flex flex-wrap items-center gap-1 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="flex rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-zinc-100"
          >
            <Icon className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  )
}
