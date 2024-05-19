import { type Anime } from '../types'

/**
 * Tries to return genres from API, else returns blank
 * */
export const displayGenre = (anime: Anime) => {
  try {
    return (anime.genres || [])
      .filter((genre) => genre && genre.name)
      .map((genre) => genre.name)
      .join(', ')
  } catch (error) {
    throw new Error('Error in displayGenre: ' + error)
  }
}
