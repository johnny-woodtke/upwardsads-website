"use client"

import { useEffect, useState } from "react"

export function useParallax(multiplier: number) {
  const [offsetY, setOffsetY] = useState(0)

  function handleScroll() {
    setOffsetY(window.scrollY * multiplier)
  }

  useEffect(() => {
    window.scrollY > 0 && handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return offsetY
}
