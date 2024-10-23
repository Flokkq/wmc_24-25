import {Genre} from "./genre.model";

export interface Movie {
    id?: string
    title: string
    genre?: Genre
    year?: number
    description: string
    imageUrl: string
    isFavorite: boolean
    isWatched: boolean
}