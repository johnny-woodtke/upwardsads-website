import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"

import { NavigationMenu } from "@/components/NavigationMenu"
import { Toaster } from "@/components/ui/toaster"
import "@/styles/global.css"

import { DESCRIPTION, TITLE } from "./data"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: {
      url: "/icon.png",
      type: "image/png",
    },
    apple: {
      url: "/icon.png",
      type: "image/png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/icon-og.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://upwardsads.com",
    images: [
      {
        url: "/icon-og.png",
      },
    ],
  },
}

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
