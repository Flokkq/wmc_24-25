import {
  BookmarkAdded,
  BookmarkBorder,
  Delete,
  Star,
  StarOutline,
} from "@mui/icons-material";
import { useStyles } from "./MovieListItem.styles.ts";
import { Grid2 } from "@mui/material";
import { Movie } from "../../../common/models/movie.model.ts";

interface MovieListItemProps {
  orderNr: number;
  movie: Movie;
  onFavourtieClick: (id: number) => void;
  onWatchedClick: (id: number) => void;
  onDeleteMovie: (id: number) => void;
  onEditMovie: () => void;
}

const MovieListItem: React.FC<MovieListItemProps> = (props) => {
  const { classes } = useStyles();

  return (
    <Grid2
      container
      direction={"row"}
      columnGap={"20px"}
      alignItems={"center"}
      padding={"10px 20px"}
      className={classes.root}
      onClick={() => {
        props.onEditMovie();
      }}
    >
      <Grid2 direction={"column"} width={"40px"} style={{ width: "40px" }}>
        <span
          className={classes.icon}
          onClick={(e) => {
            props.movie.id && props.onFavourtieClick(props.movie.id);
            e.stopPropagation();
          }}
        >
          {props.movie.isFavorite ? <Star /> : <StarOutline />}
        </span>
      </Grid2>
      <Grid2 direction={"column"} width={"40px"}>
        <img className={classes.image} src={props.movie.imageUrl} alt={"pic"} />
      </Grid2>
      <Grid2 direction={"column"} width={"400px"}>
        <span>{props.movie.title}</span>
      </Grid2>
      <Grid2 direction={"column"} width={"70px"}>
        <span>{props.movie.year}</span>
      </Grid2>
      <Grid2 direction={"column"} width={"110px"}>
        <span
          className={classes.icon}
          onClick={(e) => {
            props.movie.id && props.onWatchedClick(props.movie.id);
            e.stopPropagation();
          }}
        >
          {props.movie.isWatched ? <BookmarkAdded /> : <BookmarkBorder />}
        </span>
      </Grid2>
      <Grid2 direction={"column"} width={"40px"}>
        <span
          className={classes.iconDelete}
          onClick={(e) => {
            {
              props.movie.id && props.onDeleteMovie(props.movie.id);
              e.stopPropagation();
            }
          }}
        >
          <Delete />
        </span>
      </Grid2>
    </Grid2>
  );
};

export default MovieListItem;
