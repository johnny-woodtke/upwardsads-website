import { clientPOST } from "@/lib/utils"

export type ContactPOSTProps =
  | {
      method: "contact"
      data: {
        firstName: string
        lastName: string
        email: string
        phone: string
      }
    }
  | {
      method: "calendar"
      data: {
        date: string
        title: string
        description: string
        invited: string[]
      }
    }

export function contactPOST(props: Readonly<ContactPOSTProps>) {
  return clientPOST("/api/contact", props)
}
