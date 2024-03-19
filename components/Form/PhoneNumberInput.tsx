import "react-phone-number-input/style.css"
import { forwardRef, useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"
import PhoneInput from "react-phone-number-input"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input, InputProps } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type PhoneNumberInputProps<T extends FieldValues> = {
  label: string
  control: Control<T>
  name: Path<T>
  placeholder: InputProps["placeholder"]
  type: InputProps["type"]
  inputMode: InputProps["inputMode"]
  disabled: InputProps["disabled"]
}

export function PhoneNumberInput<T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: Readonly<PhoneNumberInputProps<T>>) {
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
                <PhoneInput
                  {...props}
                  {...field}
                  defaultCountry="US"
                  inputComponent={PhoneInputComponent}
                  onChange={(value) => {
                    field.onChange(value)
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

const PhoneInputComponent = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <Input
      {...props}
      className="w-full border-none bg-transparent p-0 text-base lg:text-lg"
      variant="no-focus"
      ref={ref}
    />
  )
})
PhoneInputComponent.displayName = "PhoneInputComponent"
