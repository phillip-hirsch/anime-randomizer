import { useState } from 'react'
import { Home, Loading, Randomizer } from './components'
import './main.css'
import { Anime } from './utils/types'

const App = () => {
  const [randomAnime, setRandomAnime] = useState({} as Anime['randomAnime'])
  const [page, setPage] = useState('Home')

  /**
   * Fetches a random anime from Jikan's API.
   */
  const fetchRandomAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/random/anime`).then(
      (res) => res.json()
    )

    setPage('Loading')
    setRandomAnime(temp.data as Anime['randomAnime'])

    // Wait for timeout to artificially lengthen load time
    await new Promise((r) => setTimeout(r, 2500))

    setPage('Random')
  }

  if (page === 'Loading') {
    return (
      <div className="App">
        <div>
          <Loading />
        </div>
        <div>
          <button disabled>Random</button>
        </div>
      </div>
    )
  }

  if (page === 'Random') {
    return (
      <div className="App">
        <div>
          <Randomizer randomAnime={randomAnime} />
        </div>
        <div>
          <button onClick={() => fetchRandomAnime()}>Random</button>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div>
        <Home />
      </div>
      <div>
        <button onClick={() => fetchRandomAnime()}>Random</button>
      </div>
    </div>
  )
}

export default App
