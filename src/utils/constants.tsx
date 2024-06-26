import { displayAired, displayGenre, displayImage, displaySynopsis } from '.'
import { ListItem } from '../components'
import type { Anime } from './types'

export const renderItems = (anime: Anime) => [
  {
    id: 'thumbnail',
    content: (
      <ListItem
        image={{
          className: 'thumbnail',
          src: displayImage(anime),
          alt: `Thumbnail image for ${anime.title}`,
        }}
      />
    ),
  },
  {
    id: 'type',
    content: <ListItem title="Type" content={anime.type} />,
  },
  {
    id: 'aired',
    content: <ListItem title="Aired" content={displayAired(anime)} />,
  },
  {
    id: 'episodes',
    content: (
      <ListItem
        title="Episodes"
        content={`${anime.episodes} ${anime.duration}`}
      />
    ),
  },
  {
    id: 'score',
    content: <ListItem title="Score" content={anime.score} />,
  },
  {
    id: 'rank-popularity',
    content: (
      <ListItem
        title="Rank/Popularity"
        content={`${anime.rank} / ${anime.popularity}`}
      />
    ),
  },
  {
    id: 'rating',
    content: <ListItem title="Rating" content={anime.rating} />,
  },
  {
    id: 'genre',
    content: <ListItem title="Genre" content={displayGenre(anime)} />,
  },
  {
    id: 'synopsis',
    content: <ListItem title="Synopsis" content={displaySynopsis(anime)} />,
  },
]
