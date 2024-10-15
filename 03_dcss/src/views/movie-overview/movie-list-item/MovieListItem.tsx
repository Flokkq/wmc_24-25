import {BookmarkAdded, BookmarkBorder, Delete, Star, StarOutline} from "@mui/icons-material";
import {useStyles} from "./MovieListItem.styles.ts";
import {Grid2} from "@mui/material";
import {Movie} from "../../../common/models/movie.model.ts";

interface MovieListItemProps {
    movie: Movie,
    orderNr: number,
    onFavouriteClick: (id: number) => void,
    onWatchedClick: (id: number) => void,
    onDelete: (id:number) => void,
    onEditMovie: () => void
}
const MovieListItem: React.FC = (props:MovieListItemProps) => {
  const {classes} = useStyles();
    const {movie, orderNr, onWatchedClick, onDelete, onFavouriteClick, onEditMovie} = props

  return (
    <Grid2 container direction={"row"} columnGap={"20px"} alignItems={"center"} padding={"10px 20px"}
           className={classes.root} onClick={() => {
            onEditMovie()
           }}>
        <Grid2 direction={"column"} width={"40px"} style={{width: "40px"}}>
                <span className={classes.icon} onClick={e => {
                    e.stopPropagation()
                    movie.id && onFavouriteClick(movie.id)
                }}>
                    {movie.isFavorite ? <Star/> : <StarOutline/>}
                </span>
        </Grid2>
        <Grid2 direction={"column"} width={"40px"}>
            <img className={classes.image} src={movie.imageUrl} alt={"pic"}/>
        </Grid2>
        <Grid2 direction={"column"} width={"400px"}>
            <span>{`${orderNr}. ${movie.title}`}</span>
        </Grid2>
        <Grid2 direction={"column"} width={"70px"}>
        <span>{movie.year}</span>
      </Grid2>
        <Grid2 direction={"column"} width={"110px"}>
                <span className={classes.icon} onClick={e => {
                    e.stopPropagation()
                    movie.id && onWatchedClick(movie.id)
                }}>
                    {movie.isWatched ? <BookmarkAdded/> : <BookmarkBorder/>}
                </span>
        </Grid2>
        <Grid2 direction={"column"} width={"40px"}>
                <span className={classes.iconDelete} onClick={e => {
                    e.stopPropagation()
                    movie.id && onDelete(movie.id)
                }}>
                    <Delete/>
                </span>
      </Grid2>
    </Grid2>
  )
}

export default MovieListItem