import { AnimeTitle } from '..'
import { renderItems, type Anime } from '../../utils'
import { List } from '../List'

/**
 * Main function that displays random anime information
 */
export const Randomizer = ({ randomAnime }: Anime) => (
  <main>
    <div>
      <AnimeTitle randomAnime={randomAnime} />
      <List items={renderItems({ randomAnime })} />
    </div>
  </main>
)
