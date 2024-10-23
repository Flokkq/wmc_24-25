import React from "react";
import {Link} from "react-router-dom"
import {Grid2} from "@mui/material";
import {useStyles} from "./Home.styles.ts";

const Home: React.FC = () => {
  const {classes} = useStyles();

  return (
    <Grid2 padding={"20px"}>
      <Link to="/movies">
        <div className={classes.box}>
          Movie overview
        </div>
      </Link>
    </Grid2>
  )
}

export default Home