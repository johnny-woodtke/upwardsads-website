"use client"

import { createContext, ReactNode, useContext, useState } from "react"

import { Step } from "./MultiStepContactForm"

interface IContactFormContext {
  currentStep: Step
  setCurrentStep: (step: Step) => void
}

const ContactFormContext = createContext<IContactFormContext | null>(null)

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(Step.EnterDetails)

  return (
    <ContactFormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  )
}

export function useContactFormContext() {
  const context = useContext(ContactFormContext)
  if (!context) {
    throw new Error("useContactFormContext must be used within a ContactFormProvider")
  }
  return context
}
