import { Head } from "vite-react-ssg"
import { useLocation } from "react-router-dom"
import { site } from "@/site"

interface SeoProps {
  title?: string
  description?: string
  image?: string
  type?: "website" | "article"
  lang?: string
}

/** Head tags for every page; mirrors the old Gatsby SEO component. */
export function Seo({
  title,
  description,
  image,
  type = "website",
  lang = "en",
}: SeoProps) {
  const { pathname } = useLocation()
  const fullTitle = title
    ? `${title} | ${site.title}`
    : site.title
  const desc = description || site.description
  const url = site.url + (pathname.endsWith("/") ? pathname : `${pathname}/`)
  const img = image || site.url + site.defaultImage

  return (
    <Head htmlAttributes={{ lang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title || site.title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:creator" content={site.author} />
      <meta name="twitter:title" content={title || site.title} />
      <meta name="twitter:description" content={desc} />
    </Head>
  )
}
