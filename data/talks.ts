export type Talk = {
  date: Date
  event: string
  title: string
  type: "meetup" | "event"
  location: string
  link: string | null
}

const talks: Talk[] = [
  {
    date: new Date(2024, 8, 29),
    event: "useReactNYC",
    title: "useReactNYC",
    type: "",
    location: "NYC",
    link: "https://guild.host/events/reactnyc-meetup-doing-055myv",
  },
  {
    date: new Date(2024, 8, 15),
    event: "AICamp",
    title: "AICamp",
    type: "",
    location: "NYC",
    link: "https://www.aicamp.ai/event/eventdetails/W2024081514",
  }
]

export default talks
