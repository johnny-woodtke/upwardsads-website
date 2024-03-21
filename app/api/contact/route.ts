import { NextResponse } from "next/server"
import { ContactPOSTCalendarProps, ContactPOSTContactProps, ContactPOSTProps } from "@/lib/client"
import { ExtractPOSTHandlers, Request } from "@/lib/utils"

const POSTHandlers: ExtractPOSTHandlers<ContactPOSTProps, Promise<void>> = {
  async contact(data: ContactPOSTContactProps["data"]) {
    console.log("Contact form submitted:", data)
  },
  async calendar(data: ContactPOSTCalendarProps["data"]) {
    console.log("Calendar event submitted:", data)
  },
}

export async function POST(req: Request<ContactPOSTProps>) {
  const body = await req.json()
  await POSTHandlers[body.method](body.data as any)
  return NextResponse.json({ status: "ok" })
}
