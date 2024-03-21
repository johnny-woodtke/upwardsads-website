import { clientPOST } from "@/lib/utils"

export type ContactPOSTContactProps = {
  method: "contact"
  data: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
}

export type ContactPOSTCalendarProps = {
  method: "calendar"
  data: {
    date: string
    title: string
    description: string
    invited: string[]
  }
}

export type ContactPOSTProps = ContactPOSTContactProps | ContactPOSTCalendarProps

export function contactPOST(props: Readonly<ContactPOSTProps>) {
  return clientPOST("/api/contact", props)
}
