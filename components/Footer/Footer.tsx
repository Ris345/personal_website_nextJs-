import * as style from "./footer.css"
import { Socials } from "../Socials"

export function Footer() {
  return (
    <footer className={style.container}>
      <Socials viewport="mobile" />
      <div>Handcrafted by Rishav A. © {new Date().getFullYear()} </div>
    </footer>
  )
}
