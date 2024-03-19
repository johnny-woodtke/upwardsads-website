import { cn } from "@/lib/utils"

export const containerClassName = ({ isFocused, error }: Readonly<{ isFocused: boolean; error: boolean }>) =>
  cn("rounded-xl border border-primary/40 px-3 py-1", error && "border-destructive", isFocused && "border-primary")

export const inputClassName = "w-full border-none bg-transparent p-0 text-base lg:text-lg"

export const labelClassName = "text-primary/80 lg:text-base"

export const labelContainerClassName = "-mb-1 mt-1"
