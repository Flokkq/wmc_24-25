import React from "react";
import {Movie} from "../../common/models/movie.model";
import {useListValuesContext} from "../../common/contexts/list-values-context/ListValuesContext";
import {
  Button,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import {useStyles} from "./MovieDetails.styles.ts";

interface MovieDetailsProps {
  movie: Movie
  onChange: (movie: Movie) => void
  onSave: () => void
  onCancel: () => void
}

const MovieDetails: React.FC<MovieDetailsProps> = (
  {movie, onChange, onSave, onCancel}
) => {
  const {genres} = useListValuesContext()
  const {id, title, genre, description, imageUrl, year} = movie
  const {classes} = useStyles()

  const handleTitleChange = (value: string): void => {
    onChange({...movie, title: value})
  }

  const handleDescriptionChange = (value: string): void => {
    onChange({...movie, description: value})
  }

  const handleYearChange = (value: number): void => {
    onChange({...movie, year: value})
  }

  const handleImageUrlChange = (value: string): void => {
    onChange({...movie, imageUrl: value})
  }

  const handleGenreChange = (genreId: string): void => {
    const selectedGenre = genres.find(g => g.id === genreId)
    onChange({...movie, genre: selectedGenre})
  }

  const isFormValid = (): boolean => {
    return title !== "" && genre != null && year != null && year > 0 && imageUrl !== ""
  }

  return (
    <Grid2 className={classes.root} container direction="column">
      <Grid2 className={classes.header}>
        <span>{id == null ? "Add movie" : "Edit movie"}</span>
      </Grid2>

      <Grid2 container className={classes.content} direction={"row"} justifyContent={"flex-start"} spacing={3}>
        <Grid2 sx={{width: "40%"}}>
          <img src={imageUrl} alt="None" style={{width: "260px"}}/>
        </Grid2>
        <Grid2 sx={{width: "50%"}}>
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
                value={genre?.id}
                label="Genre"
                onChange={e => handleGenreChange(e.target.value)}
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
              type={"number"}
              value={year ?? 0}
              onChange={e => handleYearChange(Number(e.target.value))}
              className={classes.formField}
            />
          </Grid2>
          <Grid2 className={classes.formField}>
            <TextField
              label={"Description"}
              type={"text"}
              value={description}
              onChange={e => handleDescriptionChange(e.target.value)}
              className={classes.formField}
              multiline
            />
          </Grid2>
          <Grid2 className={classes.formField}>
            <TextField
              label={"Image url"}
              type={"text"}
              value={imageUrl}
              onChange={e => handleImageUrlChange(e.target.value)}
              className={classes.formField}
            />
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 container className={classes.content} direction={"row"} justifyContent={"flex-start"} spacing={3}>
        <Button className={classes.cancelButton} onClick={() => onCancel()} variant={"contained"}
                color={"error"}>Cancel</Button>
        <Button
          variant={"contained"}
          onClick={() => onSave()}
          disabled={!isFormValid()}
          color={"success"}
        >Save
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default MovieDetails
