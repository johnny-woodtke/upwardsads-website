"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"

import { handleContactSubmission } from "@/app/contact/actions"
import { PhoneNumberInput } from "@/components/Form/PhoneNumberInput"
import { SubmitButton } from "@/components/Form/SubmitButton"
import { TextareaInput } from "@/components/Form/TextAreaInput"
import { TextInput } from "@/components/Form/TextInput"
import { Form } from "@/components/ui/form"
import { useToast } from "@/components/ui/use-toast"
import { NAME_REGEX } from "@/lib/utils"

import { enterDetailsSchema, EnterDetailsValues } from "./utils"

type EnterDetailsProps = Readonly<{
  onFinish: () => void
}>

export function EnterDetails({ onFinish }: EnterDetailsProps) {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(enterDetailsSchema()),
  })
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = form

  const { toast } = useToast()

  const onSubmit = async (data: Readonly<EnterDetailsValues>) => {
    const res = await handleContactSubmission(data)

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
                label="First name"
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
                label="Last name"
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
            label="Email address"
            type="email"
            inputMode="email"
            placeholder="johndoe@gmail.com"
            pattern={undefined}
          />

          <PhoneNumberInput
            disabled={isSubmitting}
            control={control}
            name="phone"
            label="Phone number"
            placeholder="(000) 000-0000"
            type="tel"
            inputMode="tel"
          />

          <TextareaInput
            disabled={isSubmitting}
            name="message"
            control={control}
            label="Message (optional)"
            placeholder="Your message here..."
            inputMode="text"
          />

          <SubmitButton disabled={!isValid || isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
          </SubmitButton>
        </div>
      </form>
    </Form>
  )
}
