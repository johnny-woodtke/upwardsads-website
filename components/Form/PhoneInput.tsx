import { useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { PhoneInput as RpnInput } from "@/components/ui/phone-input"
import { cn } from "@/lib/utils"

type PhoneInputProps<T extends FieldValues> = {
  label: string
  control: Control<T>
  name: Path<T>
}

export function PhoneInput<T extends FieldValues>({ label, control, name }: PhoneInputProps<T>) {
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
                <FormControl>
                  <RpnInput
                    inputClassName="border-none"
                    countrySelectClassName="border-none hover:bg-transparent"
                    onChange={field.onChange}
                    value={field.value}
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
            </div>
          </FormItem>
        )
      }}
    />
  )
}
