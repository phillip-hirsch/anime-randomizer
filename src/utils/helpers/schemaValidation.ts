import type {
  Aired,
  Anime,
  AnimeData,
  Broadcast,
  DateProp,
  DatePropObject,
  ImageProps,
  Title,
  Trailer,
  ValidatorFunctionType,
} from '../types'

function isType<T>(type: string): ValidatorFunctionType<T> {
  return (value): value is T => typeof value === type
}

const isString = isType<string>('string')
const isNumber = isType<number>('number')
const isBoolean = isType<boolean>('boolean')

const isStringArray = (data: unknown): data is string[] => {
  return Array.isArray(data) && data.every(isString)
}

const isNullable =
  <T>(
    validator: (data: unknown) => data is T
  ): ((data: unknown) => data is T | null) =>
  (data: unknown): data is T | null =>
    // Allow data to be null or pass the validator
    data === null || validator(data)

const isNullableNumber = isNullable(isNumber)

const isNullableString = isNullable(isString)

const isNullableStringArray = isNullable(isStringArray)

const isNullableBoolean = isNullable(isBoolean)

const validateObject = <T>(
  data: unknown,
  schema: Record<keyof T, ValidatorFunctionType<unknown>>
): data is T => {
  for (const key in schema) {
    const validator = schema[key]
    const value = (data as Record<keyof T, unknown>)[key]
    if (!validator(value)) {
      throw new Error(
        `${key} check failed: Expected a ${typeof validator}, but received ${typeof value} with value ${JSON.stringify(
          value
        )}`
      )
    }
  }
  return true
}

const validateArray = <T>(
  data: unknown,
  validator: (data: unknown) => data is T
): data is T[] => {
  if (!Array.isArray(data)) {
    throw new Error(
      `Expected an array, but received ${typeof data} with value ${JSON.stringify(
        data
      )}`
    )
  }

  for (const element of data) {
    if (!validator(element)) {
      return false
    }
  }

  return true
}

const isNullableDateProp = (data: unknown): data is DateProp =>
  validateObject(data, {
    day: isNullableNumber,
    month: isNullableNumber,
    year: isNullableNumber,
  })

const isDatePropObject = (data: unknown): data is DatePropObject =>
  validateObject(data, {
    from: isNullableDateProp,
    to: isNullableDateProp,
  })

const isAired = (data: unknown): data is Aired =>
  validateObject(data, {
    from: isNullableString,
    to: isNullableString,
    string: isString,
    prop: isDatePropObject,
  })

const isBroadcast = (data: unknown): data is Broadcast =>
  validateObject(data, {
    day: isNullableString,
    time: isNullableString,
    timezone: isNullableString,
    string: isNullableString,
  })

const isNullableBroadcast = isNullable(isBroadcast)

const isAnimeDataArray = (data: unknown): data is AnimeData[] => {
  return validateArray(data, isAnimeData)
}

const isNullableAnimeDataArray = isNullable(isAnimeDataArray)

const isAnimeData = (data: unknown): data is AnimeData =>
  validateObject(data, {
    mal_id: isNullableNumber,
    type: isNullableString,
    name: isNullableString,
    url: isNullableString,
  })

const isImage = (data: unknown): data is ImageProps =>
  validateObject(data, {
    image_url: isNullableString,
    large_image_url: isNullableString,
    small_image_url: isNullableString,
  })

const isImagePropsObject = (
  data: unknown
): data is { jpg: ImageProps; webp: ImageProps } =>
  validateObject(data, {
    jpg: isImage,
    webp: isImage,
  })

const isTrailerImage = (data: unknown): data is ImageProps =>
  validateObject(data, {
    image_url: isNullableString,
    large_image_url: isNullableString,
    maximum_image_url: isNullableString,
    medium_image_url: isNullableString,
    small_image_url: isNullableString,
  })

const isTrailer = (data: unknown): data is Trailer =>
  validateObject(data, {
    embed_url: isNullableString,
    images: isTrailerImage,
    url: isNullableString,
    youtube_id: isNullableString,
  })

const isTitle = (data: unknown): data is Title =>
  validateObject(data, {
    type: isString,
    title: isString,
  })

const isTitleArray = (data: unknown): data is Title[] =>
  validateArray(data, isTitle)

const validate = <T>(
  value: unknown,
  validator: ValidatorFunctionType<T>,
  errorMessage: string
) => {
  if (!validator(value)) {
    throw new Error(errorMessage)
  }
}

const schema = {
  mal_id: isNumber,
  url: isString,
  images: isImagePropsObject,
  trailer: isTrailer,
  approved: isNullableBoolean,
  titles: isTitleArray,
  title: isNullableString,
  title_english: isNullableString,
  title_japanese: isNullableString,
  title_synonyms: isNullableStringArray,
  type: isNullableString,
  source: isNullableString,
  episodes: isNullableNumber,
  status: isNullableString,
  airing: isNullableBoolean,
  aired: isAired,
  duration: isNullableString,
  rating: isNullableString,
  score: isNullableNumber,
  scored_by: isNullableNumber,
  rank: isNullableNumber,
  popularity: isNullableNumber,
  members: isNullableNumber,
  favorites: isNullableNumber,
  synopsis: isNullableString,
  background: isNullableString,
  season: isNullableString,
  year: isNullableNumber,
  broadcast: isNullableBroadcast,
  producers: isNullableAnimeDataArray,
  licensors: isNullableAnimeDataArray,
  studios: isNullableAnimeDataArray,
  genres: isNullableAnimeDataArray,
  explicit_genres: isNullableStringArray,
  themes: isNullableAnimeDataArray,
  demographics: isNullableAnimeDataArray,
}

export const isAnime = (data: unknown): data is Anime => {
  try {
    if (typeof data === 'object' && data !== null) {
      const castedData = data as Anime
      for (const key in schema) {
        const validatedKey = key as keyof Anime
        validate(
          castedData[validatedKey],
          schema[validatedKey] as ValidatorFunctionType<string | null>,
          `${key} check failed`
        )
      }
      return true
    }
    return false
  } catch (error) {
    throw new Error(`Error in isAnime: ${error}`)
  }
}
