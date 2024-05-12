import { AnimeTitle } from '..'
import { renderItems, type Anime } from '../../utils'
import { List } from '../List'

/**
 * Main function that displays random anime information
 */
export const Randomizer = (anime: Anime) => (
  <main>
    <AnimeTitle {...anime} />
    <List items={renderItems(anime)} />
  </main>
)
