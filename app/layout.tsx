import { NavigationMenu } from "@/components/NavigationMenu"
import "@/styles/global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <NavigationMenu />
        {children}
      </body>
    </html>
  )
}
