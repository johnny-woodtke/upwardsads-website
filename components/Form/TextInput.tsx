import { Ref, useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input, InputProps } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type TextInputProps<T extends FieldValues> = {
  label: string
  control: Control<T>
  name: Path<T>
  pattern: RegExp | undefined
  customRef: Ref<HTMLInputElement> | undefined
  placeholder: InputProps["placeholder"]
  type: InputProps["type"]
  inputMode: InputProps["inputMode"]
  disabled: InputProps["disabled"]
}

export function TextInput<T extends FieldValues>({
  control,
  name,
  label,
  pattern,
  customRef,
  ...props
}: Readonly<TextInputProps<T>>) {
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
                <FormLabel className="text-primary/80 lg:text-base">{label}</FormLabel>
              </div>
              <FormControl>
                <Input
                  className="w-full border-none bg-transparent p-0 text-base lg:text-lg"
                  variant="no-focus"
                  {...props}
                  {...field}
                  onChange={(e) => {
                    if (pattern && !pattern.test(e.target.value)) {
                      e.preventDefault()
                      return
                    }
                    field.onChange(e)
                  }}
                  onFocus={() => {
                    setIsFocused(true)
                  }}
                  onBlur={() => {
                    setIsFocused(false)
                    field.onBlur()
                  }}
                  ref={customRef || field.ref}
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
