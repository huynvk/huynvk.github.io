import { Link } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { Seo } from "@/components/Seo"

export function NotFound() {
  return (
    <Layout>
      <Seo title="Page not found" />
      <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
        <div className="font-display text-9xl font-semibold leading-none text-brand-200">
          404
        </div>
        <h1 className="mt-4 text-2xl font-semibold">This page doesn't exist</h1>
        <p className="mt-2 text-ink/60">
          The link may be broken, or the post may have moved.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/"
            className="rounded-full bg-brand-700 px-5 py-2 font-semibold text-white hover:bg-brand-800"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="rounded-full px-5 py-2 font-semibold text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50"
          >
            Blog
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const Component = NotFound
