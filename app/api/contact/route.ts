import { ContactPOSTProps } from "@/lib/client"
import { SameOriginRequest } from "@/lib/utils"

export async function POST(req: Readonly<SameOriginRequest<ContactPOSTProps>>) {
  const body = await req.json()
  return Response.json({ status: "ok" })
}
