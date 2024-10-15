import AppHeader from "./common/components/app-header/AppHeader";
import {useStyles} from "./App.styles.ts";
import {Alert, Grid2, Slide, Snackbar} from "@mui/material";
import {genresMockData, moviesMockData} from "./common/mock-data";
import {useState} from "react";
import {Movie} from "./common/models/movie.model.ts";
import MovieOverview from "./views/movie-overview/MovieOverview.tsx";
import {ReactNode} from "react"
import MovieDetails from "./views/movie-details/MovieDetails.tsx";



export enum AppViews {
  MovieOverview = 1,
  MovieDetails
}

function App() {
    const [movies, setMovies] = useState<Movie[]>(moviesMockData);
    const { classes } = useStyles();
    const [selectedView, setSelectedView] = useState(AppViews.MovieOverview)

    const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined)

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    /* lifted Funktions */
    const handleDeleteMovie = (id: number): void => {
        const updated = movies.filter(movie => movie.id !== id)
        setMovies(updated)
    }

    const handleOpenDetails = (movie?: Movie): void => {
        if (movie != null) {
            setSelectedMovie(movie)
        }

        setSelectedView(AppViews.MovieDetails)
    }

    const handleBackToOverview = (): void => {
        setSelectedMovie(undefined)
        setSelectedView(AppViews.MovieOverview)
        setIsSnackbarOpen(true)
    }

    const handleSaveMovie = (updatedMovie: Movie): void => {
        console.log(updatedMovie);
        let updatedMovies

        if (updatedMovie.id == null) {
            const id = Number(Math.random().toString().slice(2))
            updatedMovies = [...movies, {...updatedMovie, id}]
        } else {
            updatedMovies = [...movies].map(movie => {
                if (movie.id === updatedMovie.id) {
                    return {...updatedMovie}
                }
                return movie
            })
        }

        setMovies(updatedMovies)
        handleBackToOverview()
        //setIsSnackbarOpen(true)
    }

    const renderSelectedViews = (): ReactNode => {
        switch (selectedView) {
            case AppViews.MovieOverview:
                return (
                    <>
                    <h1>Movies</h1>
                    <MovieOverview movies={movies}
                                   onChange={(updated) => {
                                       setMovies(updated)
                                   }}
                                   onDeleteMovie={handleDeleteMovie}
                                   onOpenDetails={handleOpenDetails}
                    />
                    </>
                        )
            case AppViews.MovieDetails:
                return (
                    <>  {console.log("bin in Details")}
                        <MovieDetails
                            movie={selectedMovie}
                            genres={genresMockData}
                            onSave={handleSaveMovie}
                            onCancel={handleBackToOverview}
                        />
                    </>
                )

        }
    }



    return (

    <Grid2 className={classes.root} container direction={"column"} alignItems={"center"}>

        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center"}}
            open={isSnackbarOpen}
            autoHideDuration={3000}
            TransitionComponent={Slide}
            onClose={() => setIsSnackbarOpen(false)}
        >
            <Alert
                onClose={() => setIsSnackbarOpen(false)}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Movie successfully saved
            </Alert>
        </Snackbar>


        <AppHeader onclick={handleBackToOverview}/>
      <div className={classes.content}>
          {renderSelectedViews()}
      </div>
    </Grid2>
  );
}

export default App;
