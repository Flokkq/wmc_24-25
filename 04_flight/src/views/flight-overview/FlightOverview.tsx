import Grid2 from "@mui/material/Grid2";
import FlightListItem from "./flight-list-item/FlightListItem";
import { useStyles } from "./FlightOverview.styles.ts";
import { Button, Paper } from "@mui/material";
import { Flight } from "../../common/models/flight.model.ts";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import {
  BookmarkAdded,
  BookmarkBorder,
  Delete,
  Star,
  StarOutline,
} from "@mui/icons-material";

interface FlightOverviewProps {
  flights: Flight[];
  onChange: (updated: Flight[]) => void;
  onDeleteFlight: (id: number) => void;
  onOpenDetails: (flight?: Flight) => void;
}
const FlightOverview: React.FC = (props: FlightOverviewProps) => {
  const { classes } = useStyles();
  const { flights, onDeleteFlight, onChange, onOpenDetails } = props;

  /* FavouritClick */
  const toggleFavourite = (id: number): void => {
    const updated = flights.map((flight) =>
      flight.id === id ? { ...flight, isFavorite: !flight.isFavorite } : flight,
    );
    console.log(updated);
    onChange(updated);
  };

  const toggleWatched = (id: number): void => {
    const updated = flights.map((flight) =>
      flight.id === id ? { ...flight, isWatched: !flight.isWatched } : flight,
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
          <Grid2 direction={"column"} width={"70px"}>
            Year
          </Grid2>
          <Grid2 direction={"column"} width={"110px"}>
            Watched
          </Grid2>
          <Grid2 direction={"column"} width={"40px"} />
        </Grid2>
      </Grid2>
      {flights.map((flight, index) => {
        return (
          <FlightListItem
            key={flight.id}
            flight={flight}
            orderNr={index + 1}
            onFavouriteClick={toggleFavourite}
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
