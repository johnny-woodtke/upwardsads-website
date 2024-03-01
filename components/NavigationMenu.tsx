"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollDirection } from "@/components/hooks"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NavigationMenu() {
  const isCollapsed = useScrollDirection() === "down"

  return (
    <div className="sticky top-0 flex w-full justify-center border-b backdrop-blur">
      <div
        className={cn(
          "relative flex h-14 w-full max-w-[120vh] items-center justify-center transition-[height] md:h-24",
          isCollapsed ? "md:h-14" : "md:h-24"
        )}
      >
        <Link href="/" className="absolute left-2 top-0 aspect-[1] h-full invert">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Link>

        <div
          className={cn(
            "hidden items-center justify-center md:flex md:grow",
            "h-full py-2",
            isCollapsed ? "md:hidden" : ""
          )}
        >
          <MenuLink href="/#about">About</MenuLink>
          <MenuLink href="/#testimonials">Testimonials</MenuLink>
          <MenuLink href="/#services">Services</MenuLink>
          <MenuLink href="/contact">Contact</MenuLink>
        </div>

        <div
          className={cn(
            "absolute right-0 top-0 flex items-center justify-end",
            "h-full py-2 pr-2",
            isCollapsed ? "md:flex" : ""
          )}
        >
          <Button href="/contact" className="max-h-full">
            Get started
          </Button>
        </div>
      </div>
    </div>
  )
}

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn("flex h-full w-36 items-center justify-center text-lg font-semibold", "rounded-xl hover:border-x ")}
    >
      {children}
    </Link>
  )
}
