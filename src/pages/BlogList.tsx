import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Layout } from "@/components/Layout"
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
    <Layout className="bg-slate-50">
      <Seo
        title="Blog"
        description="Notes on programming and life, in English and Tiếng Việt."
      />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h1 className="font-display text-6xl font-semibold uppercase leading-none text-brand-800">
          Blog
        </h1>
        <p className="mt-2 text-ink/60">Programming and Life</p>

        <div
          role="tablist"
          aria-label="Language"
          className="mt-8 inline-flex rounded-full bg-white p-1 shadow-sm ring-1 ring-ink/5"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => select(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "bg-brand-700 text-white"
                  : "text-ink/60 hover:text-brand-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visible.length ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-ink/60">No posts yet.</p>
        )}
      </div>
    </Layout>
  )
}
