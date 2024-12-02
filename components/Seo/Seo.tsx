import { DefaultSeo } from "next-seo"

export function Seo() {
  return (
    <DefaultSeo
      title="Rishav A.| Software Engineer"
      description=""
      canonical="https://rishavdacharya.dev"
      openGraph={{
        type: "website",
        locale: "it_IT",
        url: "https://rishavdacharya.dev",
        site_name: "Rishav A| Software Engineer",
        title: "Rishav A.| Software Engineer",
        description:
          "",
        images: [
          {
            url: "",
            alt: "Rishav A. | Software Engineer ",
            height: 1200,
            width: 630,
            type: "image/png",
          },
        ],
      }}
    />
  )
}
