import { type Anime } from '../types'

/**
 * Tries to return genres from API, else returns blank
 * */
export const displayGenre = ({ randomAnime }: Anime) => {
  let genreList = ''

  if (!randomAnime.genres) {
    return ''
  }

  try {
    for (let i = 0; i < randomAnime.genres.length!; i++)
      if (i < randomAnime.genres.length - 1)
        genreList += randomAnime.genres[i].name + ', '
      else genreList += randomAnime.genres[i].name
    return genreList
  } catch (error) {
    null
  }

  return ''
}
