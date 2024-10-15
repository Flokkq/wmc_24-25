import AppHeader from "./common/components/app-header/AppHeader";
import { useStyles } from "./App.styles.ts";
import { Alert, Grid2, Slide, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import MovieOverview from "./views/movie-overview/MovieOverview.tsx";
import MovieDetails from "./views/movie-details/MovieDetails.tsx";
import { moviesMockData } from "./common/mock-data.ts";
import { Movie } from "./common/models/movie.model.ts";

export enum AppViews {
  MovieOverview = 1,
  MovieDetails,
}

function App() {
  const { classes } = useStyles();
  const [selectedView, setSelectedView] = useState(AppViews.MovieOverview);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(true);
  const [movies, setMovies] = useState(moviesMockData);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined,
  );

  const handleDeleteMovie = (id: number): void => {
    const updated = movies.filter((m) => m.id != id);
    setMovies(updated);
  };

  const handleOpenDetails = (movie?: Movie): void => {
    if (movie != null) {
      setSelectedMovie(movie);
    }

    setSelectedView(AppViews.MovieDetails);
  };

  const handleBackToOverview = (): void => {
    setSelectedMovie(undefined);
    setSelectedView(AppViews.MovieOverview);
  };

  const handleSave = (movie: Movie): void => {
    let newMovies: Movie[] = [];

    if (movie.id == null) {
      const id = Number(Math.random().toString().slice(2));
      newMovies = [...movies, { ...movie, id: id }];
    } else {
      newMovies = movies.map((m) => (m.id === movie.id ? { ...movie } : m));
    }

    setMovies(newMovies);
    handleBackToOverview();
    setIsSnackBarOpen(true);
  };

  const renderSelectedView = () => {
    switch (selectedView) {
      case AppViews.MovieOverview:
        return (
          <MovieOverview
            movies={movies}
            onChange={(updated) => setMovies(updated)}
            onDelete={handleDeleteMovie}
            onOpenDetails={handleOpenDetails}
          />
        );
      case AppViews.MovieDetails:
        return (
          <MovieDetails onSave={handleSave} onCancel={handleBackToOverview} />
        );
    }
  };

  return (
    <Grid2
      className={classes.root}
      container
      direction={"column"}
      alignItems={"center"}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        TransitionComponent={Slide}
        open={isSnackBarOpen}
        onClose={() => setIsSnackBarOpen(false)}
      >
        <Alert onClose={() => setIsSnackBarOpen(false)} severity="info">
          Movie saved
        </Alert>
      </Snackbar>
      <AppHeader onClick={handleBackToOverview} />
      <div className={classes.content}>{renderSelectedView()}</div>
    </Grid2>
  );
}

export default App;
