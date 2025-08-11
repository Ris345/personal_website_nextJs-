export type Talk = {
  date: Date
  event: string
  title: string
  type: "talk" | "interview"
  location: string
  link: string | null
}

const talks: Talk[] = [
  {
    date: new Date(),
    event: "AICamp",
    title: "",
    type: "talk",
    location: "NYC",
    link: "https://www.aicamp.ai/",
  }
]

export default talks

