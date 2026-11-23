import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "./theme.css"

export const page = style({
  margin: "0px auto",
  // The fixed header overlaps the top of the page on a direct load.
  padding: "150px 0px 100px",
  maxWidth: "1000px",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "120px 0px 80px",
    },
  },
})

export const intro = style({
  maxWidth: "650px",
  lineHeight: theme.lineHeight.medium,
  marginBottom: theme.space.extraLarge,
})

export const postList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
  width: "100%",
})

export const postCard = style({
  display: "block",
  padding: "1.5rem",
  borderRadius: theme.borderRadius,
  border: `1px solid ${theme.colors.grey}`,
  transition: theme.transition,
  selectors: {
    "&:hover, &:focus-visible": {
      borderColor: theme.colors.primary,
      transform: "translateY(-3px)",
      boxShadow: theme.boxShadow,
    },
  },
})

export const postTitle = style({
  color: theme.colors.text.normal,
  fontSize: theme.fontSize.medium,
  margin: `0 0 ${theme.space.medium}`,
})

export const meta = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: theme.space.medium,
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.primary,
  marginBottom: theme.space.large,
})

export const metaDot = style({
  color: theme.colors.text.dimmed,
})

export const excerpt = style({
  margin: 0,
  lineHeight: theme.lineHeight.medium,
})

export const tagList = style({
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: theme.space.medium,
  margin: `${theme.space.large} 0 0`,
  padding: 0,
})

export const tag = style({
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.text.dimmed,
  border: `1px solid ${theme.colors.grey}`,
  borderRadius: "999px",
  padding: "0.15rem 0.75rem",
})

export const empty = style({
  fontFamily: theme.fonts.monospace,
  color: theme.colors.text.dimmed,
})

export const backLink = style({
  display: "inline-block",
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.primary,
  marginBottom: theme.space.extraLarge,
  ":hover": {
    textDecoration: "underline",
  },
})

export const feedLink = style({
  display: "inline-block",
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.primary,
  marginTop: theme.space.extraLarge,
  ":hover": {
    textDecoration: "underline",
  },
})

export const articleTitle = style({
  color: theme.colors.text.normal,
  fontSize: "2.6rem",
  lineHeight: 1.2,
  margin: `0 0 ${theme.space.large}`,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "2rem",
    },
  },
})

/** Wraps the markdown-rendered HTML, which carries no class names of its own. */
export const postBody = style({
  maxWidth: "720px",
  lineHeight: theme.lineHeight.medium,
  fontSize: theme.fontSize.small,
})

globalStyle(`${postBody} h2`, {
  color: theme.colors.text.normal,
  fontSize: "1.6rem",
  marginTop: "2.5rem",
  marginBottom: theme.space.large,
})

globalStyle(`${postBody} h3`, {
  color: theme.colors.text.normal,
  fontSize: "1.25rem",
  marginTop: "2rem",
  marginBottom: theme.space.medium,
})

globalStyle(`${postBody} p, ${postBody} li`, {
  lineHeight: theme.lineHeight.medium,
})

globalStyle(`${postBody} a`, {
  color: theme.colors.primary,
  textDecoration: "underline",
})

globalStyle(`${postBody} img`, {
  maxWidth: "100%",
  height: "auto",
  borderRadius: theme.borderRadius,
})

globalStyle(`${postBody} blockquote`, {
  margin: `${theme.space.extraLarge} 0`,
  padding: `${theme.space.medium} ${theme.space.large}`,
  borderLeft: `3px solid ${theme.colors.primary}`,
  color: theme.colors.text.dimmed,
  fontStyle: "italic",
})

globalStyle(`${postBody} code`, {
  fontFamily: theme.fonts.monospace,
  fontSize: "0.9em",
  background: theme.colors.darkGrey,
  color: theme.colors.text.normal,
  borderRadius: "4px",
  padding: "0.1rem 0.35rem",
})

globalStyle(`${postBody} pre`, {
  background: theme.colors.darkGrey,
  borderRadius: theme.borderRadius,
  padding: theme.space.large,
  // Long code lines must scroll inside the block, not widen the page.
  overflowX: "auto",
})

globalStyle(`${postBody} pre code`, {
  background: "none",
  padding: 0,
})

globalStyle(`${postBody} table`, {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: theme.space.extraLarge,
})

globalStyle(`${postBody} th, ${postBody} td`, {
  border: `1px solid ${theme.colors.grey}`,
  padding: theme.space.medium,
  textAlign: "left",
})

globalStyle(`${postBody} hr`, {
  border: "none",
  borderTop: `1px solid ${theme.colors.grey}`,
  margin: `${theme.space.extraLarge} 0`,
})

export const canonicalNote = style({
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.text.dimmed,
  marginBottom: theme.space.extraLarge,
})

/** The compact post list embedded in the homepage Blog section. */
export const homeList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.space.large,
  width: "100%",
})

export const homeListItem = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.space.extraSmall,
})

export const homeListDate = style({
  fontFamily: theme.fonts.monospace,
  fontSize: theme.fontSize.extraSmall,
  color: theme.colors.primary,
})

export const homeListTitle = style({
  color: theme.colors.text.normal,
  ":hover": {
    color: theme.colors.primary,
  },
})
