export interface Genre {
    id: number
    name: string
  }

  export interface Movie {
    id: number
    name: string
    title: string
    overview: string
    vote_count: number
    popularity: number
    genre_ids: number[]
    media_type?: string
    poster_path: string
    vote_average: number
    release_date?: string
    original_name: string
    backdrop_path: string
    first_air_date: string
    origin_country: string[]
    original_language: string
  }

  export interface Element {
    type:
    | 'Clip'
    | 'Teaser'
    | 'Trailer'
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
  }
