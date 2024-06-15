import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"

import { GoogleAnalytics } from "@/components/GoogleAnalytics"
import { NavigationMenu } from "@/components/NavigationMenu"
import { Toaster } from "@/components/ui/toaster"
import "@/styles/global.css"

import { DESCRIPTION, TITLE } from "./data"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: {
      url: "https://upwardsads.com/icon.png",
      type: "image/png",
    },
    apple: {
      url: "https://upwardsads.com/icon.png",
      type: "image/png",
    },
    shortcut: {
      url: "https://upwardsads.com/icon.png",
      type: "image/png",
    },
  },
  openGraph: {
    type: "website",
    url: "https://upwardsads.com",
    images: [
      {
        url: "https://upwardsads.com/icon-og.png",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "Upwards Ads",
    "Cumming, GA",
    "digital marketing",
    "online presence",
    "lead generation",
    "SEO",
    "search engine optimization",
    "social media marketing",
    "content marketing",
    "website development",
    "conversion optimization",
    "targeted advertising",
    "high-quality leads",
    "business growth",
    "Craig Swanson",
    "Johnny Woodtke",
    "Sam Polizzi",
    "online marketing",
    "Facebook Ads",
    "paid media ads",
    "small business marketing",
    "business success",
    "marketing agency",
    "advertising agency",
    "online business growth",
  ],
}

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="min-h-screen bg-black/95 bg-gradient-to-tr from-background">
        <Toaster />
        <NavigationMenu />
        <div className="flex w-full flex-col items-center">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
