export type Project = {
  name: string
  /** One or two sentences, no more — the repo carries the detail. */
  description: string
  /** Tech chips, drawn from what the project actually runs on. */
  tags: string[]
  repo: string
}

const projects: Project[] = [
  {
    name: "LifeOS — AI Productivity Agent",
    description:
      "An intelligent desktop companion that helps you stay focused, break down goals, and maintain a healthy flow state.",
    tags: ["Tauri", "Rust", "React", "TypeScript", "FastAPI", "GPT-4o"],
    repo: "https://github.com/Ris345/LifeOS-Productivity-AI-Agent",
  },
  {
    name: "Post Automator",
    description:
      "A serverless automation that posts to LinkedIn every Sunday, generating the content with OpenAI's GPT-4o-mini.",
    tags: ["AWS Lambda", "EventBridge", "ECR", "Terraform", "Python"],
    repo: "https://github.com/Ris345/post-automator",
  },
  {
    name: "Grandma's Pill Buddy",
    description:
      "An AI voice agent that calls elderly patients daily to check medication adherence and wellbeing, built for the ABI Hackathon. A judge agent scores every call and feeds what it learns into the next conversation's prompt.",
    tags: ["FastAPI", "Docker Compose", "Supabase", "Claude", "ElevenLabs", "Twilio"],
    repo: "https://github.com/Ris345/voice-hack",
  },
]

export default projects
