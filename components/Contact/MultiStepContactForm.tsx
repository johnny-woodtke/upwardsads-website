"use client"

import { usePathname } from "next/navigation"
import { ReactNode } from "react"

import { useContactFormContext } from "./ContactFormProvider"
import { EnterDetails } from "./EnterDetails"

export enum Step {
  EnterDetails = "EnterDetails",
}

export function MultiStepContactForm() {
  const { currentStep } = useContactFormContext()

  const pathname = usePathname() as `/${string}`

  const stepElements: Record<Step, ReactNode> = {
    [Step.EnterDetails]: (
      <EnterDetails
        onFinish={() => {
          // record google analytics event
          console.log("window.gtag", window.gtag)
          window.gtag("event", "contact_form_submit", {
            page: pathname,
          })
        }}
      />
    ),
  }

  return stepElements[currentStep]
}
