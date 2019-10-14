declare module "typography-theme-github"

// And to shim assets, use (one file extension per `declare`):
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"

interface ILocation {
  host: string
  hostname: string
  href: string
  key: string
  origin: string
  pathname: string
  port: string
}
