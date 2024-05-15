import { Metadata } from "next"

import { TITLE } from "@/app/data"
import { metadata as defaultMetadata } from "@/app/layout"
import { ContactFormProvider, MultiStepContactForm } from "@/components/Contact"

export const metadata: Metadata = {
  title: TITLE + " | Contact us",
  description: "Contact us to set up a free consultation.",
  openGraph: {
    ...defaultMetadata.openGraph,
    url: "https://upwardsads.com/contact",
  },
}

export default function Contact() {
  return (
    <section className="w-full max-w-screen-md">
      <div className="mx-auto h-full w-full p-8 lg:p-12">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="mb-8 w-full text-start text-3xl font-bold tracking-tight sm:text-4xl lg:mb-12 xl:text-5xl">
            Contact us
          </h2>
          <p className="mb-8 w-full text-start tracking-tight text-gray-500 sm:text-lg lg:mb-12 xl:text-xl">
            Please fill out the form below to set up a free consultation.
          </p>
          <div className="w-full">
            <ContactFormProvider>
              <MultiStepContactForm />
            </ContactFormProvider>
          </div>
        </div>
      </div>
    </section>
  )
}
