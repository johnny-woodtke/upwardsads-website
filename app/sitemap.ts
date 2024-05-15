import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://upwardsads.com",
      priority: 1,
    },
    {
      url: "https://upwardsads.com/contact",
      priority: 0.9,
    },
    {
      url: "https://upwardsads.com/team",
      priority: 0.8,
    },
    {
      url: "https://upwardsads.com/icon.png",
      priority: 0.5,
    },
  ]
}
