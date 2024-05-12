import { type Anime } from '../../utils'

/**
 * Header for title of anime, which is clickable link
 */
export const AnimeTitle = ({ randomAnime }: Anime) => (
  <>
    <h1 className="title">
      <a href={randomAnime.url} target="_blank" rel="noreferrer">
        <strong>{randomAnime.title}</strong>
      </a>
    </h1>
    {/* Subtitle for english anime title */}
    <h2>{randomAnime.title_english}</h2>
  </>
)
