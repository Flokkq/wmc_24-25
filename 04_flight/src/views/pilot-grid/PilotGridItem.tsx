import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Pilot } from "../../common/models/pilot.model";
import { useStyles } from "./PilotGridItem.styles.ts";

interface PilotGridItemProps {
  pilot: Pilot;
  onClick: (pilot: Pilot) => void;
}

const PilotGridItem: React.FC<PilotGridItemProps> = ({ pilot, onClick }) => {
  const { classes } = useStyles();

  return (
    <Card className={classes.root} onClick={() => onClick(pilot)}>
      <CardContent>
        <Typography variant="h6">{pilot.name}</Typography>
        <Typography variant="body2">
          {pilot.isFavorite ? "⭐ Favorite" : "Regular Pilot"}
        </Typography>
        <Typography variant="body2">
          Workouts: {pilot.workouts.length}
        </Typography>
        <Button onClick={() => onClick(pilot)}>View Flights</Button>
      </CardContent>
    </Card>
  );
};

export default PilotGridItem;
