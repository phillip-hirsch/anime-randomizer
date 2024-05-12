import { type Anime } from '../types'

/**
 * Tries to truncate the synopsis from the API. If the synopsis is null, returns a blank string.
 */
export const displaySynopsis = (anime: Anime) => {
  const maxLength = 800

  if (!anime.synopsis) return ''

  try {
    if (anime.synopsis.length > maxLength) {
      return anime.synopsis.slice(0, maxLength) + '...'
    }
    return anime.synopsis
  } catch (error) {
    console.error('Error in displaySynopsis:', error)
    return ''
  }
}
