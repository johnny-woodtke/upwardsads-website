import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type SubmitButtonProps = {
  className?: string
  size?: ButtonProps["size"]
  children: React.ReactNode
}

export function SubmitButton({ className, size, children }: SubmitButtonProps) {
  return (
    <Button type="submit" className={cn("w-full rounded-lg py-6", className)} size={size}>
      {children}
    </Button>
  )
}
