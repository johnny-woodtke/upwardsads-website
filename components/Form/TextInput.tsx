import { useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type TextInputProps<T extends FieldValues> = {
  label: string
  control: Control<T>
  name: Path<T>
  type: "text" | "email" | "tel"
  placeholder: string | undefined
  pattern: RegExp | undefined
}

export function TextInput<T extends FieldValues>({
  control,
  name,
  label,
  type,
  placeholder,
  pattern,
}: TextInputProps<T>) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <FormItem>
            <div
              className={cn(
                "rounded-xl border border-primary/40 px-3 py-1",
                fieldState.error && "border-destructive",
                isFocused && "border-primary"
              )}
            >
              <div className="-mb-1 mt-1">
                <FormLabel className={cn("text-sm text-primary/90")}>{label}</FormLabel>
              </div>
              <FormControl>
                <Input
                  className={cn("w-full border-none bg-transparent p-0")}
                  type={type}
                  placeholder={placeholder}
                  variant="no-focus"
                  {...field}
                  onKeyDown={(e) => {
                    if (pattern && !pattern.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                  onFocus={() => {
                    setIsFocused(true)
                  }}
                  onBlur={() => {
                    setIsFocused(false)
                    field.onBlur()
                  }}
                />
              </FormControl>
            </div>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
