import { cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "no-focus": "focus-visible:outline-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & {
    variant?: "primary" | "no-focus"
  }
>(({ className, type, variant = "primary", ...props }, ref) => {
  return <input type={type} className={cn(inputVariants({ variant, className }))} ref={ref} {...props} />
})
Input.displayName = "Input"

export { Input }
