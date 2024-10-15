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
  onFavouriteClick: (id: number) => void;
  onWatchedClick: (id: number) => void;
  onDelete: (id: number) => void;
  onEditFlight: () => void;
}
const FlightListItem: React.FC = (props: FlightListItemProps) => {
  const { classes } = useStyles();
  const {
    flight,
    orderNr,
    onWatchedClick,
    onDelete,
    onFavouriteClick,
    onEditFlight,
  } = props;

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
      <Grid2 direction={"column"} width={"40px"} style={{ width: "40px" }}>
        <span
          className={classes.icon}
          onClick={(e) => {
            e.stopPropagation();
            flight.id && onFavouriteClick(flight.id);
          }}
        >
          {flight.isFavorite ? <Star /> : <StarOutline />}
        </span>
      </Grid2>
      <Grid2 direction={"column"} width={"40px"}>
        <img className={classes.image} src={flight.imageUrl} alt={"pic"} />
      </Grid2>
      <Grid2 direction={"column"} width={"400px"}>
        <span>{`${orderNr}. ${flight.title}`}</span>
      </Grid2>
      <Grid2 direction={"column"} width={"70px"}>
        <span>{flight.year}</span>
      </Grid2>
      <Grid2 direction={"column"} width={"110px"}>
        <span
          className={classes.icon}
          onClick={(e) => {
            e.stopPropagation();
            flight.id && onWatchedClick(flight.id);
          }}
        >
          {flight.isWatched ? <BookmarkAdded /> : <BookmarkBorder />}
        </span>
      </Grid2>
      <Grid2 direction={"column"} width={"40px"}>
        <span
          className={classes.iconDelete}
          onClick={(e) => {
            e.stopPropagation();
            flight.id && onDelete(flight.id);
          }}
        >
          <Delete />
        </span>
      </Grid2>
    </Grid2>
  );
};

export default FlightListItem;

