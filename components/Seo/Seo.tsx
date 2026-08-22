import { DefaultSeo } from "next-seo"
import Head from "next/head"

export function Seo() {
  return (
    <>
      <Head>
        <meta name="keywords" content="Rishav Acharya, Software Engineer, Infrastructure Engineer, Platform Engineer, DevOps Engineer, Site Reliability Engineer, SRE, Observability, Chaos Engineering, APM, Distributed Tracing, Datadog, CloudWatch, AWS, AWS ECS, AWS Lambda, AWS S3, RDS PostgreSQL, CloudFront, AWS SQS, AWS SES, Docker, Kubernetes, Microservices, Prometheus, Grafana, AWS Step Functions, EventBridge, DynamoDB, Node.js, Python, React, CI/CD, AI Infrastructure, Tessitura Network" />
        <meta name="author" content="Rishav Acharya" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rishav Acharya",
              "alternateName": "Rishav A.",
              "jobTitle": "Software Engineer II",
              "url": "https://rishavacharya.dev",
              "image": "https://rishavacharya.dev/images/og-image.jpg",
              "sameAs": [
                "https://github.com/Ris345",
                "https://www.linkedin.com/in/rishav-a-0482051a7/",
                "https://x.com/345Rishav",
                "https://medium.com/@rishavacharya_345",
                "mailto:rishav345@gmail.com"
              ],
              "description": "Software Engineer II at Tessitura Network focused on infrastructure, observability, and chaos engineering. Experienced with AWS, Docker, CI/CD, Datadog APM, and building resilient, production-ready systems.",
              "knowsAbout": [
                "Infrastructure Engineering",
                "Platform Engineering",
                "DevOps Engineering",
                "Site Reliability Engineering",
                "Observability",
                "Chaos Engineering",
                "APM & Distributed Tracing",
                "AWS ECS",
                "AWS Lambda",
                "AWS S3",
                "Datadog Monitoring",
                "CloudWatch",
                "RDS PostgreSQL",
                "CloudFront CDN",
                "AWS SQS",
                "AWS SES",
                "Docker",
                "Kubernetes",
                "Microservices",
                "Prometheus",
                "Grafana",
                "AWS Step Functions",
                "EventBridge",
                "DynamoDB",
                "CI/CD",
                "AI Infrastructure"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Tessitura Network"
              }
            })
          }}
        />
      </Head>
      <DefaultSeo
        title="Rishav Acharya | Software Engineer — Infrastructure & Observability"
        description="Rishav Acharya is a Software Engineer II at Tessitura Network focused on infrastructure, observability, and chaos engineering. Experienced with AWS, Docker, CI/CD, and Datadog APM, building resilient systems that keep production reliable."
        canonical="https://rishavacharya.dev"
        additionalMetaTags={[
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "twitter:site",
            content: "@345Rishav",
          },
          {
            name: "twitter:creator",
            content: "@345Rishav",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://rishavacharya.dev",
          site_name: "Rishav Acharya | Software Engineer",
          title: "Rishav Acharya | Software Engineer — Infrastructure & Observability",
          description:
            "Rishav Acharya is a Software Engineer II at Tessitura Network focused on infrastructure, observability, and chaos engineering. Experienced with AWS, Docker, CI/CD, and Datadog APM, building resilient systems that keep production reliable.",
          images: [
            {
              url: "https://rishavacharya.dev/images/og-image.jpg",
              alt: "Rishav Acharya - Software Engineer specializing in infrastructure and observability",
              width: 1200,
              height: 630,
              type: "image/jpeg",
            },
          ],
        }}
      />
    </>
  )
}
