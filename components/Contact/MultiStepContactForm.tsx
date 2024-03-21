"use client"

import { ReactNode } from "react"

import { EnterDetails, useContactFormContext } from "@/components/Contact"

export enum Step {
  EnterDetails = "EnterDetails",
}

export function MultiStepContactForm() {
  const { currentStep } = useContactFormContext()

  const stepElements: Record<Step, ReactNode> = {
    [Step.EnterDetails]: <EnterDetails onFinish={() => {}} />,
  }

  return stepElements[currentStep]
}
