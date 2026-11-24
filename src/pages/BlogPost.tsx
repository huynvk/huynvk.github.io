import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router-dom"
import { HiArrowLeft } from "react-icons/hi2"
import { Layout } from "@/components/Layout"
import { Seo } from "@/components/Seo"
import { Author } from "@/components/Author"
import { imageSrcSet, imageUrl } from "@/lib/format"
import type { Post } from "@/types"

/**
 * Runs only at build time (and on the dev server). vite-react-ssg serialises the
 * result to a static JSON file that the browser fetches on client-side navigation.
 */
export async function loader({
  params,
}: LoaderFunctionArgs): Promise<Post | null> {
  if (!import.meta.env.SSR) return null
  const fs = await import("node:fs/promises")
  const path = await import("node:path")
  const slug = params.slug ?? ""
  if (!/^[a-z0-9][a-z0-9-_]*$/i.test(slug))
    throw new Response("Not found", { status: 404 })
  try {
    const file = path.resolve(
      process.cwd(),
      "src/content/posts",
      `${slug}.json`
    )
    return JSON.parse(await fs.readFile(file, "utf-8")) as Post
  } catch {
    throw new Response("Not found", { status: 404 })
  }
}

export function Component() {
  const post = useLoaderData() as Post
  const { title, description, publishDate, heroImage, html, isVietnamese } =
    post

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        image={heroImage ? imageUrl(heroImage.url, 1200, "jpg") : undefined}
        type="article"
        lang={isVietnamese ? "vi" : "en"}
      />
      <article className="mx-auto max-w-3xl px-5 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/55 hover:text-brand-600"
        >
          <HiArrowLeft className="size-4" /> All posts
        </Link>
        <header className="mt-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-xl text-ink/60">{description}</p>
          )}
          <div className="mt-6">
            <Author publishDate={publishDate} />
          </div>
        </header>
        {heroImage && (
          <img
            src={imageUrl(heroImage.url, 1020)}
            srcSet={imageSrcSet(heroImage.url, [640, 1020, 1600])}
            sizes="(min-width: 768px) 720px, 100vw"
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            className="mt-10 h-auto w-full rounded-2xl object-cover shadow-sm"
          />
        )}
        <div
          className="prose prose-lg mt-10 max-w-none prose-headings:font-semibold prose-headings:text-ink prose-a:text-brand-600 prose-blockquote:border-l-accent-500 prose-blockquote:font-quote prose-blockquote:text-2xl prose-blockquote:font-normal prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  )
}
