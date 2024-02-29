import { NavigationMenu } from "@/components/NavigationMenu"
import "@/styles/global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <div className="sticky top-0 flex w-full justify-center border-b backdrop-blur">
          <div className="relative flex h-24 w-full max-w-[120vh] items-center justify-center">
            <NavigationMenu />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="max-w-screen-xl">{children}</div>
        </div>
      </body>
    </html>
  )
}
