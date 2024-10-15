import Grid2 from "@mui/material/Grid2";
import MovieListItem from "./movie-list-item/MovieListItem";
import { useStyles } from "./MovieOverview.styles.ts";
import { Button } from "@mui/material";
import { Movie } from "../../common/models/movie.model.ts";

interface MovieOverviewProps {
  movies: Movie[];
  onChange: (updated: Movie[]) => void;
  onDelete: (id: number) => void;
  onOpenDetails: (movie?: Movie) => void;
}

const MovieOverview: React.FC<MovieOverviewProps> = (props) => {
  const { classes } = useStyles();

  const toggleFavourite = (id: number): void => {
    const updated = props.movies.map((m) =>
      m.id == id ? { ...m, isFavorite: !m.isFavorite } : m,
    );

    props.onChange(updated);
  };

  const toggleWatched = (id: number): void => {
    const updated = props.movies.map((m) =>
      m.id == id ? { ...m, isWatched: !m.isWatched } : m,
    );

    props.onChange(updated);
  };

  const onDeleteMovie = (id: number): void => {
    props.onDelete(id);
  };

  return (
    <Grid2 paddingY={"20px"}>
      <Grid2
        direction={"row"}
        container
        paddingX={"20px"}
        paddingBottom={"20px"}
      >
        <Button
          onClick={() => {
            props.onOpenDetails();
          }}
        >
          Add movie
        </Button>
      </Grid2>

      <Grid2 padding={"20px 0"}>
        <Grid2
          container
          direction={"row"}
          columnGap={"20px"}
          alignItems={"center"}
          padding={"10px 20px"}
          fontWeight={"bold"}
        >
          <Grid2 direction={"column"} width={"40px"} />
          <Grid2 direction={"column"} width={"40px"} />
          <Grid2 direction={"column"} width={"400px"}>
            Title
          </Grid2>
          <Grid2 direction={"column"} width={"70px"}>
            Year
          </Grid2>
          <Grid2 direction={"column"} width={"110px"}>
            Watched
          </Grid2>
          <Grid2 direction={"column"} width={"40px"} />
        </Grid2>

        {props.movies.map((m, i) => (
          <MovieListItem
            key={m.id}
            movie={m}
            orderNr={i}
            onFavourtieClick={toggleFavourite}
            onWatchedClick={toggleWatched}
            onDeleteMovie={onDeleteMovie}
            onEditMovie={() => props.onOpenDetails(m)}
          />
        ))}
      </Grid2>
    </Grid2>
  );
};

export default MovieOverview;
