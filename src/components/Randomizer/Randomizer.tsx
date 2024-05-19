import { AnimeTitle } from '..'
import { renderItems } from '../../utils'
import type { Anime } from '../../utils/types'
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
