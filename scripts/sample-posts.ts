import type { PostSummary } from "../src/types"

/** Placeholder content used only for local development without Contentful credentials. */
export const samplePosts: (PostSummary & { body: string })[] = [
  {
    id: "sample-1",
    title: "Sample post: code and images",
    slug: "sample-code-and-images",
    description: "A placeholder post to exercise markdown rendering.",
    publishDate: "2024-03-10T00:00:00.000Z",
    isVietnamese: false,
    tags: ["sample"],
    heroImage: null,
    body: `This is **sample content**. Set Contentful credentials in \`.env\` to see real posts.

## A code block

\`\`\`ts
export function greet(name: string) {
  return \`Hello, \${name}!\`
}
\`\`\`

\`\`\`sh
npm run build
\`\`\`

> "Programming is like jokes. When you have to explain, you failed"

![Avatar](/avatar.jpg "An image with a caption")

| Column | Value |
| ------ | ----- |
| a      | 1     |
`,
  },
  {
    id: "sample-2",
    title: "Bài viết mẫu tiếng Việt",
    slug: "bai-viet-mau",
    description: "Một bài viết mẫu để kiểm tra bộ lọc ngôn ngữ.",
    publishDate: "2023-11-02T00:00:00.000Z",
    isVietnamese: true,
    tags: ["sample"],
    heroImage: null,
    body: "Đây là nội dung mẫu.\n\n- Mục một\n- Mục hai\n",
  },
]
