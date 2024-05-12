import missingCover from '../../assets/images/missing_cover.jpg'
import { type Anime } from '../types'

/**
 * Tries to return thumbnail from API, else returns placeholder
 * */
export const displayImage = ({ randomAnime }: Anime) => {
  try {
    return randomAnime.images.jpg.image_url
  } catch (error) {
    null
  }

  try {
    return randomAnime.images.webp.image_url
  } catch (error) {
    null
  }
  return missingCover
}
