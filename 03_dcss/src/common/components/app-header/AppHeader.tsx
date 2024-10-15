import {useStyles} from "./AppHeader.styles.ts";
import logo from "../../../assets/images/logo.png"


const AppHeader: React.FC = (props) => {
  const {classes} = useStyles()
 const {onclick} = props;
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img className={classes.image} onClick={() => {
        onclick()
        }} src={logo} alt={"logo"}/>
        <div className={classes.description}>
          Movie application that allows users to easily add and share movies with friends, family, and other movie
          enthusiasts
        </div>
      </div>
    </header>
  )
}

export default AppHeader