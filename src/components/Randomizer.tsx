// this is our placeholder thumbnail image
import missingCover from '../assets/files/missing_cover.jpg'
import { Anime } from '../utils/types'

/* tries to return thumbnail from API, else returns placeholder */
const displayImage = ({ randomAnime }: Anime) => {
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

/* tries to return genres from API, else returns blank */
const displayGenre = ({ randomAnime }: Anime) => {
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

/* tries to truncate synopsis from API. If synopsis is null, returns blank */
const displaySynopsis = ({ randomAnime }: Anime) => {
  try {
    //can change truncation length by changing '> 0' to '>= num' and change slice to same num
    if (randomAnime.synopsis.length > 0) {
      return randomAnime.synopsis
    } else return randomAnime.synopsis.slice(0, 1) + '...'
  } catch (error) {
    null
  }

  return ''
}

/* tries to build aired date string from API. Else returns blank */
const displayAired = ({ randomAnime }: Anime) => {
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
    //can add status ('Finished Airing', etc.)
    //airDate += ' (' + anime.randomAnime.status + ')'
    if (randomAnime.aired.prop.from.month != null) return airDate
    return ''
  } catch (error) {
    null
  }

  return ''
}

/* main function that displays random anime information */
export const Randomizer = ({ randomAnime }: Anime) => (
  <main>
    <div>
      {/* header for title of anime, which is clickable link */}
      <h1 className="title">
        <a href={randomAnime.url} target="_blank" rel="noreferrer">
          <strong>{randomAnime.title}</strong>
        </a>
      </h1>
      {/* subtitle for english anime title */}
      <h2>{randomAnime.title_english}</h2>
      {/* anime info list */}
      <ul className="stats">
        <li>
          {/* we call displayImage to get the anime's thumbnail */}
          <img
            className="thumbnail"
            src={displayImage({ randomAnime })}
            alt="anime thumbnail"
          ></img>
        </li>
        <li>
          <strong>Type: </strong>
          {randomAnime.type}
        </li>
        <li>
          <strong>Aired: </strong>
          {displayAired({ randomAnime })}
        </li>
        <li>
          <strong>Episodes: </strong>
          {randomAnime.episodes} ({randomAnime.duration})
        </li>
        <li>
          <strong>Score: </strong>
          {randomAnime.score}
        </li>
        <li>
          <strong>Rank/Popularity: </strong>
          {randomAnime.rank} / {randomAnime.popularity}
        </li>
        <li>
          <strong>Rating: </strong>
          {randomAnime.rating}
        </li>
        <li>
          <strong>Genre: </strong>
          {displayGenre({ randomAnime })}
        </li>
        <li>
          <strong>Synopsis: </strong>
          {displaySynopsis({ randomAnime })}
        </li>
      </ul>
    </div>
  </main>
)
