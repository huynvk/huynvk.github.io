import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router-dom"
import { HiArrowLeft } from "react-icons/hi2"
import { Glow, Layout } from "@/components/Layout"
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
      <article className="relative isolate">
        <Glow />
        <div className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:pt-16">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-100"
          >
            <HiArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />{" "}
            Writing
          </Link>
          <header className="mt-8">
            <h1 className="text-gradient text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-lg text-zinc-400">{description}</p>
            )}
            <div className="mt-8">
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
              className="mt-10 h-auto w-full rounded-2xl border border-white/10 object-cover"
            />
          )}
          <div
            className="prose prose-invert prose-zinc mt-12 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-accent-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-accent-500 prose-blockquote:font-normal prose-blockquote:text-zinc-300 prose-img:rounded-xl sm:prose-lg"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
    </Layout>
  )
}
