import React from "react";
import logo from "../../../assets/images/logo.png"
import {useStyles} from "./AppHeader.styles.ts";
import {Link} from "react-router-dom"

const AppHeader: React.FC = () => {
  const {classes} = useStyles()

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to={"/"}>
          <img className={classes.image} src={logo} alt={"logo"}/>
        </Link>
        <div className={classes.description}>
          Movie application that allows users to easily add and share movies with friends, family, and other
          movie
          enthusiasts
        </div>
      </div>
    </header>
  )
}

export default AppHeader