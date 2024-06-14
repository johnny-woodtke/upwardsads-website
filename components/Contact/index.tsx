import { ContactFormProvider } from "./ContactFormProvider"
import { MultiStepContactForm } from "./MultiStepContactForm"

export function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
      <h2 className="mb-8 w-full  text-start text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">Get started</h2>
      <div className="flex w-full flex-col items-center justify-center">
        <p className="mb-8 w-full text-start tracking-tight text-gray-500 sm:text-lg lg:mb-12 xl:text-xl">
          Ready to take your business opportunities to the next level? Contact us today to schedule a free consultation.
        </p>
        <div className="w-full">
          <ContactFormProvider>
            <MultiStepContactForm />
          </ContactFormProvider>
        </div>
      </div>
    </div>
  )
}
