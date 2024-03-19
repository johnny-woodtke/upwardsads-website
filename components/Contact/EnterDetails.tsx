"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { isPossiblePhoneNumber } from "libphonenumber-js"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SubmitButton, TextInput } from "@/components/Form"
import { Form } from "@/components/ui/form"
import { NAME_REGEX, PHONE_REGEX } from "@/lib/constants"

const enterDetailsSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name").regex(NAME_REGEX, "Please enter a valid first name"),
  lastName: z.string().min(1, "Please enter your last name").regex(NAME_REGEX, "Please enter a valid last name"),
  email: z.string().min(1, "Please enter your email").email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Please enter your phone number")
    .refine((value) => isPossiblePhoneNumber(value, "US"), {
      message: "Please enter a valid phone number",
    }),
})

type EnterDetailsValues = z.infer<typeof enterDetailsSchema>

export function EnterDetails({ onFinish }: Readonly<{ onFinish: () => void }>) {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(enterDetailsSchema),
  })
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = form

  const onSubmit = async (data: Readonly<EnterDetailsValues>) => {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitted")
    onFinish()
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <div className="flex w-full space-x-2">
            <div className="w-1/2">
              <TextInput
                disabled={isSubmitting}
                control={control}
                name="firstName"
                label="First Name"
                type="text"
                inputMode={undefined}
                placeholder="John"
                pattern={NAME_REGEX}
                customRef={undefined}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                disabled={isSubmitting}
                control={control}
                name="lastName"
                label="Last Name"
                type="text"
                inputMode={undefined}
                placeholder="Doe"
                pattern={NAME_REGEX}
                customRef={undefined}
              />
            </div>
          </div>

          <TextInput
            disabled={isSubmitting}
            control={control}
            name="email"
            label="Email"
            type="email"
            inputMode="email"
            placeholder="johndoe@gmail.com"
            pattern={undefined}
            customRef={undefined}
          />

          <TextInput
            disabled={isSubmitting}
            control={control}
            name="phone"
            label="Phone Number"
            type="tel"
            inputMode="tel"
            placeholder="000 000 0000"
            pattern={PHONE_REGEX}
            customRef={undefined}
          />

          <SubmitButton disabled={!isValid || isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
          </SubmitButton>
        </div>
      </form>
    </Form>
  )
}
