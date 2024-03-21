import { clientPOST, OK } from "@/lib/client/utils"

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

export type ContactPOSTReturnType = void

export type ContactPOSTResponseType = OK

export function contactPOST(props: Readonly<ContactPOSTProps>) {
  return clientPOST<ContactPOSTResponseType>("/api/contact", props)
}
