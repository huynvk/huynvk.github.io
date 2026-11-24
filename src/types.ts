export interface HeroImage {
  url: string
  width?: number
  height?: number
  alt: string
}

export interface PostSummary {
  id: string
  title: string
  slug: string
  description: string
  /** ISO date string from Contentful */
  publishDate: string
  isVietnamese: boolean
  tags: string[]
  heroImage: HeroImage | null
}

export interface Post extends PostSummary {
  /** Pre-rendered HTML body */
  html: string
}
