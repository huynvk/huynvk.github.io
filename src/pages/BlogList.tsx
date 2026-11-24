import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Glow, Layout } from "@/components/Layout"
import { Seo } from "@/components/Seo"
import { PostCard } from "@/components/PostCard"
import posts from "@/content/posts-index.json"
import type { PostSummary } from "@/types"

const filters = [
  { key: "en", label: "English" },
  { key: "vi", label: "Tiếng Việt" },
  { key: "all", label: "All" },
] as const
type FilterKey = (typeof filters)[number]["key"]

const isFilter = (v: string | null): v is FilterKey =>
  filters.some((f) => f.key === v)

const matches = (post: PostSummary, filter: FilterKey) =>
  filter === "all" || (filter === "vi" ? post.isVietnamese : !post.isVietnamese)

export function Component() {
  const [params, setParams] = useSearchParams()
  // Pre-rendered HTML always shows the default ("en"); apply ?lang= after hydration
  // so server and client markup match.
  const [filter, setFilter] = useState<FilterKey>("en")
  useEffect(() => {
    const lang = params.get("lang")
    setFilter(isFilter(lang) ? lang : "en")
  }, [params])

  const select = (key: FilterKey) => {
    setFilter(key)
    setParams(key === "en" ? {} : { lang: key }, {
      replace: true,
      preventScrollReset: true,
    })
  }

  const visible = (posts as PostSummary[]).filter((p) => matches(p, filter))

  return (
    <Layout>
      <Seo
        title="Writing"
        description="Notes on engineering, leadership and life, in English and Tiếng Việt."
      />
      <section className="relative isolate">
        <Glow />
        <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:pt-24">
          <h1 className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl">
            Writing
          </h1>
          <p className="mt-3 text-zinc-400">
            Notes on engineering, leadership and life.
          </p>

          <div
            role="tablist"
            aria-label="Language"
            className="mt-8 inline-flex rounded-xl border border-white/10 bg-white/[0.03] p-1"
          >
            {filters.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => select(f.key)}
                className={`rounded-lg px-3.5 py-1.5 text-sm transition-colors ${
                  filter === f.key
                    ? "bg-white/10 text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {visible.length ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-zinc-500">No posts yet.</p>
          )}
        </div>
      </section>
    </Layout>
  )
}
