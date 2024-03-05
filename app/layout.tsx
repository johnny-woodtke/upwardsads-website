import { NavigationMenu } from "@/components/NavigationMenu"
import "@/styles/global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black bg-gradient-to-tr from-background">
        <NavigationMenu />
        <div className="flex w-full justify-center">
          <div className="max-w-screen-xl">{children}</div>
        </div>
      </body>
    </html>
  )
}
