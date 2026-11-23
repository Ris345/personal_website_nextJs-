export type Speaking = {
  title: string
  description: string
  /** Where it lives — shown as the card's eyebrow label. */
  host: string
  /** Call to action on the card. */
  action: string
  link: string
}

/** Copy lifted verbatim from the previous Talks list. */
const speaking: Speaking[] = [
  {
    title: "AI Agent SDK Anote",
    description: "Technical deep dive into AI agent development",
    host: "YouTube",
    action: "Watch",
    link: "https://youtu.be/m52p3ERt2Io?t=646",
  },
  {
    title: "Agentic AI 5 day challenge",
    description: "Hands-on workshop on building AI agents",
    host: "AICamp",
    action: "View event",
    link: "https://www.aicamp.ai/event/eventdetails/W2025010100",
  },
  {
    title: "Infrastructure, Intelligence, and Developer Velocity",
    description: "Speeding up dev teams",
    host: "YouTube",
    action: "Watch",
    link: "https://www.youtube.com/watch?v=kb2X3jGHz3I",
  },
  {
    title: "Pale Blue Dot Launch",
    description: "Autonomous Intelligence Product Release",
    host: "YouTube",
    action: "Watch",
    link: "https://www.youtube.com/watch?v=7OB51V_PIIo&t=560s",
  },
]

export default speaking
