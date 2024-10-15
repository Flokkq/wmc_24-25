import React, {useState} from "react";
import {Movie} from "../../common/models/movie.model";
import {Genre} from "../../common/models/genre.model";
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid2,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import {useStyles} from "./MovieDetails.styles.ts";

interface MovieDetailsProps {
    movie?: Movie
    genres: Genre[]
    onSave: (movie: Movie) => void
    onCancel: () => void
}

const initialMovie: Movie = {
    title: "",
    description: "",
    imageUrl: "",
    isFavorite: false,
    isWatched: false
}

const MovieDetails: React.FC<MovieDetailsProps> = (
     { movie,genres, onSave, onCancel }
) => {
    const [formData, setFormData] = useState<Movie>(movie ?? initialMovie)
    const { id, title, genre, description, imageUrl, year } = formData
    const { classes } = useStyles()

    const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false)

    const handleTitleChange = (value: string): void => {
        setFormData({...formData, title: value})
    }

    const handleDescriptionChange = (value: string): void => {
        setFormData({...formData, description: value})
    }

    const handleYearChange = (value: number): void => {
        setFormData({...formData, year: value})
    }

    const handleImageUrlChange = (value: string): void => {
        setFormData({...formData, imageUrl: value})
    }

    const handleGenreChange = (genreId: number): void => {
        const selectedGenre = genres.find(g => g.id === genreId)
        setFormData({...formData, genre: selectedGenre})
    }

    const isFormValid = (): boolean => {
        return title !== "" && genre != null && year != null && year > 0 && imageUrl !== ""
    }

    return (
        <>
            <Dialog open={isCancelDialogOpen}>
                <DialogTitle>Confirmation dialog</DialogTitle>
                <DialogContent>
                    Are you sure you want to cancel?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsCancelDialogOpen(false)}>No</Button>
                    <Button onClick={() => { onCancel(); setIsCancelDialogOpen(false)}} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            <Grid2 className={classes.root} container direction="column">
                <Grid2 className={classes.header}>
                    <span>{id == null ? "Add movie" : "Edit movie"}</span>
                </Grid2>
                <Grid2 container className={classes.content} direction={"row"} justifyContent={"flex-start"} spacing={3} >
                    <Grid2 sx={{ width: "40%"}}>
                        <img src={imageUrl} alt="None" style={{ width: "260px"}}/>
                    </Grid2>
                    <Grid2 sx={{ width: "50%"}}>
                        <Grid2>
                            <TextField
                                label={"Title"}
                                type={"text"}
                                value={title}
                                onChange={e => handleTitleChange(e.target.value)}
                                className={classes.formField}
                            />
                        </Grid2>
                        <Grid2 className={classes.formField}>
                            <FormControl fullWidth>
                                <InputLabel>Genre</InputLabel>
                                <Select
                                    label="Genre" onChange={e => handleGenreChange(Number(e.target.value))}
                                >
                                    {genres.map(g => {
                                        return (
                                            <MenuItem key={g.id} value={g.id}>{g.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid2>
                        <Grid2 className={classes.formField}>
                            <TextField
                                label={"Year"}
                                value={year}
                                type={"number"}
                                onChange={e => handleYearChange(Number(e.target.value))}
                                className={classes.formField}
                            />
                        </Grid2>
                        <Grid2 className={classes.formField}>
                            <TextField
                                label={"Description"}
                                value={description}
                                type={"text"}
                                className={classes.formField}
                                onChange={e => handleDescriptionChange(e.target.value)}
                                multiline
                            />
                        </Grid2>
                        <Grid2 className={classes.formField}>
                            <TextField
                                label={"Image url"}
                                value={imageUrl}
                                type={"text"}
                                onChange={e => handleImageUrlChange(e.target.value)}
                                className={classes.formField}
                            />
                        </Grid2>
                    </Grid2>
                </Grid2>

                <Grid2 container className={classes.content} direction={"row"} justifyContent={"flex-start"} spacing={3}>
                    <Button className={classes.cancelButton} onClick={() => setIsCancelDialogOpen(true)} variant={"contained"} color={"error"}>Cancel</Button>
                    <Button
                        variant={"contained"}
                        onClick={() => onSave(formData)}
                        disabled={!isFormValid()}
                        color={"success"}
                    >Save
                    </Button>
                </Grid2>
            </Grid2>
        </>
    )
}

export default MovieDetails