import { Link } from "react-router-dom"
import { Glow, Layout } from "@/components/Layout"
import { Seo } from "@/components/Seo"

export function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found" />
      <section className="relative isolate">
        <Glow />
        <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
          <div className="text-gradient text-8xl font-semibold tracking-tighter">
            404
          </div>
          <h1 className="mt-4 text-xl font-semibold">
            This page doesn't exist
          </h1>
          <p className="mt-2 text-zinc-400">
            The link may be broken, or the post may have moved.
          </p>
          <div className="mt-8 flex gap-3 text-sm">
            <Link
              to="/"
              className="rounded-lg bg-white px-4 py-2 font-medium text-zinc-950 hover:bg-zinc-200"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="rounded-lg border border-white/10 px-4 py-2 font-medium text-zinc-200 hover:bg-white/5"
            >
              Writing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Component = NotFound
