import { IconType } from "react-icons"
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi"
import { SiMedium } from "react-icons/si"

export type Social = {
  title: string
  url: string
  Icon: IconType
}

const socials: Social[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/rishav-a-0482051a7/",
    Icon: FiLinkedin,
  },
  {
    title: "GitHub",
    url: "https://github.com/ris345",
    Icon: FiGithub,
  },
  {
    title: "X",
    url: "https://x.com/345Rishav",
    Icon: FiTwitter,
  },
  {
    title: "Instagram",
    url: "",
    Icon: FiInstagram,
  },
  {
    title: "Medium",
    url: "https://medium.com/@rishavacharya_345",
    Icon: SiMedium,
  },
]

export default socials
