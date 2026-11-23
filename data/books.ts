export type Book = {
  title: string
  author: string
  /** Optional one-liner on why it's here. Yours to write. */
  note?: string
  /** Optional link — publisher page, author site, wherever you'd send people. */
  link?: string | null
}

/**
 * Books for the Bookshelf section. Add an entry and it appears on the
 * homepage; while this list is empty the section shows a placeholder.
 */
const books: Book[] = [
  {
    title: "The Singularity Is Nearer: When We Merge with AI",
    author: "Ray Kurzweil",
    link: "https://www.goodreads.com/en/book/show/45024007-the-singularity-is-nearer",
  },
]

export default books
