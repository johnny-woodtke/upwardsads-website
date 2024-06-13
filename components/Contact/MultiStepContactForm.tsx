"use client"

import { ReactNode } from "react"

import { useContactFormContext } from "./ContactFormProvider"
import { EnterDetails } from "./EnterDetails"

export enum Step {
  EnterDetails = "EnterDetails",
}

export function MultiStepContactForm() {
  const { currentStep } = useContactFormContext()

  const stepElements: Record<Step, ReactNode> = {
    [Step.EnterDetails]: (
      <EnterDetails
        onFinish={() => {
          // record google analytics event
          window.gtag("event", "contact_form_submit", {
            event_category: "Contact",
            event_label: "Contact Form",
          })
        }}
      />
    ),
  }

  return stepElements[currentStep]
}
