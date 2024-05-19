import { type Anime } from '../types'

/**
 * Tries to truncate the synopsis from the API. If the synopsis is null, returns a placeholder string.
 */
export const displaySynopsis = (anime: Anime) => {
  const maxLength = 800

  if (!anime.synopsis)
    return 'No synopsis information has been added to this title.'

  try {
    if (anime.synopsis.length > maxLength) {
      return anime.synopsis.slice(0, maxLength) + '...'
    }

    return anime.synopsis
  } catch (error) {
    throw new Error('Error in displaySynopsis: ' + error)
  }
}
