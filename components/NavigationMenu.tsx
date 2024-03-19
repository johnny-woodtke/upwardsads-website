"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NavigationMenu() {
  return (
    <div className="sticky top-0 z-40 flex w-full justify-center border-b backdrop-blur">
      <div
        className={cn(
          "relative flex h-16 w-full max-w-screen-xl items-center justify-center transition-[height] sm:h-24"
        )}
      >
        <Link href="/" className="absolute left-3 top-0 aspect-[1] h-full invert">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Link>

        <div className={cn("flex h-full items-center justify-center py-2 max-sm:hidden")}>
          <MenuLink href="/#about">About</MenuLink>
          <MenuLink href="/#testimonials">Testimonials</MenuLink>
          <MenuLink href="/#services">Services</MenuLink>
          <MenuLink href="/contact" className="max-md:hidden">
            Contact
          </MenuLink>
        </div>

        <div className={cn("absolute right-1 top-0", "flex items-center justify-end", "h-full py-2 pr-2")}>
          <Button href="/contact">Get started</Button>
        </div>
      </div>
    </div>
  )
}

function MenuLink({
  href,
  children,
  className,
}: Readonly<{ href: string; children: React.ReactNode; className?: string }>) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-full items-center justify-center px-4 lg:px-8",
        "text-lg font-semibold",
        "rounded-xl hover:bg-primary/50 hover:text-primary-foreground",
        className
      )}
    >
      {children}
    </Link>
  )
}
