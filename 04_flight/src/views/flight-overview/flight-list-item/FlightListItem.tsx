import {
  BookmarkAdded,
  BookmarkBorder,
  Delete,
  Star,
  StarOutline,
} from "@mui/icons-material";
import { useStyles } from "./FlightListItem.styles.ts";
import { Grid2 } from "@mui/material";
import { Flight } from "../../../common/models/workout.model.ts";

interface FlightListItemProps {
  flight: Flight;
  orderNr: number;
  onWatchedClick: (id: string) => void;
  onDelete: (id: string) => void;
  onEditFlight: () => void;
}
const FlightListItem: React.FC = (props: FlightListItemProps) => {
  const { classes } = useStyles();
  const { flight, orderNr, onDelete, onEditFlight } = props;

  return (
    <Grid2
      container
      direction={"row"}
      columnGap={"20px"}
      alignItems={"center"}
      padding={"10px 20px"}
      className={classes.root}
      onClick={() => {
        onEditFlight();
      }}
    >
      <Grid2 direction={"column"} width={"200px"}>
        <span>{`${orderNr}. ${flight.flightNumber}`}</span>
      </Grid2>
      <Grid2 direction={"column"} width={"100px"}>
        <span>{`${flight.type?.name}`}</span>
      </Grid2>
      <Grid2 direction={"column"} width={"50px"}>
        <span>{`${flight.duration}`}</span>
      </Grid2>
      <Grid2 direction={"column"} width={"40px"}>
        <span
          className={classes.iconDelete}
          onClick={(e) => {
            e.stopPropagation();
            flight.flightNumber && onDelete(flight.flightNumber);
          }}
        >
          <Delete />
        </span>
      </Grid2>
    </Grid2>
  );
};

export default FlightListItem;
