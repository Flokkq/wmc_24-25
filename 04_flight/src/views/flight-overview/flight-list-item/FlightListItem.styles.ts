import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(() => ({
  root: {
    ['&:hover']: {
      backgroundColor: "rgb(224, 215, 192)",
      cursor: "pointer"
    },
    ['&:nth-of-type(even)']: {
      backgroundColor: "rgb(224, 215, 192)"
    }
  },
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
