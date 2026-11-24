// GitHub Pages serves /404.html for unknown paths.
import fs from "node:fs"

const src = "dist/404/index.html"
if (!fs.existsSync(src))
  throw new Error(`${src} not found; was the /404 route pre-rendered?`)
fs.copyFileSync(src, "dist/404.html")
console.log("Copied 404 page to dist/404.html")
