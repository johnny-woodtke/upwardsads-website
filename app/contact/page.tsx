import { Metadata } from "next"

import { TITLE } from "@/app/data"
import { metadata as defaultMetadata } from "@/app/layout"
import { Contact as ContactForm } from "@/components/Contact"
import { Section } from "@/components/Section"

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
    <Section border={false}>
      <ContactForm />
    </Section>
  )
}
