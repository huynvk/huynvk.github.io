const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC", // identical output at build time and in the browser
})

/** "MMM DD, YYYY", matching the old Gatsby formatString. */
export const formatDate = (iso: string) => dateFormat.format(new Date(iso))

const isContentful = (url: string) => url.includes("images.ctfassets.net")

/** Build a Contentful Images API URL; non-Contentful URLs pass through unchanged. */
export function imageUrl(
  url: string,
  width: number,
  format: "webp" | "jpg" = "webp"
) {
  if (!isContentful(url)) return url
  return `${url.split("?")[0]}?w=${width}&fm=${format}&q=80`
}

export function imageSrcSet(url: string, widths: number[]) {
  if (!isContentful(url)) return undefined
  return widths.map((w) => `${imageUrl(url, w)} ${w}w`).join(", ")
}
