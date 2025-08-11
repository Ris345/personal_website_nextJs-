/* eslint-disable react/jsx-no-target-blank */

import * as styles from "./callToAction.css"

type ICallToAction =
  | {
      mode: "link"
      text: string
      link: string
      type: "primary_big" | "primary_small" | "red_big" | "blue_big"
      style?: React.CSSProperties
      openInNewTab?: boolean
    }
  | {
      mode: "button"
      text: string
      onClick: () => void
      type: "primary_big" | "primary_small" | "red_big" | "blue_big"
      style?: React.CSSProperties
    }
export function CallToAction(props: ICallToAction) {
  switch (props.mode) {
    case "link":
      return (
        <a
          className={styles.button[props.type]}
          href={props.link}
          style={props.style}
          target={props.openInNewTab ? "_blank" : undefined}
          rel={props.openInNewTab ? "noopener noreferrer" : undefined}
        >
          {props.text}
        </a>
      )
    case "button":
      return (
        <button
          className={styles.button[props.type]}
          style={props.style}
          onClick={props.onClick}
        >
          {props.text}
        </button>
      )

    default:
      return <></>
  }
}
