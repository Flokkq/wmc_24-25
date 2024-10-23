import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(() => ({
  header: {
    width: "100%",
    backgroundColor: "rgb(225, 219, 213)",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    zIndex: 99
  },
  container: {
    padding: "10px 30px 5px 30px",
    position: "relative"
  },
  image: {
    cursor: "pointer",
    height: "150px"
  },
  description: {
    color: "dimgray",
    fontStyle: "italic",
    display: "inline-block",
    paddingLeft: "30px",
    position: "absolute",
    bottom: "25px"
  }
}))
