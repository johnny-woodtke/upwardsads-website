"use client"

import { useState } from "react"
import { Control, FieldValues, Path } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea, TextareaProps } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

import { containerClassName, inputClassName, labelClassName, labelContainerClassName } from "./utils"

type TextareaInputProps<T extends FieldValues> = {
  label: string
  control: Control<T>
  name: Path<T>
  placeholder: TextareaProps["placeholder"]
  inputMode: TextareaProps["inputMode"]
  disabled: TextareaProps["disabled"]
}

export function TextareaInput<T extends FieldValues>({ control, name, label, ...props }: TextareaInputProps<T>) {
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
              <div className={cn(labelContainerClassName, "mb-0")}>
                <FormLabel className={labelClassName}>{label}</FormLabel>
              </div>
              <FormControl>
                <Textarea
                  className={inputClassName}
                  variant="no-focus"
                  {...props}
                  {...field}
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
