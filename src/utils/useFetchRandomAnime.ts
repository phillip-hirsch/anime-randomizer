import { useState } from 'react'
import { type Anime } from '.'

export const useFetchRandomAnime = () => {
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

  return { randomAnime, page, fetchRandomAnime }
}
