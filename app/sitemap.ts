import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://upwardsads.com",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://upwardsads.com/contact",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://upwardsads.com/icon.png",
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}
