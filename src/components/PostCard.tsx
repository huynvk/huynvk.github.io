import { Link } from "react-router-dom"
import type { PostSummary } from "@/types"
import { formatDate, imageSrcSet, imageUrl } from "@/lib/format"

export function PostCard({ post }: { post: PostSummary }) {
  const { slug, title, description, publishDate, heroImage, isVietnamese } =
    post
  return (
    <Link
      to={`/blog/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-600 to-brand-900">
        {heroImage ? (
          <img
            src={imageUrl(heroImage.url, 640)}
            srcSet={imageSrcSet(heroImage.url, [400, 640, 960])}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            alt={heroImage.alt}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center p-6 text-center font-display text-3xl uppercase leading-none text-white/90">
            {title}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-semibold leading-snug text-ink group-hover:text-brand-600">
          {title}
        </h2>
        {description && (
          <p className="mt-2 line-clamp-3 text-sm text-ink/60">{description}</p>
        )}
        <div className="mt-auto flex items-center gap-2 pt-4 text-xs text-ink/50">
          <time dateTime={publishDate}>{formatDate(publishDate)}</time>
          {isVietnamese && (
            <span className="rounded-full bg-brand-50 px-2 py-0.5 text-brand-700">
              Tiếng Việt
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
