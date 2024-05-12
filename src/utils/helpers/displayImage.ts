import missingCover from '../../assets/images/missing_cover.jpg'
import { type Anime } from '../types'

/**
 * Tries to return thumbnail from API, else returns placeholder
 * */
export const displayImage = (anime: Anime) => {
  try {
    return (
      anime.images?.jpg?.image_url ||
      anime.images?.webp?.image_url ||
      missingCover
    )
  } catch (error) {
    console.error('Error in displayImage:', error)
    return missingCover
  }
}
