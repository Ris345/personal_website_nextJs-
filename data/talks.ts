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
    date: new Date(),
    event: "AICamp",
    title: "",
    type: '',
    location: "NYC",
    link: "https://www.aicamp.ai/",
  }
]

export default talks
