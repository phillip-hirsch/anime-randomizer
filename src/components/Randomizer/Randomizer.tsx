import { Anime, renderItems } from '../../utils'
import { List } from '../List'

/**
 * Main function that displays random anime information
 */
export const Randomizer = ({ randomAnime }: Anime) => (
  <main>
    <div>
      {/* Header for title of anime, which is clickable link */}
      <h1 className="title">
        <a href={randomAnime.url} target="_blank" rel="noreferrer">
          <strong>{randomAnime.title}</strong>
        </a>
      </h1>
      {/* Subtitle for english anime title */}
      <h2>{randomAnime.title_english}</h2>
      {/* anime info list */}
      <List items={renderItems({ randomAnime })} />
    </div>
  </main>
)
