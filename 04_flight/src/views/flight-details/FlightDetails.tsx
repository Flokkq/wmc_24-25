import React, { useState } from "react";
import { Flight } from "../../common/models/workout.model";
import { WorkoutType } from "../../common/models/workout_type.model";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid as Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useStyles } from "./FlightDetails.styles.ts";

interface FlightDetailsProps {
  flight?: Flight;
  genres: WorkoutType[];
  onSave: (flight: Flight) => void;
  onCancel: () => void;
}

const initialFlight: Flight = {
  flightNumber: "",
  type: undefined,
  duration: 0,
  isCompleted: false,
};

const FlightDetails: React.FC<FlightDetailsProps> = ({
  flight,
  genres,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Flight>(flight ?? initialFlight);
  const { flightNumber, type, duration, isCompleted } = formData;
  const { classes } = useStyles();

  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);

  const handleFlightNumberChange = (value: string): void => {
    setFormData({ ...formData, flightNumber: value });
  };

  const handleDurationChange = (value: number): void => {
    setFormData({ ...formData, duration: value });
  };

  const handleTypeChange = (typeId: number): void => {
    const selectedType = genres.find((g) => g.id === typeId);
    setFormData({ ...formData, type: selectedType });
  };

  const handleIsCompletedChange = (value: boolean): void => {
    setFormData({ ...formData, isCompleted: value });
  };

  const isFormValid = (): boolean => {
    return flightNumber !== "" && type != null && duration > 0;
  };

  return (
    <>
      <Dialog open={isCancelDialogOpen}>
        <DialogTitle>Confirmation dialog</DialogTitle>
        <DialogContent>Are you sure you want to cancel?</DialogContent>
        <DialogActions>
          <Button onClick={() => setIsCancelDialogOpen(false)}>No</Button>
          <Button
            onClick={() => {
              onCancel();
              setIsCancelDialogOpen(false);
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Grid2 className={classes.root} container direction="column">
        <Grid2 className={classes.header}>
          <span>
            {flight?.flightNumber == null ? "Add Flight" : "Edit Flight"}
          </span>
        </Grid2>
        <Grid2
          container
          className={classes.content}
          direction={"row"}
          justifyContent={"flex-start"}
          spacing={3}
        >
          <Grid2 sx={{ width: "50%" }}>
            <Grid2>
              <TextField
                label={"Flight Number"}
                type={"text"}
                value={flightNumber}
                onChange={(e) => handleFlightNumberChange(e.target.value)}
                className={classes.formField}
              />
            </Grid2>
            <Grid2 className={classes.formField}>
              <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select
                  label="Type"
                  value={type?.id ?? ""}
                  onChange={(e) => handleTypeChange(Number(e.target.value))}
                >
                  {genres.map((g) => {
                    return (
                      <MenuItem key={g.id} value={g.id}>
                        {g.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid2>
            <Grid2 className={classes.formField}>
              <TextField
                label={"Duration (minutes)"}
                value={duration}
                type={"number"}
                onChange={(e) => handleDurationChange(Number(e.target.value))}
                className={classes.formField}
              />
            </Grid2>
            <Grid2 className={classes.formField}>
              <FormControl fullWidth>
                <InputLabel>Is Completed</InputLabel>
                <Select
                  value={isCompleted ? "Yes" : "No"}
                  onChange={(e) =>
                    handleIsCompletedChange(e.target.value === "Yes")
                  }
                >
                  <MenuItem value={"Yes"}>Yes</MenuItem>
                  <MenuItem value={"No"}>No</MenuItem>
                </Select>
              </FormControl>
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
            onClick={() => setIsCancelDialogOpen(true)}
            variant={"contained"}
            color={"error"}
          >
            Cancel
          </Button>
          <Button
            variant={"contained"}
            onClick={() => onSave(formData)}
            disabled={!isFormValid()}
            color={"success"}
          >
            Save
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default FlightDetails;
