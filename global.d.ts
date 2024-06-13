type GtagCommand = "event"

type GtagParameters<T extends GtagCommand> = T extends "event" ? "contact_form_submit" : never

type EventParameters<T extends GtagCommand> = T extends "event"
  ? {
      page: `/${string}`
    }
  : never

declare global {
  interface Window {
    gtag<T extends GtagCommand>(command: T, eventName: GtagParameters<T>, eventParameters: EventParameters<T>): void
  }
}

export {}
