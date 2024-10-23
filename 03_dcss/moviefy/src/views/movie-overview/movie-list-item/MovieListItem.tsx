import React from "react";
import {Movie} from "../../../common/models/movie.model";
import {BookmarkAdded, BookmarkBorder, Delete, Star, StarOutline} from "@mui/icons-material";
import {useStyles} from "./MovieListItem.styles.ts";
import {Grid2} from "@mui/material";

interface MovieListItemProps {
  orderNr: number
  movie: Movie
  onFavoriteClick: (id: string) => void
  onWatchedClick: (id: string) => void
  onEditMovie: () => void
  onDeleteMovie: (id: string) => void
}

const MovieListItem: React.FC<MovieListItemProps> = (
  {orderNr, movie, onFavoriteClick, onWatchedClick, onEditMovie, onDeleteMovie}
) => {
  const {classes} = useStyles()
  const {id, title, imageUrl, year, isFavorite, isWatched} = movie

  return (
    <Grid2 container direction={"row"} columnGap={"20px"} alignItems={"center"} padding={"10px 20px"}
           className={classes.root} onClick={() => onEditMovie()}>
      <Grid2 direction={"column"} width={"40px"} style={{width: "40px"}}>
                <span className={classes.icon} onClick={e => {
                  e.stopPropagation()
                  id && onFavoriteClick(id)
                }}>
                    {isFavorite ? <Star/> : <StarOutline/>}
                </span>
      </Grid2>
      <Grid2 direction={"column"} width={"40px"}>
        <img className={classes.image} src={imageUrl} alt={"pic"}/>
      </Grid2>
      <Grid2 direction={"column"} width={"400px"}>
        <span>{`${orderNr}. ${title}`}</span>
      </Grid2>
      <Grid2 direction={"column"} width={"70px"}>
        <span>{year}</span>
      </Grid2>
      <Grid2 direction={"column"} width={"110px"}>
                <span className={classes.icon} onClick={e => {
                  e.stopPropagation()
                  id && onWatchedClick(id)
                }}>
                    {isWatched ? <BookmarkAdded/> : <BookmarkBorder/>}
                </span>
      </Grid2>
      <Grid2 direction={"column"} width={"40px"}>
                <span className={classes.iconDelete} onClick={e => {
                  e.stopPropagation()
                  id && onDeleteMovie(id)
                }}>
                    <Delete/>
                </span>
      </Grid2>
    </Grid2>
  )
}

export default MovieListItem