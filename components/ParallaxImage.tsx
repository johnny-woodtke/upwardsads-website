"use client"

import Image from "next/image"

import { useParallax } from "@/hooks/useParallax"

type ParallaxImageProps = Readonly<{
  multiplier?: number
  alt: string
  src: string
}>

export function ParallaxImage({ multiplier = 0.3, alt, src }: ParallaxImageProps) {
  const offsetY = useParallax(multiplier)
  return (
    <div className="relative h-full w-full" style={{ transform: `translateY(${offsetY}px)` }}>
      <Image alt={alt} src={src} fill className="object-fit object-cover" />
    </div>
  )
}
