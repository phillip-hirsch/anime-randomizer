import {
  displayAired,
  displayGenre,
  displayImage,
  displaySynopsis,
  type Anime,
} from '.'
import { ListItem } from '../components'

export const renderItems = ({ randomAnime }: Anime) => [
  {
    id: 'thumbnail',
    content: (
      <ListItem
        image={{
          className: 'thumbnail',
          src: displayImage({ randomAnime }),
          alt: 'anime thumbnail',
        }}
      />
    ),
  },
  {
    id: 'type',
    content: <ListItem title="Type" content={randomAnime.type} />,
  },
  {
    id: 'aired',
    content: <ListItem title="Aired" content={displayAired({ randomAnime })} />,
  },
  {
    id: 'episodes',
    content: (
      <ListItem
        title="Episodes"
        content={`${randomAnime.episodes} ${randomAnime.duration}`}
      />
    ),
  },
  {
    id: 'score',
    content: <ListItem title="Score" content={randomAnime.score} />,
  },
  {
    id: 'rank-popularity',
    content: (
      <ListItem
        title="Rank/Popularity"
        content={`${randomAnime.rank} / ${randomAnime.popularity}`}
      />
    ),
  },
  {
    id: 'rating',
    content: <ListItem title="Rating" content={randomAnime.rating} />,
  },
  {
    id: 'genre',
    content: <ListItem title="Genre" content={displayGenre({ randomAnime })} />,
  },
  {
    id: 'synopsis',
    content: (
      <ListItem title="Synopsis" content={displaySynopsis({ randomAnime })} />
    ),
  },
]
