import Mailjet from "node-mailjet"

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || "",
  apiSecret: process.env.MAILJET_SECRET_KEY || "",
})

type SendEmailProps = Readonly<{
  to: string[]
  from?: {
    email: string
    name: string
  }
  subject: string
  textPart: string
  html: string
}>

export const ADMIN_EMAILS = process.env.ADMIN_EMAILS?.split(",") ?? []

export const DEFAULT_FROM_EMAIL = process.env.DEFAULT_FROM_EMAIL ?? ""

export function sendEmail({ to, from, subject, textPart, html }: SendEmailProps) {
  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: from ?? {
          Email: process.env.DEFAULT_FROM_EMAIL ?? "",
          Name: "Upwards Ads",
        },
        To: to.map((Email) => ({
          Email,
        })),
        Subject: subject,
        TextPart: textPart,
        HTMLPart: html,
      },
    ],
  })
}
