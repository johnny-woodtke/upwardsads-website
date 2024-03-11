"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { isPossiblePhoneNumber } from "libphonenumber-js"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { SubmitButton, TextInput } from "@/components/Form"
import { Form } from "@/components/ui/form"
import { NAME_REGEX } from "@/lib/constants"

const enterDetailsSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name").regex(NAME_REGEX, "Please enter a valid first name"),
  lastName: z.string().min(1, "Please enter your last name").regex(NAME_REGEX, "Please enter a valid last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().refine((value) => isPossiblePhoneNumber(value, "US"), {
    message: "Please enter a valid phone number",
  }),
})

type EnterDetailsValues = z.infer<typeof enterDetailsSchema>

export function EnterDetails({ onFinish }: { onFinish: () => void }) {
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

  const onSubmit = async (data: EnterDetailsValues) => {
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
                control={control}
                name="firstName"
                label="First Name"
                type="text"
                placeholder="John"
                pattern={undefined}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                control={control}
                name="lastName"
                label="Last Name"
                type="text"
                placeholder="Doe"
                pattern={undefined}
              />
            </div>
          </div>

          <TextInput
            control={control}
            name="email"
            label="Email"
            type="email"
            placeholder="johndoe@gmail.com"
            pattern={undefined}
          />

          <TextInput
            control={control}
            name="phone"
            label="Phone Number"
            type="tel"
            pattern={undefined}
            placeholder="000 000 00000"
          />

          <SubmitButton disabled={!isValid || isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
          </SubmitButton>
        </div>
      </form>
    </Form>
  )
}
