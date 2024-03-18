import { useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input, InputProps } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type TextInputProps<T extends FieldValues> = {
  label: string
  control: Control<T>
  name: Path<T>
} & InputProps

export function TextInput<T extends FieldValues>({ control, name, label, ...props }: Readonly<TextInputProps<T>>) {
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
                <FormLabel className="text-primary/90 lg:text-lg">{label}</FormLabel>
              </div>
              <FormControl>
                <Input
                  className="w-full border-none bg-transparent p-0 lg:text-base"
                  variant="no-focus"
                  {...props}
                  {...field}
                  onFocus={(e) => {
                    setIsFocused(true)
                    props.onFocus?.(e)
                  }}
                  onBlur={(e) => {
                    setIsFocused(false)
                    field.onBlur()
                    props.onBlur?.(e)
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
