export interface ImageProps {
  image_url: string
  large_image_url: string
  maximum_image_url: string
  medium_image_url: string
  small_image_url: string
}

export interface Trailer {
  embed_url?: string
  images?: ImageProps
  url?: string
  youtube_id?: string
}

export interface Title {
  type: string
  title: string
}

export interface DateProp {
  day?: number
  month?: number
  year?: number
}

export interface DatePropObject {
  from: DateProp
  to?: DateProp
}

export interface Aired {
  from: string
  to: string
  prop: DatePropObject
  string: string
}

export interface Broadcast {
  day?: string
  time?: string
  timezone?: string
  string?: string
}

export interface AnimeData {
  mal_id?: number
  type?: string
  name?: string
  url?: string
}

export interface Anime {
  mal_id: number
  url: string
  images: {
    jpg: ImageProps
    webp: ImageProps
  }
  trailer: Trailer
  approved: boolean
  titles: Title[]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms?: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: Aired
  duration: string
  rating: string
  score: number
  scored_by: number
  rank?: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background?: string
  season?: number
  year?: string
  broadcast?: Broadcast
  producers?: AnimeData[]
  licensors?: AnimeData[]
  studios?: AnimeData[]
  genres?: AnimeData[]
  explicit_genres?: string[]
  themes?: AnimeData[]
  demographics?: AnimeData[]
}

export type Page = 'Loading' | 'Random' | 'Error' | 'Home'

export type ValidationRule<T> = {
  key: keyof T
  validator: (data: unknown) => boolean
  errorMessage: string
}

export type ValidatorFunctionType<T> = (data: unknown) => data is T
