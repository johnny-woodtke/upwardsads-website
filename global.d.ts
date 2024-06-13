type GtagCommand = "event"

type GtagEvent = "contact_form_submit"

type GtagParameters<T extends GtagCommand> = T extends "event" ? GtagEvent : never

type EventParameters<T extends GtagCommand, K extends GtagEvent = GtagParameters<T>> = T extends "event"
  ? {
      contact_form_submit: { event_category: "Contact"; event_label: "Contact Form" }
    }[K]
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
