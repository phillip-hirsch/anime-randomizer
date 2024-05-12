import { Anime } from '../types'

/**
 * Tries to build an aired date string from the API. Otherwise, returns a blank string.
 */
export const displayAired = ({ randomAnime }: Anime) => {
  let airDate = ''
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
  try {
    airDate += months[randomAnime.aired.prop.from.month - 1]
    airDate += ' ' + randomAnime.aired.prop.from.day
    airDate += ', ' + randomAnime.aired.prop.from.year
    // can add status ('Finished Airing', etc.)
    // airDate += ' (' + anime.randomAnime.status + ')'
    if (randomAnime.aired.prop.from.month != null) return airDate
    return ''
  } catch (error) {
    null
  }

  return ''
}
