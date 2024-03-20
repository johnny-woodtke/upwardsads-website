"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { isPossiblePhoneNumber } from "libphonenumber-js"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { PhoneNumberInput, SubmitButton, TextInput } from "@/components/Form"
import { Form } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { contactPOST } from "@/lib/client"
import { NAME_REGEX } from "@/lib/constants"

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

  const { toast } = useToast()

  const onSubmit = async (data: Readonly<EnterDetailsValues>) => {
    const res = await contactPOST({
      method: "contact",
      data,
    })

    const toastProps: Parameters<typeof toast>[0] = {
      title: "Thank you for contacting us",
      description: "We will get back to you as soon as possible.",
      variant: "default",
    }
    if (!res.ok) {
      toastProps.title = "An error occurred"
      toastProps.description = "Please try again later."
      toastProps.variant = "destructive"
    }
    toast(toastProps)

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
              />
            </div>
          </div>

          <TextInput
            disabled={isSubmitting}
            control={control}
            name="email"
            label="Email Address"
            type="email"
            inputMode="email"
            placeholder="johndoe@gmail.com"
            pattern={undefined}
          />

          <PhoneNumberInput
            disabled={isSubmitting}
            control={control}
            name="phone"
            label="Phone Number"
            placeholder="(000) 000-0000"
            type="tel"
            inputMode="tel"
          />

          <SubmitButton disabled={!isValid || isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
          </SubmitButton>
        </div>
      </form>
    </Form>
  )
}
