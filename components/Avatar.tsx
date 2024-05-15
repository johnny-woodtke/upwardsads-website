import { cva } from "class-variance-authority"
import Image from "next/image"

import { cn } from "@/lib/utils"

type AvatarProps = Readonly<{
  src: string
  size?: "sm"
  className?: string
}>

const avatarVariants = cva("relative aspect-[1]", {
  variants: {
    size: {
      sm: "h-[70px] md:h-20",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

export function Avatar({ src, size, className }: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ size }), className)}>
      <Image alt="Craig Swanson" src={src} fill className="object-scale-down rounded-full border border-primary/10" />
    </div>
  )
}
