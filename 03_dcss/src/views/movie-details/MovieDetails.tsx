import React, { useState } from "react";
import { Movie } from "../../common/models/movie.model";
import { Genre } from "../../common/models/genre.model";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useStyles } from "./MovieDetails.styles.ts";
import { log } from "console";
import { genresMockData } from "../../common/mock-data.ts";
import { Title } from "@mui/icons-material";

const initialMovie: Movie = {
  title: "",
  description: "",
  imageUrl: "",
  isFavorite: false,
  isWatched: false,
};

interface MovieDetailProps {
  onSave: (movie: Movie) => void;
  onCancel: () => void;
}

const MovieDetails: React.FC<MovieDetailProps> = (props) => {
  const { classes } = useStyles();
  const [formState, setFormState] = useState<Movie>(initialMovie);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleTitleChange = (value: string): void => {
    const updated = { ...formState, title: value };

    setFormState(updated);
  };

  const handleYearChange = (value: number): void => {
    const updated = { ...formState, year: value };

    setFormState(updated);
  };

  const handleDescritionChange = (value: string): void => {
    const updated = { ...formState, description: value };

    setFormState(updated);
  };

  const handleImageChange = (value: string): void => {
    const updated = { ...formState, imageUrl: value };

    setFormState(updated);
  };

  const handleGenreChange = (value: number): void => {
    let genre = genresMockData.find((g) => value === g.id);
    const updated = { ...formState, genre: genre };

    setFormState(updated);
  };

  return (
    <>
      <Dialog open={showDialog}>
        <DialogTitle>hello</DialogTitle>
        <DialogContent>
          Are you sure you want to cancel the edits?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)}>No</Button>
          <Button
            onClick={() => {
              setShowDialog(false);
              props.onCancel();
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Grid2 className={classes.root} container direction="column">
        <Grid2 className={classes.header}>
          {/*<span>{null == null ? "Add movie" : "Edit movie"}</span>*/}
        </Grid2>
        <Grid2
          container
          className={classes.content}
          direction={"row"}
          justifyContent={"flex-start"}
          spacing={3}
        >
          <Grid2 sx={{ width: "40%" }}>
            <img alt="None" style={{ width: "260px" }} />
          </Grid2>
          <Grid2 sx={{ width: "50%" }}>
            <Grid2>
              <TextField
                label={"Title"}
                type={"text"}
                className={classes.formField}
                onChange={(e) => handleTitleChange(e.target.value)}
                value={formState.title}
              />
            </Grid2>
            <Grid2 className={classes.formField}>
              <FormControl fullWidth>
                <InputLabel>Genre</InputLabel>
                <Select
                  label="Genre"
                  value={formState?.genre?.id ?? 0}
                  onChange={(e) => handleGenreChange(Number(e.target.value))}
                >
                  {genresMockData.map((g) => (
                    <MenuItem key={g.id}>{g.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 className={classes.formField}>
              <TextField
                label={"Year"}
                type={"number"}
                className={classes.formField}
                onChange={(e) => handleYearChange(Number(e.target.value))}
                value={formState.year}
              />
            </Grid2>
            <Grid2 className={classes.formField}>
              <TextField
                label={"Description"}
                type={"text"}
                className={classes.formField}
                multiline
                onChange={(e) => handleDescritionChange(e.target.value)}
                value={formState.description}
              />
            </Grid2>
            <Grid2 className={classes.formField}>
              <TextField
                label={"Image url"}
                type={"text"}
                className={classes.formField}
                onChange={(e) => handleImageChange(e.target.value)}
                value={formState.imageUrl}
              />
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2
          container
          className={classes.content}
          direction={"row"}
          justifyContent={"flex-start"}
          spacing={3}
        >
          <Button
            className={classes.cancelButton}
            variant={"contained"}
            color={"error"}
            onClick={() => {
              setShowDialog(true);
              props.onCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            variant={"contained"}
            color={"success"}
            onClick={() => props.onSave(formState)}
          >
            Save
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default MovieDetails;
