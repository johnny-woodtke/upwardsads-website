type GtagCommand = "event"

type GtagParameters<T extends GtagCommand> = T extends "event" ? "contact_form_submit" : never

type EventParameters<T extends GtagCommand> = T extends "event"
  ? {
      event_category: "Contact"
      event_label: "Contact Form"
    }
  : never

declare global {
  interface Window {
    gtag<T extends GtagCommand>(
      command: T,
      eventName: GtagParameters<T>,
      ...parameters: EventParameters<T> extends never ? [] : [EventParameters<T>]
    ): void
  }
}

export {}
