import { type Anime } from '../types'

/**
 * Tries to build an aired date string from the API. Otherwise, returns a blank string.
 */
export const displayAired = (anime: Anime) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  if (!anime.aired.prop.from.month) return 'Not yet aired'

  try {
    const month = months[anime.aired.prop.from.month - 1]
    const day = anime.aired.prop.from.day
    const year = anime.aired.prop.from.year

    return `${month} ${day}, ${year}`
  } catch (error) {
    throw new Error('Error in displayAired: ' + error)
  }
}
