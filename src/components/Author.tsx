import { formatDate } from "@/lib/format"
import { site } from "@/site"

export function Author({ publishDate }: { publishDate: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <img
        src="/avatar.jpg"
        alt={site.author}
        className="size-9 rounded-full object-cover ring-1 ring-white/10"
      />
      <div className="leading-tight">
        <div className="font-medium text-zinc-200">{site.author}</div>
        <time dateTime={publishDate} className="text-zinc-500">
          {formatDate(publishDate)}
        </time>
      </div>
    </div>
  )
}
