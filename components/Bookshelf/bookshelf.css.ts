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
  background: "linear-gradient(180deg, #6d3a30 0%, #46190f 55%, #240905 100%)",
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
      boxShadow: `inset 0 0 0 1px rgba(0,0,0,0.35), inset 0 14px 0 -11px rgba(255,255,255,0.22), inset 0 -14px 0 -11px rgba(255,255,255,0.22)`,
      pointerEvents: "none",
    },
    "&:hover, &:focus-visible": {
      // Pulled part-way off the shelf.
      transform: "rotate(180deg) translateY(-10px)",
      boxShadow: "rgba(0, 0, 0, 0.6) 0px 16px 24px -10px",
      filter: "brightness(1.08)",
    },
  },
})

/**
 * Cover colors, cycled by index. Kept inside the site's warm palette — tints
 * and shades of the brown background and clay primary — so the shelf sits in
 * the page rather than shouting over it.
 */
export const spine = styleVariants({
  clay: [
    baseSpine,
    {
      background: `linear-gradient(90deg, #7a4138 0%, ${theme.colors.primary} 45%, #6d3a32 100%)`,
    },
  ],
  cocoa: [
    baseSpine,
    {
      background: "linear-gradient(90deg, #3d140d 0%, #5e2a20 48%, #40160f 100%)",
    },
  ],
  rust: [
    baseSpine,
    {
      background: "linear-gradient(90deg, #7f3a22 0%, #9c4f2e 46%, #733420 100%)",
    },
  ],
  taupe: [
    baseSpine,
    {
      background: "linear-gradient(90deg, #8f7a72 0%, #b09a92 48%, #86716a 100%)",
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
