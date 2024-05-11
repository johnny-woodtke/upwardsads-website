"use server"

import showdown from "showdown"

import { EnterDetailsValues } from "@/components/Contact/utils"
import { ADMIN_EMAILS, sendEmail } from "@/services/mailjet"

export async function handleContactSubmission(data: Readonly<EnterDetailsValues>) {
  try {
    // make html
    const textPart = `####Name\n${data.firstName} ${data.lastName}\n####Email\n${data.email}\n####Phone\n${data.phone}\n####Message\n${data.message}`
    const html = new showdown.Converter().makeHtml(textPart)

    // send email to admins
    await sendEmail({
      to: ADMIN_EMAILS,
      subject: `${data.firstName} ${data.lastName} submitted a contact form`,
      textPart: data.message || textPart,
      html,
    })
  } catch (e: any) {
    console.error("Error sending contact email", e.message)
    return { ok: false, message: "Error sending contact email" }
  }

  return { ok: true }
}
