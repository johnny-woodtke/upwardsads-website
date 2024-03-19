"use client"

import { ReactNode } from "react"

import { EnterDetails, useContactFormContext } from "@/components/Contact"
import { useToast } from "@/components/ui/use-toast"

export enum Step {
  EnterDetails = "EnterDetails",
}

export function MultiStepContactForm() {
  const { currentStep } = useContactFormContext()

  const { toast } = useToast()

  const stepElements: Record<Step, ReactNode> = {
    [Step.EnterDetails]: (
      <EnterDetails
        onFinish={() => {
          toast({
            title: "Thank you for contacting us!",
            description: "We will get back to you as soon as possible.",
          })
        }}
      />
    ),
  }

  return stepElements[currentStep]
}
