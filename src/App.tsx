import { Button, Error, Home, Loading, Randomizer } from './components'
import './main.css'
import { useFetchRandomAnime } from './utils'
import type { Anime, Page } from './utils/types'

const getContent = (page: Page, randomAnime: Anime) => {
  switch (page) {
    case 'Loading':
      return <Loading />
    case 'Random':
      return <Randomizer {...randomAnime} />
    case 'Error':
      return <Error />
    default:
      return <Home />
  }
}

const App = () => {
  const { randomAnime, page, fetchRandomAnime } = useFetchRandomAnime() as {
    randomAnime: Anime
    page: Page
    fetchRandomAnime: () => Promise<void>
  }

  return (
    <>
      <div>{getContent(page, randomAnime)}</div>
      <Button onClick={fetchRandomAnime} disabled={page === 'Loading'} />
    </>
  )
}

export default App
