import { Anime } from '../types'

/**
 * Tries to truncate the synopsis from the API. If the synopsis is null, returns a blank string.
 */
export const displaySynopsis = ({ randomAnime }: Anime) => {
  try {
    // can change truncation length by changing '> 0' to '>= num' and change slice to same num
    if (randomAnime.synopsis.length > 0) {
      return randomAnime.synopsis
    } else return randomAnime.synopsis.slice(0, 1) + '...'
  } catch (error) {
    null
  }

  return ''
}
