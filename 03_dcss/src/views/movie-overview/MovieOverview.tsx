import React, {useEffect, useState} from "react";
import {Movie} from "../../common/models/movie.model";
import MovieListItem from "./movie-list-item/MovieListItem";
import {useNavigate} from "react-router-dom";
import {get, put, remove} from "../../common/helpers/firebase-rest-helper/firebase-rest-helper";
import {Button, Grid2} from "@mui/material";

const MovieOverview: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    initMovies()
  }, [])

  const initMovies = (): void => {
    void (async () => {
      const _movies = await get<Movie>("movies")
      setMovies(_movies)
    })()
  }

  const toggleFavorite = (id: string): void => {
    void (async () => {
      const movieToUpdate = movies.find(m => m.id === id)

      if (movieToUpdate != null) {
        await put<Movie>("movies", {...movieToUpdate, isFavorite: !movieToUpdate.isFavorite})
        initMovies()
      }
    })()
  }

  const toggleWatched = (id: string): void => {
    void (async () => {
      const movieToUpdate = movies.find(m => m.id === id)

      if (movieToUpdate != null) {
        await put<Movie>("movies", {...movieToUpdate, isWatched: !movieToUpdate.isWatched})
        initMovies()
      }
    })()
  }

  const handleDeleteMovie = (movie: Movie) => {
    void (async () => {
      await remove<Movie>("movies", movie)
      initMovies()
    })()
  }

  const handleOpenDetails = (movie?: Movie) => {
    let path

    if (movie != null) {
      path = `/movies/${movie.id}`
    } else {
      path = "/movies/new"
    }

    navigate(path)
  }

  return (
    <Grid2 paddingY={"20px"}>
      <Grid2 direction={"row"} container paddingX={"20px"} paddingBottom={"20px"}>
        <Button onClick={() => handleOpenDetails()}>Add movie</Button>
      </Grid2>

      <Grid2 padding={"20px 0"}>
        <Grid2 container direction={"row"} columnGap={"20px"} alignItems={"center"} padding={"10px 20px"}
               fontWeight={"bold"}>
          <Grid2 direction={"column"} width={"40px"}/>
          <Grid2 direction={"column"} width={"40px"}/>
          <Grid2 direction={"column"} width={"400px"}>
            Title
          </Grid2>
          <Grid2 direction={"column"} width={"70px"}>
            Year
          </Grid2>
          <Grid2 direction={"column"} width={"110px"}>
            Watched
          </Grid2>
          <Grid2 direction={"column"} width={"40px"}/>
        </Grid2>

        {movies.map((movie, index) => {
          return (
            <MovieListItem
              key={movie.id}
              orderNr={index + 1}
              movie={movie}
              onFavoriteClick={toggleFavorite}
              onWatchedClick={toggleWatched}
              onEditMovie={() => handleOpenDetails(movie)}
              onDeleteMovie={() => handleDeleteMovie(movie)}
            />
          )
        })}
      </Grid2>
    </Grid2>
  )
}

export default MovieOverview