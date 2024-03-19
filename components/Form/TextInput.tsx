import { Ref, useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input, InputProps } from "@/components/ui/input"
import { containerClassName, inputClassName, labelClassName, labelContainerClassName } from "./utils"

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
              className={containerClassName({
                isFocused,
                error: !!fieldState.error,
              })}
            >
              <div className={labelContainerClassName}>
                <FormLabel className={labelClassName}>{label}</FormLabel>
              </div>
              <FormControl>
                <Input
                  className={inputClassName}
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
