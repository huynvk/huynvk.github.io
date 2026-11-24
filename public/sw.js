// Kill switch for the service worker installed by the old Gatsby site
// (gatsby-plugin-offline). The browser's update check replaces the old worker
// with this one, which clears its caches, unregisters itself and reloads open
// tabs so they load the new site from the network. Keep this file deployed for
// several months, until old visitors have picked it up.
self.addEventListener("install", () => self.skipWaiting())

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      await self.clients.claim()
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: "window" })
      for (const client of clients) {
        try {
          await client.navigate(client.url)
        } catch {
          // navigate() can reject (e.g. a client that is no longer controlled);
          // that tab will load the new site on its next navigation anyway.
        }
      }
    })()
  )
})
