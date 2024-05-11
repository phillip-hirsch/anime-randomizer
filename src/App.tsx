import { useState } from 'react'
import { Home, Loading, Randomizer } from './components'
import './main.css'
import { Anime } from './utils/types'

// main app
const App = () => {
  const [randomAnime, setRandomAnime] = useState({} as Anime['randomAnime'])
  const [page, setPage] = useState('Home')

  /* fetch a random anime from Jikan's API. */
  const fetchRandomAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/random/anime`).then(
      (res) => res.json()
    )

    setPage('Loading')
    setRandomAnime(temp.data)

    // wait for timeout to artificially lengthen load time
    await new Promise((r) => setTimeout(r, 2500))

    setPage('Random')
  }

  // if page is set to loading, display loading screen
  if (page === 'Loading') {
    return (
      <div className="App">
        <div>
          <Loading />
        </div>
        <div>
          {/* button does nothing but stays for consistency */}
          <button onClick={() => {}}>Random</button>
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

  // else, display homepage
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
