import { type ClassValue, clsx } from "clsx"
import { NextRequest } from "next/server"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Request<T> = Readonly<Omit<NextRequest, "json"> & { json: () => Promise<T> }>

type POSTProps = {
  method: string
  data: any
}

export function clientPOST(url: string, body: POSTProps) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
}

export type ExtractPOSTHandlers<T extends POSTProps, ReturnType> = {
  [K in T as K["method"]]: (data: K["data"]) => ReturnType
}
