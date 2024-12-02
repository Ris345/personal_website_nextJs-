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
    date: new Date(2024, 8, 15),
    event: "AICamp",
    title: "AICamp",
    type: 'event',
    location: "NYC",
    link: "https://www.aicamp.ai/",
  }
]

export default talks
