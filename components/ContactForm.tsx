"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { isPossiblePhoneNumber } from "libphonenumber-js"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { PhoneInput, SubmitButton, TextInput } from "@/components/Form"
import { Form } from "@/components/ui/form"
import { NAME_REGEX } from "@/lib/constants"

const contactSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name").regex(NAME_REGEX, "Please enter a valid first name"),
  lastName: z.string().min(1, "Please enter your last name").regex(NAME_REGEX, "Please enter a valid last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().refine((value) => isPossiblePhoneNumber(value), {
    message: "Please enter a valid phone number",
  }),
  date: z.string().refine((value) => new Date(value) > new Date(), {
    message: "Please enter a date in the future",
  }),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
    },
    resolver: zodResolver(contactSchema),
  })
  const { handleSubmit, control } = form

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted", data)
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

          <PhoneInput control={control} name="phone" label="Phone Number" />

          <SubmitButton>Submit</SubmitButton>
        </div>
      </form>
    </Form>
  )
}
