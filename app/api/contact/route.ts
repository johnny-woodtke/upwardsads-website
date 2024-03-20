import { NextResponse } from "next/server"
import { ContactPOSTProps } from "@/lib/client"
import { SameOriginRequest } from "@/lib/utils"

export async function POST(req: Readonly<SameOriginRequest<ContactPOSTProps>>) {
  const body = await req.json()
  console.log("contact POST body", body)
  return NextResponse.json({ status: "ok" })
}
