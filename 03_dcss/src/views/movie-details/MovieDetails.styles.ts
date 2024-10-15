import { makeStyles } from "tss-react/mui"

export const useStyles = makeStyles()(() => ({
    root: {
        padding: "20px",
    },
    header: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    saveButton: {
        marginLeft: "10px",
        border: "1px solid white",
    },
    cancelButton: {
    },
    content: {
        padding: "20px 0",
        marginLeft: "50px"
    },
    imgContainer: {
        width: "40%",
    },
    image: {
        width: "260px",
    },
    formContainer: {
        width: "60%",
        padding: "0 20px",
    },
    formField: {
        width: "100%",
        marginTop: "15px",
    },
    formFieldLabel: {
        fontStyle: "italic",
        fontSize: "13px",
    }
}))
