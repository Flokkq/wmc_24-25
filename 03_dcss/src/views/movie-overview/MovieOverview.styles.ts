import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(() => ({
  icon: {
    cursor: "pointer",
    color: "rgb(163, 119, 18)"
  },
  iconDelete: {
    cursor: "pointer",
    color: "darkred"
  },
  image: {
    height: "50px",
    maxWidth: "40px"
  }
}))
