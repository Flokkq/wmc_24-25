import Grid2 from "@mui/material/Grid2";
import MovieListItem from "./movie-list-item/MovieListItem";
import {useStyles} from "./MovieOverview.styles.ts";
import {Button, Paper} from "@mui/material";
import {Movie} from "../../common/models/movie.model.ts";
import {DataGrid, GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {BookmarkAdded, BookmarkBorder, Delete, Star, StarOutline} from "@mui/icons-material";


interface MovieOverviewProps {
    movies: Movie[],
    onChange: (updated: Movie[]) => void,
    onDeleteMovie: (id: number) => void,
    onOpenDetails: (movie?: Movie) => void
}
const MovieOverview: React.FC = (props:MovieOverviewProps) => {
  const {classes} = useStyles();
  const {movies, onDeleteMovie,onChange, onOpenDetails } = props


/* FavouritClick */
    const toggleFavourite = (id: number): void => {
        const updated
            = movies.map(movie => movie.id === id ? {...movie, isFavorite: !movie.isFavorite}:movie);
        console.log(updated)
        onChange(updated)
    }

    const toggleWatched = (id: number): void => {
        const updated = movies.map(movie => movie.id === id ? {...movie, isWatched: !movie.isWatched}:movie)
        console.log(updated)
        onChange(updated)
    }
    const columns: GridColDef<Movie>[] = [
        {
            sortable: false,
            resizable: false,
            disableColumnMenu: true,
            width: 40,
            headerName: "",
            field: "isFavorite",
            renderCell: (value: GridRenderCellParams<Movie>) => {
                return (
                    <span className={classes.icon} onClick={e => {
                        e.stopPropagation()
                        value.row?.id && toggleFavourite(value.row?.id)
                    }}>
                        {value.row?.isFavorite ? <Star/> : <StarOutline/>}
                    </span>
                )
            }
        },
        {
            sortable: false,
            resizable: false,
            disableColumnMenu: true,
            width: 40,
            headerName: "",
            field: "imageUrl",
            renderCell: (value: GridRenderCellParams<Movie>) => {
                return <img className={classes.image} src={value.row?.imageUrl} alt={"pic"} />
            }
        },
        {
            sortable: false,
            resizable: false,
            disableColumnMenu: true,
            width: 400,
            headerName: "Title",
            field: "title",
            renderCell: (value: GridRenderCellParams<Movie>) => `${value.id}. ${value.row?.title}`
        },
        {
            sortable: true,
            resizable: false,
            disableColumnMenu: true,
            width: 70,
            headerName: "Year",
            field: "year"
        },
        {
            sortable: false,
            resizable: false,
            disableColumnMenu: true,
            width: 110,
            headerName: "Watched",
            field: "isWatched",
            renderCell: (value: GridRenderCellParams<Movie>) => {
                return (
                    <span className={classes.icon} onClick={e => {
                        e.stopPropagation()
                        value.row?.id && toggleWatched(value.row?.id)
                    }}>
                        {value.row.isWatched ? <BookmarkAdded/> : <BookmarkBorder/>}
                    </span>
                )
            }
        },
        {
            sortable: false,
            resizable: false,
            disableColumnMenu: true,
            width: 40,
            headerName: "",
            field: "delete",
            renderCell: (value: GridRenderCellParams<Movie>) => {
                return (
                    <span className={classes.iconDelete} onClick={e => {
                        e.stopPropagation()
                        value.row?.id && onDeleteMovie(value.row?.id)
                    }}>
                        <Delete />
                    </span>
                )
            }
        }
    ]
  return (
    <Grid2 paddingY={"20px"}>
      <Grid2 direction={"row"} container paddingX={"20px"} paddingBottom={"20px"}>
        <Button onClick={() => {
        }}>Add movie</Button>
      </Grid2>

        <Grid2 container direction={"column"} gap={"10px"} paddingX={"20px"}>
            <Paper style={{width: "100%"}}>
                <DataGrid
                    columns={columns}
                    rows={movies}
                    onRowClick={(params) => onOpenDetails(params.row)}
                />
            </Paper>
        </Grid2>


      <Grid2 padding={"20px 0"}>
          <Grid2 container direction={"row"} columnGap={"20px"} alignItems={"center"} padding={"10px 20px"} fontWeight={"bold"}>
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
              <Grid2 direction={"column"} width={"40px"}/>
          </Grid2>
      </Grid2>
        {
            movies.map((movie,index)=> {
                return (
                    <MovieListItem key={movie.id}
                                   movie={movie}
                                   orderNr={index+1}
                                   onFavouriteClick={toggleFavourite}
                                   onWatchedClick={toggleWatched}
                                   onDelete={onDeleteMovie}
                                   onEditMovie={() =>onOpenDetails(movie)}
                                   />
                )
            })
        }
    </Grid2>
  )
}

export default MovieOverview