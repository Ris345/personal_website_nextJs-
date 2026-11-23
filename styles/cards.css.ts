import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "./theme.css"

/**
 * Shared card system for the Talks, Projects and Certifications sections, so
 * the three read as one family rather than three different list styles.
 */

export const grid = styleVariants({
  /** Two up — talks, certifications. */
  pair: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: theme.space.large,
    width: "100%",
    "@media": {
      "screen and (max-width: 768px)": {
        gridTemplateColumns: "minmax(0, 1fr)",
      },
    },
  },
  /** One up, full width — projects, which carry more prose. */
  single: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr)",
    gap: theme.space.large,
    width: "100%",
  },
})

const baseCard = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "1.4rem 1.5rem",
  borderRadius: theme.borderRadius,
  border: `1px solid ${theme.colors.grey}`,
  background: "rgba(255, 255, 255, 0.025)",
  transition: theme.transition,
  selectors: {
    // A left edge that colors in on hover, echoing the bookshelf spines.
    "&::before": {
      content: "",
      position: "absolute",
      top: "1.4rem",
      bottom: "1.4rem",
      left: 0,
      width: "2px",
      borderRadius: "2px",
      background: theme.colors.grey,
      transition: theme.transition,
    },
    "&:hover, &:focus-within": {
      transform: "translateY(-3px)",
      background: "rgba(255, 255, 255, 0.05)",
      borderColor: theme.colors.primary,
      boxShadow: theme.boxShadow,
    },
    "&:hover::before, &:focus-within::before": {
      background: `linear-gradient(${theme.colors.primary}, ${theme.colors.red})`,
      top: 0,
      bottom: 0,
    },
  },
})

export const card = style([baseCard])

/** For cards that are themselves a single link. */
export const cardLink = style([baseCard, { cursor: "pointer" }])

/** Small mono label above a card title — a source, issuer or host. */
export const eyebrow = style({
  fontFamily: theme.fonts.monospace,
  fontSize: "0.7rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: theme.colors.primary,
  marginBottom: theme.space.medium,
})

export const title = style({
  color: theme.colors.text.normal,
  fontSize: "1.1rem",
  lineHeight: 1.35,
  fontWeight: theme.fontWeight.bold,
  margin: 0,
})

export const body = style({
  margin: `${theme.space.large} 0 0`,
  fontSize: theme.fontSize.extraSmall,
  lineHeight: theme.lineHeight.medium,
})

/** Technical detail line — quieter than the description above it. */
export const meta = style({
  margin: `${theme.space.large} 0 0`,
  fontFamily: theme.fonts.monospace,
  fontSize: "0.78rem",
  lineHeight: theme.lineHeight.small,
  color: theme.colors.text.dimmed,
})

/** Pinned to the bottom so cards of different heights line their links up. */
export const action = style({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.space.medium,
  marginTop: "auto",
  paddingTop: theme.space.large,
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.primary,
  transition: theme.transition,
  selectors: {
    [`${baseCard}:hover &`]: {
      color: theme.colors.text.normal,
    },
  },
})

export const tagRow = style({
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: theme.space.medium,
  margin: `${theme.space.large} 0 0`,
  padding: 0,
})

export const tag = style({
  fontFamily: theme.fonts.monospace,
  fontSize: "0.72rem",
  color: theme.colors.text.dimmed,
  border: `1px solid ${theme.colors.grey}`,
  borderRadius: "999px",
  padding: "0.1rem 0.6rem",
})

export const intro = style({
  maxWidth: "650px",
  lineHeight: theme.lineHeight.medium,
  marginTop: 0,
  marginBottom: theme.space.extraLarge,
})

/** Sub-heading within a section ("Certifications", "Badges"). */
export const groupLabel = style({
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: theme.colors.text.dimmed,
  margin: `${theme.space.extraLarge} 0 ${theme.space.large}`,
  selectors: {
    "&:first-of-type": {
      marginTop: 0,
    },
  },
})
