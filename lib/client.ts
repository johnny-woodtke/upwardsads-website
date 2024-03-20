import { clientPOST } from "@/lib/utils"

export type ContactPOSTContactData = {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export type ContactPOSTCalendarData = {
  date: string
  title: string
  description: string
  invited: string[]
}

export type ContactPOSTProps =
  | {
      method: "contact"
      data: ContactPOSTContactData
    }
  | {
      method: "calendar"
      data: ContactPOSTCalendarData
    }

export function contactPOST(props: Readonly<ContactPOSTProps>) {
  return clientPOST("/api/contact", props)
}
