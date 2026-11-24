import { Link } from "react-router-dom"
import { HiArrowRight } from "react-icons/hi2"
import { Glow, Layout } from "@/components/Layout"
import { Seo } from "@/components/Seo"
import { SocialLinks } from "@/components/icons"
import { PostCard } from "@/components/PostCard"
import posts from "@/content/posts-index.json"
import type { PostSummary } from "@/types"
import { site } from "@/site"

const recent = (posts as PostSummary[]).slice(0, 3)

export function Component() {
  return (
    <Layout>
      <Seo />
      <section className="relative isolate">
        <Glow />
        <div className="mx-auto flex max-w-5xl flex-col-reverse items-start gap-10 px-5 pb-20 pt-20 sm:pt-28 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h1 className="text-gradient text-5xl font-semibold tracking-tight sm:text-6xl">
              {site.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              {site.intro}
            </p>
            <SocialLinks className="-ml-2 mt-6" />
          </div>
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute inset-4 rounded-full bg-accent-600/30 blur-3xl"
            />
            <img
              src="/huynvk.png"
              alt="Huy Ngo"
              width={224}
              height={224}
              className="relative size-40 rounded-full border border-white/10 bg-gradient-to-b from-zinc-800 to-zinc-900 object-cover object-top sm:size-56"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-[12rem_1fr]">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            About
          </h2>
          <div className="max-w-2xl space-y-5 text-[17px] leading-relaxed text-zinc-300">
            {site.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {recent.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 pb-24 pt-8">
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Recent writing
            </h2>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              View all
              <HiArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  )
}
