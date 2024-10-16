import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
  root: {
    cursor: "pointer",
    margin: "10px",
    padding: "20px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
}));
