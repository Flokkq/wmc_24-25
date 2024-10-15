import { useStyles } from "./AppHeader.styles.ts";
import logo from "../../../assets/images/flight2.webp";

const AppHeader: React.FC = (props) => {
  const { classes } = useStyles();
  const { onclick } = props;
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img
          className={classes.image}
          onClick={() => {
            onclick();
          }}
          src={logo}
          alt={"logo"}
        />
        <div className={classes.description}>
          Workout application that allows users to easily add and track
          workouts.
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
