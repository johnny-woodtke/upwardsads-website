import { metadata } from "@/app/page"
import { ContactFormProvider, MultiStepContactForm } from "@/components/Contact"

export { metadata }

export default function Contact() {
  return (
    <>
      <section className="w-full max-w-screen-md">
        <div className="mx-auto h-full w-full p-8 lg:p-12">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h2 className="mb-8 w-full text-start text-3xl font-bold tracking-tight sm:text-4xl lg:mb-12 xl:text-5xl">
              Contact us
            </h2>
            <div className="w-full">
              <ContactFormProvider>
                <MultiStepContactForm />
              </ContactFormProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
