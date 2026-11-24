import { formatDate } from "@/lib/format"
import { site } from "@/site"

export function Author({ publishDate }: { publishDate: string }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/avatar.jpg"
        alt={site.author}
        className="size-10 rounded-full object-cover"
      />
      <div className="leading-tight">
        <div className="font-medium">{site.author}</div>
        <time dateTime={publishDate} className="text-sm text-ink/55">
          {formatDate(publishDate)}
        </time>
      </div>
    </div>
  )
}
