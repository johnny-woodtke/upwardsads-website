import { forwardRef } from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type SubmitButtonProps = ButtonProps & {
  children: React.ReactNode
}

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <Button type="submit" ref={ref} className={cn("w-full rounded-lg py-6", className)} size={size} {...props}>
        {children}
      </Button>
    )
  }
)
SubmitButton.displayName = "SubmitButton"

export { SubmitButton }
