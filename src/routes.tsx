import type { RouteRecord } from "vite-react-ssg"
import { NotFound } from "@/pages/NotFound"
import posts from "@/content/posts-index.json"

export const routes: RouteRecord[] = [
  { path: "/", lazy: () => import("@/pages/Home") },
  { path: "/blog", lazy: () => import("@/pages/BlogList") },
  {
    path: "/blog/:slug",
    lazy: () => import("@/pages/BlogPost"),
    errorElement: <NotFound />,
    getStaticPaths: () => posts.map((p) => `/blog/${p.slug}`),
  },
  // Pre-rendered as /404/index.html and copied to /404.html for GitHub Pages.
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <NotFound /> },
]
