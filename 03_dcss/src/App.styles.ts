import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(() => ({
    root: {
        textAlign: "left",
        height: "100vh",
        backgroundColor: "rgb(76, 76, 76)",
        overflowY: "auto"
    },
    content: {
        height: "calc(100vh - 170px)",
        overflowY:"auto",
        backgroundColor: "rgb(212, 199, 169)",
        width: "900px",
        maxWidth: "900px",
        boxShadow: "rgba(251, 240, 217) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
    }
}))
