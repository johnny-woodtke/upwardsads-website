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
    icon: "/assets/logo.png",
  },
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://upwardsads-website.vercel.app/",
    images: [
      {
        width: 1200,
        height: 1200,
        url: "https://upwardsads-website.vercel.app/assets/logo.png",
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
