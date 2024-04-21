import { cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "no-focus"
}

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "no-focus": "focus-visible:outline-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return <textarea className={cn(textareaVariants({ variant, className }))} ref={ref} {...props} />
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
