import { NavigationMenu } from "@/components/NavigationMenu"
import { MAX_WIDTH_CLASSNAME } from "@/lib/constants"
import "@/styles/global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black bg-gradient-to-tr from-background">
        <NavigationMenu />
        <div className="flex w-full justify-center">
          <div className={MAX_WIDTH_CLASSNAME}>{children}</div>
        </div>
      </body>
    </html>
  )
}
