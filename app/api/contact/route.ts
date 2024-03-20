import { NextResponse } from "next/server"
import { ContactPOSTCalendarData, ContactPOSTContactData, ContactPOSTProps } from "@/lib/client"
import { MethodHandlers, SameOriginRequest } from "@/lib/utils"

const methodHandlers: MethodHandlers<ContactPOSTProps, Promise<void>> = {
  async contact(data: ContactPOSTContactData) {
    console.log("Contact form submitted:", data)
  },
  async calendar(data: ContactPOSTCalendarData) {
    console.log("Calendar event submitted:", data)
  },
}

export async function POST(req: SameOriginRequest<ContactPOSTProps>) {
  const body = await req.json()
  await methodHandlers[body.method](body.data)
  return NextResponse.json({ status: "ok" })
}
