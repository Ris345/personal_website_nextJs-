import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../styles/theme.css"

/**
 * The shelf: spines stand side by side on a board. Spine widths, heights and
 * colors vary by index so a row of books reads as objects rather than tabs.
 */
export const shelf = style({
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  gap: "5px",
  listStyle: "none",
  margin: 0,
  // Room for the board below and for a spine to lift on hover.
  padding: "14px 0 14px",
  width: "100%",
  // Narrow viewports scroll the shelf sideways rather than squashing spines.
  overflowX: "auto",
  overflowY: "hidden",
})

/** The board the books rest on. */
export const board = style({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "11px",
  borderRadius: "3px",
  background: `linear-gradient(180deg, ${theme.colors.primary} 0%, #5a2a20 55%, #2a0b06 100%)`,
  boxShadow: "rgba(0, 0, 0, 0.55) 0px 10px 18px -6px",
})

const baseSpine = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // Vertical-rl plus a 180deg turn reads bottom-to-top, like most real spines.
  writingMode: "vertical-rl",
  transform: "rotate(180deg)",
  padding: "0.8rem 0.4rem",
  borderRadius: "2px 4px 4px 2px",
  boxSizing: "border-box",
  flexShrink: 0,
  transition: theme.transition,
  selectors: {
    // Head and tail bands, plus a hint of the page block at the fore edge.
    "&::before": {
      content: "",
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      boxShadow: `inset 0 0 0 1px rgba(0,0,0,0.35), inset 0 14px 0 -11px rgba(255,255,255,0.35), inset 0 -14px 0 -11px rgba(255,255,255,0.35)`,
      pointerEvents: "none",
    },
    "&:hover, &:focus-visible": {
      // Pulled part-way off the shelf.
      transform: "rotate(180deg) translateY(-10px)",
      boxShadow: "rgba(0, 0, 0, 0.6) 0px 16px 24px -10px",
      filter: "brightness(1.12)",
    },
  },
})

/** Cover colors, cycled by index. */
export const spine = styleVariants({
  clay: [
    baseSpine,
    {
      background: `linear-gradient(90deg, #8d4f46 0%, ${theme.colors.primary} 45%, #7a4138 100%)`,
    },
  ],
  ink: [
    baseSpine,
    {
      background: `linear-gradient(90deg, #1f3d63 0%, ${theme.colors.blue} 48%, #24456e 100%)`,
    },
  ],
  ember: [
    baseSpine,
    {
      background: `linear-gradient(90deg, #a83f1c 0%, ${theme.colors.red} 46%, #92371a 100%)`,
    },
  ],
  bone: [
    baseSpine,
    {
      background: `linear-gradient(90deg, #b8a49a 0%, #e6d3d0 48%, #a8928a 100%)`,
    },
  ],
})

/** Height and width variation, cycled by index. */
export const size = styleVariants({
  tall: { height: "230px", width: "52px" },
  mid: { height: "210px", width: "44px" },
  short: { height: "196px", width: "56px" },
  slim: { height: "220px", width: "40px" },
})

const baseSpineText = style({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxHeight: "100%",
})

export const title = styleVariants({
  onDark: [
    baseSpineText,
    {
      color: "#ffffff",
      fontWeight: theme.fontWeight.bold,
      fontSize: "0.8rem",
      letterSpacing: "0.01em",
      margin: 0,
    },
  ],
  onLight: [
    baseSpineText,
    {
      color: theme.colors.background,
      fontWeight: theme.fontWeight.bold,
      fontSize: "0.8rem",
      letterSpacing: "0.01em",
      margin: 0,
    },
  ],
})

export const author = styleVariants({
  onDark: [
    baseSpineText,
    {
      fontFamily: theme.fonts.monospace,
      fontSize: "0.62rem",
      color: "rgba(255,255,255,0.75)",
    },
  ],
  onLight: [
    baseSpineText,
    {
      fontFamily: theme.fonts.monospace,
      fontSize: "0.62rem",
      color: "rgba(55,15,8,0.75)",
    },
  ],
})

export const empty = style({
  fontFamily: theme.fonts.monospace,
  color: theme.colors.primary,
  border: `1px dashed ${theme.colors.grey}`,
  borderRadius: theme.borderRadius,
  padding: "2rem 1.5rem",
  textAlign: "center",
  width: "100%",
  maxWidth: "650px",
})
