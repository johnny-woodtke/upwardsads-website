import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { NavigationMenu } from "@/components/NavigationMenu"
import { Toaster } from "@/components/ui/toaster"
import "@/styles/global.css"

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
