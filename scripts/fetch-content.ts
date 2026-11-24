/**
 * Fetches blog posts from Contentful and writes them as JSON into src/content/.
 * Markdown is rendered to HTML here (at build time) so the client ships no
 * markdown or syntax-highlighting code.
 *
 * Without Contentful credentials, a local (non-CI) run falls back to sample
 * posts so the site can still be developed. CI always requires credentials.
 */
import "dotenv/config"
import fs from "node:fs/promises"
import path from "node:path"
import {
  createClient,
  type Asset,
  type EntryFieldTypes,
  type EntrySkeletonType,
} from "contentful"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkSmartypants from "remark-smartypants"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeStringify from "rehype-stringify"
import { bundledLanguages } from "shiki"
import { visit } from "unist-util-visit"
import type { Root as MdRoot } from "mdast"
import type { Root as HastRoot, Element } from "hast"
import type { Post, PostSummary } from "../src/types"
import { samplePosts } from "./sample-posts"

const OUT_DIR = path.resolve("src/content")
const POSTS_DIR = path.join(OUT_DIR, "posts")
const BODY_IMAGE_WIDTH = 1020

type BlogPostSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
    description?: EntryFieldTypes.Text
    publishDate: EntryFieldTypes.Date
    isVietnamese?: EntryFieldTypes.Boolean
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    heroImage?: EntryFieldTypes.AssetLink
    body?: EntryFieldTypes.Text
  },
  "blogPost"
>

const LANG_ALIASES: Record<string, string> = { sh: "bash" }

/** Map code fence languages Shiki doesn't know to plain text instead of failing. */
function remarkNormalizeCodeLang() {
  return (tree: MdRoot) => {
    visit(tree, "code", (node) => {
      if (!node.lang) return
      const lang =
        LANG_ALIASES[node.lang.toLowerCase()] ?? node.lang.toLowerCase()
      node.lang = lang in bundledLanguages ? lang : "plaintext"
    })
  }
}

export function normalizeUrl(url: string) {
  return url.startsWith("//") ? `https:${url}` : url
}

export function isContentfulImage(url: string) {
  return /(^|\/\/)images\.ctfassets\.net\//.test(url)
}

/**
 * Optimise Contentful images, lazy-load them, and wrap them in
 * <figure><figcaption>, using title then alt as the caption
 * (as gatsby-remark-images-contentful did with showCaptions).
 */
function rehypeImages() {
  return (tree: HastRoot) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "img" || !parent || index === undefined) return
      const props = node.properties
      let src = normalizeUrl(String(props.src ?? ""))
      if (isContentfulImage(src)) {
        src = `${src.split("?")[0]}?w=${BODY_IMAGE_WIDTH}&fm=webp&q=80`
      }
      props.src = src
      props.loading = "lazy"
      props.decoding = "async"

      const caption = String(props.title || props.alt || "").trim()
      if (!caption) return
      const figure: Element = {
        type: "element",
        tagName: "figure",
        properties: {},
        children: [
          { ...node },
          {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: [{ type: "text", value: caption }],
          },
        ],
      }
      // A markdown image on its own line is wrapped in <p>; replace the <p>
      // itself so we don't produce invalid <p><figure> nesting.
      if (
        parent.type === "element" &&
        parent.tagName === "p" &&
        parent.children.length === 1
      ) {
        Object.assign(parent, figure)
      } else {
        parent.children[index] = figure
      }
    })
  }
}

const markdown = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkSmartypants)
  .use(remarkNormalizeCodeLang)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypePrettyCode, { theme: "github-dark-dimmed", keepBackground: true })
  .use(rehypeImages)
  .use(rehypeStringify)

export async function renderMarkdown(md: string) {
  return String(await markdown.process(md))
}

async function fetchFromContentful(space: string, accessToken: string) {
  const client = createClient({ space, accessToken }).withoutUnresolvableLinks
  const limit = 100
  const entries = []
  for (let skip = 0; ; skip += limit) {
    const res = await client.getEntries<BlogPostSkeleton>({
      content_type: "blogPost",
      order: ["-fields.publishDate"],
      limit,
      skip,
    })
    entries.push(...res.items)
    if (skip + limit >= res.total) break
  }

  return Promise.all(
    entries.map(async ({ sys, fields: f }): Promise<Post> => {
      const hero = f.heroImage as
        Asset<"WITHOUT_UNRESOLVABLE_LINKS"> | undefined
      const file = hero?.fields.file
      return {
        id: sys.id,
        title: f.title,
        slug: f.slug,
        description: f.description ?? "",
        publishDate: f.publishDate,
        isVietnamese: Boolean(f.isVietnamese),
        tags: f.tags ?? [],
        heroImage:
          file && typeof file.url === "string"
            ? {
                url: normalizeUrl(file.url),
                width: (file.details as { image?: { width: number } })?.image
                  ?.width,
                height: (file.details as { image?: { height: number } })?.image
                  ?.height,
                alt: String(hero?.fields.title ?? ""),
              }
            : null,
        html: await renderMarkdown(f.body ?? ""),
      }
    })
  )
}

async function main() {
  const space = process.env.CONTENTFUL_SPACE_ID
  const token = process.env.CONTENTFUL_DELIVERY_TOKEN

  let posts: Post[]
  if (space && token) {
    posts = await fetchFromContentful(space, token)
    console.log(`Fetched ${posts.length} posts from Contentful`)
  } else if (process.env.CI) {
    throw new Error(
      "CONTENTFUL_SPACE_ID and CONTENTFUL_DELIVERY_TOKEN must be set (add them as repository secrets)."
    )
  } else {
    console.warn(
      "⚠ Contentful credentials not set (see .env.example). Using sample posts for local development."
    )
    posts = await Promise.all(
      samplePosts.map(async ({ body, ...p }) => ({
        ...p,
        html: await renderMarkdown(body),
      }))
    )
  }

  // Slugs become file names and URL paths; reject anything unsafe or duplicated.
  const seen = new Set<string>()
  for (const p of posts) {
    if (!/^[a-z0-9][a-z0-9-_]*$/i.test(p.slug))
      throw new Error(`Invalid slug: "${p.slug}"`)
    if (seen.has(p.slug)) throw new Error(`Duplicate slug: "${p.slug}"`)
    seen.add(p.slug)
  }

  posts.sort((a, b) => b.publishDate.localeCompare(a.publishDate))

  await fs.rm(OUT_DIR, { recursive: true, force: true })
  await fs.mkdir(POSTS_DIR, { recursive: true })

  const index: PostSummary[] = posts.map(({ html, ...summary }) => summary)
  await fs.writeFile(
    path.join(OUT_DIR, "posts-index.json"),
    JSON.stringify(index)
  )
  await Promise.all(
    posts.map((p) =>
      fs.writeFile(path.join(POSTS_DIR, `${p.slug}.json`), JSON.stringify(p))
    )
  )
  console.log(
    `Wrote ${posts.length} posts to ${path.relative(process.cwd(), OUT_DIR)}/`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
