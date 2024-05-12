import { Home, Loading, Randomizer } from './components'
import './main.css'
import { useFetchRandomAnime } from './utils'

const App = () => {
  const { randomAnime, page, fetchRandomAnime } = useFetchRandomAnime()

  if (page === 'Loading') {
    return (
      <>
        <div>
          <Loading />
        </div>
        <div>
          <button disabled>Random</button>
        </div>
      </>
    )
  }

  if (page === 'Random') {
    return (
      <>
        <div>
          <Randomizer randomAnime={randomAnime} />
        </div>
        <div>
          <button onClick={() => fetchRandomAnime()}>Random</button>
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <Home />
      </div>
      <div>
        <button onClick={() => fetchRandomAnime()}>Random</button>
      </div>
    </>
  )
}

export default App
