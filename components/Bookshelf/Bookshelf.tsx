import * as style from "./bookshelf.css"
import type { Book } from "../../data/books"

const COVERS = ["clay", "ink", "ember", "bone"] as const
const SIZES = ["tall", "mid", "short", "slim"] as const

/** The bone cover is light, so its lettering has to flip to dark. */
const isLightCover = (cover: (typeof COVERS)[number]) => cover === "bone"

/** "Title: subtitle" -> "Title". A spine only has room for the main title. */
function shortTitle(title: string): string {
  const at = title.indexOf(":")
  return at === -1 ? title : title.slice(0, at)
}

interface IBookshelf {
  books: Book[]
}

export function Bookshelf({ books }: IBookshelf) {
  if (books.length === 0) {
    return <p className={style.empty}>Coming soon</p>
  }

  return (
    <>
      <ul className={style.shelf}>
        {books.map((book, index) => {
          const cover = COVERS[index % COVERS.length]
          const tone = isLightCover(cover) ? "onLight" : "onDark"
          const spineClass = `${style.spine[cover]} ${
            style.size[SIZES[index % SIZES.length]]
          }`

          const spine = (
            <>
              <span className={style.title[tone]}>{shortTitle(book.title)}</span>
              <span className={style.author[tone]}>{book.author}</span>
            </>
          )

          return (
            <li key={book.title}>
              {book.link ? (
                <a
                  className={spineClass}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  // The spine is abbreviated; give assistive tech the whole title.
                  aria-label={`${book.title} by ${book.author}`}
                  title={`${book.title} — ${book.author}`}
                >
                  {spine}
                </a>
              ) : (
                <div className={spineClass} title={book.title}>
                  {spine}
                </div>
              )}
            </li>
          )
        })}
        <div className={style.board} aria-hidden="true" />
      </ul>

      <ul className={style.legend}>
        {books.map((book) => (
          <li className={style.legendItem} key={book.title}>
            <span className={style.legendAuthor}>{book.author}</span>
            {book.link ? (
              <a
                className={style.legendLink}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {book.title}
              </a>
            ) : (
              <span>{book.title}</span>
            )}
            {book.note && <p className={style.note}>{book.note}</p>}
          </li>
        ))}
      </ul>
    </>
  )
}
