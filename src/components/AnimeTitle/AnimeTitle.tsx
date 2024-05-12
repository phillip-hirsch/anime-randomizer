import { type Anime } from '../../utils'

/**
 * Header for title of anime, which is clickable link
 */
export const AnimeTitle = (anime: Anime) => (
  <>
    <h1 className="title">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <strong>{anime.title}</strong>
      </a>
    </h1>
    {/* Subtitle for english anime title */}
    <h2>{anime.title_english}</h2>
  </>
)
