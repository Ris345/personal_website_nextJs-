export type Credential = {
  name: string
  /** Who issued it — shown as the card's eyebrow label. */
  issuer: string
  link: string
}

/** Copy lifted verbatim from the previous Certifications markup. */
export const certifications: Credential[] = [
  {
    name: "Datadog Certified: APM & Distributed Tracing Fundamentals",
    issuer: "Datadog",
    link: "https://www.credly.com/badges/36cf2c57-0ef3-4402-9911-3d2472023e20",
  },
]

export const badges: Credential[] = [
  {
    name: "AWS Cloud Quest: Solutions Architect",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/d90a1f72-47b1-4068-9103-772e2732bb37/public_url",
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/org/amazon-web-services/badge/aws-cloud-quest-cloud-practitioner",
  },
]
