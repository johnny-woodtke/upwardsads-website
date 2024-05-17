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
