interface Umami {
  track(eventName: string, eventData?: Record<string, any>): void;
}

declare global {
  interface Window {
    umami?: Umami;
  }
}

export {};
