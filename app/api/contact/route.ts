import { NextResponse } from "next/server"

import type {
  ContactPOSTCalendarProps,
  ContactPOSTContactProps,
  ContactPOSTProps,
  ContactPOSTResponseType,
  ContactPOSTReturnType,
} from "@/lib/client/contact"
import { ExtractPOSTHandlers, Request } from "@/lib/server/utils"

const POSTHandlers: ExtractPOSTHandlers<ContactPOSTProps, Promise<ContactPOSTReturnType>> = {
  async contact(data: ContactPOSTContactProps["data"]) {
    console.log("Contact form submitted:", data)
  },
  async calendar(data: ContactPOSTCalendarProps["data"]) {
    console.log("Calendar event submitted:", data)
  },
}

export async function POST(req: Request<ContactPOSTProps>) {
  console.log("hello", process.env.API_KEY)
  const body = await req.json()
  await POSTHandlers[body.method](body.data as any)
  return NextResponse.json<ContactPOSTResponseType>({ status: "ok" })
}
