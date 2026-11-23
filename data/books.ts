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
  {
    title: "The Alignment Problem: Machine Learning and Human Values",
    author: "Brian Christian",
    link: "https://www.goodreads.com/en/book/show/50489349-the-alignment-problem",
  },
  {
    title:
      "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    author: "Gene Kim, Kevin Behr, George Spafford",
    link: "https://www.goodreads.com/en/book/show/17255186-the-phoenix-project",
  },
  {
    title:
      "Why Soccer Matters: A Look at More Than Sixty Years of International Soccer",
    author: "Pelé, Brian Winter",
    link: "https://www.goodreads.com/en/book/show/18114319-why-soccer-matters",
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    link: "https://www.goodreads.com/en/book/show/18007564-the-martian",
  },
  {
    title:
      "The Platform Engineer's Handbook: Build secure, developer-focused platforms that streamline modern software delivery",
    author: "Ajay Chankramath",
    link: "https://www.goodreads.com/book/show/241654092-the-platform-engineer-s-handbook",
  },
]

export default books
