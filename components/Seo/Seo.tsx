import { DefaultSeo } from "next-seo"
import Head from "next/head"

export function Seo() {
  return (
    <>
      <Head>
        <meta name="keywords" content="Platform Engineer, DevOps Engineer, AWS AI Specialist, AI System Architect, Production AI Engineer, LLM Integration Expert, AWS ECS, AWS Lambda, AWS S3, Datadog, CloudWatch, RDS PostgreSQL, CloudFront, AWS SQS, AWS SES, Docker, Kubernetes, Prometheus, Grafana, AWS Step Functions, EventBridge, DynamoDB, Node.js, Python, React, CI/CD, AI Infrastructure, AI Pipeline, AI Monitoring" />
        <meta name="author" content="Rishav A." />
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
              "name": "Rishav A.",
              "alternateName": "Rishav Acharya",
              "jobTitle": "Platform Engineer & DevOps Engineer",
              "url": "https://rishavdacharya.dev",
              "sameAs": [
                "https://github.com/Ris345",
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
        title="Rishav A. | Platform Engineer & DevOps Engineer - AWS AI Specialist"
        description="Platform Engineer and DevOps Engineer specializing in building production-ready AI systems on AWS. Expert in ECS, Lambda, S3, Datadog monitoring, and scalable AI infrastructure that handles real user traffic."
        canonical="https://rishavdacharya.dev"
        additionalMetaTags={[
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "twitter:site",
            content: "@rishavacharya",
          },
          {
            name: "twitter:creator",
            content: "@rishavacharya",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://rishavdacharya.dev",
          site_name: "Rishav A. | Platform Engineer",
          title: "Rishav A. | Platform Engineer & DevOps Engineer - AWS AI Specialist",
          description:
            "Platform Engineer and DevOps Engineer specializing in building production-ready AI systems on AWS. Expert in ECS, Lambda, S3, Datadog monitoring, and scalable AI infrastructure that handles real user traffic.",
          images: [
            {
              url: "https://rishavdacharya.dev/images/profile.jpg",
              alt: "Rishav A. - Platform Engineer & DevOps Engineer specializing in AWS AI systems",
              height: 1200,
              width: 630,
              type: "image/jpeg",
            },
          ],
        }}
      />
    </>
  )
}
