import { useState } from 'react'
import { isAnime } from '.'
import type { Anime, Page } from './types'

export const useFetchRandomAnime = () => {
  const [randomAnime, setRandomAnime] = useState<Anime>()
  const [page, setPage] = useState<Page>('Home')

  /**
   * Fetches a random anime from Jikan's API.
   */
  const fetchRandomAnime = async () => {
    setPage('Loading')
    try {
      const response = await fetch(`https://api.jikan.moe/v4/random/anime`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const temp = await response.json()

      // Check if fetched data is a valid Anime object
      if (!isAnime(temp.data)) {
        console.log(temp.data)
        throw new Error('Fetched data is not a valid Anime object')
      }

      setRandomAnime(temp.data as Anime)

      // Wait for timeout to artificially lengthen load time
      await new Promise((r) => setTimeout(r, 2500))

      setPage('Random')
    } catch (error) {
      console.error('Failed to fetch anime:', error)
      setPage('Error')
    }
  }

  return { randomAnime, page, fetchRandomAnime }
}
