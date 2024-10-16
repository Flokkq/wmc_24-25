import Grid2 from "@mui/material/Grid2";
import FlightListItem from "./flight-list-item/FlightListItem";
import { useStyles } from "./FlightOverview.styles.ts";
import { Button, Paper } from "@mui/material";
import { Flight } from "../../common/models/workout.model.ts";

interface FlightOverviewProps {
  flights: Flight[];
  onChange: (updated: Flight[]) => void;
  onDeleteFlight: (id: string) => void;
  onOpenDetails: (flight?: Flight) => void;
}
const FlightOverview: React.FC = (props: FlightOverviewProps) => {
  const { classes } = useStyles();
  const { flights, onDeleteFlight, onChange, onOpenDetails } = props;

  const toggleWatched = (id: string): void => {
    const updated = flights.map((flight) =>
      flight.flightNumber === id
        ? { ...flight, isWatched: !flight.isCompleted }
        : flight,
    );
    console.log(updated);
    onChange(updated);
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
            onOpenDetails();
          }}
        >
          Add flight
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
          <Grid2 direction={"column"} width={"40px"} />
        </Grid2>
      </Grid2>
      {flights.map((flight, index) => {
        return (
          <FlightListItem
            key={flight.flightNumber}
            flight={flight}
            orderNr={index + 1}
            onWatchedClick={toggleWatched}
            onDelete={onDeleteFlight}
            onEditFlight={() => onOpenDetails(flight)}
          />
        );
      })}
    </Grid2>
  );
};

export default FlightOverview;
