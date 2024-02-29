import Image from "next/image"
import Link from "next/link"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu as NavigationMenuPrimitive,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenu() {
  return (
    <div className="sticky top-0 flex w-full justify-center border-b backdrop-blur">
      <div className="relative flex h-24 w-full max-w-[120vh] items-center justify-center">
        <Link href="/" className="absolute left-0 top-0 aspect-[1] h-full invert">
          <Image src="/assets/logo.png" alt="Logo" fill objectFit="contain" />
        </Link>

        <NavigationMenuPrimitive>
          <NavigationMenuList>
            <NavigationMenuItem></NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MenuContentContainer>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </MenuContentContainer>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
              <NavigationMenuContent>
                <MenuContentContainer>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </MenuContentContainer>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuPrimitive>
      </div>
    </div>
  )
}

function MenuContentContainer({ children }: { children: React.ReactNode }) {
  return <div className="h-full w-48 p-4">{children}</div>
}
