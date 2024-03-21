import { NextRequest } from "next/server"
import { POSTProps } from "@/lib/utils"

export type Request<T extends POSTProps> = Readonly<Omit<NextRequest, "json"> & { json: () => Promise<Readonly<T>> }>

export type ExtractPOSTHandlers<T extends POSTProps, R> = {
  [K in T as K["method"]]: (data: K["data"]) => R
}
