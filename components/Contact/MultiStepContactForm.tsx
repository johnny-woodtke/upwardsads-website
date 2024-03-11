"use client"

import { ReactNode } from "react"

import { Confirmation, EnterDetails, useContactFormContext } from "@/components/Contact"

export enum Step {
  EnterDetails = "EnterDetails",
  Confirmation = "Confirmation",
}

export function MultiStepContactForm() {
  const { currentStep, setCurrentStep } = useContactFormContext()

  const stepElements: Record<Step, ReactNode> = {
    [Step.EnterDetails]: (
      <EnterDetails
        onFinish={() => {
          setCurrentStep(Step.Confirmation)
        }}
      />
    ),
    [Step.Confirmation]: <Confirmation />,
  }

  return stepElements[currentStep]
}
