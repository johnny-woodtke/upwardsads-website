import { isPossiblePhoneNumber } from "libphonenumber-js"
import { z } from "zod"

import { NAME_REGEX } from "@/lib/utils"

export function enterDetailsSchema() {
  return z.object({
    firstName: z.string().min(1, "Please enter your first name").regex(NAME_REGEX, "Please enter a valid first name"),
    lastName: z.string().min(1, "Please enter your last name").regex(NAME_REGEX, "Please enter a valid last name"),
    email: z.string().min(1, "Please enter your email").email("Please enter a valid email address"),
    phone: z
      .string()
      .min(1, "Please enter your phone number")
      .refine((value) => isPossiblePhoneNumber(value, "US"), {
        message: "Please enter a valid phone number",
      }),
  })
}

export type EnterDetailsValues = z.infer<ReturnType<typeof enterDetailsSchema>>
