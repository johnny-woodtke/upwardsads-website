import "react-phone-number-input/style.css"
import { forwardRef, useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"
import PhoneInput from "react-phone-number-input/input"
import { containerClassName, inputClassName, labelClassName, labelContainerClassName } from "@/components/Form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input, InputProps } from "@/components/ui/input"

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
              className={containerClassName({
                isFocused,
                error: !!fieldState.error,
              })}
            >
              <div className={labelContainerClassName}>
                <FormLabel className={labelClassName}>{label}</FormLabel>
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

const PhoneInputComponent = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <Input {...props} className={inputClassName} variant="no-focus" ref={ref} />
})
PhoneInputComponent.displayName = "PhoneInputComponent"
