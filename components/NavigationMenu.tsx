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
    <nav className="sticky top-0 flex w-full justify-center border-b backdrop-blur">
      <NavigationMenuPrimitive>
        <NavigationMenuList>
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
    </nav>
  )
}

function MenuContentContainer({ children }: { children: React.ReactNode }) {
  return <div className="h-24 w-48 p-4">{children}</div>
}
