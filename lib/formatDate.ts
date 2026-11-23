/**
 * Kept separate from lib/posts.ts so pages can render dates on the client:
 * importing anything from lib/posts pulls `fs` into the browser bundle, which
 * webpack cannot resolve.
 */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number)
  // Constructing from parts avoids the UTC-parsing shift that makes
  // `new Date("2026-01-01")` render as Dec 31 in western timezones.
  return new Date(year, (month ?? 1) - 1, day ?? 1).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  )
}
