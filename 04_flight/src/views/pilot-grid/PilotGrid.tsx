import React from "react";
import { Pilot } from "../common/models/pilot.model";
import { Grid } from "@mui/material";
import PilotGridItem from "./PilotGridItem";

interface PilotGridProps {
  pilots: Pilot[];
  onSelectPilot: (pilot: Pilot) => void;
}

const PilotGrid: React.FC<PilotGridProps> = ({ pilots, onSelectPilot }) => {
  return (
    <Grid container spacing={2} padding={2}>
      {pilots.map((pilot) => (
        <Grid item xs={12} sm={6} md={4} key={pilot.id}>
          <PilotGridItem pilot={pilot} onClick={onSelectPilot} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PilotGrid;
