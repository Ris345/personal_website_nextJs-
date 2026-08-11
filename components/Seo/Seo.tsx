import { DefaultSeo } from "next-seo"
import Head from "next/head"

export function Seo() {
  return (
    <>
      <Head>
        <meta name="keywords" content="Rishav Acharya, Platform Engineer, DevOps Engineer, AWS AI Specialist, AI System Architect, Production AI Engineer, LLM Integration Expert, AWS ECS, AWS Lambda, AWS S3, Datadog, CloudWatch, RDS PostgreSQL, CloudFront, AWS SQS, AWS SES, Docker, Kubernetes, Prometheus, Grafana, AWS Step Functions, EventBridge, DynamoDB, Node.js, Python, React, CI/CD, AI Infrastructure, AI Pipeline, AI Monitoring" />
        <meta name="author" content="Rishav Acharya" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rishav Acharya",
              "alternateName": "Rishav A.",
              "jobTitle": "Platform Engineer & DevOps Engineer",
              "url": "https://rishavacharya.dev",
              "image": "https://rishavacharya.dev/images/og-image.jpg",
              "sameAs": [
                "https://github.com/Ris345",
                "https://www.linkedin.com/in/rishav-a-0482051a7/",
                "https://x.com/345Rishav",
                "https://medium.com/@rishavacharya_345",
                "mailto:rishav345@gmail.com"
              ],
              "description": "Platform Engineer and DevOps Engineer specializing in building production-ready AI systems on AWS. Expert in ECS, Lambda, S3, Datadog monitoring, and scalable AI infrastructure.",
              "knowsAbout": [
                "Platform Engineering",
                "DevOps Engineering",
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
                "Prometheus",
                "Grafana",
                "AWS Step Functions",
                "EventBridge",
                "DynamoDB",
                "AI Infrastructure",
                "AI Pipeline Architecture",
                "Production AI Systems"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance/Independent"
              }
            })
          }}
        />
      </Head>
      <DefaultSeo
        title="Rishav Acharya | Platform Engineer & DevOps Engineer - AWS AI Specialist"
        description="Rishav Acharya is a Platform Engineer and DevOps Engineer specializing in building production-ready AI systems on AWS. Expert in ECS, Lambda, S3, Datadog monitoring, and scalable AI infrastructure that handles real user traffic."
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
          site_name: "Rishav Acharya | Platform Engineer",
          title: "Rishav Acharya | Platform Engineer & DevOps Engineer - AWS AI Specialist",
          description:
            "Rishav Acharya is a Platform Engineer and DevOps Engineer specializing in building production-ready AI systems on AWS. Expert in ECS, Lambda, S3, Datadog monitoring, and scalable AI infrastructure that handles real user traffic.",
          images: [
            {
              url: "https://rishavacharya.dev/images/og-image.jpg",
              alt: "Rishav Acharya - Platform Engineer & DevOps Engineer specializing in AWS AI systems",
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
