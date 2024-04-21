"use server"

import { EnterDetailsValues } from "@/components/Contact"

export async function handleContactSubmission(data: Readonly<EnterDetailsValues>) {
  console.log("Contact form submitted with data:", data)
  console.log("API key", process.env.API_KEY)
  return { ok: true }
}
