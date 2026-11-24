import { Link } from "react-router-dom"
import type { PostSummary } from "@/types"
import { formatDate, imageSrcSet, imageUrl } from "@/lib/format"

export function PostCard({ post }: { post: PostSummary }) {
  const { slug, title, description, publishDate, heroImage, isVietnamese } =
    post
  return (
    <Link
      to={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] motion-reduce:transform-none"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
        {heroImage ? (
          <img
            src={imageUrl(heroImage.url, 640)}
            srcSet={imageSrcSet(heroImage.url, [400, 640, 960])}
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
            alt={heroImage.alt}
            loading="lazy"
            decoding="async"
            className="size-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />
        ) : (
          <div className="flex size-full items-end bg-[radial-gradient(ellipse_at_top_left,var(--color-accent-600),transparent_60%),radial-gradient(ellipse_at_bottom_right,#a21caf55,transparent_60%)] p-5">
            <span className="line-clamp-2 text-lg font-semibold leading-snug tracking-tight text-white/90">
              {title}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <time dateTime={publishDate}>{formatDate(publishDate)}</time>
          {isVietnamese && (
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-zinc-400">
              Tiếng Việt
            </span>
          )}
        </div>
        <h3 className="mt-2 font-semibold leading-snug tracking-tight text-zinc-100">
          {title}
        </h3>
        {description && (
          <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </Link>
  )
}
