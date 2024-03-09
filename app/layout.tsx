import { NavigationMenu } from "@/components/NavigationMenu"
import "@/styles/global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black bg-gradient-to-tr from-background">
        <NavigationMenu />
        <div className="flex w-full flex-col items-center">{children}</div>
      </body>
    </html>
  )
}
