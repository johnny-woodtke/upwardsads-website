import { POSTProps } from "@/lib/utils"

export type Response<T> = Readonly<Omit<globalThis.Response, "json"> & { json: () => Promise<Readonly<T>> }>

export type OK = { status: "ok" }

export function clientPOST<T extends OK>(url: string, body: POSTProps) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }) as Promise<Response<T>>
}
