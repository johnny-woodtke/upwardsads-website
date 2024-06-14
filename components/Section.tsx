import { cva } from "class-variance-authority"
import { ReactNode } from "react"

import { cn } from "@/lib/utils"

const padding = {
  none: "",
  default: "pb-12 pt-8 md:pb-20 md:pt-12 xl:pb-28",
  mirror: "py-8 md:py-20 xl:py-28",
}

const sectionVariants = cva("relative flex w-full", {
  variants: {
    padding,
    border: {
      false: "",
      true: "border-b border-primary/10",
    },
  },
  defaultVariants: {
    border: true,
    padding: "default",
  },
})

const halfVariants = cva("relative w-1/2", {
  variants: {
    padding: Object.keys(padding).reduce<typeof padding>((acc, key) => {
      const k = key as keyof typeof padding
      if (k === "none") {
        return acc
      }
      acc[k] = cn(padding[k], "px-8")
      return acc
    }, padding),
    overflow: {
      true: "",
      false: "max-w-screen-sm",
    },
  },
  defaultVariants: {
    padding: "default",
    overflow: false,
  },
})

type Half = {
  children: ReactNode
} & Parameters<typeof halfVariants>[0]

type SectionProps = Readonly<
  (
    | {
        children: ReactNode
        left?: undefined
        right?: undefined
        half?: false
      }
    | {
        children: ReactNode
        left: Half
        right: Half
        half: true
      }
  ) &
    Parameters<typeof sectionVariants>[0]
>

export function Section({ children, half, left, right, ...props }: SectionProps) {
  if (!half) {
    return (
      <section className={sectionVariants(props)}>
        <div className="mx-auto w-full max-w-screen-xl px-8">{children}</div>
      </section>
    )
  }

  const { children: leftChildren, ...leftProps } = left
  const { children: rightChildren, ...rightProps } = right

  return (
    <section className={sectionVariants({ padding: "none", ...props })}>
      {children}
      <div className={halfVariants(leftProps)}>{leftChildren}</div>
      <div className={halfVariants(rightProps)}>{rightChildren}</div>
    </section>
  )
}

type SectionIdProps = Readonly<{
  id: string
  className?: string
}>

export function SectionId({ id, className }: SectionIdProps) {
  return <div className={cn("absolute top-[-100px] h-0 w-0", className)} id={id} />
}
