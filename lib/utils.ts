import { type ClassValue, clsx } from "clsx"
import { NextRequest } from "next/server"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function clientPOST(url: string, body: any) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
}

export type SameOriginRequest<T> = Readonly<Omit<NextRequest, "json"> & { json: () => Promise<T> }>
